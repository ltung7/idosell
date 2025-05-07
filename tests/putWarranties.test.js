import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putWarrantiesName", () => {
    const params = idosell().putWarranties.id("6").name("Gwarancja").getParams();
    expect(params).toEqual({"warranties":[{"id":"6","name":"Gwarancja"}]});
})