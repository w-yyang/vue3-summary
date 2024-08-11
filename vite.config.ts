import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    Vue()
  ],
  server: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        rewrite: (path: string) => path
      }
    }
  }
})