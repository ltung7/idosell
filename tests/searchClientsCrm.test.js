import idosell from "./dist/index"
import { expect, test } from "vitest"

test("searchClientsCrmClientLogin", () => {
    const params = idosell().searchClientsCrm.clientLogin("abcdefg").getParams();
    expect(params).toEqual({"clientLogin":"abcdefg"});
})

test("searchClientsCrmClientIsWholesaler", () => {
    const params = idosell().searchClientsCrm.clientIsWholesaler("yes").getParams();
    expect(params).toEqual({"clientIsWholesaler":"yes"});
})

test("searchClientsCrmRegistered", () => {
    const params = idosell().searchClientsCrm.registered("2023-01-01", 1672704000000).getParams();
    expect(params).toEqual({"clientRegistrationDate":{"clientRegistrationDateBegin":"2023-01-01","clientRegistrationDateEnd":"2023-01-03"}});
})

test("searchClientsCrmPage", () => {
    const params = idosell().searchClientsCrm.page(2,10).getParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})