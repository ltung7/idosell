import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postProductsToPromotionProducts", () => {
    const params = idosell().postProductsToPromotion.promotionId(2).products([11]).checkParams();
    expect(params).toEqual({"promotionId":2,"products":[11]});
})