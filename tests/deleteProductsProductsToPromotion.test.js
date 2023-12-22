import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("deleteProductsProductsToPromotionProducts", () => {
    const params = idosell().deleteProductsProductsToPromotion.promotionId(2).products([11]).getParams();
    expect(params).toEqual({"promotionId":2,"products":[11]});
})