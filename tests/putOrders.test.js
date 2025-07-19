import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putOrdersOrderNote", () => {
    const params = idosell().putOrders.orderSerialNumber(9).orderNote("testmessage").checkParams();
    expect(params).toEqual({"orders":[{"orderSerialNumber":9,"orderNote":"testmessage"}]});
})