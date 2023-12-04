import dayjs from "dayjs";

export const paramYesOrNo = (property) => (...value) => {
    const truthy = value.length ? (value[0] === 'n' ? false : Boolean(value[0])) : true;
    const param = {};
    param[property] = truthy ? 'y' : 'n';
    console.log(param);
    return param;
}

export const page = (camelCase = true) => (page = 0, limit = 100) => {
    if (camelCase) return {
        resultsPage: page,
        resultsLimit: limit
    }

    return {
        results_page: page,
        results_limit: limit
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
    return param;
}

export const dateRangeType = ({ nodeName, fromName, toName, typeName, values, format, nested }) => (dateFrom, dateTo = Date.now(), dateType = null) => {
    const param = {};
    const node = {};
    if (dateType === null && values?.length) dateType = values[0];
    if (!format) format = 'YYYY-MM-DD';
    node[fromName] = dayjs(dateFrom).format(format);
    node[toName] = dayjs(dateTo).format(format);
    node[typeName] = dateType;

    if (nested) {
        param[nested] = {};
        param[nested][nodeName] = node;
    } else param[nodeName] = node;
    return param;
}