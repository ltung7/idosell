import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putProductsDescriptionsProductDescriptionsLangData", () => {
    const params = idosell().putProductsDescriptions.productIdent({"productIdentType":"id","identValue":"33"}).productDescriptionsLangData([{"langId":"pol","productName":"KrzesłoPavoN"}]).getParams();
    expect(params).toEqual({"products":[{"productIdent":{"productIdentType":"id","identValue":"33"},"productDescriptionsLangData":[{"langId":"pol","productName":"KrzesłoPavoN"}]}]});
})