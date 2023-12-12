import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getOrdersHistoryOrderSerialNumber", () => {
    const params = idosell().getOrdersHistory.orderSerialNumber(123).getParams();
    expect(params).toEqual({"orderSerialNumber":123});
})