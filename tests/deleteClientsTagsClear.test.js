import idosell from "./dist/index"
import { expect, test } from "vitest"

test("deleteClientsTagsClearClientId", () => {
    const params = idosell().deleteClientsTagsClear.clientId(3).checkParams();
    expect(params).toEqual({"clientId":3});
})