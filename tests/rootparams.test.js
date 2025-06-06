import idosell from "./dist/index"
import { expect, test } from "vitest"

// Only partial test

const ROOTPARAMS_NODE = "rootparams";
const routes = [
    "postProductsCollectionsProducts",
    "putProductsCollectionsProducts",
    "putProductsCollectionsRenew",
    "deleteProductsSizes",
    "deleteClientsTags",
    "deleteDiscountsRebatesCode",
    "postDiscountsRebatesCard",
    "putSystemCurrencies",
    "putProductsParameters",
    "postProductsRestore"
]

for (const route of routes) {
    test("root of " + route, () => {
        const attributes = idosell()[route].getAttributes();
        expect(attributes).toContain(ROOTPARAMS_NODE);
    })  
}