import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postEntriesVisibleOnSitesList", () => {
    const params = idosell().postEntries.langId("pol").shopId(1).shortDescription("entry").longDescription("My entry").visible("y").date("2025-01-01").titleLinkType("fullContentLink").title("Entry").visibleOnSitesList([{"siteId":"display_on_blog"}]).checkParams();
    expect(params).toEqual({"langs":[{"langId":"pol","shortDescription":"entry","longDescription":"My entry","title":"Entry"}],"shopId":1,"visible":"y","date":"2025-01-01","titleLinkType":"fullContentLink","visibleOnSitesList":[{"siteId":"display_on_blog"}]});
})

test("postEntriesNews", () => {
    const params = idosell().postEntries.langId("pol").shopId(1).shortDescription("entry").longDescription("My entry").visible("y").date("2025-01-01").titleLinkType("fullContentLink").title("Entry").blog().news().checkParams();
    expect(params).toEqual({"langs":[{"langId":"pol","shortDescription":"entry","longDescription":"My entry","title":"Entry"}],"shopId":1,"visible":"y","date":"2025-01-01","titleLinkType":"fullContentLink","visibleOnSitesList":[{"siteId":"display_on_blog"},{"siteId":"display_on_news"}]});
})