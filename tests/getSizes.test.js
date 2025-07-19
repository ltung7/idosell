import idosell from "./dist/index"
import { expect, test } from "vitest"

test("getSizesReturn_last_changed_time", () => {
    const params = idosell().getSizes.return_last_changed_time("y").checkParams();
    expect(params).toEqual({"return_last_changed_time":"y"});
})