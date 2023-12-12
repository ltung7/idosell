import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getOrdersAuctionDetailsSerialNumbers", () => {
    const params = idosell().getOrdersAuctionDetails.serialNumbers([2900,2916,3083]).getParams();
    expect(params).toEqual({"orders":[{"identValue":2900},{"identValue":2916},{"identValue":3083}]});
})