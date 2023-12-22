import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("deleteProductsProductsToFacebookCatalogFacebookCatalogId", () => {
    const params = idosell().deleteProductsProductsToFacebookCatalog.shopId(1).products([9]).facebookCatalogId(123).getParams();
    expect(params).toEqual({"shopId":1,"products":[9],"facebookCatalogId":123});
})