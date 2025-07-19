import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getClientsGiftcardsTypesPage", () => {
    const params = idosell().getClientsGiftcardsTypes.page(2,10).checkParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})