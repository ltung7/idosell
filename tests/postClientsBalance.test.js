import idosell from "./dist/index"
import { expect, test } from "vitest"

test("postClientsBalanceBalance", () => {
    const params = idosell().postClientsBalance.clientId("3").operation("add").currency("PLN").balance(100).checkParams();
    expect(params).toEqual({"clientId":"3","operation":"add","currency":"PLN","balance":100});
})

test("postClientsBalanceAdd", () => {
    const params = idosell().postClientsBalance.clientId(3).add(100).checkParams();
    expect(params).toEqual({"clientId":3,"operation":"add","balance":100,"currency":"PLN"});
})

test("postClientsBalanceRemove", () => {
    const params = idosell().postClientsBalance.clientId(3).remove(100, "EUR").checkParams();
    expect(params).toEqual({"clientId":3,"operation":"remove","balance":100,"currency":"EUR"});
})