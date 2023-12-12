import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getReturnsOrder_sn", () => {
    const params = idosell().getReturns.order_sn(3471).getParams();
    expect(params).toEqual({"order_sn":3471});
})

test("getReturnsReturn_id", () => {
    const params = idosell().getReturns.return_id(179).getParams();
    expect(params).toEqual({"return_id":179});
})

test("getReturnsStatus", () => {
    const params = idosell().getReturns.status(14).getParams();
    expect(params).toEqual({"status":14});
})

test("getReturnsDates", () => {
    const params = idosell().getReturns.dates("2023-12-01", "2023-12-10", "date_add").getParams();
    expect(params).toEqual({"range":{"date":{"date_begin":"2023-12-01","date_end":"2023-12-10","dates_type":"date_add"}}});
})

test("getReturnsPage", () => {
    const params = idosell().getReturns.page(2,10).getParams();
    expect(params).toEqual({"results_page":2,"results_limit":10});
})