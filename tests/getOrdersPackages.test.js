import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getOrdersPackagesDeliveryPackageNumbers", () => {
    const params = idosell().getOrdersPackages.deliveryPackageNumbers(["13489301116623"]).getParams();
    expect(params).toEqual({"deliveryPackageNumbers":["13489301116623"]});
})

test("getOrdersPackagesReturnLabels", () => {
    const params = idosell().getOrdersPackages.returnLabels(true).getParams();
    expect(params).toEqual({"returnLabels":true});
})