import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postWmsStocksdocumentsProductsQuantity", () => {
    const params = idosell().postWmsStocksdocumentsProducts.type("pz").id(1).product(33).size("uniw").quantity(10).checkParams();
    expect(params).toEqual({"type":"pz","id":1,"products":[{"product":33,"size":"uniw","quantity":10}]});
})