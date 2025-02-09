import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    minify: 'esbuild',
    chunkSizeWarningLimit: 2000,
  },
  server: {
    port: 3000, // Optional: Set a custom port
  },
  base: "/", // Ensures correct base path for Netlify
});
