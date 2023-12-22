import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("deleteClientsPayerAddressPayerAddressId", () => {
    const params = idosell().deleteClientsPayerAddress.clientId(3).payerAddressId(1).getParams();
    expect(params).toEqual({"payers":[{"clientId":3,"payerAddressId":1}]});
})