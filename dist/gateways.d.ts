import type { PagableGateway, AppendableGateway, Gateway, DateLike, JSObject } from "./app.d.ts"
import type { GetClientsResponse, SearchClientsCrmResponse, SearchGiftcardsResponse, SearchNewsletterEmailResponse, SearchNewsletterSmsResponse, GetMenuResponse, GetAuctionDetailsResponse, GetOrdersDocumentsResponse, SearchOpinionsResponse, SearchOrdersResponse, SearchPackagesResponse, GetCategoriesResponse, SearchCategoriesIdosellResponse, SearchDeliveryTimeResponse, SearchProductsParametersResponse, SearchProductsResponse, GetReturnsResponse, GetRmaResponse, GetSizechartsResponse, GetConfigResponse, GetShopsDataResponse, GetWarrantiesResponse, GetLocationsResponse, GetStocksdocumentsDocumentsResponse, GetStocksdocumentsProductsResponse }  from "./responses.d.ts"
import * as ENUMS from "./enums";

export interface GetClientsBalanceRequest extends PagableGateway<GetClientsBalanceRequest> {
    /** Customer Id */
    clientNumbers: (value: number|string|number[]|string[]) => this;
    /** Text search through customer data. */
    textSearch: (value: string) => this;
    active: (value: 'yes'|'no') => this;
    hasTradeCredit: (value: 'nonzero'|'positive'|'negative'|'zero') => this;
    /** Start and end date (YYYY-MM-DD). */
    lastPurchaseDate: (value: JSObject) => this;
    /** Elements to be returned by the endpoint. By default all elements are returned. Available elements: - clientId - clientBalance - clientBalanceHistory */
    returnElements: (value: string|string[]) => this;
    /** Results page number. Numbering begins at 0. Default value: 0. */
    resultsPage: (value: number|string) => this;
    /** Maximum number of results on a single page. Default is 100. */
    resultsLimit: (value: number|string) => this;
    /** Define range of dates */
    lastPurchased: (dateFrom: DateLike, dateTo: DateLike) => this;
}

export interface PostClientsBalanceRequest extends Gateway {
    /** Unique client's number. */
    clientId: (value: number|string) => this;
    /** Operation: - add, - remove. */
    operation: (value: string) => this;
    /** Value to add or remove from balance. */
    balance: (value: Number) => this;
    /** Currency of operation. */
    currency: (value: string) => this;
    /** Note. */
    note: (value: string) => this;
    /** Order payment identifier. */
    prepaidId: (value: number|string) => this;
    /** Adds value to client balance */
    add: (balance: number, currency: string) => this;
    /** Subtracts value to client balance */
    remove: (balance: number, currency: string) => this;
}

export interface GetClientsRequest extends PagableGateway<GetClientsRequest,GetClientsResponse> {
    /** Customer numbers. */
    clientsIds: (value: number|string|number[]|string[]) => this;
    /** External system codes list */
    clientCodesExternal: (value: string|string[]) => this;
    /** Text search through customer data. */
    clientTextSearch: (value: string) => this;
    /** Active */
    clientIsActive: (value: 'yes'|'no') => this;
    /** Trade credit: - positive or negative, - only positive, - only negative, - only zero. */
    clientHasTradeCredit: (value: 'nonzero'|'positive'|'negative'|'zero') => this;
    /** Date of last purchase. */
    clientLastPurchaseDate: (value: JSObject) => this;
    /** Last modification date. */
    clientsLastModificationDate: (value: JSObject) => this;
    /** Elements to be returned by the endpoint. By default all elements are returned. Available fields: - clientId - clientsLastModificationDate - clientLogin - clientEmail - clientType - showClientAsPartner - blockAutomaticallyAssigningGroupDiscount - clientFirstName - clientLastName - clientBirthDate - clientFirm - clientNip - clientStreet - clientZipCode - clientCity - clientCountryId - langId - currencyId - clientRegionId - clientIsWholesaler - clientVatPreferences - clientGroupDiscountNumber - clientGroupDiscountName - clientCodeExternal - clientPhone1 - clientPhone2 - clientProvinceId - newsletterEmailApprovalsData - shops - clientBalances - clientTradeCredit - clientLoyaltyPoints - operator - isUnregistered - affiliateLogin - affiliateId - clientRegistrationDate - clientActiveInShops */
    returnElements: (value: string|string[]) => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
    /** Client Registration Date  */
    clientRegistrationDate: (value: JSObject) => this;
    /** The ID of the shop, that client is assigned to. */
    shopId: (value: string) => this;
    /** Define range of dates */
    lastPurchased: (dateFrom: DateLike, dateTo: DateLike) => this;
    /** Define range of dates */
    lastModified: (dateFrom: DateLike, dateTo: DateLike) => this;
}

export interface PostClientsRequest extends AppendableGateway<PostClientsRequest> {
    /** Customer data. */
    clients: (value: Array<JSObject>) => this;
    /** Customer's login. */
    login: (login: string) => this
    /** External system code. */
    code_extern: (code_extern: string) => this
    /** Customer e-mail address. */
    email: (email: string) => this
    /** Customer's first name. */
    firstname: (firstname: string) => this
    /** Customer's last name. */
    lastname: (lastname: string) => this
    /** Address. */
    street: (street: string) => this
    /** Customer's postal code. */
    zipcode: (zipcode: string) => this
    /** Customer's city. */
    city: (city: string) => this
    /** Customer country (ISO 3166-1 alfa-2 code). */
    country_code: (country_code: string) => this
    /** Administrative region code. */
    province_code: (province_code: string) => this
    /** Customer password (min. 8 characters). */
    password: (password: string) => this
    /** Date of birth. */
    birth_date: (birth_date: string) => this
    /** Customer phone number. */
    phone: (phone: string) => this
    /**  */
    company: (company: string) => this
    /** Customer Tax no. */
    vat_number: (vat_number: string) => this
    /** Determines, whether client is a wholesaler. */
    wholesaler: (wholesaler: boolean) => this
    /** Customer type, possible values: - person - if client sex is not determined, - person_male - when client is a male, - person_female - when a customer is a woman, - firm - when client is company. */
    client_type: (client_type: 'person'|'person_male'|'person_female'|'firm') => this
    /** Customer language ID. */
    language: (language: string) => this
    /** Determines, in which store account should be active. */
    shops: (shops: number|string|number[]|string[]) => this
    /** Defines availability of log in to other pages than the ones given in the element: shops . */
    block_autosigning_to_shops: (block_autosigning_to_shops: boolean) => this
    /** Customer default currency (ISO 4217 code). */
    currency: (currency: string) => this
    /**  */
    delivery_dates: (delivery_dates: string|string[]) => this
    /** Customer account balance in external system. */
    external_balance_value: (external_balance_value: number) => this
    /** Debt limit. */
    external_trade_credit_limit_value: (external_trade_credit_limit_value: number) => this
    /** Have customer agreed to a newsletter. List of allowed parameters: "y" - yes, "n" - no. The value will be set in all shops in which the customer account is active. */
    email_newsletter: (email_newsletter: boolean) => this
    /** Have customer agreed to a newsletter. List of allowed parameters: "y" - yes, "n" - no. The value will be set in all shops in which the customer account is active. */
    sms_newsletter: (sms_newsletter: boolean) => this
    /** Discount group ID. */
    client_group: (client_group: number|string) => this
    /** Field used for identifying request-response pairs for the endpoint. */
    request_reference: (request_reference: string) => this
    /** List of shops where a customer agreed or didn't agree to receive email newsletter. */
    newsletter_email_approvals: (newsletter_email_approvals: Array<JSObject>) => this
    /** List of shops where a customer agreed or didn't agree to receive sms newsletter. */
    newsletter_sms_approvals: (newsletter_sms_approvals: Array<JSObject>) => this
    /** Block assigning of discount groups automatically based on order history */
    block_group_auto_assignment: (block_group_auto_assignment: boolean) => this
}

export interface PutClientsRequest extends AppendableGateway<PutClientsRequest> {
    /** Customer data. */
    clients: (value: Array<JSObject>) => this;
    /** Customer's login. */
    clientLogin: (clientLogin: string) => this
    /** E-mail address. */
    clientEmail: (clientEmail: string) => this
    /** Customer's first name. */
    clientFirstName: (clientFirstName: string) => this
    /** Customer's last name. */
    clientLastName: (clientLastName: string) => this
    /** Street and number. */
    clientStreet: (clientStreet: string) => this
    /** Customer's postal code. */
    clientZipCode: (clientZipCode: string) => this
    /** Customer's city. */
    clientCity: (clientCity: string) => this
    /** Country ID in accordance with ISO-3166. */
    clientCountryId: (clientCountryId: string) => this
    /** Administrative region code. */
    clientProvinceId: (clientProvinceId: string) => this
    /** Customer password (min. 8 characters). */
    clientPassword: (clientPassword: string) => this
    /** Date of birth. */
    clientBirthDate: (clientBirthDate: string) => this
    /** Cell phone. */
    clientPhone1: (clientPhone1: string) => this
    /** Customer's company name. */
    clientFirm: (clientFirm: string) => this
    /** Customer Tax no. */
    clientNip: (clientNip: string) => this
    /** Determines, whether client is a wholesaler. */
    clientIsWholesaler: (clientIsWholesaler: boolean) => this
    /** Customer type, possible values: - person - if client sex is not determined, - person_male - when client is a male, - person_female - when a customer is a woman, - firm - when client is company. */
    clientType: (clientType: 'person'|'person_male'|'person_female'|'firm') => this
    /** Language ID */
    langId: (langId: string) => this
    /** Defines availability of log in to other pages than the ones given in the element: shops . */
    blockLoginToOtherShops: (blockLoginToOtherShops: boolean) => this
    /** List of stores IDs When mask is determined, this parameter is omitted. */
    shopsIds: (shopsIds: number|string|number[]|string[]) => this
    /** Currency ID */
    currencyId: (currencyId: string) => this
    /** External system code. */
    clientCodeExternal: (clientCodeExternal: string) => this
    /** List with delivery dates and times */
    deliveryDates: (deliveryDates: Array<JSObject>) => this
    /** Customer account balance in external system. */
    clientBalanceAmountExternal: (clientBalanceAmountExternal: number) => this
    /** Debt limit. */
    clientTradeCreditLimitExternal: (clientTradeCreditLimitExternal: number) => this
    /** Permission to E-mail Newsletter. */
    newsletterEmailApproval: (newsletterEmailApproval: boolean) => this
    /** Permission to SMS Newsletter. */
    newsletterSmsApproval: (newsletterSmsApproval: boolean) => this
    /** Discount group ID. */
    clientGroupDiscountNumber: (clientGroupDiscountNumber: number|string) => this
    /** Field used for identifying request-response pairs for the endpoint. */
    requestReference: (requestReference: string) => this
    /** List of shops where a customer agreed or didn't agree to receive email newsletter. */
    newsletterEmailApprovalsData: (newsletterEmailApprovalsData: Array<JSObject>) => this
    /** List of shops where a customer agreed or didn't agree to receive sms newsletter. */
    newsletterSmsApprovalsData: (newsletterSmsApprovalsData: Array<JSObject>) => this
    /** Is the customer active */
    clientActive: (clientActive: boolean) => this
    /** Number of days to pay for invoice */
    numberOfDaysToPay: (numberOfDaysToPay: number|string) => this
    /** The parameter stores information about who acquired the customer */
    affiliateLogin: (affiliateLogin: string) => this
    /** ID of a partner who acquired a given customer. */
    affiliateId: (affiliateId: number|string) => this
    /** Notes from customer. */
    clientNote: (clientNote: string) => this
}

export interface SearchClientsCrmRequest extends PagableGateway<SearchClientsCrmRequest,SearchClientsCrmResponse> {
    /** Customer's login. */
    clientLogin: (value: string) => this;
    /** Determines, whether client is a wholesaler. */
    clientIsWholesaler: (value: 'yes'|'no') => this;
    /** Country ID in accordance with ISO-3166. */
    clientCountryId: (value: string) => this;
    /** Language ID */
    langId: (value: string) => this;
    /** Customer service representative. */
    clientCustomerServiceRepresentativeLogin: (value: string) => this;
    /** Customer group number */
    clientDiscountGroupNumber: (value: number|string) => this;
    /** Date range of customer registrations */
    clientRegistrationDate: (value: JSObject) => this;
    /** Date of last customer login (YYYY-MM-DD) */
    clientLastLoginDate: (value: JSObject) => this;
    /** Customer type, possible values: - person - if client sex is not determined, - person_male - when client is a male, - person_female - when a customer is a woman, - firm - when client is company. */
    clientType: (value: 'person'|'person_male'|'person_female'|'firm') => this;
    /** Information about the loyalty program possible values: - yes_voucher - when customers are in a loyalty program and have only used vouchers, - yes_voucher_cash - when customers are in a loyalty program and have only used vouchers or cash deposits, - yes_clients, - yes_orders - when customers are in the loyalty program and have made at least one order, - no - when customers are in the loyalty program, - banned - when customers are blocked. */
    clientAffiliateProgram: (value: Array<JSObject>) => this;
    /** Permission to E-mail Newsletter. */
    newsletterEmailApproval: (value: string) => this;
    /** Permission to SMS Newsletter. */
    newsletterSmsApproval: (value: string) => this;
    /** Shops */
    searchByShops: (value: JSObject) => this;
    /** Loyalty cards: */
    clientLoyaltyCard: (value: JSObject) => this;
    /** External system code. */
    clientCodeExternal: (value: string) => this;
    /** External system codes list. */
    clientCodesExternal: (value: string|string[]) => this;
    /** Customer's first name. */
    clientFirstName: (value: string) => this;
    /** Customer's last name. */
    clientLastName: (value: string) => this;
    /** Customer Tax no. */
    clientNip: (value: string) => this;
    /** Customer's company name. */
    clientFirm: (value: string) => this;
    /** E-mail address. */
    clientEmail: (value: string) => this;
    /** List of shops where a customer agreed or didn't agree to receive email newsletter. */
    newsletterEmailApprovalsData: (value: Array<JSObject>) => this;
    /** List of shops where a customer agreed or didn't agree to receive sms newsletter. */
    newsletterSmsApprovalsData: (value: Array<JSObject>) => this;
    /** Customer loyalty card number, omitted when has_loyalty_card = no. */
    clientLoyaltyCardNumber: (value: string) => this;
    /** Orders. */
    orders: (value: JSObject) => this;
    /** Elements to be returned by the endpoint. By default all elements are returned */
    returnElements: (value: string|string[]) => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
    /** Determines, if data - that will be returned - will be exactly as entered values, or values should be fragment of customer data. */
    settingsExactSearch: (value: Boolean) => this;
    /** Define range of dates */
    registered: (dateFrom: DateLike, dateTo: DateLike) => this;
    /** Define range of dates */
    lastLoggedIn: (dateFrom: DateLike, dateTo: DateLike) => this;
    /** Define range of dates */
    ordered: (dateFrom: DateLike, dateTo: DateLike) => this;
}

export interface DeleteClientsDeliveryAddressRequest extends AppendableGateway<DeleteClientsDeliveryAddressRequest> {
    /** Customer data. */
    clients: (value: Array<JSObject>) => this;
    /** Customer's login. */
    clientLogin: (clientLogin: string) => this
    /** External system code. */
    clientCodeExternal: (clientCodeExternal: string) => this
    /** Delivery address ID. */
    clientDeliveryAddressId: (clientDeliveryAddressId: number|string) => this
}

export interface GetClientsDeliveryAddressRequest extends Gateway {
    /** External system codes list. */
    clientCodesExternal: (value: string|string[]) => this;
    /** Customer ID. */
    clientIds: (value: number|string|number[]|string[]) => this;
    /** Customer's login. */
    clientLogins: (value: string|string[]) => this;
}

export interface PostClientsDeliveryAddressRequest extends AppendableGateway<PostClientsDeliveryAddressRequest> {
    /** Customer data. */
    clients: (value: Array<JSObject>) => this;
    /** Customer's login. */
    clientLogin: (clientLogin: string) => this
    /** External system code. */
    clientCodeExternal: (clientCodeExternal: string) => this
    /** List of stores IDs When mask is determined, this parameter is omitted. */
    shopsIds: (shopsIds: number|string|number[]|string[]) => this
    /** Currency ID */
    currencyId: (currencyId: string) => this
    /** Recipient's first name. */
    clientDeliveryAddressFirstName: (clientDeliveryAddressFirstName: string) => this
    /** Recipient's last name. */
    clientDeliveryAddressLastName: (clientDeliveryAddressLastName: string) => this
    /** Additional information. */
    clientDeliveryAddressAdditional: (clientDeliveryAddressAdditional: string) => this
    /** Cell phone. */
    clientDeliveryAddressPhone1: (clientDeliveryAddressPhone1: string) => this
    /** Recipient's city. */
    clientDeliveryAddressCity: (clientDeliveryAddressCity: string) => this
    /** Recipient street and number. */
    clientDeliveryAddressStreet: (clientDeliveryAddressStreet: string) => this
    /** Administrative region code. */
    clientDeliveryAddressRegionId: (clientDeliveryAddressRegionId: string) => this
    /** Administrative region code. */
    clientDeliveryAddressProvinceId: (clientDeliveryAddressProvinceId: string) => this
    /** Recipient's postal code. */
    clientDeliveryAddressZipCode: (clientDeliveryAddressZipCode: string) => this
    /** Recipient's country. */
    clientDeliveryAddressCountry: (clientDeliveryAddressCountry: string) => this
}

export interface PutClientsDeliveryAddressRequest extends AppendableGateway<PutClientsDeliveryAddressRequest> {
    /** Customer data. */
    clients: (value: Array<JSObject>) => this;
    /** Customer's login. */
    clientLogin: (clientLogin: string) => this
    /** External system code. */
    clientCodeExternal: (clientCodeExternal: string) => this
    /** Delivery address ID. */
    clientDeliveryAddressId: (clientDeliveryAddressId: string) => this
    /** List of stores IDs When mask is determined, this parameter is omitted. */
    shopsIds: (shopsIds: number|string|number[]|string[]) => this
    /** Currency ID */
    currencyId: (currencyId: string) => this
    /** Recipient's first name. */
    clientDeliveryAddressFirstName: (clientDeliveryAddressFirstName: string) => this
    /** Recipient's last name. */
    clientDeliveryAddressLastName: (clientDeliveryAddressLastName: string) => this
    /** Additional information. */
    clientDeliveryAddressAdditional: (clientDeliveryAddressAdditional: string) => this
    /** Cell phone. */
    clientDeliveryAddressPhone1: (clientDeliveryAddressPhone1: string) => this
    /** Recipient's city. */
    clientDeliveryAddressCity: (clientDeliveryAddressCity: string) => this
    /** Recipient street and number. */
    clientDeliveryAddressStreet: (clientDeliveryAddressStreet: string) => this
    /** Administrative region code. */
    clientDeliveryAddressRegionId: (clientDeliveryAddressRegionId: string) => this
    /** Administrative region code. */
    clientDeliveryAddressProvinceId: (clientDeliveryAddressProvinceId: string) => this
    /** Recipient's postal code. */
    clientDeliveryAddressZipCode: (clientDeliveryAddressZipCode: string) => this
    /** Recipient's country. */
    clientDeliveryAddressCountry: (clientDeliveryAddressCountry: string) => this
}

export interface PutClientsExternalCodeRequest extends Gateway {
    client_id: (value: number|string) => this;
    /** Customer's login. */
    client_login: (value: string) => this;
    /** External system code. */
    code_extern: (value: string) => this;
}

export interface PutClientsGiftcardsBlockRequest extends AppendableGateway<PutClientsGiftcardsBlockRequest> {
    /** List of gift cards */
    giftCards: (value: Array<JSObject>) => this;
    /** Card ID */
    id: (id: number|string) => this
    /** Card number */
    number: (number: string) => this
}

export interface DeleteClientsGiftcardsRequest extends AppendableGateway<DeleteClientsGiftcardsRequest> {
    /** List of gift cards */
    giftCards: (value: Array<JSObject>) => this;
    /** Card ID */
    id: (id: number|string) => this
    /** Card number */
    number: (number: string) => this
}

export interface PostClientsGiftcardsRequest extends AppendableGateway<PostClientsGiftcardsRequest> {
    /** List of cards to add */
    giftCards: (value: Array<JSObject>) => this;
    /** Gift card type id */
    typeId: (typeId: number|string) => this
    /** Card number */
    number: (number: string) => this
    /** Card PIN */
    pin: (pin: string) => this
    /** Name of card */
    name: (name: string) => this
    /** Card expiration date */
    expirationDate: (expirationDate: string) => this
    /** Card balance */
    balance: (balance: JSObject) => this
    /** List of shops the card is active in */
    shops: (shops: number|string|number[]|string[]) => this
    /**  */
    note: (note: string) => this
}

export interface PutClientsGiftcardsRequest extends AppendableGateway<PutClientsGiftcardsRequest> {
    /** List of cards to edit */
    giftCards: (value: Array<JSObject>) => this;
    /** Card ID */
    id: (id: number|string) => this
    /** Card number */
    number: (number: string) => this
    /** Card PIN */
    pin: (pin: string) => this
    /** Name of card */
    name: (name: string) => this
    /** Card expiration date */
    expirationDate: (expirationDate: string) => this
    /** Balance operation type, possible values: - set - balance positioning of funds, - add - add funds to balance, - subtract - subtract funds from balance. */
    balanceOperationType: (balanceOperationType: 'set'|'add'|'subtract') => this
    /** Card balance */
    balance: (balance: JSObject) => this
    /** List of shops the card is active in */
    shops: (shops: number|string|number[]|string[]) => this
    /**  */
    note: (note: string) => this
    /** Adds balance to current gift card */
    add: (amount: number, currency: string) => this;
    /** Subtract from balance to current gift card */
    subtract: (amount: number, currency: string) => this;
    /** Set balance to current gift card */
    set: (amount: number, currency: string) => this;
}

export interface SearchClientsGiftcardsRequest extends Gateway<SearchGiftcardsResponse> {
    /** List of gift cards */
    giftCards: (value: Array<JSObject>) => this;
    /** element is an element array of type searchGiftCards */
    searchGiftCards: (value: JSObject) => this;
    /** Define giftCards values by passing them as an array */
    ids: (values: number|string|number[]|string[]) => this;
    /** Define giftCards values by passing them as an array */
    number: (values: number|string|number[]|string[]) => this;
    /** Define giftCards values by passing them as an array */
    pins: (values: number|string|number[]|string[]) => this;
}

export interface GetClientsGiftcardsTypesRequest extends PagableGateway<GetClientsGiftcardsTypesRequest> {
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
}

export interface PutClientsGiftcardsUnblockRequest extends AppendableGateway<PutClientsGiftcardsUnblockRequest> {
    /** List of gift cards */
    giftCards: (value: Array<JSObject>) => this;
    /** Card ID */
    id: (id: number|string) => this
    /** Card number */
    number: (number: string) => this
}

export interface GetClientsMembershipCardsRequest extends Gateway {
    /** Customer ID. */
    id: (value: number|string) => this;
    /** Customer's login. */
    login: (value: string) => this;
}

export interface PutClientsMembershipCardsRequest extends AppendableGateway<PutClientsMembershipCardsRequest> {
    /** Customer ID. */
    id: (value: number|string) => this;
    /** Customer's login. */
    login: (value: string) => this;
    membership_cards: (value: Array<JSObject>) => this;
    /** Card ID entered by customer. */
    ordinal_number: (ordinal_number: number|string) => this
    /** Card ID. */
    card_type: (card_type: number|string) => this
    /** Loyalty card number. */
    number: (number: string) => this
    /** Card PIN. */
    pin: (pin: number|string) => this
    /** Issue date. */
    creation_date: (creation_date: string) => this
    /** Determines whether a card should be deactivated. */
    deactivate: (deactivate: boolean) => this
    /** Flag that determines whether a discount group should be set. */
    set_rebate_group: (set_rebate_group: boolean) => this
    /** Information on error that occurred during gate call. */
    errors: (errors: JSObject) => this
}

export interface SearchClientsNewsletterEmailRequest extends PagableGateway<SearchClientsNewsletterEmailRequest,SearchNewsletterEmailResponse> {
    shops: (value: Array<JSObject>) => this;
    /** Customer language ID. */
    language: (value: string) => this;
    date: (value: JSObject) => this;
    /** Elements to be returned by the endpoint. By default all elements are returned */
    return_elements: (value: string|string[]) => this;
    /** Results page number. Numbering begins at 0. Default value: 0. */
    results_page: (value: number|string) => this;
    /** Maximum number of results on a single page. Default is 100. */
    results_limit: (value: number|string) => this;
    /** Define range of dates */
    dates: (dateFrom: DateLike, dateTo: DateLike) => this;
}

export interface SearchClientsNewsletterSmsRequest extends PagableGateway<SearchClientsNewsletterSmsRequest,SearchNewsletterSmsResponse> {
    shops: (value: Array<JSObject>) => this;
    /** Customer language ID. */
    language: (value: string) => this;
    date: (value: JSObject) => this;
    /** Elements to be returned by the endpoint. By default all elements are returned */
    return_elements: (value: string|string[]) => this;
    /** Results page number. Numbering begins at 0. Default value: 0. */
    results_page: (value: number|string) => this;
    /** Maximum number of results on a single page. Default is 100. */
    results_limit: (value: number|string) => this;
    /** Define range of dates */
    dates: (dateFrom: DateLike, dateTo: DateLike) => this;
}

export interface DeleteClientsPayerAddressRequest extends AppendableGateway<DeleteClientsPayerAddressRequest> {
    payers: (value: Array<JSObject>) => this;
    /** Unique client's number. */
    clientId: (clientId: number|string) => this
    /** Buyer's address id. */
    payerAddressId: (payerAddressId: number|string) => this
}

export interface GetClientsPayerAddressRequest extends PagableGateway<GetClientsPayerAddressRequest> {
    /** Unique client's number. */
    clientId: (value: string) => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
}

export interface PostClientsPayerAddressRequest extends AppendableGateway<PostClientsPayerAddressRequest> {
    payers: (value: Array<JSObject>) => this;
    /** Unique client's number. */
    clientId: (clientId: number|string) => this
    /** Buyer's first name. */
    payerAddressFirstName: (payerAddressFirstName: string) => this
    /** Buyer's last name. */
    payerAddressLastName: (payerAddressLastName: string) => this
    /** Company name. */
    payerAddressFirm: (payerAddressFirm: string) => this
    /** Customer VAT ID. */
    payerAddressNip: (payerAddressNip: string) => this
    /** Buyer's street name and house number. */
    payerAddressStreet: (payerAddressStreet: string) => this
    /** Buyer's postal code. */
    payerAddressZipCode: (payerAddressZipCode: string) => this
    /** Buyer's city. */
    payerAddressCity: (payerAddressCity: string) => this
    /** Country code in the ISO 3166-1 A2 standard. */
    payerAddressCountryId: (payerAddressCountryId: string) => this
    /** Buyer's telephone number. */
    payerAddressPhone: (payerAddressPhone: string) => this
}

export interface PutClientsPayerAddressRequest extends AppendableGateway<PutClientsPayerAddressRequest> {
    payers: (value: Array<JSObject>) => this;
    /** Unique client's number. */
    clientId: (clientId: string) => this
    /** Buyer's address id. */
    payerAddressId: (payerAddressId: string) => this
    /** Buyer's first name. */
    payerAddressFirstName: (payerAddressFirstName: string) => this
    /** Buyer's last name. */
    payerAddressLastName: (payerAddressLastName: string) => this
    /** Company name. */
    payerAddressFirm: (payerAddressFirm: string) => this
    /** Customer VAT ID. */
    payerAddressNip: (payerAddressNip: string) => this
    /** Buyer's street name and house number. */
    payerAddressStreet: (payerAddressStreet: string) => this
    /** Buyer's postal code. */
    payerAddressZipCode: (payerAddressZipCode: string) => this
    /** Buyer's city. */
    payerAddressCity: (payerAddressCity: string) => this
    /** Country code in the ISO 3166-1 A2 standard. */
    payerAddressCountryId: (payerAddressCountryId: string) => this
    /** Buyer's telephone number. */
    payerAddressPhone: (payerAddressPhone: string) => this
}

export interface GetClientsPricelistsClientsRequest extends Gateway {
    /** Individual price list ID. */
    priceListId: (value: number|string) => this;
}

export interface PutClientsPricelistsClientsRequest extends Gateway {
    /** Individual price list ID. */
    priceListId: (value: number|string) => this;
    /** Customer numbers. */
    clientsIds: (value: number|string|number[]|string[]) => this;
}

export interface DeleteClientsPricelistsRequest extends Gateway {
    /** Individual price list ID. */
    priceListId: (value: number|string) => this;
}

export interface GetClientsPricelistsRequest extends PagableGateway<GetClientsPricelistsRequest> {
    /** List of individual price lists. */
    priceListIds: (value: number|string|number[]|string[]) => this;
    /** Elements to be returned by the endpoint. By default all elements are returned. Available elements: - priceListId - priceListName - onlyOrderProductsWithManuallySetPrices - onlySeeProductsWithManuallySetPrices */
    returnElements: (value: string|string[]) => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
}

export interface PostClientsPricelistsRequest extends Gateway {
    /** Name of individual price list. */
    priceListName: (value: string) => this;
    /** Restrict visibility to products listed in price list (other products will remain hidden) - yes - no */
    onlyOrderProductsWithManuallySetPrices: (value: 'yes'|'no') => this;
    /** Restrict products visibility to products listed in price list, remaining products will be seen as "Call for price" - yes - no */
    onlySeeProductsWithManuallySetPrices: (value: 'yes'|'no') => this;
}

export interface PutClientsPricelistsRequest extends Gateway {
    /** Individual price list ID. */
    priceListId: (value: number|string) => this;
    /** Name of individual price list. */
    priceListName: (value: string) => this;
    /** Restrict visibility to products listed in price list (other products will remain hidden) - yes - no */
    onlyOrderProductsWithManuallySetPrices: (value: 'yes'|'no') => this;
    /** Restrict products visibility to products listed in price list, remaining products will be seen as "Call for price" - yes - no */
    onlySeeProductsWithManuallySetPrices: (value: 'yes'|'no') => this;
}

export interface GetClientsPricelistsProductsRequest extends PagableGateway<GetClientsPricelistsProductsRequest> {
    /** Individual price list ID. */
    priceListId: (value: number|string) => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results per page. Value from 1 to 500. */
    resultsLimit: (value: number|string) => this;
}

export interface PutClientsPricelistsProductsRequest extends Gateway {
    /** Individual price list ID. */
    priceListId: (value: number|string) => this;
    /** Products list. */
    products: (value: Array<JSObject>) => this;
    /** List of manufacturers assigned to sought products. */
    producers: (value: Array<JSObject>) => this;
    /** Series list. */
    series: (value: Array<JSObject>) => this;
    /** List of categories in which sought products are present. */
    categories: (value: Array<JSObject>) => this;
    menuItems: (value: Array<JSObject>) => this;
}

