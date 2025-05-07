import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putSnippetsCookiesName", () => {
    const params = idosell().putSnippetsCookies.id(1).name("mycookie").getParams();
    expect(params).toEqual({"cookies":[{"id":1,"name":"mycookie"}]});
})