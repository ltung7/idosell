import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getProductsReservations", () => {
    const params = idosell().getProductsReservations.productId([30, 42]).checkParams();
    expect(params).toEqual({"identType":"id","products":[30,42]});
})

test("getProductsReservationsIds", () => {
    const params = idosell().getProductsReservations.identType('codeProducer').products(['1234567890123']).checkParams();
    expect(params).toEqual({"identType":"codeProducer","products":["1234567890123"]});
})