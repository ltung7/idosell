import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putMenuSortParent_id", () => {
    const params = idosell().putMenuSort.shop_id(1).menu_id(1).lang_id("pol").parent_id(1).getParams();
    expect(params).toEqual({"menu_list":[{"shop_id":1,"menu_id":1,"lang_id":"pol","parent_id":1}]});
})