import dayjs from "dayjs";

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
    if (!format) format = 'YYYY-MM-DD';
    param[nodeName] = dayjs(dateValue).format(format);
    return param;
}

export const dateRange = ({ nodeName, fromName, toName, format }) => (dateFrom, dateTo = Date.now()) => {
    const param = {};
    const node = {}
    if (!format) format = 'YYYY-MM-DD';
    node[fromName] = dayjs(dateFrom).format(format);
    node[toName] = dayjs(dateTo).format(format);
    param[nodeName] = node;

    if (format === 'YYYY-MM-DD HH:mm:ss' && node[toName].indexOf(' 00:00:00') == 10) {
        node[toName] = node[toName].replace('00:00:00', '23:59:59');
    }

    return param;
}

export const dateRangeType = ({ nodeName, fromName, toName, typeName, defaultType, format, nested }) => (dateFrom, dateTo = Date.now(), dateType = null) => {
    const param = {};
    const node = {};
    if (dateType === null && defaultType) dateType = defaultType;
    if (!format) format = 'YYYY-MM-DD';
    node[fromName] = dayjs(dateFrom).format(format);
    node[toName] = dayjs(dateTo).format(format);
    node[typeName] = dateType;

    if (format === 'YYYY-MM-DD HH:mm:ss' && node[toName].indexOf(' 00:00:00') == 10) {
        node[toName] = node[toName].replace('00:00:00', '23:59:59');
    }

    if (nested) {
        param[nested] = {};
        param[nested][nodeName] = node;
    } else param[nodeName] = node;
    return param;
}