import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  author: {
    name: "SINJIN"
  },

  iconAssets: "//at.alicdn.com/t/font_2410206_h4r1xw8ppng.css",
  iconPrefix: "iconfont icon-",

  logo: "/logo.png",

  repo: "sinjinshi/note",

  docsDir: "/docs",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "事已至此，先吃饭吧",

  displayFooter: true,

  pageInfo: ["Author", "Date", "Tag", "ReadingTime"],

  plugins: {
    blog: {
      autoExcerpt: true,
    },
  },
});
