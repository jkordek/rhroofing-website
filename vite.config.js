import imageOptimizer from "vite-plugin-image-optimizer";

export default {
  plugins: [
    imageOptimizer({
      webp: { quality: 80 }
    })
  ]
};
