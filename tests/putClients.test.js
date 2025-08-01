import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putClientsClientNote", () => {
    const params = idosell().putClients.clientLogin("iaisystem").clientNote("System").checkParams();
    expect(params).toEqual({"clients":[{"clientLogin":"iaisystem","clientNote":"System"}]});
})

test("putClientsClientNoteMultiple", () => {
    const params = idosell().putClients.clientLogin("iaisystem").clientNote("System").append().clientLogin("iai_demo").clientNote("Demo").checkParams();
    expect(params).toEqual({"clients":[{"clientLogin":"iaisystem","clientNote":"System"},{"clientLogin":"iai_demo","clientNote":"Demo"}]});
})