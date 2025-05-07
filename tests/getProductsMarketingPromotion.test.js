import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getProductsMarketingPromotionShopId", () => {
    const params = idosell().getProductsMarketingPromotion.shopId(1).getParams();
    expect(params).toEqual({"shopId":1});
})

test("getProductsMarketingPromotionProducts", () => {
    const params = idosell().getProductsMarketingPromotion.products([9,10,17]).getParams();
    expect(params).toEqual({"products":[9,10,17]});
})