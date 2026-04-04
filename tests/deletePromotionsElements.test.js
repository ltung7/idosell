import idosell from "./dist/index.ts"
import { expect, test } from "vitest"

test("deletePromotionsElementsId", () => {
    const params = idosell().deletePromotionsElements.promotionId(4).type("product").id("288").checkParams();
    expect(params).toEqual({"elements":[{"promotionId":4,"type":"product","id":"288"}]});
})