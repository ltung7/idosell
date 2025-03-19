import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("postResponsibilityEntities", () => {
    const params = idosell().postResponsibilityEntities.type("producer").city("Warszawa").country("PL").code("TEST").name("Testsp.zo.o.").main("test@mail.com").street("Testowa").number(12).zipcode("12-345")
    expect(params).toEqual({"type":"producer","entities":[{"city":"Warszawa","country":"PL","code":"TEST","name":"Test sp. z o. o.","main":"test@mail.com","street":"Testowa","number":12,"zipcode":"12-345"}]});
})

