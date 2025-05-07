import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getClientsPayerAddressClientId", () => {
    const params = idosell().getClientsPayerAddress.clientId("iaisystem").getParams();
    expect(params).toEqual({"clientId":"iaisystem"});
})

test("getClientsPayerAddressPage", () => {
    const params = idosell().getClientsPayerAddress.page(2,10).getParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})