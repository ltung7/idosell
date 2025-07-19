import idosell from "./dist/index"
import { expect, test } from "vitest"

test("deleteResponsibilityEntitiesType", () => {
    const params = idosell().deleteResponsibilityEntities.code("XO").type("producer").checkParams();
    expect(params).toEqual({"code":"XO","type":"producer"});
})