export function isIOS() {
  return (
    /ipad|iphone|ipod/i.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  );
}

export function getBestVoice(synth, lang) {
  if (!synth) return null;
  const voices = synth.getVoices();
  if (voices.length === 0) return null;

  const langPrefix = lang.split(/[-_]/)[0].toLowerCase();

  // 1. Filter by language
  let langVoices = voices.filter(
    (v) => v.lang.toLowerCase() === lang.toLowerCase(),
  );
  if (langVoices.length === 0) {
    langVoices = voices.filter(
      (v) => v.lang.split(/[-_]/)[0].toLowerCase() === langPrefix,
    );
  }

  if (langVoices.length === 0) return null;

  // 2. Priority list
  const priorities = ["natural", "google", "premium", "siri"];
  for (const p of priorities) {
    const found = langVoices.find((v) => v.name.toLowerCase().includes(p));
    if (found) return found;
  }

  // 3. Fallback
  const nonRobotic = langVoices.find(
    (v) => !v.name.toLowerCase().includes("microsoft"),
  );
  return nonRobotic || langVoices[0];
}

export function shouldShowAudioControls(synth) {
  const ua = navigator.userAgent.toLowerCase();

  // Block known in-app browsers and WebViews
  if (
    ua.includes("wv") ||
    ua.includes("webview") ||
    ua.includes("instagram") ||
    ua.includes("facebook") ||
    ua.includes("line")
  ) {
    return false;
  }

  // Also check if TTS is available
  if (!synth) {
    return false;
  }

  return true;
}

export function getAndroidIntentLink() {
  const isAndroid = /android/i.test(navigator.userAgent);
  if (!isAndroid) return "";

  const url = new URL(window.location.href);
  const urlNoScheme = url.toString().replace(/^https?:\/\//, "");
  const scheme = window.location.protocol.replace(":", "");

  return `intent://${urlNoScheme}#Intent;scheme=${scheme};package=com.android.chrome;end`;
}

export async function startAudioRecording(onDataAvailable, onStop) {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    // Determine the best supported MIME type.
    // iOS Safari supports audio/mp4 (AAC) but NOT audio/webm, so check iOS first.
    let mimeType = "";
    if (typeof MediaRecorder.isTypeSupported === "function") {
      const candidates = isIOS()
        ? ["audio/mp4", "audio/aac", ""]
        : ["audio/webm;codecs=opus", "audio/webm", "audio/mp4", ""];
      for (const type of candidates) {
        if (type === "" || MediaRecorder.isTypeSupported(type)) {
          mimeType = type;
          break;
        }
      }
    }

    const options = mimeType ? { mimeType } : {};
    const mediaRecorder = new MediaRecorder(stream, options);
    // Read back the actual MIME type the recorder chose (may differ from requested)
    const recordingMimeType = mediaRecorder.mimeType || mimeType || "audio/webm";

    mediaRecorder.ondataavailable = onDataAvailable;
    mediaRecorder.onstop = () => {
      onStop(recordingMimeType);
      // Stop all tracks in the stream to release the mic
      stream.getTracks().forEach((track) => track.stop());
    };

    // Use a short timeslice (250ms) so we get frequent chunks.
    // This is especially important on iOS where a single ondataavailable
    // event at the end can be missed or empty for very short recordings.
    mediaRecorder.start(250);
    return mediaRecorder;
  } catch (err) {
    console.error("Error starting recording:", err);
    throw new Error("Could not access microphone. Please check permissions.");
  }
}
