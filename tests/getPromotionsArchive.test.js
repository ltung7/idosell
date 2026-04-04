import idosell from "./dist/index.ts"
import { expect, test } from "vitest"

test("getPromotionsArchivePromotionId", () => {
    const params = idosell().getPromotionsArchive.promotionId(123).checkParams();
    expect(params).toEqual({"promotionId":123});
})