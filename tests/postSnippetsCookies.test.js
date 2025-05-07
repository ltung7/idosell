import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postSnippetsCookiesDeliverer", () => {
    const params = idosell().postSnippetsCookies.snippetId(2).deliverer("custom").getParams();
    expect(params).toEqual({"cookies":[{"snippetId":2,"deliverer":"custom"}]});
})