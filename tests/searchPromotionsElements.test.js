import idosell from "./dist/index.ts"
import { expect, test } from "vitest"

test("searchPromotionsElementsTypes", () => {
    const params = idosell().searchPromotionsElements.ids(["288"]).types("product").checkParams();
    expect(params).toEqual({"filter":{"ids":["288"],"types":["product"]}});
})

test("searchPromotionsElementsOrderByProperty", () => {
    const params = idosell().searchPromotionsElements.orderByProperty("promotion_id").checkParams();
    expect(params).toEqual({"orderBy":{"property":"promotion_id","orderByDirection":"desc"}});
})