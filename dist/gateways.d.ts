import type { PagableGateway, AppendableGateway, Gateway, DateLike } from "./app.d.ts"
import type { SearchClientsCrmResponse, SearchGiftcardsResponse, SearchNewsletterEmailResponse, SearchNewsletterSmsResponse, SearchOpinionsResponse, SearchOrdersResponse, SearchPackagesResponse, SearchCategoriesIdosellResponse, SearchDeliveryTimeResponse, SearchProductsParametersResponse, SearchProductsResponse }  from "./responses.d.ts"

export interface GetClientsBalanceRequest extends PagableGateway<GetClientsBalanceRequest> {
    /** Customer Id */
    clientNumbers: (value: number|string|number[]|string[]) => this;
    /** Text search through customer data. */
    textSearch: (value: string) => this;
    active: (value: 'yes'|'no') => this;
    hasTradeCredit: (value: 'nonzero'|'positive'|'negative'|'zero') => this;
    /** Start and end date (YYYY-MM-DD). */
    lastPurchaseDate: (value: Object) => this;
    /** Elements to be returned by the endpoint. By default all elements are returned. Available elements: - clientId - clientBalance - clientBalanceHistory */
    returnElements: (value: string|string[]) => this;
    /** Results page number. Numbering begins at 0. Default value: 0. */
    resultsPage: (value: number|string) => this;
    /** Maximum number of results on a single page. Default is 100. */
    resultsLimit: (value: number|string) => this;
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

export interface GetClientsRequest extends PagableGateway<GetClientsRequest> {
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
    clientLastPurchaseDate: (value: Object) => this;
    /** Last modification date. */
    clientsLastModificationDate: (value: Object) => this;
    /** Elements to be returned by the endpoint. By default all elements are returned. Available fields: - clientId - clientsLastModificationDate - clientLogin - clientEmail - clientType - showClientAsPartner - blockAutomaticallyAssigningGroupDiscount - clientFirstName - clientLastName - clientBirthDate - clientFirm - clientNip - clientStreet - clientZipCode - clientCity - clientCountryId - langId - currencyId - clientRegionId - clientIsWholesaler - clientVatPreferences - clientGroupDiscountNumber - clientGroupDiscountName - clientCodeExternal - clientPhone1 - clientPhone2 - clientProvinceId - newsletterEmailApprovalsData - shops - clientBalances - clientTradeCredit - clientLoyaltyPoints - operator - isUnregistered - affiliateLogin - affiliateId - clientRegistrationDate - clientActiveInShops */
    returnElements: (value: string|string[]) => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
    /** Client Registration Date  */
    clientRegistrationDate: (value: Object) => this;
    /** The ID of the shop, that client is assigned to. */
    shopId: (value: string) => this;
}

export interface PostClientsRequest extends AppendableGateway<PostClientsRequest> {
    /** Customer data. */
    clients: (value: Array<Object>) => this;
}

export interface PutClientsRequest extends AppendableGateway<PutClientsRequest> {
    /** Customer data. */
    clients: (value: Array<Object>) => this;
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
    clientRegistrationDate: (value: Object) => this;
    /** Date of last customer login (YYYY-MM-DD) */
    clientLastLoginDate: (value: Object) => this;
    /** Customer type, possible values: - person - if client sex is not determined, - person_male - when client is a male, - person_female - when a customer is a woman, - firm - when client is company. */
    clientType: (value: 'person'|'person_male'|'person_female'|'firm') => this;
    /** Information about the loyalty program possible values: - yes_voucher - when customers are in a loyalty program and have only used vouchers, - yes_voucher_cash - when customers are in a loyalty program and have only used vouchers or cash deposits, - yes_clients, - yes_orders - when customers are in the loyalty program and have made at least one order, - no - when customers are in the loyalty program, - banned - when customers are blocked. */
    clientAffiliateProgram: (value: Array<Object>) => this;
    /** Permission to E-mail Newsletter. */
    newsletterEmailApproval: (value: string) => this;
    /** Permission to SMS Newsletter. */
    newsletterSmsApproval: (value: string) => this;
    /** Shops */
    searchByShops: (value: Object) => this;
    /** Loyalty cards: */
    clientLoyaltyCard: (value: Object) => this;
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
    newsletterEmailApprovalsData: (value: Array<Object>) => this;
    /** List of shops where a customer agreed or didn't agree to receive sms newsletter. */
    newsletterSmsApprovalsData: (value: Array<Object>) => this;
    /** Customer loyalty card number, omitted when has_loyalty_card = no. */
    clientLoyaltyCardNumber: (value: string) => this;
    /** Orders. */
    orders: (value: Object) => this;
    /** Elements to be returned by the endpoint. By default all elements are returned */
    returnElements: (value: string|string[]) => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
    /** Determines, if data - that will be returned - will be exactly as entered values, or values should be fragment of customer data. */
    settingsExactSearch: (value: Boolean) => this;
}

export interface DeleteClientsDeliveryAddressRequest extends AppendableGateway<DeleteClientsDeliveryAddressRequest> {
    /** Customer data. */
    clients: (value: Array<Object>) => this;
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
    clients: (value: Array<Object>) => this;
}

export interface PutClientsDeliveryAddressRequest extends AppendableGateway<PutClientsDeliveryAddressRequest> {
    /** Customer data. */
    clients: (value: Array<Object>) => this;
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
    giftCards: (value: Array<Object>) => this;
}

export interface DeleteClientsGiftcardsRequest extends AppendableGateway<DeleteClientsGiftcardsRequest> {
    /** List of gift cards */
    giftCards: (value: Array<Object>) => this;
}

export interface PostClientsGiftcardsRequest extends AppendableGateway<PostClientsGiftcardsRequest> {
    /** List of cards to add */
    giftCards: (value: Array<Object>) => this;
}

export interface PutClientsGiftcardsRequest extends AppendableGateway<PutClientsGiftcardsRequest> {
    /** List of cards to edit */
    giftCards: (value: Array<Object>) => this;
    /** Adds balance to current gift card */
    add: (amount: number, currency: string) => this;
    /** Subtract from balance to current gift card */
    subtract: (amount: number, currency: string) => this;
    /** Set balance to current gift card */
    set: (amount: number, currency: string) => this;
}

export interface SearchClientsGiftcardsRequest extends Gateway<SearchGiftcardsResponse> {
    /** List of gift cards */
    giftCards: (value: Array<Object>) => this;
    /** element is an element array of type searchGiftCards */
    searchGiftCards: (value: Object) => this;
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
    giftCards: (value: Array<Object>) => this;
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
    membership_cards: (value: Array<Object>) => this;
}

export interface SearchClientsNewsletterEmailRequest extends PagableGateway<SearchClientsNewsletterEmailRequest,SearchNewsletterEmailResponse> {
    shops: (value: Array<Object>) => this;
    /** Customer language ID. */
    language: (value: string) => this;
    date: (value: Object) => this;
    /** Elements to be returned by the endpoint. By default all elements are returned */
    return_elements: (value: string|string[]) => this;
    /** Results page number. Numbering begins at 0. Default value: 0. */
    results_page: (value: number|string) => this;
    /** Maximum number of results on a single page. Default is 100. */
    results_limit: (value: number|string) => this;
}

export interface SearchClientsNewsletterSmsRequest extends PagableGateway<SearchClientsNewsletterSmsRequest,SearchNewsletterSmsResponse> {
    shops: (value: Array<Object>) => this;
    /** Customer language ID. */
    language: (value: string) => this;
    date: (value: Object) => this;
    /** Elements to be returned by the endpoint. By default all elements are returned */
    return_elements: (value: string|string[]) => this;
    /** Results page number. Numbering begins at 0. Default value: 0. */
    results_page: (value: number|string) => this;
    /** Maximum number of results on a single page. Default is 100. */
    results_limit: (value: number|string) => this;
}

export interface DeleteClientsPayerAddressRequest extends AppendableGateway<DeleteClientsPayerAddressRequest> {
    payers: (value: Array<Object>) => this;
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
    payers: (value: Array<Object>) => this;
}

export interface PutClientsPayerAddressRequest extends AppendableGateway<PutClientsPayerAddressRequest> {
    payers: (value: Array<Object>) => this;
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
    products: (value: Array<Object>) => this;
    /** List of manufacturers assigned to sought products. */
    producers: (value: Array<Object>) => this;
    /** Series list. */
    series: (value: Array<Object>) => this;
    /** List of categories in which sought products are present. */
    categories: (value: Array<Object>) => this;
    menuItems: (value: Array<Object>) => this;
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
    clientLastPurchaseDate: (value: Object) => this;
    /** Elements to be returned by the endpoint. By default all elements are returned. Available elements: - clientId - clientDiscountIsCombined - clientDiscountType - clientDiscountValue */
    returnElements: (value: string|string[]) => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
}

export interface PutClientsPricesDiscountsRequest extends AppendableGateway<PutClientsPricesDiscountsRequest> {
    customers: (value: Object) => this;
    /** Discount type, possible values: - simple */
    discount_type: (value: string) => this;
    /** Action, possible values: - sum_with_other_discounts_to_orders - sum with other discounts assigned to orders, - use_only_if_greater_than_the_sum_of_other_discounts - use only if greater than the sum of other discounts */
    discount_operating: (value: string) => this;
    discount_parameters: (value: Array<Object>) => this;
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
    clientLastPurchaseDate: (value: Object) => this;
    /** Profit points modification date range. */
    pointsModificationDate: (value: Object) => this;
    /** Elements to be returned by the endpoint. By default all elements are returned. Available elements: - clientId - clientProfitPoints - clientProfitPointsHistories */
    returnElements: (value: string|string[]) => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
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
    params: (value: Array<Object>) => this;
}

export interface GetClientsTagsRequest extends Gateway {
    /** Unique client's number. */
    clientId: (value: number|string) => this;
}

export interface PostClientsTagsRequest extends AppendableGateway<PostClientsTagsRequest> {
    /** Parameters transmitted to method */
    params: (value: Array<Object>) => this;
}

export interface PutClientsTagsRequest extends AppendableGateway<PutClientsTagsRequest> {
    /** Unique client's number. */
    clientId: (value: number|string) => this;
    clientTags: (value: Array<Object>) => this;
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
    variables: (value: Array<Object>) => this;
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
    pickupPointDeleteRequests: (value: Array<Object>) => this;
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
    pickupPoints: (value: Array<Object>) => this;
}

export interface PutCouriersPickupPointsRequest extends AppendableGateway<PutCouriersPickupPointsRequest> {
    pickupPoints: (value: Array<Object>) => this;
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
    campaigns: (value: Array<Object>) => this;
}

export interface PutCpaCampaignRequest extends AppendableGateway<PutCpaCampaignRequest> {
    campaigns: (value: Array<Object>) => this;
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
    cpa: (value: Array<Object>) => this;
}

export interface PutCpaRequest extends AppendableGateway<PutCpaRequest> {
    cpa: (value: Array<Object>) => this;
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
    products: (value: Array<Object>) => this;
    /** Brands */
    producers: (value: Array<Object>) => this;
    /** Series */
    series: (value: Array<Object>) => this;
    /** List of categories in which sought products are present. */
    categories: (value: Array<Object>) => this;
    /** Menu elements */
    menuItems: (value: Array<Object>) => this;
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
    visibleOnSitesList: (value: Array<Object>) => this;
    /** Products list. */
    products: (value: Array<Object>) => this;
    /** Photo */
    pictureData: (value: Object) => this;
    /** Element including entry content in selected languages */
    langs: (value: Array<Object>) => this;
    /** Type of title and shortcut linking: fullContentLink - link to the subpage with full content, givenUrlLink - link to the given URL, noLink - static element */
    titleLinkType: (value: 'fullContentLink'|'givenUrlLink'|'noLink') => this;
    /** Provided URL (for link to specified URL option) */
    link: (value: string) => this;
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
    visibleOnSitesList: (value: Array<Object>) => this;
    /** Products list. */
    products: (value: Array<Object>) => this;
    /** Photo */
    pictureData: (value: Object) => this;
    /** Determines whether to delete an entry photo */
    deletePicture: (value: 'y'|'n') => this;
    /** Element including entry content in selected languages */
    langs: (value: Array<Object>) => this;
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
    menuFiltersActive: (value: Array<Object>) => this;
}

export interface DeleteMenuRequest extends AppendableGateway<DeleteMenuRequest> {
    menu_list: (value: Array<Object>) => this;
    /** Settings. */
    settings: (value: Object) => this;
}

export interface GetMenuRequest extends Gateway {
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
    menu_list: (value: Array<Object>) => this;
    /** Settings */
    settings: (value: Object) => this;
}

export interface PutMenuRequest extends AppendableGateway<PutMenuRequest> {
    menu_list: (value: Array<Object>) => this;
    /** Settings. */
    settings: (value: Object) => this;
}

export interface PutMenuSortRequest extends AppendableGateway<PutMenuSortRequest> {
    menu_list: (value: Array<Object>) => this;
    /** Settings */
    settings: (value: Object) => this;
}

export interface GetOrdersAnalyticsRequest extends Gateway {
    /** Array of order serial numbers. */
    orderSerialNumber: (value: number|string|number[]|string[]) => this;
}

export interface GetOrdersAuctionDetailsRequest extends Gateway {
    /** Identifier type. */
    identType: (value: 'orders_id'|'orders_sn') => this;
    /** Orders Id values. */
    orders: (value: string|string[]) => this;
    /** Define orders values by passing them as an array */
    ids: (values: string|string[]) => this;
    /** Define orders values by passing them as an array */
    serialNumbers: (values: number|string|number[]|string[]) => this;
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
    products: (value: Array<Object>) => this;
    /** Whether to split payments */
    splitPayments: (value: Boolean) => this;
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
    documents: (value: Array<Object>) => this;
}

export interface GetOrdersDocumentsRequest extends Gateway {
    /** Order serial number. */
    orderSerialNumber: (value: string|string[]) => this;
    /** Document type */
    documentType: (value: 'sales_confirmation'|'vat_invoice'|'corrective_vat_invoice'|'advance_vat_invoice'|'final_advance_vat_invoice'|'pro_forma_invoice'|'advance_pro_forma_invoice'|'final_advance_pro_forma_invoice'|'delivery_note'|'fiscal_receipt'|'fiscal_invoice'|'other') => this;
    /** Elements returned by api */
    returnElements: (value: string|string[]) => this;
}

export interface PostOrdersDocumentsRequest extends AppendableGateway<PostOrdersDocumentsRequest> {
    /** List of documents. */
    documents: (value: Array<Object>) => this;
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
    order: (value: Object) => this;
    /** List of attachment IDs to be removed from the details of the selected order */
    images: (value: Array<Object>) => this;
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
    settings: (value: Object) => this;
    order: (value: Object) => this;
    /** List of image attachments */
    images: (value: Array<Object>) => this;
    orderId: (value: string) => this;
    orderSerialNumber: (value: number|string) => this;
}

export interface GetOrdersLabelsRequest extends Gateway {
    /** Order serial number. */
    orderSerialNumber: (value: number|string) => this;
}

export interface SearchOrdersOpinionsRequest extends PagableGateway<SearchOrdersOpinionsRequest,SearchOpinionsResponse> {
    /** Review identification */
    opinion: (value: Object) => this;
    /** Orders. */
    orders: (value: Object) => this;
    /** Customer data. */
    clients: (value: Object) => this;
    /** Date range */
    dateRange: (value: Object) => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
    /** Possibility of sorting returned list */
    ordersBy: (value: Array<Object>) => this;
    orderId: (value: string) => this;
    orderSerialNumber: (value: string) => this;
    clientId: (value: string) => this;
    clientLogin: (value: string) => this;
    clientCode: (value: string) => this;
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
    orders: (value: Array<Object>) => this;
}

export interface PutOrdersRequest extends AppendableGateway<PutOrdersRequest> {
    /** Orders. */
    orders: (value: Array<Object>) => this;
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
    clients: (value: Array<Object>) => this;
    /** Ranges of dates or serial numbers. */
    ordersRange: (value: Object) => this;
    /** Order source data. */
    orderSource: (value: Object) => this;
    /** Products list. */
    products: (value: Array<Object>) => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
    /** Customer asked for invoice. List of parameters: "y" - yes (paper invoicing ), "e" - yes (electronic invoicing ), "n" - no. */
    clientRequestInvoice: (value: string) => this;
    /** Information on consignments. */
    packages: (value: Object) => this;
    /** Stock quantities data. */
    stocks: (value: Array<Object>) => this;
    /** Used discount codes data. */
    campaign: (value: Object) => this;
    /** Loyalty points. */
    loyaltyPointsMode: (value: 'all'|'given'|'taken'|'given_or_taken'|'given_and_taken'|'not_given_nor_taken') => this;
    /** Order handler. */
    orderOperatorLogin: (value: string) => this;
    /** Order picker. */
    orderPackingPersonLogin: (value: string) => this;
    /** Possibility of sorting returned list */
    ordersBy: (value: Array<Object>) => this;
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
    orderPackages: (value: Array<Object>) => this;
}

export interface PutOrdersPackagesRequest extends AppendableGateway<PutOrdersPackagesRequest> {
    /** List of parcels assigned to the order Maximum default number: 100 parcels. */
    orderPackages: (value: Array<Object>) => this;
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
    orders: (value: Array<Object>) => this;
}

export interface PutOrdersProfitMarginRequest extends AppendableGateway<PutOrdersProfitMarginRequest> {
    /** Orders. */
    orders: (value: Array<Object>) => this;
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
    clients: (value: Array<Object>) => this;
    /** Ranges of dates or serial numbers. */
    ordersRange: (value: Object) => this;
    /** Order source data. */
    orderSource: (value: Object) => this;
    /** Products list. */
    products: (value: Array<Object>) => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
    /** Customer asked for invoice. List of parameters: "invoice" - yes (paper invoicing ), "e_invoice" - yes (electronic invoicing ), "n" - no. */
    clientRequestInvoice: (value: string) => this;
    /** Information on consignments. */
    packages: (value: Object) => this;
    /** Stock quantities data. */
    stocks: (value: Array<Object>) => this;
    /** Used discount codes data. */
    campaign: (value: Object) => this;
    /** Loyalty points. */
    loyaltyPointsMode: (value: 'all'|'given'|'taken'|'given_or_taken'|'given_and_taken'|'not_given_nor_taken') => this;
    /** Order handler. */
    orderOperatorLogin: (value: string) => this;
    /** Order picker. */
    orderPackingPersonLogin: (value: string) => this;
    /** Possibility of sorting returned list */
    ordersBy: (value: Array<Object>) => this;
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
    parcelParameters: (value: Array<Object>) => this;
    /** Shipment configuration options available for Inpost Smile courier */
    parcelParametersByPackages: (value: Array<Object>) => this;
}

export interface PostPackagesRequest extends AppendableGateway<PostPackagesRequest> {
    /** List of parcels assigned to the order Maximum default number: 100 parcels. */
    orderPackages: (value: Array<Object>) => this;
}

export interface PutPackagesRequest extends AppendableGateway<PutPackagesRequest> {
    /** List of parcels assigned to the order Maximum default number: 100 parcels. */
    orderPackages: (value: Array<Object>) => this;
}

export interface SearchPackagesRequest extends AppendableGateway<SearchPackagesRequest> {
    /** Consignments numbers. */
    deliveryPackageNumbers: (value: string|string[]) => this;
    /** Element, package is assigned to */
    events: (value: Array<Object>) => this;
    /** Return parcel labels. */
    returnLabels: (value: Boolean) => this;
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
    other: (value: Object) => this;
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
    other: (value: Object) => this;
}

export interface GetProductsSKUbyBarcodeRequest extends Gateway {
    /** List of sought products by indexes. */
    productIndices: (value: string|string[]) => this;
    /** Search for products only by IAI code */
    searchOnlyInCodeIai: (value: Boolean) => this;
}

export interface PutProductsAttachmentsRequest extends AppendableGateway<PutProductsAttachmentsRequest> {
    productsAttachments: (value: Array<Object>) => this;
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
    /** Define products values by passing them as an array */
    ids: (values: number|string|number[]|string[]) => this;
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
    filtersActive: (value: Array<Object>) => this;
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
    producers: (value: Array<Object>) => this;
}

export interface PutProductsBrandsRequest extends AppendableGateway<PutProductsBrandsRequest> {
    /** List of manufacturers assigned to sought products. */
    producers: (value: Array<Object>) => this;
}

export interface PostProductsBundlesRequest extends AppendableGateway<PostProductsBundlesRequest> {
    /** Parameters transmitted to method */
    params: (value: Array<Object>) => this;
}

export interface DeleteProductsBundlesProductsRequest extends AppendableGateway<DeleteProductsBundlesProductsRequest> {
    /** Parameters transmitted to method */
    params: (value: Array<Object>) => this;
}

export interface PostProductsBundlesProductsRequest extends AppendableGateway<PostProductsBundlesProductsRequest> {
    /** Parameters transmitted to method */
    params: (value: Array<Object>) => this;
}

export interface PutProductsBundlesProductsQuantityRequest extends AppendableGateway<PutProductsBundlesProductsQuantityRequest> {
    /** Parameters transmitted to method */
    params: (value: Array<Object>) => this;
}

export interface PutProductsBundlesRenewRequest extends AppendableGateway<PutProductsBundlesRenewRequest> {
    /** Parameters transmitted to method */
    params: (value: Array<Object>) => this;
}

export interface GetProductsCategoriesRequest extends PagableGateway<GetProductsCategoriesRequest> {
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
    categories: (value: Array<Object>) => this;
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
    params: (value: Array<Object>) => this;
}

export interface DeleteProductsCollectionsProductsRequest extends AppendableGateway<DeleteProductsCollectionsProductsRequest> {
    /** Parameters transmitted to method */
    params: (value: Array<Object>) => this;
}

export interface PostProductsCollectionsProductsRequest extends AppendableGateway<PostProductsCollectionsProductsRequest> {
    /** Parameters transmitted to method */
    params: (value: Array<Object>) => this;
}

export interface PutProductsCollectionsProductsRequest extends AppendableGateway<PutProductsCollectionsProductsRequest> {
    /** Parameters transmitted to method */
    params: (value: Array<Object>) => this;
}

export interface PutProductsCollectionsRenewRequest extends AppendableGateway<PutProductsCollectionsRenewRequest> {
    /** Parameters transmitted to method */
    params: (value: Array<Object>) => this;
}

export interface SearchProductsDeliveryTimeRequest extends AppendableGateway<SearchProductsDeliveryTimeRequest> {
    /** Stock ID */
    stockId: (value: number|string) => this;
    /** Should products be prepared for personal collection? */
    isCollectionInPerson: (value: Boolean) => this;
    products: (value: Array<Object>) => this;
}

export interface GetProductsDescriptionsRequest extends Gateway {
    /** Identifier type. */
    type: (value: 'id'|'index'|'codeExtern'|'codeProducer') => this;
    /** ID value. */
    ids: (value: number|string|number[]|string[]) => this;
    /** Shop Id */
    shopId: (value: number|string) => this;
}

export interface PutProductsDescriptionsRequest extends AppendableGateway<PutProductsDescriptionsRequest> {
    /** Products list. */
    products: (value: Array<Object>) => this;
    productId: (value: number|string) => this;
}

export interface PutProductsGroupsMainProductRequest extends AppendableGateway<PutProductsGroupsMainProductRequest> {
    groups: (value: Array<Object>) => this;
}

export interface PutProductsGroupsOrderRequest extends AppendableGateway<PutProductsGroupsOrderRequest> {
    groups: (value: Array<Object>) => this;
    /** Defines order of products within group by automatically setting proprities in order of appearance */
    productIdsInOrder: (productIds: number|string|number[]|string[]) => this;
}

export interface PutProductsGroupsSettingsRequest extends AppendableGateway<PutProductsGroupsSettingsRequest> {
    groups: (value: Array<Object>) => this;
}

export interface GetProductsIdBySizecodeRequest extends Gateway {
    /** Search codes. */
    codes: (value: string|string[]) => this;
    /** Type of codes. Acceptable values: "external" (default value) - external system code, "producer" - producer code, and "all" - any of the above codes */
    type: (value: string) => this;
}

export interface DeleteProductsImagesRequest extends AppendableGateway<DeleteProductsImagesRequest> {
    /** Parameters transmitted to method */
    params: (value: Array<Object>) => this;
}

export interface PutProductsImagesRequest extends AppendableGateway<PutProductsImagesRequest> {
    productsImagesSettings: (value: Object) => this;
    /** Information on product images */
    productsImages: (value: Array<Object>) => this;
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
    marketingZones: (value: Object) => this;
    /** Promotional price settings */
    newPriceSettings: (value: Object) => this;
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
    promotionElements: (value: Array<Object>) => this;
}

export interface PutProductsMarketingPromotionRequest extends AppendableGateway<PutProductsMarketingPromotionRequest> {
    /** Promotion ID */
    promotionId: (value: string) => this;
    /** Promotion name */
    promotionName: (value: string) => this;
    /** List of stores IDs When mask is determined, this parameter is omitted. */
    shopsIds: (value: number|string|number[]|string[]) => this;
    /** Special zones */
    marketingZones: (value: Object) => this;
    /** Promotional price settings */
    newPriceSettings: (value: Object) => this;
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
    promotionElements: (value: Array<Object>) => this;
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
    products: (value: Array<Object>) => this;
    assignment_mode: (value: 'auto'|'manual') => this;
    marketing_zones: (value: Object) => this;
    /** Marketing hotspots in shops */
    shops: (value: Array<Object>) => this;
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
    products: (value: Array<Object>) => this;
}

export interface DeleteProductsOpinionsRequest extends Gateway {
    id: (value: number|string) => this;
}

export interface GetProductsOpinionsRequest extends PagableGateway<GetProductsOpinionsRequest> {
    /** Review identification */
    opinion: (value: Object) => this;
    /** Products list. */
    products: (value: Object) => this;
    /** Customer data. */
    clients: (value: Object) => this;
    /** Date range */
    dateRange: (value: Object) => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
    /** Possibility of sorting returned list */
    ordersBy: (value: Array<Object>) => this;
    /** Define ordering of records */
    orderBy: (elementName: "date"|"rating"|"scorePositive"|"scoreNegative"|"modificationDatetime", descending: boolean) => this;
}

export interface PostProductsOpinionsRequest extends AppendableGateway<PostProductsOpinionsRequest> {
    /** List of reviews */
    opinions: (value: Array<Object>) => this;
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
    items: (value: Array<Object>) => this;
    /** Settings */
    settings: (value: Object) => this;
}

export interface SearchProductsParametersRequest extends PagableGateway<SearchProductsParametersRequest,SearchProductsParametersResponse> {
    /** List of identifiers */
    ids: (value: number|string|number[]|string[]) => this;
    /** Element text ID - can be entered instead of "id". */
    textIds: (value: Array<Object>) => this;
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
    products: (value: Array<Object>) => this;
}

export interface GetProductsRequest extends Gateway<SearchProductsResponse> {
    /** List of the unique, indexed product codes (IAI code / External system code / Producer code). You can transfer a maximum of 100 products IDs in one request. */
    productIds: (value: string|string[]) => this;
}

export interface PostProductsRequest extends AppendableGateway<PostProductsRequest> {
    /** Settings */
    settings: (value: Object) => this;
    /** Icon and photos settings */
    picturesSettings: (value: Object) => this;
    /** Products list. */
    products: (value: Array<Object>) => this;
    /** Set various types of names or descriptions to the product */
    setText: (text: string, type: "name"|"short"|"long"|"metatitle"|"metadescription"|"metakeywords"|"acutionname"|"auctiondescription", language: string, shopId: number|string) => this;
    /** Increases product price by amount */
    addPrice: (value: number, type: 'retail'|'wholesale'|'pos'|'minimal'|'strikethroughRetail'|'strikethroughWholesale'|'suggested'|'automaticCalculation') => this;
    /** Sets product price by amount */
    setPrice: (value: number, type: 'retail'|'wholesale'|'pos'|'minimal'|'strikethroughRetail'|'strikethroughWholesale'|'suggested'|'automaticCalculation') => this;
}

export interface PutProductsRequest extends AppendableGateway<PutProductsRequest> {
    /** Settings */
    settings: (value: Object) => this;
    /** Icon and photos settings */
    picturesSettings: (value: Object) => this;
    /** Products list. */
    products: (value: Array<Object>) => this;
    /** Set various types of names or descriptions to the product */
    setText: (text: string, type: "name"|"short"|"long"|"metatitle"|"metadescription"|"metakeywords"|"acutionname"|"auctiondescription", language: string, shopId: number|string) => this;
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
    dispatchSettings: (value: Object) => this;
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
    categories: (value: Array<Object>) => this;
    /** List of manufacturers assigned to sought products. */
    producers: (value: Array<Object>) => this;
    /** List of sought products. This parameter can be used, when there have been no other parameter entered productIndexes. */
    productParams: (value: Array<Object>) => this;
    /** List of sought products by indexes. */
    productIndexes: (value: Array<Object>) => this;
    /** Data of stores product is assigned to. */
    productShops: (value: Array<Object>) => this;
    /** List of special offers, sought products are assigned to. */
    productPromotionsIds: (value: number|string|number[]|string[]) => this;
    /** Settings concerning narrowing list of products found by date. */
    productDate: (value: Object) => this;
    /** Parameters */
    productParametersParams: (value: Array<Object>) => this;
    /** Series, sought products are assigned to. */
    productSeriesParams: (value: Array<Object>) => this;
    /** List of units of measure assigned to sought products. */
    productUnits: (value: Array<Object>) => this;
    /** Narrowing list of products by set warranties. */
    productWarranties: (value: Array<Object>) => this;
    /** Suppliers, sought products are assigned to. */
    deliverersIds: (value: number|string|number[]|string[]) => this;
    /** Product contains text (searches in short and long description).  */
    containsText: (value: string) => this;
    /** Product code or it's part (based on producer's code, external product system code and code that is visible on a product card). Search is accesible only with available products. */
    containsCodePart: (value: string) => this;
    /** Product availability in stocks */
    productAvailableInStocks: (value: Object) => this;
    /** Product availability on auctions */
    productAvailableInAuctions: (value: Object) => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
    /** Possibility of sorting returned list */
    ordersBy: (value: Array<Object>) => this;
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
    searchByShops: (value: Object) => this;
    /** Price range for sought products. */
    productSearchPriceRange: (value: Object) => this;
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
    productType: (value: Object) => this;
    /** An array of menu elements */
    productMenuItems: (value: Object) => this;
    /** Warehouse location ID */
    productLocationId: (value: number|string) => this;
    /** Warehouse location full path Use a backslash (\) as a separator, for example: M1\Section name\Location name If location_id parameter is provided, the full warehouse location path will not be taken into account */
    productLocationTextId: (value: string) => this;
    /** Return all size attributes regardless of whether product prices are the same as the base price or if they differ from it. Available values: 1 - all size attributes will be returned; 0 - only attributes of those sizes, where the prices will be different from the base price (default value) will be returned. */
    alwaysReturnProductShopSizesAttributes: (value: Boolean) => this;
    /** Returns reservation information regardless of inventory levels */
    returnEmptyStocksWithReservation: (value: Boolean) => this;
    /** Data for operations on individual photos */
    picturesData: (value: Object) => this;
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
    questions: (value: Array<Object>) => this;
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
    filtersActive: (value: Array<Object>) => this;
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
    series: (value: Array<Object>) => this;
}

export interface DeleteProductsSizesRequest extends AppendableGateway<DeleteProductsSizesRequest> {
    /** Edition mode */
    mode: (value: 'delete_by_size'|'delete_all') => this;
    /** Parameters transmitted to method */
    params: (value: Array<Object>) => this;
    /** Product parameters recognized by index. */
    deleteSizesIndexesData: (value: string|string[]) => this;
}

export interface GetProductsSizesRequest extends Gateway {
    /** Allows to change offset and number of records returned */
    page: (pagenumber: number, pageSize?: number) => this;
}

export interface PutProductsSizesRequest extends AppendableGateway<PutProductsSizesRequest> {
    /** Edition mode */
    mode: (value: 'edit'|'add'|'replace') => this;
    /** Product parameters recognized by product ID or its sizes */
    sizesProductsData: (value: Array<Object>) => this;
    /** Product parameters recognized by index */
    indexesData: (value: Array<Object>) => this;
}

export interface PutProductsStockQuantityRequest extends AppendableGateway<PutProductsStockQuantityRequest> {
    /** Products list. */
    products: (value: Array<Object>) => this;
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
    products: (value: Array<Object>) => this;
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
    products: (value: Array<Object>) => this;
}

export interface PutProductsSupplierCodeRequest extends AppendableGateway<PutProductsSupplierCodeRequest> {
    /** Products list. */
    products: (value: Array<Object>) => this;
}

export interface PutProductsSupplierProductDataRequest extends AppendableGateway<PutProductsSupplierProductDataRequest> {
    /** Products list. */
    products: (value: Array<Object>) => this;
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
    refundDetails: (value: Object) => this;
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
    entities: (value: Array<Object>) => this;
    /** Type of entity */
    type: (value: 'producer'|'person') => this;
}

export interface PutResponsibilityEntitiesRequest extends AppendableGateway<PutResponsibilityEntitiesRequest> {
    entities: (value: Array<Object>) => this;
    /** Type of entity */
    type: (value: 'producer'|'person') => this;
}

export interface DeleteResponsibilityEntitiesRequest extends Gateway {
    /** List of codes */
    code: (value: string|string[]) => this;
    /** Type of entity */
    type: (value: string) => this;
}

export interface GetReturnsRequest extends PagableGateway<GetReturnsRequest> {
    /** Search by the order serial number to which a return was added. */
    order_sn: (value: number|string) => this;
    /** Search by return ID. */
    return_id: (value: number|string) => this;
    /** Search by a return shipment number from a customer to the shop . */
    return_shipping_number: (value: string) => this;
    /** Date range. */
    range: (value: Object) => this;
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
    products: (value: Array<Object>) => this;
    status: (value: number|string) => this;
    client_received: (value: Boolean) => this;
    change_status: (value: Boolean) => this;
    courier_id: (value: number|string) => this;
    return_operator: (value: string) => this;
    tryCorrectInvoice: (value: Boolean) => this;
    include_shipping_cost: (value: string) => this;
    additional_payment_cost: (value: string) => this;
    emptyReturn: (value: 'n'|'y') => this;
}

export interface PutReturnsRequest extends AppendableGateway<PutReturnsRequest> {
    returns: (value: Array<Object>) => this;
}

export interface PutReturnsSerialNumberRequest extends AppendableGateway<PutReturnsSerialNumberRequest> {
    /** Return number. */
    return_id: (value: number|string) => this;
    /** Products list. */
    products: (value: Array<Object>) => this;
}

export interface GetReturnsStatusesRequest extends Gateway {}

export interface GetRmaRequest extends PagableGateway<GetRmaRequest> {
    rmaIds: (value: number|string|number[]|string[]) => this;
    /** Stock ID */
    stockId: (value: number|string) => this;
    /** Login of the user handling the complaint */
    operatorLogin: (value: string) => this;
    /** Unique client's number. */
    clientId: (value: string) => this;
    /** Complaint creation date in the YYYY-MM-DD format */
    creationDate: (value: Object) => this;
    /** Complaint modification date in the YYYY-MM-DD format */
    modificationDate: (value: Object) => this;
    /** Complaint closing date in the YYYY-MM-DD format */
    endDate: (value: Object) => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
}

export interface PutRmaRequest extends AppendableGateway<PutRmaRequest> {
    /** Complaints. */
    rmas: (value: Array<Object>) => this;
}

export interface GetRmaStatusesRequest extends Gateway {}

export interface GetShopsCurrenciesRequest extends Gateway {}

export interface GetShopsLanguagesRequest extends Gateway {}

export interface DeleteSizechartsRequest extends Gateway {
    /** #!identyfikatory!# */
    ids: (value: number|string|number[]|string[]) => this;
}

export interface GetSizechartsRequest extends PagableGateway<GetSizechartsRequest> {
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
    sizeCharts: (value: Array<Object>) => this;
}

export interface GetSizesRequest extends Gateway {
    /** When the value is 'y', the last size modification date is returned, formatted as YYYY-MM-DD HH-MM-SS. */
    return_last_changed_time: (value: string) => this;
}

export interface PutSizesRequest extends AppendableGateway<PutSizesRequest> {
    /** Size table. */
    sizes: (value: Array<Object>) => this;
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
    campaigns: (value: Array<Object>) => this;
}

export interface PutSnippetsCampaignRequest extends AppendableGateway<PutSnippetsCampaignRequest> {
    campaigns: (value: Array<Object>) => this;
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
    cookies: (value: Array<Object>) => this;
}

export interface PutSnippetsCookiesRequest extends AppendableGateway<PutSnippetsCookiesRequest> {
    cookies: (value: Array<Object>) => this;
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
    snippets: (value: Array<Object>) => this;
}

export interface PutSnippetsRequest extends AppendableGateway<PutSnippetsRequest> {
    snippets: (value: Array<Object>) => this;
}

export interface DeleteSnippetsRequest extends Gateway {
    /** List of identifiers */
    id: (value: number|string|number[]|string[]) => this;
}

export interface PostSubscriptionsChangeDeliveryDatesRequest extends Gateway {
    subscriptionsDeliveryDatesModel: (value: Object) => this;
}

export interface PostSubscriptionsChangePriceAutoUpdateRequest extends Gateway {
    subscriptionsAutoPriceModel: (value: Object) => this;
}

export interface PostSubscriptionsChangeStatusRequest extends Gateway {
    subscriptionsStatusModel: (value: Object) => this;
}

export interface PostSubscriptionsDeleteProductRequest extends Gateway {
    subscriptionDeleteProducts: (value: Object) => this;
}

export interface PostSubscriptionsEditRequest extends Gateway {
    /** Subscriptions model */
    subscriptionsEditRequest: (value: Object) => this;
}

export interface PostSubscriptionsEditProductRequest extends Gateway {
    subscriptionEditProducts: (value: Object) => this;
}

export interface PostSubscriptionsItemsListRequest extends Gateway {
    request: (value: Object) => this;
}

export interface PostSubscriptionsListViewFetchIdsRequest extends Gateway {
    /** Filters that limit the result of a customer query. */
    filter: (value: Object) => this;
}

export interface PostSubscriptionsListViewListRequest extends Gateway {
    /** Object describing the request for a list of Subscriptions. */
    request: (value: Object) => this;
}

export interface PostSubscriptionsSetRebateCodeRequest extends Gateway {
    /** Object with discount code data to set */
    request: (value: Object) => this;
}

export interface PostSubscriptionsUnsetRebateCodeRequest extends Gateway {
    /** Object with request witch unset rebate code */
    request: (value: Object) => this;
}

export interface GetSystemConfigRequest extends Gateway {}

export interface PutSystemConfigRequest extends Gateway {
    /** Panel settings */
    panelSettings: (value: Object) => this;
}

export interface GetSystemCurrenciesRequest extends Gateway {
    /** Currency symbol in ISO 4217 format. */
    symbol: (value: string) => this;
    /** Date in format YYYY-MM-DD-HH MM:SS. */
    date: (value: string) => this;
}

export interface PutSystemCurrenciesRequest extends AppendableGateway<PutSystemCurrenciesRequest> {
    currencies: (value: Array<Object>) => this;
}

export interface GetSystemProcessesAutomationRequest extends Gateway {
    /** Shop Id */
    shopId: (value: number|string) => this;
}

export interface PutSystemProcessesAutomationRequest extends Gateway {
    /** Shop Id */
    shopId: (value: number|string) => this;
    /** Orders. */
    orders: (value: Object) => this;
}

export interface GetSystemServerLoadRequest extends Gateway {}

export interface GetSystemServerTimeRequest extends Gateway {}

export interface GetSystemShopsDataRequest extends Gateway {}

export interface GetSystemUnitsRequest extends Gateway {
    /** List of languages */
    languagesIds: (value: string|string[]) => this;
}

export interface PutSystemUnitsRequest extends AppendableGateway<PutSystemUnitsRequest> {
    units: (value: Array<Object>) => this;
}

export interface GetSystemUsersRequest extends Gateway {
    /** User type. List of options "all" - All users, "active" - Only active users */
    userType: (value: 'all'|'active') => this;
}

export interface PutVouchersBlockRequest extends AppendableGateway<PutVouchersBlockRequest> {
    vouchers: (value: Array<Object>) => this;
}

export interface GetVouchersTypesRequest extends PagableGateway<GetVouchersTypesRequest> {
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
}

export interface PutVouchersUnblockRequest extends AppendableGateway<PutVouchersUnblockRequest> {
    vouchers: (value: Array<Object>) => this;
}

export interface DeleteVouchersRequest extends AppendableGateway<DeleteVouchersRequest> {
    vouchers: (value: Array<Object>) => this;
}

export interface GetVouchersRequest extends PagableGateway<GetVouchersRequest> {
    vouchers: (value: Array<Object>) => this;
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
    /** Define vouchers values by passing them as an array */
    ids: (values: number|string|number[]|string[]) => this;
    /** Define vouchers values by passing them as an array */
    numbers: (values: number|string|number[]|string[]) => this;
}

export interface PostVouchersRequest extends AppendableGateway<PostVouchersRequest> {
    /** List of vouchers to add */
    vouchers: (value: Array<Object>) => this;
}

export interface PutVouchersRequest extends AppendableGateway<PutVouchersRequest> {
    /** List of vouchers to edit */
    vouchers: (value: Array<Object>) => this;
}

export interface GetWarrantiesCountTotalRequest extends Gateway {
    warranty_ids: (value: string|string[]) => this;
}

export interface PutWarrantiesLanguageDataRequest extends AppendableGateway<PutWarrantiesLanguageDataRequest> {
    lang_data: (value: Array<Object>) => this;
}

export interface DeleteWarrantiesRequest extends Gateway {
    warranty_ids: (value: string|string[]) => this;
}

export interface GetWarrantiesRequest extends PagableGateway<GetWarrantiesRequest> {
    warranty_ids: (value: string|string[]) => this;
    /** Number of results on page. */
    results_limit: (value: number|string) => this;
    /** Result page number. */
    results_page: (value: number|string) => this;
    results_order: (value: Object) => this;
}

export interface PostWarrantiesRequest extends AppendableGateway<PostWarrantiesRequest> {
    warranties: (value: Array<Object>) => this;
}

export interface PutWarrantiesRequest extends AppendableGateway<PutWarrantiesRequest> {
    warranties: (value: Array<Object>) => this;
}

export interface GetWmsLocationsRequest extends PagableGateway<GetWmsLocationsRequest> {
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

export interface GetWmsStocksdocumentsDocumentsRequest extends PagableGateway<GetWmsStocksdocumentsDocumentsRequest> {
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
    dateRange: (value: Object) => this;
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
    dateRange: (value: Object) => this;
    /** Page with results number. Numeration starts from 0 */
    resultsPage: (value: number|string) => this;
    /** Number of results on page. Value from 1 to 100 */
    resultsLimit: (value: number|string) => this;
    /** Define range of dates and their type */
    dates: (dateFrom: DateLike, dateTo: DateLike, type: "open"|"modify") => this;
}

export interface DeleteWmsStocksdocumentsProductsRequest extends AppendableGateway<DeleteWmsStocksdocumentsProductsRequest> {
    /** Products list. */
    products: (value: Array<Object>) => this;
    type: (value: 'pz'|'pw'|'px'|'rx'|'rw'|'mm') => this;
    /** Document identifier. */
    id: (value: number|string) => this;
}

export interface GetWmsStocksdocumentsProductsRequest extends PagableGateway<GetWmsStocksdocumentsProductsRequest> {
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
    products: (value: Array<Object>) => this;
    type: (value: 'pz'|'pw'|'px'|'rx'|'rw'|'mm') => this;
    /** Document identifier. */
    id: (value: number|string) => this;
}

export interface PutWmsStocksdocumentsProductsRequest extends AppendableGateway<PutWmsStocksdocumentsProductsRequest> {
    /** Products list. */
    products: (value: Array<Object>) => this;
    type: (value: 'pz'|'pw'|'px'|'rx'|'rw'|'mm') => this;
    /** Document identifier. */
    id: (value: number|string) => this;
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
    suppliers: (value: Array<Object>) => this;
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
}

declare const defaultExport: (url: string, apiKey: string, version?: number | string) => Gateways;
export default defaultExport;