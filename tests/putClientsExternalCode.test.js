import idosell from "./dist/index.ts"
import { expect, test } from "vitest"

test("putClientsExternalCodeCode_extern", () => {
    const params = idosell().putClientsExternalCode.client_id(10).code_extern("vip10").checkParams();
    expect(params).toEqual({"clients":[{"client_id":10,"code_extern":"vip10"}]});
})