import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getProductsAuctionsPage", () => {
    const params = idosell().getProductsAuctions.page(2,10).getParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})

test("getProductsAuctionsFromAllegro", () => {
    const params = idosell().getProductsAuctions.ids(33).fromAllegro().getParams();
    expect(params).toEqual({"products":[{"identType":"id","identValue":33}],"auctionSites":["allegro"]});
})