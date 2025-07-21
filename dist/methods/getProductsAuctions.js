import { paramsProxy } from "../params.js";
import { nest, page } from "../helpers.js";
export default (object) => {
    object.gate = { method: 'get', node: '/products/auctions' };
    object.custom = {
        ids: nest("products", "", { "identType": "id" }, true),
        fromAllegro: () => { const auctionSites = ["allegro"]; return { auctionSites }; },
        page
    };
    return new Proxy(object, paramsProxy);
};
