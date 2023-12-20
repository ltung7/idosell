import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putClientsPayerAddressPayerAddressZipCode", () => {
    const params = idosell().putClientsPayerAddress.clientId("3").payerAddressId("1").payerAddressZipCode("11-111").getParams();
    expect(params).toEqual({"payers":[{"clientId":"3","payerAddressId":"1","payerAddressZipCode":"11-111"}]});
})