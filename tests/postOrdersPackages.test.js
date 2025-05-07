import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postOrdersPackagesPackages", () => {
    const params = idosell().postOrdersPackages.eventId("9").eventType("order").packages([{"courierId": "10","deliveryPackageNumber": "123465789A"}]).getParams();
    expect(params).toEqual({"orderPackages":[{"eventId":"9","eventType":"order","packages":[{"courierId":"10","deliveryPackageNumber":"123465789A"}]}]});
})