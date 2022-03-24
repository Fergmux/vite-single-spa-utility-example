import vue from "@vitejs/plugin-vue";

export default {
  rollupOptions: {
    input: "src/main.js",
    format: "system",
    preserveEntrySignatures: true,
  },
  base: "http://localhost:3000",
  optimizeDeps: {
    exclude: ["@fergmux/vite-single-spa-utility"],
  },
  build: {
    rollupOptions: {
      external: ["@fergmux/vite-single-spa-utility"],
    },
  },
  plugins: [
    vue({
      template: {
        transformAssetUrls: {
          base: "/src",
        },
      },
    }),
  ],
};
