import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putOrdersOrderNote", () => {
    const params = idosell().putOrders.orderSerialNumber(9).orderNote("testmessage").getParams();
    expect(params).toEqual({"orders":[{"orderSerialNumber":9,"orderNote":"testmessage"}]});
})