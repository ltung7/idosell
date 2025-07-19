import idosell from "./dist/index"
import { expect, test } from "vitest"

test("deleteClientsDeliveryAddressClientDeliveryAddressId", () => {
    const params = idosell().deleteClientsDeliveryAddress.clientLogin("iai_demo").clientDeliveryAddressId(10).checkParams();
    expect(params).toEqual({"clients":[{"clientLogin":"iai_demo","clientDeliveryAddressId":10}]});
})