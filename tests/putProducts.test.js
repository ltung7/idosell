import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putProductsSetText", () => {
    const params = idosell().putProducts.productId(33).setText("Krzesło Pavon", "name").getParams();
    expect(params).toEqual({"products":[{"productId":33,"productNames":{"productNamesLangData":[{"langId":"pol","productName":"Krzesło Pavon"}]}}]});
})

test("putProductsCountryOfOrigin", () => {
    const params = idosell().putProducts.productId(33).countryOfOrigin("PL").getParams();
    expect(params).toEqual({"products":[{"productId":33,"countryOfOrigin":"PL"}]});
})