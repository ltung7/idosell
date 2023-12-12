import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getVouchersStatus", () => {
    const params = idosell().getVouchers.status("all").getParams();
    expect(params).toEqual({"status":"all"});
})

test("getVouchersIds", () => {
    const params = idosell().getVouchers.ids([1477570721]).getParams();
    expect(params).toEqual({"vouchers":[{"id":1477570721}]});
})