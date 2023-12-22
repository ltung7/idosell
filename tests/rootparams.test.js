import idosell from "./dist/index.js"
import { expect, test } from "vitest"

const ROOTPARAMS_NODE = 'rootparams';

test("postProductsCollectionsProducts", () => {
    const attributes = idosell().postProductsCollectionsProducts.getAttributes();
    expect(attributes.includes(ROOTPARAMS_NODE)).toEqual(true);
})

test("putProductsCollectionsProducts", () => {
    const attributes = idosell().putProductsCollectionsProducts.getAttributes();
    expect(attributes.includes(ROOTPARAMS_NODE)).toEqual(true);
})

test("putProductsCollectionsRenew", () => {
    const attributes = idosell().putProductsCollectionsRenew.getAttributes();
    expect(attributes.includes(ROOTPARAMS_NODE)).toEqual(true);
})

test("deleteProductsSizes", () => {
    const attributes = idosell().deleteProductsSizes.getAttributes();
    expect(attributes.includes(ROOTPARAMS_NODE)).toEqual(true);
})
