import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getOrdersAnalyticsSerialNumbers", () => {
    const params = idosell().getOrdersAnalytics.orderSerialNumber([123,456,789]).getParams();
    expect(params).toEqual({"orderSerialNumber":[123,456,789]});
})