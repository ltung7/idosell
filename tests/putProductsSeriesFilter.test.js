import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putProductsSeriesFilterFilterDisplay", () => {
    const params = idosell().putProductsSeriesFilter.shopId(1).languageId("pol").serieId(1).filterId("series_0").filterName("Kolekcja").filterDisplay("namegfx").getParams();
    expect(params).toEqual({"shopId":1,"languageId":"pol","serieId":1,"filtersActive":[{"filterId":"series_0","filterName":"Kolekcja","filterDisplay":"namegfx"}]});
})

test("putProductsSeriesFilterFilterDefaultEnabled", () => {
    const params = idosell().putProductsSeriesFilter.shopId(1).languageId("pol").serieId(1).filterId("series_0").filterName("Kolekcja").filterDisplay("namegfx").filterDefaultEnabled("y").getParams();
    expect(params).toEqual({"shopId":1,"languageId":"pol","serieId":1,"filtersActive":[{"filterId":"series_0","filterName":"Kolekcja","filterDisplay":"namegfx","filterDefaultEnabled":"y"}]});
})