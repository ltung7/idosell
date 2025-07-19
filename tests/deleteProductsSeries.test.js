import idosell from "./dist/index"
import { expect, test } from "vitest"

test("deleteProductsSeriesIds", () => {
    const params = idosell().deleteProductsSeries.ids([2]).checkParams();
    expect(params).toEqual({"ids":[2]});
})