import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/yesid-portfolio/',
  }

  if (command !== 'serve') {
    config.base = '/yesid-portfolio/'
  }

  return config
})
