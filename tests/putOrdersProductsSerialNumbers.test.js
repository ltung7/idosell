import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putOrdersProductsSerialNumbersOrderProducts", () => {
    const params = idosell().putOrdersProductsSerialNumbers.orderSerialNumber(3).orderProducts([{"productId":33,"sizeId":"uniw","productSerialNumbers":["00123456"]}]).checkParams();
    expect(params).toEqual({"orders":[{"orderSerialNumber":3,"orderProducts":[{"productId":33,"sizeId":"uniw","productSerialNumbers":["00123456"]}]}]});
})