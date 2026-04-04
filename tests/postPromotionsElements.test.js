import idosell from "./dist/index.ts"
import { expect, test } from "vitest"

test("postPromotionsElementsPromotionId", () => {
    const params = idosell().postPromotionsElements.id("179").type("product").promotionId(4).checkParams();
    expect(params).toEqual({"elements":[{"id":"179","type":"product","promotionId":4}]});
})