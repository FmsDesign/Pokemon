import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Caminho base para o GitHub Pages (nome do repositório)
  base: '/Pokemon/',
  // 💡 NOVO: Altera a pasta de saída de 'dist' para 'docs'
  build: {
    outDir: 'docs',
  },
});
