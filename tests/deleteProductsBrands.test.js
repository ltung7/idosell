import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("deleteProductsBrandsIds", () => {
    const params = idosell().deleteProductsBrands.ids([1513170628]).getParams();
    expect(params).toEqual({"ids":[1513170628]});
})