import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getCpaId", () => {
    const params = idosell().getCpa.id(2).getParams();
    expect(params).toEqual({"id":2});
})

test("getCpaPage", () => {
    const params = idosell().getCpa.page(1,2).getParams();
    expect(params).toEqual({"resultsPage":1,"resultsLimit":2});
})