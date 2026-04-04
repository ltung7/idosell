import idosell from "./dist/index.ts"
import { expect, test } from "vitest"

test("deletePromotionsPromotionId", () => {
    const params = idosell().deletePromotions.promotionId(123).checkParams();
    expect(params).toEqual({"promotionId":123});
})