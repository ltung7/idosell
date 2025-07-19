import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putClientsDeliveryAddressClientDeliveryAddressZipCode", () => {
    const params = idosell().putClientsDeliveryAddress.clientLogin("iai_demo").clientDeliveryAddressId(11).shopsIds([1]).clientDeliveryAddressZipCode("11-111").checkParams();
    expect(params).toEqual({"clients":[{"clientLogin":"iai_demo","clientDeliveryAddressId":11,"shopsIds":[1],"clientDeliveryAddressZipCode":"11-111"}]});
})