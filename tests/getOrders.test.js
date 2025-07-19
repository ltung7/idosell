import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getOrdersOrdersSerialNumbers", () => {
    const params = idosell().getOrders.ordersSerialNumbers([123,456,789]).checkParams();
    expect(params).toEqual({"ordersSerialNumbers":[123,456,789]});
})