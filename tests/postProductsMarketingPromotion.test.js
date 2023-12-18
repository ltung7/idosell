import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("postProductsMarketingPromotionMarketingZones", () => {
    const params = idosell().postProductsMarketingPromotion.shopsIds([1]).promotionName("Promo").marketingZones({"promotion": "y"}).getParams();
    expect(params).toEqual({"shopsIds":[1],"promotionName":"Promo","marketingZones":{"promotion":"y"}});
})