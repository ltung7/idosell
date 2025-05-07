import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putProductsSupplierCodeProductDeliverers", () => {
    const params = idosell().putProductsSupplierCode.productId(33).productDeliverers([{"delivererId":1,"productSizes":[{"sizeId":"uniw","sizeDelivererCode":"PAV01"}]}]).getParams();
    expect(params).toEqual({"products":[{"productId":33,"productDeliverers":[{"delivererId":1,"productSizes":[{"sizeId":"uniw","sizeDelivererCode":"PAV01"}]}]}]});
})