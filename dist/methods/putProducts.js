import { paramsProxy } from "../params.js";
import { setProductText, getCurrentAppendableArray, modifyPrice, arrayOfObjects } from "../helpers.js";
export default (object) => {
    object.gate = { method: 'put', node: '/products/products' };
    object.custom = {
        setText: setProductText(object),
        editMode: () => { const settings = object.params.settings ?? {}; settings.settingModificationType = "edit"; return { settings }; },
        addMode: () => { const settings = object.params.settings ?? {}; settings.settingModificationType = "edit"; return { settings }; },
        addPrice: (value, type = "retail", net = false) => modifyPrice(value, type, net, "amount_diff"),
        setPrice: (value, type = "retail", net = false) => modifyPrice(value, type, net, "amount_set"),
        setMenu: (shopId, menuIds) => { if (!Array.isArray(menuIds))
            menuIds = [menuIds]; const productMenuItems = getCurrentAppendableArray(object, "productMenuItems"); for (const menuItemId of menuIds) {
            productMenuItems.push({ productMenuOperation: "add_product", shopId, menuItemId });
        } return { productMenuItems }; },
        pictures: (picturesArray) => { if (picturesArray.length) {
            if (!object.params.picturesSettings)
                object.params.picturesSettings = {};
            object.params.picturesSettings.picturesSettingInputType = picturesArray[0].indexOf("http") === 0 ? "url" : "base64";
        } ; return arrayOfObjects("productPictures", "productPictureSource")(picturesArray); }
    };
    object.appendable = {
        except: ["settings", "picturesSettings", "editMode", "addMode"],
        arrayNode: "products",
        index: 0
    };
    return new Proxy(object, paramsProxy);
};
