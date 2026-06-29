import { defineConfig } from 'vite';

export default defineConfig({
  root: 'frontend',
  server: {
    port: 8080,
    host: true, 
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  }
});
