import idosell from "./dist/index"
import { expect, test } from "vitest"

test("deleteWarrantiesWarranty_ids", () => {
    const params = idosell().deleteWarranties.warranty_ids([6]).getParams();
    expect(params).toEqual({"warranty_ids":[6]});
})