/**
 * 与 docusaurus.config.js 中 @docusaurus/plugin-content-docs 的 routeBasePath 保持一致。
 * 主手册（preset docs）使用 routeBasePath: "/"，其余为独立文档插件路由前缀。
 */
export const MULTI_INSTANCE_DOC_PREFIXES = new Set([
  "sdk_doc",
  "accessories_doc",
  "toolchain_doc",
  "samples_doc",
  "model_zoo_doc",

  "tros_doc",
  "xburn_doc",
  "rdk_s",
]);

/**
 * 当前路径是否属于「非主手册」的独立 docs 插件（如 sdk_doc/intro）。
 * @param {string} pathname window.location 风格，含 baseUrl
 * @param {string} baseUrl 站点 baseUrl，如 "/rdk_x_doc/"
 * @param {string} currentLocale
 * @param {string} defaultLocale
 */
export function isMultiInstanceDocsRoute(pathname, baseUrl, currentLocale, defaultLocale) {
  const base = (baseUrl || "/").replace(/\/$/, "");
  let rest = pathname || "/";
  if (base && rest.startsWith(base)) {
    rest = rest.slice(base.length) || "/";
  }
  const parts = rest.split("/").filter(Boolean);
  let i = 0;
  if (parts[i] === currentLocale && currentLocale !== defaultLocale) {
    i += 1;
  }
  const first = parts[i];
  return Boolean(first && MULTI_INSTANCE_DOC_PREFIXES.has(first));
}
