import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // Ensure correct base path for Netlify
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // or "modern"
      },
    },
  },
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        format: "es", // Ensure ES module format
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
        manualChunks: {
          vendor: ["react", "react-dom"], // Split vendor chunks for caching
        },
      },
    },
  },
  define: {
    global: {}, // Support for some npm packages that expect a global object
  },
  server: {
    port: 3001,
    open: true,
  },
  optimizeDeps: {
    esbuildOptions: {
      target: "esnext", // Ensure compatibility
    },
  },
});
