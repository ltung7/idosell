import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getProductsCodeExistenceExternalCodes", () => {
    const params = idosell().getProductsCodeExistence.externalCodes(["pav01"]).getParams();
    expect(params).toEqual({"products":[{"productIdentType":"codeExtern","productId":"pav01"}]});
})

test("getProductsCodeExistenceProducerCodes", () => {
    const params = idosell().getProductsCodeExistence.producerCodes(99099099099).getParams();
    expect(params).toEqual({"products":[{"productIdentType":"codeProducer","productId":99099099099}]});
})

test("getProductsCodeExistenceIds", () => {
    const params = idosell().getProductsCodeExistence.ids([30,33]).getParams();
    expect(params).toEqual({"products":[{"productIdentType":"id","productId":30},{"productIdentType":"id","productId":33}]});
})