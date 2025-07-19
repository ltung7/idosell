import idosell from "./dist/index"
import { expect, test } from "vitest"

test("deleteOrdersDocumentsId", () => {
    const params = idosell().deleteOrdersDocuments.orderSerialNumber(9).id(3).checkParams();
    expect(params).toEqual({"documents":[{"orderSerialNumber":9,"id":3}]});
})