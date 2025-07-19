import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getOrdersLabelsOrderSerialNumber", () => {
    const params = idosell().getOrdersLabels.orderSerialNumber(3532).checkParams();
    expect(params).toEqual({"orderSerialNumber":3532});
})