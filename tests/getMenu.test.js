import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getMenuLang_id", () => {
    const params = idosell().getMenu.lang_id("pol").checkParams();
    expect(params).toEqual({"lang_id":"pol"});
})