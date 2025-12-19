import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getOrdersAuctionDetailsSerialNumbers", () => {
    const params = idosell().getOrdersAuctionDetails.serialNumbers([1706995,1706991]).checkParams();
    expect(params).toEqual({"identType":"orders_sn","orders":[1706995,1706991]});
})

test("getOrdersAuctionDetailsOrders", () => {
    const params = idosell().getOrdersAuctionDetails.identType("orders_sn").orders([1706995]).checkParams();
    expect(params).toEqual({"identType":"orders_sn","orders":[1706995]});
})

test("getOrdersAuctionDetailsIds", () => {
    const params = idosell().getOrdersAuctionDetails.ids("client-1").checkParams();
    expect(params).toEqual({"identType":"order_id","orders":["client-1"]});
})