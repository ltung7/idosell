import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getOrdersPackagesDeliveryPackageNumbers", () => {
    const params = idosell().getOrdersPackages.deliveryPackageNumbers(["13489301116623"]).getParams();
    expect(params).toEqual({"deliveryPackageNumbers":["13489301116623"]});
})

test("getOrdersPackagesReturnLabels", () => {
    const params = idosell().getOrdersPackages.returnLabels(true).getParams();
    expect(params).toEqual({"returnLabels":true});
})

test("getOrdersPackagesOrderNumbers", () => {
    const params = idosell().getOrdersPackages.orderNumbers([3]).getParams();
    expect(params).toEqual({"orderNumbers":[3]});
})