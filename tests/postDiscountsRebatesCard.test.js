import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("postDiscountsRebatesCardCard_number", () => {
    const params = idosell().postDiscountsRebatesCard.campaign_id(103).card_number("num1").getParams();
    expect(params).toEqual({"campaign_id":103,"card_number":"num1"});
})