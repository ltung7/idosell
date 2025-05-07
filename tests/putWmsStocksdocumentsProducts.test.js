import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putWmsStocksdocumentsProductsQuantity", () => {
    const params = idosell().putWmsStocksdocumentsProducts.type("mm").id(7).product(30).size("5").quantity(2).getParams();
    expect(params).toEqual({"type":"mm","id":7,"products":[{"product":30,"size":"5","quantity":2}]});
})