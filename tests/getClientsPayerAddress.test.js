import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getClientsPayerAddressClientId", () => {
    const params = idosell().getClientsPayerAddress.clientId("iaisystem").checkParams();
    expect(params).toEqual({"clientId":"iaisystem"});
})

test("getClientsPayerAddressPage", () => {
    const params = idosell().getClientsPayerAddress.clientId("iaisystem").page(2,10).checkParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10,"clientId":"iaisystem"});
})