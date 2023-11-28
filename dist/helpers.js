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
        result_page: page,
        resultsLimit: limit
    }
}