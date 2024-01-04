const getStandardizedDate = (dateValue ) => {
    if (!dateValue) return new Date();
    if (typeof dateValue === 'string' && dateValue.length === 10) {
        dateValue += ' 00:00:00';
    }
    return new Date(dateValue);
}

const formatShort = (dateValue = null) => {
    const date = getStandardizedDate(dateValue);
    const year = date.getFullYear().toString().padStart(4, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    
    return year + "-" + month + "-" + day;
}

const formatLong = (dateValue = null) => {
    const date = getStandardizedDate(dateValue);
    const year = date.getFullYear().toString().padStart(4, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}


export const paramYesOrNo = (property) => (...value) => {
    const truthy = value.length ? (value[0] === 'n' ? false : Boolean(value[0])) : true;
    const param = {};
    param[property] = truthy ? 'y' : 'n';
    return param;
}

export const arrayOfObjects = (propertyName, valueName, append = {}) => (list) => {
    const param = {}
    if (!Array.isArray(list)) list = [ list ];
    param[propertyName] = list.map(value => {
        const obj = {...append};
        obj[valueName] = value
        return obj;
    }) 
    return param;
}

export const page = (page = 0, limit = null, snakeCase = false) => {
    if (!limit) limit = 100;
    if (snakeCase) return {
        results_page: page,
        results_limit: limit
    }

    return {
        resultsPage: page,
        resultsLimit: limit
    }
}

export const orderBy = (elementName, descending = true) => {
    return {
        ordersBy: [{
            elementName,
            sortDirection: descending ? 'DESC' : 'ASC'
        }]
    }
}

export const date = ({ nodeName, format }) => (dateValue) => {
    const param = {};
    let formatDate = formatShort;
    if (format && format === 'YYYY-MM-DD HH:mm:ss') formatDate = formatLong;
    param[nodeName] = formatDate(dateValue);
    return param;
}

const getDateRangeNode = (fromName, toName, dateFrom, dateTo, format = null) => {
    const node = {}
    let formatDate = formatShort;
    if (format && format === 'YYYY-MM-DD HH:mm:ss') formatDate = formatLong;
    node[fromName] = formatDate(dateFrom)
    node[toName] = formatDate(dateTo);

    if (format === 'YYYY-MM-DD HH:mm:ss' && node[toName].indexOf(' 00:00:00') == 10) {
        node[toName] = node[toName].replace('00:00:00', '23:59:59');
    }

    return node;
}

export const dateRange = ({ nodeName, fromName, toName, format }) => (dateFrom, dateTo = Date.now()) => {
    const param = {};
    const node = getDateRangeNode(fromName, toName, dateFrom, dateTo, format);
    if (!nodeName) return node;
    param[nodeName] = node;
    return param;
}

export const dateRangeType = ({ nodeName, fromName, toName, typeName, defaultType, format, nested }) => (dateFrom, dateTo = Date.now(), dateType = null) => {
    const param = {};
    const node = getDateRangeNode(fromName, toName, dateFrom, dateTo, format);
    if (dateType === null && defaultType) dateType = defaultType;
    node[typeName] = dateType;

    if (nested) {
        param[nested] = {};
        param[nested][nodeName] = node;
    } else param[nodeName] = node;
    return param;
}

export const nest = (valueName, nodeName, obj = {}, forceArray = false) => (value) => {
    if (forceArray && !Array.isArray(value)) value = [ value ];
    const node = { ...obj }, params = {};
    node[valueName] = value;
    params[nodeName] = node;
    return params;
}

export const getCurrentAppendableArray = (object, nodeName) => {
    const arr = object.params[object.appendable.arrayNode];
    return arr[object.appendable.index][nodeName] ?? [];
}

export const nestArray = (object, valueName, nodeName, obj = {}) => (value) => {
    const node = { ...obj }, params = {};
    if (object.appendable) {
        params[nodeName] = getCurrentAppendableArray(object, nodeName)
    } else {
        params[nodeName] = object.params[nodeName] ?? [];
    }
    node[valueName] = value;
    params[nodeName].push(node);
    return params;
}

export const orderSource = (sourceName) => (accountName = null) => {
    const params = { orderSource: { auctionsParams: { auctionsServicesNames: [ sourceName ]}}};
    if (accountName) params.orderSource.auctionsParams.auctionsAccounts = [{auctionsAccountLogin: 'monk'}];
    return params;
}

const TEXT_NODES = {
    name: {
        main: 'productNames',
        sub: 'productNamesLangData',
        node: 'productName'
    },
    short: {
        main: 'productParamDescriptions',
        sub: 'productParamDescriptionsLangData',
        node: 'productParamDescriptions'
    },
    long: {
        main: 'productLongDescriptions',
        sub: 'productLongDescriptionsLangData',
        node: 'productLongDescription'
    },
    metatitle: {
        main: 'productMetaTitles',
        sub: 'productMetaTitlesLangData',
        node: 'productMetaTitle'
    },
    metadescription: {
        main: 'productMetaDescriptions',
        sub: 'productMetaDescriptionsLangData',
        node: 'productMetaDescription'
    },
    metakeywords: {
        main: 'productMetaKeywords',
        sub: 'productMetaKeywordsLangData',
        node: 'productMetaKeyword'
    },
    acutionname: {
        main: 'productAuctionDescriptionsData',
        node: 'productAuctionName'
    },
    auctiondescription: {
        main: 'productAuctionDescriptionsData',
        node: 'productAuctionDescription'
    },
}

const getAppendedNode = (object) => {
    if (!object.params[object.appendable.arrayNode]) object.params[object.appendable.arrayNode] = [{}];
    return object.params[object.appendable.arrayNode][object.appendable.index];
}

export const setProductText = (object) => (text, node = 'short', langId = 'pol', shopId = null) => {
    if (!TEXT_NODES[node]) {
        throw new Error('Invalid node');
    }

    const product = getAppendedNode(object);
    const nodeData = TEXT_NODES[node];

    if (node === 'long' && text[0] !== '<') {
        text = `<p>${text.replaceAll("\n", '</p><p>')}</p>`;
    }
    
    if (nodeData.sub) {
        if (!product[nodeData.main]) product[nodeData.main] = {};
        if (!product[nodeData.main][nodeData.sub]) product[nodeData.main][nodeData.sub] = [];
        else {
            for(const leaf of product[nodeData.main][nodeData.sub]) {
                if (leaf.langId === langId && (leaf.shopId === shopId || (shopId === null && !leaf.shopId))) {
                    leaf[nodeData.node] = text;
                    return product;
                }
            }
        }

        const item = { langId }
        if (shopId) item.shopId = shopId;
        item[nodeData.node] = text;
        product[nodeData.main][nodeData.sub].push(item);
    } else {
        if (!product[nodeData.main]) product[nodeData.main] = [];
        const node = { productAuctionId: 2, productAuctionSiteId: 1 };
        node[nodeData.node] = text;
        product[nodeData.main].push(node);
    }
    
    return product;
}