import { paramsProxy } from "../params.js";
import { setProductText, getCurrentAppendableArray } from "../helpers.js";

export default (object) => {
    object.gate = { method: 'put', node: '/products/products' };
    object.custom = {
        setText: setProductText(object),
        editMode: () => { const settings = object.params.settings ?? {}; settings.settingModificationType = "edit"; return { settings } },
        addMode: () => { const settings = object.params.settings ?? {}; settings.settingModificationType = "edit"; return { settings } },
        addPrice: (value, type = "retail", net = false) => { const node = ["product", type[0].toUpperCase() + type.substring(1).toLowerCase(), "Price"]; if (net) node.push("Net"); const params = { priceChangeMode: "amount_diff" }; params[node.join("")] = value; return params; },
        setPrice: (value, type = "retail", net = false) => { const node = ["product", type[0].toUpperCase() + type.substring(1).toLowerCase(), "Price"]; if (net) node.push("Net"); const params = { priceChangeMode: "amount_set" }; params[node.join("")] = value; return params; },
        setMenu: (shopId, menuIds) => { if (!Array.isArray(menuIds)) menuIds = [menuIds]; const productMenuItems = getCurrentAppendableArray(object, "productMenuItems"); for (const menuItemId of menuIds) { productMenuItems.push({ productMenuOperation: "add_product", shopId, menuItemId }) } return { productMenuItems}; }
    };
    object.appendable = {
        except: ["settings","picturesSettings","editMode","addMode"],
        arrayNode: "products",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}