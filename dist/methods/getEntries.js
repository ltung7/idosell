import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'get', node: '/entries/entries' };
    object.req = ["entryId", "langId"];
    return new Proxy(object, paramsProxy);
};
