import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putOrdersPackagesPackages", () => {
    const params = idosell().putOrdersPackages.eventId("3").eventType("order").packages([{"deliveryPackageId": 19,"courierId": "10","deliveryPackageNumber": "123"}]).getParams();
    expect(params).toEqual({"orderPackages":[{"eventId":"3","eventType":"order","packages":[{"deliveryPackageId":19,"courierId":"10","deliveryPackageNumber":"123"}]}]});
})