import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

// Get all tj-*.js files from src/ as entry points
const entries = {};
const srcDir = resolve(__dirname, 'src');

fs.readdirSync(srcDir).forEach((folder) => {
  const folderPath = resolve(srcDir, folder);
  if (fs.statSync(folderPath).isDirectory()) {
    const indexPath = resolve(folderPath, 'index.js');
    if (fs.existsSync(indexPath)) {
      entries[folder] = indexPath;
    }
  }
});


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
      plugins: [
        {
          name: 'copy-html',
          closeBundle() {
            const distDir = resolve(__dirname, 'dist');
            const demoDir = resolve(distDir, 'demo');
            const srcDir = resolve(__dirname, 'src');

            // Ensure demo directory exists
            if (!fs.existsSync(demoDir)) {
              fs.mkdirSync(demoDir, { recursive: true });
            }

            // 1. Copy root HTML files
            const rootFiles = ['index.html', 'guide.html', 'test-config.html', 'test-config2.html'];
            rootFiles.forEach(file => {
              const srcPath = resolve(__dirname, file);
              if (fs.existsSync(srcPath)) {
                let content = fs.readFileSync(srcPath, 'utf-8');
                
                // Update links in index.html to point to demo/ folder
                if (file === 'index.html') {
                  content = content.replace(/href="src\/tj-([^/]+)\/test-([^"]+)\.html"/g, 'href="demo/test-$2.html"');
                }
                
                fs.writeFileSync(resolve(distDir, file), content);
              }
            });

            // 2. Find and copy test-*.html files from src to dist/demo/
            const findHtmlFiles = (dir) => {
              const files = fs.readdirSync(dir);
              files.forEach(file => {
                const fullPath = resolve(dir, file);
                if (fs.statSync(fullPath).isDirectory()) {
                  findHtmlFiles(fullPath);
                } else if (file.startsWith('test-') && file.endsWith('.html')) {
                  let content = fs.readFileSync(fullPath, 'utf-8');
                  
                  // Extract component name from directory
                  const componentName = dir.split('/').pop();
                  
                  // Update script tags to point to bundled JS (one level up)
                  // Handles various attribute orders and paths like ./index.js, /src/.../index.js, etc.
                  content = content.replace(/<script\b([^>]*)src="[^"]*index\.js"([^>]*)>/g, (match, p1, p2) => {
                    return `<script${p1}src="../${componentName}.js"${p2}>`;
                  });
                  
                  // Update back link to home (one level up)
                  content = content.replace(/href="\/"/g, 'href="../index.html"');

                  fs.writeFileSync(resolve(demoDir, file), content);
                }
              });
            };

            findHtmlFiles(srcDir);
          }
        }
      ]
    },
    assetsInlineLimit: 100000000, // Inline assets
  },
});
