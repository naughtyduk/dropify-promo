import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DROPIFY® Docs",
  description: "Documentation for DROPIFY®",
  lastUpdated: true,
  base: "/",
  head: [
    ["meta", { name: "theme-color", content: "#151515" }],
    ["meta", { name: "msapplication-TileColor", content: "#151515" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "DROPIFY®" }],
    ["meta", { name: "application-name", content: "DROPIFY®" }],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon-96x96.png",
        sizes: "96x96",
      },
    ],
    ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    ["link", { rel: "shortcut icon", href: "/favicon.ico" }],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    ],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
  ],
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
      { text: "Home", link: "/" },
      { text: "Docs", link: "/docs" },
    ],
    sidebar: false,
  },
  ignoreDeadLinks: true,
});
