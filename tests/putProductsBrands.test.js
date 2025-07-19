import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putProductsBrandsNameInPanel", () => {
    const params = idosell().putProductsBrands.id(1513170627).nameInPanel("Brand").checkParams();
    expect(params).toEqual({"producers":[{"id":1513170627,"nameInPanel":"Brand"}]});
})