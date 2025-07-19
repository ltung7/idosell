import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putWarrantiesName", () => {
    const params = idosell().putWarranties.id("6").name("Gwarancja").checkParams();
    expect(params).toEqual({"warranties":[{"id":"6","name":"Gwarancja"}]});
})