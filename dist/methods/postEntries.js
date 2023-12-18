import { paramsProxy } from "../params.js";

export const postEntriesProxy = (object) => {
    object.gate = { method: 'post', node: '/entries/entries' }
    object.appendable = {
        except: ["shopId","date","visible","visibleOnSitesList","products","pictureData","titleLinkType","link"],
        arrayNode: "langs",
        index: 0
    }
    return new Proxy(object, paramsProxy);
}