import ENUMS from "./enums.js";
import { gateProxy } from "./gates.js";
const DEFAULT_VERSION = 6;
const idosell = (url, apiKey, version = DEFAULT_VERSION) => {
    const auth = { url, apiKey, version, apikey: apiKey ? apiKey.slice(0, 6) + '*'.repeat(20) : "" };
    Object.defineProperty(auth, 'apiKey', { enumerable: false });
    const element = { auth, params: {} };
    return new Proxy(element, gateProxy);
};
export default idosell;
export { ENUMS };
