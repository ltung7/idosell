import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getOrdersAnalyticsSerialNumbers", () => {
    const params = idosell().getOrdersAnalytics.serialNumbers([123,456,789]).getParams();
    expect(params).toEqual({"orders":[{"orderSerialNumber":123},{"orderSerialNumber":456},{"orderSerialNumber":789}]});
})