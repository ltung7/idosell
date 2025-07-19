import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getSystemProcessesAutomationShopId", () => {
    const params = idosell().getSystemProcessesAutomation.shopId(1).checkParams();
    expect(params).toEqual({"shopId":1});
})