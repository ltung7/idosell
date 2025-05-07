import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putProductsStockQuantityProductSizeQuantity", () => {
    const params = idosell().putProductsStockQuantity.productSizeCodeExternal("123456").stockId(1).productSizeQuantity(50).getParams();
    expect(params).toEqual({"products":[{"productSizeCodeExternal":"123456","stockId":1,"productSizeQuantity":50}]});
})