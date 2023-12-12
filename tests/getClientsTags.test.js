import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getClientsTagsClientId", () => {
    const params = idosell().getClientsTags.clientId(3).getParams();
    expect(params).toEqual({"clientId":3});
})