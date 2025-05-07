import idosell from "./dist/index"
import { expect, test } from "vitest"

test("deleteClientsPricelistsPriceListId", () => {
    const params = idosell().deleteClientsPricelists.priceListId(205).getParams();
    expect(params).toEqual({"priceListId":205});
})