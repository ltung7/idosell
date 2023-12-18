import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("postVouchersName", () => {
    const params = idosell().postVouchers.typeId(9).number("V123456789").shops([1]).balance({ "amount":100, "currency":"PLN"}).name("MyVoucher").getParams();
    expect(params).toEqual({"vouchers":[{"typeId":9,"number":"V123456789","shops":[1],"balance":{"amount":100,"currency":"PLN"},"name":"MyVoucher"}]});
})