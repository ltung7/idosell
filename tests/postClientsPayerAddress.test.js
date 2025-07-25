import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postClientsPayerAddressPayerAddressPhone", () => {
    const params = idosell().postClientsPayerAddress.clientId(3).payerAddressFirstName("Demo").payerAddressLastName("Client").payerAddressStreet("Grzybowska").payerAddressZipCode("11-111").payerAddressCity("Warsaw").payerAddressCountryId("PL").payerAddressPhone("987654321").checkParams();
    expect(params).toEqual({"payers":[{"clientId":3,"payerAddressFirstName":"Demo","payerAddressLastName":"Client","payerAddressStreet":"Grzybowska","payerAddressZipCode":"11-111","payerAddressCity":"Warsaw","payerAddressCountryId":"PL","payerAddressPhone":"987654321"}]});
})