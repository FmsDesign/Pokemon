// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // 💡 O nome do repositório deve ser a base
  base: '/Pokemon-Quiz/',
});
