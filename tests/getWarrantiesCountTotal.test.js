import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getWarrantiesCountTotalWarranty_ids", () => {
    const params = idosell().getWarrantiesCountTotal.warranty_ids(["Gwarancja sklepu na 30 dni"]).checkParams();
    expect(params).toEqual({"warranty_ids":["Gwarancja sklepu na 30 dni"]});
})