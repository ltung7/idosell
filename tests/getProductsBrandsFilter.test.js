import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getProductsBrandsFilterProducerId", () => {
    const params = idosell().getProductsBrandsFilter.producerId(1644776320).getParams();
    expect(params).toEqual({"producerId":1644776320});
})