export interface PutClientsPricelistsRenameRequest extends Gateway {
    /** Name of individual price list. */
    priceListName: (value: string) => this;
    /** Individual price list ID. */
    priceListId: (value: number|string) => this;
}

export interface GetClientsPricesActiveCardRequest extends Gateway {}

export interface GetClientsPricesDiscountGroupsRequest extends PagableGateway<GetClientsPricesDiscountGroupsRequest> {
    /** Customer groups. */
    clientDiscountGroupsNumbers: (value: number|string|number[]|string[]) => this;
    /** Elements to be returned by the endpoint. By default all elements are returned. Available elements: - clientDiscountGroupNumber - clientDiscountGroupIsCombined - clientDiscountGroupType - clientDiscountGroupValue - clientDiscountGroupName */
    returnElements: (value: string|string[]) => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
}

export interface GetClientsPricesDiscountsRequest extends PagableGateway<GetClientsPricesDiscountsRequest> {
    /** Customer numbers. */
    clientsIds: (value: number|string|number[]|string[]) => this;
    /** Text search through customer data. */
    clientTextSearch: (value: string) => this;
    /** Active */
    clientIsActive: (value: 'yes'|'no') => this;
    /** Trade credit: - positive or negative, - only positive, - only negative, - only zero. */
    clientHasTradeCredit: (value: 'nonzero'|'positive'|'negative'|'zero') => this;
    /** Date of last purchase. */
    clientLastPurchaseDate: (value: JSObject) => this;
    /** Elements to be returned by the endpoint. By default all elements are returned. Available elements: - clientId - clientDiscountIsCombined - clientDiscountType - clientDiscountValue */
    returnElements: (value: string|string[]) => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
    /** Define range of dates */
    lastPurchased: (dateFrom: DateLike, dateTo: DateLike) => this;
}

export interface PutClientsPricesDiscountsRequest extends AppendableGateway<PutClientsPricesDiscountsRequest> {
    customers: (value: JSObject) => this;
    /** Discount type, possible values: - simple */
    discount_type: (value: string) => this;
    /** Action, possible values: - sum_with_other_discounts_to_orders - sum with other discounts assigned to orders, - use_only_if_greater_than_the_sum_of_other_discounts - use only if greater than the sum of other discounts */
    discount_operating: (value: string) => this;
    discount_parameters: (value: Array<JSObject>) => this;
    /** Parameter type. - DEPRECATED */
    parameter_type: (parameter_type: string) => this
    /** Parameter text ID. - DEPRECATED */
    parameter_value: (parameter_value: string) => this
    /** Size of discount. */
    discount_value: (discount_value: number) => this
}

export interface GetClientsProfitPointsRequest extends PagableGateway<GetClientsProfitPointsRequest> {
    /** Customer numbers. */
    clientsIds: (value: number|string|number[]|string[]) => this;
    /** Text search through customer data. */
    clientTextSearch: (value: string) => this;
    /** Active */
    clientIsActive: (value: 'yes'|'no') => this;
    /** Trade credit: - positive or negative, - only positive, - only negative, - only zero. */
    clientHasTradeCredit: (value: 'nonzero'|'positive'|'negative'|'zero') => this;
    /** Date of last purchase. */
    clientLastPurchaseDate: (value: JSObject) => this;
    /** Profit points modification date range. */
    pointsModificationDate: (value: JSObject) => this;
    /** Elements to be returned by the endpoint. By default all elements are returned. Available elements: - clientId - clientProfitPoints - clientProfitPointsHistories */
    returnElements: (value: string|string[]) => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
    /** Define range of dates */
    lastPurchased: (dateFrom: DateLike, dateTo: DateLike) => this;
}

export interface PostClientsProfitPointsRequest extends Gateway {
    client_id: (value: number|string) => this;
    /** Operation: - add, - remove. */
    operation: (value: string) => this;
    /** Amount of points to add or subtract. */
    score: (value: Number) => this;
    note: (value: string) => this;
    /** Prepayment ID. */
    order_number: (value: number|string) => this;
}

export interface GetClientsProvinceListRequest extends Gateway {
    /** Country code in ISO 3166-1 standard. */
    country_code: (value: string) => this;
}

export interface DeleteClientsRequest extends Gateway {
    /** Client's ID */
    clientId: (value: number|string) => this;
}

export interface DeleteClientsTagsClearRequest extends Gateway {
    /** Unique client's number. */
    clientId: (value: number|string) => this;
}

export interface DeleteClientsTagsRequest extends AppendableGateway<DeleteClientsTagsRequest> {
    /** Parameters transmitted to method */
    params: (value: Array<JSObject>) => this;
    /** Unique client's number. */
    clientId: (clientId: number|string) => this
    /** Tag ID. */
    tagId: (tagId: number|string) => this
}

export interface GetClientsTagsRequest extends Gateway {
    /** Unique client's number. */
    clientId: (value: number|string) => this;
}

export interface PostClientsTagsRequest extends AppendableGateway<PostClientsTagsRequest> {
    /** Parameters transmitted to method */
    params: (value: Array<JSObject>) => this;
    /** Unique client's number. */
    clientId: (clientId: number|string) => this
    /** Tag name. */
    tagName: (tagName: string) => this
    /** Tag value. */
    tagValue: (tagValue: number|string) => this
}

export interface PutClientsTagsRequest extends AppendableGateway<PutClientsTagsRequest> {
    /** Unique client's number. */
    clientId: (value: number|string) => this;
    clientTags: (value: Array<JSObject>) => this;
    /** Tag ID. */
    tagId: (tagId: number|string) => this
    /**  */
    operation: (operation: 'add'|'set'|'subtract') => this
    /** Tag value. */
    tagValue: (tagValue: number|string) => this
}

export interface GetConfigVariablesRequest extends PagableGateway<GetConfigVariablesRequest> {
    /** Which component is affected by the configuration. */
    type: (value: 'snippets_campaign') => this;
    /** List of item identifiers for given configuration type. Eg. snippet campaign identifiers. */
    item: (value: number|string|number[]|string[]) => this;
    /** List of configuration keys */
    key: (value: string|string[]) => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
}

export interface PutConfigVariablesRequest extends AppendableGateway<PutConfigVariablesRequest> {
    variables: (value: Array<JSObject>) => this;
    /** Key of config value. */
    key: (key: string) => this
    /** Value of config item. */
    value: (value: string) => this
    /** The type of module for which the configuration is used */
    type: (type: 'snippets_campaign') => this
    /** Identifier of the item in used module */
    itemId: (itemId: number|string) => this
}

export interface DeleteConfigVariablesRequest extends Gateway {
    /** Which component is affected by the configuration. */
    type: (value: 'snippets_campaign') => this;
    /** List of item identifiers for given configuration type. Eg. snippet campaign identifiers. */
    item: (value: number|string|number[]|string[]) => this;
    /** List of configuration keys */
    key: (value: string|string[]) => this;
}

export interface GetCouriersAssignedToShippingProfilesRequest extends Gateway {}

export interface GetCouriersRequest extends PagableGateway<GetCouriersRequest> {
    /** Country code in ISO 3166-1 standard. */
    countryCode: (value: string) => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
}

export interface DeleteCouriersPickupPointsRequest extends AppendableGateway<DeleteCouriersPickupPointsRequest> {
    pickupPointDeleteRequests: (value: Array<JSObject>) => this;
    /** Collection point ID. */
    pickupPointId: (pickupPointId: string) => this
    /** external system code. */
    pickupPointExternalId: (pickupPointExternalId: string) => this
    /** Courier ID. */
    courierId: (courierId: number|string) => this
}

export interface GetCouriersPickupPointsRequest extends PagableGateway<GetCouriersPickupPointsRequest> {
    /** Courier ID. */
    courierId: (value: number|string) => this;
    /** Collection point ID. */
    pickupPointId: (value: string) => this;
    /** External system code. */
    pickupPointExternalId: (value: string) => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
}

export interface PostCouriersPickupPointsRequest extends AppendableGateway<PostCouriersPickupPointsRequest> {
    pickupPoints: (value: Array<JSObject>) => this;
    /** external system code. */
    pickupPointExternalId: (pickupPointExternalId: string) => this
    /** Courier ID. */
    courierId: (courierId: number|string) => this
    /** collection point details. */
    descriptions: (descriptions: Array<JSObject>) => this
    /** Accepted payment types. */
    paymentForms: (paymentForms: string|string[]) => this
    /** Collection point activity. Available values: available, outOfService . */
    serviceStatus: (serviceStatus: 'out_of_service'|'available') => this
    /** Pickup point address. */
    address: (address: JSObject) => this
    /** Geographic coordinates. */
    coordinates: (coordinates: JSObject) => this
    /** Personal collection point work hours. */
    operatingDays: (operatingDays: Array<JSObject>) => this
}

export interface PutCouriersPickupPointsRequest extends AppendableGateway<PutCouriersPickupPointsRequest> {
    pickupPoints: (value: Array<JSObject>) => this;
    /** Collection point ID. */
    pickupPointId: (pickupPointId: string) => this
    /** external system code. */
    pickupPointExternalId: (pickupPointExternalId: string) => this
    /** Courier ID. */
    courierId: (courierId: number|string) => this
    /** collection point details. */
    descriptions: (descriptions: Array<JSObject>) => this
    /** Accepted payment types. */
    paymentForms: (paymentForms: string|string[]) => this
    /** Collection point activity. Available values: available, outOfService . */
    serviceStatus: (serviceStatus: 'out_of_service'|'available') => this
    /** Pickup point address. */
    address: (address: JSObject) => this
    /** Geographic coordinates. */
    coordinates: (coordinates: JSObject) => this
    /** Personal collection point work hours. */
    operatingDays: (operatingDays: Array<JSObject>) => this
}

export interface GetCpaCampaignRequest extends PagableGateway<GetCpaCampaignRequest> {
    /** List of shop identifiers */
    shopId: (value: number|string|number[]|string[]) => this;
    /** List of identifiers */
    id: (value: number|string|number[]|string[]) => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
}

export interface PostCpaCampaignRequest extends AppendableGateway<PostCpaCampaignRequest> {
    campaigns: (value: Array<JSObject>) => this;
    /** undefined */
    id: (id: number|string) => this
    /** Snippet campaign name */
    name: (name: string) => this
    /** Snippet campaign internal description */
    description: (description: string) => this
    /** Shop ids where code snippets are active */
    shop: (shop: number|string|number[]|string[]) => this
    /** Whether the snippet is active */
    active: (active: 'y'|'n') => this
}

export interface PutCpaCampaignRequest extends AppendableGateway<PutCpaCampaignRequest> {
    campaigns: (value: Array<JSObject>) => this;
    /** Snippet campaign id */
    id: (id: number|string) => this
    /** Snippet campaign name */
    name: (name: string) => this
    /** Snippet campaign internal description */
    description: (description: string) => this
    /** Shop ids where code snippets are active */
    shop: (shop: number|string|number[]|string[]) => this
    /** Whether the snippet is active */
    active: (active: 'y'|'n') => this
}

export interface DeleteCpaCampaignRequest extends Gateway {
    /** List of identifiers */
    id: (value: number|string|number[]|string[]) => this;
}

export interface GetCpaRequest extends PagableGateway<GetCpaRequest> {
    /** List of campaign identifiers */
    campaign: (value: number|string|number[]|string[]) => this;
    /** List of identifiers */
    id: (value: number|string|number[]|string[]) => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
}

export interface PostCpaRequest extends AppendableGateway<PostCpaRequest> {
    cpa: (value: Array<JSObject>) => this;
    /** undefined */
    id: (id: number|string) => this
    /** The CPA program name. */
    name: (name: string) => this
    /** Whether the CPA program is active. */
    active: (active: 'y'|'n') => this
    /** CPA campaign id */
    campaign: (campaign: number|string) => this
    /** CPA program page settings simple or advanced, depending on the mode. */
    pageSettings: (pageSettings: JSObject) => this
    /** undefined */
    display: (display: JSObject) => this
    /** Snippet entry source filter. */
    sources: (sources: JSObject) => this
    /** List of variables that can be used in a body template. */
    variables: (variables: Array<JSObject>) => this
}

export interface PutCpaRequest extends AppendableGateway<PutCpaRequest> {
    cpa: (value: Array<JSObject>) => this;
    /** undefined */
    id: (id: number|string) => this
    /** The CPA program name. */
    name: (name: string) => this
    /** Whether the CPA program is active. */
    active: (active: 'y'|'n') => this
    /** CPA campaign id */
    campaign: (campaign: number|string) => this
    /** CPA program page settings simple or advanced, depending on the mode. */
    pageSettings: (pageSettings: JSObject) => this
    /** undefined */
    display: (display: JSObject) => this
    /** Snippet entry source filter. */
    sources: (sources: JSObject) => this
    /** List of variables that can be used in a body template. */
    variables: (variables: Array<JSObject>) => this
}

export interface DeleteCpaRequest extends Gateway {
    /** List of identifiers */
    id: (value: number|string|number[]|string[]) => this;
}

export interface PutDeliveriesDefaultProfilesRequest extends Gateway {
    /** Country ID */
    regionId: (value: number|string) => this;
    /** Shop Id */
    shopId: (value: number|string) => this;
    /** ID of delivery profile for retail sales  */
    retailProfileId: (value: number|string) => this;
    /** ID of delivery profile for wholesale sales  */
    wholesaleProfileId: (value: number|string) => this;
}

export interface GetDeliveriesProfilesRequest extends PagableGateway<GetDeliveriesProfilesRequest> {
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
}

export interface GetDeliveriesRegionsRequest extends Gateway {
    /** Shop Id */
    shopId: (value: number|string) => this;
}

export interface PostDeliveriesRegionsRequest extends Gateway {
    /** Name of the region in the panel */
    regionName: (value: string) => this;
    /** Shop Id */
    shopId: (value: number|string) => this;
    /** The range of postal codes from %s */
    postCodeFrom: (value: string) => this;
    /** The range of postal codes to %s */
    postCodeTo: (value: string) => this;
    /** ID of the country for which the region is being added */
    parentRegionId: (value: number|string) => this;
}

export interface GetDiscountsGroupsClientsRequest extends Gateway {
    /** Discount group ID */
    discountGroupId: (value: number|string) => this;
}

export interface DeleteDiscountsGroupsRequest extends Gateway {
    /** Discount group ID */
    discountGroupId: (value: number|string) => this;
}

export interface GetDiscountsGroupsRequest extends PagableGateway<GetDiscountsGroupsRequest> {
    groupNumbers: (value: number|string|number[]|string[]) => this;
    /** Elements to be returned by the endpoint. By default all elements are returned. Available elements: - groupNumber - groupCombined - groupType - groupRebate - groupName */
    returnElements: (value: string|string[]) => this;
    /** Results page number. Numbering begins at 0. Default value: 0. */
    resultsPage: (value: number|string) => this;
    /** Maximum number of results on a single page. Default is 100. */
    resultsLimit: (value: number|string) => this;
}

export interface PostDiscountsGroupsRequest extends Gateway {
    /** Discount group name */
    discountGroupName: (value: string) => this;
}

export interface PutDiscountsGroupsRequest extends Gateway {
    /** Discount group ID */
    discountGroupId: (value: number|string) => this;
    /** Discount group name */
    discountGroupName: (value: string) => this;
}

export interface DeleteDiscountsGroupsProductsRequest extends Gateway {
    /** Discount group ID */
    discountGroupId: (value: number|string) => this;
    /** Products list. */
    products: (value: number|string|number[]|string[]) => this;
    /** Brands */
    producers: (value: number|string|number[]|string[]) => this;
    /** Series */
    series: (value: number|string|number[]|string[]) => this;
    /** List of categories in which sought products are present. */
    categories: (value: number|string|number[]|string[]) => this;
    /** Menu elements */
    menuItems: (value: number|string|number[]|string[]) => this;
}

export interface PutDiscountsGroupsProductsRequest extends Gateway {
    /** Discount group ID */
    discountGroupId: (value: number|string) => this;
    /** Products list. */
    products: (value: Array<JSObject>) => this;
    /** Brands */
    producers: (value: Array<JSObject>) => this;
    /** Series */
    series: (value: Array<JSObject>) => this;
    /** List of categories in which sought products are present. */
    categories: (value: Array<JSObject>) => this;
    /** Menu elements */
    menuItems: (value: Array<JSObject>) => this;
}

export interface PutDiscountsRebatesBlockCardRequest extends Gateway {
    /** Card number */
    card_number: (value: string) => this;
}

export interface DeleteDiscountsRebatesCardRequest extends Gateway {
    /** Discount card type */
    campaign_id: (value: number|string) => this;
}

export interface PostDiscountsRebatesCardRequest extends Gateway {
    /** Discount card type */
    campaign_id: (value: number|string) => this;
    /** Card number */
    card_number: (value: string) => this;
}

export interface DeleteDiscountsRebatesCodeRequest extends Gateway {
    /** Campaign ID */
    campaign_id: (value: number|string) => this;
}

export interface PostDiscountsRebatesCodeRequest extends Gateway {
    /** Campaign ID */
    campaign_id: (value: number|string) => this;
    /** Code */
    code_number: (value: string) => this;
}

export interface PutDiscountsRebatesUnblockCardRequest extends Gateway {
    /** Card number */
    card_number: (value: string) => this;
}

export interface DeleteEntriesRequest extends Gateway {
    /** Entry ID */
    entryId: (value: number|string) => this;
}

export interface GetEntriesRequest extends Gateway {
    /** Entry ID */
    entryId: (value: number|string) => this;
    /** Language ID */
    langId: (value: string) => this;
}

export interface PostEntriesRequest extends AppendableGateway<PostEntriesRequest> {
    /** Shop Id */
    shopId: (value: number|string) => this;
    /** Date of creating an entry */
    date: (value: string) => this;
    /** Entry visibility */
    visible: (value: 'y'|'n') => this;
    /** List of pages on which the entry is to be published */
    visibleOnSitesList: (value: Array<JSObject>) => this;
    /** Products list. */
    products: (value: Array<JSObject>) => this;
    /** Photo */
    pictureData: (value: JSObject) => this;
    /** Element including entry content in selected languages */
    langs: (value: Array<JSObject>) => this;
    /** Type of title and shortcut linking: fullContentLink - link to the subpage with full content, givenUrlLink - link to the given URL, noLink - static element */
    titleLinkType: (value: 'fullContentLink'|'givenUrlLink'|'noLink') => this;
    /** Provided URL (for link to specified URL option) */
    link: (value: string) => this;
    /** Language ID */
    langId: (langId: string) => this
    /** Name on the page */
    title: (title: string) => this
    /** short description */
    shortDescription: (shortDescription: string) => this
    /** Long description */
    longDescription: (longDescription: string) => this
    /** Blog post URL */
    blogUrl: (blogUrl: string) => this
    /** News item URL */
    newsUrl: (newsUrl: string) => this
    /** Add Post to blog entries */
    blog: () => this;
    /** Add Post to news entries */
    news: () => this;
}

export interface PutEntriesRequest extends Gateway {
    /** Entry ID */
    entryId: (value: number|string) => this;
    /** Shop Id */
    shopId: (value: number|string) => this;
    /** Date of creating an entry */
    date: (value: string) => this;
    /** Entry visibility */
    visible: (value: 'y'|'n') => this;
    /** List of pages on which the entry is to be published */
    visibleOnSitesList: (value: Array<JSObject>) => this;
    /** Products list. */
    products: (value: Array<JSObject>) => this;
    /** Photo */
    pictureData: (value: JSObject) => this;
    /** Determines whether to delete an entry photo */
    deletePicture: (value: 'y'|'n') => this;
    /** Element including entry content in selected languages */
    langs: (value: Array<JSObject>) => this;
    /** Type of title and shortcut linking: fullContentLink - link to the subpage with full content, givenUrlLink - link to the given URL, noLink - static element */
    titleLinkType: (value: 'fullContentLink'|'givenUrlLink'|'noLink') => this;
    /** Provided URL (for link to specified URL option) */
    link: (value: string) => this;
}

export interface GetEntriesPagesToDisplayRequest extends Gateway {
    /** Language ID */
    langId: (value: string) => this;
}

export interface GetEntriesSourcesRequest extends Gateway {
    /** The type of source for which we want to get service identifiers */
    type: (value: string|string[]) => this;
}

export interface GetMenuFilterRequest extends Gateway {
    /** Shop Id */
    shopId: (value: number|string) => this;
    /** Language ID (code in ISO 639-2). */
    languageId: (value: string) => this;
    /** Tree menu ID. */
    productMenuTreeId: (value: number|string) => this;
    /** Menu element ID. */
    productMenuNodeId: (value: number|string) => this;
}

export interface PutMenuFilterRequest extends AppendableGateway<PutMenuFilterRequest> {
    /** Shop Id */
    shopId: (value: number|string) => this;
    /** Language ID (code in ISO 639-2). */
    languageId: (value: string) => this;
    /** Tree menu ID. */
    productMenuTreeId: (value: number|string) => this;
    /** Menu element ID. */
    productMenuNodeId: (value: number|string) => this;
    /** Default filter settings. */
    filterForMenuNodeIsDefault: (value: 'y'|'n') => this;
    /** Active filters. */
    menuFiltersActive: (value: Array<JSObject>) => this;
    /** Menu filter ID. */
    menuFilterId: (menuFilterId: string) => this
    /** Filter name on page. */
    menuFilterName: (menuFilterName: string) => this
    /** Display as: "name" - text, "gfx" - graphics, "namegfx" - text and graphics. */
    menuFilterDisplay: (menuFilterDisplay: 'name'|'gfx'|'namegfx') => this
    /** Sort by: "y" - alfabetically, "n" - by frequency and order of occurrence of indicated parameter value in found products, "priority" - according to value sequence in parameter. */
    menuFilterValueSort: (menuFilterValueSort: 'y'|'n'|'priority') => this
    /** Enabled by default . */
    menuFilterDefaultEnabled: (menuFilterDefaultEnabled: 'y'|'n') => this
}

export interface DeleteMenuRequest extends AppendableGateway<DeleteMenuRequest> {
    menu_list: (value: Array<JSObject>) => this;
    /** Settings. */
    settings: (value: JSObject) => this;
    /** Shop Id. */
    shop_id: (shop_id: number|string) => this
    /** Menu ID. */
    menu_id: (menu_id: number|string) => this
    /** Menu element ID. */
    item_id: (item_id: number|string) => this
    /** Menu element text identifier. Example: "item1\item2\item3". */
    item_textid: (item_textid: string) => this
}

export interface GetMenuRequest extends Gateway<GetMenuResponse> {
    /** Shop Id. */
    shop_id: (value: number|string) => this;
    /** Tree menu ID. */
    menu_id: (value: number|string) => this;
    /** Language ID. */
    lang_id: (value: string) => this;
    /** Menu node ID. */
    node_id: (value: number|string) => this;
    /** Number of levels. */
    level: (value: number|string) => this;
    /** Default: "\". */
    textid_separator: (value: string) => this;
}

export interface PostMenuRequest extends AppendableGateway<PostMenuRequest> {
    menu_list: (value: Array<JSObject>) => this;
    /** Settings */
    settings: (value: JSObject) => this;
    /** Shop Id. */
    shop_id: (shop_id: number|string) => this
    /** Menu ID. */
    menu_id: (menu_id: number|string) => this
    /** Parent menu element ID. */
    parent_id: (parent_id: string) => this
    /** Menu element text identifier. Example: "item1\item2". */
    parent_textid: (parent_textid: string) => this
    /**  */
    lang_data: (lang_data: Array<JSObject>) => this
}

export interface PutMenuRequest extends AppendableGateway<PutMenuRequest> {
    menu_list: (value: Array<JSObject>) => this;
    /** Settings. */
    settings: (value: JSObject) => this;
    /** Shop Id. */
    shop_id: (shop_id: number|string) => this
    /** Menu ID. */
    menu_id: (menu_id: number|string) => this
    /** Menu element ID. */
    item_id: (item_id: string) => this
    /** Menu element text identifier. Example: "item1\item2\item3". */
    item_textid: (item_textid: string) => this
    /**  */
    lang_data: (lang_data: Array<JSObject>) => this
}

export interface PutMenuSortRequest extends AppendableGateway<PutMenuSortRequest> {
    menu_list: (value: Array<JSObject>) => this;
    /** Settings */
    settings: (value: JSObject) => this;
    /** Shop Id. */
    shop_id: (shop_id: number|string) => this
    /** Menu ID. */
    menu_id: (menu_id: number|string) => this
    /** Language ID. */
    lang_id: (lang_id: string) => this
    /** Menu element text identifier. */
    parent_id: (parent_id: number|string) => this
    /** Menu element text identifier. Example: "item1\item2\item3". */
    parent_textid: (parent_textid: string) => this
    /** Recurring: y/n! */
    recursive: (recursive: 'y'|'n') => this
}

export interface GetOrdersAnalyticsRequest extends Gateway {
    /** Array of order serial numbers. */
    orderSerialNumber: (value: number|string|number[]|string[]) => this;
}

export interface GetOrdersAuctionDetailsRequest extends Gateway<GetAuctionDetailsResponse> {
    /** Identifier type. */
    identType: (value: 'orders_id'|'orders_sn') => this;
    /** Orders Id values. */
    orders: (value: string|string[]) => this;
    ids: (value: string|string[]) => this;
    serialNumbers: (value: number|string|number[]|string[]) => this;
}

export interface PutOrdersClientRequest extends Gateway {
    /** Order serial number. */
    orderSerialNumber: (value: number|string) => this;
    /** Unique client's number. */
    clientId: (value: number|string) => this;
}

export interface PutOrdersCourierRequest extends Gateway {
    /** Order serial number. */
    orderSerialNumber: (value: number|string) => this;
    /** Courier ID. */
    courierId: (value: number|string) => this;
    /** Collection point ID. */
    pickupPointId: (value: string) => this;
}

export interface PutOrdersDeliveryAddressRequest extends Gateway {
    /** Order serial number. */
    orderSerialNumber: (value: number|string) => this;
    /** Delivery address ID. */
    clientDeliveryAddressId: (value: number|string) => this;
    /** Customer's login. */
    clientLogin: (value: string) => this;
}

export interface PutOrdersDevideRequest extends AppendableGateway<PutOrdersDevideRequest> {
    /** Order serial number. */
    orderSerialNumber: (value: number|string) => this;
    /** Products list. */
    products: (value: Array<JSObject>) => this;
    /** Whether to split payments */
    splitPayments: (value: Boolean) => this;
    /** Item in basket. */
    basketPosition: (basketPosition: number|string) => this
    /** Quantity */
    quantity: (quantity: number) => this
}

export interface PostOrdersDocumentsCreateRequest extends Gateway {
    orderSerialNumbers: (value: number|string|number[]|string[]) => this;
    actualize: (value: Boolean) => this;
    /** Document type */
    documentType: (value: 'vat_invoice'|'fiscal_invoice'|'corrective_vat_invoice'|'fiscal_receipt'|'sales_confirmation') => this;
    /** Document issued date */
    documentIssuedDate: (value: string) => this;
    /** Document purchase date */
    documentPurchaseDate: (value: string) => this;
    /** Printer id */
    printerId: (value: number|string) => this;
}

export interface DeleteOrdersDocumentsRequest extends AppendableGateway<DeleteOrdersDocumentsRequest> {
    /** List of documents. */
    documents: (value: Array<JSObject>) => this;
    /** Order serial number. */
    orderSerialNumber: (orderSerialNumber: number|string) => this
    /** Document identifier. */
    id: (id: number|string) => this
}

export interface GetOrdersDocumentsRequest extends Gateway<GetOrdersDocumentsResponse> {
    /** Order serial number. */
    orderSerialNumber: (value: string|string[]) => this;
    /** Document type */
    documentType: (value: 'sales_confirmation'|'vat_invoice'|'corrective_vat_invoice'|'advance_vat_invoice'|'final_advance_vat_invoice'|'pro_forma_invoice'|'advance_pro_forma_invoice'|'final_advance_pro_forma_invoice'|'delivery_note'|'fiscal_receipt'|'fiscal_invoice'|'other') => this;
    /** Elements returned by api */
    returnElements: (value: string|string[]) => this;
}

export interface PostOrdersDocumentsRequest extends AppendableGateway<PostOrdersDocumentsRequest> {
    /** List of documents. */
    documents: (value: Array<JSObject>) => this;
    /** Order serial number. */
    orderSerialNumber: (orderSerialNumber: number|string) => this
    /** File name. */
    name: (name: string) => this
    /** BMP, PNG, JPG, JPEG, GIF or PDF files in Base64 encoding algorithm. */
    pdfBase64: (pdfBase64: string) => this
    /** Document type. */
    type: (type: 'vat_invoice'|'corrective_vat_invoice'|'other') => this
    /** Is it to be shown to the customer in the order view. */
    returnedInOrderDetails: (returnedInOrderDetails: 'y'|'n') => this
    /** Additional information. */
    additionalData: (additionalData: JSObject) => this
    /** Set Issue date */
    date: (date: string) => this;
}

export interface GetOrdersExportdocumentsEPPRequest extends Gateway {
    /** Beginning date in YYYY-MM-DD HH:MM:SS format. */
    dateBegin: (value: string) => this;
    /** Ending date in YYYY-MM-DD HH:MM:SS format. */
    dateEnd: (value: string) => this;
    applicationType: (value: 'SubiektGT'|'Rachmistrz'|'wFirma') => this;
    /** Stock ID (required only when selecting particular stocks). */
    stocks: (value: number|string|number[]|string[]) => this;
    /** Document type */
    documentType: (value: 'all'|'stocks'|'invoice'|'payments') => this;
    /** Date the document was first generated. */
    invoiceFirstGeneratedDate: (value: number|string) => this;
    /** Define range of dates */
    dates: (dateFrom: DateLike, dateTo: DateLike) => this;
}

export interface GetOrdersExportdocumentsJPKRequest extends Gateway {
    /** Document type */
    documentType: (value: 'JPK_FA'|'JPK_MAG'|'JPK_VAT') => this;
    /** JPK file identifier to download. */
    fileId: (value: number|string) => this;
    /** JPK format version. If empty, takes the latest version number. */
    documentVersion: (value: number|string) => this;
    /** Schema version */
    schemaVersion: (value: string) => this;
    /** Beginning date in YYYY-MM-DD HH:MM:SS format. (JPK_FA, JPK_MAG) */
    dateBegin: (value: string) => this;
    /** Ending date in YYYY-MM-DD HH:MM:SS format. (JPK_FA, JPK_MAG) */
    dateEnd: (value: string) => this;
    /** Billing month for which to generate the document. (JPK_VAT) */
    month: (value: number|string) => this;
    /** Billing year for which to generate the document. (JPK_VAT) */
    year: (value: number|string) => this;
    /** Currency symbol in ISO 4217 format. */
    currency: (value: string) => this;
    /** Store ID only required if a specific store is selected. */
    shop: (value: number|string|number[]|string[]) => this;
    /** Stock ID */
    stockId: (value: number|string|number[]|string[]) => this;
    /** Forces the file to be generated by background tasks. The file will be generated later. Then, after it is generated, you will be able to download the given file using the returned ID. The file will be available 24h after the task is completed. */
    forceBackgroundGenerate: (value: Boolean) => this;
    /** Define range of dates */
    dates: (dateFrom: DateLike, dateTo: DateLike) => this;
}

