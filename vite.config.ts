import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  plugins: [react()],
  assetsInclude: ["**/*.exe", "**/*.swf", "**/*.zip", "**/*.pcio"],
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    // Inlined assets become data URLs, which breaks downloads of small files.
    assetsInlineLimit: 0,
    rolldownOptions: {
      input: ["index.html", "404.html"],
    },
  },
});
