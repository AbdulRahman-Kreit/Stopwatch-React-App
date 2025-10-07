import { defineConfig } from 'vite'
import  process  from 'node:process'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/stopwatch-react-app/',
})
