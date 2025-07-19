import idosell from "./dist/index"
import { expect, test } from "vitest"

test("deleteProductsProductId", () => {
    const params = idosell().deleteProducts.productId(48).checkParams();
    expect(params).toEqual({"products":[{"productId":48}]});
})