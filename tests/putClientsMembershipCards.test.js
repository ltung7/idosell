import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putClientsMembershipCardsPin", () => {
    const params = idosell().putClientsMembershipCards.login("iai_demo").card_type(1).pin(9999).getParams();
    expect(params).toEqual({"login":"iai_demo","membership_cards":[{"card_type":1,"pin":9999}]});
})