export var ProductQuantityKey;
(function (ProductQuantityKey) {
    ProductQuantityKey["ProductSizeQuantityOwnStock"] = "productSizeQuantityOwnStock";
    ProductQuantityKey["ProductSizeQuantityOutsideStock"] = "productSizeQuantityOutsideStock";
    ProductQuantityKey["ProductSizeQuantityAllStocks"] = "productSizeQuantityAllStocks";
    ProductQuantityKey["ProductStocksQuantities"] = "productStocksQuantities";
    ProductQuantityKey["ProductOrdersUnfinishedQuantities"] = "productOrdersUnfinishedQuantities";
    ProductQuantityKey["ProductSizesDeliveries"] = "productSizesDeliveries";
    ProductQuantityKey["ProductSizesDispositionsInAuctions"] = "productSizesDispositionsInAuctions";
})(ProductQuantityKey || (ProductQuantityKey = {}));
const productQuantityPathMap = {
    // ----- Product Dispositions -----
    [ProductQuantityKey.ProductSizeQuantityOwnStock]: ["productSizesDispositions", "productSizesDispositionsInSales", "productSizeQuantityOwnStock"],
    [ProductQuantityKey.ProductSizeQuantityOutsideStock]: ["productSizesDispositions", "productSizesDispositionsInSales", "productSizeQuantityOutsideStock"],
    [ProductQuantityKey.ProductSizeQuantityAllStocks]: ["productSizesDispositions", "productSizesDispositionsInSales", "productSizeQuantityAllStocks"],
    [ProductQuantityKey.ProductSizesDispositionsInAuctions]: ["productSizesDispositions", "productSizesDispositionsInAuctions", "productSizeQuantity"],
    // ----- Stocks & related quantities -----
    [ProductQuantityKey.ProductStocksQuantities]: ["productStocksQuantities", "productSizeQuantity"],
    [ProductQuantityKey.ProductOrdersUnfinishedQuantities]: ["productOrdersUnfinishedQuantities", "productSizeQuantity"],
    [ProductQuantityKey.ProductSizesDeliveries]: ["productSizesDeliveries", "productSizeQuantity"],
};
const getProductSizeArrayNode = (productStocksData, key) => {
    const pathNode = productQuantityPathMap[key];
    if (!pathNode)
        throw new Error("Invalid stock type " + key);
    const path = pathNode.slice(0, -1);
    const node = pathNode[pathNode.length - 1];
    const arr = getProductSizeArray(productStocksData, path);
    return { arr, node };
};
const getProductSizeArray = (productStocksData, path) => {
    let current = productStocksData;
    for (const segment of path) {
        if (current && typeof current === "object" && segment in current) {
            current = current[segment];
        }
        else {
            return [];
        }
    }
    if (Array.isArray(current)) {
        if (current.length && current[0]?.productSizesData) {
            return current.flatMap((s) => s.productSizesData);
        }
        return current;
    }
    return [];
};
const sumProductQuantities = (productStocksData, stockType = ProductQuantityKey.ProductSizeQuantityOwnStock) => {
    const { arr, node } = getProductSizeArrayNode(productStocksData, stockType);
    return arr.reduce((total, item) => {
        const value = item[node];
        if (typeof value === 'number')
            total += value;
        return total;
    }, 0);
};
const getIaiCode = (productId, sizeId) => {
    return [productId, sizeId].join('-');
};
const mapSizeQuantites = (product, stockType = ProductQuantityKey.ProductSizeQuantityOwnStock) => {
    const obj = {};
    if (!product.productStocksData)
        return obj;
    const { arr, node } = getProductSizeArrayNode(product.productStocksData, stockType);
    for (const item of arr) {
        const value = item[node];
        if (typeof value !== 'number')
            continue;
        const index = getIaiCode(product.productId, item.sizeId);
        if (!obj[index])
            obj[index] = value;
        else
            obj[index] += value;
    }
    return obj;
};
const mapProductCodes = (product, codeType = 'productSizeCodeProducer') => {
    const obj = {};
    if (product.productSizesAttributes) {
        for (const size of product.productSizesAttributes) {
            const code = size[codeType];
            if (!code)
                continue;
            const sku = getIaiCode(product.productId, size.sizeId);
            obj[sku] = code;
        }
    }
    return obj;
};
export default {
    getIaiCode,
    sumProductQuantities,
    mapSizeQuantites,
    mapProductCodes
};
