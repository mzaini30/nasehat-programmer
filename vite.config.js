import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { preprocess } from "svelte/compiler";
import { mdsvex } from "mdsvex";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      extensions: [".svelte", ".md"],
      preprocess: mdsvex({
        extensions: [".md"],
      }),
    }),
    legacy({
      renderModernChunks: false,
    }),
  ],
});
