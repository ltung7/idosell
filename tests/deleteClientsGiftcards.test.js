import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("deleteClientsGiftcardsId", () => {
    const params = idosell().deleteClientsGiftcards.id(25).getParams();
    expect(params).toEqual({"giftCards":[{"id":25}]});
})