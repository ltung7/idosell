import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putClientsGiftcardsName", () => {
    const params = idosell().putClientsGiftcards.id(23).name("MyCard").getParams();
    expect(params).toEqual({"giftCards":[{"id":23,"name":"MyCard"}]});
})