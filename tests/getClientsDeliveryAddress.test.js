import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getClientsDeliveryAddressClientLogins", () => {
    const params = idosell().getClientsDeliveryAddress.clientLogins(["abc", "def", "ghi"]).checkParams();
    expect(params).toEqual({"clientLogins":["abc","def","ghi"]});
})