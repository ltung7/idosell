import idosell from "./dist/index"
import { expect, test } from "vitest"

test("deleteMenuItem_id", () => {
    const params = idosell().deleteMenu.shop_id(1).menu_id(1).item_id(154).getParams();
    expect(params).toEqual({"menu_list":[{"shop_id":1,"menu_id":1,"item_id":154}]});
})