import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("deleteClientsDeliveryAddressClientDeliveryAddressId", () => {
    const params = idosell().deleteClientsDeliveryAddress.clientLogin("iai_demo").clientDeliveryAddressId(10).getParams();
    expect(params).toEqual({"clients":[{"clientLogin":"iai_demo","clientDeliveryAddressId":10}]});
})