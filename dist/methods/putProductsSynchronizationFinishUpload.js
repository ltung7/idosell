import { paramsProxy } from "../params.js";

export const putProductsSynchronizationFinishUploadProxy = (object) => {
    object.gate = { method: 'put', node: '/products/synchronization/finishUpload' }
    return new Proxy(object, paramsProxy);
}