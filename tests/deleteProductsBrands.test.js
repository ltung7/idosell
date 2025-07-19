import idosell from "./dist/index"
import { expect, test } from "vitest"

test("deleteProductsBrandsIds", () => {
    const params = idosell().deleteProductsBrands.ids([1513170628]).checkParams();
    expect(params).toEqual({"ids":[1513170628]});
})