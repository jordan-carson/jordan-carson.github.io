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
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null
    })
  }

};

export default config;
