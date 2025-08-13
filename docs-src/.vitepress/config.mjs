import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "",
  titleTemplate: false,
  description: "Documentation for DROPIFY®",
  lastUpdated: true,
  base: "/",
  cleanUrls: true,
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
    siteTitle: false,
    outline: [2, 4],
    search: {
      provider: "local",
    },
    nav: [
      {
        text: "Get App",
        link: "https://apps.shopify.com",
        target: "_blank",
      },
      { text: "Home", link: "/" },
      { text: "Docs", link: "/docs/" },
    ],
    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "Introducing Dropify®", link: "/about" },
          { text: "Documentation", link: "/docs/" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
      {
        text: "Core Features",
        items: [
          { text: "Dashboard", link: "/dashboard" },
          { text: "Design", link: "/design" },
          { text: "Settings", link: "/settings" },
          { text: "Customers", link: "/customers" },
        ],
      },
      {
        text: "Support",
        items: [
          { text: "Billing", link: "/billing" },
          { text: "FAQ", link: "/faq" },
        ],
      },
    ],
  },
  ignoreDeadLinks: true,
});
