import idosell from "./dist/index"
import { expect, test } from "vitest"

test("deleteClientsPricelistsPriceListId", () => {
    const params = idosell().deleteClientsPricelists.priceListId(205).checkParams();
    expect(params).toEqual({"priceListId":205});
})