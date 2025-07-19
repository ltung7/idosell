import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getProductsMarketingZones", () => {
    const params = idosell().getProductsMarketingZones.productId([30, 42]).checkParams();
    expect(params).toEqual({"identType":"id","products":[30,42]});
})

test("getProductsMarketingZonesIds", () => {
    const params = idosell().getProductsMarketingZones.identType('codeProducer').products(['1234567890123']).checkParams();
    expect(params).toEqual({"identType":"codeProducer","products":["1234567890123"]});
})