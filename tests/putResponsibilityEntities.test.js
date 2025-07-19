import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putResponsibilityEntitiesType", () => {
    const params = idosell().putResponsibilityEntities.code("XO").mail("new@mail.com").type("producer").checkParams();
    expect(params).toEqual({"entities":[{"code":"XO","mail":"new@mail.com"}],"type":"producer"});
})