import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/e-plantShopping/", // Match your GitHub repository name
  plugins: [react()],
});