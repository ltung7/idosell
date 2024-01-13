import { paramsProxy } from "../params.js";
import { arrayOfObjects, page } from "../helpers.js";

export default (object) => {
    object.gate = { method: 'get', node: '/products/auctions' };
    object.custom = {
        ids: arrayOfObjects("products", "identValue", {"identType":"id"}),
        fromAllegro: () => { const auctionSites = object.params.auctionSites ?? []; auctionSites.push("allegro"); return { auctionSites }},
        page
    };
    return new Proxy(object, paramsProxy);
}