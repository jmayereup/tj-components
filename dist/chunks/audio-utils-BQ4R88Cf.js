function u(t, o) {
  if (!t) return null;
  const i = t.getVoices();
  if (i.length === 0) return null;
  const n = o.split(/[-_]/)[0].toLowerCase();
  let e = i.filter(
    (r) => r.lang.toLowerCase() === o.toLowerCase()
  );
  if (e.length === 0 && (e = i.filter(
    (r) => r.lang.split(/[-_]/)[0].toLowerCase() === n
  )), e.length === 0) return null;
  const c = ["natural", "google", "premium", "siri"];
  for (const r of c) {
    const a = e.find((d) => d.name.toLowerCase().includes(r));
    if (a) return a;
  }
  return e.find(
    (r) => !r.name.toLowerCase().includes("microsoft")
  ) || e[0];
}
function l(t) {
  const o = navigator.userAgent.toLowerCase();
  return !(o.includes("wv") || o.includes("webview") || o.includes("instagram") || o.includes("facebook") || o.includes("line") || !t);
}
function f() {
  if (!/android/i.test(navigator.userAgent)) return "";
  const i = new URL(window.location.href).toString().replace(/^https?:\/\//, ""), n = window.location.protocol.replace(":", "");
  return `intent://${i}#Intent;scheme=${n};package=com.android.chrome;end`;
}
async function p(t, o, i = 1e3) {
  try {
    const n = await navigator.mediaDevices.getUserMedia({ audio: !0 });
    let e = "audio/webm";
    typeof MediaRecorder.isTypeSupported == "function" && (MediaRecorder.isTypeSupported(e) || (e = "audio/mp4", MediaRecorder.isTypeSupported(e) || (e = "")));
    const c = e ? { mimeType: e } : {}, s = new MediaRecorder(n, c), r = s.mimeType || e || "audio/webm";
    return s.ondataavailable = t, s.onstop = () => {
      o(r), n.getTracks().forEach((a) => a.stop());
    }, s.start(i), s;
  } catch (n) {
    throw console.error("Error starting recording:", n), new Error("Could not access microphone. Please check permissions.");
  }
}
export {
  l as a,
  f as b,
  u as g,
  p as s
};
