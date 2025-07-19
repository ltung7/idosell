import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putOrdersDeliveryAddressClientDeliveryAddressId", () => {
    const params = idosell().putOrdersDeliveryAddress.orderSerialNumber(3).clientLogin("iai_demo").clientDeliveryAddressId(11).checkParams();
    expect(params).toEqual({"orderSerialNumber":3,"clientLogin":"iai_demo","clientDeliveryAddressId":11});
})