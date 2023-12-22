import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("deleteCouriersPickupPointsPickupPointExternalId", () => {
    const params = idosell().deleteCouriersPickupPoints.courierId(100105).pickupPointExternalId("abcdefg").getParams();
    expect(params).toEqual({"pickupPointDeleteRequests":[{"courierId":100105,"pickupPointExternalId":"abcdefg"}]});
})