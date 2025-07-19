import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putProductsMarketingPromotionPromotionName", () => {
    const params = idosell().putProductsMarketingPromotion.promotionId("3").promotionName("Promocja").checkParams();
    expect(params).toEqual({"promotionId":"3","promotionName":"Promocja"});
})