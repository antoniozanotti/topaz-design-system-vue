import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import UnoCSS from "unocss/vite";
import path, { dirname } from "node:path";
import dts from "vite-plugin-dts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ["vue"],
      dts: "src/auto-imports.d.ts",
      dirs: ["src/types/**"],
      vueTemplate: true,
    }),

    // see uno.config.ts for config
    UnoCSS(),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      dts: true,
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      "~": `${path.resolve(__dirname, "src")}`,
    },
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "topaz-vue",
      fileName: "index",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
