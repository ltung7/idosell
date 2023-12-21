import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putVouchersBlockId", () => {
    const params = idosell().putVouchersBlock.id(26).getParams();
    expect(params).toEqual({"vouchers":[{"id":26}]});
})