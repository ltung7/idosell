import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("deleteWmsSuppliersIds", () => {
    const params = idosell().deleteWmsSuppliers.ids([2]).getParams();
    expect(params).toEqual({"ids":[2]});
})