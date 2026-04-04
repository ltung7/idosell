import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postProductsToFacebookCatalogProducts", () => {
    const params = idosell().postProductsToFacebookCatalog.facebookCatalogId(1).shopId(1).products([9]).checkParams();
    expect(params).toEqual({"facebookCatalogId":1,"shopId":1,"products":[9]});
})