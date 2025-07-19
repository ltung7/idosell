import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putProductsAttachmentsAttachments", () => {
    const params = idosell().putProductsAttachments.productIdent({"identValue":"33","productIdentType":"id"}).attachments([{"attachmentUrl":"https://el.macropart.com/_app/immutable/assets/Macropart-logo.be38339c.svg","attachmentName":"mpt","langId":"pol","attachmentFileType":"image","attachmentEnable":"all","attachmentDownloadLog":"y"}]).getParams();
    expect(params).toEqual({"productsAttachments":[{"productIdent":{"identValue":"33","productIdentType":"id"},"attachments":[{"attachmentUrl":"https://el.macropart.com/_app/immutable/assets/Macropart-logo.be38339c.svg","attachmentName":"mpt","langId":"pol","attachmentFileType":"image","attachmentEnable":"all","attachmentDownloadLog":"y"}]}]});
})

test("putProductsAttachmentsProductId", () => {
    const params = idosell().putProductsAttachments.productId(30).getParams();
    expect(params).toEqual({"productsAttachments":[{"productIdent":{"productIdentType":"id","identValue":30}}]});
})