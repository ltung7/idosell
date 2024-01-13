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

test("postProductsSetPrice", () => {
    const params = idosell().postProducts.shopsMask(1).setPrice(199).getParams();
    expect(params).toEqual({"products":[{"shopsMask":1,"priceChangeMode":"amount_set","productRetailPrice":199}]});
})

test("postProductsSetText", () => {
    const params = idosell().postProducts.shopsMask(1).setText("Awesome199","name").getParams();
    expect(params).toEqual({"products":[{"shopsMask":1,"productNames":{"productNamesLangData":[{"langId":"pol","productName":"Awesome199"}]}}]});
})