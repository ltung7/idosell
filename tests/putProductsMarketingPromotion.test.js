import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putProductsMarketingPromotionPromotionName", () => {
    const params = idosell().putProductsMarketingPromotion.promotionId("3").promotionName("Promocja").getParams();
    expect(params).toEqual({"promotionId":"3","promotionName":"Promocja"});
})