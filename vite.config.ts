import path from "node:path";
import url from "node:url";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite";

const DIRECTORY = path.dirname(url.fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwind()],
  resolve: {
    alias: {
      "@": path.resolve(DIRECTORY, "./src"),
    },
  },
});
