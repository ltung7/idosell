import idosell from "./dist/index.ts"
import { expect, test } from "vitest"

test("getPromotionsPromotionId", () => {
    const params = idosell().getPromotions.promotionId(123).checkParams();
    expect(params).toEqual({"promotionId":123});
})