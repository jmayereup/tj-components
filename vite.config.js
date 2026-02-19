import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

// Get all tj-*.js files from src/ as entry points
const entries = {};
const srcDir = resolve(__dirname, 'src');

fs.readdirSync(srcDir).forEach((file) => {
  if (file.startsWith('tj-') && file.endsWith('.js')) {
    const name = file.replace('.js', '');
    entries[name] = resolve(srcDir, file);
  }
});

// Add tj-quiz-element specifically
entries['tj-quiz-element'] = resolve(srcDir, 'tj-quiz-element/index.js');

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    lib: {
      entry: entries,
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: 'chunks/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
        manualChunks: undefined,
      },
    },
    assetsInlineLimit: 100000000, // Inline assets
  },
});
