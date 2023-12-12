import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getOrdersOrdersSerialNumbers", () => {
    const params = idosell().getOrders.ordersSerialNumbers([123,456,789]).getParams();
    expect(params).toEqual({"ordersSerialNumbers":[123,456,789]});
})