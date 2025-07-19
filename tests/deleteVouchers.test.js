import idosell from "./dist/index"
import { expect, test } from "vitest"

test("deleteVouchersId", () => {
    const params = idosell().deleteVouchers.id(1).checkParams();
    expect(params).toEqual({"vouchers":[{"id":1}]});
})