import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const viteConfig = defineConfig({
  plugins: [react()],
});

console.log('Vite Config:', viteConfig);

export default viteConfig;