import { paramsProxy } from "../params.js";

export const putWarrantiesLanguageDataProxy = (object) => {
    object.gate = { method: 'put', node: '/warranties/languageData' }
    return new Proxy(object, paramsProxy);
}