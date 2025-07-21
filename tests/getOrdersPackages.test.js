import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getOrdersPackagesDeliveryPackageNumbers", () => {
    const params = idosell().getOrdersPackages.deliveryPackageNumbers(["13489301116623"]).checkParams();
    expect(params).toEqual({"deliveryPackageNumbers":["13489301116623"]});
})

test("getOrdersPackagesOrderNumbers", () => {
    const params = idosell().getOrdersPackages.orderNumbers([3]).checkParams();
    expect(params).toEqual({"orderNumbers":[3]});
})

test("getOrdersPackagesReturnLabels", () => {
    const params = idosell().getOrdersPackages.returnNumbers(3).returnLabels(true).checkParams();
    expect(params).toEqual({"returnNumbers":3,"returnLabels":true});
})