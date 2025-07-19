import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putVouchersName", () => {
    const params = idosell().putVouchers.id(26).name("Bon").checkParams();
    expect(params).toEqual({"vouchers":[{"id":26,"name":"Bon"}]});
})