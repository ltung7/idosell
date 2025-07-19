import idosell from "./dist/index"
import { expect, test } from "vitest"

test("deleteProductsProductsToPromotionProducts", () => {
    const params = idosell().deleteProductsProductsToPromotion.promotionId(2).products([11]).checkParams();
    expect(params).toEqual({"promotionId":2,"products":[11]});
})