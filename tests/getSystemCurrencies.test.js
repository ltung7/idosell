import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getSystemCurrenciesSymbol", () => {
    const params = idosell().getSystemCurrencies.symbol("EUR").checkParams();
    expect(params).toEqual({"symbol":"EUR"});
})

test("getSystemCurrenciesDate", () => {
    const params = idosell().getSystemCurrencies.date("2023-01-01").checkParams();
    expect(params).toEqual({"date":"2023-01-01 00:00:00"});
})