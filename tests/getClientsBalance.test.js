import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getClientsBalanceActive", () => {
    const params = idosell().getClientsBalance.active("yes").checkParams();
    expect(params).toEqual({ "active": "yes" });
})

test("getClientsBalancePage", () => {
    const params = idosell().getClientsBalance.page(2,10).checkParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})

test("getClientsBalanceClient_numbers", () => {
    const params = idosell().getClientsBalance.client_numbers([123,456,678]).checkParams();
    expect(params).toEqual({"client_numbers":[123,456,678]});
})

test("getClientsBalanceLastPurchased", () => {
    const params = idosell().getClientsBalance.lastPurchased("2023-01-01", 1672704000000).checkParams();
    expect(params).toEqual({"lastPurchaseDate":{"from":"2023-01-01","to":"2023-01-03"}});
})