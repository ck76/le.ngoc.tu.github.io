import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // 确保 outDir 设置为你想要的输出目录，默认是 'dist'
    outDir: 'dist',
    // 如果你有更复杂的构建需求，确保其他相关配置也已经设置
  },

  // 如果有必要，设置基础公共路径
  base: './', // 对于相对路径，或者你可以设置特定的路径
  plugins: [react()],
});
