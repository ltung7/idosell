import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putPackagesPackages", () => {
    const params = idosell().putPackages.orderId("3").orderType("order").packages([{"packageId":22,"delivery":10,"packageNumber":"ABCDE"}]).getParams();
    expect(params).toEqual({"orderPackages":[{"orderId":"3","orderType":"order","packages":[{"packageId":22,"delivery":10,"packageNumber":"ABCDE"}]}]});
})