// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, ".", "src") }],
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [], // Empty external array to include everything
    },
  },

  define: {
    "process.env": process.env,
  },
});
