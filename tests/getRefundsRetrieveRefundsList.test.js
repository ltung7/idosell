import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getRefundsRetrieveRefundsListPage", () => {
    const params = idosell().getRefundsRetrieveRefundsList.sourceType("all").page(0).checkParams();
    expect(params).toEqual({"sourceType":"all","resultsPage":0,"resultsLimit":100});
})