import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getCouriersPickupPointsCourierId", () => {
    const params = idosell().getCouriersPickupPoints.courierId(2270020).checkParams();
    expect(params).toEqual({"courierId":2270020});
})

test("getCouriersPickupPointsPickupPointExternalId", () => {
    const params = idosell().getCouriersPickupPoints.courierId(2270020).pickupPointExternalId("101293B").checkParams();
    expect(params).toEqual({"pickupPointExternalId":"101293B","courierId":2270020});
})

test("getCouriersPickupPointsPage", () => {
    const params = idosell().getCouriersPickupPoints.courierId(2270020).page(2,10).checkParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10,"courierId":2270020});
})