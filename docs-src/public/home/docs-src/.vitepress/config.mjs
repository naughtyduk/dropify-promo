import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DROPIFY® Docs",
  description: "Documentation for DROPIFY®",
  lastUpdated: true,
  base: "/",
  head: [["meta", { name: "theme-color", content: "#0a0a0a" }]],
  themeConfig: {
    logo: {
      light: "/assets/Dropify Logo Dark.svg",
      dark: "/assets/Dropify Logo Light.svg",
    },
    outline: [2, 4],
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/home/" },
      { text: "Docs", link: "/getting-started" },
    ],
    sidebar: [
      {
        text: "Getting Started",
        items: [{ text: "Introduction", link: "/getting-started" }],
      },
    ],
  },
  ignoreDeadLinks: true,
});
