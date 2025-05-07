import idosell from "./dist/index"
import { expect, test } from "vitest"

test("deleteClientsClientId", () => {
    const params = idosell().deleteClients.clientId(4).getParams();
    expect(params).toEqual({"clientId":4});
})