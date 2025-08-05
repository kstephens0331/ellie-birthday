// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // optional cleaner imports
    },
  },
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0, // disable base64 inlining for large images
    chunkSizeWarningLimit: 1000, // suppress warning for your large bundle
  },
  server: {
    open: true,
  },
  preview: {
    port: 4173,
    strictPort: true,
  },
  base: '/', // ensures SPA fallback works on reloads like /guestbook
});
