import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putWmsSuppliersName", () => {
    const params = idosell().putWmsSuppliers.id(1).name("Dostawca").checkParams();
    expect(params).toEqual({"suppliers":[{"id":1,"name":"Dostawca"}]});
})