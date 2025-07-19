import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getCpaId", () => {
    const params = idosell().getCpa.id(2).checkParams();
    expect(params).toEqual({"id":2});
})

test("getCpaPage", () => {
    const params = idosell().getCpa.page(1,2).checkParams();
    expect(params).toEqual({"resultsPage":1,"resultsLimit":2});
})