import idosell from "./dist/index"
import { expect, test } from "vitest"

test("deleteWmsSuppliersIds", () => {
    const params = idosell().deleteWmsSuppliers.ids([2]).checkParams();
    expect(params).toEqual({"ids":[2]});
})