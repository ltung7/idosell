import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getResponsibilityEntitiesType", () => {
    const params = idosell().getResponsibilityEntities.code("XO").type("producer").checkParams();
    expect(params).toEqual({"code":"XO","type":"producer"});
})