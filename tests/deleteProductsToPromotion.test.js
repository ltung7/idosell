import idosell from "./dist/index"
import { expect, test } from "vitest"

test("deleteProductsToPromotionProducts", () => {
    const params = idosell().deleteProductsToPromotion.promotionId(2).products([11]).checkParams();
    expect(params).toEqual({"promotionId":2,"products":[11]});
})