import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getProductsBrandsPage", () => {
    const params = idosell().getProductsBrands.page(2,10).checkParams();
    expect(params).toEqual({"results_page":2,"results_limit":10});
})