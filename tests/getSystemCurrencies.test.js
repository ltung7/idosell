import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getSystemCurrenciesSymbol", () => {
    const params = idosell().getSystemCurrencies.symbol("EUR").getParams();
    expect(params).toEqual({"symbol":"EUR"});
})

test("getSystemCurrenciesDate", () => {
    const params = idosell().getSystemCurrencies.date("2023-01-01").getParams();
    expect(params).toEqual({"date":"2023-01-01 00:00:00"});
})