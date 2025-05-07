import idosell from "./dist/index"
import { expect, test } from "vitest"

test("searchClientsGiftcardsNumber", () => {
    const params = idosell().searchClientsGiftcards.number([123,456,789]).getParams();
    expect(params).toEqual({"giftCards":[{"number":123},{"number":456},{"number":789}]});
})