export interface GetOrdersHandlerRequest extends Gateway {
    /** Order serial number. */
    orderSerialNumber: (value: number|string) => this;
}

export interface PutOrdersHandlerRequest extends Gateway {
    /** Order serial number. */
    orderSerialNumber: (value: number|string) => this;
    /** Order handler. */
    orderOperatorLogin: (value: string) => this;
}

export interface GetOrdersHistoryRequest extends Gateway {
    /** Order serial number. */
    orderSerialNumber: (value: number|string) => this;
}

export interface DeleteOrdersImagesRequest extends AppendableGateway<DeleteOrdersImagesRequest> {
    order: (value: JSObject) => this;
    /** List of attachment IDs to be removed from the details of the selected order */
    images: (value: Array<JSObject>) => this;
    /** Attachment ID */
    id: (id: number|string) => this
}

export interface GetOrdersImagesRequest extends Gateway {
    /** Attachment ID (Photos) */
    imageId: (value: number|string) => this;
    /** Order serial number */
    orderSerialNumber: (value: number|string) => this;
}

export interface PostOrdersImagesRequest extends AppendableGateway<PostOrdersImagesRequest> {
    /** Login */
    userName: (value: string) => this;
    settings: (value: JSObject) => this;
    order: (value: JSObject) => this;
    /** List of image attachments */
    images: (value: Array<JSObject>) => this;
    /** Type. Available values: product - Product photo, package - Package photo */
    type: (type: 'product'|'package') => this
    /** Attachment source data, depending on the source type selected in the settings. BMP, PNG, JPG, JPEG, GIF or PDF files in Base64 encoding algorithm. */
    source: (source: string) => this
    /** Name */
    name: (name: string) => this
    orderId: (value: string) => this;
    orderSerialNumber: (value: number|string) => this;
}

export interface GetOrdersLabelsRequest extends Gateway {
    /** Order serial number. */
    orderSerialNumber: (value: number|string) => this;
}

export interface SearchOrdersOpinionsRequest extends PagableGateway<SearchOrdersOpinionsRequest,SearchOpinionsResponse> {
    /** Review identification */
    opinion: (value: JSObject) => this;
    /** Orders. */
    orders: (value: JSObject) => this;
    /** Customer data. */
    clients: (value: JSObject) => this;
    /** Date range */
    dateRange: (value: JSObject) => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
    /** Possibility of sorting returned list */
    ordersBy: (value: Array<JSObject>) => this;
    orderId: (value: string) => this;
    orderSerialNumber: (value: string) => this;
    clientId: (value: string) => this;
    clientLogin: (value: string) => this;
    clientCode: (value: string) => this;
    /** Define range of dates */
    dates: (dateFrom: DateLike, dateTo: DateLike) => this;
    /** Define ordering of records */
    orderBy: (elementName: "date"|"rating"|"scorePositive"|"scoreNegative"|"modificationDatetime", descending: boolean) => this;
}

export interface GetOrdersOpinionsRateRequest extends Gateway {
    id: (value: number|string) => this;
    operation: (value: 'positive'|'negative') => this;
}

export interface GetOrdersRequest extends Gateway<SearchOrdersResponse> {
    /** Orders IDs. */
    ordersIds: (value: string|string[]) => this;
    /** Order serial numbers. You can transfer a maximum of 100 items. */
    ordersSerialNumbers: (value: number|string|number[]|string[]) => this;
    /** The order ID of the external service. You can transfer a maximum of 100 items in one request. */
    orderExternalId: (value: string) => this;
}

export interface PostOrdersRequest extends AppendableGateway<PostOrdersRequest> {
    /** Orders. */
    orders: (value: Array<JSObject>) => this;
    /** Order type. Allowed values. "retail" - retail order, "wholesale" - wholesale order (can be added only by customer with wholesale account registered). Default value:: "retail" */
    orderType: (orderType: string) => this
    /** Shop Id */
    shopId: (shopId: number|string) => this
    /** Stock ID */
    stockId: (stockId: number|string) => this
    /** Order payment method. Allowed values. "cash_on_delivery" - cash on delivery, "prepaid" - prepayment, "tradecredit" - Trade credit. */
    orderPaymentType: (orderPaymentType: 'cash_on_delivery'|'prepaid'|'tradecredit') => this
    /** Currency ID */
    currencyId: (currencyId: string) => this
    /** Determines if customer unregistered. Allowed values. "y" - casual client, "n" - registered customer. Default value:: "y". If customer is unregistered, enter customer details in element: "clientWithoutAccountData". For client with account - existing login should be stored in: "clientLogin". */
    clientWithoutAccount: (clientWithoutAccount: string) => this
    /** Balance data for casual client. Object is necessary for casual clients (in case of client_once has y value). */
    clientWithoutAccountData: (clientWithoutAccountData: JSObject) => this
    /** Customer's login. */
    clientLogin: (clientLogin: string) => this
    /** Customer comments on order. */
    clientNoteToOrder: (clientNoteToOrder: string) => this
    /** Customer remarks for courier. */
    clientNoteToCourier: (clientNoteToCourier: string) => this
    /** ID of a partner who acquired a given customer. */
    affiliateId: (affiliateId: number|string) => this
    /** Courier ID. */
    courierId: (courierId: number|string) => this
    /** Collection point ID. */
    pickupPointId: (pickupPointId: string) => this
    /** Delivery cost. */
    deliveryCost: (deliveryCost: number) => this
    /** Delivery address data. */
    clientDeliveryAddress: (clientDeliveryAddress: JSObject) => this
    /** Buyer's address data. */
    payerAddress: (payerAddress: JSObject) => this
    /** Products list. */
    products: (products: Array<JSObject>) => this
    /** Discount value. */
    orderRebateValue: (orderRebateValue: number) => this
    /** Order handler. */
    orderOperatorLogin: (orderOperatorLogin: string) => this
    /** Omits collecting orders via IAI Bridge. */
    ignoreBridge: (ignoreBridge: boolean) => this
    /** Settings */
    settings: (settings: JSObject) => this
    /** Settlement by prices. "gross" - gross, "net" - net, "net_without_VAT" - net without VAT. */
    orderSettledAtPrice: (orderSettledAtPrice: 'gross'|'net'|'net_without_vat') => this
    /** Customer asked for invoice. List of parameters: "y" - yes (paper invoicing ), "e" - yes (electronic invoicing ), "n" - no. */
    clientRequestInvoice: (clientRequestInvoice: string) => this
    /** Order settlement currency. */
    billingCurrency: (billingCurrency: string) => this
    /** Panel billing currency exchange rate in relation to billing currency in the shop . */
    billingCurrencyRate: (billingCurrencyRate: number) => this
    /** Sale date. ISO 8602 format. */
    purchaseDate: (purchaseDate: string) => this
}

export interface PutOrdersRequest extends AppendableGateway<PutOrdersRequest> {
    /** Orders. */
    orders: (value: Array<JSObject>) => this;
    /** Order ID. */
    orderId: (orderId: string) => this
    /** Order serial number. */
    orderSerialNumber: (orderSerialNumber: number|string) => this
    /** Order status. Allowed values: "finished_ext" - order status: completed in FA application, "finished" - completed, "new" - not handled, "payment_waiting" - awaiting payment, "delivery_waiting" - awaiting delivery, "on_order" - in progress, "packed" - being picked, "packed_fulfillment" - being picked - fulfilment, "packed_ready" - packed, "ready" - ready, "wait_for_dispatch" - awaiting dispatch date, "suspended" - on hold, "joined" - merged, "missing" - missing, "lost" - lost, "false" - false, "canceled" - Customer canceled. */
    orderStatus: (orderStatus: string) => this
    /** Flag informing on order registration or completion in external program through API. Allowed values. "none" - order was not registered in external program, "registered" - order was registered in external program, "realized" - order was completed in external program, "registered_pos" - order was registered in external program, "realized_pos" - order was completed in external program. */
    apiFlag: (apiFlag: 'none'|'registered'|'realized'|'registered_pos'|'realized_pos'|'registration_fault') => this
    /** API note added to order. */
    apiNoteToOrder: (apiNoteToOrder: string) => this
    /** Customer comments on order. */
    clientNoteToOrder: (clientNoteToOrder: string) => this
    /** Customer remarks for courier. */
    clientNoteToCourier: (clientNoteToCourier: string) => this
    /** Note to the order. */
    orderNote: (orderNote: string) => this
    /** Products list. */
    products: (products: Array<JSObject>) => this
    /** Order payment method. Allowed values. "cash_on_delivery" - cash on delivery, "prepaid" - prepayment, "tradecredit" - Trade credit. */
    orderPaymentType: (orderPaymentType: 'cash_on_delivery'|'prepaid'|'tradecredit') => this
    /** Settlement by prices. "gross" - gross, "net" - net, "net_without_VAT" - net without VAT. */
    orderSettledAtPrice: (orderSettledAtPrice: 'gross'|'net'|'net_without_vat') => this
    /** Omits collecting orders via IAI Bridge. */
    ignoreBridge: (ignoreBridge: boolean) => this
    /** Settings */
    settings: (settings: JSObject) => this
    /** Consent to send data to cooperating services */
    emailProcessingConsent: (emailProcessingConsent: 'yes'|'no'|'disabled') => this
    /** Customer asked for invoice. List of parameters: "y" - yes (paper invoicing ), "e" - yes (electronic invoicing ), "n" - no. */
    clientRequestInvoice: (clientRequestInvoice: string) => this
    /** Order settlement currency. */
    billingCurrency: (billingCurrency: string) => this
    /** Panel billing currency exchange rate in relation to billing currency in the shop . */
    billingCurrencyRate: (billingCurrencyRate: number) => this
    /** Sale date. ISO 8602 format. */
    purchaseDate: (purchaseDate: string) => this
    /** Estimated date of shipment of the order in format Y-m-d H:i */
    estimatedDeliveryDate: (estimatedDeliveryDate: string) => this
}

export interface SearchOrdersRequest extends PagableGateway<SearchOrdersRequest,SearchOrdersResponse> {
    /** Prepayment status. Status list: "unpaid" - not paid, "restored" - returned, "waiting" - not registered. */
    orderPrepaidStatus: (value: string) => this;
    /** Order status. Status list: "new" - not handled, "finished" - completed, "false" - false, "lost" - lost, "on_order" - in progress, "packed" - being picked, "ready" - ready, "canceled" - canceled by customer, "payment_waiting" - awaiting payment, "delivery_waiting" - awaiting delivery, "suspended" - on hold, "joined" - merged, "finished_ext" - handled in FA application. */
    ordersStatuses: (value: string|string[]) => this;
    shippmentStatus: (value: 'all'|'received'|'non-received') => this;
    /** Shipping companies (packages deliverers). */
    couriersName: (value: string|string[]) => this;
    /** Courier service identifiers */
    couriersId: (value: number|string|number[]|string[]) => this;
    /** Order payment method. Allowed values. "cash_on_delivery" - cash on delivery, "prepaid" - prepayment, "tradecredit" - Trade credit. */
    orderPaymentType: (value: string) => this;
    withMissingSalesDocuments: (value: string|string[]) => this;
    /** Order type. Allowed values. "retail" - retail order, "wholesale" - wholesale order (can be added only by customer with wholesale account registered). Default value:: "retail" */
    orderType: (value: 'wholesale'|'retail'|'dropshipping'|'deliverer') => this;
    dropshippingOrderStatus: (value: 'all'|'finished'|'canceled'|'notCanceled') => this;
    /** Orders IDs. */
    ordersIds: (value: string|string[]) => this;
    /** Order serial numbers. */
    ordersSerialNumbers: (value: number|string|number[]|string[]) => this;
    /** Customer data. */
    clients: (value: Array<JSObject>) => this;
    /** Ranges of dates or serial numbers. */
    ordersRange: (value: JSObject) => this;
    /** Order source data. */
    orderSource: (value: JSObject) => this;
    /** Products list. */
    products: (value: Array<JSObject>) => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
    /** Customer asked for invoice. List of parameters: "y" - yes (paper invoicing ), "e" - yes (electronic invoicing ), "n" - no. */
    clientRequestInvoice: (value: string) => this;
    /** Information on consignments. */
    packages: (value: JSObject) => this;
    /** Stock quantities data. */
    stocks: (value: Array<JSObject>) => this;
    /** Used discount codes data. */
    campaign: (value: JSObject) => this;
    /** Loyalty points. */
    loyaltyPointsMode: (value: 'all'|'given'|'taken'|'given_or_taken'|'given_and_taken'|'not_given_nor_taken') => this;
    /** Order handler. */
    orderOperatorLogin: (value: string) => this;
    /** Order picker. */
    orderPackingPersonLogin: (value: string) => this;
    /** Possibility of sorting returned list */
    ordersBy: (value: Array<JSObject>) => this;
    /** Method of searching orders by handler. */
    searchingOperatorTypeMatch: (value: 'no_assignment'|'no_empty'|'empty') => this;
    /** Orders with the exceeded date of shipment. */
    ordersDelayed: (value: 'y'|'n') => this;
    /** Combine the components of the set into one item */
    showBundles: (value: Boolean) => this;
    /** The order ID of the external service */
    orderExternalId: (value: string) => this;
    /** Order currency */
    orderCurrency: (value: string) => this;
    shopIds: (value: number|string|number[]|string[]) => this;
    byPackageNumbers: (value: string|string[]) => this;
    /** Define range of dates and their type */
    dates: (dateFrom: DateLike, dateTo: DateLike, type: "add"|"modified"|"dispatch"|"payment"|"last_payments_operation"|"declared_payments") => this;
    /** Define ordering of records */
    orderBy: (elementName: "id"|"sn"|"order_time"|"status"|"order_source"|"order_cost"|"discount_code"|"ready_to_send_date", descending: boolean) => this;
    /** Define clients values by passing them as an array */
    logins: (values: string|string[]) => this;
    /** Define clients values by passing them as an array */
    clientIds: (values: number|string|number[]|string[]) => this;
    /** Define products values by passing them as an array */
    productIds: (values: number|string|number[]|string[]) => this;
    /** Define stocks values by passing them as an array */
    stockIds: (values: number|string|number[]|string[]) => this;
    /** Define campaign values by passing them as an array */
    campaignIds: (values: number|string|number[]|string[]) => this;
    /** Define campaign values by passing them as an array */
    discountCodes: (values: string|string[]) => this;
    /** Filter orders that contain select product */
    hasProduct: (productId: number|string, sizeId?: number|string) => this;
    /** Filter orders that have package */
    hasPackage: (orderHasPackage: boolean) => this;
    /** Filter orders by an any or selected Allegro account */
    fromAllegro: (allegroAccount?: string) => this;
    /** Filter orders by an any or selected Amazon account */
    fromAmazon: (allegroAccount?: string) => this;
    /** Filter orders by an any or selected EBay account */
    fromEbay: (allegroAccount?: string) => this;
}

export interface GetOrdersPackagesRequest extends Gateway {
    /** Consignments numbers. */
    deliveryPackageNumbers: (value: string|string[]) => this;
    /** Order serial numbers. */
    orderNumbers: (value: number|string|number[]|string[]) => this;
    /** Returns numbers. */
    returnNumbers: (value: number|string|number[]|string[]) => this;
    /** RMA numbers. */
    rmaNumbers: (value: number|string|number[]|string[]) => this;
    /** Return parcel labels. */
    returnLabels: (value: Boolean) => this;
}

export interface PostOrdersPackagesRequest extends AppendableGateway<PostOrdersPackagesRequest> {
    /** List of parcels assigned to the order Maximum default number: 100 parcels. */
    orderPackages: (value: Array<JSObject>) => this;
    /** Id. */
    eventId: (eventId: string) => this
    /** Type. */
    eventType: (eventType: 'order'|'rma'|'return') => this
    /** Information on consignments. */
    packages: (packages: Array<JSObject>) => this
}

export interface PutOrdersPackagesRequest extends AppendableGateway<PutOrdersPackagesRequest> {
    /** List of parcels assigned to the order Maximum default number: 100 parcels. */
    orderPackages: (value: Array<JSObject>) => this;
    /** Id. */
    eventId: (eventId: string) => this
    /** Type. */
    eventType: (eventType: 'order'|'rma'|'return') => this
    /** Information on consignments. */
    packages: (packages: Array<JSObject>) => this
}

export interface PutOrdersPickupPointRequest extends Gateway {
    /** Order serial number. */
    orderSerialNumber: (value: number|string) => this;
    /** Collection point ID. */
    pickupPointId: (value: string) => this;
}

export interface GetOrdersPrinterDocumentsRequest extends Gateway {
    user: (value: string) => this;
    printScenarioAction: (value: string) => this;
    objectNumber: (value: string) => this;
    objectType: (value: string) => this;
    printerAccessKey: (value: string) => this;
    skipNotGeneratedDocument: (value: Boolean) => this;
}

export interface PutOrdersProductsSerialNumbersRequest extends AppendableGateway<PutOrdersProductsSerialNumbersRequest> {
    /** Orders. */
    orders: (value: Array<JSObject>) => this;
    /** Order serial number. */
    orderSerialNumber: (orderSerialNumber: number|string) => this
    /** Products list. */
    orderProducts: (orderProducts: Array<JSObject>) => this
}

export interface PutOrdersProfitMarginRequest extends AppendableGateway<PutOrdersProfitMarginRequest> {
    /** Orders. */
    orders: (value: Array<JSObject>) => this;
    /** Order serial number. */
    orderSerialNumber: (orderSerialNumber: number|string) => this
    /** Products list. */
    products: (products: Array<JSObject>) => this
    /** Information on error that occurred during gate call. */
    errors: (errors: JSObject) => this
    /** Flag marking errors in the result. */
    isProductsErrors: (isProductsErrors: boolean) => this
}

export interface GetOrdersProfitabilityRequest extends Gateway {
    /** Order serial number. */
    orderSerialNumber: (value: number|string) => this;
}

export interface PutOrdersShippingCostsRequest extends Gateway {
    /** Order serial number. */
    orderSerialNumber: (value: number|string) => this;
    /** Delivery cost. */
    deliveryCost: (value: Number) => this;
    /** Delivery VAT. */
    orderDeliveryVat: (value: Number) => this;
}

export interface SearchOrdersUnfinishedRequest extends PagableGateway<SearchOrdersUnfinishedRequest,SearchOrdersResponse> {
    /** Prepayment status. Status list: "unpaid" - not paid, "restored" - returned, "waiting" - not registered. */
    orderPrepaidStatus: (value: string) => this;
    /** Order status. Status list: "new" - not handled, "on_order" - in progress, "packed" - being picked, "packed_fulfillment" - being picked - fulfilment, "packed_ready" - packed, "ready" - ready, "payment_waiting" - awaiting payment, "delivery_waiting" - awaiting delivery, "wait_for_dispatch" - awaiting dispatch date, "suspended" - on hold, "finished_ext" - handled in FA application. */
    ordersStatuses: (value: string|string[]) => this;
    /** Shipping companies (packages deliverers). */
    couriersName: (value: string|string[]) => this;
    /** Order payment method. Allowed values. "cash_on_delivery" - cash on delivery, "prepaid" - prepayment, "tradecredit" - Trade credit. */
    orderPaymentType: (value: string) => this;
    /** Order type. Allowed values: "retail" - retail order, "wholesale" - whiolesale order , "dropshipping" - order to be handled, "deliverer" - order sent to the supplier. */
    orderType: (value: 'wholesale'|'retail'|'dropshipping'|'deliverer') => this;
    /** Dropshipping order status in the supplier's system. Allowed values: "all" - all, "finished" - sent, "canceled" - canceled, "notCanceled" - failed to cancel. */
    dropshippingOrderStatus: (value: 'all'|'finished'|'canceled'|'notCanceled') => this;
    /** Orders IDs. */
    ordersIds: (value: string|string[]) => this;
    /** Order serial numbers. */
    ordersSerialNumbers: (value: number|string|number[]|string[]) => this;
    /** Customer data. */
    clients: (value: Array<JSObject>) => this;
    /** Ranges of dates or serial numbers. */
    ordersRange: (value: JSObject) => this;
    /** Order source data. */
    orderSource: (value: JSObject) => this;
    /** Products list. */
    products: (value: Array<JSObject>) => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
    /** Customer asked for invoice. List of parameters: "invoice" - yes (paper invoicing ), "e_invoice" - yes (electronic invoicing ), "n" - no. */
    clientRequestInvoice: (value: string) => this;
    /** Information on consignments. */
    packages: (value: JSObject) => this;
    /** Stock quantities data. */
    stocks: (value: Array<JSObject>) => this;
    /** Used discount codes data. */
    campaign: (value: JSObject) => this;
    /** Loyalty points. */
    loyaltyPointsMode: (value: 'all'|'given'|'taken'|'given_or_taken'|'given_and_taken'|'not_given_nor_taken') => this;
    /** Order handler. */
    orderOperatorLogin: (value: string) => this;
    /** Order picker. */
    orderPackingPersonLogin: (value: string) => this;
    /** Possibility of sorting returned list */
    ordersBy: (value: Array<JSObject>) => this;
    /** Method of searching orders by handler. */
    searchingOperatorTypeMatch: (value: 'no_assignment'|'no_empty'|'empty') => this;
    /** Orders with the exceeded date of shipment. */
    ordersDelayed: (value: 'y'|'n') => this;
    shopIds: (value: number|string|number[]|string[]) => this;
    byPackageNumbers: (value: string|string[]) => this;
    /** Define range of dates and their type */
    dates: (dateFrom: DateLike, dateTo: DateLike, type: "add"|"modified"|"dispatch"|"payment"|"last_payments_operation"|"declared_payments") => this;
    /** Define ordering of records */
    orderBy: (elementName: "id"|"sn"|"order_time"|"status"|"order_source"|"order_cost"|"discount_code"|"ready_to_send_date", descending: boolean) => this;
    /** Define clients values by passing them as an array */
    logins: (values: string|string[]) => this;
    /** Define clients values by passing them as an array */
    clientIds: (values: number|string|number[]|string[]) => this;
    /** Define products values by passing them as an array */
    productIds: (values: number|string|number[]|string[]) => this;
    /** Define stocks values by passing them as an array */
    stockIds: (values: number|string|number[]|string[]) => this;
    /** Define campaign values by passing them as an array */
    campaignIds: (values: number|string|number[]|string[]) => this;
    /** Define campaign values by passing them as an array */
    discountCodes: (values: string|string[]) => this;
    /** Filter orders that contain select product */
    hasProduct: (productId: number|string, sizeId?: number|string) => this;
    /** Filter orders that have package */
    hasPackage: (orderHasPackage: boolean) => this;
    /** Filter orders by an any or selected Allegro account */
    fromAllegro: (allegroAccount?: string) => this;
    /** Filter orders by an any or selected Amazon account */
    fromAmazon: (allegroAccount?: string) => this;
    /** Filter orders by an any or selected EBay account */
    fromEbay: (allegroAccount?: string) => this;
}

export interface GetOrdersWarehouseRequest extends Gateway {
    /** Order serial number. */
    orderSerialNumber: (value: number|string) => this;
}

export interface PutOrdersWarehouseRequest extends Gateway {
    /** Order serial number. */
    orderSerialNumber: (value: number|string) => this;
    /** Stock ID */
    stockId: (value: number|string) => this;
    /** Order handler. */
    orderOperatorLogin: (value: string) => this;
    /** External warehouse ID (if required) */
    externalStockId: (value: 'amazonde'|'amazones'|'amazonfr'|'amazonit'|'amazoncouk'|'amazonnl'|'amazonse'|'amazoncomtr'|'amazonae'|'amazonus'|'amazonpl') => this;
}

export interface GetPackagesLabelsRequest extends Gateway {
    /** Id. */
    eventId: (value: number|string) => this;
    /** Event type */
    eventType: (value: 'order'|'rma'|'return') => this;
    /** Set type to orders with given order serial numbers */
    order: (orderSerialNumber: number|string) => this;
    /** Set type to rma with given rma Ids */
    rma: (rmaId: number|string) => this;
    /** Set type to returns with given return Ids */
    return: (returnId: number|string) => this;
}

export interface PostPackagesLabelsRequest extends AppendableGateway<PostPackagesLabelsRequest> {
    /** Id. */
    eventId: (value: number|string) => this;
    /** Type. */
    eventType: (value: 'order'|'rma'|'return') => this;
    /** Shipment configuration options available for a given courier */
    parcelParameters: (value: Array<JSObject>) => this;
    /** Shipment configuration options available for Inpost Smile courier */
    parcelParametersByPackages: (value: Array<JSObject>) => this;
    /** Package ID in system. */
    packageId: (packageId: string) => this
}

export interface PostPackagesRequest extends AppendableGateway<PostPackagesRequest> {
    /** List of parcels assigned to the order Maximum default number: 100 parcels. */
    orderPackages: (value: Array<JSObject>) => this;
    /** Order ID. */
    orderId: (orderId: string) => this
    /** Order type. Allowed values. "retail" - retail order, "wholesale" - wholesale order (can be added only by customer with wholesale account registered). Default value:: "retail" */
    orderType: (orderType: 'order'|'rma'|'return') => this
    /** Information on consignments. */
    packages: (packages: Array<JSObject>) => this
}

export interface PutPackagesRequest extends AppendableGateway<PutPackagesRequest> {
    /** List of parcels assigned to the order Maximum default number: 100 parcels. */
    orderPackages: (value: Array<JSObject>) => this;
    /** Order ID. */
    orderId: (orderId: string) => this
    /** Order type. Allowed values. "retail" - retail order, "wholesale" - wholesale order (can be added only by customer with wholesale account registered). Default value:: "retail" */
    orderType: (orderType: 'order'|'rma'|'return') => this
    /** Information on consignments. */
    packages: (packages: Array<JSObject>) => this
}

export interface SearchPackagesRequest extends AppendableGateway<SearchPackagesRequest, SearchPackagesResponse> {
    /** Consignments numbers. */
    deliveryPackageNumbers: (value: string|string[]) => this;
    /** Element, package is assigned to */
    events: (value: Array<JSObject>) => this;
    /** Return parcel labels. */
    returnLabels: (value: Boolean) => this;
    /** Type. */
    eventType: (eventType: 'order'|'rma'|'return') => this
    /** IDs. */
    eventsIds: (eventsIds: number|string|number[]|string[]) => this
    /** Set type to orders with given order serial numbers */
    orders: (orderSerialNumbers: number|string|number[]|string[]) => this;
    /** Set type to rma with given rma Ids */
    rma: (rmaIds: number|string|number[]|string[]) => this;
    /** Set type to returns with given return Ids */
    returns: (returnIds: number|string|number[]|string[]) => this;
}

export interface PostPaymentsCancelRequest extends Gateway {
    /** Defines payment category. For the payments regarding returns, enter 'return'. */
    sourceType: (value: 'order'|'return'|'rma') => this;
    /** Payment number - [order no.]-[payment no.], i.e. 1234-1. */
    paymentNumber: (value: string) => this;
}

export interface PostPaymentsCashbackRequest extends Gateway {
    sourceType: (value: 'order'|'return') => this;
    /** Payment number - [order no.]-[payment no.], i.e. 1234-1. */
    paymentNumber: (value: string) => this;
    /** Refund value. */
    value: (value: Number) => this;
}

export interface PutPaymentsConfirmRequest extends Gateway {
    /** Defines payment category. For the payments regarding returns, enter 'return'. */
    sourceType: (value: 'order'|'return'|'rma') => this;
    /** Payment number - [order no.]-[payment no.], i.e. 1234-1. */
    paymentNumber: (value: string) => this;
    /** Registering date */
    accountingDate: (value: string) => this;
}

export interface GetPaymentsFormsRequest extends Gateway {
    /** Return only active forms of payment. */
    activeOnly: (value: 'yes'|'no') => this;
}

export interface GetPaymentsRequest extends Gateway {
    /** Payment number consists of: source ID (order / return ID) and the payment ordinal number, e.g. 1234-1. */
    paymentNumber: (value: string) => this;
    /** Source type. */
    sourceType: (value: 'order'|'return'|'rma') => this;
}

export interface PostPaymentsRequest extends Gateway {
    /** Source ID. */
    sourceId: (value: number|string) => this;
    /** Source type. */
    sourceType: (value: 'order'|'return'|'rma') => this;
    /** Payment amount. */
    value: (value: Number) => this;
    /** Number of a bank account to which a payment is sent. */
    account: (value: string) => this;
    type: (value: 'payment'|'advance'|'repayment'|'fee') => this;
    /** Form of payment ID. */
    paymentFormId: (value: number|string) => this;
    /** Gift card or voucher number */
    paymentVoucherKey: (value: string) => this;
    /** Gift card PIN. */
    giftCardPIN: (value: number|string) => this;
    /** Transaction ID in external service */
    externalPaymentId: (value: string) => this;
}

export interface PutPaymentsRequest extends Gateway {
    /** Defines payment category. For the payments regarding returns, enter 'return'. */
    sourceType: (value: 'order'|'return'|'rma') => this;
    /** Payment number - [order no.]-[payment no.], i.e. 1234-1. */
    paymentNumber: (value: string) => this;
    /** Payment method ID. Check getPaymentForms. */
    paymentFormId: (value: number|string) => this;
    /** Refund value. */
    value: (value: Number) => this;
    /** Registering date. */
    accountingDate: (value: string) => this;
    /** Number of a bank account to which a payment is sent. */
    account: (value: string) => this;
    /** Data of customer account in store. */
    clientAccount: (value: string) => this;
    other: (value: JSObject) => this;
    /** Transaction ID in external service */
    externalPaymentId: (value: string) => this;
}

export interface GetPaymentsProfilesRequest extends PagableGateway<GetPaymentsProfilesRequest> {
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
}

export interface PostPaymentsRepaymentRequest extends Gateway {
    /** Returns ID. */
    source_id: (value: number|string) => this;
    /** Defines payment category. For the payments regarding returns, enter 'return'. */
    source_type: (value: string) => this;
    /** Refund value. */
    value: (value: Number) => this;
    /** Payment method ID. Check getPaymentForms. */
    payment_form_id: (value: number|string) => this;
    /** Number of a bank account to which a payment is sent. */
    account: (value: string) => this;
    /** Customer account. */
    client_account: (value: string) => this;
    /** Other. */
    other: (value: JSObject) => this;
}

export interface GetProductsSKUbyBarcodeRequest extends Gateway {
    /** List of sought products by indexes. */
    productIndices: (value: string|string[]) => this;
    /** Search for products only by IAI code */
    searchOnlyInCodeIai: (value: Boolean) => this;
}

