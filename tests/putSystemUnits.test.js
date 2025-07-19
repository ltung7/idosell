import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putSystemUnitsNameInPanel", () => {
    const params = idosell().putSystemUnits.id(3).nameInPanel("paczki").checkParams();
    expect(params).toEqual({"units":[{"id":3,"nameInPanel":"paczki"}]});
})