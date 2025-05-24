import { paramsProxy } from "../params.js";
import { nest, nestArray } from "../helpers.js";
export default (object) => {
    object.gate = { method: 'put', node: '/products/images' };
    object.params = { "productsImagesSettings": { "productsImagesSourceType": "url", "productsImagesApplyMacro": true } };
    object.custom = {
        productId: nest("identValue", "productIdent", { "productIdentType": "id" }),
        shopIcon: nestArray(object, "productIconSource", "productIcons", { "productIconType": "shop" }),
        auctionIcon: nestArray(object, "productIconSource", "productIcons", { "productIconType": "auction" }),
        groupIcon: nestArray(object, "productIconSource", "productIcons", { "productIconType": "group" }),
        addImage: (source, priority = null) => { const index = object.appendable.index; if (!object.n)
            object.n = {}; if (!object.n[index])
            object.n[index] = 1; if (priority)
            object.n[index] = priority; const params = {}; const arr = object.params.productsImages; const node = { productImageNumber: object.n[index]++, productImageSource: source }; params.productImages = arr[arr.length - 1].productImages ?? []; params.productImages.push(node); return params; },
        base64: () => ({ productsImagesSettings: "base64", productsImagesApplyMacro: true })
    };
    object.appendable = {
        except: ["productsImagesSettings"],
        arrayNode: "productsImages",
        index: 0
    };
    object.arrays = ["productsImages"];
    return new Proxy(object, paramsProxy);
};
