import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Configuración de Vite con base relativa para GitHub Pages
export default defineConfig({
  plugins:[react(), tailwindcss()],
  base: './',
})
