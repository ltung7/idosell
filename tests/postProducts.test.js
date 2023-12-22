import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("postProductsProductSizes", () => {
    const params = idosell().postProducts.productSizes([{"sizeId":"uniw"}]).getParams();
    expect(params).toEqual({"products":[{"productSizes":[{"sizeId":"uniw"}]}]});
})

test("postProductsShopsMask", () => {
    const params = idosell().postProducts.shopsMask(1).getParams();
    expect(params).toEqual({"products":[{"shopsMask":1}]});
})