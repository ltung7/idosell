import idosell from "./dist/index.ts"
import { expect, test } from "vitest"

test("deletePromotionsArchivePromotionId", () => {
    const params = idosell().deletePromotionsArchive.promotionId(123).checkParams();
    expect(params).toEqual({"promotionId":123});
})