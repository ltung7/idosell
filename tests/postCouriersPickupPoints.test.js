import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postCouriersPickupPointsCoordinates", () => {
    const params = idosell().postCouriersPickupPoints.pickupPointExternalId("abc").courierId(100105).pickupPointExternalId("abcdefg").address({"street": "Grzybowska","city": "Warsaw","zipCode": "00-844"}).coordinates({"longitude": 20.12,"latitude": 20.12}).getParams();
    expect(params).toEqual({"pickupPoints":[{"pickupPointExternalId":"abcdefg","courierId":100105,"address":{"street":"Grzybowska","city":"Warsaw","zipCode":"00-844"},"coordinates":{"longitude":20.12,"latitude":20.12}}]});
})