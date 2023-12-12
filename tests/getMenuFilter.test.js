import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getMenuFilterLanguageId", () => {
    const params = idosell().getMenuFilter.languageId("pol").getParams();
    expect(params).toEqual({"languageId":"pol"});
})