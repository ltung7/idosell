import { paramsProxy } from "../params.js";
export default (object) => {
    object.gate = { method: 'put', node: '/products/brands' };
    object.appendable = {
        except: [],
        arrayNode: "producers",
        index: 0
    };
    object.req = ["id", { "any": ["languagesConfigurations", "nameInPanel"] }];
    object.arrays = ["producers"];
    return new Proxy(object, paramsProxy);
};
