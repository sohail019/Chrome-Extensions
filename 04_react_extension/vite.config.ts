import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import webExtension from "vite-plugin-web-extension";

// Export Vite config
export default defineConfig({
  plugins: [
    react(),
    webExtension({
      manifest: "manifest.json",
    }),
  ],
  build: {
    outDir: "dist", // Output directory
    rollupOptions: {
      input: {
        popup: "src/popup.html", // Entry point for popup
        background: "src/background.ts", // Entry point for background script
      },
      output: {
        format: "es", // ES Module format for code-splitting
        inlineDynamicImports: false, // Optional: Ensure dynamic imports are not inlined
        manualChunks: undefined, // Optional: Manually handle chunks
      },
    },
  },
});
