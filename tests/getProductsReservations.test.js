import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getProductsReservationsIds", () => {
    const params = idosell().getProductsReservations.ids(33).getParams();
    expect(params).toEqual({"productsIdents":[{"identType":"id","identValue":33}]});
})

test("getProductsReservationsExternalCodes", () => {
    const params = idosell().getProductsReservations.externalCodes(["pav01"]).getParams();
    expect(params).toEqual({"productsIdents":[{"identType":"codeExtern","identValue":"pav01"}]});
})

test("getProductsReservationsProducerCodes", () => {
    const params = idosell().getProductsReservations.producerCodes([99099099099]).getParams();
    expect(params).toEqual({"productsIdents":[{"identType":"codeProducer","identValue":99099099099}]});
})