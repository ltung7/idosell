import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putOrdersPickupPointPickupPointId", () => {
    const params = idosell().putOrdersPickupPoint.orderSerialNumber(3).pickupPointId("1").checkParams();
    expect(params).toEqual({"orderSerialNumber":3,"pickupPointId":"1"});
})