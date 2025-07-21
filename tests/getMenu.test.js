import idosell from "./dist/index.ts"
import { expect, test } from "vitest"

test("getMenu", () => {
    const params = idosell().getMenu.shop_id(1).menu_id(1).lang_id("pol").checkParams();
    expect(params).toEqual({"shop_id":1,"menu_id":1,"lang_id":"pol"});
})