export interface PutProductsAttachmentsRequest extends AppendableGateway<PutProductsAttachmentsRequest> {
    productsAttachments: (value: Array<JSObject>) => this;
    /** Stock keeping unit. */
    productIdent: (productIdent: JSObject) => this
    /** Product attachments list. */
    attachments: (attachments: Array<JSObject>) => this
    /** List of product's virtual attachments. */
    virtualAttachments: (virtualAttachments: Array<JSObject>) => this
    /** Information on error that occurred during gate call. */
    errors: (errors: JSObject) => this
    /** Flag indicating if there are errors in results of attachments settings. */
    attachmentsErrorsOccurred: (attachmentsErrorsOccurred: boolean) => this
    /** Flag indicating if there are errors in results of virtual attachments settings. */
    virtualAttachmentsErrorsOccurred: (virtualAttachmentsErrorsOccurred: boolean) => this
    productId: (value: number|string) => this;
}

export interface GetProductsAuctionsRequest extends PagableGateway<GetProductsAuctionsRequest> {
    identType: (value: 'id'|'index'|'codeExtern'|'codeProducer') => this;
    /** Products list. */
    products: (value: string|string[]) => this;
    /** Array of auction site IDs */
    auctionSites: (value: string|string[]) => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
    ids: (value: number|string|number[]|string[]) => this;
    /** Get auction data on products */
    fromAllegro: () => this;
}

export interface DeleteProductsBrandsRequest extends Gateway {
    /** #!IdentyfikatoryProducentow!# */
    ids: (value: number|string|number[]|string[]) => this;
}

export interface GetProductsBrandsFilterRequest extends Gateway {
    /** Shop Id */
    shopId: (value: number|string) => this;
    /** Language ID (code in ISO 639-2). */
    languageId: (value: string) => this;
    /** Brand ID */
    producerId: (value: number|string) => this;
}

export interface PutProductsBrandsFilterRequest extends AppendableGateway<PutProductsBrandsFilterRequest> {
    /** Shop Id */
    shopId: (value: number|string) => this;
    /** Language ID (code in ISO 639-2). */
    languageId: (value: string) => this;
    /** Brand ID */
    producerId: (value: number|string) => this;
    filterForNodeIsDefault: (value: 'y'|'n') => this;
    /** Active filters. */
    filtersActive: (value: Array<JSObject>) => this;
    /** Menu filter ID. */
    filterId: (filterId: string) => this
    /** Filter name on page. */
    filterName: (filterName: string) => this
    /** Display as: "name" - text, "gfx" - graphics, "namegfx" - text and graphics. */
    filterDisplay: (filterDisplay: 'name'|'gfx'|'namegfx') => this
    /** Sort by: "y" - alfabetically, "n" - by frequency and order of occurrence of indicated parameter value in found products, "priority" - according to value sequence in parameter. */
    filterValueSort: (filterValueSort: 'y'|'n'|'priority') => this
    /** Enabled by default . */
    filterDefaultEnabled: (filterDefaultEnabled: 'y'|'n') => this
}

export interface GetProductsBrandsRequest extends PagableGateway<GetProductsBrandsRequest> {
    /** Result page number. */
    results_page: (value: number|string) => this;
    /** Number of results on page. */
    results_limit: (value: number|string) => this;
    /** List of languages */
    languagesIds: (value: string|string[]) => this;
}

export interface PostProductsBrandsRequest extends AppendableGateway<PostProductsBrandsRequest> {
    /** List of manufacturers assigned to sought products. */
    producers: (value: Array<JSObject>) => this;
    /** Name in panel */
    nameInPanel: (nameInPanel: string) => this
    /**  */
    imagesSettings: (imagesSettings: JSObject) => this
    /**  */
    languagesConfigurations: (languagesConfigurations: Array<JSObject>) => this
}

export interface PutProductsBrandsRequest extends AppendableGateway<PutProductsBrandsRequest> {
    /** List of manufacturers assigned to sought products. */
    producers: (value: Array<JSObject>) => this;
    /** Id */
    id: (id: number|string) => this
    /** Name in panel */
    nameInPanel: (nameInPanel: string) => this
    /**  */
    imagesSettings: (imagesSettings: JSObject) => this
    /**  */
    languagesConfigurations: (languagesConfigurations: Array<JSObject>) => this
}

export interface PostProductsBundlesRequest extends AppendableGateway<PostProductsBundlesRequest> {
    /** Parameters transmitted to method */
    params: (value: Array<JSObject>) => this;
    /** Products list. */
    products: (products: Array<JSObject>) => this
}

export interface DeleteProductsBundlesProductsRequest extends AppendableGateway<DeleteProductsBundlesProductsRequest> {
    /** Parameters transmitted to method */
    params: (value: Array<JSObject>) => this;
    /** Products list. */
    products: (products: Array<JSObject>) => this
    /**  */
    bundleIdent: (bundleIdent: JSObject) => this
}

export interface PostProductsBundlesProductsRequest extends AppendableGateway<PostProductsBundlesProductsRequest> {
    /** Parameters transmitted to method */
    params: (value: Array<JSObject>) => this;
    /** Products list. */
    products: (products: Array<JSObject>) => this
    /**  */
    bundleIdent: (bundleIdent: JSObject) => this
}

export interface PutProductsBundlesProductsQuantityRequest extends AppendableGateway<PutProductsBundlesProductsQuantityRequest> {
    /** Parameters transmitted to method */
    params: (value: Array<JSObject>) => this;
    /** Products list. */
    products: (products: Array<JSObject>) => this
    /**  */
    bundleIdent: (bundleIdent: JSObject) => this
}

export interface PutProductsBundlesRenewRequest extends AppendableGateway<PutProductsBundlesRenewRequest> {
    /** Parameters transmitted to method */
    params: (value: Array<JSObject>) => this;
    /** Products list. */
    products: (products: Array<JSObject>) => this
    /** ID of a set being modified. */
    bundleIdent: (bundleIdent: JSObject) => this
}

export interface GetProductsCategoriesRequest extends PagableGateway<GetProductsCategoriesRequest,GetCategoriesResponse> {
    /** List of product category identifiers in the panel */
    ids: (value: number|string|number[]|string[]) => this;
    /** Array of languages categories names should be returned in. "Defaults" value returns categories names in store default language. Not using languages parameter causes a situation, that categories names are returned in all available languages. */
    languages: (value: string|string[]) => this;
    /** Result page number. */
    results_page: (value: number|string) => this;
    /** Number of results on page. */
    results_limit: (value: number|string) => this;
    /** Returns the date of last modification (YYYY-MM-DD HH-MM-SS). */
    return_last_changed_time: (value: string) => this;
}

export interface PutProductsCategoriesRequest extends AppendableGateway<PutProductsCategoriesRequest> {
    /** List of categories in which sought products are present. */
    categories: (value: Array<JSObject>) => this;
    /** Category id. */
    id: (id: number|string) => this
    /** Parent category ID. */
    parent_id: (parent_id: number|string) => this
    /** Category priority. Value from 1 to 19. */
    priority: (priority: number|string) => this
    /** Operation code. Allowed values. "add" - adds new category, "edit" - edits existing category, "del" - deletes existing category. */
    operation: (operation: string) => this
    /**  */
    lang_data: (lang_data: Array<JSObject>) => this
}

export interface SearchProductsCategoriesIdosellRequest extends PagableGateway<SearchProductsCategoriesIdosellRequest,SearchCategoriesIdosellResponse> {
    /** List of languages */
    languagesIds: (value: string|string[]) => this;
    /** Number of IdoSell Categories identifiers */
    categoriesIdoSellIds: (value: string|string[]) => this;
    /** IdoSell Categories name list */
    categoriesIdoSellNames: (value: string|string[]) => this;
    /** IdoSell Categories path list */
    categoriesIdoSellPaths: (value: string|string[]) => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
    /** Define languagesIds values by passing them as an array */
    languages: (values: number|string|number[]|string[]) => this;
}

export interface GetProductsCodeExistenceRequest extends Gateway {
    identType: (value: 'id'|'index'|'codeExtern'|'codeProducer'|'codeDeliverer') => this;
    /** Products list. */
    products: (value: string|string[]) => this;
    delivererId: (value: string) => this;
    /** Set product identifiers */
    productId: (productId: number|string|number|string|number[]|string[], type: 'id'|'index'|'codeExtern'|'codeProducer') => this;
}

export interface PostProductsCollectionsRequest extends AppendableGateway<PostProductsCollectionsRequest> {
    /** Parameters transmitted to method */
    params: (value: Array<JSObject>) => this;
    /** Products list. */
    products: (products: Array<JSObject>) => this
}

export interface DeleteProductsCollectionsProductsRequest extends AppendableGateway<DeleteProductsCollectionsProductsRequest> {
    /** Parameters transmitted to method */
    params: (value: Array<JSObject>) => this;
    /** Products list. */
    products: (products: Array<JSObject>) => this
    /** ID of a collection being modified */
    collectionId: (collectionId: number|string) => this
}

export interface PostProductsCollectionsProductsRequest extends AppendableGateway<PostProductsCollectionsProductsRequest> {
    /** Parameters transmitted to method */
    params: (value: Array<JSObject>) => this;
    /** Products list. */
    products: (products: Array<JSObject>) => this
    /** ID of a collection being modified */
    collectionId: (collectionId: number|string) => this
}

export interface PutProductsCollectionsProductsRequest extends AppendableGateway<PutProductsCollectionsProductsRequest> {
    /** Parameters transmitted to method */
    params: (value: Array<JSObject>) => this;
    /** Products list. */
    products: (products: Array<JSObject>) => this
    /** ID of a collection being modified. */
    collectionId: (collectionId: number|string) => this
}

export interface PutProductsCollectionsRenewRequest extends AppendableGateway<PutProductsCollectionsRenewRequest> {
    /** Parameters transmitted to method */
    params: (value: Array<JSObject>) => this;
    /** Products list. */
    products: (products: Array<JSObject>) => this
    /** ID of a collection being modified. */
    collectionIdent: (collectionIdent: JSObject) => this
}

export interface SearchProductsDeliveryTimeRequest extends AppendableGateway<SearchProductsDeliveryTimeRequest, SearchDeliveryTimeResponse> {
    /** Stock ID */
    stockId: (value: number|string) => this;
    /** Should products be prepared for personal collection? */
    isCollectionInPerson: (value: Boolean) => this;
    products: (value: Array<JSObject>) => this;
    /** Product Id */
    productId: (productId: number|string) => this
    /** Size identifier */
    sizeId: (sizeId: string) => this
    /** Size name */
    sizePanelName: (sizePanelName: string) => this
    /** Product IAI code */
    productIndex: (productIndex: string) => this
    /** Product quantity. */
    productSizeQuantity: (productSizeQuantity: number) => this
}

export interface GetProductsDescriptionsRequest extends Gateway {
    /** Identifier type. */
    type: (value: 'id'|'index'|'codeExtern'|'codeProducer') => this;
    /** ID value. */
    ids: (value: number|string|number[]|string[]) => this;
    /** Shop Id */
    shopId: (value: number|string) => this;
    /** Set product identifiers */
    productId: (productId: number|string|number|string|number[]|string[], type: 'id'|'index'|'codeExtern'|'codeProducer') => this;
}

export interface PutProductsDescriptionsRequest extends AppendableGateway<PutProductsDescriptionsRequest> {
    /** Products list. */
    products: (value: Array<JSObject>) => this;
    /**  */
    productIdent: (productIdent: JSObject) => this
    /** Array of language-dependent elements. */
    productDescriptionsLangData: (productDescriptionsLangData: Array<JSObject>) => this
    /** Product data for auction services */
    productAuctionDescriptionsData: (productAuctionDescriptionsData: Array<JSObject>) => this
    productId: (value: number|string) => this;
    /** Set various types of names or descriptions to the product */
    setText: (text: string, type: "productName"|"productAuctionName"|"productPriceComparerName"|"productDescription"|"productLongDescription"|"productMetaTitle"|"productMetaDescription"|"productMetaKeywords" = 'productName', language?: string, shopId?: number|string) => this;
}

export interface PutProductsGroupsMainProductRequest extends AppendableGateway<PutProductsGroupsMainProductRequest> {
    groups: (value: Array<JSObject>) => this;
    /**  */
    productIdent: (productIdent: JSObject) => this
    productId: (value: number|string) => this;
}

export interface PutProductsGroupsOrderRequest extends AppendableGateway<PutProductsGroupsOrderRequest> {
    groups: (value: Array<JSObject>) => this;
    /**  */
    productsInOrder: (productsInOrder: Array<JSObject>) => this
    /** Defines order of products within group by automatically setting proprities in order of appearance */
    productIdsInOrder: (productIds: number|string|number[]|string[]) => this;
}

export interface PutProductsGroupsSettingsRequest extends AppendableGateway<PutProductsGroupsSettingsRequest> {
    groups: (value: Array<JSObject>) => this;
    /**  */
    productIdent: (productIdent: JSObject) => this
    /** Display on the product list in the panel. */
    displayInPanel: (displayInPanel: 'firstavailable'|'all') => this
    /** Display on a product list on the page. */
    displayOnPage: (displayOnPage: 'firstavailable'|'all'|'specified') => this
    /** Selected product in the group. */
    specifiedProductIdent: (specifiedProductIdent: JSObject) => this
    productId: (value: number|string) => this;
}

export interface GetProductsIdBySizecodeRequest extends Gateway {
    /** Search codes. */
    codes: (value: string|string[]) => this;
    /** Type of codes. Acceptable values: "external" (default value) - external system code, "producer" - producer code, and "all" - any of the above codes */
    type: (value: string) => this;
}

export interface DeleteProductsImagesRequest extends AppendableGateway<DeleteProductsImagesRequest> {
    /** Parameters transmitted to method */
    params: (value: Array<JSObject>) => this;
    /** Delete all images */
    deleteAll: (deleteAll: boolean) => this
    /** Product IAI code */
    productId: (productId: number|string) => this
    /** Shop Id */
    shopId: (shopId: number|string) => this
    /**  */
    productImagesId: (productImagesId: string|string[]) => this
}

export interface PutProductsImagesRequest extends AppendableGateway<PutProductsImagesRequest> {
    productsImagesSettings: (value: JSObject) => this;
    /** Information on product images */
    productsImages: (value: Array<JSObject>) => this;
    /**  */
    productIdent: (productIdent: JSObject) => this
    /** Shop Id */
    shopId: (shopId: number|string) => this
    /** List of shops for which photos will be added (including shop provided in shopId). If parameter is empty or not provided, photos will be added to all shops. */
    otherShopsForPic: (otherShopsForPic: number|string|number[]|string[]) => this
    /** Product photos details. */
    productImages: (productImages: Array<JSObject>) => this
    /** Product icons list. */
    productIcons: (productIcons: Array<JSObject>) => this
    /** Product settings. */
    productImagesSettings: (productImagesSettings: JSObject) => this
    productId: (value: number|string) => this;
    /** Adds image source with selected priority */
    addImage: (source: string, priority: number|string) => this;
    /** Set global image source to base64 */
    base64: () => this;
}

export interface GetProductsMarketingAllFacebookCatalogIdsRequest extends Gateway {
    /** Shop Id */
    shopId: (value: number|string) => this;
}

export interface GetProductsMarketingPromotionRequest extends Gateway {
    /** Shop Id */
    shopId: (value: number|string) => this;
    /** Products list. */
    products: (value: number|string|number[]|string[]) => this;
}

export interface PostProductsMarketingPromotionRequest extends AppendableGateway<PostProductsMarketingPromotionRequest> {
    /** Promotion name */
    promotionName: (value: string) => this;
    /** List of stores IDs When mask is determined, this parameter is omitted. */
    shopsIds: (value: number|string|number[]|string[]) => this;
    /** Special zones */
    marketingZones: (value: JSObject) => this;
    /** Promotional price settings */
    newPriceSettings: (value: JSObject) => this;
    /** Promotion start date in Y-m-d H:i:s format */
    startDate: (value: string) => this;
    /** Promotion end date in Y-m-d H:i:s format */
    endDate: (value: string) => this;
    /** Change the status of hidden products to visible while starting the special offer */
    changeProductsToVisibleWhileStarting: (value: 'y'|'n') => this;
    /** After running out of stock, automatically remove from the promotion products added separately (does not apply to series, producers, categories and menu)  */
    removeProductsAfterStockLevelRunsDown: (value: 'y'|'n') => this;
    /** After running out of own stock, automatically remove from the promotion products added separately (does not apply to series, producers, categories and menu)  */
    removeProductsAfterOwnStockLevelRunsDown: (value: 'y'|'n') => this;
    /** Reduce based on price (net/gross) */
    reduceBasingPrice: (value: 'net'|'gross') => this;
    /** Price reduction calculation method */
    calculationMethod: (value: 'sum'|'chooseAdvantageous') => this;
    /** Elements to be affected by the promotion */
    promotionElements: (value: Array<JSObject>) => this;
    /**  */
    elementType: (elementType: 'product'|'series'|'producer'|'category'|'menu') => this
    /** Identifier of the element affected by the promotion (in the case of a menu in the format: storeId-menuId-itemId) */
    elementId: (elementId: string) => this
}

export interface PutProductsMarketingPromotionRequest extends AppendableGateway<PutProductsMarketingPromotionRequest> {
    /** Promotion ID */
    promotionId: (value: string) => this;
    /** Promotion name */
    promotionName: (value: string) => this;
    /** List of stores IDs When mask is determined, this parameter is omitted. */
    shopsIds: (value: number|string|number[]|string[]) => this;
    /** Special zones */
    marketingZones: (value: JSObject) => this;
    /** Promotional price settings */
    newPriceSettings: (value: JSObject) => this;
    /** Promotion start date in Y-m-d H:i:s format */
    startDate: (value: string) => this;
    /** Promotion end date in Y-m-d H:i:s format */
    endDate: (value: string) => this;
    /** Change the status of hidden products to visible while starting the special offer */
    changeProductsToVisibleWhileStarting: (value: 'y'|'n') => this;
    /** After running out of stock, automatically remove from the promotion products added separately (does not apply to series, producers, categories and menu)  */
    removeProductsAfterStockLevelRunsDown: (value: 'y'|'n') => this;
    /** After running out of own stock, automatically remove from the promotion products added separately (does not apply to series, producers, categories and menu)  */
    removeProductsAfterOwnStockLevelRunsDown: (value: 'y'|'n') => this;
    /** Reduce based on price (net/gross) */
    reduceBasingPrice: (value: 'net'|'gross') => this;
    /** Price reduction calculation method */
    calculationMethod: (value: 'sum'|'chooseAdvantageous') => this;
    /** Specifies whether to remove all existing promotion elements */
    removeAllPromotionElements: (value: 'y'|'n') => this;
    /** Elements to be affected by the promotion */
    promotionElements: (value: Array<JSObject>) => this;
    /**  */
    elementType: (elementType: 'product'|'series'|'producer'|'category'|'menu') => this
    /** Identifier of the element affected by the promotion (in the case of a menu in the format: storeId-menuId-itemId) */
    elementId: (elementId: string) => this
}

export interface GetProductsMarketingZonesRequest extends Gateway {
    identType: (value: 'id'|'index'|'codeExtern'|'codeProducer') => this;
    /** Products list. */
    products: (value: string|string[]) => this;
    /** Set product identifiers */
    productId: (productId: number|string|number|string|number[]|string[], type: 'id'|'index'|'codeExtern'|'codeProducer') => this;
}

export interface PutProductsMarketingZonesRequest extends AppendableGateway<PutProductsMarketingZonesRequest> {
    /** Products list. */
    products: (value: Array<JSObject>) => this;
    assignment_mode: (value: 'auto'|'manual') => this;
    marketing_zones: (value: JSObject) => this;
    /** Marketing hotspots in shops */
    shops: (value: Array<JSObject>) => this;
    /** Identifier type. */
    ident: (ident: JSObject) => this
}

export interface GetProductsOmnibusPricesRequest extends Gateway {
    identType: (value: 'id'|'index'|'codeExtern'|'codeProducer') => this;
    /** Products list. */
    products: (value: string|string[]) => this;
    /** Set product identifiers */
    productId: (productId: number|string|number|string|number[]|string[], type: 'id'|'index'|'codeExtern'|'codeProducer') => this;
}

export interface PutProductsOmnibusPricesRequest extends AppendableGateway<PutProductsOmnibusPricesRequest> {
    /** Products list. */
    products: (value: Array<JSObject>) => this;
    /** Identifier type. */
    ident: (ident: JSObject) => this
    /** List of sizes */
    sizes: (sizes: Array<JSObject>) => this
    /** Strikethrough price settings. */
    omnibusPrices: (omnibusPrices: JSObject) => this
    /** Strikethrough price settings for the page. */
    shops: (shops: Array<JSObject>) => this
    /** Set product identifiers */
    productId: (productId: number|string, type: 'id'|'index'|'codeExtern'|'codeProducer' = 'id') => this;
    /** Set retail or wholesale price */
    setPrice: (price: number, wholesale: boolean = false) => this;
    /** Set mode to automatic */
    mode: (automatic: boolean = false) => this;
}

export interface DeleteProductsOpinionsRequest extends Gateway {
    id: (value: number|string) => this;
}

export interface GetProductsOpinionsRequest extends PagableGateway<GetProductsOpinionsRequest> {
    /** Review identification */
    opinion: (value: JSObject) => this;
    /** Products list. */
    products: (value: JSObject) => this;
    /** Customer data. */
    clients: (value: JSObject) => this;
    /** Review positive score data */
    scorePositive: (value: JSObject) => this;
    /** Review negative score data */
    scoreNegative: (value: JSObject) => this;
    /** Date range */
    dateRange: (value: JSObject) => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
    /** Possibility of sorting returned list */
    ordersBy: (value: Array<JSObject>) => this;
    /** Define range of dates */
    dates: (dateFrom: DateLike, dateTo: DateLike) => this;
    /** Define ordering of records */
    orderBy: (elementName: "date"|"rating"|"scorePositive"|"scoreNegative"|"modificationDatetime", descending: boolean) => this;
}

export interface PostProductsOpinionsRequest extends AppendableGateway<PostProductsOpinionsRequest> {
    /** List of reviews */
    opinions: (value: Array<JSObject>) => this;
    /**  */
    createDate: (createDate: string) => this
    /**  */
    confirmed: (confirmed: boolean) => this
    /**  */
    rating: (rating: string) => this
    /**  */
    content: (content: string) => this
    /** Customer language ID. */
    language: (language: string) => this
    /**  */
    picture: (picture: string) => this
    /** Shop Id */
    shopId: (shopId: number|string) => this
    /**  */
    host: (host: string) => this
    /** Customer data. */
    clients: (clients: JSObject) => this
    /**  */
    scorePositive: (scorePositive: number|string) => this
    /**  */
    scoreNegative: (scoreNegative: number|string) => this
    /** Products list. */
    products: (products: JSObject) => this
    /** Order serial number. */
    orderSerialNumber: (orderSerialNumber: number|string) => this
    /** Reply to an opinion */
    shopAnswer: (shopAnswer: string) => this
    /** Opinion confirmed with purchase */
    opinionConfirmedByPurchase: (opinionConfirmedByPurchase: boolean) => this
}

export interface PutProductsOpinionsRequest extends Gateway {
    id: (value: number|string) => this;
    confirmed: (value: 'y'|'n') => this;
    rating: (value: '1'|'2'|'3'|'4'|'5') => this;
    content: (value: string) => this;
    /** Customer language ID. */
    language: (value: string) => this;
    /** Reply to an opinion */
    shopAnswer: (value: string) => this;
    picture: (value: string) => this;
    /** Opinion confirmed with purchase */
    opinionConfirmedByPurchase: (value: Boolean) => this;
}

export interface GetProductsOpinionsRateRequest extends Gateway {
    id: (value: number|string) => this;
    operation: (value: 'positive'|'negative') => this;
}

export interface DeleteProductsParametersRequest extends Gateway {
    /** Parameter identifiers */
    ids: (value: number|string|number[]|string[]) => this;
}

export interface PutProductsParametersRequest extends AppendableGateway<PutProductsParametersRequest> {
    /** Sections, parameters or valued to add or edit. */
    items: (value: Array<JSObject>) => this;
    /** Settings */
    settings: (value: JSObject) => this;
    /** Parameter ID. */
    id: (id: number|string) => this
    /** Element text ID - can be entered instead of "id". Recognized save format: "section" (without backslash), "parameter\" (parameter without assigned value). */
    item_text_ids: (item_text_ids: Array<JSObject>) => this
    /** Names of section, parameter or value. */
    names: (names: Array<JSObject>) => this
    /** Descriptions of section, parameter or value. */
    descriptions: (descriptions: Array<JSObject>) => this
    /** Search descriptions of parameter value. */
    search_description: (search_description: Array<JSObject>) => this
    /** Icons of section, parameter or value to display on the product card. */
    card_icons: (card_icons: Array<JSObject>) => this
    /** Icons of section, parameter or value to display on the list of products. */
    link_icons: (link_icons: Array<JSObject>) => this
    /** Parameter's additional feature. 1. Status: context_id = "CONTEXT_STATE" Takes values context_value_id: - CONTEXT_STATE_NEW - New, - CONTEXT_STATE_USED - Used, - CONTEXT_STATE_USED_EXCELLENT - Used - excellent condition - CONTEXT_STATE_USED_VERYGOOD - Used - very good condition - CONTEXT_STATE_USED_CORRECT - Used - good condition - CONTEXT_STATE_USED_ACCEPTABLE - Used - acceptable condition - CONTEXT_STATE_REFURBISHED_EXCELLENT - Refurbished - excellent condition - CONTEXT_STATE_REFURBISHED_VERYGOOD - Refurbished - very good condition - CONTEXT_STATE_REFURBISHED_CORRECT - Refurbished - good condition - CONTEXT_STATE_NEW_OTHERS - New other (see details) - CONTEXT_STATE_NEW_WITH_DEFECTS - New with defects - CONTEXT_STATE_NEW_OEM - New - OEM - CONTEXT_STATE_NEW_OPEN_BOX - New - open box - CONTEXT_STATE_REFURBISHED_BY_PRODUCER - Renewed by a manufacturer, - CONTEXT_STATE_REFURBISHED_BY_SELLER - Renewed by a seller, - CONTEXT_STATE_FOR_PARTS_OR_BROKEN - In parts or damaged. 2. Product weight in grams: context_id = "CONTEXT_STD_UNIT_WEIGHT" Takes values context_value_id: - Value of additional feature is set automatically basing on the parameter's value. 3. A product's value in milliliters: context_id = "CONTEXT_STD_UNIT_VOLUME" Takes values context_value_id: - Value of additional feature is set automatically basing on the parameter's value. 4. Sex: context_id = "CONTEXT_SEX" Takes values context_value_id: - CONTEXT_SEX_MAN - Man, - CONTEXT_SEX_WOMAN - Woman, - CONTEXT_SEX_UNISEX - Unisex. 5. Age group: context_id = "CONTEXT_AGE_GROUP" Takes values context_value_id: - CONTEXT_AGE_GROUP_ADULT - Adults, - CONTEXT_AGE_GROUP_MINOR - Children. 6. Maximum number of products in an order: context_id = "CONTEXT_MAX_QUANTITY_PER_RETAIL_ORDER" Takes values context_value_id: - Value of additional feature is set automatically basing on the parameter's value. 7. Maximum number of products in a wholesale order: context_id = "CONTEXT_MAX_QUANTITY_PER_WHOLESALE_ORDER" Takes values context_value_id: - Value of additional feature is set automatically basing on the parameter's value. 8. Minimal number of products in an order: context_id = "CONTEXT_MIN_QUANTITY_PER_RETAIL_ORDER" Takes values context_value_id: - Value of additional feature is set automatically basing on the parameter's value. 9. Minimum number of products in a wholesale order: context_id = "CONTEXT_MIN_QUANTITY_PER_WHOLESALE_ORDER" Takes values context_value_id: - Value of additional feature is set automatically basing on the parameter's value. 10. Maximal number of a single size in an order: context_id = "CONTEXT_MAX_SIZE_QUANTITY_PER_RETAIL_ORDER" Takes values context_value_id: - Value of additional feature is set automatically basing on the parameter's value. 11. Maximal number of a single size in a wholesale order: context_id = "CONTEXT_MAX_SIZE_QUANTITY_PER_WHOLESALE_ORDER" Takes values context_value_id: - Value of additional feature is set automatically basing on the parameter's value. 12. Minimal number of a single size in an order: context_id = "CONTEXT_MIN_SIZE_QUANTITY_PER_RETAIL_ORDER" Takes values context_value_id: - Value of additional feature is set automatically basing on the parameter's value. 13. Minimal number of a single size in a wholesale order: context_id = "CONTEXT_MIN_SIZE_QUANTITY_PER_WHOLESALE_ORDER" Takes values context_value_id: - Value of additional feature is set automatically basing on the parameter's value. 14. Net weight: context_id = "CONTEXT_WEIGHT_NET" Takes values context_value_id: - Value of additional feature is set automatically basing on the parameter's value. 15. Color: context_id = "CONTEXT_COLOR" Takes values context_value_id: - Value of additional feature is set automatically basing on the parameter's value. 16. #!TylkoDlaDoroslych!#: context_id = "CONTEXT_ONLY_ADULTS" Takes values context_value_id: - CONTEXT_ONLY_ADULTS_YES - yes, - CONTEXT_ONLY_ADULTS_NO - no. 17. Prescription drug: context_id = "CONTEXT_PRESCRIPTION_MEDICINE" Takes values context_value_id: - CONTEXT_PRESCRIPTION_MEDICINE_YES - yes, - CONTEXT_PRESCRIPTION_MEDICINE_NO - no. 18. Season Rate: context_id = "CONTEXT_SEASON" Takes values context_value_id: - CONTEXT_SEASON_SPRING - Spring, - CONTEXT_SEASON_SUMMER - Summer, - CONTEXT_SEASON_FALL - Autumn, - CONTEXT_SEASON_WINTER - Winter, - CONTEXT_SEASON_SPRING_SUMMER - Spring/Summer, - CONTEXT_SEASON_FALL_WINTER - Autumn/Winter 19. Risk - signal word: context_id = \"CONTEXT_HAZMAT_SIGNAL\" Takes values context_value_id: - CONTEXT_HAZMAT_SIGNAL_DANGER - danger, - CONTEXT_HAZMAT_SIGNAL_WARNING - warnging, - CONTEXT_HAZMAT_SIGNAL_CAUTION - caution, - CONTEXT_HAZMAT_SIGNAL_NOTICE - notice, 20. Risk - warning pictogram context_id = \"CONTEXT_HAZMAT_PICTOGRAM\" Takes values context_value_id: - GHS01, GHS02, GHS03, GHS04, GHS05, GHS06, GHS07, GHS08, GHS09 21. Risk - type of hazard: context_id = \"CONTEXT_HAZMAT_STATEMENT\" Takes values context_value_id: - H200, H201, H202, H203, H204, H205, H220, H221, H222, H223, H224, H225, H226, H228, H240, H241, H242, H250, H251, H252, H260, H261, H270, H271, H272, H280, H281, H290, H300, H301, H302, H304, H310, H311, H312, H314, H315, H317, H318, H319, H330, H331, H332, H334, H335, H336, H340, H341, H350, H351, H360, H361, H362, H370, H371, H372, H373, H400, H410, H411, H412, H413, EUH 001, EUH 014, EUH 018, EUH 019, EUH 044, EUH 029, EUH 031, EUH 032, EUH 066, EUH 070, EUH 071, EUH 201, EUH 201A, EUH 202, EUH 203, EUH 204, EUH 205, EUH 206, EUH 207, EUH 208, EUH 209, EUH 209A, EUH 210, EUH 401 22. Repair score: context_id = \"CONTEXT_REPAIR_SCORE\" Takes values context_value_id: - The value of the additional feature is set automatically based on the parameter's value 23. Safety - information pictogram: context_id = \"CONTEXT_SAFETY_PICTOGRAM\" Takes values context_value_id: - 1 (Not suitable for small children) - 2 (CE mark) 24. Safety - type of warning: context_id = \"CONTEXT_SAFETY_STATEMENT\" Takes values context_value_id: - 1 (Not suitable for children under 3 years) - 2 (Keep out of the reach of children) - 3 (Product contains a button cell or coin battery) - 4 (Use under the direct supervision of adults) - 5 (Required protective gear. Do not use in public traffic) - 6 (Contains toy. Adult supervision recommended) - 7 (To prevent possible injury from entanglement, remove this toy as soon as the child begins to crawl) - 8 (Use only in shallow water under adult supervision) - 9 (Only use under adult supervision) - 10 (This toy does not provide protection) - 11 (Contains fragrances that may cause allergies) - 12 (For household use only). */
    context_id: (context_id: string) => this
    /** value of additional feature - Values described in context_id. */
    context_value_id: (context_value_id: string) => this
}

