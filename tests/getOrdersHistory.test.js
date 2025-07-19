import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getOrdersHistoryOrderSerialNumber", () => {
    const params = idosell().getOrdersHistory.orderSerialNumber(123).checkParams();
    expect(params).toEqual({"orderSerialNumber":123});
})