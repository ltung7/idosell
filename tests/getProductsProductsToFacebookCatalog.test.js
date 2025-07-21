import idosell from "./dist/index"
import { expect, test } from "vitest"


test("getProductsProductsToFacebookCatalogFacebookCatalogId", () => {
    const params = idosell().getProductsProductsToFacebookCatalog.shopId(1).facebookCatalogId(123).checkParams();
    expect(params).toEqual({"shopId":1,"facebookCatalogId":123});
})