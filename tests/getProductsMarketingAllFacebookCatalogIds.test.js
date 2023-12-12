import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getProductsMarketingAllFacebookCatalogIdsShopId", () => {
    const params = idosell().getProductsMarketingAllFacebookCatalogIds.shopId(123).getParams();
    expect(params).toEqual({"shopId":123});
})