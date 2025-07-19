import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getProductsStrikethroughPrices", () => {
    const params = idosell().getProductsStrikethroughPrices.productId([30, 42]).checkParams();
    expect(params).toEqual({"identType":"id","products":[30,42]});
})

test("getProductsStrikethroughPricesIds", () => {
    const params = idosell().getProductsStrikethroughPrices.identType('codeProducer').products(['1234567890123']).checkParams();
    expect(params).toEqual({"identType":"codeProducer","products":["1234567890123"]});
})