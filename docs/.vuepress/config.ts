import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({

  lang: "zh-CN",
  title: "SINJIN Note",
  description: "学习笔记",

  base: "/note/",

  theme,
  plugins: [
    searchPlugin({
      // ...
  
      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
    })
  ],
  
});
