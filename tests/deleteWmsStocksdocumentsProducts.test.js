import idosell from "./dist/index"
import { expect, test } from "vitest"

test("deleteWmsStocksdocumentsProductsProduct", () => {
    const params = idosell().deleteWmsStocksdocumentsProducts.type("pz").id(1).product(33).getParams();
    expect(params).toEqual({"type":"pz","id":1,"products":[{"product":33}]});
})

test("deleteWmsStocksdocumentsProductsSize", () => {
    const params = idosell().deleteWmsStocksdocumentsProducts.type("pz").id(1).product(33).size("uniw").getParams();
    expect(params).toEqual({"type":"pz","id":1,"products":[{"product":33,"size":"uniw"}]});
})