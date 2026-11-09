import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

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
  test: {
    environment: "jsdom",
    include: ["**/*.test.{ts,tsx}"],
    setupFiles: ["./test/setup.ts"],
    css: {
      include: /.+/,
      // Readable class names let tests check which button is the primary one.
      modules: { classNameStrategy: "non-scoped" },
    },
  },
});
