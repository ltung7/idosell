import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getWmsStocksdocumentsProductsType", () => {
    const params = idosell().getWmsStocksdocumentsProducts.type("pz").getParams();
    expect(params).toEqual({"type":"pz"});
})

test("getWmsStocksdocumentsProductsId", () => {
    const params = idosell().getWmsStocksdocumentsProducts.id(123).getParams();
    expect(params).toEqual({"id":123});
})