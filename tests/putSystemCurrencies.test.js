import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putSystemCurrenciesScale", () => {
    const params = idosell().putSystemCurrencies.id("EUR").rate(4.7).scale(1).checkParams();
    expect(params).toEqual({"currencies":[{"id":"EUR","rate":4.7,"scale":1}]});
})