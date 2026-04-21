const { defineConfig } = require("vite");
const react = require("@vitejs/plugin-react");
const prerender = require("vite-plugin-prerender");
const path = require("path");

module.exports = defineConfig({
  plugins: [react(),],
  server: {
    fs: {
      allow: ["."],
    },
  },
});