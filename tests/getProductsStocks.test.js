import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getProductsStocks", () => {
    const params = idosell().getProductsStocks.productId([30, 42]).getParams();
    expect(params).toEqual({"identType":"id","products":[30,42]});
})

test("getProductsStocksIds", () => {
    const params = idosell().getProductsStocks.identType('codeProducer').products(['1234567890123']).getParams();
    expect(params).toEqual({"identType":"codeProducer","products":["1234567890123"]});
})