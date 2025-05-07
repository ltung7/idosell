import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getOrdersAuctionDetailsSerialNumbers", () => {
    const params = idosell().getOrdersAuctionDetails.serialNumbers([2900,2916,3083]).getParams();
    expect(params).toEqual({"orders":[{"identType":"orders_sn","identValue":2900},{"identType":"orders_sn","identValue":2916},{"identType":"orders_sn","identValue":3083}]});
})