import idosell from "./dist/index"
import { expect, test } from "vitest"

test("deleteSnippetsCookiesId", () => {
    const params = idosell().deleteSnippetsCookies.id(1).checkParams();
    expect(params).toEqual({"id":1});
})