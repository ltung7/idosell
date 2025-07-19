import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getWmsStocksdocumentsProductsType", () => {
    const params = idosell().getWmsStocksdocumentsProducts.type("pz").checkParams();
    expect(params).toEqual({"type":"pz"});
})

test("getWmsStocksdocumentsProductsId", () => {
    const params = idosell().getWmsStocksdocumentsProducts.id(123).checkParams();
    expect(params).toEqual({"id":123});
})