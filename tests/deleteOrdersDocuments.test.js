import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("deleteOrdersDocumentsId", () => {
    const params = idosell().deleteOrdersDocuments.orderSerialNumber(9).id(3).getParams();
    expect(params).toEqual({"documents":[{"orderSerialNumber":9,"id":3}]});
})