import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("deleteProductsProductId", () => {
    const params = idosell().deleteProducts.productId(48).getParams();
    expect(params).toEqual({"products":[{"productId":48}]});
})