import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("postReturnsStock_id", () => {
    const params = idosell().postReturns.order_sn(4).stock_id(1).getParams();
    expect(params).toEqual({"order_sn":4,"stock_id":1});
})

test("postReturnsQuantity", () => {
    const params = idosell().postReturns.order_sn(4).stock_id(1).id(7).size("U").quantity(1).getParams();
    expect(params).toEqual({"order_sn":4,"stock_id":1,"products":[{"id":7,"size":"U","quantity":1}]});
})