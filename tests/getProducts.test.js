import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getProductsProductIds", () => {
    const params = idosell().getProducts.productIds(["5904507908362"]).getParams();
    expect(params).toEqual({"productIds":["5904507908362"]});
})