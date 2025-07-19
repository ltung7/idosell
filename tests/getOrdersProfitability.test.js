import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getOrdersProfitabilityOrderSerialNumber", () => {
    const params = idosell().getOrdersProfitability.orderSerialNumber(123).checkParams();
    expect(params).toEqual({"orderSerialNumber":123});
})