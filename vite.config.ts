import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true // 打包完成后自动打开浏览器，显示产物体积报告
    })
  ],
  server: {
    open: true
  },
  base: './' //打包路径变为相对路径,用liveserver打开
})
