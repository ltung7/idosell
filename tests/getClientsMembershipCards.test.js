import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getClientsMembershipCardsId", () => {
    const params = idosell().getClientsMembershipCards.id(123).getParams();
    expect(params).toEqual({"id":123});
})