export interface SearchProductsParametersRequest extends PagableGateway<SearchProductsParametersRequest,SearchProductsParametersResponse> {
    /** List of identifiers */
    ids: (value: number|string|number[]|string[]) => this;
    /** Element text ID - can be entered instead of "id". */
    textIds: (value: Array<JSObject>) => this;
    /** List of languages */
    languagesIds: (value: string|string[]) => this;
    /** Whether to return a list of parameter value IDs */
    parameterValueIds: (value: Boolean) => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
}

export interface DeleteProductsRequest extends AppendableGateway<DeleteProductsRequest> {
    /** Products list. */
    products: (value: Array<JSObject>) => this;
    /** Product IAI code */
    productId: (productId: number|string) => this
    /** External product system code for size. */
    productSizeCodeExternal: (productSizeCodeExternal: string) => this
}

export interface GetProductsRequest extends Gateway<SearchProductsResponse> {
    /** List of the unique, indexed product codes (IAI code / External system code / Producer code). You can transfer a maximum of 100 products IDs in one request. */
    productIds: (value: string|string[]) => this;
}

export interface PostProductsRequest extends AppendableGateway<PostProductsRequest> {
    /** Settings */
    settings: (value: JSObject) => this;
    /** Icon and photos settings */
    picturesSettings: (value: JSObject) => this;
    /** Products list. */
    products: (value: Array<JSObject>) => this;
    /** Product IAI code */
    productId: (productId: number|string) => this
    /** External product system code for size. */
    productSizeCodeExternal: (productSizeCodeExternal: string) => this
    /** External product system code. */
    productDisplayedCode: (productDisplayedCode: string) => this
    /** PKWiU [PCPandS]. */
    productTaxCode: (productTaxCode: string) => this
    /** Number of items in package data */
    productInWrapper: (productInWrapper: number|string) => this
    /** Sold at - for retailers. */
    productSellByRetail: (productSellByRetail: number) => this
    /** Sold at - for wholesalers. */
    productSellByWholesale: (productSellByWholesale: number) => this
    /** IdoSell Category ID */
    categoryIdoSellId: (categoryIdoSellId: number|string) => this
    /** IdoSell Category pathname */
    categoryIdoSellPath: (categoryIdoSellPath: string) => this
    /** Category id */
    categoryId: (categoryId: number|string) => this
    /** Category name */
    categoryName: (categoryName: string) => this
    /** Brand ID */
    producerId: (producerId: number|string) => this
    /** Brand name */
    producerName: (producerName: string) => this
    /** CN/TARIC */
    cnTaricCode: (cnTaricCode: string) => this
    /** Country of origin. Country code in the ISO 3166-1 A2 standard */
    countryOfOrigin: (countryOfOrigin: string) => this
    /** Product unit of measure ID. */
    unitId: (unitId: number|string) => this
    /** ID of series, to which product belongs. */
    seriesId: (seriesId: number|string) => this
    /** Name of series, to which the product belongs, visible in panel. */
    seriesPanelName: (seriesPanelName: string) => this
    /** Size group ID Change of one size group to another results in zeroing all stock quantities in all stocks. Change of size group can be made, if product is not present in any unhandled orders nor listed on auctions. */
    sizesGroupId: (sizesGroupId: number|string) => this
    /** Optional element, that determines prices edition mode. Default value is "amount_set", when indicated element is omitted in API gate call.. Allowed values "amount_set" - sets product prices to desired value (default mode), "amount_diff" - sets sum difference between prices set (adds or subtracts entered sum from the current price), "percent_diff" - sets percentage difference between prices set (adds or subtracts entered percent from the current price). */
    priceChangeMode: (priceChangeMode: string) => this
    /** The JavaScript formula calculating prices */
    priceFormula: (priceFormula: JSObject) => this
    /** Gross price */
    productRetailPrice: (productRetailPrice: number) => this
    /** Wholesale price */
    productWholesalePrice: (productWholesalePrice: number) => this
    /** Minimal price */
    productMinimalPrice: (productMinimalPrice: number) => this
    /** Price for automatic calculations */
    productAutomaticCalculationPrice: (productAutomaticCalculationPrice: number) => this
    /** price for POS. */
    productPosPrice: (productPosPrice: number) => this
    /** Value of VAT */
    productVat: (productVat: number) => this
    /** Is product VAT free Allowed values "y" - yes, "n" - no. */
    productVatFree: (productVatFree: string) => this
    /** Different prices for price comparison websites. */
    productPriceComparisonSitesPrices: (productPriceComparisonSitesPrices: Array<JSObject>) => this
    /** Object determines if the product is available in POS sale Available values: "n" - no, "y" - yes. */
    productEnableInPos: (productEnableInPos: string) => this
    /** Required advance payment in percents */
    productAdvancePrice: (productAdvancePrice: number) => this
    /** Annotation. */
    productNote: (productNote: string) => this
    /** Product value in points. */
    productProfitPoints: (productProfitPoints: number) => this
    /** Weight. */
    productWeight: (productWeight: number|string) => this
    /** Product visibility. Allowed values "y" - product visible, "n" - product not visible. */
    productInVisible: (productInVisible: string) => this
    /** Product visible even though out of stock Available values: "y" - visible even though out of stock, "n" - not visible when out of stock. */
    productInPersistent: (productInPersistent: string) => this
    /** Bit mask of shop IDs. Mask for indicated store is calculated on basis of following formula: 2^(store_ID - 1). If the product should be available in more than one shop, the masks should be summed up. */
    shopsMask: (shopsMask: number|string) => this
    /** Complex rating Available values: "0" - no, "1" - yes. */
    productComplexNotes: (productComplexNotes: number|string) => this
    /** Product visibility in export to price comparison and marketplaces. Available values: "y" - Visible, "selected" - yes (selected), "n" - invisible. */
    productInExportToPriceComparisonSites: (productInExportToPriceComparisonSites: string) => this
    /** Selection of comparison sites for which the product visibility will be changed */
    priceComparisonSites: (priceComparisonSites: Array<JSObject>) => this
    /** Visibility of an item in an export to Amazon Marketplace. Available values: "y" - Visible, "selected" - Visible on selected regional services, "n" - invisible. */
    productInExportToAmazonMarketplace: (productInExportToAmazonMarketplace: string) => this
    /** Availability profile ID. */
    availableProfile: (availableProfile: number|string) => this
    /** Discount profile ID */
    productRebate: (productRebate: number|string) => this
    /** Product warranty ID. */
    warrantyId: (warrantyId: number|string) => this
    /** Priority. Allowed values from 1 to 10. */
    productPriority: (productPriority: number|string) => this
    /** Product icon details. */
    productIcon: (productIcon: string) => this
    /** Watermark ID */
    productWatermarkId: (productWatermarkId: number|string) => this
    /** Link to watermark */
    productWatermarkUrl: (productWatermarkUrl: string) => this
    /** List of product photos */
    productPictures: (productPictures: string|string[]) => this
    /** List of photos descriptions */
    productDescriptionPictures: (productDescriptionPictures: string|string[]) => this
    /** Reduced price */
    productPromotion: (productPromotion: JSObject) => this
    /** Discount for shop. */
    productDiscount: (productDiscount: JSObject) => this
    /** Distinguished product in store. */
    productDistinguished: (productDistinguished: JSObject) => this
    /** Special product in store. */
    productSpecial: (productSpecial: JSObject) => this
    /** Parameters (distinguished). */
    productParametersDistinction: (productParametersDistinction: Array<JSObject>) => this
    /** List of products recommended with this product */
    associatedProducts: (associatedProducts: Array<JSObject>) => this
    /** Sizes available for products data. */
    productSizes: (productSizes: Array<JSObject>) => this
    /** Data concerning attributes dependent on indicated stores with particular product assigned. */
    productShopsAttributes: (productShopsAttributes: Array<JSObject>) => this
    /** Products subscription settings. */
    subscription: (subscription: Array<JSObject>) => this
    /** Product name. */
    productNames: (productNames: JSObject) => this
    /**  */
    productDescriptions: (productDescriptions: JSObject) => this
    /** Long product description */
    productLongDescriptions: (productLongDescriptions: JSObject) => this
    /** Product data for auction services */
    productAuctionDescriptionsData: (productAuctionDescriptionsData: Array<JSObject>) => this
    /** Product meta title */
    productMetaTitles: (productMetaTitles: JSObject) => this
    /** Product meta description */
    productMetaDescriptions: (productMetaDescriptions: JSObject) => this
    /** Product meta keywords. */
    productMetaKeywords: (productMetaKeywords: JSObject) => this
    /** #!AdresURLDlaTowaru!#. */
    productUrl: (productUrl: JSObject) => this
    /** Data on product groups (variants) */
    productVersion: (productVersion: JSObject) => this
    /** Currency ID */
    currencyId: (currencyId: string) => this
    /** Supplier ID. */
    delivererId: (delivererId: number|string) => this
    /** This parameter is optional and it determines properties edition mode. Default value is "replace". Allowed values: "add" - adds properties to already existent ones, "delete" - removes properties of already existent ones, "delete_group" - removes properties from selected group, "replace" - overwrites properties already existent with new ones (default mode). */
    productParametersDistinctionChangeMode: (productParametersDistinctionChangeMode: 'add'|'delete'|'delete_group'|'replace') => this
    /** Product delivery time from the producer to the shop */
    productDeliveryTime: (productDeliveryTime: JSObject) => this
    /** Do You wish to sum up the products in the basket as a one order? Available values: "y" - yes, "n" - no. */
    productSumInBasket: (productSumInBasket: string) => this
    /** Shipping, returns and complaints settings */
    dispatchSettings: (dispatchSettings: JSObject) => this
    /** Standard unit settings */
    standardUnit: (standardUnit: JSObject) => this
    /** Minimal number of products in an order */
    minQuantityPerOrder: (minQuantityPerOrder: JSObject) => this
    /** Dimensions and overall weight */
    productDimensions: (productDimensions: JSObject) => this
    /** Responsible producer code */
    responsibleProducerCode: (responsibleProducerCode: string) => this
    /** Responsible person code */
    responsiblePersonCode: (responsiblePersonCode: string) => this
    /** Set various types of names or descriptions to the product */
    setText: (text: string, type: "productName"|"productParamDescriptions"|"productLongDescription"|"productMetaTitle"|"productMetaDescription"|"productMetaKeyword"|"productAuctionName"|"productAuctionDescription"|"productAuctionAdditionalName"|"productNameInPriceComparer" = 'productName', language?: string, shopId?: number|string) => this;
    /** Sets product price by amount */
    setPrice: (value: number, type: 'retail'|'wholesale'|'pos'|'minimal'|'strikethroughRetail'|'strikethroughWholesale'|'suggested'|'automaticCalculation' = 'retail') => this;
}

export interface PutProductsRequest extends AppendableGateway<PutProductsRequest> {
    /** Settings */
    settings: (value: JSObject) => this;
    /** Icon and photos settings */
    picturesSettings: (value: JSObject) => this;
    /** Products list. */
    products: (value: Array<JSObject>) => this;
    /** Product IAI code */
    productId: (productId: number|string) => this
    /** One of the unique, indexed product codes (IAI code / External system code / Producer code) */
    productIndex: (productIndex: string) => this
    /** External product system code for size. */
    productSizeCodeExternal: (productSizeCodeExternal: string) => this
    /** Producer code for size. */
    productSizeCodeProducer: (productSizeCodeProducer: string) => this
    /** External product system code. */
    productDisplayedCode: (productDisplayedCode: string) => this
    /** PKWiU [PCPandS]. */
    productTaxCode: (productTaxCode: string) => this
    /** Number of items in package data */
    productInWrapper: (productInWrapper: number|string) => this
    /** Sold at - for retailers. */
    productSellByRetail: (productSellByRetail: number) => this
    /** Sold at - for wholesalers. */
    productSellByWholesale: (productSellByWholesale: number) => this
    /** IdoSell Category ID */
    categoryIdoSellId: (categoryIdoSellId: number|string) => this
    /** IdoSell Category pathname */
    categoryIdoSellPath: (categoryIdoSellPath: string) => this
    /** Category id */
    categoryId: (categoryId: number|string) => this
    /** Category name */
    categoryName: (categoryName: string) => this
    /** Brand ID */
    producerId: (producerId: number|string) => this
    /** Brand name */
    producerName: (producerName: string) => this
    /** CN/TARIC */
    cnTaricCode: (cnTaricCode: string) => this
    /** Country of origin. Country code in the ISO 3166-1 A2 standard */
    countryOfOrigin: (countryOfOrigin: string) => this
    /** Product unit of measure ID. */
    unitId: (unitId: number|string) => this
    /** ID of series, to which product belongs. */
    seriesId: (seriesId: number|string) => this
    /** Name of series, to which the product belongs, visible in panel. */
    seriesPanelName: (seriesPanelName: string) => this
    /** Size group ID Change of one size group to another results in zeroing all stock quantities in all stocks. Change of size group can be made, if product is not present in any unhandled orders nor listed on auctions. */
    sizesGroupId: (sizesGroupId: number|string) => this
    /** Size group name. */
    sizesGroupName: (sizesGroupName: string) => this
    /** Optional element, that determines prices edition mode. Default value is "amount_set", when indicated element is omitted in API gate call.. Allowed values "amount_set" - sets product prices to desired value (default mode), "amount_diff" - sets sum difference between prices set (adds or subtracts entered sum from the current price), "percent_diff" - sets percentage difference between prices set (adds or subtracts entered percent from the current price). */
    priceChangeMode: (priceChangeMode: string) => this
    /** Gross price */
    productRetailPrice: (productRetailPrice: number) => this
    /** Net retail price for every shop. */
    productRetailPriceNet: (productRetailPriceNet: number) => this
    /** Wholesale price */
    productWholesalePrice: (productWholesalePrice: number) => this
    /** Net wholesale price for every shop. */
    productWholesalePriceNet: (productWholesalePriceNet: number) => this
    /** Minimal price */
    productMinimalPrice: (productMinimalPrice: number) => this
    /** Net minimum price for every shop. */
    productMinimalPriceNet: (productMinimalPriceNet: number) => this
    /** Price for automatic calculations */
    productAutomaticCalculationPrice: (productAutomaticCalculationPrice: number) => this
    /** #!CenaDoObliczenAutomatycznychNettoDlaKazdegoSklepu!#. */
    productAutomaticCalculationPriceNet: (productAutomaticCalculationPriceNet: number) => this
    /** price for POS. */
    productPosPrice: (productPosPrice: number) => this
    /** price for POS. */
    productPosPriceNet: (productPosPriceNet: number) => this
    /** Recommended retail price */
    productSuggestedPrice: (productSuggestedPrice: number) => this
    /** Suggested net commodity price. */
    productSuggestedPriceNet: (productSuggestedPriceNet: number) => this
    /** Strikethrough gross retail price */
    productStrikethroughRetailPrice: (productStrikethroughRetailPrice: number) => this
    /** Strikethrough net retail price */
    productStrikethroughRetailPriceNet: (productStrikethroughRetailPriceNet: number) => this
    /** Strikethrough gross wholesale price */
    productStrikethroughWholesalePrice: (productStrikethroughWholesalePrice: number) => this
    /** Strikethrough net wholesale price */
    productStrikethroughWholesalePriceNet: (productStrikethroughWholesalePriceNet: number) => this
    /** Value of VAT */
    productVat: (productVat: number) => this
    /** Is product VAT free Allowed values "y" - yes, "n" - no. */
    productVatFree: (productVatFree: string) => this
    /** Different prices for price comparison websites. */
    productPriceComparisonSitesPrices: (productPriceComparisonSitesPrices: Array<JSObject>) => this
    /** Object determines if the product is available in POS sale Available values: "n" - no, "y" - yes. */
    productEnableInPos: (productEnableInPos: string) => this
    /** Required advance payment in percents */
    productAdvancePrice: (productAdvancePrice: number) => this
    /** Annotation. */
    productNote: (productNote: string) => this
    /** Settings of hotspots display. */
    productHotspotsZones: (productHotspotsZones: Array<JSObject>) => this
    /** Loyalty points. */
    priceInPoints: (priceInPoints: JSObject) => this
    /** Loyalty points. */
    loyaltyPoints: (loyaltyPoints: Array<JSObject>) => this
    /** Weight. */
    productWeight: (productWeight: number|string) => this
    /** Product visibility. Allowed values "y" - product visible, "n" - product not visible. */
    productInVisible: (productInVisible: string) => this
    /** Bit mask of shop IDs. Mask for indicated store is calculated on basis of following formula: 2^(store_ID - 1). If the product should be available in more than one shop, the masks should be summed up. */
    shopsMask: (shopsMask: number|string) => this
    /** Complex rating Available values: "0" - no, "1" - yes. */
    productComplexNotes: (productComplexNotes: number|string) => this
    /** Product visibility in export to price comparison and marketplaces. Available values: "y" - Visible, "selected" - Selected, "assign_selected" - Enable the visibility of the product in the export to price comparison sites passed in the priceComparisonSites node. Price comparison sites previously assigned to the commodity will be retained, "unassign_selected" - Disable product visibility in exports to price comparison sites passed in the priceComparisonSites node, "n" - invisible. */
    productInExportToPriceComparisonSites: (productInExportToPriceComparisonSites: 'y'|'selected'|'n') => this
    /** Selection of comparison sites for which the product visibility will be changed */
    priceComparisonSites: (priceComparisonSites: Array<JSObject>) => this
    /** Visibility of an item in an export to Amazon Marketplace. Available values: "y" - Visible, "selected" - Visible on selected regional services, "n" - invisible. */
    productInExportToAmazonMarketplace: (productInExportToAmazonMarketplace: string) => this
    /** Array */
    exportToAmazonMarketplacesList: (exportToAmazonMarketplacesList: string|string[]) => this
    /** Export sizes to Amazon: Available values: "y" - all, "n" - leave without change. */
    exportToAmazonExportAllSizes: (exportToAmazonExportAllSizes: 'n'|'y') => this
    /** Update merchandise inventory, on the Amazon side */
    exportAmazonUpdateStocks: (exportAmazonUpdateStocks: 'n'|'y') => this
    /** Visibility of product during the import to Strefa Marek Allegro. Allowed values: "yes" - product visible in the export to Strefa Marek Allegro, "no" - product invisible in the export to Strefa Marek Allegro. */
    productInExportToStrefaMarekAllegro: (productInExportToStrefaMarekAllegro: string) => this
    /** Profile ID which should be used when sending products to Strefa Marek Allegro. */
    productInExportToSmaPreset: (productInExportToSmaPreset: number|string) => this
    /** Availability profile ID. */
    availableProfile: (availableProfile: number|string) => this
    /** Discount profile ID */
    productRebate: (productRebate: number|string) => this
    /** Product warranty ID. */
    warrantyId: (warrantyId: number|string) => this
    /** Name of warranty for indicated product. */
    warrantyName: (warrantyName: string) => this
    /** The JavaScript formula calculating prices */
    priceFormula: (priceFormula: JSObject) => this
    /** Size chart ID */
    sizeChartId: (sizeChartId: number|string) => this
    /** Size chart name */
    sizeChartName: (sizeChartName: string) => this
    /** Priority. Allowed values from 1 to 10. */
    productPriority: (productPriority: number|string) => this
    /** Product priority in menu node. */
    productPriorityInMenuNodes: (productPriorityInMenuNodes: Array<JSObject>) => this
    /** Product icon link. */
    productIconLink: (productIconLink: string) => this
    /** Photo without background. */
    productAuctionIconLink: (productAuctionIconLink: string) => this
    /** Icon for a product group. */
    productGroupIconLink: (productGroupIconLink: string) => this
    /** List of product photos */
    productPictures: (productPictures: Array<JSObject>) => this
    /** List of a product's photos with indication of a particular number of the photo. */
    productPicturesReplace: (productPicturesReplace: Array<JSObject>) => this
    /** Reduced price */
    productPromotion: (productPromotion: JSObject) => this
    /** Discount for shop. */
    productDiscount: (productDiscount: JSObject) => this
    /** Distinguished product in store. */
    productDistinguished: (productDistinguished: JSObject) => this
    /** Special product in store. */
    productSpecial: (productSpecial: JSObject) => this
    /** Parameters (distinguished). */
    productParametersDistinction: (productParametersDistinction: Array<JSObject>) => this
    /** Configuration parameters */
    parametersConfigurable: (parametersConfigurable: Array<JSObject>) => this
    /** List of products recommended with this product */
    associatedProducts: (associatedProducts: Array<JSObject>) => this
    /** Sizes available for products data. */
    productSizes: (productSizes: Array<JSObject>) => this
    /** Product attachments list. */
    attachments: (attachments: Array<JSObject>) => this
    /** The list of attachments to be deleted. */
    removeAttachments: (removeAttachments: Array<JSObject>) => this
    /** Do you want to delete attachments for digital files. */
    virtualAttachmentsToRemove: (virtualAttachmentsToRemove: boolean) => this
    /** List of product's virtual attachments. */
    virtualAttachments: (virtualAttachments: Array<JSObject>) => this
    /** Operation, that will be performed on attachments to product. */
    attachmentOperationValues: (attachmentOperationValues: 'edit'|'add'|'remove') => this
    /** Data concerning attributes dependent on indicated stores with particular product assigned. */
    productShopsAttributes: (productShopsAttributes: Array<JSObject>) => this
    /** Products subscription settings. */
    subscription: (subscription: Array<JSObject>) => this
    /** Product name. */
    productNames: (productNames: JSObject) => this
    /** DEPRECATED. This parameter is deprecated. Product name for online auctions. */
    productNamesInAuction: (productNamesInAuction: JSObject) => this
    /** Product name for price comparison websites. */
    productNamesInPriceComparer: (productNamesInPriceComparer: JSObject) => this
    /** Product short description */
    productParamDescriptions: (productParamDescriptions: JSObject) => this
    /** Long product description */
    productLongDescriptions: (productLongDescriptions: JSObject) => this
    /** DEPRECATED. This parameter is deprecated. Product description for marketplaces. */
    productLongDescriptionsInAuction: (productLongDescriptionsInAuction: JSObject) => this
    /** Product data for auction services */
    productAuctionDescriptionsData: (productAuctionDescriptionsData: Array<JSObject>) => this
    /** Product meta title */
    productMetaTitles: (productMetaTitles: JSObject) => this
    /** Product meta description */
    productMetaDescriptions: (productMetaDescriptions: JSObject) => this
    /** Product meta keywords. */
    productMetaKeywords: (productMetaKeywords: JSObject) => this
    /** #!AdresURLDlaTowaru!#. */
    productUrl: (productUrl: JSObject) => this
    /** Data on product groups (variants) */
    productVersion: (productVersion: JSObject) => this
    /** Currency ID */
    currencyId: (currencyId: string) => this
    /** Currency, in which product prices are stored. */
    productCurrenciesShops: (productCurrenciesShops: Array<JSObject>) => this
    /** Supplier ID. */
    delivererId: (delivererId: number|string) => this
    /** Supplier name. */
    delivererName: (delivererName: string) => this
    /** This parameter is optional and it determines properties edition mode. Default value is "replace". Allowed values: "add" - adds properties to already existent ones, "delete" - removes properties of already existent ones, "delete_group" - removes properties from selected group, "replace" - overwrites properties already existent with new ones (default mode). */
    productParametersDistinctionChangeMode: (productParametersDistinctionChangeMode: 'add'|'delete'|'delete_group'|'replace') => this
    /** Product delivery time from the producer to the shop */
    productDeliveryTime: (productDeliveryTime: JSObject) => this
    /** Parameters. */
    productParameters: (productParameters: Array<JSObject>) => this
    /**  */
    clearProductParameters: (clearProductParameters: boolean) => this
    /** Change parameter distinction. */
    changeParametersDistinction: (changeParametersDistinction: Array<JSObject>) => this
    /** VAT rate change mode:. "change_gross" - changes the product gross price, leaving the net price unchanged, "change_net" - changes the net price, leaving the gross price unchanged (default mode). */
    productPriceVatChangeMode: (productPriceVatChangeMode: 'change_net'|'change_gross') => this
    /** An array of menu elements */
    productMenuItems: (productMenuItems: Array<JSObject>) => this
    /** #!UsuwaWszystkiePrzypisaneDoProduktuElementyWybranegoMenu!#. */
    removeAllProductsAssignedToMenu: (removeAllProductsAssignedToMenu: JSObject) => this
    /** Do You wish to sum up the products in the basket as a one order? Available values: "y" - yes, "n" - no. */
    productSumInBasket: (productSumInBasket: string) => this
    /** Settings of prices for shop. Values allowed: "same_prices" - prices in each shop are the same, "different_prices" - prices in each shop are different. */
    productShopsPricesConfig: (productShopsPricesConfig: 'same_prices'|'different_prices') => this
    /** Price settings for POS. Allowed values: "pos_equals_retail" - sets POS price the same as retail price. Possible to set only if the "shops_prices_config" parameter is set to jest same_prices or there is only one shop in panel, "pos_notequals_retail" - Price for POS different than retail price, "not_available_in_pos" - Product not available for POS sales. "sizes_pos_price_as_base_price" - Remove prices for sizes and set a sale price which equals a basic price. */
    productPosPricesConfig: (productPosPricesConfig: 'pos_equals_retail'|'pos_notequals_retail'|'not_available_in_pos'|'sizes_pos_price_as_base_price') => this
    /** Product type. Allowed values: "product_item" - Goods, "product_free" - Free product, "product_packaging" - packaging, "product_bundle" - set. "product_collection" - collection. "product_service" - service. "product_virtual" - virtual product. "product_configurable" - configurable product. */
    productType: (productType: 'product_item'|'product_free'|'product_packaging'|'product_bundle'|'product_collection'|'product_virtual'|'product_service'|'product_configurable') => this
    /** Forced rounding up method. */
    priceRoundMode: (priceRoundMode: 'none'|'00'|'x0'|'99'|'x9') => this
    /** Product availability management method Available values: "stock" - by means of stock management tools, "manual" - manually. */
    productAvailabilityManagementType: (productAvailabilityManagementType: 'manual'|'stock') => this
    /** List of unused sizes in product to be deleted */
    removeChooseSizesValues: (removeChooseSizesValues: string|string[]) => this
    /** Remove all unused sizes. */
    removeAllUnusedProductSizes: (removeAllUnusedProductSizes: boolean) => this
    /** Standard producer code. Available values: "auto" - Choose automatically, "GTIN14" - GTIN-14 "GTIN13" - GTIN-13 (EAN-13) "ISBN13" - GTIN-13 (ISBN-13) "GTIN12" - GTIN-12 (UPC-A) "ISBN10" - ISBN-10 "GTIN8" - GTIN-8 (EAN-8) "UPCE" - UPC-E "MPN" - MPN "other" - Other */
    producerCodesStandard: (producerCodesStandard: 'auto'|'gtin14'|'gtin13'|'isbn13'|'gtin12'|'isbn10'|'gtin8'|'upce'|'mpn'|'other') => this
    /** JavaScript code displayed in the product page of the IdoSell Shop */
    javaScriptInTheItemCard: (javaScriptInTheItemCard: Array<JSObject>) => this
    /** Saving serial numbers Available values: "na" - not used, "optional" - Optional, "required" - required. */
    serialNumbersOption: (serialNumbersOption: 'na'|'optional'|'required') => this
    /** Shipping, returns and complaints settings */
    dispatchSettings: (dispatchSettings: JSObject) => this
    /** Standard unit settings */
    standardUnit: (standardUnit: JSObject) => this
    /** Minimal number of products in an order */
    minQuantityPerOrder: (minQuantityPerOrder: JSObject) => this
    /**  */
    dynamicPricingEnabled: (dynamicPricingEnabled: string) => this
    /** The setting allows you to reset the inventory to zero */
    clearStockQuantities: (clearStockQuantities: JSObject) => this
    /** Dimensions and overall weight */
    productDimensions: (productDimensions: JSObject) => this
    /** Responsible producer code */
    responsibleProducerCode: (responsibleProducerCode: string) => this
    /** Responsible person code */
    responsiblePersonCode: (responsiblePersonCode: string) => this
    /** Set various types of names or descriptions to the product */
    setText: (text: string, type: "productName"|"productParamDescriptions"|"productLongDescription"|"productMetaTitle"|"productMetaDescription"|"productMetaKeyword"|"productAuctionName"|"productAuctionDescription"|"productAuctionAdditionalName"|"productNameInPriceComparer" = 'productName', language?: string, shopId?: number|string) => this;
    /** Set edit mode - disables adding new product */
    editMode: () => this;
    /** Set add mode - Api is allowed to create new products */
    addMode: () => this;
    /** Increases product price by amount */
    addPrice: (value: number, type: 'retail'|'wholesale'|'pos'|'minimal'|'strikethroughRetail'|'strikethroughWholesale'|'suggested'|'automaticCalculation') => this;
    /** Sets product price by amount */
    setPrice: (value: number, type: 'retail'|'wholesale'|'pos'|'minimal'|'strikethroughRetail'|'strikethroughWholesale'|'suggested'|'automaticCalculation') => this;
    /** Sets product selected IDs */
    setMenu: (shopId: number|string, menuIds: number|string) => this;
    /** Sets list of pictures attached to product */
    pictures: (picturesArray: string|string[]) => this;
}

