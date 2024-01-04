import idosell from "./dist/index.js"
import { expect, test } from "vitest"

test("putProductsImagesProductImages", () => {
    const params = idosell().putProductsImages.productsImagesSettings({"productsImagesSourceType":"url","productsImagesApplyMacro":true}).productIdent({"identValue":"33","productIdentType":"id"}).productImages([{"productImageSource":"https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png","productImageNumber":7}]).getParams();
    expect(params).toEqual({"productsImagesSettings":{"productsImagesSourceType":"url","productsImagesApplyMacro":true},"productsImages":[{"productIdent":{"identValue":"33","productIdentType":"id"},"productImages":[{"productImageSource":"https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png","productImageNumber":7}]}]});
})

test("putProductsImagesAddSingleImage", () => {
    const params = idosell().putProductsImages.productId(31).addImage("https://www.idosell.com/panel/file-gate.php?id=279794&ext=.webp").getParams();
    expect(params).toEqual({"productsImagesSettings":{"productsImagesSourceType":"url","productsImagesApplyMacro":true},"productsImages":[{"productIdent":{"productIdentType":"id","identValue":31},"productImages":[{"productImageNumber":1,"productImageSource":"https://www.idosell.com/panel/file-gate.php?id=279794&ext=.webp"}]}]});
})

test("putProductsImagesAddMultipleImage", () => {
    const params = idosell().putProductsImages.productId(31).addImage("https://www.idosell.com/panel/file-gate.php?id=279792&ext=.webp", 4).addImage("https://www.idosell.com/panel/file-gate.php?id=279793&ext=.webp").getParams();
    expect(params).toEqual({"productsImagesSettings":{"productsImagesSourceType":"url","productsImagesApplyMacro":true},"productsImages":[{"productIdent":{"productIdentType":"id","identValue":31},"productImages":[{"productImageNumber":4,"productImageSource":"https://www.idosell.com/panel/file-gate.php?id=279792&ext=.webp"},{"productImageNumber":5,"productImageSource":"https://www.idosell.com/panel/file-gate.php?id=279793&ext=.webp"}]}]});
})

test("putProductsImagesShopIcon", () => {
    const params = idosell().putProductsImages.productId(31).shopIcon("https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png").getParams();
    expect(params).toEqual({"productsImagesSettings":{"productsImagesSourceType":"url","productsImagesApplyMacro":true},"productsImages":[{"productIdent":{"productIdentType":"id","identValue":31},"productIcons":[{"productIconType":"shop","productIconSource":"https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png"}]}]});
})

test("putProductsImagesIcons", () => {
    const params = idosell().putProductsImages.productId(31).shopIcon("https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png").auctionIcon("https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png").groupIcon("https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png").getParams();
    expect(params).toEqual({"productsImagesSettings":{"productsImagesSourceType":"url","productsImagesApplyMacro":true},"productsImages":[{"productIdent":{"productIdentType":"id","identValue":31},"productIcons":[{"productIconType":"shop","productIconSource":"https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png"},{"productIconType":"auction","productIconSource":"https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png"},{"productIconType":"group","productIconSource":"https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png"}]}]});
})