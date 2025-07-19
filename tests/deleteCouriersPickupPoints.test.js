import idosell from "./dist/index"
import { expect, test } from "vitest"

test("deleteCouriersPickupPointsPickupPointExternalId", () => {
    const params = idosell().deleteCouriersPickupPoints.courierId(100105).pickupPointExternalId("abcdefg").checkParams();
    expect(params).toEqual({"pickupPointDeleteRequests":[{"courierId":100105,"pickupPointExternalId":"abcdefg"}]});
})