import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putOrdersPickupPointPickupPointId", () => {
    const params = idosell().putOrdersPickupPoint.orderSerialNumber(3).pickupPointId("1").getParams();
    expect(params).toEqual({"orderSerialNumber":3,"pickupPointId":"1"});
})