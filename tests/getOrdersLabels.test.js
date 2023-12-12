import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getOrdersLabelsOrderSerialNumber", () => {
    const params = idosell().getOrdersLabels.orderSerialNumber(3532).getParams();
    expect(params).toEqual({"orderSerialNumber":3532});
})