import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getWarrantiesCountTotalWarranty_ids", () => {
    const params = idosell().getWarrantiesCountTotal.warranty_ids(["Gwarancja sklepu na 30 dni"]).getParams();
    expect(params).toEqual({"warranty_ids":["Gwarancja sklepu na 30 dni"]});
})