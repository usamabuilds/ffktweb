import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Fully optimized for Hostinger static hosting
export default defineConfig({
  base: "./", // ensures all asset paths work correctly under public_html or subdirectories
  plugins: [react()],
  build: {
    outDir: "dist", // default output folder
    assetsDir: "assets", // keeps JS/CSS/images organized
    emptyOutDir: true, // clears dist before each build
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
  },
});
