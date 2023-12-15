import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putClientsClientNote", () => {
    const params = idosell().putClients.clientLogin("iai_demo").clientNote("a client note").getParams();
    expect(params).toEqual({"clients":[{"clientLogin":"iai_demo","clientNote":"a client note"}]});
})