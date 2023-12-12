import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getSystemProcessesAutomationShopId", () => {
    const params = idosell().getSystemProcessesAutomation.shopId(1).getParams();
    expect(params).toEqual({"shopId":1});
})