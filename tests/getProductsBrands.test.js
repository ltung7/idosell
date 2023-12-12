import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getProductsBrandsPage", () => {
    const params = idosell().getProductsBrands.page(2,10).getParams();
    expect(params).toEqual({"results_page":2,"results_limit":10});
})