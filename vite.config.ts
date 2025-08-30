import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [
        visualizer({
          open: true,
          filename: 'stat.html',
          template: 'treemap'
        })
      ]
    }
  },
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