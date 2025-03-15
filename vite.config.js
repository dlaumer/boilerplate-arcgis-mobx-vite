import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/boilerplate-arcgis-mobx-vite/", // IMPORTANT: Set this to your repo name
  build: {
    outDir: "dist",
  },
  define: {
    "process.env": {},
  },
  optimizeDeps: {
    exclude: ["@arcgis/core"],
  },
})
