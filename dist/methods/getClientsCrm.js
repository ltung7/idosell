import { paramsProxy } from "../params.js";

/**
 * The method allows to download information about customers from the CRM module assigned to stores to which the user has rights.
 * @typedef {Object} GetClientsCrmRequest
 * @property {(clientLogin: String) => GetClientsCrmRequest} clientLogin Customer's login.
 * @property {(clientIsWholesaler: String) => GetClientsCrmRequest} clientIsWholesaler Determines, whether client is a wholesaler.
 * @property {(clientCountryId: String) => GetClientsCrmRequest} clientCountryId Country ID in accordance with ISO-3166.
 * @property {(langId: String) => GetClientsCrmRequest} langId Language ID
 * @property {(clientCustomerServiceRepresentativeLogin: String) => GetClientsCrmRequest} clientCustomerServiceRepresentativeLogin Customer service representative.
 * @property {(clientDiscountGroupNumber: Integer) => GetClientsCrmRequest} clientDiscountGroupNumber Customer group number
 * @property {(clientRegistrationDate: Object) => GetClientsCrmRequest} clientRegistrationDate Date range of customer registrations
 * @property {(clientLastLoginDate: Object) => GetClientsCrmRequest} clientLastLoginDate Date of last customer login (YYYY-MM-DD)
 * @property {(clientType: String) => GetClientsCrmRequest} clientType Customer type, possible values: - person - if client sex is not determined, - person_male - when client is a male, - person_female - when a customer is a woman, - firm - when client is company.
 * @property {(clientAffiliateProgram: Array<Object>) => GetClientsCrmRequest} clientAffiliateProgram Information about the loyalty program possible values: - yes_voucher - when customers are in a loyalty program and have only used vouchers, - yes_voucher_cash - when customers are in a loyalty program and have only used vouchers or cash deposits, - yes_clients, - yes_orders - when customers are in the loyalty program and have made at least one order, - no - when customers are in the loyalty program, - banned - when customers are blocked.
 * @property {(newsletterEmailApproval: String) => GetClientsCrmRequest} newsletterEmailApproval Permission to E-mail Newsletter.
 * @property {(newsletterSmsApproval: String) => GetClientsCrmRequest} newsletterSmsApproval Permission to SMS Newsletter.
 * @property {(searchByShops: Object) => GetClientsCrmRequest} searchByShops Shops
 * @property {(clientLoyaltyCard: Object) => GetClientsCrmRequest} clientLoyaltyCard Loyalty cards:
 * @property {(clientCodeExternal: String) => GetClientsCrmRequest} clientCodeExternal External system code.
 * @property {(clientCodesExternal: Array<String>) => GetClientsCrmRequest} clientCodesExternal External system codes list.
 * @property {(clientFirstName: String) => GetClientsCrmRequest} clientFirstName Customer's first name.
 * @property {(clientLastName: String) => GetClientsCrmRequest} clientLastName Customer's last name.
 * @property {(clientNip: String) => GetClientsCrmRequest} clientNip Customer Tax no.
 * @property {(clientFirm: String) => GetClientsCrmRequest} clientFirm Customer's company name.
 * @property {(clientEmail: String) => GetClientsCrmRequest} clientEmail E-mail address.
 * @property {(newsletterEmailApprovalsData: Array<Object>) => GetClientsCrmRequest} newsletterEmailApprovalsData List of shops where a customer agreed or didn't agree to receive email newsletter.
 * @property {(newsletterSmsApprovalsData: Array<Object>) => GetClientsCrmRequest} newsletterSmsApprovalsData List of shops where a customer agreed or didn't agree to receive sms newsletter.
 * @property {(clientLoyaltyCardNumber: String) => GetClientsCrmRequest} clientLoyaltyCardNumber Customer loyalty card number, omitted when has_loyalty_card = no.
 * @property {(orders: Object) => GetClientsCrmRequest} orders Orders.
 * @property {(returnElements: Array<String>) => GetClientsCrmRequest} returnElements Elements to be returned by the endpoint. By default all elements are returned
 * @property {(resultsPage: Integer) => GetClientsCrmRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetClientsCrmRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(settingsExactSearch: Boolean) => GetClientsCrmRequest} settingsExactSearch Determines, if data - that will be returned - will be exactly as entered values, or values should be fragment of customer data.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {GetClientsCrmRequest} The method allows to download information about customers from the CRM module assigned to stores to which the user has rights.
 */
export const getClientsCrmProxy = (object) => {
    object.gate = { method: 'get', node: '/clients/crm' }
    return new Proxy(object, paramsProxy);
}