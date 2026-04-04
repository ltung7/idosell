import idosell from "./dist/index.ts"
import { expect, test } from "vitest"

test("postPromotionsEndPromotionId", () => {
    const params = idosell().postPromotionsEnd.promotionId(123).checkParams();
    expect(params).toEqual({"promotionId":123});
})