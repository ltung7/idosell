import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postProductsProductsToFacebookCatalogProducts", () => {
    const params = idosell().postProductsProductsToFacebookCatalog.facebookCatalogId(1).shopId(1).products([9]).getParams();
    expect(params).toEqual({"facebookCatalogId":1,"shopId":1,"products":[9]});
})