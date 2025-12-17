import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),  tailwindcss()],
  server: {
    proxy: {
      "/openaq": {
        target: "https://api.openaq.org",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/openaq/, "")
      }
    }
  },
})

