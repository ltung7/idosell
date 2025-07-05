import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postEntriesTitle", () => {
    const params = idosell().postEntries.langId("pol").shopId(1).shortDescription("entry").longDescription("My Entry").visible("y").date("2023-12-18").titleLinkType("fullContentLink").title("title").getParams();
    expect(params).toEqual({"langs":[{"langId":"pol","shortDescription":"entry","longDescription":"My Entry","title":"title"}],"shopId":1,"visible":"y","date":"2023-12-18","titleLinkType":"fullContentLink"});
})

test("postEntriesNews", () => {
    const params = idosell().postEntries.blog().news().getParams();
    expect(params).toEqual({"langs":[{}],"visibleOnSitesList":[{"siteId":"display_on_blog"},{"sizeId":"display_on_news"}]});
})