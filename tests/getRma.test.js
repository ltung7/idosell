import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getRmaRmaIds", () => {
    const params = idosell().getRma.rmaIds([32]).checkParams();
    expect(params).toEqual({"rmaIds":[32]});
})

test("getRmaCreated", () => {
    const params = idosell().getRma.created("2023-12-01", "2023-12-31").checkParams();
    expect(params).toEqual({"creationDate":{"dateFrom":"2023-12-01","dateTo":"2023-12-31"}});
})

test("getRmaPage", () => {
    const params = idosell().getRma.page(2,10).checkParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})