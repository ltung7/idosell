import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getDeliveriesRegionsShopId", () => {
    const params = idosell().getDeliveriesRegions.shopId(1).checkParams();
    expect(params).toEqual({"shopId":1});
})