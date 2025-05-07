import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putProductsDescriptionsProductIdent", () => {
    const params = idosell().putProductsDescriptions.productIdent({"productIdentType":"id","identValue":"33"}).productDescriptionsLangData([{"langId":"pol","productName":"Krzesło Pavon"}]).getParams();
    expect(params).toEqual({"products":[{"productIdent":{"productIdentType":"id","identValue":"33"},"productDescriptionsLangData":[{"langId":"pol","productName":"Krzesło Pavon"}]}]});
})

test("putProductsDescriptionsProductId", () => {
    const params = idosell().putProductsDescriptions.productId(33).productDescriptionsLangData([{"langId": "pol","productName": "Krzesło Pavon"}]).getParams();
    expect(params).toEqual({"products":[{"productIdent":{"productIdentType":"id","identValue":33},"productDescriptionsLangData":[{"langId":"pol","productName":"Krzesło Pavon"}]}]});
})