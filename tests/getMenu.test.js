import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getMenuLang_id", () => {
    const params = idosell().getMenu.lang_id("pol").getParams();
    expect(params).toEqual({"lang_id":"pol"});
})