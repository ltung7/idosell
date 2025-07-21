import idosell from "./dist/index"
import { expect, test } from "vitest"


test("getProductsAuctionsPage", () => {
    const params = idosell().getProductsAuctions.page(2,10).checkParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})

test("getProductsAuctionsFromAllegro", () => {
    const params = idosell().getProductsAuctions.fromAllegro().checkParams();
    expect(params).toEqual({"auctionSites":["allegro"]});
})

test("getProductsAuctionsIds", () => {
    const params = idosell().getProductsAuctions.ids(38204).checkParams();
    expect(params).toEqual({"identType":"id","products":[38204]});
})