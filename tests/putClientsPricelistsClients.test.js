import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putClientsPricelistsClientsClientsIds", () => {
    const params = idosell().putClientsPricelistsClients.priceListId(200).clientsIds([9,10]).getParams();
    expect(params).toEqual({"priceListId":200,"clientsIds":[9,10]});
})