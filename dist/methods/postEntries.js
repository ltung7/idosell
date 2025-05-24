import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'post', node: '/entries/entries' };
    object.appendable = {
        except: ["shopId", "date", "visible", "visibleOnSitesList", "products", "pictureData", "titleLinkType", "link"],
        arrayNode: "langs",
        index: 0
    };
    object.arrays = ["visibleOnSitesList", "products", "langs"];
    return new Proxy(object, paramsProxy);
};
