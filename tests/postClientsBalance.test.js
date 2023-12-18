import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("postClientsBalanceBalance", () => {
    const params = idosell().postClientsBalance.clientId("3").operation("add").currency("PLN").balance(100).getParams();
    expect(params).toEqual({"clientId":"3","operation":"add","currency":"PLN","balance":100});
})