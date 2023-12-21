import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putProductsBrandsFilterFilterForNodeIsDefault", () => {
    const params = idosell().putProductsBrandsFilter.shopId(1).languageId("pol").producerId(1513170627).filterForNodeIsDefault("n").getParams();
    expect(params).toEqual({"shopId":1,"languageId":"pol","producerId":1513170627,"filterForNodeIsDefault":"n"});
})