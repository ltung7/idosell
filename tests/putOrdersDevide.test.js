import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putOrdersDevideBasketPosition", () => {
    const params = idosell().putOrdersDevide.orderSerialNumber(241).basketPosition(1).checkParams();
    expect(params).toEqual({"orderSerialNumber":241,"products":[{"basketPosition":1}]});
})