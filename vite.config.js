import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/pbl_fact-or-quack/",
  plugins: [react()],
})