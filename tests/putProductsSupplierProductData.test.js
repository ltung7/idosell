import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putProductsSupplierProductDataProductDeliverers", () => {
    const params = idosell().putProductsSupplierProductData.productId(33).productDeliverers([{"delivererId":1,"productSizes":[{"sizeId":"uniw","quantity":100}]}]).checkParams();
    expect(params).toEqual({"products":[{"productId":33,"productDeliverers":[{"delivererId":1,"productSizes":[{"sizeId":"uniw","quantity":100}]}]}]});
})