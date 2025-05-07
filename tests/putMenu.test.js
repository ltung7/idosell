import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putMenuLang_data", () => {
    const params = idosell().putMenu.shop_id(1).menu_id(1).item_id("251").lang_data([{"lang_id": "pol","name": "new"}]).getParams();
    expect(params).toEqual({"menu_list":[{"shop_id":1,"menu_id":1,"item_id":"251","lang_data":[{"lang_id":"pol","name":"new"}]}]});
})