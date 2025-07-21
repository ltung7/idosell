import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getWmsStocksdocumentsProductsId", () => {
    const params = idosell().getWmsStocksdocumentsProducts.type("pz").id(123).checkParams();
    expect(params).toEqual({"type":"pz","id":123});
})