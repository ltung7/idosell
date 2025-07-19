import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putVouchersUnblockId", () => {
    const params = idosell().putVouchersUnblock.id(26).checkParams();
    expect(params).toEqual({"vouchers":[{"id":26}]});
})