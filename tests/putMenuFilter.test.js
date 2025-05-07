import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putMenuFilterMenuFiltersActive", () => {
    const params = idosell().putMenuFilter.shopId(1).languageId("pol").productMenuTreeId(1).productMenuNodeId(251).menuFiltersActive([{"menuFilterId": "pricerange_0","menuFilterName": "Cena"}]).getParams();
    expect(params).toEqual({"shopId":1,"languageId":"pol","productMenuTreeId":1,"productMenuNodeId":251,"menuFiltersActive":[{"menuFilterId":"pricerange_0","menuFilterName":"Cena"}]});
})

test("putMenuFilterMenuFilterName", () => {
    const params = idosell().putMenuFilter.shopId(1).languageId("pol").productMenuTreeId(1).productMenuNodeId(251).menuFilterId("pricerange_0").menuFilterName("Cena").getParams();
    expect(params).toEqual({"shopId":1,"languageId":"pol","productMenuTreeId":1,"productMenuNodeId":251,"menuFiltersActive":[{"menuFilterId":"pricerange_0","menuFilterName":"Cena"}]});
})