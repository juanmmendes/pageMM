import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/pageMM/',   // IMPORTANTE para funcionar no GitHub Pages do repositório
})
