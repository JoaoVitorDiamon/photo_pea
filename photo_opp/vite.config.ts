import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    https: {
        key: fs.readFileSync('./ssl/server.key'),
        cert: fs.readFileSync('./ssl/server.cert'),
      },
    allowedHosts: [
      '6622-2804-14d-78a6-8fae-fc84-852-1807-628c.ngrok-free.app'
    ]
  }
})
