import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putOrdersDevideQuantity", () => {
    const params = idosell().putOrdersDevide.orderSerialNumber(3).basketPosition(0).quantity(1).getParams();
    expect(params).toEqual({"orderSerialNumber":3,"products":[{"basketPosition":0,"quantity":1}]});
})