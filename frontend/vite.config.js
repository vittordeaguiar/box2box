import { fileURLToPath, URL } from 'node:url';
// import fs from 'fs';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: '0.0.0.0',
    // https: {
    //   key: fs.readFileSync('./ssl/key.pem'),
    //   cert: fs.readFileSync('./ssl/cert.pem'),
    // },
    // outras configurações do servidor, se necessário
  },
});