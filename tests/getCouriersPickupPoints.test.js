import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getCouriersPickupPointsCourierId", () => {
    const params = idosell().getCouriersPickupPoints.courierId(2270020).getParams();
    expect(params).toEqual({"courierId":2270020});
})

test("getCouriersPickupPointsPickupPointExternalId", () => {
    const params = idosell().getCouriersPickupPoints.pickupPointExternalId("101293B").getParams();
    expect(params).toEqual({"pickupPointExternalId":"101293B"});
})

test("getCouriersPickupPointsPage", () => {
    const params = idosell().getCouriersPickupPoints.page(2,10).getParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})