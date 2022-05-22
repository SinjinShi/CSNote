import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  "/",
  {
    text: "文章",
    icon: "note",
    prefix: "/sinjin/前端/",
    children: [
     "CSS","HTML","JS","SASS"
    ],
  },
]);
