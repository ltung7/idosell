// getClients.clientsIds([123,456,789]).lastPurchase("2023-01-01", 1672704000000)

import { queryfy } from "../dist/request";
import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getClientsLastPurchased", () => {
    const params = idosell().getClients.clientsIds([123,456,789]).lastPurchased("2023-01-01", 1672704000000).getParams();
    const search = queryfy(params);
    expect(search).toEqual("clientsIds=123%2C456%2C789&clientLastPurchaseDate%5BclientLastPurchaseDateBegin%5D=2023-01-01&clientLastPurchaseDate%5BclientLastPurchaseDateEnd%5D=2023-01-03")
})