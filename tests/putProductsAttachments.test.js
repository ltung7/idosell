import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putProductsAttachmentsAttachments", () => {
    const params = idosell().putProductsAttachments.productIdent({"identValue":"33","productIdentType":"id"}).attachments([{"attachmentUrl":"https://el.macropart.com/_app/immutable/assets/Macropart-logo.be38339c.svg","attachmentName":"mpt","langId":"pol","attachmentFileType":"image","attachmentEnable":"all","attachmentDownloadLog":"y"}]).getParams();
    expect(params).toEqual({"productsAttachments":[{"productIdent":{"identValue":"33","productIdentType":"id"},"attachments":[{"attachmentUrl":"https://el.macropart.com/_app/immutable/assets/Macropart-logo.be38339c.svg","attachmentName":"mpt","langId":"pol","attachmentFileType":"image","attachmentEnable":"all","attachmentDownloadLog":"y"}]}]});
})