import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getProductsStocksIds", () => {
    const params = idosell().getProductsStocks.ids(33).getParams();
    expect(params).toEqual({"products":[{"identType":"id","identValue":33}]});
})

test("getProductsStocksExternalCodes", () => {
    const params = idosell().getProductsStocks.externalCodes(["pav01"]).getParams();
    expect(params).toEqual({"products":[{"identType":"codeExtern","identValue":"pav01"}]});
})

test("getProductsStocksProducerCodes", () => {
    const params = idosell().getProductsStocks.producerCodes(99099099099).getParams();
    expect(params).toEqual({"products":[{"identType":"codeProducer","identValue":99099099099}]});
})