import { sveltekit } from "@sveltejs/kit/vite";
// import VitePluginRestart from "vite-plugin-restart";// VitePluginRestart(),
import svgLoader from "vite-svg-loader";
// import { plugin as markdown } from 'vite-plugin-markdown'


/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    sveltekit(),
    svgLoader(),
    // markdown({ mode: ['html', 'toc']})
  ],
  server: {
    fs: {
      allow: [".."],
    },
  },
};

export default config;
