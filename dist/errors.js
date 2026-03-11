export class IdosellFaultStringError extends Error {
    cause;
    constructor(message, cause) {
        super(message);
        this.name = 'IdosellFaultStringError';
        this.cause = cause;
    }
}
export function catchEmptyList(defaultValue) {
    return (err) => {
        if (err?.cause?.faultCode === 2) {
            return defaultValue;
        }
        throw err;
    };
}
