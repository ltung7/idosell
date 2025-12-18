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
    [ENUMS.PRODUCT_SIZE_COUNTABLE.QUANTITY_ORDERS_UNFINISHED]: [
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
    [ENUMS.PRODUCT_SIZE_STRING.NAME]: [
        'productSizes',
        'array'
    ],
    [ENUMS.PRODUCT_SIZE_STRING.CODE_PRODUCER]: [
        'productSizesAttributes',
        'array'
    ],
    [ENUMS.PRODUCT_SIZE_STRING.CODE_EXTERNAL]: [
        'productStocksData',
        'productStocksQuantities',
        'array',
        'productSizesData',
        'array'
    ],
    [ENUMS.PRODUCT_SIZE_STRING.LOCATION]: [
        'productStocksData',
        'productSizesStocksLocations',
        'array',
        'productSizesLocation',
        'array'
    ],
    [ENUMS.PRODUCT_SIZE_STRING.LOCATION_CODE]: [
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
const mapSizeQuantites = (product, nodeName = ENUMS.PRODUCT_SIZE_COUNTABLE.QUANTITY_OWN) => {
    const results = getTraversedPathElements(product, nodeName);
    const aggregated = {};
    if (['productOrdersUnfinishedQuantities', 'productSizesDeliveries', 'productSizesDispositionsInAuctions'].includes(nodeName))
        nodeName = 'productSizeQuantity';
    results.forEach(item => {
        if (item?.sizeId && item[nodeName] !== undefined) {
            const sizeId = String(item.sizeId);
            const value = Number(item[nodeName]) || 0;
            aggregated[sizeId] = (aggregated[sizeId] || 0) + value;
        }
    });
    return aggregated;
};
const mapProductCodes = (product, codeType = ENUMS.PRODUCT_SIZE_STRING.NAME, stockId) => {
    let results = getTraversedPathElements(product, codeType);
    if (['stockLocationTextId', 'stockLocationCode'].includes(codeType)) {
        if (!stockId)
            throw new Error("Stock Id is required to map locations");
        const prefix = 'M' + stockId;
        results = results.filter(item => item.stockLocationTextId.startsWith(prefix));
    }
    const mapped = {};
    results.forEach(item => {
        if (item?.sizeId && item[codeType] !== undefined) {
            const sizeId = String(item.sizeId);
            const value = String(item[codeType] || '');
            if (!mapped[sizeId] || value) {
                mapped[sizeId] = value;
            }
        }
    });
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
    sumProductQuantities,
    getIaiCode,
    mapSizeQuantites,
    mapProductCodes,
    getLangData,
    clearParametersLangData
};
