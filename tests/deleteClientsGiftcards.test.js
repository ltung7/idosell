import idosell from "./dist/index"
import { expect, test } from "vitest"

test("deleteClientsGiftcardsId", () => {
    const params = idosell().deleteClientsGiftcards.id(25).checkParams();
    expect(params).toEqual({"giftCards":[{"id":25}]});
})