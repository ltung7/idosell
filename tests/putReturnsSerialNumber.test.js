import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putReturnsSerialNumberSerialNumbers", () => {
    const params = idosell().putReturnsSerialNumber.return_id(2).id(8).size("U").serialNumbers(["abc"]).getParams();
    expect(params).toEqual({"return_id":2,"products":[{"id":8,"size":"U","serialNumbers":["abc"]}]});
})