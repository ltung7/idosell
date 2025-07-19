const getStandardizedDate = (dateValue) => {
    if (!dateValue)
        return new Date();
    if (typeof dateValue === 'string' && dateValue.length === 10) {
        dateValue += ' 00:00:00';
    }
    return new Date(dateValue);
};
const formatShort = (dateValue) => {
    const date = getStandardizedDate(dateValue);
    const year = date.getFullYear().toString().padStart(4, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return year + "-" + month + "-" + day;
};
const formatLong = (dateValue) => {
    const date = getStandardizedDate(dateValue);
    const year = date.getFullYear().toString().padStart(4, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
export const paramYesOrNo = (property) => (...value) => {
    const truthy = value.length ? (value[0] === 'n' ? false : Boolean(value[0])) : true;
    const param = {};
    param[property] = truthy ? 'y' : 'n';
    return param;
};
export const arrayOfObjects = (propertyName, valueName, append = {}) => (list) => {
    const param = {};
    if (!Array.isArray(list))
        list = [list];
    param[propertyName] = list.map(value => {
        const obj = { ...append };
        obj[valueName] = value;
        return obj;
    });
    return param;
};
export const page = (page = 0, limit, snakeCase = false) => {
    if (!limit)
        limit = 100;
    if (snakeCase)
        return {
            results_page: page,
            results_limit: limit
        };
    return {
        resultsPage: page,
        resultsLimit: limit
    };
};
export const orderBy = (elementName, descending = true) => {
    return {
        ordersBy: [{
                elementName,
                sortDirection: descending ? 'DESC' : 'ASC'
            }]
    };
};
export const date = ({ nodeName, format }) => (dateValue) => {
    const param = {};
    ;
    let formatDate = formatShort;
    if (format && format === 'YYYY-MM-DD HH:mm:ss')
        formatDate = formatLong;
    param[nodeName] = formatDate(dateValue);
    return param;
};
const getDateRangeNode = (fromName, toName, dateFrom, dateTo, format) => {
    const node = {};
    let formatDate = formatShort;
    if (format && format === 'YYYY-MM-DD HH:mm:ss')
        formatDate = formatLong;
    node[fromName] = formatDate(dateFrom);
    node[toName] = formatDate(dateTo);
    if (format === 'YYYY-MM-DD HH:mm:ss' && node[toName].indexOf(' 00:00:00') == 10) {
        node[toName] = node[toName].replace('00:00:00', '23:59:59');
    }
    return node;
};
export const dateRange = ({ nodeName, fromName, toName, format }) => (dateFrom, dateTo = Date.now()) => {
    const param = {};
    ;
    const node = getDateRangeNode(fromName, toName, dateFrom, dateTo, format);
    if (!nodeName)
        return node;
    param[nodeName] = node;
    return param;
};
export const dateRangeType = ({ nodeName, fromName, toName, typeName, defaultType, format, nested }) => (dateFrom, dateTo = Date.now(), dateType) => {
    const param = {};
    ;
    const node = getDateRangeNode(fromName, toName, dateFrom, dateTo, format);
    if (dateType === null && defaultType)
        dateType = defaultType;
    node[typeName] = dateType;
    if (nested) {
        param[nested] = {};
        param[nested][nodeName] = node;
    }
    else
        param[nodeName] = node;
    return param;
};
export const nest = (valueName, nodeName, obj = {}, forceArray = false) => (value) => {
    if (forceArray && !Array.isArray(value))
        value = [value];
    const node = { ...obj }, params = {};
    node[valueName] = value;
    params[nodeName] = node;
    return params;
};
export const getCurrentAppendableArray = (object, nodeName) => {
    if (!object.appendable)
        return null;
    const arr = object.params[object.appendable.arrayNode];
    return arr[object.appendable.index][nodeName] ?? [];
};
export const nestArray = (object, valueName, nodeName, obj = {}) => (value) => {
    const node = { ...obj }, params = {};
    if (object.appendable) {
        params[nodeName] = getCurrentAppendableArray(object, nodeName);
    }
    else {
        params[nodeName] = object.params[nodeName] ?? [];
    }
    node[valueName] = value;
    params[nodeName].push(node);
    return params;
};
export const orderSource = (sourceName) => (accountName) => {
    const params = { orderSource: { auctionsParams: { auctionsServicesNames: [sourceName] } } };
    if (accountName)
        params.orderSource.auctionsParams.auctionsAccounts = [{ auctionsAccountLogin: accountName }];
    return params;
};
const PRICE_TYPES = {
    'advance': 'Advance',
    'retail': 'Retail',
    'wholesale': 'Wholesale',
    'minimal': 'Minimal',
    'automaticalculation': 'AutomaticCalculation',
    'pos': "Pos",
    'suggested': 'Suggested',
    'strikethroughretail': 'StrikethroughRetail',
    'strikethroughwholesale': 'StrikethroughWholesale'
};
export const modifyPrice = (value, type, net = false, priceChangeMode = 'amount_set') => {
    const typeName = PRICE_TYPES[type.toLowerCase()];
    if (!typeName)
        throw new Error(`Invalid price type: ${type}. Availible types: ${Object.values(PRICE_TYPES)}`);
    const node = ["product", typeName, "Price"];
    if (net)
        node.push("Net");
    const params = { priceChangeMode };
    params[node.join('')] = value;
    return params;
};
export const getProductIdent = (productId, sizeId, type = 'id') => {
    const params = { ident: { type, value: productId } };
    if (sizeId) {
        params.sizes = [{ ident: { type, value: sizeId } }];
    }
    return params;
};
export const getProductIdentList = (productIds, identType = 'id') => {
    if (!Array.isArray(productIds))
        productIds = [productIds];
    return {
        identType,
        products: productIds
    };
};
const TEXT_NODES = {
    productName: {
        main: 'productNames',
        sub: 'productNamesLangData',
        node: 'productName'
    },
    productParamDescriptions: {
        main: 'productParamDescriptions',
        sub: 'productParamDescriptionsLangData',
        node: 'productParamDescriptions'
    },
    productLongDescription: {
        main: 'productLongDescriptions',
        sub: 'productLongDescriptionsLangData',
        node: 'productLongDescription'
    },
    productMetaTitle: {
        main: 'productMetaTitles',
        sub: 'productMetaTitlesLangData',
        node: 'productMetaTitle'
    },
    productMetaDescription: {
        main: 'productMetaDescriptions',
        sub: 'productMetaDescriptionsLangData',
        node: 'productMetaDescription'
    },
    productMetaKeyword: {
        main: 'productMetaKeywords',
        sub: 'productMetaKeywordsLangData',
        node: 'productMetaKeyword'
    },
    productAuctionName: {
        main: 'productAuctionDescriptionsData',
        node: 'productAuctionName'
    },
    productAuctionDescription: {
        main: 'productAuctionDescriptionsData',
        node: 'productAuctionDescription'
    },
    productAuctionAdditionalName: {
        main: 'productAuctionDescriptionsData',
        node: 'productAuctionAdditionalName'
    },
    productNameInPriceComparer: {
        main: 'productNamesInPriceComparer',
        sub: 'productNamesInPriceComparerLangData',
        node: 'productNameInPriceComparer'
    }
};
const LEGACY_TEXT_NODES = {
    ...TEXT_NODES,
    name: TEXT_NODES.productName,
    short: TEXT_NODES.productParamDescriptions,
    long: TEXT_NODES.productLongDescription,
    metatitle: TEXT_NODES.productMetaTitle,
    metadescription: TEXT_NODES.productMetaDescription,
    metakeywords: TEXT_NODES.productMetaKeyword,
    acutionname: TEXT_NODES.productAuctionName,
    auctiondescription: TEXT_NODES.productAuctionDescription
};
const getAppendedNode = (object) => {
    if (!object.appendable)
        return null;
    if (!object.params[object.appendable.arrayNode])
        object.params[object.appendable.arrayNode] = [{}];
    return object.params[object.appendable.arrayNode][object.appendable.index];
};
export const setProductText = (object) => (text, node = 'productName', langId = 'pol', shopId) => {
    if (!LEGACY_TEXT_NODES[node]) {
        throw new Error('Invalid node');
    }
    const product = getAppendedNode(object);
    const nodeData = LEGACY_TEXT_NODES[node];
    if (node === 'long' && text[0] !== '<') {
        text = `<p>${text.replaceAll("\n", '</p><p>')}</p>`;
    }
    if (nodeData.sub) {
        if (!product[nodeData.main])
            product[nodeData.main] = {};
        if (!product[nodeData.main][nodeData.sub])
            product[nodeData.main][nodeData.sub] = [];
        else {
            for (const leaf of product[nodeData.main][nodeData.sub]) {
                if (leaf.langId === langId && (leaf.shopId === shopId || (shopId === null && !leaf.shopId))) {
                    leaf[nodeData.node] = text;
                    return product;
                }
            }
        }
        const item = { langId };
        if (shopId)
            item.shopId = shopId;
        item[nodeData.node] = text;
        product[nodeData.main][nodeData.sub].push(item);
    }
    else {
        if (!product[nodeData.main])
            product[nodeData.main] = [];
        const node = { productAuctionId: 2, productAuctionSiteId: 1 };
        node[nodeData.node] = text;
        product[nodeData.main].push(node);
    }
    return product;
};
const DESCRIPTION_NODES = ['productName', 'productAuctionName', 'productPriceComparerName', 'productDescription', 'productLongDescription', 'productMetaTitle', 'productMetaDescription', 'productMetaKeywords'];
export const setProductDescription = (object) => (text, node = 'productName', langId = 'pol', shopId) => {
    if (!DESCRIPTION_NODES.includes(node)) {
        throw new Error('Invalid node');
    }
    const product = getAppendedNode(object);
    let langData;
    if (!product.productDescriptionsLangData) {
        langData = { langId };
        if (shopId)
            langData.shopId = shopId.toString();
        product.productDescriptionsLangData = [langData];
    }
    if (!langData)
        langData = product.productDescriptionsLangData.find(item => item.langId === langId && (item.shopId === shopId || (shopId === null && !item.shopId)));
    if (!langData) {
        langData = { langId };
        if (shopId)
            langData.shopId = shopId.toString();
        product.productDescriptionsLangData.push(langData);
    }
    langData[node] = text;
    return product;
};
