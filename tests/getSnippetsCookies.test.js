import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getSnippetsCookiesId", () => {
    const params = idosell().getSnippetsCookies.id(1).checkParams();
    expect(params).toEqual({"id":1});
})