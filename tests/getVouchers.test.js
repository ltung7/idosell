import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getVouchersStatus", () => {
    const params = idosell().getVouchers.status("all").checkParams();
    expect(params).toEqual({"status":"all"});
})

test("getVouchersIds", () => {
    const params = idosell().getVouchers.ids([1477570721]).checkParams();
    expect(params).toEqual({"vouchers":[{"id":1477570721}]});
})

test("getVouchersIssued", () => {
    const params = idosell().getVouchers.issued("2023-12-01","2023-12-31").checkParams();
    expect(params).toEqual({"issueDateFrom":"2023-12-01","issueDateTo":"2023-12-31"});
})

test("getVouchersExpires", () => {
    const params = idosell().getVouchers.expires("2023-12-01","2023-12-31").checkParams();
    expect(params).toEqual({"expirationDateFrom":"2023-12-01","expirationDateTo":"2023-12-31"});
})

test("getVouchersUsed", () => {
    const params = idosell().getVouchers.used("2023-12-01","2023-12-31").checkParams();
    expect(params).toEqual({"usageDateFrom":"2023-12-01","usageDateTo":"2023-12-31"});
})