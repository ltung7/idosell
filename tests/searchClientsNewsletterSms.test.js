import idosell from "./dist/index"
import { expect, test } from "vitest"

test("searchClientsNewsletterSmsPage", () => {
    const params = idosell().searchClientsNewsletterSms.page(2,10).checkParams();
    expect(params).toEqual({"results_page":2,"results_limit":10});
})

test("searchClientsNewsletterSmsLanguage", () => {
    const params = idosell().searchClientsNewsletterSms.language("pol").checkParams();
    expect(params).toEqual({"language":"pol"});
})

test("searchClientsNewsletterSmsDates", () => {
    const params = idosell().searchClientsNewsletterSms.dates("2023-01-01", 1672704000000).checkParams();
    expect(params).toEqual({"date":{"from":"2023-01-01","to":"2023-01-03"}});
})