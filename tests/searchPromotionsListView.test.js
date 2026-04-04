import idosell from "./dist/index.ts"
import { expect, test } from "vitest"

test("searchPromotionsListViewOrderByProperty", () => {
    const params = idosell().searchPromotionsListView.orderByProperty("id", false).checkParams();
    expect(params).toEqual({"orderBy":{"property":"id","orderByDirection":"asc"}});
})