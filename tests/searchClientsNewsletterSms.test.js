import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getClientsNewsletterEmailSMSPage", () => {
    const params = idosell().getClientsNewsletterEmailSMS.page(2,10).getParams();
    expect(params).toEqual({"results_page":2,"results_limit":10});
})

test("getClientsNewsletterEmailSMSLanguage", () => {
    const params = idosell().getClientsNewsletterEmailSMS.language("pol").getParams();
    expect(params).toEqual({"language":"pol"});
})

test("getClientsNewsletterEmailSMSDates", () => {
    const params = idosell().getClientsNewsletterEmailSMS.dates("2023-01-01", 1672704000000).getParams();
    expect(params).toEqual({"date":{"from":"2023-01-01","to":"2023-01-03"}});
})