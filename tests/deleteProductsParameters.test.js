import idosell from "./dist/index"
import { expect, test } from "vitest"

test("deleteProductsParametersIds", () => {
    const params = idosell().deleteProductsParameters.ids([95]).getParams();
    expect(params).toEqual({"ids":[95]});
})