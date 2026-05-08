import idosell from "./dist/index.ts"
import { expect, test } from "vitest"

test("getProductsAttachmentsGetContentAttachmentId", () => {
    const params = idosell().getProductsAttachmentsGetContent.productIdentType("id").productIdentValue("294").attachmentId(5).checkParams();
    expect(params).toEqual({"productIdentType":"id","productIdentValue":"294","attachmentId":5});
})