export interface SearchProductsRequest extends PagableGateway<SearchProductsRequest,SearchProductsResponse> {
    dispatchSettings: (value: JSObject) => this;
    /** Element determines which products should be returned by the gate. Undeleted products are returned by default. Available values: "active" - undeleted products, "deleted" - deleted products. "in_trash" - products in the trash. */
    returnProducts: (value: string) => this;
    /** Elements to be returned by the endpoint. By default all elements are returned Available values: * lang_data * adding_time, * deleted, * code, * note, * taxcode, * inwrapper, * sellby_retail, * sellby_wholesale, * producer_id, * producer_name, * iaiCategoryId, * iaiCategoryName, * iaiCategoryPath, * category_id, * category_name, * size_group_id, * modification_time, * currency, * currency_shop, * bestseller, * new_product, * retail_price, * wholesale_price, * minimal_price, * automatic_calculation_price, * pos_price, * strikethrough_retail_price, * strikethrough_wholesale_price, * last_purchase_price, * purchase_price_net_average, * purchase_price_net_last, * purchase_price_gross_average, * purchase_price_gross_last, * vat, * vat_free, * rebate, * hotspots_zones, * profit_points, * points, * weight, * export_to_pricecomparers, * export_to_amazon_marketplace, * enable_in_pos, * complex_notes, * available_profile, * traits, * parameters, * version_data, * advance, * promotion, * discount, * distinguished, * special, * visible, * persistent, * priority, * shops_mask, * icon, * icon_for_auctions, * icon_for_group, * pictures, * unit, * warranty, * series, * products_associated, * shops, * quantities, * sizes_attributes, * shops_attributes, * auction_prices, * price_comparers_prices, * deliverer, * sizes, * size_group_name, * pictures_count, * product_type, * price_changed_time, * quantity_changed_time, * deliverer_name, * available_profile_name, * availability_management_type, * sum_in_basket, * menu, * auction_settings, * bundle, * sizeschart_id, * sizeschart_name, * serialnumbers, * producer_codes_standard, * javaScriptInTheItemCard, * productAuctionDescriptionsData, * priceFormula, * productIndividualDescriptionsData, * productIndividualUrlsData, * productServicesDescriptionsData, * cnTaricCode, * productIsGratis, * dimensions, * responsibleProducerCode, * responsiblePersonCode */
    returnElements: (value: string|string[]) => this;
    /** Product availability. Available values: "y" - available, "n" - unavailable. */
    productIsAvailable: (value: string) => this;
    /** Product visibility in store Available values: "y" - Visible, "n" - Invisible. */
    productIsVisible: (value: string) => this;
    /** Product group ID */
    productVersionId: (value: number|string) => this;
    /** Promoted product. Available values: "y" - promoted, "n" - not promoted. */
    productInPromotion: (value: string) => this;
    /** Product on sale. Available values: "y" - on sale, "n" - not on sale. */
    productInDiscount: (value: string) => this;
    /** Distinguished product. Available values: "y" - distinguished, "n" - not distinguished. */
    productInDistinguished: (value: string) => this;
    /** Special product. Available values: "y" - #!specjalny!#, "n" - not special. */
    productInSpecial: (value: string) => this;
    /** Product available for points. Available values: "y" - Available for points, "n" - Unavailable for points. */
    productInForPointsSelling: (value: string) => this;
    /** Observed product. Available values: "Y" - observed, "n" - not observed. */
    productIsObservedByClients: (value: string) => this;
    /** Element determines if default product (with 0 ID, contains settings of newly added products) should be omitted Available values: "y" - omits default product, "n" - allows to download default product. */
    skipDefaultProduct: (value: string) => this;
    /** The item specifies whether promotional prices are to be shown in price nodes. Available values: "y" - show promotional prices, "n" - do not show promotional prices. (default value) */
    showPromotionsPrices: (value: string) => this;
    /** List of categories in which sought products are present. */
    categories: (value: Array<JSObject>) => this;
    /** List of manufacturers assigned to sought products. */
    producers: (value: Array<JSObject>) => this;
    /** List of sought products. This parameter can be used, when there have been no other parameter entered productIndexes. */
    productParams: (value: Array<JSObject>) => this;
    /** List of sought products by indexes. */
    productIndexes: (value: Array<JSObject>) => this;
    /** Data of stores product is assigned to. */
    productShops: (value: Array<JSObject>) => this;
    /** List of special offers, sought products are assigned to. */
    productPromotionsIds: (value: number|string|number[]|string[]) => this;
    /** Settings concerning narrowing list of products found by date. */
    productDate: (value: JSObject) => this;
    /** Parameters */
    productParametersParams: (value: Array<JSObject>) => this;
    /** Series, sought products are assigned to. */
    productSeriesParams: (value: Array<JSObject>) => this;
    /** List of units of measure assigned to sought products. */
    productUnits: (value: Array<JSObject>) => this;
    /** Narrowing list of products by set warranties. */
    productWarranties: (value: Array<JSObject>) => this;
    /** Suppliers, sought products are assigned to. */
    deliverersIds: (value: number|string|number[]|string[]) => this;
    /** Product contains text (searches in short and long description).  */
    containsText: (value: string) => this;
    /** Product code or it's part (based on producer's code, external product system code and code that is visible on a product card). Search is accesible only with available products. */
    containsCodePart: (value: string) => this;
    /** Product availability in stocks */
    productAvailableInStocks: (value: JSObject) => this;
    /** Product availability on auctions */
    productAvailableInAuctions: (value: JSObject) => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
    /** Possibility of sorting returned list */
    ordersBy: (value: Array<JSObject>) => this;
    /** Language ID that allows to search and return data in chosen language. This parameter is optional. If it's lacking, she search process unfolds in all available languages. */
    productSearchingLangId: (value: string) => this;
    /** Currency ID allowing to search and browse products in given currency. This parameter is optional, when it's lacking, the search process unfolds in all available currencies.  */
    productSearchingCurrencyId: (value: string) => this;
    /** Currency ID allowing for returning all product prices in an indicated currency */
    returnPricesCurrency: (value: string) => this;
    /** Annotation contains text. */
    productHasNote: (value: string) => this;
    /** Product visibility in export to price comparison and marketplaces. Available values: "y" - Visible, "selected" - Selected, "assign_selected" - Enable the visibility of the product in the export to price comparison sites passed in the priceComparisonSites node. Price comparison sites previously assigned to the commodity will be retained, "unassign_selected" - Disable product visibility in exports to price comparison sites passed in the priceComparisonSites node, "n" - invisible. */
    productInExportToPriceComparisonSites: (value: string) => this;
    /** Visibility of an item in an export to Amazon Marketplace. Available values: "y" - Visible, "selected" - Visible on selected regional services, "n" - invisible. */
    productInExportToAmazonMarketplace: (value: string) => this;
    /** List of Amazon regional sites to which the product is exported (only in case of "selected" option) */
    selectedAmazonMarketplacesList: (value: string|string[]) => this;
    /** Product is bestseller. Available values: "n" - no, "y" - yes. */
    productInBestseller: (value: string) => this;
    /** Product is new. Available values: "y" - is new, "n" - is not new. */
    productInNew: (value: string) => this;
    /** Shops */
    searchByShops: (value: JSObject) => this;
    /** Price range for sought products. */
    productSearchPriceRange: (value: JSObject) => this;
    /** VAT value for sought products */
    productVatRates: (value: Array<Number>) => this;
    /** Is product VAT-free Allowed values "y" - yes, "n" - no. */
    productIsVatFree: (value: string) => this;
    /** Product has defined wholesale price. Available values: "y" - has wholesale price, "n" - does not have wholesale price. */
    productHasWholesalePrice: (value: string) => this;
    /** Product visible even though out of stock Available values: "y" - visible even though out of stock, "n" - not visible when out of stock. */
    productInPersistent: (value: string) => this;
    /** Settings of products returned with variants All products with variants are returned by default Available values: version_all - returns all variants, version_main - returns only main variant. */
    returnProductsVersions: (value: string) => this;
    /** Do You wish to sum up the products in the basket as a one order? Available values: "y" - yes, "n" - no. */
    productInSumInBasket: (value: string) => this;
    /** Product type. Allowed values: "product_item" - Goods, "product_packaging" - packaging, "product_bundle" - set. "product_collection" - collection. "product_service" - service. "product_virtual" - virtual product. "product_configurable" - configurable product. */
    productType: (value: JSObject) => this;
    /** An array of menu elements */
    productMenuItems: (value: JSObject) => this;
    /** Warehouse location ID */
    productLocationId: (value: number|string) => this;
    /** Warehouse location full path Use a backslash (\) as a separator, for example: M1\Section name\Location name If location_id parameter is provided, the full warehouse location path will not be taken into account */
    productLocationTextId: (value: string) => this;
    /** Return all size attributes regardless of whether product prices are the same as the base price or if they differ from it. Available values: 1 - all size attributes will be returned; 0 - only attributes of those sizes, where the prices will be different from the base price (default value) will be returned. */
    alwaysReturnProductShopSizesAttributes: (value: Boolean) => this;
    /** Returns reservation information regardless of inventory levels */
    returnEmptyStocksWithReservation: (value: Boolean) => this;
    /** Data for operations on individual photos */
    picturesData: (value: JSObject) => this;
    /** Responsible producer code */
    responsibleProducerCode: (value: string) => this;
    /** Responsible person code */
    responsiblePersonCode: (value: string) => this;
    byMenus: (value: number|string|number[]|string[]) => this;
    byShops: (value: number|string|number[]|string[]) => this;
    /** Define range of dates and their type */
    dates: (dateFrom: DateLike, dateTo: DateLike, type: "added"|"finished"|"resumed"|"modified"|"quantity_changed"|"price_changed"|"modified_and_quantity_changed") => this;
    /** Define ordering of records */
    orderBy: (elementName: "id"|"name"|"code"|"product_sizecode"|"code_producer"|"retail_price"|"pos_price"|"vat"|"wholesale_price"|"minimal_price"|"pictures_count"|"auction_name"|"pricecomparer_name"|"version_name"|"series_name"|"category_name"|"deliverer_name"|"adding_time"|"modification_time"|"price_changed_time"|"quantity_changed_time"|"currency"|"currency_shop"|"taxcode"|"meta_title"|"meta_description"|"meta_keywords"|"suggested_price"|"observed_clients"|"observed_time"|"wishes_clients"|"wishes_time", descending: boolean) => this;
    /** Define productShops values by passing them as an array */
    shops: (values: number|string|number[]|string[]) => this;
    /** Define productParams values by passing them as an array */
    ids: (values: number|string|number[]|string[]) => this;
    /** Define producers values by passing them as an array */
    byProducers: (values: number|string|number[]|string[]) => this;
    /** Define categories values by passing them as an array */
    byCategories: (values: number|string|number[]|string[]) => this;
    /** Define productUnits values by passing them as an array */
    byUnits: (values: number|string|number[]|string[]) => this;
    /** Define productSeriesParams values by passing them as an array */
    bySeries: (values: number|string|number[]|string[]) => this;
    /** Define productWarranties values by passing them as an array */
    byWarranties: (values: number|string|number[]|string[]) => this;
    /** Define productIndexes values by passing them as an array */
    byIndexes: (values: number|string|number[]|string[]) => this;
    /** Toogle to return only main versions */
    onlyMainVersion: (onlyMain: boolean) => this;
    /** Filter by minimum and maximum price */
    byPrice: (minPrice: number, maxPrice: number, priceType: "retail_price"|"wholesale_price"|"minimal_price"|"pos_price"|"last_purchase_price") => this;
    /** Filter by availibility on any stock or selected stocks */
    inStock: (stockIds: boolean|number|string|number[]|string[]) => this;
}

export interface DeleteProductsProductsToFacebookCatalogRequest extends Gateway {
    /** You can read the Facebook Catalog ID in the Marketing & Integrations/Facebook/Facebook Product Catalog admin panel */
    facebookCatalogId: (value: number|string) => this;
    /** Shop Id */
    shopId: (value: number|string) => this;
    /** Products list. */
    products: (value: number|string|number[]|string[]) => this;
}

export interface GetProductsProductsToFacebookCatalogRequest extends Gateway {
    /** You can read the Facebook Catalog ID in the Marketing & Integrations/Facebook/Facebook Product Catalog admin panel */
    facebookCatalogId: (value: number|string) => this;
    /** Shop Id */
    shopId: (value: number|string) => this;
}

export interface PostProductsProductsToFacebookCatalogRequest extends Gateway {
    /** You can read the Facebook Catalog ID in the Marketing & Integrations/Facebook/Facebook Product Catalog admin panel */
    facebookCatalogId: (value: number|string) => this;
    /** Shop Id */
    shopId: (value: number|string) => this;
    /** Products list. */
    products: (value: number|string|number[]|string[]) => this;
}

export interface DeleteProductsProductsToPromotionRequest extends Gateway {
    /** Special offer ID */
    promotionId: (value: number|string) => this;
    /** Products list. */
    products: (value: number|string|number[]|string[]) => this;
}

export interface PostProductsProductsToPromotionRequest extends Gateway {
    /** Special offer ID */
    promotionId: (value: number|string) => this;
    /** Products list. */
    products: (value: number|string|number[]|string[]) => this;
}

export interface GetProductsQuestionsRequest extends Gateway {
    /** Question ID. */
    id: (value: number|string) => this;
    /** Product IAI code */
    productId: (value: number|string) => this;
}

export interface PutProductsQuestionsRequest extends AppendableGateway<PutProductsQuestionsRequest> {
    /** Question Board. */
    questions: (value: Array<JSObject>) => this;
    /** Question ID. */
    id: (id: number|string) => this
    /** Language of the question e.g. 'pol', 'eng'. */
    lang: (lang: string) => this
    /** Your question(base64). */
    question: (question: string) => this
    /** Content of the answer(base64). */
    answer: (answer: string) => this
    /** The date the question was created. */
    dateAdd: (dateAdd: string) => this
    /** The name and address of the host from which the question was added. */
    host: (host: string) => this
    /** Author. */
    author: (author: string) => this
    /** Stock keeping unit. */
    productIdent: (productIdent: JSObject) => this
    /** Visibility: "y" - yes, "n" - no */
    visible: (visible: 'n'|'y') => this
    /** Priority. */
    priority: (priority: number|string) => this
    /** Validate the question: "y" - yes, "n" - no */
    confirmed: (confirmed: 'n'|'y') => this
    /** Shop Id */
    shopId: (shopId: number|string) => this
    /** Date of response. */
    answerDate: (answerDate: string) => this
    /** Response author. */
    answerAuthor: (answerAuthor: string) => this
    productId: (value: number|string) => this;
}

export interface GetProductsReservationsRequest extends Gateway {
    identType: (value: 'id'|'index'|'codeExtern'|'codeProducer') => this;
    /** Products list. */
    products: (value: string|string[]) => this;
    /** Set product identifiers */
    productId: (productId: number|string|number|string|number[]|string[], type: 'id'|'index'|'codeExtern'|'codeProducer') => this;
}

export interface PostProductsRestoreRequest extends Gateway {
    /** Product IAI code */
    productId: (value: number|string) => this;
}

export interface DeleteProductsSeriesRequest extends Gateway {
    /** IDs */
    ids: (value: number|string|number[]|string[]) => this;
}

export interface GetProductsSeriesFilterRequest extends Gateway {
    /** Shop Id */
    shopId: (value: number|string) => this;
    /** Language ID (code in ISO 639-2). */
    languageId: (value: string) => this;
    /** Series Id */
    serieId: (value: number|string) => this;
}

export interface PutProductsSeriesFilterRequest extends AppendableGateway<PutProductsSeriesFilterRequest> {
    /** Shop Id */
    shopId: (value: number|string) => this;
    /** Language ID (code in ISO 639-2). */
    languageId: (value: string) => this;
    /** Series Id */
    serieId: (value: number|string) => this;
    filterForNodeIsDefault: (value: 'y'|'n') => this;
    /** Active filters. */
    filtersActive: (value: Array<JSObject>) => this;
    /** Menu filter ID. */
    filterId: (filterId: string) => this
    /** Filter name on page. */
    filterName: (filterName: string) => this
    /** Display as: "name" - text, "gfx" - graphics, "namegfx" - text and graphics. */
    filterDisplay: (filterDisplay: 'name'|'gfx'|'namegfx') => this
    /** Sort by: "y" - alfabetically, "n" - by frequency and order of occurrence of indicated parameter value in found products, "priority" - according to value sequence in parameter. */
    filterValueSort: (filterValueSort: 'y'|'n'|'priority') => this
    /** Enabled by default . */
    filterDefaultEnabled: (filterDefaultEnabled: 'y'|'n') => this
}

export interface GetProductsSeriesRequest extends PagableGateway<GetProductsSeriesRequest> {
    /** With "y" value it returns the last series modification date in YYYY-MM-DD HH:MM:SS format. */
    return_last_changed_time: (value: string) => this;
    /** IDs */
    ids: (value: number|string|number[]|string[]) => this;
    /** Names */
    names: (value: string|string[]) => this;
    /** List of languages */
    languagesIds: (value: string|string[]) => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
}

export interface PutProductsSeriesRequest extends AppendableGateway<PutProductsSeriesRequest> {
    /** Series list. */
    series: (value: Array<JSObject>) => this;
    /** Id */
    id: (id: number|string) => this
    /** Name in panel */
    nameInPanel: (nameInPanel: string) => this
    /**  */
    shopsConfigurations: (shopsConfigurations: Array<JSObject>) => this
}

export interface DeleteProductsSizesRequest extends AppendableGateway<DeleteProductsSizesRequest> {
    /** Edition mode */
    mode: (value: 'delete_by_size'|'delete_all') => this;
    /** Parameters transmitted to method */
    params: (value: Array<JSObject>) => this;
    /** Product parameters recognized by index. */
    deleteSizesIndexesData: (value: string|string[]) => this;
    /** Product IAI code */
    productId: (productId: number|string) => this
    /** List of sizes */
    sizes: (sizes: Array<JSObject>) => this
}

export interface GetProductsSizesRequest extends Gateway {
    /** Allows to change offset and number of records returned */
    page: (pagenumber: number, pageSize?: number) => this;
}

export interface PutProductsSizesRequest extends AppendableGateway<PutProductsSizesRequest> {
    /** Edition mode */
    mode: (value: 'edit'|'add'|'replace') => this;
    /** Product parameters recognized by product ID or its sizes */
    sizesProductsData: (value: Array<JSObject>) => this;
    /** Product parameters recognized by index */
    indexesData: (value: Array<JSObject>) => this;
    /** Product IAI code */
    productId: (productId: number|string) => this
    /** List of sizes */
    sizes: (sizes: Array<JSObject>) => this
}

export interface PutProductsStockQuantityRequest extends AppendableGateway<PutProductsStockQuantityRequest> {
    /** Products list. */
    products: (value: Array<JSObject>) => this;
    /** External product system code for size. */
    productSizeCodeExternal: (productSizeCodeExternal: string) => this
    /** Stock ID */
    stockId: (stockId: number|string) => this
    /** Product stock quantity */
    productSizeQuantity: (productSizeQuantity: number) => this
    /** Cost price */
    productPurchasePrice: (productPurchasePrice: number) => this
    /** Net purchase price */
    productPurchasePriceNet: (productPurchasePriceNet: number) => this
}

export interface GetProductsStocksRequest extends Gateway {
    identType: (value: 'id'|'index'|'codeExtern'|'codeProducer') => this;
    /** Products list. */
    products: (value: string|string[]) => this;
    /** Set product identifiers */
    productId: (productId: number|string|number|string|number[]|string[], type: 'id'|'index'|'codeExtern'|'codeProducer') => this;
}

export interface PutProductsStocksRequest extends AppendableGateway<PutProductsStocksRequest> {
    /** Products list. */
    products: (value: Array<JSObject>) => this;
    /**  */
    ident: (ident: JSObject) => this
    /** List of sizes */
    sizes: (sizes: Array<JSObject>) => this
    /**  */
    settings: (settings: JSObject) => this
    /** Error information. */
    error: (error: JSObject) => this
}

export interface GetProductsStrikethroughPricesRequest extends Gateway {
    identType: (value: 'id'|'index'|'codeExtern'|'codeProducer') => this;
    /** Products list. */
    products: (value: string|string[]) => this;
    /** Set product identifiers */
    productId: (productId: number|string|number|string|number[]|string[], type: 'id'|'index'|'codeExtern'|'codeProducer') => this;
}

export interface PutProductsStrikethroughPricesRequest extends AppendableGateway<PutProductsStrikethroughPricesRequest> {
    /** Products list. */
    products: (value: Array<JSObject>) => this;
    /** Identifier type. */
    ident: (ident: JSObject) => this
    /** List of sizes */
    sizes: (sizes: Array<JSObject>) => this
    /**  */
    stp_settings: (stp_settings: JSObject) => this
    /** Strikethrough price settings for the page. */
    shops: (shops: Array<JSObject>) => this
    /** Set product identifiers */
    productId: (productId: number|string, type: 'id'|'index'|'codeExtern'|'codeProducer' = 'id') => this;
    /** Set precise price */
    setPrice: (price: number, wholesale: boolean = false) => this;
    /** Set price relative to current price */
    addPrice: (value: number, wholesale: boolean = false, base: 'price' | 'price_minimal' | 'price_pos' | 'price_srp' | 'price_crossed' = 'price') => this;
    /** Set price relative to current price by percent */
    addPricePercent: (value: number, wholesale: boolean = false, base: 'price' | 'price_minimal' | 'price_pos' | 'price_srp' | 'price_crossed' = 'price') => this;
}

export interface PutProductsSupplierCodeRequest extends AppendableGateway<PutProductsSupplierCodeRequest> {
    /** Products list. */
    products: (value: Array<JSObject>) => this;
    /** Product IAI code */
    productId: (productId: number|string) => this
    /** Suppliers data */
    productDeliverers: (productDeliverers: Array<JSObject>) => this
}

export interface PutProductsSupplierProductDataRequest extends AppendableGateway<PutProductsSupplierProductDataRequest> {
    /** Products list. */
    products: (value: Array<JSObject>) => this;
    /** Product IAI code */
    productId: (productId: number|string) => this
    /** Suppliers data */
    productDeliverers: (productDeliverers: Array<JSObject>) => this
}

export interface PostProductsSynchronizationFileRequest extends Gateway {
    /** Synchronization ID. */
    synchronizationId: (value: number|string) => this;
    /** File package number. Leave blank for the first file in the package, and the API will return a generated number, which should then be transmitted and by which the API will recognize subsequent files for this package. */
    packageId: (value: number|string) => this;
    /** File Type IOF30 (full/light/categories/sizes/series/guarantees/parameters). */
    fileType: (value: string) => this;
    /** MD5 from the file avarage before base64 encoding. */
    md5Content: (value: string) => this;
    /** Offer file encoded with base64 algorithm. */
    fileContent: (value: string) => this;
    /** Unique offer name. */
    offerName: (value: string) => this;
}

export interface PutProductsSynchronizationFinishUploadRequest extends Gateway {
    /** Synchronization ID. */
    synchronizationId: (value: number|string) => this;
    /** File package number. */
    packageId: (value: number|string) => this;
    /** Total number of files in the parcel. */
    filesInPackage: (value: number|string) => this;
    /** Whether to verify the package by sparsifying files and preparing requests. It may take a few minutes to answer. */
    verifyFiles: (value: Boolean) => this;
}

export interface PostRefundsAddAutomaticRefundRequest extends Gateway {
    /** Source type.: "return" "rma". */
    sourceType: (value: 'return'|'rma') => this;
    /** Source ID. */
    sourceId: (value: number|string) => this;
}

export interface PostRefundsAddAutomaticRefundForOrderRequest extends Gateway {
    /** Source ID. */
    sourceId: (value: number|string) => this;
    /** Amount. */
    refundValue: (value: Number) => this;
    /** Payment ID. */
    paymentId: (value: number|string) => this;
    /** Payment currency. */
    refundCurrency: (value: string) => this;
}

export interface PostRefundsAddManualRefundRequest extends Gateway {
    /** Source type.: "order" "return" "rma". */
    sourceType: (value: 'order'|'return'|'rma') => this;
    /** Source ID. */
    sourceId: (value: number|string) => this;
    /** Amount. */
    refundValue: (value: Number) => this;
    /** Payment currency. */
    refundCurrency: (value: string) => this;
    refundDetails: (value: JSObject) => this;
}

export interface PutRefundsCancelRefundRequest extends Gateway {
    /** Source type.: "order" "return" "rma". */
    sourceType: (value: 'order'|'return'|'rma') => this;
    /** Source ID. */
    sourceId: (value: number|string) => this;
    /** Payment ID. */
    paymentId: (value: string) => this;
}

export interface PutRefundsConfirmRefundRequest extends Gateway {
    /** Source type.: "order" , "return" "rma". */
    sourceType: (value: 'order'|'return'|'rma') => this;
    /** Source ID. */
    sourceId: (value: number|string) => this;
    /** Payment ID. */
    paymentId: (value: number|string) => this;
}

export interface GetRefundsGetPossibleAutoRefundsRequest extends Gateway {
    /** Source ID */
    sourceId: (value: number|string) => this;
    /** Source type. */
    sourceType: (value: 'order'|'return'|'rma') => this;
}

export interface GetRefundsGetRefundStatusRequest extends Gateway {
    /** Source ID */
    sourceId: (value: number|string) => this;
    /** Payment ID. */
    paymentId: (value: number|string) => this;
    /** Source type. */
    sourceType: (value: 'order'|'return'|'rma') => this;
}

export interface GetRefundsRetrieveRefundsListRequest extends PagableGateway<GetRefundsRetrieveRefundsListRequest> {
    /** Source type. */
    sourceType: (value: 'order'|'return'|'rma'|'all') => this;
    /** Page number, first 1 */
    resultsPage: (value: number|string) => this;
    /** Limit results, between 1 - 100 */
    resultsLimit: (value: number|string) => this;
}

export interface PutRefundsUpdateRefundRequest extends Gateway {
    /** Source type.: "order" , "return" "rma". */
    sourceType: (value: 'order'|'return'|'rma') => this;
    /** Source ID. */
    sourceId: (value: number|string) => this;
    /** Payment ID. */
    paymentId: (value: string) => this;
    /** Amount. */
    refundValue: (value: Number) => this;
    /** Payment currency. */
    refundCurrency: (value: string) => this;
}

export interface GetResponsibilityEntitiesRequest extends PagableGateway<GetResponsibilityEntitiesRequest> {
    /** List of codes */
    code: (value: string|string[]) => this;
    /** Type of entity */
    type: (value: string) => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
}

export interface PostResponsibilityEntitiesRequest extends AppendableGateway<PostResponsibilityEntitiesRequest> {
    entities: (value: Array<JSObject>) => this;
    /** Type of entity */
    type: (value: 'producer'|'person') => this;
    /** Identificator of the entity. */
    id: (id: number|string) => this
    /** Short name/code. */
    code: (code: string) => this
    /** Full name. */
    name: (name: string) => this
    /** E-mail address. */
    mail: (mail: string) => this
    /** Street. */
    street: (street: string) => this
    /** Building number. */
    number: (number: string) => this
    /** Apartment number. */
    subnumber: (subnumber: string) => this
    /** Zipcode. */
    zipcode: (zipcode: string) => this
    /** City. */
    city: (city: string) => this
    /** 2-letter ISO country code. */
    country: (country: string) => this
    /** Phone number. */
    phone: (phone: string) => this
    /** Additional description. */
    description: (description: string) => this
}

export interface PutResponsibilityEntitiesRequest extends AppendableGateway<PutResponsibilityEntitiesRequest> {
    entities: (value: Array<JSObject>) => this;
    /** Type of entity */
    type: (value: 'producer'|'person') => this;
    /** Identificator of the entity. */
    id: (id: number|string) => this
    /** Short name/code. */
    code: (code: string) => this
    /** Full name. */
    name: (name: string) => this
    /** E-mail address. */
    mail: (mail: string) => this
    /** Street. */
    street: (street: string) => this
    /** Building number. */
    number: (number: string) => this
    /** Apartment number. */
    subnumber: (subnumber: string) => this
    /** Zipcode. */
    zipcode: (zipcode: string) => this
    /** City. */
    city: (city: string) => this
    /** 2-letter ISO country code. */
    country: (country: string) => this
    /** Phone number. */
    phone: (phone: string) => this
    /** Additional description. */
    description: (description: string) => this
}

export interface DeleteResponsibilityEntitiesRequest extends Gateway {
    /** List of codes */
    code: (value: string|string[]) => this;
    /** Type of entity */
    type: (value: string) => this;
}

export interface GetReturnsRequest extends PagableGateway<GetReturnsRequest,GetReturnsResponse> {
    /** Search by the order serial number to which a return was added. */
    order_sn: (value: number|string) => this;
    /** Search by return ID. */
    return_id: (value: number|string) => this;
    /** Search by a return shipment number from a customer to the shop . */
    return_shipping_number: (value: string) => this;
    /** Date range. */
    range: (value: JSObject) => this;
    /** Number of results on page. */
    results_limit: (value: number|string) => this;
    /** Result page number. */
    results_page: (value: number|string) => this;
    /** 1 - Return not handled, 2 - Return accepted, 3 - Return not accepted, 13 - Return canceled by the customer, 14 - Return canceled, 15 - Resend the order, 16 - Abort resending order, 17 - A customer generated a return - it will be delivered personally, 18 - A customer generated a return - it will be sent by the customer. */
    status: (value: number|string) => this;
    /** Search by return ID. */
    return_ids: (value: number|string|number[]|string[]) => this;
    /** Search by ID of a stock to which a return is sent. */
    stock_id: (value: number|string) => this;
    /** Return a set as its constituent products */
    bundleAsProducts: (value: Boolean) => this;
    /** Define range of dates and their type */
    dates: (dateFrom: DateLike, dateTo: DateLike, type: "date_add"|"date_end") => this;
}

export interface PostReturnsRequest extends AppendableGateway<PostReturnsRequest> {
    /** Order serial number */
    order_sn: (value: number|string) => this;
    stock_id: (value: number|string) => this;
    /** Products list. */
    products: (value: Array<JSObject>) => this;
    status: (value: number|string) => this;
    client_received: (value: Boolean) => this;
    change_status: (value: Boolean) => this;
    courier_id: (value: number|string) => this;
    return_operator: (value: string) => this;
    tryCorrectInvoice: (value: Boolean) => this;
    include_shipping_cost: (value: string) => this;
    additional_payment_cost: (value: string) => this;
    emptyReturn: (value: 'n'|'y') => this;
    /**  */
    id: (id: number|string) => this
    /**  */
    size: (size: string) => this
    /**  */
    quantity: (quantity: number) => this
    /** Price. */
    price: (price: number) => this
    /**  */
    serialNumbers: (serialNumbers: string|string[]) => this
    /** Additional information. */
    productOrderAdditional: (productOrderAdditional: string) => this
}

export interface PutReturnsRequest extends AppendableGateway<PutReturnsRequest> {
    returns: (value: Array<JSObject>) => this;
    /**  */
    id: (id: number|string) => this
    /**  */
    status: (status: number|string) => this
    /** Flag informing on order registration or completion in external program through API. Allowed values. "none" - order was not registered in external program, "registered" - order was registered in external program, "realized" - order was completed in external program, "registered_pos" - order was registered in external program, "realized_pos" - order was completed in external program. */
    apiFlag: (apiFlag: JSObject) => this
    /** Products list. */
    products: (products: Array<JSObject>) => this
    /**  */
    userNote: (userNote: string) => this
    /** Notes from customer. */
    clientNote: (clientNote: string) => this
    /**  */
    tryCorrectInvoice: (tryCorrectInvoice: boolean) => this
}

