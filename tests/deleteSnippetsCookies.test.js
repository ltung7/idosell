import idosell from "./dist/index"
import { expect, test } from "vitest"

test("deleteSnippetsCookiesId", () => {
    const params = idosell().deleteSnippetsCookies.id(1).getParams();
    expect(params).toEqual({"id":1});
})