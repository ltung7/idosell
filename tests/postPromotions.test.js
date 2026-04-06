import idosell from "./dist/index.ts"
import { expect, test } from "vitest"

test("postPromotionsName", () => {
    const params = idosell().postPromotions.activeInShops([1]).newPriceValue({ "value": "5" }).name("Promo").checkParams();
    expect(params).toEqual({"activeInShops":[1],"newPriceValue":{"value":"5"},"name":"Promo"});
})