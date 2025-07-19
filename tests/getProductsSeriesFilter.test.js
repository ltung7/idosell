import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getProductsSeriesFilterSerieId", () => {
    const params = idosell().getProductsSeriesFilter.serieId(1).checkParams();
    expect(params).toEqual({"serieId":1});
})