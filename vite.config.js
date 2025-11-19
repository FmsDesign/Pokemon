// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // 💡 NOVO NOME DO REPOSITÓRIO
  base: '/Pokemon/',
});
