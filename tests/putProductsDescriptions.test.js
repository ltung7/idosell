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

test("putProductsDescriptionsSetText", () => {
    const params = idosell().putProductsDescriptions.productId(30).setText("Produkt A","productName").setText("Opis produktu", "productDescription").getParams();
    expect(params).toEqual({"products":[{"productIdent":{"productIdentType":"id","identValue":30},"productDescriptionsLangData":[{"langId":"pol","productName":"Produkt A","productDescription":"Opis produktu"}]}]});
})