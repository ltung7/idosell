import idosell from "./dist/index.ts"
import { expect, test } from "vitest"

test("searchPromotionsHistoryPage", () => {
    const params = idosell().searchPromotionsHistory.promotionId(4).page(2,10).checkParams();
    expect(params).toEqual({"filter":{"promotionId":4},"pagination":{"page":2,"perPage":10}});
})