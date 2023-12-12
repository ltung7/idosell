import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getProductsProductsToFacebookCatalogShopId", () => {
    const params = idosell().getProductsProductsToFacebookCatalog.shopId(123).getParams();
    expect(params).toEqual({"shopId":123});
})