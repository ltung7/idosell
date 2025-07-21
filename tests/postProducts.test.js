import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postProductsProductSizes", () => {
    const params = idosell().postProducts.shopsMask(1).productSizes([{"sizeId":"uniw"}]).checkParams();
    expect(params).toEqual({"products":[{"shopsMask":1,"productSizes":[{"sizeId":"uniw"}]}]});
})

test("postProductsShopsMask", () => {
    const params = idosell().postProducts.shopsMask(1).checkParams();
    expect(params).toEqual({"products":[{"shopsMask":1}]});
})

test("postProductsSetPrice", () => {
    const params = idosell().postProducts.shopsMask(1).setPrice(199).checkParams();
    expect(params).toEqual({"products":[{"shopsMask":1,"priceChangeMode":"amount_set","productRetailPrice":199}]});
})

test("postProductsSetText", () => {
    const params = idosell().postProducts.shopsMask(1).setText("Awesome199","name").checkParams();
    expect(params).toEqual({"products":[{"shopsMask":1,"productNames":{"productNamesLangData":[{"langId":"pol","productName":"Awesome199"}]}}]});
})