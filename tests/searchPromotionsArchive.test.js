import idosell from "./dist/index.ts"
import { expect, test } from "vitest"

test("searchPromotionsArchiveOrderByProperty", () => {
    const params = idosell().searchPromotionsArchive.orderByProperty("id").checkParams();
    expect(params).toEqual({"orderBy":{"property":"id","orderByDirection":"desc"}});
})

test("searchPromotionsArchiveShops", () => {
    const params = idosell().searchPromotionsArchive.shops([1]).checkParams();
    expect(params).toEqual({"filter":{"shops":[1]}});
})