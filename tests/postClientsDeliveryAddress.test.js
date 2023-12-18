import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("postClientsDeliveryAddressShopsIds", () => {
    const params = idosell().postClientsDeliveryAddress.clientLogin("iai_demo").clientDeliveryAddressCity("Warsaw").clientDeliveryAddressStreet("Grzybowska").clientDeliveryAddressZipCode("11-111").clientDeliveryAddressCountry("PL").clientDeliveryAddressFirstName("Demo").clientDeliveryAddressLastName("Client").shopsIds([1,2]).getParams();
    expect(params).toEqual({"clients":[{"clientLogin":"iai_demo","clientDeliveryAddressCity":"Warsaw","clientDeliveryAddressStreet":"Grzybowska","clientDeliveryAddressZipCode":"11-111","clientDeliveryAddressCountry":"PL","clientDeliveryAddressFirstName":"Demo","clientDeliveryAddressLastName":"Client","shopsIds":[1,2]}]});
})