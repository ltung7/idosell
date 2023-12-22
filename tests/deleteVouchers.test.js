import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("deleteVouchersId", () => {
    const params = idosell().deleteVouchers.id(1).getParams();
    expect(params).toEqual({"vouchers":[{"id":1}]});
})