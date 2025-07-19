import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putSystemProcessesAutomationOrders", () => {
    const params = idosell().putSystemProcessesAutomation.shopId(1).orders({"alwaysAllowSentStatus": "n"}).checkParams();
    expect(params).toEqual({"shopId":1,"orders":{"alwaysAllowSentStatus":"n"}});
})