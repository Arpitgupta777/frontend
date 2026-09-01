import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  
  // server: {
  //   proxy: {
  //     '/api': 'https://backend-4o41.onrender.com/'
  //   }
  // },

  plugins: [react()],
})
