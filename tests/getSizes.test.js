import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("getSizesReturn_last_changed_time", () => {
    const params = idosell().getSizes.return_last_changed_time("y").getParams();
    expect(params).toEqual({"return_last_changed_time":"y"});
})