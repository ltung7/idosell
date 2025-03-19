import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getClientsNewsletterEmailShopsLanguage", () => {
    const params = idosell().getClientsNewsletterEmailShops.language("pol").getParams();
    expect(params).toEqual({"language":"pol"});
})

test("getClientsNewsletterEmailShopsPage", () => {
    const params = idosell().getClientsNewsletterEmailShops.page(2,10).getParams();
    expect(params).toEqual({"results_page":2,"results_limit":10});
})