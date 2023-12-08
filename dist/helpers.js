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

export const arrayOfObjects = (propertyName, valueName) => (list) => {
    const param = {}
    if (!Array.isArray(list)) list = [ list ];
    param[propertyName] = list.map(value => {
        const obj = {};
        obj[valueName] = value
        return obj;
    }) 
    return param;
}

export const page = (page = 0, limit = 100, snakeCase = false) => {
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
    params[nodeName] = node;
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