export interface PutReturnsSerialNumberRequest extends AppendableGateway<PutReturnsSerialNumberRequest> {
    /** Return number. */
    return_id: (value: number|string) => this;
    /** Products list. */
    products: (value: Array<JSObject>) => this;
    /** Product ID. */
    id: (id: number|string) => this
    /** Size ID. */
    size: (size: string) => this
    /**  */
    serialNumbers: (serialNumbers: string|string[]) => this
}

export interface GetReturnsStatusesRequest extends Gateway {}

export interface GetRmaRequest extends PagableGateway<GetRmaRequest,GetRmaResponse> {
    rmaIds: (value: number|string|number[]|string[]) => this;
    /** Stock ID */
    stockId: (value: number|string) => this;
    /** Login of the user handling the complaint */
    operatorLogin: (value: string) => this;
    /** Unique client's number. */
    clientId: (value: string) => this;
    /** Complaint creation date in the YYYY-MM-DD format */
    creationDate: (value: JSObject) => this;
    /** Complaint modification date in the YYYY-MM-DD format */
    modificationDate: (value: JSObject) => this;
    /** Complaint closing date in the YYYY-MM-DD format */
    endDate: (value: JSObject) => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
    /** Define range of dates */
    created: (dateFrom: DateLike, dateTo: DateLike) => this;
    /** Define range of dates */
    modified: (dateFrom: DateLike, dateTo: DateLike) => this;
    /** Define range of dates */
    ended: (dateFrom: DateLike, dateTo: DateLike) => this;
}

export interface PutRmaRequest extends AppendableGateway<PutRmaRequest> {
    /** Complaints. */
    rmas: (value: Array<JSObject>) => this;
    /** Complaint id. */
    rmaId: (rmaId: number|string) => this
    /** Claim status. Available values: 15 - Complaint not confirmed by the shop service, 17 - The complaint has been cancelled, 18 - Complaint canceled by the customer, 14 - Complaint didn't arrive, 20 - Complaint not handled, 22 - Complaint rejected - no fault was found, 23 - Complaint rejected - the warranty period has expired, 24 - Complaint rejected - defect caused by improper use, 19 - Complaint confirmed, 28 - Complaint is being considered - repair completed, 5 - Complaint is being considered - Product sent to the producer , 4 - Complaint is being considered - Product was sent for testing, 6 - Complaint is being considered - Repair in progress, 29 - Complaint is being considered - the complaint requires additional information from the customer, 7 - Complaint adjusted negatively - no fault was found, 9 - Complaint adjusted negatively - the warranty period has expired, 30 - Complaint adjusted negatively - return shipment sent to the customer, 8 - Complaint adjusted negatively - defect caused by improper use, 25 - Complaint handled positively - return shipment sent to the customer, 12 - Complaint handled positively - replacement for a new product, 13 - Complaint handled positively - replacement for a different product, 26 - Complaint handled positively - a new item was shipped without waiting for the original one, 27 - Complaint handled positively - the recipient's data change on the sales document, 10 - Complaint handled positively - Refund - payment processing, 11 - Complaint handled positively - repair completed - payout made, 31 - Complaint handled positively - Awaiting correction invoice confirmation, 34 - Complaint handled positively - Refund - preparing correction invoice */
    rmaStatusId: (rmaStatusId: number|string) => this
    /** Customer correspondence. */
    rmaChat: (rmaChat: Array<JSObject>) => this
}

export interface GetRmaStatusesRequest extends Gateway {}

export interface GetShopsCurrenciesRequest extends Gateway {}

export interface GetShopsLanguagesRequest extends Gateway {}

export interface DeleteSizechartsRequest extends Gateway {
    /** #!identyfikatory!# */
    ids: (value: number|string|number[]|string[]) => this;
}

export interface GetSizechartsRequest extends PagableGateway<GetSizechartsRequest,GetSizechartsResponse> {
    /** IDs */
    ids: (value: number|string|number[]|string[]) => this;
    /** Names of size charts */
    names: (value: string|string[]) => this;
    /** List of languages */
    languages: (value: string|string[]) => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
}

export interface PutSizechartsRequest extends AppendableGateway<PutSizechartsRequest> {
    sizeCharts: (value: Array<JSObject>) => this;
    /** Id */
    id: (id: number|string) => this
    /** Name in panel */
    nameInPanel: (nameInPanel: string) => this
    /** Display mode */
    displayMode: (displayMode: 'single'|'all') => this
    /**  */
    languagesData: (languagesData: Array<JSObject>) => this
}

export interface GetSizesRequest extends Gateway {
    /** When the value is 'y', the last size modification date is returned, formatted as YYYY-MM-DD HH-MM-SS. */
    return_last_changed_time: (value: string) => this;
}

export interface PutSizesRequest extends AppendableGateway<PutSizesRequest> {
    /** Size table. */
    sizes: (value: Array<JSObject>) => this;
    /** Error code. */
    faultCode: (faultCode: number|string) => this
    /** Error description. */
    faultString: (faultString: string) => this
    /** Size group ID. */
    group_id: (group_id: number|string) => this
    /** Size identifier. */
    id: (id: string) => this
    /** Category plural name. */
    name: (name: string) => this
    /** Size description. */
    description: (description: string) => this
    /** Operation type: add, edit, del */
    operation: (operation: string) => this
    /**  */
    lang_data: (lang_data: Array<JSObject>) => this
}

export interface GetSnippetsCampaignRequest extends PagableGateway<GetSnippetsCampaignRequest> {
    /** List of shop identifiers */
    shopId: (value: number|string|number[]|string[]) => this;
    /** List of identifiers */
    id: (value: number|string|number[]|string[]) => this;
    /** Whether to skip the return of deleted campaigns. */
    omitDeleted: (value: 'y'|'n') => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
}

export interface PostSnippetsCampaignRequest extends AppendableGateway<PostSnippetsCampaignRequest> {
    campaigns: (value: Array<JSObject>) => this;
    /** undefined */
    id: (id: number|string) => this
    /** Snippet campaign name */
    name: (name: string) => this
    /** Snippet campaign internal description */
    description: (description: string) => this
    /** Shop ids where code snippets are active */
    shop: (shop: number|string|number[]|string[]) => this
    /** Whether the snippet is active */
    active: (active: 'y'|'n') => this
    /** Snippet order. */
    order: (order: number|string) => this
    /** undefined */
    configVariables: (configVariables: Array<JSObject>) => this
}

export interface PutSnippetsCampaignRequest extends AppendableGateway<PutSnippetsCampaignRequest> {
    campaigns: (value: Array<JSObject>) => this;
    /** Snippet campaign id */
    id: (id: number|string) => this
    /** Snippet campaign name */
    name: (name: string) => this
    /** Snippet campaign internal description */
    description: (description: string) => this
    /** Shop ids where code snippets are active */
    shop: (shop: number|string|number[]|string[]) => this
    /** Whether the snippet is active */
    active: (active: 'y'|'n') => this
    /** Snippet order. */
    order: (order: number|string) => this
    /** undefined */
    configVariables: (configVariables: Array<JSObject>) => this
}

export interface DeleteSnippetsCampaignRequest extends Gateway {
    /** List of identifiers */
    id: (value: number|string|number[]|string[]) => this;
}

export interface GetSnippetsCookiesRequest extends PagableGateway<GetSnippetsCookiesRequest> {
    /** List of identifiers for specific cookies */
    id: (value: number|string|number[]|string[]) => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
}

export interface PostSnippetsCookiesRequest extends AppendableGateway<PostSnippetsCookiesRequest> {
    cookies: (value: Array<JSObject>) => this;
    /** undefined */
    id: (id: number|string) => this
    /** Id of the snippet code. */
    snippetId: (snippetId: number|string) => this
    /** Name of the cookie vendor. */
    deliverer: (deliverer: string) => this
    /** Category of the cookie */
    category: (category: 'analytics'|'marketing'|'functional') => this
    /** Cookie description for each language. */
    description: (description: Array<JSObject>) => this
    /** Name of the cookie. */
    name: (name: string) => this
    /** Type of the cookie */
    type: (type: 'cookie'|'pixel'|'localstorage') => this
    /** Cookie lifetime mode */
    lifeTimeType: (lifeTimeType: 'temporary'|'days'|'minutes') => this
    /** Cookie lifetime */
    lifeTime: (lifeTime: number|string) => this
}

export interface PutSnippetsCookiesRequest extends AppendableGateway<PutSnippetsCookiesRequest> {
    cookies: (value: Array<JSObject>) => this;
    /** undefined */
    id: (id: number|string) => this
    /** Id of the snippet code. */
    snippetId: (snippetId: number|string) => this
    /** Name of the cookie vendor. */
    deliverer: (deliverer: string) => this
    /** Category of the cookie */
    category: (category: 'analytics'|'marketing'|'functional') => this
    /** Cookie description for each language. */
    description: (description: Array<JSObject>) => this
    /** Name of the cookie. */
    name: (name: string) => this
    /** Type of the cookie */
    type: (type: 'cookie'|'pixel'|'localstorage') => this
    /** Cookie lifetime mode */
    lifeTimeType: (lifeTimeType: 'temporary'|'days'|'minutes') => this
    /** Cookie lifetime */
    lifeTime: (lifeTime: number|string) => this
}

export interface DeleteSnippetsCookiesRequest extends Gateway {
    /** List of cookie identifiers */
    id: (value: number|string|number[]|string[]) => this;
}

export interface GetSnippetsRequest extends PagableGateway<GetSnippetsRequest> {
    /** List of campaign identifiers */
    campaign: (value: number|string|number[]|string[]) => this;
    /** List of identifiers */
    id: (value: number|string|number[]|string[]) => this;
    /** Whether to skip the return of deleted campaigns. */
    omitDeleted: (value: 'y'|'n') => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
}

export interface PostSnippetsRequest extends AppendableGateway<PostSnippetsRequest> {
    snippets: (value: Array<JSObject>) => this;
    /** undefined */
    id: (id: number|string) => this
    /** The snippet name. */
    name: (name: string) => this
    /** Whether the snippet is active. */
    active: (active: 'y'|'n') => this
    /** Snippet campaign id */
    campaign: (campaign: number|string) => this
    /** undefined */
    dateBegin: (dateBegin: JSObject) => this
    /** Filter to control snippet activation. */
    dateEnd: (dateEnd: JSObject) => this
    /** Code snippet type. */
    type: (type: 'html'|'javascript'|'cgi') => this
    /** Whether to load contents asynchronously via XHR request. */
    useAjax: (useAjax: 'y'|'n') => this
    /** Url. */
    link: (link: string) => this
    /** Content waiting time (timeout) in seconds. */
    timeout: (timeout: number|string) => this
    /** The place where the code snippet is loaded. */
    zone: (zone: 'head'|'bodybegin'|'bodyend') => this
    /** The order in which the code snippet will be displayed. */
    order: (order: number|string) => this
    /** Snippet content for each language. */
    body: (body: Array<JSObject>) => this
    /** undefined */
    display: (display: JSObject) => this
    /** undefined */
    pages: (pages: JSObject) => this
    /** Snippet entry source filter. */
    sources: (sources: JSObject) => this
}

export interface PutSnippetsRequest extends AppendableGateway<PutSnippetsRequest> {
    snippets: (value: Array<JSObject>) => this;
    /** undefined */
    id: (id: number|string) => this
    /** The snippet name. */
    name: (name: string) => this
    /** Whether the snippet is active. */
    active: (active: 'y'|'n') => this
    /** Snippet campaign id */
    campaign: (campaign: number|string) => this
    /** undefined */
    dateBegin: (dateBegin: JSObject) => this
    /** Filter to control snippet activation. */
    dateEnd: (dateEnd: JSObject) => this
    /** Code snippet type. */
    type: (type: 'html'|'javascript'|'cgi') => this
    /** Whether to load contents asynchronously via XHR request. */
    useAjax: (useAjax: 'y'|'n') => this
    /** Url. */
    link: (link: string) => this
    /** Content waiting time (timeout) in seconds. */
    timeout: (timeout: number|string) => this
    /** The place where the code snippet is loaded. */
    zone: (zone: 'head'|'bodybegin'|'bodyend') => this
    /** The order in which the code snippet will be displayed. */
    order: (order: number|string) => this
    /** Snippet content for each language. */
    body: (body: Array<JSObject>) => this
    /** undefined */
    display: (display: JSObject) => this
    /** undefined */
    pages: (pages: JSObject) => this
    /** Snippet entry source filter. */
    sources: (sources: JSObject) => this
}

export interface DeleteSnippetsRequest extends Gateway {
    /** List of identifiers */
    id: (value: number|string|number[]|string[]) => this;
}

export interface PostSubscriptionsAddProductRequest extends Gateway {
    /** Id of subscription */
    subscriptionId: (value: number|string) => this;
    /** Collection of products to edit */
    products: (value: Array<JSObject>) => this;
}

export interface PostSubscriptionsChangeDeliveryDatesRequest extends Gateway {
    /** Subscription ids */
    subscriptionIds: (value: number|string|number[]|string[]) => this;
    /** Settings that determinates if price should be updated automaticly */
    upcomingDeliveryDate: (value: string) => this;
    /** A setting that determines whether to also change the date of the next delivery. */
    changeNextDeliveryDate: (value: Boolean) => this;
}

export interface PostSubscriptionsChangePriceAutoUpdateRequest extends Gateway {
    /** Subscription ids */
    subscriptionIds: (value: number|string|number[]|string[]) => this;
    /** Settings that determinates if price should be updated automaticly */
    autoPriceUpdate: (value: Boolean) => this;
}

export interface PostSubscriptionsChangeStatusRequest extends Gateway {
    /** Subscription ids */
    subscriptionIds: (value: number|string|number[]|string[]) => this;
    /** Status to set */
    subscriptionStatus: (value: 'active'|'hold'|'nonpayment'|'finished') => this;
    /** Option allowing sending e-mail after status change */
    sendMailAfterStatusChange: (value: Boolean) => this;
    /** Optian allowing sending SMS after status change */
    sendSMSAfterStatusChange: (value: Boolean) => this;
}

export interface PostSubscriptionsDeleteProductRequest extends Gateway {
    /** Id of subscription */
    subscriptionId: (value: number|string) => this;
    /** Ids in products table to delete */
    idsToDelete: (value: number|string|number[]|string[]) => this;
}

export interface PostSubscriptionsEditRequest extends Gateway {
    /** Subscription */
    subscriptionModels: (value: Array<JSObject>) => this;
}

export interface PostSubscriptionsEditProductRequest extends Gateway {
    /** Id of subscription */
    subscriptionId: (value: number|string) => this;
    /** Collection of products to edit */
    products: (value: Array<JSObject>) => this;
}

export interface PostSubscriptionsItemsListRequest extends Gateway {
    filter: (value: JSObject) => this;
    orderBy: (value: JSObject) => this;
    /** Pagination settings. */
    pagination: (value: JSObject) => this;
}

export interface PostSubscriptionsListViewFetchIdsRequest extends Gateway {
    /** Subscription IDs */
    ids: (value: number|string|number[]|string[]) => this;
    /** Subscription statuses */
    statuses: (value: string|string[]) => this;
    /** Client ID */
    clientId: (value: number|string) => this;
    /** Shop ID */
    shopId: (value: number|string) => this;
    /** Price change mode */
    priceChangeMode: (value: 'auto'|'manual') => this;
    /** A universal structure for time intervals. */
    createDateTime: (value: JSObject) => this;
    /** A universal structure for time intervals. */
    finishDateTime: (value: JSObject) => this;
    /** Universal structure for intervals. */
    upcomingDeliveryDate: (value: JSObject) => this;
    /** Universal structure for intervals. */
    nextDeliveryDate: (value: JSObject) => this;
    /** Text search phrase */
    textSearch: (value: string) => this;
}

export interface PostSubscriptionsListViewListRequest extends Gateway {
    select: (value: JSObject) => this;
    /** Filters that limit the result of a customer query. */
    filter: (value: JSObject) => this;
    /** Order by settings. */
    orderBy: (value: JSObject) => this;
    /** Pagination settings. */
    pagination: (value: JSObject) => this;
}

export interface PostSubscriptionsSetRebateCodeRequest extends Gateway {
    /** Subscription ID */
    id: (value: number|string) => this;
    /** Code value */
    code: (value: string) => this;
}

export interface PostSubscriptionsUnsetRebateCodeRequest extends Gateway {
    /** Subscription ID */
    id: (value: number|string) => this;
}

export interface GetSystemConfigRequest extends Gateway<GetConfigResponse> {}

export interface PutSystemConfigRequest extends Gateway {
    /** Panel settings */
    panelSettings: (value: JSObject) => this;
}

export interface GetSystemCurrenciesRequest extends Gateway {
    /** Currency symbol in ISO 4217 format. */
    symbol: (value: string) => this;
    /** Date in format YYYY-MM-DD-HH MM:SS. */
    date: (value: string) => this;
}

export interface PutSystemCurrenciesRequest extends AppendableGateway<PutSystemCurrenciesRequest> {
    currencies: (value: Array<JSObject>) => this;
    /** Currency code in ISO 4217 standard. */
    id: (id: string) => this
    /** Currency exchange rate. Maximal value is 10000. */
    rate: (rate: number) => this
    /** Currency smaller unit. */
    scale: (scale: number|string) => this
}

export interface GetSystemProcessesAutomationRequest extends Gateway {
    /** Shop Id */
    shopId: (value: number|string) => this;
}

export interface PutSystemProcessesAutomationRequest extends Gateway {
    /** Shop Id */
    shopId: (value: number|string) => this;
    /** Orders. */
    orders: (value: JSObject) => this;
}

export interface GetSystemServerLoadRequest extends Gateway {}

export interface GetSystemServerTimeRequest extends Gateway {}

export interface GetSystemShopsDataRequest extends Gateway<GetShopsDataResponse> {}

export interface GetSystemUnitsRequest extends Gateway {
    /** List of languages */
    languagesIds: (value: string|string[]) => this;
}

export interface PutSystemUnitsRequest extends AppendableGateway<PutSystemUnitsRequest> {
    units: (value: Array<JSObject>) => this;
    /** #!IdentyfikatorJednostki!# */
    id: (id: number|string) => this
    /** Name in panel (limit of 30 characters) */
    nameInPanel: (nameInPanel: string) => this
    /** Accuracy (number of places after comma) */
    precisionUnit: (precisionUnit: number|string) => this
    /** Visibility */
    visible: (visible: boolean) => this
    /** Unit names */
    descriptions: (descriptions: Array<JSObject>) => this
}

export interface GetSystemUsersRequest extends Gateway {
    /** User type. List of options "all" - All users, "active" - Only active users */
    userType: (value: 'all'|'active') => this;
}

export interface PutVouchersBlockRequest extends AppendableGateway<PutVouchersBlockRequest> {
    vouchers: (value: Array<JSObject>) => this;
    /** Voucher ID */
    id: (id: number|string) => this
    /** Number. */
    number: (number: string) => this
}

export interface GetVouchersTypesRequest extends PagableGateway<GetVouchersTypesRequest> {
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
}

export interface PutVouchersUnblockRequest extends AppendableGateway<PutVouchersUnblockRequest> {
    vouchers: (value: Array<JSObject>) => this;
    /** Voucher ID */
    id: (id: number|string) => this
    /** Number. */
    number: (number: string) => this
}

export interface DeleteVouchersRequest extends AppendableGateway<DeleteVouchersRequest> {
    vouchers: (value: Array<JSObject>) => this;
    /** Voucher ID */
    id: (id: number|string) => this
    /** Number. */
    number: (number: string) => this
}

export interface GetVouchersRequest extends PagableGateway<GetVouchersRequest> {
    vouchers: (value: Array<JSObject>) => this;
    /** Discount code campaign ID */
    voucherTypeId: (value: number|string) => this;
    /** Name. */
    name: (value: string) => this;
    /** Status */
    status: (value: 'all'|'used'|'unused'|'unverified') => this;
    /** Generated in the affiliate program */
    generetedFromAffiliateProgram: (value: 'all'|'y'|'n') => this;
    /** Notes contain */
    noteContain: (value: string) => this;
    /** Value from */
    balanceFrom: (value: Number) => this;
    /** Value to */
    balanceTo: (value: Number) => this;
    /** Expiration date from */
    expirationDateFrom: (value: string) => this;
    /** Expiration date to */
    expirationDateTo: (value: string) => this;
    /** Created from */
    issueDateFrom: (value: string) => this;
    /** Created to */
    issueDateTo: (value: string) => this;
    /** To be used from */
    usageDateFrom: (value: string) => this;
    /** To be used to */
    usageDateTo: (value: string) => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
    /** Define range of dates */
    issued: (dateFrom: DateLike, dateTo: DateLike) => this;
    /** Define range of dates */
    expires: (dateFrom: DateLike, dateTo: DateLike) => this;
    /** Define range of dates */
    used: (dateFrom: DateLike, dateTo: DateLike) => this;
    /** Define vouchers values by passing them as an array */
    ids: (values: number|string|number[]|string[]) => this;
    /** Define vouchers values by passing them as an array */
    numbers: (values: number|string|number[]|string[]) => this;
}

export interface PostVouchersRequest extends AppendableGateway<PostVouchersRequest> {
    /** List of vouchers to add */
    vouchers: (value: Array<JSObject>) => this;
    /** Gift voucher type id */
    typeId: (typeId: number|string) => this
    /** Number. */
    number: (number: string) => this
    /** Name. */
    name: (name: string) => this
    /** Voucher expiration date */
    expirationDate: (expirationDate: string) => this
    /** Voucher balance */
    balance: (balance: JSObject) => this
    /** List of shops the voucher is active in */
    shops: (shops: number|string|number[]|string[]) => this
    /**  */
    note: (note: string) => this
}

export interface PutVouchersRequest extends AppendableGateway<PutVouchersRequest> {
    /** List of vouchers to edit */
    vouchers: (value: Array<JSObject>) => this;
    /** Voucher ID */
    id: (id: number|string) => this
    /** Number. */
    number: (number: string) => this
    /** Name. */
    name: (name: string) => this
    /** Voucher expiration date */
    expirationDate: (expirationDate: string) => this
    /** Balance operation type, possible values: - set - balance positioning of funds, - add - add funds to balance, - subtract - subtract funds from balance. */
    balanceOperationType: (balanceOperationType: 'set'|'add'|'subtract') => this
    /** Voucher balance */
    balance: (balance: JSObject) => this
    /** List of shops the voucher is active in */
    shops: (shops: number|string|number[]|string[]) => this
    /**  */
    note: (note: string) => this
    /** Status, possible values: - used - used, - unused - unused, */
    status: (status: 'used'|'unused') => this
}

export interface GetWarrantiesCountTotalRequest extends Gateway {
    warranty_ids: (value: string|string[]) => this;
}

export interface PutWarrantiesLanguageDataRequest extends AppendableGateway<PutWarrantiesLanguageDataRequest> {
    lang_data: (value: Array<JSObject>) => this;
    /** Warranty ID (numeric or text based). */
    warranty_id: (warranty_id: string) => this
    /**  */
    lang: (lang: Array<JSObject>) => this
}

export interface DeleteWarrantiesRequest extends Gateway {
    warranty_ids: (value: string|string[]) => this;
}

export interface GetWarrantiesRequest extends PagableGateway<GetWarrantiesRequest,GetWarrantiesResponse> {
    warranty_ids: (value: string|string[]) => this;
    /** Number of results on page. */
    results_limit: (value: number|string) => this;
    /** Result page number. */
    results_page: (value: number|string) => this;
    results_order: (value: JSObject) => this;
}

export interface PostWarrantiesRequest extends AppendableGateway<PostWarrantiesRequest> {
    warranties: (value: Array<JSObject>) => this;
    /** Name. */
    name: (name: string) => this
    /**  */
    type: (type: 'seller'|'producer') => this
    /** Warranty time. Default value 12. */
    period: (period: number|string) => this
    /** Name of warranty. */
    shopname: (shopname: JSObject) => this
    /** Warranty description. */
    description: (description: JSObject) => this
}

export interface PutWarrantiesRequest extends AppendableGateway<PutWarrantiesRequest> {
    warranties: (value: Array<JSObject>) => this;
    /** Warranty ID (numeric or text based). */
    id: (id: string) => this
    /** Name. */
    name: (name: string) => this
    /**  */
    type: (type: 'seller'|'producer') => this
    /** Warranty time. Default value 12. */
    period: (period: number|string) => this
}

export interface GetWmsLocationsRequest extends PagableGateway<GetWmsLocationsRequest,GetLocationsResponse> {
    /** Warehouse location ID */
    locationId: (value: number|string) => this;
    /** Storage location code */
    locationCode: (value: string) => this;
    /** Stock ID */
    stockId: (value: number|string) => this;
    /** Elements to be returned by the endpoint. By default all elements are returned. Available values: locationName, locationPath, locationCode, stockId, products */
    returnElements: (value: string|string[]) => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
}

export interface PutWmsStocksdocumentsAcceptMMRequest extends Gateway {
    /** Document identifier. */
    id: (value: number|string) => this;
}

export interface PutWmsStocksdocumentsCloseRequest extends Gateway {
    type: (value: 'pz'|'pw'|'px'|'rx'|'rw'|'mm') => this;
    /** Document identifier. */
    id: (value: number|string) => this;
}

export interface DeleteWmsStocksdocumentsDocumentsRequest extends Gateway {
    type: (value: 'pz'|'pw'|'px'|'rx'|'rw'|'mm') => this;
    /** Document identifier. */
    id: (value: number|string) => this;
}

export interface GetWmsStocksdocumentsDocumentsRequest extends PagableGateway<GetWmsStocksdocumentsDocumentsRequest,GetStocksdocumentsDocumentsResponse> {
    /** Document type. */
    stockDocumentType: (value: 'pz'|'pw'|'px'|'rx'|'rw'|'wz'|'mm'|'zw') => this;
    /** Document status. */
    stockDocumentStatus: (value: 'open'|'on_the_way'|'close') => this;
    /** Document identifier. */
    stockDocumentsIds: (value: number|string|number[]|string[]) => this;
    /** Document number. */
    stockDocumentsNumbers: (value: string|string[]) => this;
    /** Products available in presales. */
    productsInPreorder: (value: 'y'|'n') => this;
    /** Date range */
    dateRange: (value: JSObject) => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
    /** Define range of dates and their type */
    dates: (dateFrom: DateLike, dateTo: DateLike, type: "open"|"modify"|"close"|"stockOperation") => this;
}

export interface PostWmsStocksdocumentsDocumentsRequest extends Gateway {
    type: (value: 'pz'|'pw'|'px'|'rx'|'rw'|'mm') => this;
    /** Target warehouse ID. The list of available warehouses can be downloaded via the method <a href = "en/shop/api/?action=method&function=systemconfig&method=get">#get</a> in gateway <a href = "en/shop/api/?action=documentation&function=systemconfig">SystemConfig</a>. */
    stockId: (value: number|string) => this;
    /** Document number. */
    stockDocumentNumber: (value: string) => this;
    /** Source warehouse ID. The list of available warehouses can be downloaded via the method <a href = "en/shop/api/?action=method&function=systemconfig&method=get">#get</a> in gateway <a href = "en/shop/api/?action=documentation&function=systemconfig">SystemConfig</a>. */
    stockSourceId: (value: number|string) => this;
    note: (value: string) => this;
    /** Products available in presales. Available values: "y" - yes, "n" - no. */
    productsInPreorder: (value: 'y'|'n') => this;
    /** Supplier ID. */
    delivererId: (value: number|string) => this;
    /** Type of purchase document. Available values: "national_VAT_invoice" - National VAT invoice, "other_purchase_document" - Other purchase document, "invoice_without_VAT" - Invoice without VAT (EU), "imports_from_outside_the_EU" - Import from outside EU. */
    wnt: (value: 'national_VAT_invoice'|'other_purchase_document'|'invoice_without_VAT'|'imports_from_outside_the_EU') => this;
    /** Issue date of purchase document. Correct format is yyyy-mm-dd, e.g. 2007-12-31.. */
    saleDocumentCreationDate: (value: string) => this;
    /** Planned date of acceptance of delivery. Correct format is yyyy-mm-dd, e.g. 2007-12-31. Requires parameter: "confirmed=on_the_way". */
    deliveryOnTheWayPlannedDeliveryDate: (value: string) => this;
    /** Document status. Available values: "open" - open, "on_the_way" - on the way. */
    confirmed: (value: 'open'|'on_the_way') => this;
    /** Purchase price currency, e.g. PLN, USD, GBP */
    currencyForPurchasePrice: (value: string) => this;
    /** Settlement by prices. Available values: "brutto" - Gross value, "netto" - Net value */
    priceType: (value: 'brutto'|'netto') => this;
    /** Methods of stock level correction. Available values: "fifo" - first-in, first-out (FIFO), "lifo" - last-in, first-out (LIFO) */
    queueType: (value: 'fifo'|'lifo') => this;
}

export interface PutWmsStocksdocumentsDocumentsRequest extends Gateway {
    /** Document identifier. */
    stockDocumentId: (value: number|string) => this;
    /** Document type. Available values: "pz" - goods received note (GRN), "pw" - internal delivery note (IDN), "px" - goods received correction note (GRX), "rx" - goods despatch note (GRN) , "rw" - goods issued note (GIN), "mm" - inter-warehouse transfer. */
    stockDocumentType: (value: 'pz'|'pw'|'px'|'rx'|'rw'|'mm') => this;
    /** Number of purchase document */
    stockDocumentNumber: (value: string) => this;
    /** Target warehouse ID. The list of available warehouses can be downloaded via the method <a href = "en/shop/api/?action=method&function=systemconfig&method=get">#get</a> in gateway <a href = "en/shop/api/?action=documentation&function=systemconfig">SystemConfig</a>. */
    stockId: (value: number|string) => this;
    /** Source warehouse ID. The list of available warehouses can be downloaded via the method <a href = "en/shop/api/?action=method&function=systemconfig&method=get">#get</a> in gateway <a href = "en/shop/api/?action=documentation&function=systemconfig">SystemConfig</a>. */
    stockSourceId: (value: number|string) => this;
    note: (value: string) => this;
    /** Products available in presales. Available values: "y" - yes, "n" - no. */
    productsInPreorder: (value: 'y'|'n') => this;
    /** Supplier ID. */
    delivererId: (value: number|string) => this;
    /** Type of purchase document. Available values: "national_VAT_invoice" - National VAT invoice, "other_purchase_document" - Other purchase document, "invoice_without_VAT" - Invoice without VAT (EU), "imports_from_outside_the_EU" - Import from outside EU. */
    wnt: (value: 'national_VAT_invoice'|'other_purchase_document'|'invoice_without_VAT'|'imports_from_outside_the_EU') => this;
    /** Issue date of purchase document. Correct format is yyyy-mm-dd, e.g. 2007-12-31.. */
    saleDocumentCreationDate: (value: string) => this;
    /** Planned date of acceptance of delivery. Correct format is yyyy-mm-dd, e.g. 2007-12-31. Requires parameter: "confirmed=on_the_way". */
    deliveryOnTheWayPlannedDeliveryDate: (value: string) => this;
    /** Document status. Available values: "open" - open, "on_the_way" - on the way. */
    confirmed: (value: 'open'|'on_the_way') => this;
    /** Purchase price currency, e.g. PLN, USD, GBP */
    currencyForPurchasePrice: (value: string) => this;
    /** Currency exchange rate (Currency conversion) */
    currencyForPurchasePriceRate: (value: Number) => this;
    /** Type of currency rate. Available values: "custom" - not typical, "currentDay" - the currency rate from the day of issuing a stock document, "customDay" - on a selected day, "previousDay" - the currency rate of a working day preceding the date of the stock document issue. */
    currencyForPurchasePriceRateType: (value: 'custom'|'currentDay'|'customDay'|'previousDay') => this;
    /** Currency rate of the day. Correct format is yyyy-mm-dd, e.g. 2007-12-31.. */
    currencyForPurchasePriceRateDate: (value: string) => this;
    /** Settlement by prices. Available values: "brutto" - Gross value, "netto" - Net value. */
    priceType: (value: 'brutto'|'netto') => this;
    /** Methods of stock level correction. Available values: "fifo" - first-in, first-out (FIFO), "lifo" - last-in, first-out (LIFO). */
    queueType: (value: 'fifo'|'lifo') => this;
    /** Verification date */
    verificationDate: (value: string) => this;
    /** Users verification */
    verificationUser: (value: string) => this;
}

