import idosell from "./dist/index"
import { expect, test } from "vitest"


test("getProductsToFacebookCatalogFacebookCatalogId", () => {
    const params = idosell().getProductsToFacebookCatalog.shopId(1).facebookCatalogId(123).checkParams();
    expect(params).toEqual({"shopId":1,"facebookCatalogId":123});
})