import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putVouchersUnblockId", () => {
    const params = idosell().putVouchersUnblock.id(26).getParams();
    expect(params).toEqual({"vouchers":[{"id":26}]});
})