import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putCouriersPickupPointsServiceStatus", () => {
    const params = idosell().putCouriersPickupPoints.pickupPointId(1).courierId(100105).serviceStatus("out_of_service").getParams();
    expect(params).toEqual({"pickupPoints":[{"pickupPointId":1,"courierId":100105,"serviceStatus":"out_of_service"}]});
})