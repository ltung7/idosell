import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putProductsSeriesNameInPanel", () => {
    const params = idosell().putProductsSeries.id(1).nameInPanel("Seria 1").checkParams();
    expect(params).toEqual({"series":[{"id":1,"nameInPanel":"Seria 1"}]});
})