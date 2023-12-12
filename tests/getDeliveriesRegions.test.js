import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getDeliveriesRegionsShopId", () => {
    const params = idosell().getDeliveriesRegions.shopId(1).getParams();
    expect(params).toEqual({"shopId":1});
})