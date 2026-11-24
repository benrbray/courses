// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import expressiveCode from 'astro-expressive-code';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'; 

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: 'https://benrbray.com',
  base: '/courses/2027spring',
  build: {
    format: "file"
  },
  integrations: [
    solidJs(),
    expressiveCode({
      frames: { showCopyToClipboardButton: false },
      plugins: [pluginLineNumbers()],
      defaultProps: {
        // Optional: Force line numbers on all code blocks automatically
        showLineNumbers: true, //
      },
      themes: [
        "catppuccin-latte",
        "github-light-default",
        "one-light", "one-dark-pro", "solarized-dark",
        "dracula",
        "material-theme", "material-theme-darker", "material-theme-lighter",
        "material-theme-ocean", "material-theme-palenight",
      ],
      shiki: {
        // injectLangsIntoNestedCodeBlocks: true,
        bundledLangs: ["css", "html", "ts", "js", "json", "tsx", "jsx", "bash", "typst", "wasm", "wit", "toml", "markdown", "python", "rust", "haskell", "lean", "coq", "bibtex", "docker", "java", "c", "cpp"],
      },
      styleOverrides: {
        codeFontFamily: "DejaVu Sans Mono"
      }
    }),
    mdx(), 
  ],
  markdown: {
    shikiConfig: {
      // theme: "github-light-default",
      theme: "catppuccin-latte"
      // theme: "material-theme"
      // themes: {
      //   light: "material-theme-darker",
      //   dark: "material-theme",
      //   // light: "one-light",
      //   // dark: "one-dark-pro"
      // }
    }
  },
  vite: {
    css: {
      modules: {
        localsConvention: "camelCase"
      }
    },
  }
});