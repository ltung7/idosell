import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postSnippetsCookiesDeliverer", () => {
    const params = idosell().postSnippetsCookies.snippetId(2).deliverer("custom").checkParams();
    expect(params).toEqual({"cookies":[{"snippetId":2,"deliverer":"custom"}]});
})