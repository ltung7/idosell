import { paramsProxy } from "../params.js";
import { arrayOfObjects, page } from "../helpers.js";

export default (object) => {
    object.gate = { method: 'get', node: '/products/auctions' };
    object.custom = {
        ids: arrayOfObjects("products", "identValue", {"identType":"id"}),
        fromAllegro: () => { const auctionSites = object.params[object.appendable.index]; console.log("auctionSites"); auctionSites.push("allegro"); return { auctionSites }},
        page
    };
    return new Proxy(object, paramsProxy);
}