import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getProductsDeliveryTimeId", () => {
    const params = idosell().getProductsDeliveryTime.productId(15).sizeId(4).getParams();
    expect(params).toEqual({"products":[{"productId":15,"sizeId":4}]});
})

test("getProductsDeliveryTimeProductSizeQuantity", () => {
    const params = idosell().getProductsDeliveryTime.productId(15).sizeId(4).productSizeQuantity(3).getParams();
    expect(params).toEqual({"products":[{"productId":15,"sizeId":4,"productSizeQuantity":3}]});
})

test("getProductsDeliveryTimeProductIndex", () => {
    const params = idosell().getProductsDeliveryTime.productIndex("15-4").getParams();
    expect(params).toEqual({"products":[{"productIndex":"15-4"}]});
})