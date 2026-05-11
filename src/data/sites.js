/**
 * 文档中心唯一配置源（分类 + 站点）。
 *
 * 维护规范：
 * - 新增/删除分类：修改 DOC_CENTER_CONFIG.categories
 * - 新增/删除文档入口：修改 DOC_CENTER_CONFIG.entries
 * - 首页、分组锚点、卡片数据均由该配置自动派生
 * - pendingRelease: true 时点击卡片仅提示「文档待上架」，不跳转（RDK 用户手册 / TROS / Model Zoo / Magicbox / RDK Studio 等正常外链）
 */
const DOC_CENTER_CONFIG = {
  categories: [
    {
      id: "products",
      anchor: "products",
      accent: "#2e8555",
      zh: {
        title: "RDK 用户手册",
        subtitle: "Hardware / 系统烧录 / 配件清单 / 下载资源 / 附录 / FAQ",
      },
      en: {
        title: "RDK User Manual",
        subtitle: "Hardware / System Installation / Accessories / Download Resources / Appendix / FAQ",
      },
    },
    {
      id: "system-software",
      anchor: "system-software",
      accent: "#1f6feb",
      zh: {
        title: "SDK 用户手册",
        subtitle: "SDK 开发 / 部署 / 模型转换",
      },
      en: {
        title: "SDK User Manual",
        subtitle: "SDK Development / Deployment / Model Conversion",
      },
    },
    {
      id: "robot-app",
      anchor: "robot-app",
      accent: "#9333ea",
      zh: {
        title: "机器人应用",
        subtitle: "TROS · 各平台同步发版",
      },
      en: {
        title: "Robot Applications",
        subtitle: "TROS · Synchronous release across platforms",
      },
    },
    {
      id: "model-zoo",
      anchor: "model-zoo",
      accent: "#f97316",
      zh: {
        title: "算法应用 · Model Zoo",
        subtitle: "官方模型仓库入口（外链）",
      },
      en: {
        title: "Algorithm Applications · Model Zoo",
        subtitle: "Official model repository entrance (external link)",
      },
    },
    {
      id: "examples",
      anchor: "examples",
      accent: "#0ea5e9",
      zh: {
        title: "应用开发示例",
        subtitle: "覆盖 X3 / X5 / S100 / S600",
      },
      en: {
        title: "Application Development Examples",
        subtitle: "Covering X3 / X5 / S100 / S600",
      },
    },
    {
      id: "accessories",
      anchor: "accessories",
      accent: "#14b8a6",
      zh: {
        title: "产品与配件",
        subtitle: "IMU / Stereo Camera 系列",
      },
      en: {
        title: "Products & Accessories",
        subtitle: "IMU / Stereo Camera Series",
      },
    },
    {
      id: "software",
      anchor: "software",
      accent: "#db2777",
      zh: {
        title: "软件",
        subtitle: "开发 / 烧录工具",
      },
      en: {
        title: "Software",
        subtitle: "Development / Burning Tools",
      },
    },
    {
      id: "toolchain",
      anchor: "toolchain",
      accent: "#dc2626",
      zh: {
        title: "算法工具链",
        subtitle: "模型转换 / 量化 / 部署",
      },
      en: {
        title: "Algorithm Toolchain",
        subtitle: "Model Conversion / Quantization / Deployment",
      },
    },
  ],
  entries: [
    {
      id: "product-rdk-manual",
      categoryId: "products",
      href: "https://liqinglian01.github.io/rdk_x_doc1/RDK",
      zh: {
        title: "RDK X 系列用户手册",
        description: "RDK X3/X5 用户手册",
        tags: ["用户手册"],
      },
      en: {
        title: "RDK X3/X5 User Manual",
        description: "RDK X3/X5 Documentation",
        href: "https://liqinglian01.github.io/rdk_x_doc1/en/RDK",
        tags: ["User Manual"],
      },
    },
    {
      id: "system-software-sdk",
      categoryId: "system-software",
      pendingRelease: true,
      href: "https://developer.d-robotics.cc/sdk_doc/intro",
      zh: {
        title: "SDK",
        description: "SDK 用户手册。",
        tags: ["系统软件"],
      },
      en: {
        title: "SDK",
        description: "SDK Documentation.",
        href: "https://developer.d-robotics.cc/sdk_doc/en/intro",
        tags: ["System Software"],
      },
    },
    {
      id: "tros",
      categoryId: "robot-app",
      href: "https://liqinglian01.github.io/tros_x_doc/tros",
      zh: {
        title: "TROS",
        description: "面向机器人应用开发的用户手册。",
        tags: ["多平台"],
      },
      en: {
        title: "TROS",
        description: "Unified framework for robot application development, synchronous release across platforms.",
        href: "https://liqinglian01.github.io/tros_x_doc/en/tros",
        tags: ["Multi-platform"],
      },
    },
    {
      id: "model-zoo-hub",
      categoryId: "model-zoo",
      href: "https://liqinglian01.github.io/model_zoo_x_doc/model_zoo_intro",
      zh: {
        title: "Model Zoo X 系列",
        description: "Model Zoo 用户手册。",
      },
      en: {
        title: "Model Zoo X Series",
        description: "Model Zoo sub-site (link aggregation page).",
        href: "https://liqinglian01.github.io/model_zoo_x_doc/en/model_zoo_intro/",
      },
    },
    {
      id: "examples",
      categoryId: "examples",
      pendingRelease: true,
      href: "https://developer.d-robotics.cc/samples_doc/intro",
      zh: {
        title: "应用开发示例",
        description: "RDK 示例集合。",
      },
      en: {
        title: "Application Development Examples",
        description: "RDK X3 example collection.",
        href: "https://developer.d-robotics.cc/samples_doc/en/intro",
      },
    },
    {
      id: "magicbox",
      categoryId: "accessories",
      zh: {
        title: "RDK Magicbox 文档",
        description: "Magicbox 用户手册",
        href: "https://developer.d-robotics.cc/magicbox_doc/magicbox",
      },
      en: {
        title: "RDK Magicbox Documentation",
        description: "Magicbox product documentation.",
        href: "https://developer.d-robotics.cc/magicbox_doc/en/magicbox",
      },
    },
    {
      id: "accessories",
      categoryId: "accessories",
      pendingRelease: true,
      href: "https://developer.d-robotics.cc/accessories_doc/intro",
      zh: {
        title: "配件文档",
        description: "RDK IMU Module / Stereo Camera Module / GS130W / GS130WI。",
      },
      en: {
        title: "Accessories Documentation",
        description: "RDK IMU Module / Stereo Camera Module / GS130W / GS130WI.",
        href: "https://developer.d-robotics.cc/accessories_doc/en/intro",
      },
    },
    {
      id: "software-rdk-studio",
      categoryId: "software",
      zh: {
        title: "RDK Studio",
        description: "官方集成开发工具。",
        href: "https://developer.d-robotics.cc/rdk_studio_doc/category/1-product-intro",
      },
      en: {
        title: "RDK Studio",
        description: "Official integrated development tool.",
        href: "https://developer.d-robotics.cc/rdk_studio_doc/en/category/1-product-intro",
      },
    },
    {
      id: "software-xburn",
      categoryId: "software",
      pendingRelease: true,
      href: "https://developer.d-robotics.cc/xburn_doc/intro",
      zh: {
        title: "Xburn",
        description: "系统烧录工具。",
      },
      en: {
        title: "Xburn",
        description: "System burning tool.",
        href: "https://developer.d-robotics.cc/xburn_doc/en/intro",
      },
    },
    {
      id: "algorithm-toolchain",
      categoryId: "toolchain",
      pendingRelease: true,
      href: "https://developer.d-robotics.cc/toolchain_doc/intro",
      zh: {
        title: "算法工具链",
        description: "模型转换 / 量化 / 精度调优 / 部署。",
      },
      en: {
        title: "Algorithm Toolchain",
        description: "Model conversion / quantization / precision tuning / deployment.",
        href: "https://developer.d-robotics.cc/toolchain_doc/en/intro",
      },
    },
  ],
};

