import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getProductsAuctionsPage", () => {
    const params = idosell().getProductsAuctions.page(2,10).checkParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})

test("getProductsAuctionsFromAllegro", () => {
    const params = idosell().getProductsAuctions.ids(33).fromAllegro().checkParams();
    expect(params).toEqual({"products":[{"identType":"id","identValue":33}],"auctionSites":["allegro"]});
})