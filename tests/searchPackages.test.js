import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("searchPackagesOrders", () => {
    const params = idosell().searchPackages.orders([15,16]).getParams();
    expect(params).toEqual({"events":[{"eventType":"order","eventsIds":[15,16]}]});
})

test("searchPackagesReturns", () => {
    const params = idosell().searchPackages.returns([2]).getParams();
    expect(params).toEqual({"events":[{"eventType":"return","eventsIds":[2]}]});
})

test("searchPackagesRma", () => {
    const params = idosell().searchPackages.rma([1]).getParams();
    expect(params).toEqual({"events":[{"eventType":"rma","eventsIds":[1]}]});
})