import React, { useEffect } from "react";
import { useHistory, useLocation } from "@docusaurus/router";
import { useDocsSidebar } from "@docusaurus/plugin-content-docs/client";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import DocItem from "@theme-original/DocItem";
import DocScopeHydration from "@site/src/components/DocScopeHydration";
import GiscusComments from "./GiscusComments";
import { useDocScopeFilter } from "@site/src/context/DocScopeFilterContext";
import { shouldShowDoc, findFirstVisibleDoc } from "@site/src/context/sidebar-scope-config";
import { isMultiInstanceDocsRoute } from "@site/src/utils/docs-route-utils";

export default function DocItemWrapper(props) {
  const { siteConfig, i18n } = useDocusaurusContext();
  const { version, product } = useDocScopeFilter();
  const history = useHistory();
  const location = useLocation();
  const sidebar = useDocsSidebar();
  const homeUrl = useBaseUrl("/");

  const docId = props?.content?.metadata?.id || "";

  const skipSidebarScope = isMultiInstanceDocsRoute(
    location.pathname,
    siteConfig.baseUrl,
    i18n.currentLocale,
    i18n.defaultLocale,
  );

  const visible = skipSidebarScope || shouldShowDoc(docId, version, product);

  useEffect(() => {
    if (skipSidebarScope || visible || !sidebar?.items) {
      return;
    }
    const firstDocHref = findFirstVisibleDoc(sidebar.items, version, product);
    if (firstDocHref) {
      const currentSearch = window.location.search;
      history.replace(firstDocHref + currentSearch);
    } else {
      history.replace(`${homeUrl}${location.search}${location.hash}`);
    }
  }, [visible, history, sidebar, skipSidebarScope, homeUrl, location.search, location.hash]);

  if (!visible) {
    return null;
  }

  return (
    <>
      <DocScopeHydration />
      <DocItem {...props} />
      <GiscusComments />
    </>
  );
}
