import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putClientsGiftcardsBlockNumber", () => {
    const params = idosell().putClientsGiftcardsBlock.id(23).number("Card23").checkParams();
    expect(params).toEqual({"giftCards":[{"id":23,"number":"Card23"}]});
})