import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getProductsMarketingZones", () => {
    const params = idosell().getProductsMarketingZones.productId([30, 42]).getParams();
    expect(params).toEqual({"identType":"id","products":[30,42]});
})

test("getProductsMarketingZonesIds", () => {
    const params = idosell().getProductsMarketingZones.identType('codeProducer').products(['1234567890123']).getParams();
    expect(params).toEqual({"identType":"codeProducer","products":["1234567890123"]});
})