import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getProductsProductsToFacebookCatalogShopId", () => {
    const params = idosell().getProductsProductsToFacebookCatalog.shopId(123).checkParams();
    expect(params).toEqual({"shopId":123});
})