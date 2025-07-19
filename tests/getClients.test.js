import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getClientsClientsIds", () => {
    const params = idosell().getClients.clientsIds([123,456,789]).checkParams();
    expect(params).toEqual({"clientsIds":[123,456,789]});
})

test("getClientsClientHasTradeCredit", () => {
    const params = idosell().getClients.clientHasTradeCredit("nonzero").checkParams();
    expect(params).toEqual({"clientHasTradeCredit":"nonzero"});
})

test("getClientsLastPurchased", () => {
    const params = idosell().getClients.lastPurchased("2023-01-01", 1672704000000).checkParams();
    expect(params).toEqual({"clientLastPurchaseDate":{"clientLastPurchaseDateBegin":"2023-01-01","clientLastPurchaseDateEnd":"2023-01-03"}});
})

test("getClientsPage", () => {
    const params = idosell().getClients.page(2,10).checkParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})