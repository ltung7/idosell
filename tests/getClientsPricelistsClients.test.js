import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getClientsPricelistsClientsPriceListId", () => {
    const params = idosell().getClientsPricelistsClients.priceListId(4).checkParams();
    expect(params).toEqual({"priceListId":4});
})