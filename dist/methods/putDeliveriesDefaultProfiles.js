import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/deliveries/defaultProfiles' };
    object.req = ["regionId", "shopId", { "any": ["retailProfileId", "wholesaleProfileId"] }];
    return new Proxy(object, paramsProxy);
};
