import { PRODUCE_SIZE_INDEX } from "./enums.d.js";
import ENUMS from "./enums.js";
const getIaiCode = (productId, sizeId) => {
    if (sizeId === 'uniw')
        return productId.toString();
    return [productId, sizeId].join('-');
};
const traverseNodes = (node, pathIndex, path, results = []) => {
    if (!node) {
        return;
    }
    if (pathIndex >= path.length) {
        results.push(node);
        return;
    }
    const key = path[pathIndex];
    if (key === 'array') {
        if (Array.isArray(node)) {
            node.forEach(item => traverseNodes(item, pathIndex + 1, path, results));
        }
    }
    else {
        if (node[key] !== undefined) {
            traverseNodes(node[key], pathIndex + 1, path, results);
        }
    }
};
const productSizesPathMap = {
    [ENUMS.PRODUCT_SIZE_COUNTABLE.QUANTITY]: [
        'productStocksData',
        'productStocksQuantities',
        'array',
        'productSizesData',
        'array'
    ],
    [ENUMS.PRODUCT_SIZE_COUNTABLE.QUANTITY_OWN]: [
        'productStocksData',
        'productSizesDispositions',
        'productSizesDispositionsInSales',
        'array'
    ],
    [ENUMS.PRODUCT_SIZE_COUNTABLE.QUANTITY_OUTSIDE]: [
        'productStocksData',
        'productSizesDispositions',
        'productSizesDispositionsInSales',
        'array'
    ],
    [ENUMS.PRODUCT_SIZE_COUNTABLE.QUANTITY_ALL]: [
        'productStocksData',
        'productSizesDispositions',
        'productSizesDispositionsInSales',
        'array'
    ],
    [ENUMS.PRODUCT_SIZE_COUNTABLE.QUANTITY_UNFINISHED]: [
        'productStocksData',
        'productOrdersUnfinishedQuantities',
        'array',
        'productSizesData',
        'array'
    ],
    [ENUMS.PRODUCT_SIZE_COUNTABLE.DELIVERIES]: [
        'productStocksData',
        'productSizesDeliveries',
        'array'
    ],
    [ENUMS.PRODUCT_SIZE_COUNTABLE.AUCTIONS]: [
        'productStocksData',
        'productSizesDispositions',
        'productSizesDispositionsInAuctions',
        'array'
    ],
    [ENUMS.PRODUCT_SIZE_COUNTABLE.RESERVATIONS]: [
        'productStocksData',
        'productStocksQuantities',
        'array',
        'productSizesData',
        'array'
    ],
    [ENUMS.PRODUCT_SIZE_CODES.NAME]: [
        'productSizes',
        'array'
    ],
    [ENUMS.PRODUCT_SIZE_CODES.CODE_PRODUCER]: [
        'productSizesAttributes',
        'array'
    ],
    [ENUMS.PRODUCT_SIZE_CODES.CODE_EXTERNAL]: [
        'productStocksData',
        'productStocksQuantities',
        'array',
        'productSizesData',
        'array'
    ],
    [ENUMS.PRODUCT_SIZE_LOCATIONS.NAME]: [
        'productStocksData',
        'productSizesStocksLocations',
        'array',
        'productSizesLocation',
        'array'
    ],
    [ENUMS.PRODUCT_SIZE_LOCATIONS.CODE]: [
        'productStocksData',
        'productSizesStocksLocations',
        'array',
        'productSizesLocation',
        'array'
    ],
    [ENUMS.PRODUCT_SIZE_LOCATIONS.ID]: [
        'productStocksData',
        'productSizesStocksLocations',
        'array',
        'productSizesLocation',
        'array'
    ],
};
const getTraversedPathElements = (product, nodeName) => {
    const path = productSizesPathMap[nodeName];
    if (!path)
        throw new Error(`Invalid path for ${nodeName}`);
    const results = [];
    traverseNodes(product, 0, path, results);
    return results;
};
const sumProductQuantities = (productStocksData, nodeName = ENUMS.PRODUCT_SIZE_COUNTABLE.QUANTITY_OWN) => {
    const results = getTraversedPathElements({ productStocksData, productId: 0 }, nodeName);
    let sum = 0;
    if (['productOrdersUnfinishedQuantities', 'productSizesDeliveries', 'productSizesDispositionsInAuctions'].includes(nodeName))
        nodeName = 'productSizeQuantity';
    results.forEach(item => {
        if (item?.sizeId && item[nodeName] !== undefined) {
            const value = Number(item[nodeName]) || 0;
            sum += value;
        }
    });
    return sum;
};
const getProductIndexFunction = (type, product) => {
    switch (type) {
        case PRODUCE_SIZE_INDEX.ID: return (obj) => obj.sizeId;
        case PRODUCE_SIZE_INDEX.IAI_CODE: return (obj) => getIaiCode(product.productId, obj.sizeId);
        case PRODUCE_SIZE_INDEX.NAME: {
            return (obj) => {
                if (obj.sizePanelName)
                    return obj.sizePanelName;
                if (product.productSizes) {
                    const nameItem = product.productSizes.find(size => size.sizeId === obj.sizeId);
                    if (nameItem)
                        return nameItem.sizePanelName;
                }
                throw new Error("Could not index by name - sizePanelName and productSizes missing");
            };
        }
        default: throw new Error('Invalid indexBy');
    }
};
const mapSizeQuantites = (product, nodeName = ENUMS.PRODUCT_SIZE_COUNTABLE.QUANTITY_OWN, indexBy = ENUMS.PRODUCE_SIZE_INDEX.ID) => {
    const results = getTraversedPathElements(product, nodeName);
    if (nodeName === 'productSizeReservationOrder') {
        results.forEach(node => {
            node.productSizeReservationOrder = node.productSizeReservations.productSizeReservationOrder;
        });
    }
    const aggregated = {};
    if (['productOrdersUnfinishedQuantities', 'productSizesDeliveries', 'productSizesDispositionsInAuctions'].includes(nodeName))
        nodeName = 'productSizeQuantity';
    const getIndex = getProductIndexFunction(indexBy, product);
    results.forEach(item => {
        if (item?.sizeId && item[nodeName] !== undefined) {
            const index = getIndex(item) ?? item.sizeId;
            const value = Number(item[nodeName]) || 0;
            aggregated[index] = (aggregated[index] || 0) + value;
        }
    });
    return aggregated;
};
const mapProductCodes = (product, codeType = ENUMS.PRODUCT_SIZE_CODES.NAME, indexBy = ENUMS.PRODUCE_SIZE_INDEX.ID) => {
    const results = getTraversedPathElements(product, codeType);
    const mapped = {};
    const getIndex = getProductIndexFunction(indexBy, product);
    results.forEach(item => {
        if (item?.sizeId && item[codeType] !== undefined) {
            const index = getIndex(item) ?? item.sizeId;
            const value = String(item[codeType] || '');
            if (!mapped[index] || value) {
                mapped[index] = value;
            }
        }
    });
    return mapped;
};
const SUB_TYPE_NODES = {
    stockLocationTextId: 'stockAdditionalLocationTextId',
    stockLocationId: 'stockAdditionalLocationId',
    stockLocationCode: 'stockAdditionalLocationCode'
};
const mapAllProductCodes = (product, indexBy) => {
    const results = getTraversedPathElements(product, ENUMS.PRODUCT_SIZE_CODES.CODE_PRODUCER);
    const mapped = {};
    const getIndex = getProductIndexFunction(indexBy, product);
    for (const item of results) {
        const index = getIndex(item);
        if (!mapped[index]) {
            mapped[index] = [];
        }
        mapped[index].push(getIaiCode(product.productId, item.sizeId));
        if (item.productSizeCodeProducer?.length)
            mapped[index].push(item.productSizeCodeProducer);
        if (item.productSizeCodeExternal?.length)
            mapped[index].push(item.productSizeCodeExternal);
    }
    return mapped;
};
const mapProductLocations = (product, stockId, locationType = ENUMS.PRODUCT_SIZE_LOCATIONS.NAME, indexBy = ENUMS.PRODUCE_SIZE_INDEX.ID) => {
    let results = getTraversedPathElements(product, locationType);
    if (stockId) {
        const prefix = 'M' + stockId;
        results = results.filter((location) => location.stockLocationTextId.startsWith(prefix));
    }
    const mapped = {};
    const subNode = SUB_TYPE_NODES[locationType];
    const getIndex = getProductIndexFunction(indexBy, product);
    for (const item of results) {
        const index = getIndex(item);
        if (!mapped[index]) {
            mapped[index] = [];
        }
        // main location
        const mainLocation = item[locationType];
        if (mainLocation) {
            mapped[index].push(mainLocation.toString());
        }
        // additional locations
        if (item.stockAdditionalLocations?.length) {
            for (const additional of item.stockAdditionalLocations) {
                const value = additional[subNode];
                if (value) {
                    mapped[index].push(value.toString());
                }
            }
        }
    }
    return mapped;
};
const getLangData = (arr, langId = 'pol') => {
    if (!arr.length)
        return undefined;
    if (!arr[0].langId)
        throw new Error('Array has no langId');
    return arr.find(item => item.langId === langId);
};
const clearParametersLangData = (products, langId = 'pol') => {
    for (const product of products) {
        if (!product.productParameters)
            continue;
        for (const parameter of product.productParameters) {
            if (!parameter.parameterValues)
                continue;
            parameter.parameterDescriptionsLangData = parameter.parameterDescriptionsLangData.filter(lang => lang.langId === langId);
            for (const value of parameter.parameterValues) {
                value.parameterValueDescriptionsLangData = value.parameterValueDescriptionsLangData.filter(lang => lang.langId === langId).map((item) => { item.parameterValueShopsData = []; return item; });
            }
        }
    }
    return products;
};
export default {
    /** @description The method allows you to build an IAI code from the product ID and size ID. */
    getIaiCode,
    /** @description The method allows you to sum up the current stock levels: warehouses, available stocks, etc. */
    sumProductQuantities,
    /** @description The method allows mapping the sum of the current stock levels (in warehouses, at disposal, etc.) divided into sizes */
    mapSizeQuantites,
    /** @description The method allows mapping the producers's or external system's codes stored in the system to SKUs */
    mapProductCodes,
    /** @description The method allows mapping all known codes: IAI code, manufacturer code or external code as an array */
    mapAllProductCodes,
    /** @description This method allows you to map product locations stored in the system, broken down by size. You can select a specific warehouse or list all of them, both primary and secondary. */
    mapProductLocations,
    /** @description Get first item (description, series, parameter name or value) with the selected langId */
    getLangData,
    /** @description Modifies product response by removing all parameter names nad values that are not in selected langId */
    clearParametersLangData
};
