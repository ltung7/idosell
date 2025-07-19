import idosell from "./dist/index"
import { expect, test } from "vitest"

test("searchPackagesOrders", () => {
    const params = idosell().searchPackages.orders([15,16]).checkParams();
    expect(params).toEqual({"events":[{"eventType":"order","eventsIds":[15,16]}]});
})

test("searchPackagesReturns", () => {
    const params = idosell().searchPackages.returns([2]).checkParams();
    expect(params).toEqual({"events":[{"eventType":"return","eventsIds":[2]}]});
})

test("searchPackagesRma", () => {
    const params = idosell().searchPackages.rma([1]).checkParams();
    expect(params).toEqual({"events":[{"eventType":"rma","eventsIds":[1]}]});
})

test("searchPackagesDeliveryPackageNumbers", () => {
    const params = idosell().searchPackages.deliveryPackageNumbers(123456789).checkParams();
    expect(params).toEqual({"deliveryPackageNumbers":[123456789]});
})