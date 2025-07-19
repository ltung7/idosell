import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postResponsibilityEntitiesType", () => {
    const params = idosell().postResponsibilityEntities.code("XO").name("XO ltd.").mail("xo@mail.com").street("XO st").number(1).subnumber(1).zipcode("00-000").city("Warszawa").country("PL").type("producer").checkParams();
    expect(params).toEqual({"entities":[{"code":"XO","name":"XO ltd.","mail":"xo@mail.com","street":"XO st","number":1,"subnumber":1,"zipcode":"00-000","city":"Warszawa","country":"PL"}],"type":"producer"});
})