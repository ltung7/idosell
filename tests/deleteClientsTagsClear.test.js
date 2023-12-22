import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("deleteClientsTagsClearClientId", () => {
    const params = idosell().deleteClientsTagsClear.clientId(3).getParams();
    expect(params).toEqual({"clientId":3});
})