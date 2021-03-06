const path = require("path");
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/vue/",
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/main.js"),
      name: "MyLib",
      fileName: (format) => {
        console.log(format, "---------------------------------");

        return `my-lib.${format}.js`;
      },
      formats: ["umd"],
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  server: {
    port: 8082,
  },
});
