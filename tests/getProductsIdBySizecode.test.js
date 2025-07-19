import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getProductsIdBySizecodeCodes", () => {
    const params = idosell().getProductsIdBySizecode.codes(["SSL-B2C4"]).checkParams();
    expect(params).toEqual({"codes":["SSL-B2C4"]});
})