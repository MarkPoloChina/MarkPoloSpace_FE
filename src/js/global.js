const cosStaticUrlBase = "https://cloud.markpolo.cn/static";
// const cosIHSUrlBase = ''
const isStable = false;
export default {
  url: {
    covers: [
      `${cosStaticUrlBase}/img/83760346_p0.jpg`,
      `${cosStaticUrlBase}/img/86616238_p0.jpg`,
      `${cosStaticUrlBase}/img/82336808_p0_d.jpg`,
      `${cosStaticUrlBase}/img/90014887_p0.jpg`,
    ],
    logo: cosStaticUrlBase + "/img/logo1.png",
    avatar: cosStaticUrlBase + "/img/HS_Lee.jpg",
    beian: cosStaticUrlBase + "/img/beian.png",
    background: cosStaticUrlBase + "/img/90773916_p1.jpg",
    topImg: [
      `${cosStaticUrlBase}/img/53061497_p0.jpg`,
      `${cosStaticUrlBase}/img/81137334_p0.jpg`,
    ],
    email: "26239122xzw@gmail.com",
    twitter: "https://twitter.com/MarkXiong16",
    github: "https://github.com/MarkPoloChina",
  },
  version: {
    frontend: "3.0.0",
    lastUpdate: "",
    backend: "1.1.0",
    type: isStable ? "stable" : "latest",
  },
  color: {
    theme_main_color_1: "#2e89c0",
  },
};
