import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getVouchersTypesPage", () => {
    const params = idosell().getVouchersTypes.page(2,10).getParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})