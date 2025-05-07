import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getOrdersProfitabilityOrderSerialNumber", () => {
    const params = idosell().getOrdersProfitability.orderSerialNumber(123).getParams();
    expect(params).toEqual({"orderSerialNumber":123});
})