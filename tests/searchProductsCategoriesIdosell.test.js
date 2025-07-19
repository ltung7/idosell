import idosell from "./dist/index"
import { expect, test } from "vitest"

test("searchProductsCategoriesIdosellPage", () => {
    const params = idosell().searchProductsCategoriesIdosell.page(2,10).checkParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})