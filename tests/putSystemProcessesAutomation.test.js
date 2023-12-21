import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putSystemProcessesAutomationOrders", () => {
    const params = idosell().putSystemProcessesAutomation.shopId(1).orders({"alwaysAllowSentStatus": "n"}).getParams();
    expect(params).toEqual({"shopId":1,"orders":{"alwaysAllowSentStatus":"n"}});
})