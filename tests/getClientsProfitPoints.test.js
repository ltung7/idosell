import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getClientsProfitPointsClientsIds", () => {
    const params = idosell().getClientsProfitPoints.clientsIds([1,3,4]).getParams();
    expect(params).toEqual({"clientsIds":[1,3,4]});
})

test("getClientsProfitPointsClientIsActive", () => {
    const params = idosell().getClientsProfitPoints.clientIsActive("yes").getParams();
    expect(params).toEqual({"clientIsActive":"yes"});
})

test("getClientsProfitPointsPage", () => {
    const params = idosell().getClientsProfitPoints.page(2,10).getParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})