import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getReturnsOrder_sn", () => {
    const params = idosell().getReturns.order_sn(3471).checkParams();
    expect(params).toEqual({"order_sn":3471});
})

test("getReturnsReturn_id", () => {
    const params = idosell().getReturns.return_id(179).checkParams();
    expect(params).toEqual({"return_id":179});
})

test("getReturnsStatus", () => {
    const params = idosell().getReturns.status(14).checkParams();
    expect(params).toEqual({"status":14});
})

test("getReturnsDates", () => {
    const params = idosell().getReturns.dates("2023-12-01", "2023-12-10", "date_add").checkParams();
    expect(params).toEqual({"range":{"date][date_begin": "2023-12-01","date][date_end": "2023-12-10","date][dates_type": "date_add",}});
})

test("getReturnsPage", () => {
    const params = idosell().getReturns.status(14).page(2,10).checkParams();
    expect(params).toEqual({"status":14,"results_page":2,"results_limit":10});
})