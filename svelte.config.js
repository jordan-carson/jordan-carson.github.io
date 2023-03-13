import sveltePreprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const config = {
  preprocess: [
    vitePreprocess(),
    sveltePreprocess({
      // postcss: true,
    }),
  ],
};

export default config;
