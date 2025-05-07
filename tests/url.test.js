// getClients.clientsIds([123,456,789]).lastPurchase("2023-01-01", 1672704000000)

import { queryfy } from "../dist/request";
import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getClientsLastPurchased", () => {
    const params = idosell().getClients.clientsIds([123,456,789]).lastPurchased("2023-01-01", 1672704000000).getParams();
    const search = queryfy(params);
    expect(search).toEqual("clientsIds=123%2C456%2C789&clientLastPurchaseDate%5BclientLastPurchaseDateBegin%5D=2023-01-01&clientLastPurchaseDate%5BclientLastPurchaseDateEnd%5D=2023-01-03")
})

test("getReturnsDates", () => {
    const params = idosell().getReturns.dates("2025-01-01", "2025-01-31", 'date_end').getParams();
    const search = queryfy(params);
    expect(search).toEqual("range%5Bdate%5D%5Bdate_begin%5D=2025-01-01&range%5Bdate%5D%5Bdate_end%5D=2025-01-31&range%5Bdate%5D%5Bdates_type%5D=date_end")
})