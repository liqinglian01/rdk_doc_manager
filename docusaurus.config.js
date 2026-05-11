// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config
import "dotenv/config";
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "RDK 文档中心",
  favicon: "img/logo.png",
  url: "https://liqinglian01.github.io",
  // 必须与仓库名一致：GitHub Pages 项目站点路径为 /<repo>/
  baseUrl: "/rdk_doc_manager/",
  organizationName: "liqinglian01",
  projectName: "rdk_doc_manager",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  scripts: [
    {
      src: "https://hm.baidu.com/hm.js?24dd63cad43b63889ea6bede5fd1ab9e",
      async: true,
    },
    {
      src: "/rdk_doc_manage1/js/dify-config.js",
    },
    {
      src: "https://rdk.d-robotics.cc/embed.min.js",
      id: "MltLQTHPb5EeP7uz",
      defer: true,
    },
  ],

  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans", "en"],
    localeConfigs: {
      en: {
        label: "EN",
        htmlLang: "en",
      },
      "zh-Hans": {
        label: "CN",
        htmlLang: "zh-Hans",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        pages: { exclude: ["/imager/**", "**/dl/**"] },
        theme: { customCss: "./src/css/custom.css" },
        sitemap: { lastmod: "date" },
      }),
    ],
  ],

  markdown: {
    mermaid: true,
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "RDK 文档中心",
        logo: {
          alt: "地瓜机器人社区 logo",
          src: "img/logo.png",
          href: "https://d-robotics.cc/",
        },
        items: [
          {
            href: "https://github.com/D-Robotics",
            label: "GitHub",
            position: "right",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "友情链接",
            items: [
              {
                label: "古月居",
                href: "https://www.guyuehome.com/",
              },
            ],
          },
          {
            title: "联系我们",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/D-Robotics",
              },
              {
                label: "BiLiBiLi",
                href: (() => {
                  if (process.env.DOCUSAURUS_CURRENT_LOCALE === "en") {
                    return "https://www.youtube.com/@D-Robotics";
                  }
                  return "https://space.bilibili.com/437998606";
                })(),
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} D-Robotics.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  themes: ["@docusaurus/theme-mermaid"],
};

export default config;
