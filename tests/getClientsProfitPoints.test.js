import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getClientsProfitPointsClientsIds", () => {
    const params = idosell().getClientsProfitPoints.clientsIds([1,3,4]).checkParams();
    expect(params).toEqual({"clientsIds":[1,3,4]});
})

test("getClientsProfitPointsClientIsActive", () => {
    const params = idosell().getClientsProfitPoints.clientIsActive("yes").checkParams();
    expect(params).toEqual({"clientIsActive":"yes"});
})

test("getClientsProfitPointsPage", () => {
    const params = idosell().getClientsProfitPoints.page(2,10).checkParams();
    expect(params).toEqual({"resultsPage":2,"resultsLimit":10});
})