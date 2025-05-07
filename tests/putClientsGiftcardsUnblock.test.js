import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putClientsGiftcardsUnblockNumber", () => {
    const params = idosell().putClientsGiftcardsUnblock.id(23).number("Card23").getParams();
    expect(params).toEqual({"giftCards":[{"id":23,"number":"Card23"}]});
})