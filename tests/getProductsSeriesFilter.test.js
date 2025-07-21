import idosell from "./dist/index"
import { expect, test } from "vitest"


test("getProductsSeriesFilterSerieId", () => {
    const params = idosell().getProductsSeriesFilter.shopId(1).languageId("pol").serieId(9).checkParams();
    expect(params).toEqual({"shopId":1,"languageId":"pol","serieId":9});
})