import idosell from "./dist/index"
import { expect, test } from "vitest"

test("searchClientsNewsletterEmailLanguage", () => {
    const params = idosell().searchClientsNewsletterEmail.language("pol").getParams();
    expect(params).toEqual({"language":"pol"});
})

test("searchClientsNewsletterEmailPage", () => {
    const params = idosell().searchClientsNewsletterEmail.page(2,10).getParams();
    expect(params).toEqual({"results_page":2,"results_limit":10});
})