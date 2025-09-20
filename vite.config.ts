import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: { // 👈 2. Add the resolve option
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});