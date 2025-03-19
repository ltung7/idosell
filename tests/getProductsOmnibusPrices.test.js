import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getProductsOmnibusPrices", () => {
    const params = idosell().getProductsOmnibusPrices.productId([30, 42]).getParams();
    expect(params).toEqual({"identType":"id","products":[30,42]});
})

test("getProductsOmnibusPricesIds", () => {
    const params = idosell().getProductsOmnibusPrices.identType('codeProducer').products(['1234567890123']).getParams();
    expect(params).toEqual({"identType":"codeProducer","products":["1234567890123"]});
})