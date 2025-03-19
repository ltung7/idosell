import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getClientsCrmClientLogin", () => {
    const params = idosell().getClientsCrm.clientLogin("abcdefg").getParams();
    expect(params).toEqual({"clientLogin":"abcdefg"});
})

test("getClientsCrmClientIsWholesaler", () => {
    const params = idosell().getClientsCrm.clientIsWholesaler("yes").getParams();
    expect(params).toEqual({"clientIsWholesaler":"yes"});
})

test("getClientsCrmRegistered", () => {
    const params = idosell().getClientsCrm.registered("2023-01-01", 1672704000000).getParams();
    expect(params).toEqual({"clientRegistrationDate":{"clientRegistrationDateBegin":"2023-01-01","clientRegistrationDateEnd":"2023-01-03"}});
})

test("getClientsCrmPage", () => {
    const params = idosell().getClientsCrm.page(2,10).getParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})