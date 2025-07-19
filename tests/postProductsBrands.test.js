import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postProductsBrandsNameInPanel", () => {
    const params = idosell().postProductsBrands.nameInPanel("MyBrand").checkParams();
    expect(params).toEqual({"producers":[{"nameInPanel":"MyBrand"}]});
})