import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postClientsStreet", () => {
    const params = idosell().postClients.login("new_client").shops([1,2]).email("new@client.com").firstname("New").lastname("Client").zipcode("11-111").city("Warsaw").country_code("PL").phone("123456789").street("Grzybowska").getParams();
    expect(params).toEqual({"clients":[{"login":"new_client","shops":[1,2],"email":"new@client.com","firstname":"New","lastname":"Client","zipcode":"11-111","city":"Warsaw","country_code":"PL","phone":"123456789","street":"Grzybowska"}]});
})