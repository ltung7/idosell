import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putOrdersDeliveryAddressClientDeliveryAddressId", () => {
    const params = idosell().putOrdersDeliveryAddress.orderSerialNumber(3).clientLogin("iai_demo").clientDeliveryAddressId(11).getParams();
    expect(params).toEqual({"orderSerialNumber":3,"clientLogin":"iai_demo","clientDeliveryAddressId":11});
})