export interface GetWmsStocksdocumentsOpenedDocumentsRequest extends PagableGateway<GetWmsStocksdocumentsOpenedDocumentsRequest> {
    type: (value: 'pz'|'pw'|'px'|'rx'|'rw'|'mm') => this;
    status: (value: 'open'|'on_the_way'|'all') => this;
    /** Target warehouse ID. The list of available warehouses can be downloaded via the method <a href = "en/shop/api/?action=method&function=systemconfig&method=get">#get</a> in gateway <a href = "en/shop/api/?action=documentation&function=systemconfig">SystemConfig</a>. */
    stockId: (value: number|string) => this;
    /** Source warehouse ID. The list of available warehouses can be downloaded via the method <a href = "en/shop/api/?action=method&function=systemconfig&method=get">#get</a> in gateway <a href = "en/shop/api/?action=documentation&function=systemconfig">SystemConfig</a>. */
    stockSourceId: (value: number|string) => this;
    /** Date range */
    dateRange: (value: JSObject) => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
    /** Define range of dates and their type */
    dates: (dateFrom: DateLike, dateTo: DateLike, type: "open"|"modify") => this;
}

export interface DeleteWmsStocksdocumentsProductsRequest extends AppendableGateway<DeleteWmsStocksdocumentsProductsRequest> {
    /** Products list. */
    products: (value: Array<JSObject>) => this;
    type: (value: 'pz'|'pw'|'px'|'rx'|'rw'|'mm') => this;
    /** Document identifier. */
    id: (value: number|string) => this;
    /** Stock keeping unit. */
    product: (product: number|string) => this
    /** Product size ID. */
    size: (size: string) => this
}

export interface GetWmsStocksdocumentsProductsRequest extends PagableGateway<GetWmsStocksdocumentsProductsRequest,GetStocksdocumentsProductsResponse> {
    type: (value: 'pz'|'pw'|'px'|'rx'|'rw'|'mm'|'wz'|'zw') => this;
    /** Document identifier. */
    id: (value: number|string) => this;
    /** Result page number. */
    results_page: (value: number|string) => this;
    /** Number of results on page. */
    results_limit: (value: number|string) => this;
}

export interface PostWmsStocksdocumentsProductsRequest extends AppendableGateway<PostWmsStocksdocumentsProductsRequest> {
    /** Products list. */
    products: (value: Array<JSObject>) => this;
    type: (value: 'pz'|'pw'|'px'|'rx'|'rw'|'mm') => this;
    /** Document identifier. */
    id: (value: number|string) => this;
    /** Stock keeping unit. */
    product: (product: number|string) => this
    /** Product size ID. */
    size: (size: string) => this
    /** Product quantity. */
    quantity: (quantity: number|string) => this
    /** Cost price */
    productPurchasePrice: (productPurchasePrice: number) => this
    /** Warehouse location ID. The list of available warehouse locations can be downloaded via the method <a href = "pl/shop/api/?action=method&function=locations&method=get">#get</a> in gateway <a href = "en/shop/api/?action=documentation&function=locations">Locations</a> . */
    locationId: (locationId: number|string) => this
    /** Storage location code */
    locationCode: (locationCode: string) => this
    /** Warehouse location full path. Use a backslash (\) as a separator, for example: M1\Section name\Location name. The list of available warehouse locations can be downloaded via the method <a href = "pl/shop/api/?action=method&function=locations&method=get">#get</a> in gateway <a href = "en/shop/api/?action=documentation&function=locations">Locations</a> . */
    locationTextId: (locationTextId: string) => this
}

export interface PutWmsStocksdocumentsProductsRequest extends AppendableGateway<PutWmsStocksdocumentsProductsRequest> {
    /** Products list. */
    products: (value: Array<JSObject>) => this;
    type: (value: 'pz'|'pw'|'px'|'rx'|'rw'|'mm') => this;
    /** Document identifier. */
    id: (value: number|string) => this;
    /** Stock keeping unit. */
    product: (product: number|string) => this
    /** Product size ID. */
    size: (size: string) => this
    /** Product quantity. */
    quantity: (quantity: number|string) => this
    /** Cost price */
    productPurchasePrice: (productPurchasePrice: number) => this
    /** Warehouse location ID. The list of available warehouse locations can be downloaded via the method <a href = "pl/shop/api/?action=method&function=locations&method=get">#get</a> in gateway <a href = "en/shop/api/?action=documentation&function=locations">Locations</a> . */
    locationId: (locationId: number|string) => this
    /** Storage location code */
    locationCode: (locationCode: string) => this
    /** Warehouse location full path. Use a backslash (\) as a separator, for example: M1\Section name\Location name. The list of available warehouse locations can be downloaded via the method <a href = "pl/shop/api/?action=method&function=locations&method=get">#get</a> in gateway <a href = "en/shop/api/?action=documentation&function=locations">Locations</a> . */
    locationTextId: (locationTextId: string) => this
}

export interface PutWmsStocksdocumentsRejectMMRequest extends Gateway {
    /** Document identifier. */
    id: (value: number|string) => this;
}

export interface DeleteWmsSuppliersRequest extends Gateway {
    /** Id */
    ids: (value: number|string|number[]|string[]) => this;
}

export interface GetWmsSuppliersRequest extends PagableGateway<GetWmsSuppliersRequest> {
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
    /** Return quantity of products assigned to supplier */
    returnProductsCount: (value: Boolean) => this;
    /** Names */
    names: (value: string|string[]) => this;
    /** IDs */
    ids: (value: number|string|number[]|string[]) => this;
}

export interface PutWmsSuppliersRequest extends AppendableGateway<PutWmsSuppliersRequest> {
    suppliers: (value: Array<JSObject>) => this;
    /** Id */
    id: (id: number|string) => this
    /** Name. */
    name: (name: string) => this
    /** e-mail address. (limit of 50 characters) */
    email: (email: string) => this
    /** Phone number. (limit of 20 characters) */
    phone: (phone: string) => this
    /** Fax. (limit of 20 characters) */
    fax: (fax: string) => this
    /** Address. (limit of 50 characters) */
    street: (street: string) => this
    /** ZIP / Post code. (limit of 6 characters) */
    zipCode: (zipCode: string) => this
    /** Town / City. (limit of 50 characters) */
    city: (city: string) => this
    /** Region ID */
    country: (country: number|string) => this
    /** VAT no.. (limit of 13 characters) */
    taxCode: (taxCode: string) => this
    /** Average delivery time */
    averageDeliveryTime: (averageDeliveryTime: JSObject) => this
    /** Description. (limit of 255 characters) */
    description: (description: string) => this
    /** Order preparation time for shipment */
    orderCompletionTime: (orderCompletionTime: JSObject) => this
    /** Supplier working hours */
    workDays: (workDays: Array<JSObject>) => this
}

export interface Gateways {
    getClientsBalance: GetClientsBalanceRequest,
    postClientsBalance: PostClientsBalanceRequest,
    getClients: GetClientsRequest,
    postClients: PostClientsRequest,
    putClients: PutClientsRequest,
    searchClientsCrm: SearchClientsCrmRequest,
    deleteClientsDeliveryAddress: DeleteClientsDeliveryAddressRequest,
    getClientsDeliveryAddress: GetClientsDeliveryAddressRequest,
    postClientsDeliveryAddress: PostClientsDeliveryAddressRequest,
    putClientsDeliveryAddress: PutClientsDeliveryAddressRequest,
    putClientsExternalCode: PutClientsExternalCodeRequest,
    putClientsGiftcardsBlock: PutClientsGiftcardsBlockRequest,
    deleteClientsGiftcards: DeleteClientsGiftcardsRequest,
    postClientsGiftcards: PostClientsGiftcardsRequest,
    putClientsGiftcards: PutClientsGiftcardsRequest,
    searchClientsGiftcards: SearchClientsGiftcardsRequest,
    getClientsGiftcardsTypes: GetClientsGiftcardsTypesRequest,
    putClientsGiftcardsUnblock: PutClientsGiftcardsUnblockRequest,
    getClientsMembershipCards: GetClientsMembershipCardsRequest,
    putClientsMembershipCards: PutClientsMembershipCardsRequest,
    searchClientsNewsletterEmail: SearchClientsNewsletterEmailRequest,
    searchClientsNewsletterSms: SearchClientsNewsletterSmsRequest,
    deleteClientsPayerAddress: DeleteClientsPayerAddressRequest,
    getClientsPayerAddress: GetClientsPayerAddressRequest,
    postClientsPayerAddress: PostClientsPayerAddressRequest,
    putClientsPayerAddress: PutClientsPayerAddressRequest,
    getClientsPricelistsClients: GetClientsPricelistsClientsRequest,
    putClientsPricelistsClients: PutClientsPricelistsClientsRequest,
    deleteClientsPricelists: DeleteClientsPricelistsRequest,
    getClientsPricelists: GetClientsPricelistsRequest,
    postClientsPricelists: PostClientsPricelistsRequest,
    putClientsPricelists: PutClientsPricelistsRequest,
    getClientsPricelistsProducts: GetClientsPricelistsProductsRequest,
    putClientsPricelistsProducts: PutClientsPricelistsProductsRequest,
    putClientsPricelistsRename: PutClientsPricelistsRenameRequest,
    getClientsPricesActiveCard: GetClientsPricesActiveCardRequest,
    getClientsPricesDiscountGroups: GetClientsPricesDiscountGroupsRequest,
    getClientsPricesDiscounts: GetClientsPricesDiscountsRequest,
    putClientsPricesDiscounts: PutClientsPricesDiscountsRequest,
    getClientsProfitPoints: GetClientsProfitPointsRequest,
    postClientsProfitPoints: PostClientsProfitPointsRequest,
    getClientsProvinceList: GetClientsProvinceListRequest,
    deleteClients: DeleteClientsRequest,
    deleteClientsTagsClear: DeleteClientsTagsClearRequest,
    deleteClientsTags: DeleteClientsTagsRequest,
    getClientsTags: GetClientsTagsRequest,
    postClientsTags: PostClientsTagsRequest,
    putClientsTags: PutClientsTagsRequest,
    getConfigVariables: GetConfigVariablesRequest,
    putConfigVariables: PutConfigVariablesRequest,
    deleteConfigVariables: DeleteConfigVariablesRequest,
    getCouriersAssignedToShippingProfiles: GetCouriersAssignedToShippingProfilesRequest,
    getCouriers: GetCouriersRequest,
    deleteCouriersPickupPoints: DeleteCouriersPickupPointsRequest,
    getCouriersPickupPoints: GetCouriersPickupPointsRequest,
    postCouriersPickupPoints: PostCouriersPickupPointsRequest,
    putCouriersPickupPoints: PutCouriersPickupPointsRequest,
    getCpaCampaign: GetCpaCampaignRequest,
    postCpaCampaign: PostCpaCampaignRequest,
    putCpaCampaign: PutCpaCampaignRequest,
    deleteCpaCampaign: DeleteCpaCampaignRequest,
    getCpa: GetCpaRequest,
    postCpa: PostCpaRequest,
    putCpa: PutCpaRequest,
    deleteCpa: DeleteCpaRequest,
    putDeliveriesDefaultProfiles: PutDeliveriesDefaultProfilesRequest,
    getDeliveriesProfiles: GetDeliveriesProfilesRequest,
    getDeliveriesRegions: GetDeliveriesRegionsRequest,
    postDeliveriesRegions: PostDeliveriesRegionsRequest,
    getDiscountsGroupsClients: GetDiscountsGroupsClientsRequest,
    deleteDiscountsGroups: DeleteDiscountsGroupsRequest,
    getDiscountsGroups: GetDiscountsGroupsRequest,
    postDiscountsGroups: PostDiscountsGroupsRequest,
    putDiscountsGroups: PutDiscountsGroupsRequest,
    deleteDiscountsGroupsProducts: DeleteDiscountsGroupsProductsRequest,
    putDiscountsGroupsProducts: PutDiscountsGroupsProductsRequest,
    putDiscountsRebatesBlockCard: PutDiscountsRebatesBlockCardRequest,
    deleteDiscountsRebatesCard: DeleteDiscountsRebatesCardRequest,
    postDiscountsRebatesCard: PostDiscountsRebatesCardRequest,
    deleteDiscountsRebatesCode: DeleteDiscountsRebatesCodeRequest,
    postDiscountsRebatesCode: PostDiscountsRebatesCodeRequest,
    putDiscountsRebatesUnblockCard: PutDiscountsRebatesUnblockCardRequest,
    deleteEntries: DeleteEntriesRequest,
    getEntries: GetEntriesRequest,
    postEntries: PostEntriesRequest,
    putEntries: PutEntriesRequest,
    getEntriesPagesToDisplay: GetEntriesPagesToDisplayRequest,
    getEntriesSources: GetEntriesSourcesRequest,
    getMenuFilter: GetMenuFilterRequest,
    putMenuFilter: PutMenuFilterRequest,
    deleteMenu: DeleteMenuRequest,
    getMenu: GetMenuRequest,
    postMenu: PostMenuRequest,
    putMenu: PutMenuRequest,
    putMenuSort: PutMenuSortRequest,
    getOrdersAnalytics: GetOrdersAnalyticsRequest,
    getOrdersAuctionDetails: GetOrdersAuctionDetailsRequest,
    putOrdersClient: PutOrdersClientRequest,
    putOrdersCourier: PutOrdersCourierRequest,
    putOrdersDeliveryAddress: PutOrdersDeliveryAddressRequest,
    putOrdersDevide: PutOrdersDevideRequest,
    postOrdersDocumentsCreate: PostOrdersDocumentsCreateRequest,
    deleteOrdersDocuments: DeleteOrdersDocumentsRequest,
    getOrdersDocuments: GetOrdersDocumentsRequest,
    postOrdersDocuments: PostOrdersDocumentsRequest,
    getOrdersExportdocumentsEPP: GetOrdersExportdocumentsEPPRequest,
    getOrdersExportdocumentsJPK: GetOrdersExportdocumentsJPKRequest,
    getOrdersHandler: GetOrdersHandlerRequest,
    putOrdersHandler: PutOrdersHandlerRequest,
    getOrdersHistory: GetOrdersHistoryRequest,
    deleteOrdersImages: DeleteOrdersImagesRequest,
    getOrdersImages: GetOrdersImagesRequest,
    postOrdersImages: PostOrdersImagesRequest,
    getOrdersLabels: GetOrdersLabelsRequest,
    searchOrdersOpinions: SearchOrdersOpinionsRequest,
    getOrdersOpinionsRate: GetOrdersOpinionsRateRequest,
    getOrders: GetOrdersRequest,
    postOrders: PostOrdersRequest,
    putOrders: PutOrdersRequest,
    searchOrders: SearchOrdersRequest,
    getOrdersPackages: GetOrdersPackagesRequest,
    postOrdersPackages: PostOrdersPackagesRequest,
    putOrdersPackages: PutOrdersPackagesRequest,
    putOrdersPickupPoint: PutOrdersPickupPointRequest,
    getOrdersPrinterDocuments: GetOrdersPrinterDocumentsRequest,
    putOrdersProductsSerialNumbers: PutOrdersProductsSerialNumbersRequest,
    putOrdersProfitMargin: PutOrdersProfitMarginRequest,
    getOrdersProfitability: GetOrdersProfitabilityRequest,
    putOrdersShippingCosts: PutOrdersShippingCostsRequest,
    searchOrdersUnfinished: SearchOrdersUnfinishedRequest,
    getOrdersWarehouse: GetOrdersWarehouseRequest,
    putOrdersWarehouse: PutOrdersWarehouseRequest,
    getPackagesLabels: GetPackagesLabelsRequest,
    postPackagesLabels: PostPackagesLabelsRequest,
    postPackages: PostPackagesRequest,
    putPackages: PutPackagesRequest,
    searchPackages: SearchPackagesRequest,
    postPaymentsCancel: PostPaymentsCancelRequest,
    postPaymentsCashback: PostPaymentsCashbackRequest,
    putPaymentsConfirm: PutPaymentsConfirmRequest,
    getPaymentsForms: GetPaymentsFormsRequest,
    getPayments: GetPaymentsRequest,
    postPayments: PostPaymentsRequest,
    putPayments: PutPaymentsRequest,
    getPaymentsProfiles: GetPaymentsProfilesRequest,
    postPaymentsRepayment: PostPaymentsRepaymentRequest,
    getProductsSKUbyBarcode: GetProductsSKUbyBarcodeRequest,
    putProductsAttachments: PutProductsAttachmentsRequest,
    getProductsAuctions: GetProductsAuctionsRequest,
    deleteProductsBrands: DeleteProductsBrandsRequest,
    getProductsBrandsFilter: GetProductsBrandsFilterRequest,
    putProductsBrandsFilter: PutProductsBrandsFilterRequest,
    getProductsBrands: GetProductsBrandsRequest,
    postProductsBrands: PostProductsBrandsRequest,
    putProductsBrands: PutProductsBrandsRequest,
    postProductsBundles: PostProductsBundlesRequest,
    deleteProductsBundlesProducts: DeleteProductsBundlesProductsRequest,
    postProductsBundlesProducts: PostProductsBundlesProductsRequest,
    putProductsBundlesProductsQuantity: PutProductsBundlesProductsQuantityRequest,
    putProductsBundlesRenew: PutProductsBundlesRenewRequest,
    getProductsCategories: GetProductsCategoriesRequest,
    putProductsCategories: PutProductsCategoriesRequest,
    searchProductsCategoriesIdosell: SearchProductsCategoriesIdosellRequest,
    getProductsCodeExistence: GetProductsCodeExistenceRequest,
    postProductsCollections: PostProductsCollectionsRequest,
    deleteProductsCollectionsProducts: DeleteProductsCollectionsProductsRequest,
    postProductsCollectionsProducts: PostProductsCollectionsProductsRequest,
    putProductsCollectionsProducts: PutProductsCollectionsProductsRequest,
    putProductsCollectionsRenew: PutProductsCollectionsRenewRequest,
    searchProductsDeliveryTime: SearchProductsDeliveryTimeRequest,
    getProductsDescriptions: GetProductsDescriptionsRequest,
    putProductsDescriptions: PutProductsDescriptionsRequest,
    putProductsGroupsMainProduct: PutProductsGroupsMainProductRequest,
    putProductsGroupsOrder: PutProductsGroupsOrderRequest,
    putProductsGroupsSettings: PutProductsGroupsSettingsRequest,
    getProductsIdBySizecode: GetProductsIdBySizecodeRequest,
    deleteProductsImages: DeleteProductsImagesRequest,
    putProductsImages: PutProductsImagesRequest,
    getProductsMarketingAllFacebookCatalogIds: GetProductsMarketingAllFacebookCatalogIdsRequest,
    getProductsMarketingPromotion: GetProductsMarketingPromotionRequest,
    postProductsMarketingPromotion: PostProductsMarketingPromotionRequest,
    putProductsMarketingPromotion: PutProductsMarketingPromotionRequest,
    getProductsMarketingZones: GetProductsMarketingZonesRequest,
    putProductsMarketingZones: PutProductsMarketingZonesRequest,
    getProductsOmnibusPrices: GetProductsOmnibusPricesRequest,
    putProductsOmnibusPrices: PutProductsOmnibusPricesRequest,
    deleteProductsOpinions: DeleteProductsOpinionsRequest,
    getProductsOpinions: GetProductsOpinionsRequest,
    postProductsOpinions: PostProductsOpinionsRequest,
    putProductsOpinions: PutProductsOpinionsRequest,
    getProductsOpinionsRate: GetProductsOpinionsRateRequest,
    deleteProductsParameters: DeleteProductsParametersRequest,
    putProductsParameters: PutProductsParametersRequest,
    searchProductsParameters: SearchProductsParametersRequest,
    deleteProducts: DeleteProductsRequest,
    getProducts: GetProductsRequest,
    postProducts: PostProductsRequest,
    putProducts: PutProductsRequest,
    searchProducts: SearchProductsRequest,
    deleteProductsProductsToFacebookCatalog: DeleteProductsProductsToFacebookCatalogRequest,
    getProductsProductsToFacebookCatalog: GetProductsProductsToFacebookCatalogRequest,
    postProductsProductsToFacebookCatalog: PostProductsProductsToFacebookCatalogRequest,
    deleteProductsProductsToPromotion: DeleteProductsProductsToPromotionRequest,
    postProductsProductsToPromotion: PostProductsProductsToPromotionRequest,
    getProductsQuestions: GetProductsQuestionsRequest,
    putProductsQuestions: PutProductsQuestionsRequest,
    getProductsReservations: GetProductsReservationsRequest,
    postProductsRestore: PostProductsRestoreRequest,
    deleteProductsSeries: DeleteProductsSeriesRequest,
    getProductsSeriesFilter: GetProductsSeriesFilterRequest,
    putProductsSeriesFilter: PutProductsSeriesFilterRequest,
    getProductsSeries: GetProductsSeriesRequest,
    putProductsSeries: PutProductsSeriesRequest,
    deleteProductsSizes: DeleteProductsSizesRequest,
    getProductsSizes: GetProductsSizesRequest,
    putProductsSizes: PutProductsSizesRequest,
    putProductsStockQuantity: PutProductsStockQuantityRequest,
    getProductsStocks: GetProductsStocksRequest,
    putProductsStocks: PutProductsStocksRequest,
    getProductsStrikethroughPrices: GetProductsStrikethroughPricesRequest,
    putProductsStrikethroughPrices: PutProductsStrikethroughPricesRequest,
    putProductsSupplierCode: PutProductsSupplierCodeRequest,
    putProductsSupplierProductData: PutProductsSupplierProductDataRequest,
    postProductsSynchronizationFile: PostProductsSynchronizationFileRequest,
    putProductsSynchronizationFinishUpload: PutProductsSynchronizationFinishUploadRequest,
    postRefundsAddAutomaticRefund: PostRefundsAddAutomaticRefundRequest,
    postRefundsAddAutomaticRefundForOrder: PostRefundsAddAutomaticRefundForOrderRequest,
    postRefundsAddManualRefund: PostRefundsAddManualRefundRequest,
    putRefundsCancelRefund: PutRefundsCancelRefundRequest,
    putRefundsConfirmRefund: PutRefundsConfirmRefundRequest,
    getRefundsGetPossibleAutoRefunds: GetRefundsGetPossibleAutoRefundsRequest,
    getRefundsGetRefundStatus: GetRefundsGetRefundStatusRequest,
    getRefundsRetrieveRefundsList: GetRefundsRetrieveRefundsListRequest,
    putRefundsUpdateRefund: PutRefundsUpdateRefundRequest,
    getResponsibilityEntities: GetResponsibilityEntitiesRequest,
    postResponsibilityEntities: PostResponsibilityEntitiesRequest,
    putResponsibilityEntities: PutResponsibilityEntitiesRequest,
    deleteResponsibilityEntities: DeleteResponsibilityEntitiesRequest,
    getReturns: GetReturnsRequest,
    postReturns: PostReturnsRequest,
    putReturns: PutReturnsRequest,
    putReturnsSerialNumber: PutReturnsSerialNumberRequest,
    getReturnsStatuses: GetReturnsStatusesRequest,
    getRma: GetRmaRequest,
    putRma: PutRmaRequest,
    getRmaStatuses: GetRmaStatusesRequest,
    getShopsCurrencies: GetShopsCurrenciesRequest,
    getShopsLanguages: GetShopsLanguagesRequest,
    deleteSizecharts: DeleteSizechartsRequest,
    getSizecharts: GetSizechartsRequest,
    putSizecharts: PutSizechartsRequest,
    getSizes: GetSizesRequest,
    putSizes: PutSizesRequest,
    getSnippetsCampaign: GetSnippetsCampaignRequest,
    postSnippetsCampaign: PostSnippetsCampaignRequest,
    putSnippetsCampaign: PutSnippetsCampaignRequest,
    deleteSnippetsCampaign: DeleteSnippetsCampaignRequest,
    getSnippetsCookies: GetSnippetsCookiesRequest,
    postSnippetsCookies: PostSnippetsCookiesRequest,
    putSnippetsCookies: PutSnippetsCookiesRequest,
    deleteSnippetsCookies: DeleteSnippetsCookiesRequest,
    getSnippets: GetSnippetsRequest,
    postSnippets: PostSnippetsRequest,
    putSnippets: PutSnippetsRequest,
    deleteSnippets: DeleteSnippetsRequest,
    postSubscriptionsAddProduct: PostSubscriptionsAddProductRequest,
    postSubscriptionsChangeDeliveryDates: PostSubscriptionsChangeDeliveryDatesRequest,
    postSubscriptionsChangePriceAutoUpdate: PostSubscriptionsChangePriceAutoUpdateRequest,
    postSubscriptionsChangeStatus: PostSubscriptionsChangeStatusRequest,
    postSubscriptionsDeleteProduct: PostSubscriptionsDeleteProductRequest,
    postSubscriptionsEdit: PostSubscriptionsEditRequest,
    postSubscriptionsEditProduct: PostSubscriptionsEditProductRequest,
    postSubscriptionsItemsList: PostSubscriptionsItemsListRequest,
    postSubscriptionsListViewFetchIds: PostSubscriptionsListViewFetchIdsRequest,
    postSubscriptionsListViewList: PostSubscriptionsListViewListRequest,
    postSubscriptionsSetRebateCode: PostSubscriptionsSetRebateCodeRequest,
    postSubscriptionsUnsetRebateCode: PostSubscriptionsUnsetRebateCodeRequest,
    getSystemConfig: GetSystemConfigRequest,
    putSystemConfig: PutSystemConfigRequest,
    getSystemCurrencies: GetSystemCurrenciesRequest,
    putSystemCurrencies: PutSystemCurrenciesRequest,
    getSystemProcessesAutomation: GetSystemProcessesAutomationRequest,
    putSystemProcessesAutomation: PutSystemProcessesAutomationRequest,
    getSystemServerLoad: GetSystemServerLoadRequest,
    getSystemServerTime: GetSystemServerTimeRequest,
    getSystemShopsData: GetSystemShopsDataRequest,
    getSystemUnits: GetSystemUnitsRequest,
    putSystemUnits: PutSystemUnitsRequest,
    getSystemUsers: GetSystemUsersRequest,
    putVouchersBlock: PutVouchersBlockRequest,
    getVouchersTypes: GetVouchersTypesRequest,
    putVouchersUnblock: PutVouchersUnblockRequest,
    deleteVouchers: DeleteVouchersRequest,
    getVouchers: GetVouchersRequest,
    postVouchers: PostVouchersRequest,
    putVouchers: PutVouchersRequest,
    getWarrantiesCountTotal: GetWarrantiesCountTotalRequest,
    putWarrantiesLanguageData: PutWarrantiesLanguageDataRequest,
    deleteWarranties: DeleteWarrantiesRequest,
    getWarranties: GetWarrantiesRequest,
    postWarranties: PostWarrantiesRequest,
    putWarranties: PutWarrantiesRequest,
    getWmsLocations: GetWmsLocationsRequest,
    putWmsStocksdocumentsAcceptMM: PutWmsStocksdocumentsAcceptMMRequest,
    putWmsStocksdocumentsClose: PutWmsStocksdocumentsCloseRequest,
    deleteWmsStocksdocumentsDocuments: DeleteWmsStocksdocumentsDocumentsRequest,
    getWmsStocksdocumentsDocuments: GetWmsStocksdocumentsDocumentsRequest,
    postWmsStocksdocumentsDocuments: PostWmsStocksdocumentsDocumentsRequest,
    putWmsStocksdocumentsDocuments: PutWmsStocksdocumentsDocumentsRequest,
    getWmsStocksdocumentsOpenedDocuments: GetWmsStocksdocumentsOpenedDocumentsRequest,
    deleteWmsStocksdocumentsProducts: DeleteWmsStocksdocumentsProductsRequest,
    getWmsStocksdocumentsProducts: GetWmsStocksdocumentsProductsRequest,
    postWmsStocksdocumentsProducts: PostWmsStocksdocumentsProductsRequest,
    putWmsStocksdocumentsProducts: PutWmsStocksdocumentsProductsRequest,
    putWmsStocksdocumentsRejectMM: PutWmsStocksdocumentsRejectMMRequest,
    deleteWmsSuppliers: DeleteWmsSuppliersRequest,
    getWmsSuppliers: GetWmsSuppliersRequest,
    putWmsSuppliers: PutWmsSuppliersRequest,
    /** @deprecated */
    listProducts: SearchProductsRequest
    /** @deprecated */
    listOrders: SearchOrdersRequest
    /** @deprecated */
    listOrdersUnfinished: SearchOrdersUnfinishedRequest
    /** @deprecated */
    getClientsGiftcards: SearchClientsGiftcardsRequest
    /** @deprecated */
    getClientsCrm: SearchClientsCrmRequest
    /** @deprecated */
    getClientsNewsletterEmailShops: SearchClientsNewsletterEmailRequest
    /** @deprecated */
    getClientsNewsletterEmailSMS: SearchClientsNewsletterSmsRequest
    /** @deprecated */
    getOrdersOpinions: SearchOrdersOpinionsRequest
    /** @deprecated */
    getPackages: SearchPackagesRequest
    /** @deprecated */
    getProductsCategoriesIdosell: SearchProductsCategoriesIdosellRequest
    /** @deprecated */
    getProductsDeliveryTime: SearchProductsDeliveryTimeRequest
    /** @deprecated */
    getProductsParameters: SearchProductsParametersRequest
}

declare const defaultExport: (url: string, apiKey: string, version?: number | string) => Gateways;
export default defaultExport;
export { ENUMS }