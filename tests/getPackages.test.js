import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getPackagesOrders", () => {
    const params = idosell().getPackages.orders([15,16]).getParams();
    expect(params).toEqual({"events":[{"eventType":"order","eventsIds":[15,16]}]});
})

test("getPackagesReturns", () => {
    const params = idosell().getPackages.returns([2]).getParams();
    expect(params).toEqual({"events":[{"eventType":"return","eventsIds":[2]}]});
})

test("getPackagesRma", () => {
    const params = idosell().getPackages.rma([1]).getParams();
    expect(params).toEqual({"events":[{"eventType":"rma","eventsIds":[1]}]});
})