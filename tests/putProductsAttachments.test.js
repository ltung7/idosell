import idosell from "./dist/index"
import { expect, test } from "vitest"

test("putProductsAttachmentsAttachments", () => {
    const params = idosell().putProductsAttachments.productIdent({"identValue":"33","productIdentType":"id"}).attachments([{"attachmentUrl":"https://pl.wikipedia.org/static/images/icons/wikipedia.png","attachmentName":"mpt","langId":"pol","attachmentFileType":"image","attachmentEnable":"all","attachmentDownloadLog":"y"}]).checkParams();
    expect(params).toEqual({"productsAttachments":[{"productIdent":{"identValue":"33","productIdentType":"id"},"attachments":[{"attachmentUrl":"https://pl.wikipedia.org/static/images/icons/wikipedia.png","attachmentName":"mpt","langId":"pol","attachmentFileType":"image","attachmentEnable":"all","attachmentDownloadLog":"y"}]}]});
})

test("putProductsAttachmentsProductId", () => {
    const params = idosell().putProductsAttachments.productId(30).attachments([]).checkParams();
    expect(params).toEqual({"productsAttachments":[{"productIdent":{"productIdentType":"id","identValue":30},"attachments":[]}]});
})