import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putDiscountsRebatesBlockCardCard_number", () => {
    const params = idosell().putDiscountsRebatesBlockCard.card_number("20171227-45").getParams();
    expect(params).toEqual({"card_number":"20171227-45"});
})