// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })




// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    proxy: {
      '/service-worker.js': {
        target: 'http://127.0.0.1:5173', // Use IPv4 loopback address
        changeOrigin: true,
        secure: false,
      },
    },
  },
  base: './',
  mode: 'development',
});