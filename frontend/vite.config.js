import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: true,
//     allowedHosts: [
//       '2953-2401-4900-1c43-d2d1-fce4-aa53-f588-fb2c.ngrok-free.app'
//     ]
//   }
// })