import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getProductsCodeExistence", () => {
    const params = idosell().getProductsCodeExistence.productId([30, 42]).checkParams();
    expect(params).toEqual({"identType":"id","products":[30,42]});
})

test("getProductsCodeExistenceIds", () => {
    const params = idosell().getProductsCodeExistence.identType('codeProducer').products(['1234567890123']).checkParams();
    expect(params).toEqual({"identType":"codeProducer","products":["1234567890123"]});
})