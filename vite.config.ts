/// <reference types="vitest" />
import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  define: {
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
  },
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    },
  },
  test: {
    include: ['__tests__/vitest/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    exclude: ['__tests__/e2e/*'],
  }
});
