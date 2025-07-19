import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postProductsProductsToPromotionProducts", () => {
    const params = idosell().postProductsProductsToPromotion.promotionId(2).products([11]).checkParams();
    expect(params).toEqual({"promotionId":2,"products":[11]});
})