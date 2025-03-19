import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getClientsGiftcardsNumber", () => {
    const params = idosell().getClientsGiftcards.number([123,456,789]).getParams();
    expect(params).toEqual({"giftCards":[{"number":123},{"number":456},{"number":789}]});
})