import idosell from "./dist/index"
import { expect, test } from "vitest"

test("searchProductsDeliveryTimeId", () => {
    const params = idosell().searchProductsDeliveryTime.productId(15).sizeId(4).getParams();
    expect(params).toEqual({"products":[{"productId":15,"sizeId":4}]});
})

test("searchProductsDeliveryTimeProductSizeQuantity", () => {
    const params = idosell().searchProductsDeliveryTime.productId(15).sizeId(4).productSizeQuantity(3).getParams();
    expect(params).toEqual({"products":[{"productId":15,"sizeId":4,"productSizeQuantity":3}]});
})

test("searchProductsDeliveryTimeProductIndex", () => {
    const params = idosell().searchProductsDeliveryTime.productIndex("15-4").getParams();
    expect(params).toEqual({"products":[{"productIndex":"15-4"}]});
})