function toGroup(category, locale) {
  const i18n = category[locale];
  return {
    id: category.id,
    anchor: category.anchor,
    title: i18n.title,
    subtitle: i18n.subtitle,
    accent: category.accent,
  };
}

function toSite(entry, locale) {
  const i18n = entry[locale];
  const href = i18n.href || entry.href;
  return {
    id: entry.id,
    group: entry.categoryId,
    title: i18n.title,
    description: i18n.description,
    href,
    tags: i18n.tags || [],
    external: /^https?:\/\//.test(href),
    pendingRelease: Boolean(entry.pendingRelease),
  };
}

export const groups = DOC_CENTER_CONFIG.categories.map((item) => toGroup(item, "zh"));
export const groupsEn = DOC_CENTER_CONFIG.categories.map((item) => toGroup(item, "en"));
export const sites = DOC_CENTER_CONFIG.entries.map((item) => toSite(item, "zh"));
export const sitesEn = DOC_CENTER_CONFIG.entries.map((item) => toSite(item, "en"));

export function sitesByGroup(sitesData) {
  const targetSites = sitesData || sites;
  const targetGroups = sitesData === sitesEn ? groupsEn : groups;

  const grouped = {};
  for (const g of targetGroups) grouped[g.id] = [];
  for (const s of targetSites) {
    if (!grouped[s.group]) grouped[s.group] = [];
    grouped[s.group].push(s);
  }
  return grouped;
}
