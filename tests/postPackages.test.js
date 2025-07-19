import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postPackagesPackages", () => {
    const params = idosell().postPackages.orderId("9").orderType("order").packages([{"delivery": 10,"packageNumber": "123465798D"}]).checkParams();
    expect(params).toEqual({"orderPackages":[{"orderId":"9","orderType":"order","packages":[{"delivery":10,"packageNumber":"123465798D"}]}]});
})