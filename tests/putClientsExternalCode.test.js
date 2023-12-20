import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putClientsExternalCodeCode_extern", () => {
    const params = idosell().putClientsExternalCode.client_login("iai_demo").code_extern("abc").getParams();
    expect(params).toEqual({"client_login":"iai_demo","code_extern":"abc"});
})