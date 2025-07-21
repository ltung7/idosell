import idosell from "./dist/index"
import { expect, test } from "vitest"


test("getProductsBrandsFilter", () => {
    const params = idosell().getProductsBrandsFilter.producerId(1644776320).languageId("pol").shopId(1).checkParams();
    expect(params).toEqual({"producerId":1644776320,"languageId":"pol","shopId":1});
})