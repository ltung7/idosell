import idosell from "./dist/index.ts"
import { expect, test } from "vitest"

test("putPromotionsName", () => {
    const params = idosell().putPromotions.promotionId(4).name("Promotnion #4").checkParams();
    expect(params).toEqual({"promotionId":4,"name":"Promotnion #4"});
})