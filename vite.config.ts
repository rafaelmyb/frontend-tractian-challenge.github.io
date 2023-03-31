import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/frontend-tractian-challenge.github.io/",
  plugins: [react()],
})
