import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getClientsPricesDiscountsClientIsActive", () => {
    const params = idosell().getClientsPricesDiscounts.clientIsActive("yes").checkParams();
    expect(params).toEqual({"clientIsActive":"yes"});
})

test("getClientsPricesDiscountsLastPurchased", () => {
    const params = idosell().getClientsPricesDiscounts.lastPurchased("2023-01-01", 1672704000000).checkParams();
    expect(params).toEqual({"clientLastPurchaseDate":{"clientLastPurchaseDateBegin":"2023-01-01","clientLastPurchaseDateEnd":"2023-01-03"}});
})

test("getClientsPricesDiscountsPage", () => {
    const params = idosell().getClientsPricesDiscounts.page(2,10).checkParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})

test("getClientsPricesDiscountsClientHasTradeCredit", () => {
    const params = idosell().getClientsPricesDiscounts.clientHasTradeCredit("positive").checkParams();
    expect(params).toEqual({"clientHasTradeCredit":"positive"});
})

test("getClientsPricesDiscountsClientsIds", () => {
    const params = idosell().getClientsPricesDiscounts.clientsIds([1,3]).checkParams();
    expect(params).toEqual({"clientsIds":[1,3]});
})