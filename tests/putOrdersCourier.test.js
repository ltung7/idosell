import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putOrdersCourierPickupPointId", () => {
    const params = idosell().putOrdersCourier.orderSerialNumber(3).courierId(100105).pickupPointId("1").getParams();
    expect(params).toEqual({"orderSerialNumber":3,"courierId":100105,"pickupPointId":"1"});
})