import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  server:{
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    allowedHosts: ['772a-105-163-2-92.ngrok-free.app']

  }
});
