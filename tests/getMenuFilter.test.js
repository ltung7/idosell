import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getMenuFilterProductMenu", () => {
    const params = idosell().getMenuFilter.shopId(1).languageId("pol").productMenuTreeId(1).productMenuNodeId(161).checkParams();
    expect(params).toEqual({"shopId":1,"languageId":"pol","productMenuTreeId":1,"productMenuNodeId":161});
})