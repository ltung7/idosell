import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postMenuLang_data", () => {
    const params = idosell().postMenu.shop_id(1).menu_id(1).parent_id("0").lang_data([{"lang_id": "pol","name": "menu2"}]).checkParams();
    expect(params).toEqual({"menu_list":[{"shop_id":1,"menu_id":1,"parent_id":"0","lang_data":[{"lang_id":"pol","name":"menu2"}]}]});
})