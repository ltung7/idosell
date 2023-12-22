import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("deleteProductsSeriesIds", () => {
    const params = idosell().deleteProductsSeries.ids([2]).getParams();
    expect(params).toEqual({"ids":[2]});
})