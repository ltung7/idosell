/**
 * @typedef {Object} GetClientsBalanceRequest
 * @property {(client_numbers: Array<Integer>) => GetClientsBalanceRequest} client_numbers Customer Id
 * @property {(text_search: String) => GetClientsBalanceRequest} text_search Text search through customer data.
 * @property {(active: 'yes'|'no') => GetClientsBalanceRequest} active 
 * @property {(has_trade_credit: 'nonzero'|'positive'|'negative'|'zero') => GetClientsBalanceRequest} has_trade_credit 
 * @property {(last_purchase_date: Object) => GetClientsBalanceRequest} last_purchase_date Start and end date (YYYY-MM-DD).
 * @property {(return_elements: Array<String>) => GetClientsBalanceRequest} return_elements Elements to be returned by the endpoint. By default all elements are returned
 * @property {(results_page: Integer) => GetClientsBalanceRequest} results_page Results page number. Numbering begins at 0. Default value: 0.
 * @property {(results_limit: Integer) => GetClientsBalanceRequest} results_limit Maximum number of results on a single page. Default is 100.
 * @property {(dateFrom: DateLike, dateTo: DateLike) => GetClientsBalanceRequest} lastPurchased Type of date according to the index results
 * @property {(page: Integer, limit: Integer) => GetClientsBalanceRequest} page Define page number and maximum results per page
 * @property {() => Integer} count Returns total numer of results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostClientsBalanceRequest
 * @property {(clientId: Integer) => PostClientsBalanceRequest} clientId Unique client's number.
 * @property {(operation: String) => PostClientsBalanceRequest} operation Operation: - add, - remove.
 * @property {(balance: Number) => PostClientsBalanceRequest} balance Value to add or remove from balance.
 * @property {(currency: String) => PostClientsBalanceRequest} currency Currency of operation.
 * @property {(note: String) => PostClientsBalanceRequest} note Note.
 * @property {(prepaidId: Integer) => PostClientsBalanceRequest} prepaidId Order payment identifier.
 * @property {(balance: Number, currency: String) => PostClientsBalanceRequest} add Adds value to client balance
 * @property {(balance: Number, currency: String) => PostClientsBalanceRequest} remove Subtracts value to client balance
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetClientsRequest
 * @property {(clientsIds: Array<Integer>) => GetClientsRequest} clientsIds Customer numbers.
 * @property {(clientCodesExternal: Array<String>) => GetClientsRequest} clientCodesExternal External system codes list
 * @property {(clientTextSearch: String) => GetClientsRequest} clientTextSearch Text search through customer data.
 * @property {(clientIsActive: 'yes'|'no') => GetClientsRequest} clientIsActive Active
 * @property {(clientHasTradeCredit: 'nonzero'|'positive'|'negative'|'zero') => GetClientsRequest} clientHasTradeCredit Trade credit: - positive or negative, - only positive, - only negative, - only zero.
 * @property {(clientLastPurchaseDate: Object) => GetClientsRequest} clientLastPurchaseDate Date of last purchase.
 * @property {(clientsLastModificationDate: Object) => GetClientsRequest} clientsLastModificationDate Last modification date.
 * @property {(returnElements: Array<String>) => GetClientsRequest} returnElements Elements to be returned by the endpoint. By default all elements are returned
 * @property {(resultsPage: Integer) => GetClientsRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetClientsRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(dateFrom: DateLike, dateTo: DateLike) => GetClientsRequest} lastPurchased Type of date according to the index results
 * @property {(dateFrom: DateLike, dateTo: DateLike) => GetClientsRequest} lastModified Type of date according to the index results
 * @property {(page: Integer, limit: Integer) => GetClientsRequest} page Define page number and maximum results per page
 * @property {() => Integer} count Returns total numer of results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostClientsRequest
 * @property {(clients: Array<Object>) => PostClientsRequest} clients Customer data.
 * @property {(login: String) => PostClientsRequest} login Customer's login.
 * @property {(code_extern: String) => PostClientsRequest} code_extern External system code.
 * @property {(email: String) => PostClientsRequest} email Customer e-mail address.
 * @property {(firstname: String) => PostClientsRequest} firstname Customer's first name.
 * @property {(lastname: String) => PostClientsRequest} lastname Customer's last name.
 * @property {(street: String) => PostClientsRequest} street Address.
 * @property {(zipcode: String) => PostClientsRequest} zipcode Customer's postal code.
 * @property {(city: String) => PostClientsRequest} city Customer's city.
 * @property {(country_code: String) => PostClientsRequest} country_code Customer country (ISO 3166-1 alfa-2 code).
 * @property {(province_code: String) => PostClientsRequest} province_code Administrative region code.
 * @property {(password: String) => PostClientsRequest} password Customer password (min. 8 characters).
 * @property {(birth_date: String) => PostClientsRequest} birth_date Date of birth.
 * @property {(phone: String) => PostClientsRequest} phone Customer phone number.
 * @property {(company: String) => PostClientsRequest} company 
 * @property {(vat_number: String) => PostClientsRequest} vat_number Customer Tax no.
 * @property {(wholesaler: Boolean) => PostClientsRequest} wholesaler Determines, whether client is a wholesaler.
 * @property {(client_type: 'person'|'person_male'|'person_female'|'firm') => PostClientsRequest} client_type Customer type, possible values: - person - if client sex is not determined, - person_male - when client is a male, - person_female - when a customer is a woman, - firm - when client is company.
 * @property {(language: String) => PostClientsRequest} language Customer language ID.
 * @property {(shops: Array<Integer>) => PostClientsRequest} shops Determines, in which store account should be active.
 * @property {(block_autosigning_to_shops: Boolean) => PostClientsRequest} block_autosigning_to_shops Defines availability of log in to other pages than the ones given in the element: shops .
 * @property {(currency: String) => PostClientsRequest} currency Customer default currency (ISO 4217 code).
 * @property {(delivery_dates: Array<String>) => PostClientsRequest} delivery_dates 
 * @property {(external_balance_value: Number) => PostClientsRequest} external_balance_value Customer account balance in external system.
 * @property {(external_trade_credit_limit_value: Number) => PostClientsRequest} external_trade_credit_limit_value Debt limit.
 * @property {(email_newsletter: Boolean) => PostClientsRequest} email_newsletter Have customer agreed to a newsletter. List of allowed parameters: "y" - yes, "n" - no. The value will be set in all shops in which the customer account is active.
 * @property {(sms_newsletter: Boolean) => PostClientsRequest} sms_newsletter Have customer agreed to a newsletter. List of allowed parameters: "y" - yes, "n" - no. The value will be set in all shops in which the customer account is active.
 * @property {(client_group: Integer) => PostClientsRequest} client_group Discount group ID.
 * @property {(request_reference: String) => PostClientsRequest} request_reference Field used for identifying request-response pairs for the endpoint.
 * @property {(newsletter_email_approvals: Array<Object>) => PostClientsRequest} newsletter_email_approvals List of shops where a customer agreed or didn't agree to receive email newsletter.
 * @property {(newsletter_sms_approvals: Array<Object>) => PostClientsRequest} newsletter_sms_approvals List of shops where a customer agreed or didn't agree to receive sms newsletter.
 * @property {(block_group_auto_assignment: Boolean) => PostClientsRequest} block_group_auto_assignment Block assigning of discount groups automatically based on order history
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutClientsRequest
 * @property {(clients: Array<Object>) => PutClientsRequest} clients Customer data.
 * @property {(clientLogin: String) => PutClientsRequest} clientLogin Customer's login.
 * @property {(clientEmail: String) => PutClientsRequest} clientEmail E-mail address.
 * @property {(clientFirstName: String) => PutClientsRequest} clientFirstName Customer's first name.
 * @property {(clientLastName: String) => PutClientsRequest} clientLastName Customer's last name.
 * @property {(clientStreet: String) => PutClientsRequest} clientStreet Street and number.
 * @property {(clientZipCode: String) => PutClientsRequest} clientZipCode Customer's postal code.
 * @property {(clientCity: String) => PutClientsRequest} clientCity Customer's city.
 * @property {(clientCountryId: String) => PutClientsRequest} clientCountryId Country ID in accordance with ISO-3166.
 * @property {(clientProvinceId: String) => PutClientsRequest} clientProvinceId Administrative region code.
 * @property {(clientPassword: String) => PutClientsRequest} clientPassword Customer password (min. 8 characters).
 * @property {(clientBirthDate: String) => PutClientsRequest} clientBirthDate Date of birth.
 * @property {(clientPhone1: String) => PutClientsRequest} clientPhone1 Cell phone.
 * @property {(clientFirm: String) => PutClientsRequest} clientFirm Customer's company name.
 * @property {(clientNip: String) => PutClientsRequest} clientNip Customer Tax no.
 * @property {(clientIsWholesaler: Boolean) => PutClientsRequest} clientIsWholesaler Determines, whether client is a wholesaler.
 * @property {(clientType: 'person'|'person_male'|'person_female'|'firm') => PutClientsRequest} clientType Customer type, possible values: - person - if client sex is not determined, - person_male - when client is a male, - person_female - when a customer is a woman, - firm - when client is company.
 * @property {(langId: String) => PutClientsRequest} langId Language ID
 * @property {(blockLoginToOtherShops: Boolean) => PutClientsRequest} blockLoginToOtherShops Defines availability of log in to other pages than the ones given in the element: shops .
 * @property {(shopsIds: Array<Integer>) => PutClientsRequest} shopsIds List of stores IDs When mask is determined, this parameter is omitted.
 * @property {(currencyId: String) => PutClientsRequest} currencyId Currency ID
 * @property {(clientCodeExternal: String) => PutClientsRequest} clientCodeExternal External system code.
 * @property {(deliveryDates: Array<Object>) => PutClientsRequest} deliveryDates List with delivery dates and times
 * @property {(clientBalanceAmountExternal: Number) => PutClientsRequest} clientBalanceAmountExternal Customer account balance in external system.
 * @property {(clientTradeCreditLimitExternal: Number) => PutClientsRequest} clientTradeCreditLimitExternal Debt limit.
 * @property {(newsletterEmailApproval: Boolean) => PutClientsRequest} newsletterEmailApproval Permission to E-mail Newsletter.
 * @property {(newsletterSmsApproval: Boolean) => PutClientsRequest} newsletterSmsApproval Permission to SMS Newsletter.
 * @property {(clientGroupDiscountNumber: Integer) => PutClientsRequest} clientGroupDiscountNumber Discount group ID.
 * @property {(requestReference: String) => PutClientsRequest} requestReference Field used for identifying request-response pairs for the endpoint.
 * @property {(newsletterEmailApprovalsData: Array<Object>) => PutClientsRequest} newsletterEmailApprovalsData List of shops where a customer agreed or didn't agree to receive email newsletter.
 * @property {(newsletterSmsApprovalsData: Array<Object>) => PutClientsRequest} newsletterSmsApprovalsData List of shops where a customer agreed or didn't agree to receive sms newsletter.
 * @property {(clientActive: Boolean) => PutClientsRequest} clientActive Is the customer active
 * @property {(numberOfDaysToPay: Integer) => PutClientsRequest} numberOfDaysToPay Number of days to pay for invoice
 * @property {(affiliateLogin: String) => PutClientsRequest} affiliateLogin The parameter stores information about who acquired the customer
 * @property {(affiliateId: Integer) => PutClientsRequest} affiliateId ID of a partner who acquired a given customer.
 * @property {(clientNote: String) => PutClientsRequest} clientNote Notes from customer.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetClientsCrmRequest
 * @property {(clientLogin: String) => GetClientsCrmRequest} clientLogin Customer's login.
 * @property {(clientIsWholesaler: 'yes'|'no') => GetClientsCrmRequest} clientIsWholesaler Determines, whether client is a wholesaler.
 * @property {(clientCountryId: String) => GetClientsCrmRequest} clientCountryId Country ID in accordance with ISO-3166.
 * @property {(langId: String) => GetClientsCrmRequest} langId Language ID
 * @property {(clientCustomerServiceRepresentativeLogin: String) => GetClientsCrmRequest} clientCustomerServiceRepresentativeLogin Customer service representative.
 * @property {(clientDiscountGroupNumber: Integer) => GetClientsCrmRequest} clientDiscountGroupNumber Customer group number
 * @property {(clientRegistrationDate: Object) => GetClientsCrmRequest} clientRegistrationDate Date range of customer registrations
 * @property {(clientLastLoginDate: Object) => GetClientsCrmRequest} clientLastLoginDate Date of last customer login (YYYY-MM-DD)
 * @property {(clientType: 'person'|'person_male'|'person_female'|'firm') => GetClientsCrmRequest} clientType Customer type, possible values: - person - if client sex is not determined, - person_male - when client is a male, - person_female - when a customer is a woman, - firm - when client is company.
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
 * @property {(dateFrom: DateLike, dateTo: DateLike) => GetClientsCrmRequest} registered Type of date according to the index results
 * @property {(dateFrom: DateLike, dateTo: DateLike) => GetClientsCrmRequest} lastLoggedIn Type of date according to the index results
 * @property {(dateFrom: DateLike, dateTo: DateLike) => GetClientsCrmRequest} ordered Type of date according to the index results
 * @property {(page: Integer, limit: Integer) => GetClientsCrmRequest} page Define page number and maximum results per page
 * @property {() => Integer} count Returns total numer of results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} DeleteClientsDeliveryAddressRequest
 * @property {(clients: Array<Object>) => DeleteClientsDeliveryAddressRequest} clients Customer data.
 * @property {(clientLogin: String) => DeleteClientsDeliveryAddressRequest} clientLogin Customer's login.
 * @property {(clientCodeExternal: String) => DeleteClientsDeliveryAddressRequest} clientCodeExternal External system code.
 * @property {(clientDeliveryAddressId: Integer) => DeleteClientsDeliveryAddressRequest} clientDeliveryAddressId Delivery address ID.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetClientsDeliveryAddressRequest
 * @property {(clientCodesExternal: Array<String>) => GetClientsDeliveryAddressRequest} clientCodesExternal External system codes list.
 * @property {(clientIds: Array<Integer>) => GetClientsDeliveryAddressRequest} clientIds Customer ID.
 * @property {(clientLogins: Array<String>) => GetClientsDeliveryAddressRequest} clientLogins Customer's login.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostClientsDeliveryAddressRequest
 * @property {(clients: Array<Object>) => PostClientsDeliveryAddressRequest} clients Customer data.
 * @property {(clientLogin: String) => PostClientsDeliveryAddressRequest} clientLogin Customer's login.
 * @property {(clientCodeExternal: String) => PostClientsDeliveryAddressRequest} clientCodeExternal External system code.
 * @property {(shopsIds: Array<Integer>) => PostClientsDeliveryAddressRequest} shopsIds List of stores IDs When mask is determined, this parameter is omitted.
 * @property {(currencyId: String) => PostClientsDeliveryAddressRequest} currencyId Currency ID
 * @property {(clientDeliveryAddressFirstName: String) => PostClientsDeliveryAddressRequest} clientDeliveryAddressFirstName Recipient's first name.
 * @property {(clientDeliveryAddressLastName: String) => PostClientsDeliveryAddressRequest} clientDeliveryAddressLastName Recipient's last name.
 * @property {(clientDeliveryAddressAdditional: String) => PostClientsDeliveryAddressRequest} clientDeliveryAddressAdditional Additional information.
 * @property {(clientDeliveryAddressPhone1: String) => PostClientsDeliveryAddressRequest} clientDeliveryAddressPhone1 Cell phone.
 * @property {(clientDeliveryAddressCity: String) => PostClientsDeliveryAddressRequest} clientDeliveryAddressCity Recipient's city.
 * @property {(clientDeliveryAddressStreet: String) => PostClientsDeliveryAddressRequest} clientDeliveryAddressStreet Recipient street and number.
 * @property {(clientDeliveryAddressRegionId: String) => PostClientsDeliveryAddressRequest} clientDeliveryAddressRegionId Administrative region code.
 * @property {(clientDeliveryAddressProvinceId: String) => PostClientsDeliveryAddressRequest} clientDeliveryAddressProvinceId Administrative region code.
 * @property {(clientDeliveryAddressZipCode: String) => PostClientsDeliveryAddressRequest} clientDeliveryAddressZipCode Recipient's postal code.
 * @property {(clientDeliveryAddressCountry: String) => PostClientsDeliveryAddressRequest} clientDeliveryAddressCountry Recipient's country.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutClientsDeliveryAddressRequest
 * @property {(clients: Array<Object>) => PutClientsDeliveryAddressRequest} clients Customer data.
 * @property {(clientLogin: String) => PutClientsDeliveryAddressRequest} clientLogin Customer's login.
 * @property {(clientCodeExternal: String) => PutClientsDeliveryAddressRequest} clientCodeExternal External system code.
 * @property {(clientDeliveryAddressId: String) => PutClientsDeliveryAddressRequest} clientDeliveryAddressId Delivery address ID.
 * @property {(shopsIds: Array<Integer>) => PutClientsDeliveryAddressRequest} shopsIds List of stores IDs When mask is determined, this parameter is omitted.
 * @property {(currencyId: String) => PutClientsDeliveryAddressRequest} currencyId Currency ID
 * @property {(clientDeliveryAddressFirstName: String) => PutClientsDeliveryAddressRequest} clientDeliveryAddressFirstName Recipient's first name.
 * @property {(clientDeliveryAddressLastName: String) => PutClientsDeliveryAddressRequest} clientDeliveryAddressLastName Recipient's last name.
 * @property {(clientDeliveryAddressAdditional: String) => PutClientsDeliveryAddressRequest} clientDeliveryAddressAdditional Additional information.
 * @property {(clientDeliveryAddressPhone1: String) => PutClientsDeliveryAddressRequest} clientDeliveryAddressPhone1 Cell phone.
 * @property {(clientDeliveryAddressCity: String) => PutClientsDeliveryAddressRequest} clientDeliveryAddressCity Recipient's city.
 * @property {(clientDeliveryAddressStreet: String) => PutClientsDeliveryAddressRequest} clientDeliveryAddressStreet Recipient street and number.
 * @property {(clientDeliveryAddressRegionId: String) => PutClientsDeliveryAddressRequest} clientDeliveryAddressRegionId Administrative region code.
 * @property {(clientDeliveryAddressProvinceId: String) => PutClientsDeliveryAddressRequest} clientDeliveryAddressProvinceId Administrative region code.
 * @property {(clientDeliveryAddressZipCode: String) => PutClientsDeliveryAddressRequest} clientDeliveryAddressZipCode Recipient's postal code.
 * @property {(clientDeliveryAddressCountry: String) => PutClientsDeliveryAddressRequest} clientDeliveryAddressCountry Recipient's country.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutClientsExternalCodeRequest
 * @property {(client_id: Integer) => PutClientsExternalCodeRequest} client_id 
 * @property {(client_login: String) => PutClientsExternalCodeRequest} client_login Customer's login.
 * @property {(code_extern: String) => PutClientsExternalCodeRequest} code_extern External system code.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutClientsGiftcardsBlockRequest
 * @property {(giftCards: Array<Object>) => PutClientsGiftcardsBlockRequest} giftCards List of gift cards
 * @property {(id: Integer) => PutClientsGiftcardsBlockRequest} id Card ID
 * @property {(number: String) => PutClientsGiftcardsBlockRequest} number Card number
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} DeleteClientsGiftcardsRequest
 * @property {(giftCards: Array<Object>) => DeleteClientsGiftcardsRequest} giftCards List of gift cards
 * @property {(id: Integer) => DeleteClientsGiftcardsRequest} id Card ID
 * @property {(number: String) => DeleteClientsGiftcardsRequest} number Card number
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetClientsGiftcardsRequest
 * @property {(giftCards: Array<Object>) => GetClientsGiftcardsRequest} giftCards List of gift cards
 * @property {(searchGiftCards: Object) => GetClientsGiftcardsRequest} searchGiftCards element is an element array of type searchGiftCards
 * @property {(ids: Array<Integer>) => GetClientsGiftcardsRequest} ids Define giftCards by passing array of values
 * @property {(number: Array<Integer>) => GetClientsGiftcardsRequest} number Define giftCards by passing array of values
 * @property {(pins: Array<Integer>) => GetClientsGiftcardsRequest} pins Define giftCards by passing array of values
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostClientsGiftcardsRequest
 * @property {(giftCards: Array<Object>) => PostClientsGiftcardsRequest} giftCards List of cards to add
 * @property {(typeId: Integer) => PostClientsGiftcardsRequest} typeId Gift card type id
 * @property {(number: String) => PostClientsGiftcardsRequest} number Card number
 * @property {(pin: String) => PostClientsGiftcardsRequest} pin Card PIN
 * @property {(name: String) => PostClientsGiftcardsRequest} name Name of card
 * @property {(expirationDate: String) => PostClientsGiftcardsRequest} expirationDate Card expiration date
 * @property {(balance: Object) => PostClientsGiftcardsRequest} balance Card balance
 * @property {(shops: Array<Integer>) => PostClientsGiftcardsRequest} shops List of shops the card is active in
 * @property {(note: String) => PostClientsGiftcardsRequest} note 
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutClientsGiftcardsRequest
 * @property {(giftCards: Array<Object>) => PutClientsGiftcardsRequest} giftCards List of cards to edit
 * @property {(id: Integer) => PutClientsGiftcardsRequest} id Card ID
 * @property {(number: String) => PutClientsGiftcardsRequest} number Card number
 * @property {(pin: String) => PutClientsGiftcardsRequest} pin Card PIN
 * @property {(name: String) => PutClientsGiftcardsRequest} name Name of card
 * @property {(expirationDate: String) => PutClientsGiftcardsRequest} expirationDate Card expiration date
 * @property {(balanceOperationType: 'set'|'add'|'subtract') => PutClientsGiftcardsRequest} balanceOperationType Balance operation type, possible values: - set - balance positioning of funds, - add - add funds to balance, - subtract - subtract funds from balance.
 * @property {(balance: Object) => PutClientsGiftcardsRequest} balance Card balance
 * @property {(shops: Array<Integer>) => PutClientsGiftcardsRequest} shops List of shops the card is active in
 * @property {(note: String) => PutClientsGiftcardsRequest} note 
 * @property {function} append Append current data to array and start modifying next row
 * @property {(amount: Float, currency: String) => PutClientsGiftcardsRequest} add Adds balance to current gift card
 * @property {(amount: Float, currency: String) => PutClientsGiftcardsRequest} subtract Subtract from balance to current gift card
 * @property {(amount: Float, currency: String) => PutClientsGiftcardsRequest} set Set balance to current gift card
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetClientsGiftcardsTypesRequest
 * @property {(resultsPage: Integer) => GetClientsGiftcardsTypesRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetClientsGiftcardsTypesRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(page: Integer, limit: Integer) => GetClientsGiftcardsTypesRequest} page Define page number and maximum results per page
 * @property {() => Integer} count Returns total numer of results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutClientsGiftcardsUnblockRequest
 * @property {(giftCards: Array<Object>) => PutClientsGiftcardsUnblockRequest} giftCards List of gift cards
 * @property {(id: Integer) => PutClientsGiftcardsUnblockRequest} id Card ID
 * @property {(number: String) => PutClientsGiftcardsUnblockRequest} number Card number
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetClientsMembershipCardsRequest
 * @property {(id: Integer) => GetClientsMembershipCardsRequest} id Customer ID.
 * @property {(login: String) => GetClientsMembershipCardsRequest} login Customer's login.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutClientsMembershipCardsRequest
 * @property {(id: Integer) => PutClientsMembershipCardsRequest} id Customer ID.
 * @property {(login: String) => PutClientsMembershipCardsRequest} login Customer's login.
 * @property {(membership_cards: Array<Object>) => PutClientsMembershipCardsRequest} membership_cards 
 * @property {(ordinal_number: Integer) => PutClientsMembershipCardsRequest} ordinal_number Card ID entered by customer.
 * @property {(card_type: Integer) => PutClientsMembershipCardsRequest} card_type Card ID.
 * @property {(number: String) => PutClientsMembershipCardsRequest} number Loyalty card number.
 * @property {(pin: Integer) => PutClientsMembershipCardsRequest} pin Card PIN.
 * @property {(creation_date: String) => PutClientsMembershipCardsRequest} creation_date Issue date.
 * @property {(deactivate: Boolean) => PutClientsMembershipCardsRequest} deactivate Determines whether a card should be deactivated.
 * @property {(set_rebate_group: Boolean) => PutClientsMembershipCardsRequest} set_rebate_group Flag that determines whether a discount group should be set.
 * @property {(errors: Object) => PutClientsMembershipCardsRequest} errors Information on error that occurred during gate call.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetClientsNewsletterEmailSMSRequest
 * @property {(shops: Array<Object>) => GetClientsNewsletterEmailSMSRequest} shops 
 * @property {(language: String) => GetClientsNewsletterEmailSMSRequest} language Customer language ID.
 * @property {(date: Object) => GetClientsNewsletterEmailSMSRequest} date 
 * @property {(return_elements: Array<String>) => GetClientsNewsletterEmailSMSRequest} return_elements Elements to be returned by the endpoint. By default all elements are returned
 * @property {(results_page: Integer) => GetClientsNewsletterEmailSMSRequest} results_page Results page number. Numbering begins at 0. Default value: 0.
 * @property {(results_limit: Integer) => GetClientsNewsletterEmailSMSRequest} results_limit Maximum number of results on a single page. Default is 100.
 * @property {(dateFrom: DateLike, dateTo: DateLike) => GetClientsNewsletterEmailSMSRequest} dates Type of date according to the index results
 * @property {(page: Integer, limit: Integer) => GetClientsNewsletterEmailSMSRequest} page Define page number and maximum results per page
 * @property {() => Integer} count Returns total numer of results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetClientsNewsletterEmailShopsRequest
 * @property {(shops: Array<Object>) => GetClientsNewsletterEmailShopsRequest} shops 
 * @property {(language: String) => GetClientsNewsletterEmailShopsRequest} language Customer language ID.
 * @property {(date: Object) => GetClientsNewsletterEmailShopsRequest} date 
 * @property {(return_elements: Array<String>) => GetClientsNewsletterEmailShopsRequest} return_elements Elements to be returned by the endpoint. By default all elements are returned
 * @property {(results_page: Integer) => GetClientsNewsletterEmailShopsRequest} results_page Results page number. Numbering begins at 0. Default value: 0.
 * @property {(results_limit: Integer) => GetClientsNewsletterEmailShopsRequest} results_limit Maximum number of results on a single page. Default is 100.
 * @property {(dateFrom: DateLike, dateTo: DateLike) => GetClientsNewsletterEmailShopsRequest} dates Type of date according to the index results
 * @property {(page: Integer, limit: Integer) => GetClientsNewsletterEmailShopsRequest} page Define page number and maximum results per page
 * @property {() => Integer} count Returns total numer of results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} DeleteClientsPayerAddressRequest
 * @property {(payers: Array<Object>) => DeleteClientsPayerAddressRequest} payers 
 * @property {(clientId: Integer) => DeleteClientsPayerAddressRequest} clientId Unique client's number.
 * @property {(payerAddressId: Integer) => DeleteClientsPayerAddressRequest} payerAddressId Buyer's address id.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetClientsPayerAddressRequest
 * @property {(clientId: String) => GetClientsPayerAddressRequest} clientId Unique client's number.
 * @property {(resultsPage: Integer) => GetClientsPayerAddressRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetClientsPayerAddressRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(page: Integer, limit: Integer) => GetClientsPayerAddressRequest} page Define page number and maximum results per page
 * @property {() => Integer} count Returns total numer of results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostClientsPayerAddressRequest
 * @property {(payers: Array<Object>) => PostClientsPayerAddressRequest} payers 
 * @property {(clientId: Integer) => PostClientsPayerAddressRequest} clientId Unique client's number.
 * @property {(payerAddressFirstName: String) => PostClientsPayerAddressRequest} payerAddressFirstName Buyer's first name.
 * @property {(payerAddressLastName: String) => PostClientsPayerAddressRequest} payerAddressLastName Buyer's last name.
 * @property {(payerAddressFirm: String) => PostClientsPayerAddressRequest} payerAddressFirm Company name.
 * @property {(payerAddressNip: String) => PostClientsPayerAddressRequest} payerAddressNip Customer VAT ID.
 * @property {(payerAddressStreet: String) => PostClientsPayerAddressRequest} payerAddressStreet Buyer's street name and house number.
 * @property {(payerAddressZipCode: String) => PostClientsPayerAddressRequest} payerAddressZipCode Buyer's postal code.
 * @property {(payerAddressCity: String) => PostClientsPayerAddressRequest} payerAddressCity Buyer's city.
 * @property {(payerAddressCountryId: String) => PostClientsPayerAddressRequest} payerAddressCountryId Country code in the ISO 3166-1 A2 standard.
 * @property {(payerAddressPhone: String) => PostClientsPayerAddressRequest} payerAddressPhone Buyer's telephone number.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutClientsPayerAddressRequest
 * @property {(payers: Array<Object>) => PutClientsPayerAddressRequest} payers 
 * @property {(clientId: String) => PutClientsPayerAddressRequest} clientId Unique client's number.
 * @property {(payerAddressId: String) => PutClientsPayerAddressRequest} payerAddressId Buyer's address id.
 * @property {(payerAddressFirstName: String) => PutClientsPayerAddressRequest} payerAddressFirstName Buyer's first name.
 * @property {(payerAddressLastName: String) => PutClientsPayerAddressRequest} payerAddressLastName Buyer's last name.
 * @property {(payerAddressFirm: String) => PutClientsPayerAddressRequest} payerAddressFirm Company name.
 * @property {(payerAddressNip: String) => PutClientsPayerAddressRequest} payerAddressNip Customer VAT ID.
 * @property {(payerAddressStreet: String) => PutClientsPayerAddressRequest} payerAddressStreet Buyer's street name and house number.
 * @property {(payerAddressZipCode: String) => PutClientsPayerAddressRequest} payerAddressZipCode Buyer's postal code.
 * @property {(payerAddressCity: String) => PutClientsPayerAddressRequest} payerAddressCity Buyer's city.
 * @property {(payerAddressCountryId: String) => PutClientsPayerAddressRequest} payerAddressCountryId Country code in the ISO 3166-1 A2 standard.
 * @property {(payerAddressPhone: String) => PutClientsPayerAddressRequest} payerAddressPhone Buyer's telephone number.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetClientsPricelistsClientsRequest
 * @property {(priceListId: Integer) => GetClientsPricelistsClientsRequest} priceListId Individual price list ID.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutClientsPricelistsClientsRequest
 * @property {(priceListId: Integer) => PutClientsPricelistsClientsRequest} priceListId Individual price list ID.
 * @property {(clientsIds: Array<Integer>) => PutClientsPricelistsClientsRequest} clientsIds Customer numbers.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} DeleteClientsPricelistsRequest
 * @property {(priceListId: Integer) => DeleteClientsPricelistsRequest} priceListId Individual price list ID.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetClientsPricelistsRequest
 * @property {(priceListIds: Array<Integer>) => GetClientsPricelistsRequest} priceListIds List of individual price lists.
 * @property {(returnElements: Array<String>) => GetClientsPricelistsRequest} returnElements Elements to be returned by the endpoint. By default all elements are returned
 * @property {(resultsPage: Integer) => GetClientsPricelistsRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetClientsPricelistsRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(page: Integer, limit: Integer) => GetClientsPricelistsRequest} page Define page number and maximum results per page
 * @property {() => Integer} count Returns total numer of results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostClientsPricelistsRequest
 * @property {(priceListName: String) => PostClientsPricelistsRequest} priceListName Name of individual price list.
 * @property {(onlyOrderProductsWithManuallySetPrices: 'yes'|'no') => PostClientsPricelistsRequest} onlyOrderProductsWithManuallySetPrices Restrict visibility to products listed in price list (other products will remain hidden) - yes - no
 * @property {(onlySeeProductsWithManuallySetPrices: 'yes'|'no') => PostClientsPricelistsRequest} onlySeeProductsWithManuallySetPrices Restrict products visibility to products listed in price list, remaining products will be seen as "Call for price" - yes - no
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutClientsPricelistsRequest
 * @property {(priceListId: Integer) => PutClientsPricelistsRequest} priceListId Individual price list ID.
 * @property {(priceListName: String) => PutClientsPricelistsRequest} priceListName Name of individual price list.
 * @property {(onlyOrderProductsWithManuallySetPrices: 'yes'|'no') => PutClientsPricelistsRequest} onlyOrderProductsWithManuallySetPrices Restrict visibility to products listed in price list (other products will remain hidden) - yes - no
 * @property {(onlySeeProductsWithManuallySetPrices: 'yes'|'no') => PutClientsPricelistsRequest} onlySeeProductsWithManuallySetPrices Restrict products visibility to products listed in price list, remaining products will be seen as "Call for price" - yes - no
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetClientsPricelistsProductsRequest
 * @property {(priceListId: Integer) => GetClientsPricelistsProductsRequest} priceListId Individual price list ID.
 * @property {(resultsPage: Integer) => GetClientsPricelistsProductsRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetClientsPricelistsProductsRequest} resultsLimit Number of results per page. Value from 1 to 500.
 * @property {(page: Integer, limit: Integer) => GetClientsPricelistsProductsRequest} page Define page number and maximum results per page
 * @property {() => Integer} count Returns total numer of results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutClientsPricelistsProductsRequest
 * @property {(priceListId: Integer) => PutClientsPricelistsProductsRequest} priceListId Individual price list ID.
 * @property {(products: Array<Object>) => PutClientsPricelistsProductsRequest} products Products list.
 * @property {(producers: Array<Object>) => PutClientsPricelistsProductsRequest} producers List of manufacturers assigned to sought products.
 * @property {(series: Array<Object>) => PutClientsPricelistsProductsRequest} series Series list.
 * @property {(categories: Array<Object>) => PutClientsPricelistsProductsRequest} categories List of categories in which sought products are present.
 * @property {(menuItems: Array<Object>) => PutClientsPricelistsProductsRequest} menuItems 
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutClientsPricelistsRenameRequest
 * @property {(priceListName: String) => PutClientsPricelistsRenameRequest} priceListName Name of individual price list.
 * @property {(priceListId: Integer) => PutClientsPricelistsRenameRequest} priceListId Individual price list ID.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetClientsPricesActiveCardRequest
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetClientsPricesDiscountGroupsRequest
 * @property {(clientDiscountGroupsNumbers: Array<Integer>) => GetClientsPricesDiscountGroupsRequest} clientDiscountGroupsNumbers Customer groups.
 * @property {(returnElements: Array<String>) => GetClientsPricesDiscountGroupsRequest} returnElements Elements to be returned by the endpoint. By default all elements are returned
 * @property {(resultsPage: Integer) => GetClientsPricesDiscountGroupsRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetClientsPricesDiscountGroupsRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(page: Integer, limit: Integer) => GetClientsPricesDiscountGroupsRequest} page Define page number and maximum results per page
 * @property {() => Integer} count Returns total numer of results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetClientsPricesDiscountsRequest
 * @property {(clientsIds: Array<Integer>) => GetClientsPricesDiscountsRequest} clientsIds Customer numbers.
 * @property {(clientTextSearch: String) => GetClientsPricesDiscountsRequest} clientTextSearch Text search through customer data.
 * @property {(clientIsActive: 'yes'|'no') => GetClientsPricesDiscountsRequest} clientIsActive Active
 * @property {(clientHasTradeCredit: 'nonzero'|'positive'|'negative'|'zero') => GetClientsPricesDiscountsRequest} clientHasTradeCredit Trade credit: - positive or negative, - only positive, - only negative, - only zero.
 * @property {(clientLastPurchaseDate: Object) => GetClientsPricesDiscountsRequest} clientLastPurchaseDate Date of last purchase.
 * @property {(returnElements: Array<String>) => GetClientsPricesDiscountsRequest} returnElements Elements to be returned by the endpoint. By default all elements are returned
 * @property {(resultsPage: Integer) => GetClientsPricesDiscountsRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetClientsPricesDiscountsRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(dateFrom: DateLike, dateTo: DateLike) => GetClientsPricesDiscountsRequest} lastPurchased Type of date according to the index results
 * @property {(page: Integer, limit: Integer) => GetClientsPricesDiscountsRequest} page Define page number and maximum results per page
 * @property {() => Integer} count Returns total numer of results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutClientsPricesDiscountsRequest
 * @property {(customers: Object) => PutClientsPricesDiscountsRequest} customers 
 * @property {(discount_type: String) => PutClientsPricesDiscountsRequest} discount_type Discount type, possible values: - simple
 * @property {(discount_operating: String) => PutClientsPricesDiscountsRequest} discount_operating Action, possible values: - sum_with_other_discounts_to_orders - sum with other discounts assigned to orders, - use_only_if_greater_than_the_sum_of_other_discounts - use only if greater than the sum of other discounts
 * @property {(discount_parameters: Array<Object>) => PutClientsPricesDiscountsRequest} discount_parameters 
 * @property {(parameter_type: String) => PutClientsPricesDiscountsRequest} parameter_type Parameter type. - DEPRECATED
 * @property {(parameter_value: String) => PutClientsPricesDiscountsRequest} parameter_value Parameter text ID. - DEPRECATED
 * @property {(discount_value: Number) => PutClientsPricesDiscountsRequest} discount_value Size of discount.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetClientsProfitPointsRequest
 * @property {(clientsIds: Array<Integer>) => GetClientsProfitPointsRequest} clientsIds Customer numbers.
 * @property {(clientTextSearch: String) => GetClientsProfitPointsRequest} clientTextSearch Text search through customer data.
 * @property {(clientIsActive: 'yes'|'no') => GetClientsProfitPointsRequest} clientIsActive Active
 * @property {(clientHasTradeCredit: 'nonzero'|'positive'|'negative'|'zero') => GetClientsProfitPointsRequest} clientHasTradeCredit Trade credit: - positive or negative, - only positive, - only negative, - only zero.
 * @property {(clientLastPurchaseDate: Object) => GetClientsProfitPointsRequest} clientLastPurchaseDate Date of last purchase.
 * @property {(returnElements: Array<String>) => GetClientsProfitPointsRequest} returnElements Elements to be returned by the endpoint. By default all elements are returned
 * @property {(resultsPage: Integer) => GetClientsProfitPointsRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetClientsProfitPointsRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(dateFrom: DateLike, dateTo: DateLike) => GetClientsProfitPointsRequest} lastPurchased Type of date according to the index results
 * @property {(page: Integer, limit: Integer) => GetClientsProfitPointsRequest} page Define page number and maximum results per page
 * @property {() => Integer} count Returns total numer of results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostClientsProfitPointsRequest
 * @property {(client_id: Integer) => PostClientsProfitPointsRequest} client_id 
 * @property {(operation: String) => PostClientsProfitPointsRequest} operation Operation: - add, - remove.
 * @property {(score: Number) => PostClientsProfitPointsRequest} score Amount of points to add or subtract.
 * @property {(note: String) => PostClientsProfitPointsRequest} note 
 * @property {(order_number: Integer) => PostClientsProfitPointsRequest} order_number Prepayment ID.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetClientsProvinceListRequest
 * @property {(country_code: String) => GetClientsProvinceListRequest} country_code Country code in ISO 3166-1 standard.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} DeleteClientsTagsClearRequest
 * @property {(clientId: Integer) => DeleteClientsTagsClearRequest} clientId Unique client's number.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} DeleteClientsTagsRequest
 * @property {(params: Array<Object>) => DeleteClientsTagsRequest} params Parameters transmitted to method
 * @property {(clientId: Integer) => DeleteClientsTagsRequest} clientId Unique client's number.
 * @property {(tagId: Integer) => DeleteClientsTagsRequest} tagId Tag ID.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetClientsTagsRequest
 * @property {(clientId: Integer) => GetClientsTagsRequest} clientId Unique client's number.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostClientsTagsRequest
 * @property {(params: Array<Object>) => PostClientsTagsRequest} params Parameters transmitted to method
 * @property {(clientId: Integer) => PostClientsTagsRequest} clientId Unique client's number.
 * @property {(tagName: String) => PostClientsTagsRequest} tagName Tag name.
 * @property {(tagValue: Integer) => PostClientsTagsRequest} tagValue Tag value.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutClientsTagsRequest
 * @property {(clientId: Integer) => PutClientsTagsRequest} clientId Unique client's number.
 * @property {(clientTags: Array<Object>) => PutClientsTagsRequest} clientTags 
 * @property {(tagId: Integer) => PutClientsTagsRequest} tagId Tag ID.
 * @property {(operation: 'add'|'set'|'subtract') => PutClientsTagsRequest} operation 
 * @property {(tagValue: Integer) => PutClientsTagsRequest} tagValue Tag value.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetCouriersAssignedToShippingProfilesRequest
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetCouriersRequest
 * @property {(countryCode: String) => GetCouriersRequest} countryCode Country code in ISO 3166-1 standard.
 * @property {(resultsPage: Integer) => GetCouriersRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetCouriersRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(page: Integer, limit: Integer) => GetCouriersRequest} page Define page number and maximum results per page
 * @property {() => Integer} count Returns total numer of results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} DeleteCouriersPickupPointsRequest
 * @property {(pickupPointDeleteRequests: Array<Object>) => DeleteCouriersPickupPointsRequest} pickupPointDeleteRequests 
 * @property {(pickupPointId: String) => DeleteCouriersPickupPointsRequest} pickupPointId Collection point ID.
 * @property {(pickupPointExternalId: String) => DeleteCouriersPickupPointsRequest} pickupPointExternalId external system code.
 * @property {(courierId: Integer) => DeleteCouriersPickupPointsRequest} courierId Courier ID.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetCouriersPickupPointsRequest
 * @property {(courierId: Integer) => GetCouriersPickupPointsRequest} courierId Courier ID.
 * @property {(pickupPointId: String) => GetCouriersPickupPointsRequest} pickupPointId Collection point ID.
 * @property {(pickupPointExternalId: String) => GetCouriersPickupPointsRequest} pickupPointExternalId External system code.
 * @property {(resultsPage: Integer) => GetCouriersPickupPointsRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetCouriersPickupPointsRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(page: Integer, limit: Integer) => GetCouriersPickupPointsRequest} page Define page number and maximum results per page
 * @property {() => Integer} count Returns total numer of results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostCouriersPickupPointsRequest
 * @property {(pickupPoints: Array<Object>) => PostCouriersPickupPointsRequest} pickupPoints 
 * @property {(pickupPointExternalId: String) => PostCouriersPickupPointsRequest} pickupPointExternalId external system code.
 * @property {(courierId: Integer) => PostCouriersPickupPointsRequest} courierId Courier ID.
 * @property {(descriptions: Array<Object>) => PostCouriersPickupPointsRequest} descriptions collection point details.
 * @property {(paymentForms: Array<Object>) => PostCouriersPickupPointsRequest} paymentForms Accepted payment types.
 * @property {(serviceStatus: 'out_of_service'|'available') => PostCouriersPickupPointsRequest} serviceStatus Collection point activity. Available values: available, outOfService .
 * @property {(address: Object) => PostCouriersPickupPointsRequest} address Pickup point address.
 * @property {(coordinates: Object) => PostCouriersPickupPointsRequest} coordinates Geographic coordinates.
 * @property {(operatingDays: Array<Object>) => PostCouriersPickupPointsRequest} operatingDays Personal collection point work hours.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutCouriersPickupPointsRequest
 * @property {(pickupPoints: Array<Object>) => PutCouriersPickupPointsRequest} pickupPoints 
 * @property {(pickupPointId: String) => PutCouriersPickupPointsRequest} pickupPointId Collection point ID.
 * @property {(pickupPointExternalId: String) => PutCouriersPickupPointsRequest} pickupPointExternalId external system code.
 * @property {(courierId: Integer) => PutCouriersPickupPointsRequest} courierId Courier ID.
 * @property {(descriptions: Array<Object>) => PutCouriersPickupPointsRequest} descriptions collection point details.
 * @property {(paymentForms: Array<Object>) => PutCouriersPickupPointsRequest} paymentForms Accepted payment types.
 * @property {(serviceStatus: 'out_of_service'|'available') => PutCouriersPickupPointsRequest} serviceStatus Collection point activity. Available values: available, outOfService .
 * @property {(address: Object) => PutCouriersPickupPointsRequest} address Pickup point address.
 * @property {(coordinates: Object) => PutCouriersPickupPointsRequest} coordinates Geographic coordinates.
 * @property {(operatingDays: Array<Object>) => PutCouriersPickupPointsRequest} operatingDays Personal collection point work hours.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutDeliveriesDefaultProfilesRequest
 * @property {(regionId: Integer) => PutDeliveriesDefaultProfilesRequest} regionId Country ID
 * @property {(shopId: Integer) => PutDeliveriesDefaultProfilesRequest} shopId Shop Id
 * @property {(retailProfileId: Integer) => PutDeliveriesDefaultProfilesRequest} retailProfileId ID of delivery profile for retail sales 
 * @property {(wholesaleProfileId: Integer) => PutDeliveriesDefaultProfilesRequest} wholesaleProfileId ID of delivery profile for wholesale sales 
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetDeliveriesProfilesRequest
 * @property {(resultsPage: Integer) => GetDeliveriesProfilesRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetDeliveriesProfilesRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(page: Integer, limit: Integer) => GetDeliveriesProfilesRequest} page Define page number and maximum results per page
 * @property {() => Integer} count Returns total numer of results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetDeliveriesRegionsRequest
 * @property {(shopId: Integer) => GetDeliveriesRegionsRequest} shopId Shop Id
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostDeliveriesRegionsRequest
 * @property {(regionName: String) => PostDeliveriesRegionsRequest} regionName Name of the region in the panel
 * @property {(shopId: Integer) => PostDeliveriesRegionsRequest} shopId Shop Id
 * @property {(postCodeFrom: String) => PostDeliveriesRegionsRequest} postCodeFrom The range of postal codes from %s
 * @property {(postCodeTo: String) => PostDeliveriesRegionsRequest} postCodeTo The range of postal codes to %s
 * @property {(parentRegionId: Integer) => PostDeliveriesRegionsRequest} parentRegionId ID of the country for which the region is being added
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetDiscountsGroupsClientsRequest
 * @property {(discountGroupId: Integer) => GetDiscountsGroupsClientsRequest} discountGroupId Discount group ID
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} DeleteDiscountsGroupsRequest
 * @property {(discountGroupId: Integer) => DeleteDiscountsGroupsRequest} discountGroupId Discount group ID
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetDiscountsGroupsRequest
 * @property {(group_numbers: Array<Integer>) => GetDiscountsGroupsRequest} group_numbers 
 * @property {(return_elements: Array<String>) => GetDiscountsGroupsRequest} return_elements Elements to be returned by the endpoint. By default all elements are returned
 * @property {(results_page: Integer) => GetDiscountsGroupsRequest} results_page Results page number. Numbering begins at 0. Default value: 0.
 * @property {(results_limit: Integer) => GetDiscountsGroupsRequest} results_limit Maximum number of results on a single page. Default is 100.
 * @property {(page: Integer, limit: Integer) => GetDiscountsGroupsRequest} page Define page number and maximum results per page
 * @property {() => Integer} count Returns total numer of results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostDiscountsGroupsRequest
 * @property {(discountGroupName: String) => PostDiscountsGroupsRequest} discountGroupName Discount group name
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutDiscountsGroupsRequest
 * @property {(discountGroupId: Integer) => PutDiscountsGroupsRequest} discountGroupId Discount group ID
 * @property {(discountGroupName: String) => PutDiscountsGroupsRequest} discountGroupName Discount group name
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} DeleteDiscountsGroupsProductsRequest
 * @property {(discountGroupId: Integer) => DeleteDiscountsGroupsProductsRequest} discountGroupId Discount group ID
 * @property {(products: Array<Integer>) => DeleteDiscountsGroupsProductsRequest} products Products list.
 * @property {(producers: Array<Integer>) => DeleteDiscountsGroupsProductsRequest} producers Brands
 * @property {(series: Array<Integer>) => DeleteDiscountsGroupsProductsRequest} series Series
 * @property {(categories: Array<Integer>) => DeleteDiscountsGroupsProductsRequest} categories List of categories in which sought products are present.
 * @property {(menuItems: Array<Integer>) => DeleteDiscountsGroupsProductsRequest} menuItems Menu elements
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutDiscountsGroupsProductsRequest
 * @property {(discountGroupId: Integer) => PutDiscountsGroupsProductsRequest} discountGroupId Discount group ID
 * @property {(products: Array<Object>) => PutDiscountsGroupsProductsRequest} products Products list.
 * @property {(producers: Array<Object>) => PutDiscountsGroupsProductsRequest} producers Brands
 * @property {(series: Array<Object>) => PutDiscountsGroupsProductsRequest} series Series
 * @property {(categories: Array<Object>) => PutDiscountsGroupsProductsRequest} categories List of categories in which sought products are present.
 * @property {(menuItems: Array<Object>) => PutDiscountsGroupsProductsRequest} menuItems Menu elements
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutDiscountsRebatesBlockCardRequest
 * @property {(card_number: String) => PutDiscountsRebatesBlockCardRequest} card_number Card number
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} DeleteDiscountsRebatesCardRequest
 * @property {(campaign_id: Integer) => DeleteDiscountsRebatesCardRequest} campaign_id Discount card type
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostDiscountsRebatesCardRequest
 * @property {(campaign_id: Integer) => PostDiscountsRebatesCardRequest} campaign_id Discount card type
 * @property {(card_number: String) => PostDiscountsRebatesCardRequest} card_number Card number
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} DeleteDiscountsRebatesCodeRequest
 * @property {(campaign_id: Integer) => DeleteDiscountsRebatesCodeRequest} campaign_id Campaign ID
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostDiscountsRebatesCodeRequest
 * @property {(campaign_id: Integer) => PostDiscountsRebatesCodeRequest} campaign_id Campaign ID
 * @property {(code_number: String) => PostDiscountsRebatesCodeRequest} code_number Code
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutDiscountsRebatesUnblockCardRequest
 * @property {(card_number: String) => PutDiscountsRebatesUnblockCardRequest} card_number Card number
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} DeleteEntriesRequest
 * @property {(entryId: Integer) => DeleteEntriesRequest} entryId Entry ID
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetEntriesRequest
 * @property {(entryId: Integer) => GetEntriesRequest} entryId Entry ID
 * @property {(langId: String) => GetEntriesRequest} langId Language ID
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostEntriesRequest
 * @property {(shopId: Integer) => PostEntriesRequest} shopId Shop Id
 * @property {(date: String) => PostEntriesRequest} date Date of creating an entry
 * @property {(visible: 'y'|'n') => PostEntriesRequest} visible Entry visibility
 * @property {(visibleOnSitesList: Array<Object>) => PostEntriesRequest} visibleOnSitesList List of pages on which the entry is to be published
 * @property {(products: Array<Object>) => PostEntriesRequest} products Products list.
 * @property {(pictureData: Object) => PostEntriesRequest} pictureData Photo
 * @property {(langs: Array<Object>) => PostEntriesRequest} langs Element including entry content in selected languages
 * @property {(titleLinkType: 'fullContentLink'|'givenUrlLink'|'noLink') => PostEntriesRequest} titleLinkType Type of title and shortcut linking: fullContentLink - link to the subpage with full content, givenUrlLink - link to the given URL, noLink - static element
 * @property {(link: String) => PostEntriesRequest} link Provided URL (for link to specified URL option)
 * @property {(langId: String) => PostEntriesRequest} langId Language ID
 * @property {(title: String) => PostEntriesRequest} title Name on the page
 * @property {(shortDescription: String) => PostEntriesRequest} shortDescription short description
 * @property {(longDescription: String) => PostEntriesRequest} longDescription Long description
 * @property {(blogUrl: String) => PostEntriesRequest} blogUrl Blog post URL
 * @property {(newsUrl: String) => PostEntriesRequest} newsUrl News item URL
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutEntriesRequest
 * @property {(entryId: Integer) => PutEntriesRequest} entryId Entry ID
 * @property {(shopId: Integer) => PutEntriesRequest} shopId Shop Id
 * @property {(date: String) => PutEntriesRequest} date Date of creating an entry
 * @property {(visible: 'y'|'n') => PutEntriesRequest} visible Entry visibility
 * @property {(visibleOnSitesList: Array<Object>) => PutEntriesRequest} visibleOnSitesList List of pages on which the entry is to be published
 * @property {(products: Array<Object>) => PutEntriesRequest} products Products list.
 * @property {(pictureData: Object) => PutEntriesRequest} pictureData Photo
 * @property {(deletePicture: 'y'|'n') => PutEntriesRequest} deletePicture Determines whether to delete an entry photo
 * @property {(langs: Array<Object>) => PutEntriesRequest} langs Element including entry content in selected languages
 * @property {(titleLinkType: 'fullContentLink'|'givenUrlLink'|'noLink') => PutEntriesRequest} titleLinkType Type of title and shortcut linking: fullContentLink - link to the subpage with full content, givenUrlLink - link to the given URL, noLink - static element
 * @property {(link: String) => PutEntriesRequest} link Provided URL (for link to specified URL option)
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetEntriesPagesToDisplayRequest
 * @property {(langId: String) => GetEntriesPagesToDisplayRequest} langId Language ID
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetMenuFilterRequest
 * @property {(shopId: Integer) => GetMenuFilterRequest} shopId Shop Id
 * @property {(languageId: String) => GetMenuFilterRequest} languageId Language ID (code in ISO 639-2).
 * @property {(productMenuTreeId: Integer) => GetMenuFilterRequest} productMenuTreeId Tree menu ID.
 * @property {(productMenuNodeId: Integer) => GetMenuFilterRequest} productMenuNodeId Menu element ID.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutMenuFilterRequest
 * @property {(shopId: Integer) => PutMenuFilterRequest} shopId Shop Id
 * @property {(languageId: String) => PutMenuFilterRequest} languageId Language ID (code in ISO 639-2).
 * @property {(productMenuTreeId: Integer) => PutMenuFilterRequest} productMenuTreeId Tree menu ID.
 * @property {(productMenuNodeId: Integer) => PutMenuFilterRequest} productMenuNodeId Menu element ID.
 * @property {(filterForMenuNodeIsDefault: 'y'|'n') => PutMenuFilterRequest} filterForMenuNodeIsDefault Default filter settings.
 * @property {(menuFiltersActive: Array<Object>) => PutMenuFilterRequest} menuFiltersActive Active filters.
 * @property {(menuFilterId: String) => PutMenuFilterRequest} menuFilterId Menu filter ID.
 * @property {(menuFilterName: String) => PutMenuFilterRequest} menuFilterName Filter name on page.
 * @property {(menuFilterDisplay: 'name'|'gfx'|'namegfx') => PutMenuFilterRequest} menuFilterDisplay Display as: "name" - text, "gfx" - graphics, "namegfx" - text and graphics.
 * @property {(menuFilterValueSort: 'y'|'n'|'priority') => PutMenuFilterRequest} menuFilterValueSort Sort by: "y" - alfabetically, "n" - by frequency and order of occurrence of indicated parameter value in found products, "priority" - according to value sequence in parameter.
 * @property {(menuFilterDefaultEnabled: 'y'|'n') => PutMenuFilterRequest} menuFilterDefaultEnabled Enabled by default .
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} DeleteMenuRequest
 * @property {(menu_list: Array<Object>) => DeleteMenuRequest} menu_list 
 * @property {(settings: Object) => DeleteMenuRequest} settings Settings.
 * @property {(shop_id: Integer) => DeleteMenuRequest} shop_id Shop Id.
 * @property {(menu_id: Integer) => DeleteMenuRequest} menu_id Menu ID.
 * @property {(item_id: Integer) => DeleteMenuRequest} item_id Menu element ID.
 * @property {(item_textid: String) => DeleteMenuRequest} item_textid Menu element text identifier. Example: "item1\item2\item3".
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetMenuRequest
 * @property {(shop_id: Integer) => GetMenuRequest} shop_id Shop Id.
 * @property {(menu_id: Integer) => GetMenuRequest} menu_id Tree menu ID.
 * @property {(lang_id: String) => GetMenuRequest} lang_id Language ID.
 * @property {(node_id: Integer) => GetMenuRequest} node_id Menu node ID.
 * @property {(level: Integer) => GetMenuRequest} level Number of levels.
 * @property {(settings::textid_separator: String) => GetMenuRequest} settings::textid_separator Default: "\".
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostMenuRequest
 * @property {(menu_list: Array<Object>) => PostMenuRequest} menu_list 
 * @property {(settings: Object) => PostMenuRequest} settings Settings
 * @property {(shop_id: Integer) => PostMenuRequest} shop_id Shop Id.
 * @property {(menu_id: Integer) => PostMenuRequest} menu_id Menu ID.
 * @property {(parent_id: String) => PostMenuRequest} parent_id Parent menu element ID.
 * @property {(parent_textid: String) => PostMenuRequest} parent_textid Menu element text identifier. Example: "item1\item2".
 * @property {(lang_data: Array<Object>) => PostMenuRequest} lang_data 
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutMenuRequest
 * @property {(menu_list: Array<Object>) => PutMenuRequest} menu_list 
 * @property {(settings: Object) => PutMenuRequest} settings Settings.
 * @property {(shop_id: Integer) => PutMenuRequest} shop_id Shop Id.
 * @property {(menu_id: Integer) => PutMenuRequest} menu_id Menu ID.
 * @property {(item_id: String) => PutMenuRequest} item_id Menu element ID.
 * @property {(item_textid: String) => PutMenuRequest} item_textid Menu element text identifier. Example: "item1\item2\item3".
 * @property {(lang_data: Array<Object>) => PutMenuRequest} lang_data 
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutMenuSortRequest
 * @property {(menu_list: Array<Object>) => PutMenuSortRequest} menu_list 
 * @property {(settings: Object) => PutMenuSortRequest} settings Settings
 * @property {(shop_id: Integer) => PutMenuSortRequest} shop_id Shop Id.
 * @property {(menu_id: Integer) => PutMenuSortRequest} menu_id Menu ID.
 * @property {(lang_id: String) => PutMenuSortRequest} lang_id Language ID.
 * @property {(parent_id: Integer) => PutMenuSortRequest} parent_id Menu element text identifier.
 * @property {(parent_textid: String) => PutMenuSortRequest} parent_textid Menu element text identifier. Example: "item1\item2\item3".
 * @property {(recursive: 'y'|'n') => PutMenuSortRequest} recursive Recurring: y/n!
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetOrdersAnalyticsRequest
 * @property {(orders: Array<Object>) => GetOrdersAnalyticsRequest} orders Orders.
 * @property {(serialNumbers: Array<Integer>) => GetOrdersAnalyticsRequest} serialNumbers Define orders by passing array of values
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetOrdersAuctionDetailsRequest
 * @property {(orders: Array<Object>) => GetOrdersAuctionDetailsRequest} orders Orders.
 * @property {(ids: Array<String>) => GetOrdersAuctionDetailsRequest} ids Define orders by passing array of values
 * @property {(serialNumbers: Array<Integer>) => GetOrdersAuctionDetailsRequest} serialNumbers Define orders by passing array of values
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutOrdersClientRequest
 * @property {(orderSerialNumber: Integer) => PutOrdersClientRequest} orderSerialNumber Order serial number.
 * @property {(clientId: Integer) => PutOrdersClientRequest} clientId Unique client's number.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutOrdersCourierRequest
 * @property {(orderSerialNumber: Integer) => PutOrdersCourierRequest} orderSerialNumber Order serial number.
 * @property {(courierId: Integer) => PutOrdersCourierRequest} courierId Courier ID.
 * @property {(pickupPointId: String) => PutOrdersCourierRequest} pickupPointId Collection point ID.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutOrdersDeliveryAddressRequest
 * @property {(orderSerialNumber: Integer) => PutOrdersDeliveryAddressRequest} orderSerialNumber Order serial number.
 * @property {(clientDeliveryAddressId: Integer) => PutOrdersDeliveryAddressRequest} clientDeliveryAddressId Delivery address ID.
 * @property {(clientLogin: String) => PutOrdersDeliveryAddressRequest} clientLogin Customer's login.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutOrdersDevideRequest
 * @property {(orderSerialNumber: Integer) => PutOrdersDevideRequest} orderSerialNumber Order serial number.
 * @property {(products: Array<Object>) => PutOrdersDevideRequest} products Products list.
 * @property {(splitPayments: Boolean) => PutOrdersDevideRequest} splitPayments Whether to split payments
 * @property {(basketPosition: Integer) => PutOrdersDevideRequest} basketPosition Item in basket.
 * @property {(quantity: Number) => PutOrdersDevideRequest} quantity Quantity
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} DeleteOrdersDocumentsRequest
 * @property {(documents: Array<Object>) => DeleteOrdersDocumentsRequest} documents List of documents.
 * @property {(orderSerialNumber: Integer) => DeleteOrdersDocumentsRequest} orderSerialNumber Order serial number.
 * @property {(id: Integer) => DeleteOrdersDocumentsRequest} id Document identifier.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetOrdersDocumentsRequest
 * @property {(orderSerialNumber: Array<String>) => GetOrdersDocumentsRequest} orderSerialNumber Order serial number.
 * @property {(documentType: 'sales_confirmation'|'vat_invoice'|'corrective_vat_invoice'|'advance_vat_invoice'|'final_advance_vat_invoice'|'pro_forma_invoice'|'advance_pro_forma_invoice'|'final_advance_pro_forma_invoice'|'delivery_note'|'fiscal_receipt'|'fiscal_invoice'|'other') => GetOrdersDocumentsRequest} documentType Document type
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostOrdersDocumentsRequest
 * @property {(documents: Array<Object>) => PostOrdersDocumentsRequest} documents List of documents.
 * @property {(orderSerialNumber: Integer) => PostOrdersDocumentsRequest} orderSerialNumber Order serial number.
 * @property {(name: String) => PostOrdersDocumentsRequest} name File name.
 * @property {(pdfBase64: String) => PostOrdersDocumentsRequest} pdfBase64 BMP, PNG, JPG, JPEG, GIF or PDF files in Base64 encoding algorithm.
 * @property {(type: 'vat_invoice'|'corrective_vat_invoice'|'other') => PostOrdersDocumentsRequest} type Document type.
 * @property {(returnedInOrderDetails: 'y'|'n') => PostOrdersDocumentsRequest} returnedInOrderDetails Is it to be shown to the customer in the order view.
 * @property {(additionalData: Object) => PostOrdersDocumentsRequest} additionalData Additional information.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetOrdersExportdocumentsEPPRequest
 * @property {(dateBegin: String) => GetOrdersExportdocumentsEPPRequest} dateBegin Beginning date in YYYY-MM-DD HH:MM:SS format.
 * @property {(dateEnd: String) => GetOrdersExportdocumentsEPPRequest} dateEnd Ending date in YYYY-MM-DD HH:MM:SS format.
 * @property {(applicationType: 'SubiektGT'|'Rachmistrz'|'wFirma') => GetOrdersExportdocumentsEPPRequest} applicationType 
 * @property {(stocks: Array<Integer>) => GetOrdersExportdocumentsEPPRequest} stocks Stock ID (required only when selecting particular stocks).
 * @property {(documentType: 'all'|'stocks'|'invoice'|'payments') => GetOrdersExportdocumentsEPPRequest} documentType Document type
 * @property {(invoiceFirstGeneratedDate: Integer) => GetOrdersExportdocumentsEPPRequest} invoiceFirstGeneratedDate Date the document was first generated.
 * @property {(dateFrom: DateLike, dateTo: DateLike) => GetOrdersExportdocumentsEPPRequest} dates Type of date according to the index results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetOrdersExportdocumentsJPKRequest
 * @property {(documentType: 'JPK_FA'|'JPK_MAG'|'JPK_VAT') => GetOrdersExportdocumentsJPKRequest} documentType Document type
 * @property {(fileId: Integer) => GetOrdersExportdocumentsJPKRequest} fileId JPK file identifier to download.
 * @property {(documentVersion: Integer) => GetOrdersExportdocumentsJPKRequest} documentVersion JPK format version. If empty, takes the latest version number.
 * @property {(schemaVersion: String) => GetOrdersExportdocumentsJPKRequest} schemaVersion Schema version
 * @property {(dateBegin: String) => GetOrdersExportdocumentsJPKRequest} dateBegin Beginning date in YYYY-MM-DD HH:MM:SS format. (JPK_FA, JPK_MAG)
 * @property {(dateEnd: String) => GetOrdersExportdocumentsJPKRequest} dateEnd Ending date in YYYY-MM-DD HH:MM:SS format. (JPK_FA, JPK_MAG)
 * @property {(month: Integer) => GetOrdersExportdocumentsJPKRequest} month Billing month for which to generate the document. (JPK_VAT)
 * @property {(year: Integer) => GetOrdersExportdocumentsJPKRequest} year Billing year for which to generate the document. (JPK_VAT)
 * @property {(currency: String) => GetOrdersExportdocumentsJPKRequest} currency Currency symbol in ISO 4217 format.
 * @property {(shop: Array<Integer>) => GetOrdersExportdocumentsJPKRequest} shop Store ID only required if a specific store is selected.
 * @property {(stockId: Array<Integer>) => GetOrdersExportdocumentsJPKRequest} stockId Stock ID
 * @property {(forceBackgroundGenerate: Boolean) => GetOrdersExportdocumentsJPKRequest} forceBackgroundGenerate Forces the file to be generated by background tasks. The file will be generated later. Then, after it is generated, you will be able to download the given file using the returned ID. The file will be available 24h after the task is completed.
 * @property {(dateFrom: DateLike, dateTo: DateLike) => GetOrdersExportdocumentsJPKRequest} dates Type of date according to the index results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetOrdersHandlerRequest
 * @property {(orderSerialNumber: Integer) => GetOrdersHandlerRequest} orderSerialNumber Order serial number.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutOrdersHandlerRequest
 * @property {(orderSerialNumber: Integer) => PutOrdersHandlerRequest} orderSerialNumber Order serial number.
 * @property {(orderOperatorLogin: String) => PutOrdersHandlerRequest} orderOperatorLogin Order handler.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetOrdersHistoryRequest
 * @property {(orderSerialNumber: Integer) => GetOrdersHistoryRequest} orderSerialNumber Order serial number.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} DeleteOrdersImagesRequest
 * @property {(order: Object) => DeleteOrdersImagesRequest} order 
 * @property {(images: Array<Object>) => DeleteOrdersImagesRequest} images List of attachment IDs to be removed from the details of the selected order
 * @property {(id: Integer) => DeleteOrdersImagesRequest} id Attachment ID
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetOrdersImagesRequest
 * @property {(imageId: Integer) => GetOrdersImagesRequest} imageId Attachment ID (Photos)
 * @property {(orderSerialNumber: Integer) => GetOrdersImagesRequest} orderSerialNumber Order serial number
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostOrdersImagesRequest
 * @property {(userName: String) => PostOrdersImagesRequest} userName Login
 * @property {(settings: Object) => PostOrdersImagesRequest} settings 
 * @property {(order: Object) => PostOrdersImagesRequest} order 
 * @property {(images: Array<Object>) => PostOrdersImagesRequest} images List of image attachments
 * @property {(type: 'product'|'package') => PostOrdersImagesRequest} type Type. Available values: product - Product photo, package - Package photo
 * @property {(source: String) => PostOrdersImagesRequest} source Attachment source data, depending on the source type selected in the settings. BMP, PNG, JPG, JPEG, GIF or PDF files in Base64 encoding algorithm.
 * @property {(name: String) => PostOrdersImagesRequest} name Name
 * @property {function} append Append current data to array and start modifying next row
 * @property {(orderId: String) => PostOrdersImagesRequest} orderId Define orderId value nested inside order
 * @property {(orderSerialNumber: Integer) => PostOrdersImagesRequest} orderSerialNumber Define orderSerialNumber value nested inside order
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetOrdersLabelsRequest
 * @property {(orderSerialNumber: Integer) => GetOrdersLabelsRequest} orderSerialNumber Order serial number.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetOrdersOpinionsRequest
 * @property {(opinion: Object) => GetOrdersOpinionsRequest} opinion Review identification
 * @property {(orders: Object) => GetOrdersOpinionsRequest} orders Orders.
 * @property {(clients: Object) => GetOrdersOpinionsRequest} clients Customer data.
 * @property {(dateRange: Object) => GetOrdersOpinionsRequest} dateRange Date range
 * @property {(resultsPage: Integer) => GetOrdersOpinionsRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetOrdersOpinionsRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(ordersBy: Array<Object>) => GetOrdersOpinionsRequest} ordersBy Possibility of sorting returned list
 * @property {(orderId: String) => GetOrdersOpinionsRequest} orderId Define value value nested inside orders
 * @property {(orderSerialNumber: String) => GetOrdersOpinionsRequest} orderSerialNumber Define value value nested inside orders
 * @property {(clientId: String) => GetOrdersOpinionsRequest} clientId Define value value nested inside clients
 * @property {(clientLogin: String) => GetOrdersOpinionsRequest} clientLogin Define value value nested inside clients
 * @property {(clientCode: String) => GetOrdersOpinionsRequest} clientCode Define value value nested inside clients
 * @property {(dateFrom: DateLike, dateTo: DateLike) => GetOrdersOpinionsRequest} dates Type of date according to the index results
 * @property {(elementName: "date"|"rating"|"scorePositive"|"scoreNegative"|"modificationDatetime", descending: Boolean) => GetOrdersOpinionsRequest} orderBy Define sorting by element and direction
 * @property {(page: Integer, limit: Integer) => GetOrdersOpinionsRequest} page Define page number and maximum results per page
 * @property {() => Integer} count Returns total numer of results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetOrdersOpinionsRateRequest
 * @property {(id: Integer) => GetOrdersOpinionsRateRequest} id 
 * @property {(operation: 'positive'|'negative') => GetOrdersOpinionsRateRequest} operation 
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} ListOrdersRequest
 * @property {(orderPrepaidStatus: String) => ListOrdersRequest} orderPrepaidStatus Prepayment status. Status list: "unpaid" - not paid, "restored" - returned, "waiting" - not registered.
 * @property {(ordersStatuses: Array<String>) => ListOrdersRequest} ordersStatuses Order status. Status list: "new" - not handled, "finished" - completed, "false" - false, "lost" - lost, "on_order" - in progress, "packed" - being picked, "ready" - ready, "returned" - return, "canceled" - canceled by customer, "complainted" - complaint, "payment_waiting" - awaiting payment, "delivery_waiting" - awaiting delivery, "suspended" - on hold, "joined" - merged, "finished_ext" - handled in FA application.
 * @property {(shippmentStatus: 'all'|'received'|'non-received') => ListOrdersRequest} shippmentStatus 
 * @property {(couriersName: Array<String>) => ListOrdersRequest} couriersName Shipping companies (packages deliverers).
 * @property {(couriersId: Array<Integer>) => ListOrdersRequest} couriersId Courier service identifiers
 * @property {(orderPaymentType: String) => ListOrdersRequest} orderPaymentType Order payment method. Allowed values. "cash_on_delivery" - cash on delivery, "prepaid" - prepayment, "tradecredit" - Trade credit.
 * @property {(withMissingSalesDocuments: Array<String>) => ListOrdersRequest} withMissingSalesDocuments 
 * @property {(orderType: 'wholesale'|'retail'|'dropshipping'|'deliverer') => ListOrdersRequest} orderType Order type. Allowed values. "retail" - retail order, "wholesale" - wholesale order (can be added only by customer with wholesale account registered). Default value:: "retail"
 * @property {(dropshippingOrderStatus: 'all'|'finished'|'canceled'|'notCanceled') => ListOrdersRequest} dropshippingOrderStatus 
 * @property {(ordersIds: Array<String>) => ListOrdersRequest} ordersIds Orders IDs.
 * @property {(ordersSerialNumbers: Array<Integer>) => ListOrdersRequest} ordersSerialNumbers Order serial numbers.
 * @property {(clients: Array<Object>) => ListOrdersRequest} clients Customer data.
 * @property {(ordersRange: Object) => ListOrdersRequest} ordersRange Ranges of dates or serial numbers.
 * @property {(orderSource: Object) => ListOrdersRequest} orderSource Order source data.
 * @property {(products: Array<Object>) => ListOrdersRequest} products Products list.
 * @property {(resultsPage: Integer) => ListOrdersRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => ListOrdersRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(clientRequestInvoice: String) => ListOrdersRequest} clientRequestInvoice Customer asked for invoice. List of parameters: "y" - yes (paper invoicing ), "e" - yes (electronic invoicing ), "n" - no.
 * @property {(packages: Object) => ListOrdersRequest} packages Information on consignments.
 * @property {(stocks: Array<Object>) => ListOrdersRequest} stocks Stock quantities data.
 * @property {(campaign: Object) => ListOrdersRequest} campaign Used discount codes data.
 * @property {(loyaltyPointsMode: 'all'|'given'|'taken'|'given_or_taken'|'given_and_taken'|'not_given_nor_taken') => ListOrdersRequest} loyaltyPointsMode Loyalty points.
 * @property {(orderOperatorLogin: String) => ListOrdersRequest} orderOperatorLogin Order handler.
 * @property {(orderPackingPersonLogin: String) => ListOrdersRequest} orderPackingPersonLogin Order picker.
 * @property {(ordersBy: Array<Object>) => ListOrdersRequest} ordersBy Possibility of sorting returned list
 * @property {(searchingOperatorTypeMatch: 'no_assignment'|'no_empty'|'empty') => ListOrdersRequest} searchingOperatorTypeMatch Method of searching orders by handler.
 * @property {(ordersDelayed: 'y'|'n') => ListOrdersRequest} ordersDelayed Orders with the exceeded date of shipment.
 * @property {(showBundles: Boolean) => ListOrdersRequest} showBundles Combine the components of the set into one item
 * @property {(orderExternalId: String) => ListOrdersRequest} orderExternalId The order ID of the external service
 * @property {(shopIds: Array<Integer>) => ListOrdersRequest} shopIds Define shopsIds value nested inside orderSource
 * @property {(byPackageNumbers: Array<String>) => ListOrdersRequest} byPackageNumbers Define packagesNumbers value nested inside packages
 * @property {(dateFrom: DateLike, dateTo: DateLike, dateType: "add"|"modified"|"dispatch"|"payment"|"last_payments_operation"|"declared_payments") => ListOrdersRequest} dates Type of date according to the index results. Possible type values: add, modified, dispatch, payment, last_payments_operation, declared_payments
 * @property {(elementName: "id"|"sn"|"order_time"|"status"|"order_source"|"order_cost"|"discount_code"|"ready_to_send_date", descending: Boolean) => ListOrdersRequest} orderBy Define sorting by element and direction
 * @property {(logins: Array<String>) => ListOrdersRequest} logins Define clients by passing array of values
 * @property {(clientIds: Array<String>) => ListOrdersRequest} clientIds Define clients by passing array of values
 * @property {(productIds: Array<Integer>) => ListOrdersRequest} productIds Define products by passing array of values
 * @property {(stockIds: Array<Integer>) => ListOrdersRequest} stockIds Define stocks by passing array of values
 * @property {(campaignIds: Array<Integer>) => ListOrdersRequest} campaignIds Define campaign by passing array of values
 * @property {(discountCodes: Array<String>) => ListOrdersRequest} discountCodes Define campaign by passing array of values
 * @property {(productId: Integer, sizeId: String|null) => ListProductsRequest} hasProduct Filter by product ID and optionally product size
 * @property {(orderHasPackage: Boolean) => ListProductsRequest} hasPackage Filter by orders that have any package number
 * @property {(accountName: String) => ListProductsRequest} fromAllegro Filter by orders from auction service Allegro
 * @property {(accountName: String) => ListProductsRequest} fromEbay Filter by orders from action service EBay
 * @property {(accountName: String) => ListProductsRequest} fromAmazon Filter by orders from action service Amazon
 * @property {(page: Integer, limit: Integer) => ListOrdersRequest} page Define page number and maximum results per page
 * @property {() => Integer} count Returns total numer of results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetOrdersRequest
 * @property {(ordersIds: Array<String>) => GetOrdersRequest} ordersIds Orders IDs.
 * @property {(ordersSerialNumbers: Array<Integer>) => GetOrdersRequest} ordersSerialNumbers Order serial numbers. You can transfer a maximum of 100 items.
 * @property {(orderExternalId: String) => GetOrdersRequest} orderExternalId The order ID of the external service. You can transfer a maximum of 100 items in one request.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostOrdersRequest
 * @property {(orders: Array<Object>) => PostOrdersRequest} orders Orders.
 * @property {(orderType: String) => PostOrdersRequest} orderType Order type. Allowed values. "retail" - retail order, "wholesale" - wholesale order (can be added only by customer with wholesale account registered). Default value:: "retail"
 * @property {(shopId: Integer) => PostOrdersRequest} shopId Shop Id
 * @property {(stockId: Integer) => PostOrdersRequest} stockId Stock ID
 * @property {(orderPaymentType: 'cash_on_delivery'|'prepaid'|'tradecredit') => PostOrdersRequest} orderPaymentType Order payment method. Allowed values. "cash_on_delivery" - cash on delivery, "prepaid" - prepayment, "tradecredit" - Trade credit.
 * @property {(currencyId: String) => PostOrdersRequest} currencyId Currency ID
 * @property {(clientWithoutAccount: String) => PostOrdersRequest} clientWithoutAccount Determines if customer unregistered. Allowed values. "y" - casual client, "n" - registered customer. Default value:: "y". If customer is unregistered, enter customer details in element: "clientWithoutAccountData". For client with account - existing login should be stored in: "clientLogin".
 * @property {(clientWithoutAccountData: Object) => PostOrdersRequest} clientWithoutAccountData Balance data for casual client. Object is necessary for casual clients (in case of client_once has y value).
 * @property {(clientLogin: String) => PostOrdersRequest} clientLogin Customer's login.
 * @property {(clientNoteToOrder: String) => PostOrdersRequest} clientNoteToOrder Customer comments on order.
 * @property {(clientNoteToCourier: String) => PostOrdersRequest} clientNoteToCourier Customer remarks for courier.
 * @property {(affiliateId: Integer) => PostOrdersRequest} affiliateId ID of a partner who acquired a given customer.
 * @property {(courierId: Integer) => PostOrdersRequest} courierId Courier ID.
 * @property {(pickupPointId: String) => PostOrdersRequest} pickupPointId Collection point ID.
 * @property {(deliveryCost: Number) => PostOrdersRequest} deliveryCost Delivery cost.
 * @property {(clientDeliveryAddress: Object) => PostOrdersRequest} clientDeliveryAddress Delivery address data.
 * @property {(payerAddress: Object) => PostOrdersRequest} payerAddress Buyer's address data.
 * @property {(products: Array<Object>) => PostOrdersRequest} products Products list.
 * @property {(orderRebateValue: Number) => PostOrdersRequest} orderRebateValue Discount value.
 * @property {(orderOperatorLogin: String) => PostOrdersRequest} orderOperatorLogin Order handler.
 * @property {(ignoreBridge: Boolean) => PostOrdersRequest} ignoreBridge Omits collecting orders via IAI Bridge.
 * @property {(settings: Object) => PostOrdersRequest} settings Settings
 * @property {(orderSettledAtPrice: 'gross'|'net'|'net_without_VAT') => PostOrdersRequest} orderSettledAtPrice Settlement by prices. "gross" - gross, "net" - net, "net_without_VAT" - net without VAT.
 * @property {(clientRequestInvoice: String) => PostOrdersRequest} clientRequestInvoice Customer asked for invoice. List of parameters: "y" - yes (paper invoicing ), "e" - yes (electronic invoicing ), "n" - no.
 * @property {(billingCurrency: String) => PostOrdersRequest} billingCurrency Order settlement currency.
 * @property {(billingCurrencyRate: Number) => PostOrdersRequest} billingCurrencyRate Panel billing currency exchange rate in relation to billing currency in the shop .
 * @property {(purchaseDate: String) => PostOrdersRequest} purchaseDate Sale date. ISO 8602 format.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutOrdersRequest
 * @property {(orders: Array<Object>) => PutOrdersRequest} orders Orders.
 * @property {(orderId: String) => PutOrdersRequest} orderId Order ID.
 * @property {(orderSerialNumber: Integer) => PutOrdersRequest} orderSerialNumber Order serial number.
 * @property {(orderStatus: String) => PutOrdersRequest} orderStatus Order status. Allowed values: "finished_ext" - order status: completed in FA application, "finished" - completed, "new" - not handled, "complainted" - complaint, "payment_waiting" - awaiting payment, "delivery_waiting" - awaiting delivery, "on_order" - in progress, "packed" - being picked, "packed_fulfillment" - being picked - fulfilment, "packed_ready" - packed, "ready" - ready, "returned" - return, "wait_for_dispatch" - awaiting dispatch date, "suspended" - on hold, "joined" - merged, "missing" - missing, "lost" - lost, "false" - false, "canceled" - Customer canceled.
 * @property {(apiFlag: 'none'|'registered'|'realized'|'registered_pos'|'realized_pos'|'registration_fault') => PutOrdersRequest} apiFlag Flag informing on order registration or completion in external program through API. Allowed values. "none" - order was not registered in external program, "registered" - order was registered in external program, "realized" - order was completed in external program, "registered_pos" - order was registered in external program, "realized_pos" - order was completed in external program.
 * @property {(apiNoteToOrder: String) => PutOrdersRequest} apiNoteToOrder API note added to order.
 * @property {(clientNoteToOrder: String) => PutOrdersRequest} clientNoteToOrder Customer comments on order.
 * @property {(clientNoteToCourier: String) => PutOrdersRequest} clientNoteToCourier Customer remarks for courier.
 * @property {(orderNote: String) => PutOrdersRequest} orderNote Note to the order.
 * @property {(products: Array<Object>) => PutOrdersRequest} products Products list.
 * @property {(orderPaymentType: 'cash_on_delivery'|'prepaid'|'tradecredit') => PutOrdersRequest} orderPaymentType Order payment method. Allowed values. "cash_on_delivery" - cash on delivery, "prepaid" - prepayment, "tradecredit" - Trade credit.
 * @property {(orderSettledAtPrice: 'gross'|'net'|'net_without_VAT') => PutOrdersRequest} orderSettledAtPrice Settlement by prices. "gross" - gross, "net" - net, "net_without_VAT" - net without VAT.
 * @property {(ignoreBridge: Boolean) => PutOrdersRequest} ignoreBridge Omits collecting orders via IAI Bridge.
 * @property {(settings: Object) => PutOrdersRequest} settings Settings
 * @property {(emailProcessingConsent: 'yes'|'no'|'disabled') => PutOrdersRequest} emailProcessingConsent Consent to send data to cooperating services
 * @property {(clientRequestInvoice: String) => PutOrdersRequest} clientRequestInvoice Customer asked for invoice. List of parameters: "y" - yes (paper invoicing ), "e" - yes (electronic invoicing ), "n" - no.
 * @property {(billingCurrency: String) => PutOrdersRequest} billingCurrency Order settlement currency.
 * @property {(billingCurrencyRate: Number) => PutOrdersRequest} billingCurrencyRate Panel billing currency exchange rate in relation to billing currency in the shop .
 * @property {(purchaseDate: String) => PutOrdersRequest} purchaseDate Sale date. ISO 8602 format.
 * @property {(estimatedDeliveryDate: String) => PutOrdersRequest} estimatedDeliveryDate Estimated date of shipment of the order.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetOrdersPackagesRequest
 * @property {(deliveryPackageNumbers: Array<String>) => GetOrdersPackagesRequest} deliveryPackageNumbers Consignments numbers.
 * @property {(orderNumbers: Array<Integer>) => GetOrdersPackagesRequest} orderNumbers Order serial numbers.
 * @property {(returnNumbers: Array<Integer>) => GetOrdersPackagesRequest} returnNumbers Returns numbers.
 * @property {(rmaNumbers: Array<Integer>) => GetOrdersPackagesRequest} rmaNumbers RMA numbers.
 * @property {(returnLabels: Boolean) => GetOrdersPackagesRequest} returnLabels Return parcel labels.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostOrdersPackagesRequest
 * @property {(orderPackages: Array<Object>) => PostOrdersPackagesRequest} orderPackages List of parcels assigned to the order Maximum default number: 100 parcels.
 * @property {(eventId: String) => PostOrdersPackagesRequest} eventId Id.
 * @property {(eventType: 'order'|'rma'|'return') => PostOrdersPackagesRequest} eventType Type.
 * @property {(packages: Array<Object>) => PostOrdersPackagesRequest} packages Information on consignments.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutOrdersPackagesRequest
 * @property {(orderPackages: Array<Object>) => PutOrdersPackagesRequest} orderPackages List of parcels assigned to the order Maximum default number: 100 parcels.
 * @property {(eventId: String) => PutOrdersPackagesRequest} eventId Id.
 * @property {(eventType: 'order'|'rma'|'return') => PutOrdersPackagesRequest} eventType Type.
 * @property {(packages: Array<Object>) => PutOrdersPackagesRequest} packages Information on consignments.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutOrdersPickupPointRequest
 * @property {(orderSerialNumber: Integer) => PutOrdersPickupPointRequest} orderSerialNumber Order serial number.
 * @property {(pickupPointId: String) => PutOrdersPickupPointRequest} pickupPointId Collection point ID.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetOrdersPrinterDocumentsRequest
 * @property {(user: String) => GetOrdersPrinterDocumentsRequest} user 
 * @property {(printScenarioAction: String) => GetOrdersPrinterDocumentsRequest} printScenarioAction 
 * @property {(objectNumber: String) => GetOrdersPrinterDocumentsRequest} objectNumber 
 * @property {(objectType: String) => GetOrdersPrinterDocumentsRequest} objectType 
 * @property {(printerAccessKey: String) => GetOrdersPrinterDocumentsRequest} printerAccessKey 
 * @property {(skipNotGeneratedDocument: Boolean) => GetOrdersPrinterDocumentsRequest} skipNotGeneratedDocument 
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutOrdersProductsSerialNumbersRequest
 * @property {(orders: Array<Object>) => PutOrdersProductsSerialNumbersRequest} orders Orders.
 * @property {(orderSerialNumber: Integer) => PutOrdersProductsSerialNumbersRequest} orderSerialNumber Order serial number.
 * @property {(orderProducts: Array<Object>) => PutOrdersProductsSerialNumbersRequest} orderProducts Products list.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutOrdersProfitMarginRequest
 * @property {(orders: Array<Object>) => PutOrdersProfitMarginRequest} orders Orders.
 * @property {(orderSerialNumber: Integer) => PutOrdersProfitMarginRequest} orderSerialNumber Order serial number.
 * @property {(products: Array<Object>) => PutOrdersProfitMarginRequest} products Products list.
 * @property {(errors: Object) => PutOrdersProfitMarginRequest} errors Information on error that occurred during gate call.
 * @property {(isProductsErrors: Boolean) => PutOrdersProfitMarginRequest} isProductsErrors Flag marking errors in the result.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetOrdersProfitabilityRequest
 * @property {(orderSerialNumber: Integer) => GetOrdersProfitabilityRequest} orderSerialNumber Order serial number.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutOrdersShippingCostsRequest
 * @property {(orderSerialNumber: Integer) => PutOrdersShippingCostsRequest} orderSerialNumber Order serial number.
 * @property {(deliveryCost: Number) => PutOrdersShippingCostsRequest} deliveryCost Delivery cost.
 * @property {(orderDeliveryVat: Number) => PutOrdersShippingCostsRequest} orderDeliveryVat Delivery VAT.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} ListOrdersUnfinishedRequest
 * @property {(orderPrepaidStatus: String) => ListOrdersUnfinishedRequest} orderPrepaidStatus Prepayment status. Status list: "unpaid" - not paid, "restored" - returned, "waiting" - not registered.
 * @property {(ordersStatuses: Array<String>) => ListOrdersUnfinishedRequest} ordersStatuses Order status. Status list: "new" - not handled, "on_order" - in progress, "packed" - being picked, "packed_fulfillment" - being picked - fulfilment, "packed_ready" - packed, "ready" - ready, "payment_waiting" - awaiting payment, "delivery_waiting" - awaiting delivery, "wait_for_dispatch" - awaiting dispatch date, "suspended" - on hold, "finished_ext" - handled in FA application.
 * @property {(couriersName: Array<String>) => ListOrdersUnfinishedRequest} couriersName Shipping companies (packages deliverers).
 * @property {(orderPaymentType: String) => ListOrdersUnfinishedRequest} orderPaymentType Order payment method. Allowed values. "cash_on_delivery" - cash on delivery, "prepaid" - prepayment, "tradecredit" - Trade credit.
 * @property {(orderType: 'wholesale'|'retail'|'dropshipping'|'deliverer') => ListOrdersUnfinishedRequest} orderType Order type. Allowed values: "retail" - retail order, "wholesale" - whiolesale order , "dropshipping" - order to be handled, "deliverer" - order sent to the supplier.
 * @property {(dropshippingOrderStatus: 'all'|'finished'|'canceled'|'notCanceled') => ListOrdersUnfinishedRequest} dropshippingOrderStatus Dropshipping order status in the supplier's system. Allowed values: "all" - all, "finished" - sent, "canceled" - canceled, "notCanceled" - failed to cancel.
 * @property {(ordersIds: Array<String>) => ListOrdersUnfinishedRequest} ordersIds Orders IDs.
 * @property {(ordersSerialNumbers: Array<Integer>) => ListOrdersUnfinishedRequest} ordersSerialNumbers Order serial numbers.
 * @property {(clients: Array<Object>) => ListOrdersUnfinishedRequest} clients Customer data.
 * @property {(ordersRange: Object) => ListOrdersUnfinishedRequest} ordersRange Ranges of dates or serial numbers.
 * @property {(orderSource: Object) => ListOrdersUnfinishedRequest} orderSource Order source data.
 * @property {(products: Array<Object>) => ListOrdersUnfinishedRequest} products Products list.
 * @property {(resultsPage: Integer) => ListOrdersUnfinishedRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => ListOrdersUnfinishedRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(clientRequestInvoice: String) => ListOrdersUnfinishedRequest} clientRequestInvoice Customer asked for invoice. List of parameters: "invoice" - yes (paper invoicing ), "e_invoice" - yes (electronic invoicing ), "n" - no.
 * @property {(packages: Object) => ListOrdersUnfinishedRequest} packages Information on consignments.
 * @property {(stocks: Array<Object>) => ListOrdersUnfinishedRequest} stocks Stock quantities data.
 * @property {(campaign: Object) => ListOrdersUnfinishedRequest} campaign Used discount codes data.
 * @property {(loyaltyPointsMode: 'all'|'given'|'taken'|'given_or_taken'|'given_and_taken'|'not_given_nor_taken') => ListOrdersUnfinishedRequest} loyaltyPointsMode Loyalty points.
 * @property {(orderOperatorLogin: String) => ListOrdersUnfinishedRequest} orderOperatorLogin Order handler.
 * @property {(orderPackingPersonLogin: String) => ListOrdersUnfinishedRequest} orderPackingPersonLogin Order picker.
 * @property {(ordersBy: Array<Object>) => ListOrdersUnfinishedRequest} ordersBy Possibility of sorting returned list
 * @property {(searchingOperatorTypeMatch: 'no_assignment'|'no_empty'|'empty') => ListOrdersUnfinishedRequest} searchingOperatorTypeMatch Method of searching orders by handler.
 * @property {(ordersDelayed: 'y'|'n') => ListOrdersUnfinishedRequest} ordersDelayed Orders with the exceeded date of shipment.
 * @property {(shopIds: Array<Integer>) => ListOrdersUnfinishedRequest} shopIds Define shopsIds value nested inside orderSource
 * @property {(byPackageNumbers: Array<String>) => ListOrdersUnfinishedRequest} byPackageNumbers Define packagesNumbers value nested inside packages
 * @property {(dateFrom: DateLike, dateTo: DateLike, dateType: "add"|"modified"|"dispatch"|"payment"|"last_payments_operation"|"declared_payments") => ListOrdersUnfinishedRequest} dates Type of date according to the index results. Possible type values: add, modified, dispatch, payment, last_payments_operation, declared_payments
 * @property {(elementName: "id"|"sn"|"order_time"|"status"|"order_source"|"order_cost"|"discount_code"|"ready_to_send_date", descending: Boolean) => ListOrdersUnfinishedRequest} orderBy Define sorting by element and direction
 * @property {(logins: Array<String>) => ListOrdersUnfinishedRequest} logins Define clients by passing array of values
 * @property {(clientIds: Array<String>) => ListOrdersUnfinishedRequest} clientIds Define clients by passing array of values
 * @property {(productIds: Array<Integer>) => ListOrdersUnfinishedRequest} productIds Define products by passing array of values
 * @property {(stockIds: Array<Integer>) => ListOrdersUnfinishedRequest} stockIds Define stocks by passing array of values
 * @property {(campaignIds: Array<Integer>) => ListOrdersUnfinishedRequest} campaignIds Define campaign by passing array of values
 * @property {(discountCodes: Array<String>) => ListOrdersUnfinishedRequest} discountCodes Define campaign by passing array of values
 * @property {(productId: Integer, sizeId: String|null) => ListProductsRequest} hasProduct Filter by product ID and optionally product size
 * @property {(orderHasPackage: Boolean) => ListProductsRequest} hasPackage Filter by orders that have any package number
 * @property {(accountName: String) => ListProductsRequest} fromAllegro Filter by orders from auction service Allegro
 * @property {(accountName: String) => ListProductsRequest} fromEbay Filter by orders from action service EBay
 * @property {(accountName: String) => ListProductsRequest} fromAmazon Filter by orders from action service Amazon
 * @property {(page: Integer, limit: Integer) => ListOrdersUnfinishedRequest} page Define page number and maximum results per page
 * @property {() => Integer} count Returns total numer of results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetOrdersWarehouseRequest
 * @property {(orderSerialNumber: Integer) => GetOrdersWarehouseRequest} orderSerialNumber Order serial number.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutOrdersWarehouseRequest
 * @property {(orderSerialNumber: Integer) => PutOrdersWarehouseRequest} orderSerialNumber Order serial number.
 * @property {(stockId: Integer) => PutOrdersWarehouseRequest} stockId Stock ID
 * @property {(orderOperatorLogin: String) => PutOrdersWarehouseRequest} orderOperatorLogin Order handler.
 * @property {(externalStockId: 'amazonde'|'amazones'|'amazonfr'|'amazonit'|'amazoncouk'|'amazonnl'|'amazonse'|'amazoncomtr'|'amazonae'|'amazonus'|'amazonpl') => PutOrdersWarehouseRequest} externalStockId External warehouse ID (if required)
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetPackagesLabelsRequest
 * @property {(eventId: Integer) => GetPackagesLabelsRequest} eventId Id.
 * @property {(eventType: 'order'|'rma'|'return') => GetPackagesLabelsRequest} eventType Event type
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostPackagesLabelsRequest
 * @property {(eventId: Integer) => PostPackagesLabelsRequest} eventId Id.
 * @property {(eventType: 'order'|'rma'|'return') => PostPackagesLabelsRequest} eventType Type.
 * @property {(parcelParameters: Array<Object>) => PostPackagesLabelsRequest} parcelParameters Shipment configuration options available for a given courier
 * @property {(parcelParametersByPackages: Array<Object>) => PostPackagesLabelsRequest} parcelParametersByPackages Shipment configuration options available for Inpost Smile courier
 * @property {(packageId: String) => PostPackagesLabelsRequest} packageId Package ID in system.
 * @property {(parcelParameters: Array<Object>) => PostPackagesLabelsRequest} parcelParameters Shipment configuration options available for a given courier
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetPackagesRequest
 * @property {(deliveryPackageNumbers: Array<String>) => GetPackagesRequest} deliveryPackageNumbers Consignments numbers.
 * @property {(events: Array<Object>) => GetPackagesRequest} events Element, package is assigned to
 * @property {(returnLabels: Boolean) => GetPackagesRequest} returnLabels Return parcel labels.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostPackagesRequest
 * @property {(orderPackages: Array<Object>) => PostPackagesRequest} orderPackages List of parcels assigned to the order Maximum default number: 100 parcels.
 * @property {(orderId: String) => PostPackagesRequest} orderId Order ID.
 * @property {(orderType: 'order'|'rma'|'return') => PostPackagesRequest} orderType Order type. Allowed values. "retail" - retail order, "wholesale" - wholesale order (can be added only by customer with wholesale account registered). Default value:: "retail"
 * @property {(packages: Array<Object>) => PostPackagesRequest} packages Information on consignments.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutPackagesRequest
 * @property {(orderPackages: Array<Object>) => PutPackagesRequest} orderPackages List of parcels assigned to the order Maximum default number: 100 parcels.
 * @property {(orderId: String) => PutPackagesRequest} orderId Order ID.
 * @property {(orderType: 'order'|'rma'|'return') => PutPackagesRequest} orderType Order type. Allowed values. "retail" - retail order, "wholesale" - wholesale order (can be added only by customer with wholesale account registered). Default value:: "retail"
 * @property {(packages: Array<Object>) => PutPackagesRequest} packages Information on consignments.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostPaymentsCancelRequest
 * @property {(sourceType: 'order'|'return'|'rma') => PostPaymentsCancelRequest} sourceType Defines payment category. For the payments regarding returns, enter 'return'.
 * @property {(paymentNumber: String) => PostPaymentsCancelRequest} paymentNumber Payment number - [order no.]-[payment no.], i.e. 1234-1.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostPaymentsCashbackRequest
 * @property {(sourceType: 'order'|'return') => PostPaymentsCashbackRequest} sourceType 
 * @property {(paymentNumber: String) => PostPaymentsCashbackRequest} paymentNumber Payment number - [order no.]-[payment no.], i.e. 1234-1.
 * @property {(value: Number) => PostPaymentsCashbackRequest} value Refund value.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutPaymentsConfirmRequest
 * @property {(sourceType: 'order'|'return'|'rma') => PutPaymentsConfirmRequest} sourceType Defines payment category. For the payments regarding returns, enter 'return'.
 * @property {(paymentNumber: String) => PutPaymentsConfirmRequest} paymentNumber Payment number - [order no.]-[payment no.], i.e. 1234-1.
 * @property {(accountingDate: String) => PutPaymentsConfirmRequest} accountingDate Registering date
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetPaymentsFormsRequest
 * @property {(activeOnly: 'yes'|'no') => GetPaymentsFormsRequest} activeOnly Return only active forms of payment.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetPaymentsRequest
 * @property {(paymentNumber: String) => GetPaymentsRequest} paymentNumber Payment number consists of: source ID (order / return ID) and the payment ordinal number, e.g. 1234-1.
 * @property {(sourceType: 'order'|'return'|'rma') => GetPaymentsRequest} sourceType Source type.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostPaymentsRequest
 * @property {(sourceId: Integer) => PostPaymentsRequest} sourceId Source ID.
 * @property {(sourceType: 'order'|'return'|'rma') => PostPaymentsRequest} sourceType Source type.
 * @property {(value: Number) => PostPaymentsRequest} value Payment amount.
 * @property {(account: String) => PostPaymentsRequest} account Number of a bank account to which a payment is sent.
 * @property {(type: 'payment'|'advance'|'repayment'|'fee') => PostPaymentsRequest} type 
 * @property {(paymentFormId: Integer) => PostPaymentsRequest} paymentFormId Form of payment ID.
 * @property {(paymentVoucherKey: String) => PostPaymentsRequest} paymentVoucherKey Gift card or voucher number
 * @property {(giftCardPIN: Integer) => PostPaymentsRequest} giftCardPIN Gift card PIN.
 * @property {(externalPaymentId: String) => PostPaymentsRequest} externalPaymentId Transaction ID in external service
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutPaymentsRequest
 * @property {(sourceType: 'order'|'return'|'rma') => PutPaymentsRequest} sourceType Defines payment category. For the payments regarding returns, enter 'return'.
 * @property {(paymentNumber: String) => PutPaymentsRequest} paymentNumber Payment number - [order no.]-[payment no.], i.e. 1234-1.
 * @property {(paymentFormId: Integer) => PutPaymentsRequest} paymentFormId Payment method ID. Check getPaymentForms.
 * @property {(value: Number) => PutPaymentsRequest} value Refund value.
 * @property {(accountingDate: String) => PutPaymentsRequest} accountingDate Registering date.
 * @property {(account: String) => PutPaymentsRequest} account Number of a bank account to which a payment is sent.
 * @property {(clientAccount: String) => PutPaymentsRequest} clientAccount Data of customer account in store.
 * @property {(other: Object) => PutPaymentsRequest} other 
 * @property {(externalPaymentId: String) => PutPaymentsRequest} externalPaymentId Transaction ID in external service
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetPaymentsProfilesRequest
 * @property {(resultsPage: Integer) => GetPaymentsProfilesRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetPaymentsProfilesRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(page: Integer, limit: Integer) => GetPaymentsProfilesRequest} page Define page number and maximum results per page
 * @property {() => Integer} count Returns total numer of results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostPaymentsRepaymentRequest
 * @property {(source_id: Integer) => PostPaymentsRepaymentRequest} source_id Returns ID.
 * @property {(source_type: String) => PostPaymentsRepaymentRequest} source_type Defines payment category. For the payments regarding returns, enter 'return'.
 * @property {(value: Number) => PostPaymentsRepaymentRequest} value Refund value.
 * @property {(payment_form_id: Integer) => PostPaymentsRepaymentRequest} payment_form_id Payment method ID. Check getPaymentForms.
 * @property {(account: String) => PostPaymentsRepaymentRequest} account Number of a bank account to which a payment is sent.
 * @property {(client_account: String) => PostPaymentsRepaymentRequest} client_account Customer account.
 * @property {(other: Object) => PostPaymentsRepaymentRequest} other Other.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetProductsSKUbyBarcodeRequest
 * @property {(productIndices: Array<String>) => GetProductsSKUbyBarcodeRequest} productIndices List of sought products by indexes.
 * @property {(searchOnlyInCodeIai: Boolean) => GetProductsSKUbyBarcodeRequest} searchOnlyInCodeIai Search for products only by IAI code
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutProductsAttachmentsRequest
 * @property {(productsAttachments: Array<Object>) => PutProductsAttachmentsRequest} productsAttachments 
 * @property {(productIdent: Object) => PutProductsAttachmentsRequest} productIdent Stock keeping unit.
 * @property {(attachments: Array<Object>) => PutProductsAttachmentsRequest} attachments Product attachments list.
 * @property {(virtualAttachments: Array<Object>) => PutProductsAttachmentsRequest} virtualAttachments List of product's virtual attachments.
 * @property {(errors: Object) => PutProductsAttachmentsRequest} errors Information on error that occurred during gate call.
 * @property {(attachmentsErrorsOccurred: Boolean) => PutProductsAttachmentsRequest} attachmentsErrorsOccurred Flag indicating if there are errors in results of attachments settings.
 * @property {(virtualAttachmentsErrorsOccurred: Boolean) => PutProductsAttachmentsRequest} virtualAttachmentsErrorsOccurred Flag indicating if there are errors in results of virtual attachments settings.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetProductsAuctionsRequest
 * @property {(products: Array<Object>) => GetProductsAuctionsRequest} products Products list.
 * @property {(auctionSites: Array<String>) => GetProductsAuctionsRequest} auctionSites Array of auction site IDs
 * @property {(resultsPage: Integer) => GetProductsAuctionsRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetProductsAuctionsRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(ids: Array<Integer>) => GetProductsAuctionsRequest} ids Define products by passing array of values
 * @property {(page: Integer, limit: Integer) => GetProductsAuctionsRequest} page Define page number and maximum results per page
 * @property {() => Integer} count Returns total numer of results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} DeleteProductsBrandsRequest
 * @property {(ids: Array<Integer>) => DeleteProductsBrandsRequest} ids #!IdentyfikatoryProducentow!#
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetProductsBrandsRequest
 * @property {(results_page: Integer) => GetProductsBrandsRequest} results_page Result page number.
 * @property {(results_limit: Integer) => GetProductsBrandsRequest} results_limit Number of results on page.
 * @property {(languagesIds: Array<String>) => GetProductsBrandsRequest} languagesIds List of languages
 * @property {(page: Integer, limit: Integer) => GetProductsBrandsRequest} page Define page number and maximum results per page
 * @property {() => Integer} count Returns total numer of results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostProductsBrandsRequest
 * @property {(producers: Array<Object>) => PostProductsBrandsRequest} producers List of manufacturers assigned to sought products.
 * @property {(nameInPanel: String) => PostProductsBrandsRequest} nameInPanel Name in panel
 * @property {(languagesConfigurations: Array<Object>) => PostProductsBrandsRequest} languagesConfigurations 
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutProductsBrandsRequest
 * @property {(producers: Array<Object>) => PutProductsBrandsRequest} producers List of manufacturers assigned to sought products.
 * @property {(id: Integer) => PutProductsBrandsRequest} id Id
 * @property {(nameInPanel: String) => PutProductsBrandsRequest} nameInPanel Name in panel
 * @property {(languagesConfigurations: Array<Object>) => PutProductsBrandsRequest} languagesConfigurations 
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetProductsBrandsFilterRequest
 * @property {(shopId: Integer) => GetProductsBrandsFilterRequest} shopId Shop Id
 * @property {(languageId: String) => GetProductsBrandsFilterRequest} languageId Language ID (code in ISO 639-2).
 * @property {(producerId: Integer) => GetProductsBrandsFilterRequest} producerId Brand ID
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutProductsBrandsFilterRequest
 * @property {(shopId: Integer) => PutProductsBrandsFilterRequest} shopId Shop Id
 * @property {(languageId: String) => PutProductsBrandsFilterRequest} languageId Language ID (code in ISO 639-2).
 * @property {(producerId: Integer) => PutProductsBrandsFilterRequest} producerId Brand ID
 * @property {(filterForNodeIsDefault: 'y'|'n') => PutProductsBrandsFilterRequest} filterForNodeIsDefault 
 * @property {(filtersActive: Array<Object>) => PutProductsBrandsFilterRequest} filtersActive Active filters.
 * @property {(filterId: String) => PutProductsBrandsFilterRequest} filterId Menu filter ID.
 * @property {(filterName: String) => PutProductsBrandsFilterRequest} filterName Filter name on page.
 * @property {(filterDisplay: 'name'|'gfx'|'namegfx') => PutProductsBrandsFilterRequest} filterDisplay Display as: "name" - text, "gfx" - graphics, "namegfx" - text and graphics.
 * @property {(filterValueSort: 'y'|'n'|'priority') => PutProductsBrandsFilterRequest} filterValueSort Sort by: "y" - alfabetically, "n" - by frequency and order of occurrence of indicated parameter value in found products, "priority" - according to value sequence in parameter.
 * @property {(filterDefaultEnabled: 'y'|'n') => PutProductsBrandsFilterRequest} filterDefaultEnabled Enabled by default .
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostProductsBundlesRequest
 * @property {(params: Array<Object>) => PostProductsBundlesRequest} params Parameters transmitted to method
 * @property {(products: Array<Object>) => PostProductsBundlesRequest} products Products list.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} DeleteProductsBundlesProductsRequest
 * @property {(params: Array<Object>) => DeleteProductsBundlesProductsRequest} params Parameters transmitted to method
 * @property {(products: Array<Object>) => DeleteProductsBundlesProductsRequest} products Products list.
 * @property {(bundleIdent: Object) => DeleteProductsBundlesProductsRequest} bundleIdent 
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostProductsBundlesProductsRequest
 * @property {(params: Array<Object>) => PostProductsBundlesProductsRequest} params Parameters transmitted to method
 * @property {(products: Array<Object>) => PostProductsBundlesProductsRequest} products Products list.
 * @property {(bundleIdent: Object) => PostProductsBundlesProductsRequest} bundleIdent 
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutProductsBundlesProductsQuantityRequest
 * @property {(params: Array<Object>) => PutProductsBundlesProductsQuantityRequest} params Parameters transmitted to method
 * @property {(products: Array<Object>) => PutProductsBundlesProductsQuantityRequest} products Products list.
 * @property {(bundleIdent: Object) => PutProductsBundlesProductsQuantityRequest} bundleIdent 
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutProductsBundlesRenewRequest
 * @property {(params: Array<Object>) => PutProductsBundlesRenewRequest} params Parameters transmitted to method
 * @property {(products: Array<Object>) => PutProductsBundlesRenewRequest} products Products list.
 * @property {(bundleIdent: Object) => PutProductsBundlesRenewRequest} bundleIdent ID of a set being modified.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetProductsCategoriesRequest
 * @property {(ids: Array<Integer>) => GetProductsCategoriesRequest} ids List of product category identifiers in the panel
 * @property {(languages: Array<String>) => GetProductsCategoriesRequest} languages Array of languages categories names should be returned in. "Defaults" value returns categories names in store default language. Not using languages parameter causes a situation, that categories names are returned in all available languages.
 * @property {(results_page: Integer) => GetProductsCategoriesRequest} results_page Result page number.
 * @property {(results_limit: Integer) => GetProductsCategoriesRequest} results_limit Number of results on page.
 * @property {(return_last_changed_time: String) => GetProductsCategoriesRequest} return_last_changed_time Returns the date of last modification (YYYY-MM-DD HH-MM-SS).
 * @property {(page: Integer, limit: Integer) => GetProductsCategoriesRequest} page Define page number and maximum results per page
 * @property {() => Integer} count Returns total numer of results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutProductsCategoriesRequest
 * @property {(categories: Array<Object>) => PutProductsCategoriesRequest} categories List of categories in which sought products are present.
 * @property {(id: Integer) => PutProductsCategoriesRequest} id Category id.
 * @property {(parent_id: Integer) => PutProductsCategoriesRequest} parent_id Parent category ID.
 * @property {(priority: Integer) => PutProductsCategoriesRequest} priority Category priority. Value from 1 to 19.
 * @property {(operation: String) => PutProductsCategoriesRequest} operation Operation code. Allowed values. "add" - adds new category, "edit" - edits existing category, "del" - deletes existing category.
 * @property {(lang_data: Array<Object>) => PutProductsCategoriesRequest} lang_data 
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetProductsCategoriesIdosellRequest
 * @property {(languagesIds: Array<Object>) => GetProductsCategoriesIdosellRequest} languagesIds List of languages
 * @property {(categoriesIdoSellIds: Array<String>) => GetProductsCategoriesIdosellRequest} categoriesIdoSellIds Number of IdoSell Categories identifiers
 * @property {(categoriesIdoSellNames: Array<String>) => GetProductsCategoriesIdosellRequest} categoriesIdoSellNames IdoSell Categories name list
 * @property {(categoriesIdoSellPaths: Array<String>) => GetProductsCategoriesIdosellRequest} categoriesIdoSellPaths IdoSell Categories path list
 * @property {(resultsPage: Integer) => GetProductsCategoriesIdosellRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetProductsCategoriesIdosellRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(languages: Array<Integer>) => GetProductsCategoriesIdosellRequest} languages Define languagesIds by passing array of values
 * @property {(page: Integer, limit: Integer) => GetProductsCategoriesIdosellRequest} page Define page number and maximum results per page
 * @property {() => Integer} count Returns total numer of results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetProductsCodeExistenceRequest
 * @property {(products: Array<Object>) => GetProductsCodeExistenceRequest} products Products list.
 * @property {(ids: Array<Integer>) => GetProductsCodeExistenceRequest} ids Define products by passing array of values
 * @property {(externalCodes: Array<String>) => GetProductsCodeExistenceRequest} externalCodes Define products by passing array of values
 * @property {(producerCodes: Array<String>) => GetProductsCodeExistenceRequest} producerCodes Define products by passing array of values
 * @property {(deliverers: Array<Integer>) => GetProductsCodeExistenceRequest} deliverers Define products by passing array of values
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostProductsCollectionsRequest
 * @property {(params: Array<Object>) => PostProductsCollectionsRequest} params Parameters transmitted to method
 * @property {(products: Array<Object>) => PostProductsCollectionsRequest} products Products list.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} DeleteProductsCollectionsProductsRequest
 * @property {(params: Array<Object>) => DeleteProductsCollectionsProductsRequest} params Parameters transmitted to method
 * @property {(products: Array<Object>) => DeleteProductsCollectionsProductsRequest} products Products list.
 * @property {(collectionId: Integer) => DeleteProductsCollectionsProductsRequest} collectionId ID of a collection being modified
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostProductsCollectionsProductsRequest
 * @property {(params: Array<Object>) => PostProductsCollectionsProductsRequest} params Parameters transmitted to method
 * @property {(products: Array<Object>) => PostProductsCollectionsProductsRequest} products Products list.
 * @property {(collectionId: Integer) => PostProductsCollectionsProductsRequest} collectionId ID of a collection being modified
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutProductsCollectionsProductsRequest
 * @property {(params: Array<Object>) => PutProductsCollectionsProductsRequest} params Parameters transmitted to method
 * @property {(products: Array<Object>) => PutProductsCollectionsProductsRequest} products Products list.
 * @property {(collectionId: Integer) => PutProductsCollectionsProductsRequest} collectionId ID of a collection being modified.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutProductsCollectionsRenewRequest
 * @property {(params: Array<Object>) => PutProductsCollectionsRenewRequest} params Parameters transmitted to method
 * @property {(products: Array<Object>) => PutProductsCollectionsRenewRequest} products Products list.
 * @property {(collectionIdent: Object) => PutProductsCollectionsRenewRequest} collectionIdent ID of a collection being modified.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetProductsDeliveryTimeRequest
 * @property {(stockId: Integer) => GetProductsDeliveryTimeRequest} stockId Stock ID
 * @property {(isCollectionInPerson: Boolean) => GetProductsDeliveryTimeRequest} isCollectionInPerson Should products be prepared for personal collection?
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetProductsDescriptionsRequest
 * @property {(type: 'id'|'index'|'codeExtern'|'codeProducer') => GetProductsDescriptionsRequest} type Identifier type.
 * @property {(ids: Array<Integer>) => GetProductsDescriptionsRequest} ids ID value.
 * @property {(shopId: Integer) => GetProductsDescriptionsRequest} shopId Shop Id
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutProductsDescriptionsRequest
 * @property {(products: Array<Object>) => PutProductsDescriptionsRequest} products Products list.
 * @property {(productIdent: Object) => PutProductsDescriptionsRequest} productIdent 
 * @property {(productDescriptionsLangData: Array<Object>) => PutProductsDescriptionsRequest} productDescriptionsLangData Array of language-dependent elements.
 * @property {(productAuctionDescriptionsData: Array<Object>) => PutProductsDescriptionsRequest} productAuctionDescriptionsData Product data for auction services
 * @property {function} append Append current data to array and start modifying next row
 * @property {(productId: Integer) => PutProductsDescriptionsRequest} productId Define identValue value nested inside productIdent
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutProductsGroupsMainProductRequest
 * @property {(groups: Array<Object>) => PutProductsGroupsMainProductRequest} groups 
 * @property {(productIdent: Object) => PutProductsGroupsMainProductRequest} productIdent 
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutProductsGroupsOrderRequest
 * @property {(groups: Array<Object>) => PutProductsGroupsOrderRequest} groups 
 * @property {(productsInOrder: Array<Object>) => PutProductsGroupsOrderRequest} productsInOrder 
 * @property {function} append Append current data to array and start modifying next row
 * @property {() => PutProductsGroupsOrderRequest} productIdsInOrder Defines order of products within group by automatically setting proprities in order of appearance
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutProductsGroupsSettingsRequest
 * @property {(groups: Array<Object>) => PutProductsGroupsSettingsRequest} groups 
 * @property {(productIdent: Object) => PutProductsGroupsSettingsRequest} productIdent 
 * @property {(displayInPanel: 'firstAvailable'|'all') => PutProductsGroupsSettingsRequest} displayInPanel Display on the product list in the panel.
 * @property {(displayOnPage: 'firstAvailable'|'all'|'specified') => PutProductsGroupsSettingsRequest} displayOnPage Display on a product list on the page.
 * @property {(specifiedProductIdent: Object) => PutProductsGroupsSettingsRequest} specifiedProductIdent Selected product in the group.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetProductsIdBySizecodeRequest
 * @property {(codes: Array<String>) => GetProductsIdBySizecodeRequest} codes Search codes.
 * @property {(type: String) => GetProductsIdBySizecodeRequest} type Type of codes. Acceptable values: "external" (default value) - external system code, "producer" - producer code, and "all" - any of the above codes
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} DeleteProductsImagesRequest
 * @property {(params: Array<Object>) => DeleteProductsImagesRequest} params Parameters transmitted to method
 * @property {(deleteAll: Boolean) => DeleteProductsImagesRequest} deleteAll Delete all images
 * @property {(productId: Integer) => DeleteProductsImagesRequest} productId Product IAI code
 * @property {(shopId: Integer) => DeleteProductsImagesRequest} shopId Shop Id
 * @property {(productImagesId: Array<String>) => DeleteProductsImagesRequest} productImagesId 
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutProductsImagesRequest
 * @property {(productsImagesSettings: Object) => PutProductsImagesRequest} productsImagesSettings 
 * @property {(productsImages: Array<Object>) => PutProductsImagesRequest} productsImages Information on product images
 * @property {(productIdent: Object) => PutProductsImagesRequest} productIdent 
 * @property {(shopId: Integer) => PutProductsImagesRequest} shopId Shop Id
 * @property {(productImages: Array<Object>) => PutProductsImagesRequest} productImages Product photos details.
 * @property {(productIcons: Array<Object>) => PutProductsImagesRequest} productIcons Product icons list.
 * @property {(productImagesSettings: Object) => PutProductsImagesRequest} productImagesSettings Product settings.
 * @property {function} append Append current data to array and start modifying next row
 * @property {(productId: Integer) => PutProductsImagesRequest} productId Define identValue value nested inside productIdent
 * @property {(shopIcon: String) => PutProductsImagesRequest} shopIcon Append productIconSource value into nested array inside productIcons
 * @property {(auctionIcon: String) => PutProductsImagesRequest} auctionIcon Append productIconSource value into nested array inside productIcons
 * @property {(groupIcon: String) => PutProductsImagesRequest} groupIcon Append productIconSource value into nested array inside productIcons
 * @property {(source: String, priority: Integer) => PutProductsImagesRequest} addImage Adds image source with selected priority
 * @property {() => PutProductsImagesRequest} base64 Set global image source to base64
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetProductsMarketingAllFacebookCatalogIdsRequest
 * @property {(shopId: Integer) => GetProductsMarketingAllFacebookCatalogIdsRequest} shopId Shop Id
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetProductsMarketingPromotionRequest
 * @property {(shopId: Integer) => GetProductsMarketingPromotionRequest} shopId Shop Id
 * @property {(products: Array<Integer>) => GetProductsMarketingPromotionRequest} products Products list.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostProductsMarketingPromotionRequest
 * @property {(promotionName: String) => PostProductsMarketingPromotionRequest} promotionName Promotion name
 * @property {(shopsIds: Array<Integer>) => PostProductsMarketingPromotionRequest} shopsIds List of stores IDs When mask is determined, this parameter is omitted.
 * @property {(marketingZones: Object) => PostProductsMarketingPromotionRequest} marketingZones Special zones
 * @property {(newPriceSettings: Object) => PostProductsMarketingPromotionRequest} newPriceSettings #!KonfiguracjaCenyPromocyjnej!#
 * @property {(startDate: String) => PostProductsMarketingPromotionRequest} startDate #!DataRozpoczeciaWFormacieYMDHIS!#
 * @property {(endDate: String) => PostProductsMarketingPromotionRequest} endDate #!DataZakonczeniaWFormacieYMDHIS!#
 * @property {(changeProductsToVisibleWhileStarting: 'y'|'n') => PostProductsMarketingPromotionRequest} changeProductsToVisibleWhileStarting Change the status of hidden products to visible while starting the special offer
 * @property {(removeProductsAfterStockLevelRunsDown: 'y'|'n') => PostProductsMarketingPromotionRequest} removeProductsAfterStockLevelRunsDown After running out of stock, automatically remove from the promotion products added separately (does not apply to series, producers, categories and menu) 
 * @property {(reduceBasingPrice: 'net'|'gross') => PostProductsMarketingPromotionRequest} reduceBasingPrice #!ObnizNaPodstawieCenyNettoBrutto!#
 * @property {(calculationMethod: 'sum'|'chooseAdvantageous') => PostProductsMarketingPromotionRequest} calculationMethod Price reduction calculation method
 * @property {(promotionElements: Array<Object>) => PostProductsMarketingPromotionRequest} promotionElements #!ElementyNaJakieMaDzialacPromocja!#
 * @property {(elementType: 'product'|'series'|'producer'|'category'|'menu') => PostProductsMarketingPromotionRequest} elementType 
 * @property {(elementId: String) => PostProductsMarketingPromotionRequest} elementId #!IdentyfikatorElementuNaJakiOddzialujePromocja!#
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutProductsMarketingPromotionRequest
 * @property {(promotionId: String) => PutProductsMarketingPromotionRequest} promotionId Special offer ID
 * @property {(promotionName: String) => PutProductsMarketingPromotionRequest} promotionName Promotion name
 * @property {(shopsIds: Array<Integer>) => PutProductsMarketingPromotionRequest} shopsIds List of stores IDs When mask is determined, this parameter is omitted.
 * @property {(marketingZones: Object) => PutProductsMarketingPromotionRequest} marketingZones Special zones
 * @property {(newPriceSettings: Object) => PutProductsMarketingPromotionRequest} newPriceSettings #!KonfiguracjaCenyPromocyjnej!#
 * @property {(startDate: String) => PutProductsMarketingPromotionRequest} startDate #!DataRozpoczeciaWFormacieYMDHIS!#
 * @property {(endDate: String) => PutProductsMarketingPromotionRequest} endDate #!DataZakonczeniaWFormacieYMDHIS!#
 * @property {(changeProductsToVisibleWhileStarting: 'y'|'n') => PutProductsMarketingPromotionRequest} changeProductsToVisibleWhileStarting Change the status of hidden products to visible while starting the special offer
 * @property {(removeProductsAfterStockLevelRunsDown: 'y'|'n') => PutProductsMarketingPromotionRequest} removeProductsAfterStockLevelRunsDown After running out of stock, automatically remove from the promotion products added separately (does not apply to series, producers, categories and menu) 
 * @property {(reduceBasingPrice: 'net'|'gross') => PutProductsMarketingPromotionRequest} reduceBasingPrice #!ObnizNaPodstawieCenyNettoBrutto!#
 * @property {(calculationMethod: 'sum'|'chooseAdvantageous') => PutProductsMarketingPromotionRequest} calculationMethod Price reduction calculation method
 * @property {(removeAllPromotionElements: 'y'|'n') => PutProductsMarketingPromotionRequest} removeAllPromotionElements #!OkreslaCzyUsunacWszystkieDotychczasoweElementyPromocji!#
 * @property {(promotionElements: Array<Object>) => PutProductsMarketingPromotionRequest} promotionElements #!ElementyNaJakieMaDzialacPromocja!#
 * @property {(elementType: 'product'|'series'|'producer'|'category'|'menu') => PutProductsMarketingPromotionRequest} elementType 
 * @property {(elementId: String) => PutProductsMarketingPromotionRequest} elementId #!IdentyfikatorElementuNaJakiOddzialujePromocja!#
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetProductsMarketingZonesRequest
 * @property {(products: Array<Object>) => GetProductsMarketingZonesRequest} products Products list.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutProductsMarketingZonesRequest
 * @property {(products: Array<Object>) => PutProductsMarketingZonesRequest} products Products list.
 * @property {(assignment_mode: 'auto'|'manual') => PutProductsMarketingZonesRequest} assignment_mode 
 * @property {(marketing_zones: Object) => PutProductsMarketingZonesRequest} marketing_zones 
 * @property {(shops: Array<Object>) => PutProductsMarketingZonesRequest} shops Marketing hotspots in shops
 * @property {(ident: Object) => PutProductsMarketingZonesRequest} ident Identifier type.
 * @property {(assignment_mode: 'auto'|'manual') => PutProductsMarketingZonesRequest} assignment_mode 
 * @property {(marketing_zones: Object) => PutProductsMarketingZonesRequest} marketing_zones 
 * @property {(shops: Array<Object>) => PutProductsMarketingZonesRequest} shops Marketing hotspots in shops
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetProductsOmnibusPricesRequest
 * @property {(products: Array<Object>) => GetProductsOmnibusPricesRequest} products Products list.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutProductsOmnibusPricesRequest
 * @property {(products: Array<Object>) => PutProductsOmnibusPricesRequest} products Products list.
 * @property {(ident: Object) => PutProductsOmnibusPricesRequest} ident Identifier type.
 * @property {(sizes: Array<Object>) => PutProductsOmnibusPricesRequest} sizes List of sizes
 * @property {(omnibusPrices: Object) => PutProductsOmnibusPricesRequest} omnibusPrices Strikethrough price settings.
 * @property {(shops: Array<Object>) => PutProductsOmnibusPricesRequest} shops Strikethrough price settings for the page.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} DeleteProductsOpinionsRequest
 * @property {(id: Integer) => DeleteProductsOpinionsRequest} id 
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetProductsOpinionsRequest
 * @property {(opinion: Object) => GetProductsOpinionsRequest} opinion Review identification
 * @property {(products: Object) => GetProductsOpinionsRequest} products Products list.
 * @property {(clients: Object) => GetProductsOpinionsRequest} clients Customer data.
 * @property {(dateRange: Object) => GetProductsOpinionsRequest} dateRange Date range
 * @property {(resultsPage: Integer) => GetProductsOpinionsRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetProductsOpinionsRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(ordersBy: Array<Object>) => GetProductsOpinionsRequest} ordersBy Possibility of sorting returned list
 * @property {(dateFrom: DateLike, dateTo: DateLike) => GetProductsOpinionsRequest} dates Type of date according to the index results
 * @property {(elementName: "date"|"rating"|"scorePositive"|"scoreNegative"|"modificationDatetime", descending: Boolean) => GetProductsOpinionsRequest} orderBy Define sorting by element and direction
 * @property {(page: Integer, limit: Integer) => GetProductsOpinionsRequest} page Define page number and maximum results per page
 * @property {() => Integer} count Returns total numer of results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostProductsOpinionsRequest
 * @property {(opinions: Array<Object>) => PostProductsOpinionsRequest} opinions List of reviews
 * @property {(createDate: String) => PostProductsOpinionsRequest} createDate 
 * @property {(confirmed: Boolean) => PostProductsOpinionsRequest} confirmed 
 * @property {(rating: String) => PostProductsOpinionsRequest} rating 
 * @property {(content: String) => PostProductsOpinionsRequest} content 
 * @property {(language: String) => PostProductsOpinionsRequest} language Customer language ID.
 * @property {(picture: String) => PostProductsOpinionsRequest} picture 
 * @property {(shopId: Integer) => PostProductsOpinionsRequest} shopId Shop Id
 * @property {(host: String) => PostProductsOpinionsRequest} host 
 * @property {(clients: Object) => PostProductsOpinionsRequest} clients Customer data.
 * @property {(scorePositive: Integer) => PostProductsOpinionsRequest} scorePositive 
 * @property {(scoreNegative: Integer) => PostProductsOpinionsRequest} scoreNegative 
 * @property {(products: Object) => PostProductsOpinionsRequest} products Products list.
 * @property {(orderSerialNumber: Integer) => PostProductsOpinionsRequest} orderSerialNumber Order serial number.
 * @property {(shopAnswer: String) => PostProductsOpinionsRequest} shopAnswer Reply to an opinion
 * @property {(opinionConfirmedByPurchase: Boolean) => PostProductsOpinionsRequest} opinionConfirmedByPurchase Opinion confirmed with purchase
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutProductsOpinionsRequest
 * @property {(id: Integer) => PutProductsOpinionsRequest} id 
 * @property {(confirmed: 'y'|'n') => PutProductsOpinionsRequest} confirmed 
 * @property {(rating: '1'|'2'|'3'|'4'|'5') => PutProductsOpinionsRequest} rating 
 * @property {(content: String) => PutProductsOpinionsRequest} content 
 * @property {(language: String) => PutProductsOpinionsRequest} language Customer language ID.
 * @property {(shopAnswer: String) => PutProductsOpinionsRequest} shopAnswer Reply to an opinion
 * @property {(picture: String) => PutProductsOpinionsRequest} picture 
 * @property {(opinionConfirmedByPurchase: Boolean) => PutProductsOpinionsRequest} opinionConfirmedByPurchase Opinion confirmed with purchase
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetProductsOpinionsRateRequest
 * @property {(id: Integer) => GetProductsOpinionsRateRequest} id 
 * @property {(operation: 'positive'|'negative') => GetProductsOpinionsRateRequest} operation 
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} DeleteProductsParametersRequest
 * @property {(ids: Array<Integer>) => DeleteProductsParametersRequest} ids Parameter identifiers
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetProductsParametersRequest
 * @property {(ids: Array<Integer>) => GetProductsParametersRequest} ids List of identifiers
 * @property {(textIds: Array<Object>) => GetProductsParametersRequest} textIds Element text ID - can be entered instead of "id".
 * @property {(languagesIds: Array<String>) => GetProductsParametersRequest} languagesIds List of languages
 * @property {(resultsPage: Integer) => GetProductsParametersRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetProductsParametersRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(page: Integer, limit: Integer) => GetProductsParametersRequest} page Define page number and maximum results per page
 * @property {() => Integer} count Returns total numer of results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutProductsParametersRequest
 * @property {(items: Array<Object>) => PutProductsParametersRequest} items Sections, parameters or valued to add or edit.
 * @property {(settings: Object) => PutProductsParametersRequest} settings Settings
 * @property {(id: Integer) => PutProductsParametersRequest} id Parameter ID.
 * @property {(item_text_ids: Array<Object>) => PutProductsParametersRequest} item_text_ids Element text ID - can be entered instead of "id". Recognized save format: "section" (without backslash), "parameter\" (parameter without assigned value).
 * @property {(names: Array<Object>) => PutProductsParametersRequest} names Names of section, parameter or value.
 * @property {(descriptions: Array<Object>) => PutProductsParametersRequest} descriptions Descriptions of section, parameter or value.
 * @property {(card_icons: Array<Object>) => PutProductsParametersRequest} card_icons Icons of section, parameter or value to display on the product card.
 * @property {(link_icons: Array<Object>) => PutProductsParametersRequest} link_icons Icons of section, parameter or value to display on the list of products.
 * @property {(context_id: String) => PutProductsParametersRequest} context_id Parameter's additional feature. 1. Status: context_id = "CONTEXT_STATE" Takes values context_value_id: - CONTEXT_STATE_NEW - New, - CONTEXT_STATE_USED - Used, - CONTEXT_STATE_REFURBISHED_BY_PRODUCER - Renewed by a manufacturer, - CONTEXT_STATE_REFURBISHED_BY_SELLER - Renewed by a seller, - CONTEXT_STATE_FOR_PARTS_OR_BROKEN - In parts or damaged. 2. Product weight in grams: context_id = "CONTEXT_STD_UNIT_WEIGHT" Takes values context_value_id: - Value of additional feature is set automatically basing on the parameter's value. 3. A product's value in milliliters: context_id = "CONTEXT_STD_UNIT_VOLUME" Takes values context_value_id: - Value of additional feature is set automatically basing on the parameter's value. 4. Sex: context_id = "CONTEXT_SEX" Takes values context_value_id: - CONTEXT_SEX_MAN - Man, - CONTEXT_SEX_WOMAN - Woman, - CONTEXT_SEX_UNISEX - Unisex. 5. Age group: context_id = "CONTEXT_AGE_GROUP" Takes values context_value_id: - CONTEXT_AGE_GROUP_ADULT - Adults, - CONTEXT_AGE_GROUP_MINOR - Children. 6. Maximum number of products in an order: context_id = "CONTEXT_MAX_QUANTITY_PER_RETAIL_ORDER" Takes values context_value_id: - Value of additional feature is set automatically basing on the parameter's value. 7. Maximum number of products in a wholesale order: context_id = "CONTEXT_MAX_QUANTITY_PER_WHOLESALE_ORDER" Takes values context_value_id: - Value of additional feature is set automatically basing on the parameter's value. 8. Minimal number of products in an order: context_id = "CONTEXT_MIN_QUANTITY_PER_RETAIL_ORDER" Takes values context_value_id: - Value of additional feature is set automatically basing on the parameter's value. 9. Minimum number of products in a wholesale order: context_id = "CONTEXT_MIN_QUANTITY_PER_WHOLESALE_ORDER" Takes values context_value_id: - Value of additional feature is set automatically basing on the parameter's value. 10. Maximal number of a single size in an order: context_id = "CONTEXT_MAX_SIZE_QUANTITY_PER_RETAIL_ORDER" Takes values context_value_id: - Value of additional feature is set automatically basing on the parameter's value. 11. Maximal number of a single size in a wholesale order: context_id = "CONTEXT_MAX_SIZE_QUANTITY_PER_WHOLESALE_ORDER" Takes values context_value_id: - Value of additional feature is set automatically basing on the parameter's value. 12. Minimal number of a single size in an order: context_id = "CONTEXT_MIN_SIZE_QUANTITY_PER_RETAIL_ORDER" Takes values context_value_id: - Value of additional feature is set automatically basing on the parameter's value. 13. Minimal number of a single size in a wholesale order: context_id = "CONTEXT_MIN_SIZE_QUANTITY_PER_WHOLESALE_ORDER" Takes values context_value_id: - Value of additional feature is set automatically basing on the parameter's value. 14. Net weight: context_id = "CONTEXT_WEIGHT_NET" Takes values context_value_id: - Value of additional feature is set automatically basing on the parameter's value. 15. Color: context_id = "CONTEXT_COLOR" Takes values context_value_id: - Value of additional feature is set automatically basing on the parameter's value. 16. #!TylkoDlaDoroslych!#: context_id = "CONTEXT_ONLY_ADULTS" Takes values context_value_id: - CONTEXT_ONLY_ADULTS_YES - yes, - CONTEXT_ONLY_ADULTS_NO - no. 17. Prescription drug: context_id = "CONTEXT_PRESCRIPTION_MEDICINE" Takes values context_value_id: - CONTEXT_PRESCRIPTION_MEDICINE_YES - yes, - CONTEXT_PRESCRIPTION_MEDICINE_NO - no. 18. Season Rate: context_id = "CONTEXT_SEASON" Takes values context_value_id: - CONTEXT_SEASON_SPRING - Spring, - CONTEXT_SEASON_SUMMER - Summer, - CONTEXT_SEASON_FALL - Autumn, - CONTEXT_SEASON_WINTER - Winter, - CONTEXT_SEASON_SPRING_SUMMER - Spring/Summer, - CONTEXT_SEASON_FALL_WINTER - Autumn/Winter.
 * @property {(context_value_id: String) => PutProductsParametersRequest} context_value_id value of additional feature - Values described in context_id.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} DeleteProductsRequest
 * @property {(products: Array<Object>) => DeleteProductsRequest} products Products list.
 * @property {(productId: Integer) => DeleteProductsRequest} productId Product IAI code
 * @property {(productSizeCodeExternal: String) => DeleteProductsRequest} productSizeCodeExternal External product system code for size.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} ListProductsRequest
 * @property {(dispatchSettings: Object) => ListProductsRequest} dispatchSettings 
 * @property {(returnProducts: String) => ListProductsRequest} returnProducts Element determines which products should be returned by the gate. Undeleted products are returned by default. Available values: "active" - undeleted products, "deleted" - deleted products. "in_trash" - products in the trash.
 * @property {(returnElements: Array<String>) => ListProductsRequest} returnElements Elements to be returned by the endpoint. By default all elements are returned Available values: * lang_data * adding_time, * deleted, * code, * note, * taxcode, * inwrapper, * sellby_retail, * sellby_wholesale, * producer_id, * producer_name, * iaiCategoryId, * iaiCategoryName, * iaiCategoryPath, * category_id, * category_name, * size_group_id, * modification_time, * currency, * currency_shop, * bestseller, * new_product, * retail_price, * wholesale_price, * minimal_price, * automatic_calculation_price, * pos_price, * strikethrough_retail_price, * strikethrough_wholesale_price, * last_purchase_price, * purchase_price_net_average, * purchase_price_net_last, * purchase_price_gross_average, * purchase_price_gross_last, * vat, * vat_free, * rebate, * hotspots_zones, * profit_points, * points, * weight, * export_to_pricecomparers, * export_to_amazon_marketplace, * enable_in_pos, * complex_notes, * available_profile, * traits, * parameters, * version_data, * advance, * promotion, * discount, * distinguished, * special, * visible, * persistent, * priority, * shops_mask, * icon, * icon_for_auctions, * icon_for_group, * pictures, * unit, * warranty, * series, * products_associated, * shops, * quantities, * sizes_attributes, * shops_attributes, * auction_prices, * price_comparers_prices, * deliverer, * sizes, * size_group_name, * pictures_count, * product_type, * price_changed_time, * quantity_changed_time, * deliverer_name, * available_profile_name, * availability_management_type, * sum_in_basket, * menu, * auction_settings, * bundle, * sizeschart_id, * sizeschart_name, * serialnumbers, * producer_codes_standard, * javaScriptInTheItemCard, * productAuctionDescriptionsData, * priceFormula, * productIndividualDescriptionsData, * productIndividualUrlsData, * productServicesDescriptionsData, * cnTaricCode, * productIsGratis, * dimensions
 * @property {(productIsAvailable: String) => ListProductsRequest} productIsAvailable Product availability. Available values: "y" - available, "n" - unavailable.
 * @property {(productIsVisible: String) => ListProductsRequest} productIsVisible Product visibility in store Available values: "y" - Visible, "n" - Invisible.
 * @property {(productVersionId: Integer) => ListProductsRequest} productVersionId Product group ID
 * @property {(productInPromotion: String) => ListProductsRequest} productInPromotion Promoted product. Available values: "y" - promoted, "n" - not promoted.
 * @property {(productInDiscount: String) => ListProductsRequest} productInDiscount Product on sale. Available values: "y" - on sale, "n" - not on sale.
 * @property {(productInDistinguished: String) => ListProductsRequest} productInDistinguished Distinguished product. Available values: "y" - distinguished, "n" - not distinguished.
 * @property {(productInSpecial: String) => ListProductsRequest} productInSpecial Special product. Available values: "y" - #!specjalny!#, "n" - not special.
 * @property {(productInForPointsSelling: String) => ListProductsRequest} productInForPointsSelling Product available for points. Available values: "y" - Available for points, "n" - Unavailable for points.
 * @property {(productIsObservedByClients: String) => ListProductsRequest} productIsObservedByClients Observed product. Available values: "Y" - observed, "n" - not observed.
 * @property {(skipDefaultProduct: String) => ListProductsRequest} skipDefaultProduct Element determines if default product (with 0 ID, contains settings of newly added products) should be omitted Available values: "y" - omits default product, "n" - allows to download default product.
 * @property {(showPromotionsPrices: String) => ListProductsRequest} showPromotionsPrices The item specifies whether promotional prices are to be shown in price nodes. Available values: "y" - show promotional prices, "n" - do not show promotional prices. (default value)
 * @property {(categories: Array<Object>) => ListProductsRequest} categories List of categories in which sought products are present.
 * @property {(producers: Array<Object>) => ListProductsRequest} producers List of manufacturers assigned to sought products.
 * @property {(productParams: Array<Object>) => ListProductsRequest} productParams List of sought products. This parameter can be used, when there have been no other parameter entered productIndexes.
 * @property {(productIndexes: Array<Object>) => ListProductsRequest} productIndexes List of sought products by indexes.
 * @property {(productShops: Array<Object>) => ListProductsRequest} productShops Data of stores product is assigned to.
 * @property {(productPromotionsIds: Array<Integer>) => ListProductsRequest} productPromotionsIds List of special offers, sought products are assigned to.
 * @property {(productDate: Object) => ListProductsRequest} productDate Settings concerning narrowing list of products found by date.
 * @property {(productParametersParams: Array<Object>) => ListProductsRequest} productParametersParams Parameters
 * @property {(productSeriesParams: Array<Object>) => ListProductsRequest} productSeriesParams Series, sought products are assigned to.
 * @property {(productUnits: Array<Object>) => ListProductsRequest} productUnits List of units of measure assigned to sought products.
 * @property {(productWarranties: Array<Object>) => ListProductsRequest} productWarranties Narrowing list of products by set warranties.
 * @property {(deliverersIds: Array<Integer>) => ListProductsRequest} deliverersIds Suppliers, sought products are assigned to.
 * @property {(containsText: String) => ListProductsRequest} containsText Product contains text (searches in short and long description). 
 * @property {(containsCodePart: String) => ListProductsRequest} containsCodePart Product code or it's part (based on producer's code, external product system code and code that is visible on a product card). Search is accesible only with available products.
 * @property {(productAvailableInStocks: Object) => ListProductsRequest} productAvailableInStocks Product availability in stocks
 * @property {(productAvailableInAuctions: Object) => ListProductsRequest} productAvailableInAuctions Product availability on auctions
 * @property {(resultsPage: Integer) => ListProductsRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => ListProductsRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(ordersBy: Array<Object>) => ListProductsRequest} ordersBy Possibility of sorting returned list
 * @property {(productSearchingLangId: String) => ListProductsRequest} productSearchingLangId Language ID that allows to search and return data in chosen language. This parameter is optional. If it's lacking, she search process unfolds in all available languages.
 * @property {(productSearchingCurrencyId: String) => ListProductsRequest} productSearchingCurrencyId Currency ID allowing to search and browse products in given currency. This parameter is optional, when it's lacking, the search process unfolds in all available currencies. 
 * @property {(returnPricesCurrency: String) => ListProductsRequest} returnPricesCurrency Currency ID allowing for returning all product prices in an indicated currency
 * @property {(productHasNote: String) => ListProductsRequest} productHasNote Annotation contains text.
 * @property {(productInExportToPriceComparisonSites: String) => ListProductsRequest} productInExportToPriceComparisonSites Product visibility in export to price comparison and marketplaces. Available values: "y" - Visible, "selected" - Selected, "assign_selected" - Enable the visibility of the product in the export to price comparison sites passed in the priceComparisonSites node. Price comparison sites previously assigned to the commodity will be retained, "unassign_selected" - Disable product visibility in exports to price comparison sites passed in the priceComparisonSites node, "n" - invisible.
 * @property {(productInExportToAmazonMarketplace: String) => ListProductsRequest} productInExportToAmazonMarketplace Visibility of an item in an export to Amazon Marketplace. Available values: "y" - Visible, "selected" - Visible on selected regional services, "n" - invisible.
 * @property {(selectedAmazonMarketplacesList: Array<String>) => ListProductsRequest} selectedAmazonMarketplacesList List of Amazon regional sites to which the product is exported (only in case of "selected" option)
 * @property {(productInBestseller: String) => ListProductsRequest} productInBestseller Product is bestseller. Available values: "n" - no, "y" - yes.
 * @property {(productInNew: String) => ListProductsRequest} productInNew Product is new. Available values: "y" - is new, "n" - is not new.
 * @property {(searchByShops: Object) => ListProductsRequest} searchByShops Shops
 * @property {(productSearchPriceRange: Object) => ListProductsRequest} productSearchPriceRange Price range for sought products.
 * @property {(productVatRates: Array<Number>) => ListProductsRequest} productVatRates VAT value for sought products
 * @property {(productIsVatFree: String) => ListProductsRequest} productIsVatFree Is product VAT-free Allowed values "y" - yes, "n" - no.
 * @property {(productHasWholesalePrice: String) => ListProductsRequest} productHasWholesalePrice Product has defined wholesale price. Available values: "y" - has wholesale price, "n" - does not have wholesale price.
 * @property {(productInPersistent: String) => ListProductsRequest} productInPersistent Product visible even though out of stock Available values: "y" - visible even though out of stock, "n" - not visible when out of stock.
 * @property {(returnProductsVersions: String) => ListProductsRequest} returnProductsVersions Settings of products returned with variants All products with variants are returned by default Available values: version_all - returns all variants, version_main - returns only main variant.
 * @property {(productInSumInBasket: String) => ListProductsRequest} productInSumInBasket Do You wish to sum up the products in the basket as a one order? Available values: "y" - yes, "n" - no.
 * @property {(productType: Object) => ListProductsRequest} productType Product type. Allowed values: "product_item" - Goods, "product_packaging" - packaging, "product_bundle" - set. "product_collection" - collection. "product_service" - service. "product_virtual" - virtual product. "product_configurable" - configurable product.
 * @property {(productMenuItems: Object) => ListProductsRequest} productMenuItems An array of menu elements
 * @property {(productLocationId: Integer) => ListProductsRequest} productLocationId Warehouse location ID
 * @property {(productLocationTextId: String) => ListProductsRequest} productLocationTextId Warehouse location full path Use a backslash (\) as a separator, for example: M1\Section name\Location name If location_id parameter is provided, the full warehouse location path will not be taken into account
 * @property {(alwaysReturnProductShopSizesAttributes: Boolean) => ListProductsRequest} alwaysReturnProductShopSizesAttributes Return all size attributes regardless of whether product prices are the same as the base price or if they differ from it. Available values: 1 - all size attributes will be returned; 0 - only attributes of those sizes, where the prices will be different from the base price (default value) will be returned.
 * @property {(returnEmptyStocksWithReservation: Boolean) => ListProductsRequest} returnEmptyStocksWithReservation Returns reservation information regardless of inventory levels
 * @property {(picturesData: Object) => ListProductsRequest} picturesData Data for operations on individual photos
 * @property {(byMenus: Array<Integer>) => ListProductsRequest} byMenus Define menuItemsIds value nested inside productMenuItems
 * @property {(byShops: Array<Integer>) => ListProductsRequest} byShops Define shopsIds value nested inside searchByShops
 * @property {(dateFrom: DateLike, dateTo: DateLike, dateType: "added"|"finished"|"resumed"|"modified"|"quantity_changed"|"price_changed"|"modified_and_quantity_changed") => ListProductsRequest} dates Type of date according to the index results. Possible type values: added, finished, resumed, modified, quantity_changed, price_changed, modified_and_quantity_changed
 * @property {(elementName: "id"|"name"|"code"|"product_sizecode"|"code_producer"|"retail_price"|"pos_price"|"vat"|"wholesale_price"|"minimal_price"|"pictures_count"|"auction_name"|"pricecomparer_name"|"version_name"|"series_name"|"category_name"|"deliverer_name"|"adding_time"|"modification_time"|"price_changed_time"|"quantity_changed_time"|"currency"|"currency_shop"|"taxcode"|"meta_title"|"meta_description"|"meta_keywords"|"suggested_price"|"observed_clients"|"observed_time"|"wishes_clients"|"wishes_time", descending: Boolean) => ListProductsRequest} orderBy Define sorting by element and direction
 * @property {(shops: Array<Integer>) => ListProductsRequest} shops Define productShops by passing array of values
 * @property {(ids: Array<Integer>) => ListProductsRequest} ids Define productParams by passing array of values
 * @property {(byProducers: Array<Integer>) => ListProductsRequest} byProducers Define producers by passing array of values
 * @property {(byCategories: Array<Integer>) => ListProductsRequest} byCategories Define categories by passing array of values
 * @property {(byUnits: Array<Integer>) => ListProductsRequest} byUnits Define productUnits by passing array of values
 * @property {(bySeries: Array<Integer>) => ListProductsRequest} bySeries Define productSeriesParams by passing array of values
 * @property {(byWarranties: Array<Integer>) => ListProductsRequest} byWarranties Define productWarranties by passing array of values
 * @property {(byIndexes: Array<Integer>) => ListProductsRequest} byIndexes Define productIndexes by passing array of values
 * @property {(onlyMain: Boolean) => ListProductsRequest} onlyMainVersion Toogle to return only main versions
 * @property {(minPrice: Number, maxPrice: Number, priceType: "retail_price"|"wholesale_price"|"minimal_price"|"pos_price"|"last_purchase_price") => ListProductsRequest} byPrice Filter by minimum and maximym price
 * @property {(stockIds: Boolean|Array<Integer>) => ListProductsRequest} inStock Filter by availibility on any stock or selected stocks
 * @property {(page: Integer, limit: Integer) => ListProductsRequest} page Define page number and maximum results per page
 * @property {() => Integer} count Returns total numer of results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetProductsRequest
 * @property {(productIds: Array<String>) => GetProductsRequest} productIds List of the unique, indexed product codes (IAI code / External system code / Producer code). You can transfer a maximum of 100 products IDs in one request.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostProductsRequest
 * @property {(settings: Object) => PostProductsRequest} settings Settings
 * @property {(picturesSettings: Object) => PostProductsRequest} picturesSettings Icon and photos settings
 * @property {(products: Array<Object>) => PostProductsRequest} products Products list.
 * @property {(productId: Integer) => PostProductsRequest} productId Product IAI code
 * @property {(productSizeCodeExternal: String) => PostProductsRequest} productSizeCodeExternal External product system code for size.
 * @property {(productDisplayedCode: String) => PostProductsRequest} productDisplayedCode External product system code.
 * @property {(productTaxCode: String) => PostProductsRequest} productTaxCode PKWiU [PCPandS].
 * @property {(productInWrapper: Integer) => PostProductsRequest} productInWrapper Number of items in package data
 * @property {(productSellByRetail: Number) => PostProductsRequest} productSellByRetail Sold at - for retailers.
 * @property {(productSellByWholesale: Number) => PostProductsRequest} productSellByWholesale Sold at - for wholesalers.
 * @property {(categoryIdoSellId: Integer) => PostProductsRequest} categoryIdoSellId IdoSell Category ID
 * @property {(categoryIdoSellPath: String) => PostProductsRequest} categoryIdoSellPath IdoSell Category pathname
 * @property {(categoryId: Integer) => PostProductsRequest} categoryId Category id
 * @property {(categoryName: String) => PostProductsRequest} categoryName Category name
 * @property {(producerId: Integer) => PostProductsRequest} producerId Brand ID
 * @property {(producerName: String) => PostProductsRequest} producerName Brand name
 * @property {(cnTaricCode: String) => PostProductsRequest} cnTaricCode CN/TARIC
 * @property {(countryOfOrigin: String) => PostProductsRequest} countryOfOrigin Country of origin. Country code in the ISO 3166-1 A2 standard
 * @property {(unitId: Integer) => PostProductsRequest} unitId Product unit of measure ID.
 * @property {(seriesId: Integer) => PostProductsRequest} seriesId ID of series, to which product belongs.
 * @property {(seriesPanelName: String) => PostProductsRequest} seriesPanelName Name of series, to which the product belongs, visible in panel.
 * @property {(sizesGroupId: Integer) => PostProductsRequest} sizesGroupId Size group ID Change of one size group to another results in zeroing all stock quantities in all stocks. Change of size group can be made, if product is not present in any unhandled orders nor listed on auctions.
 * @property {(priceChangeMode: String) => PostProductsRequest} priceChangeMode Optional element, that determines prices edition mode. Default value is "amount_set", when indicated element is omitted in API gate call.. Allowed values "amount_set" - sets product prices to desired value (default mode), "amount_diff" - sets sum difference between prices set (adds or subtracts entered sum from the current price), "percent_diff" - sets percentage difference between prices set (adds or subtracts entered percent from the current price).
 * @property {(priceFormula: Object) => PostProductsRequest} priceFormula The JavaScript formula calculating prices
 * @property {(productRetailPrice: Number) => PostProductsRequest} productRetailPrice Gross price
 * @property {(productWholesalePrice: Number) => PostProductsRequest} productWholesalePrice Wholesale price
 * @property {(productMinimalPrice: Number) => PostProductsRequest} productMinimalPrice Minimal price
 * @property {(productAutomaticCalculationPrice: Number) => PostProductsRequest} productAutomaticCalculationPrice Price for automatic calculations
 * @property {(productPosPrice: Number) => PostProductsRequest} productPosPrice price for POS.
 * @property {(productVat: Number) => PostProductsRequest} productVat Value of VAT
 * @property {(productVatFree: String) => PostProductsRequest} productVatFree Is product VAT free Allowed values "y" - yes, "n" - no.
 * @property {(productPriceComparisonSitesPrices: Array<Object>) => PostProductsRequest} productPriceComparisonSitesPrices Different prices for price comparison websites.
 * @property {(productEnableInPos: String) => PostProductsRequest} productEnableInPos Object determines if the product is available in POS sale Available values: "n" - no, "y" - yes.
 * @property {(productAdvancePrice: Number) => PostProductsRequest} productAdvancePrice Required advance payment in percents
 * @property {(productNote: String) => PostProductsRequest} productNote Annotation.
 * @property {(productProfitPoints: Number) => PostProductsRequest} productProfitPoints Product value in points.
 * @property {(productWeight: Integer) => PostProductsRequest} productWeight Weight.
 * @property {(productInVisible: String) => PostProductsRequest} productInVisible Product visibility. Allowed values "y" - product visible, "n" - product not visible.
 * @property {(productInPersistent: String) => PostProductsRequest} productInPersistent Product visible even though out of stock Available values: "y" - visible even though out of stock, "n" - not visible when out of stock.
 * @property {(shopsMask: Integer) => PostProductsRequest} shopsMask Bit mask of shop IDs. Mask for indicated store is calculated on basis of following formula: 2^(store_ID - 1). If the product should be available in more than one shop, the masks should be summed up.
 * @property {(productComplexNotes: Integer) => PostProductsRequest} productComplexNotes Complex rating Available values: "0" - no, "1" - yes.
 * @property {(productInExportToPriceComparisonSites: String) => PostProductsRequest} productInExportToPriceComparisonSites Product visibility in export to price comparison and marketplaces. Available values: "y" - Visible, "selected" - yes (selected), "n" - invisible.
 * @property {(priceComparisonSites: Array<Object>) => PostProductsRequest} priceComparisonSites Selection of comparison sites for which the product visibility will be changed
 * @property {(productInExportToAmazonMarketplace: String) => PostProductsRequest} productInExportToAmazonMarketplace Visibility of an item in an export to Amazon Marketplace. Available values: "y" - Visible, "selected" - Visible on selected regional services, "n" - invisible.
 * @property {(availableProfile: Integer) => PostProductsRequest} availableProfile Availability profile ID.
 * @property {(productRebate: Integer) => PostProductsRequest} productRebate Discount profile ID
 * @property {(warrantyId: Integer) => PostProductsRequest} warrantyId Product warranty ID.
 * @property {(productPriority: Integer) => PostProductsRequest} productPriority Priority. Allowed values from 1 to 10.
 * @property {(productIcon: String) => PostProductsRequest} productIcon Product icon details.
 * @property {(productWatermarkId: Integer) => PostProductsRequest} productWatermarkId Watermark ID
 * @property {(productWatermarkUrl: String) => PostProductsRequest} productWatermarkUrl Link to watermark
 * @property {(productPictures: Array<String>) => PostProductsRequest} productPictures List of product photos
 * @property {(productDescriptionPictures: Array<String>) => PostProductsRequest} productDescriptionPictures List of photos descriptions
 * @property {(productPromotion: Object) => PostProductsRequest} productPromotion Reduced price
 * @property {(productDiscount: Object) => PostProductsRequest} productDiscount Discount for shop.
 * @property {(productDistinguished: Object) => PostProductsRequest} productDistinguished Distinguished product in store.
 * @property {(productSpecial: Object) => PostProductsRequest} productSpecial Special product in store.
 * @property {(productParametersDistinction: Array<Object>) => PostProductsRequest} productParametersDistinction Parameters (distinguished).
 * @property {(associatedProducts: Array<Object>) => PostProductsRequest} associatedProducts List of products recommended with this product
 * @property {(productSizes: Array<Object>) => PostProductsRequest} productSizes Sizes available for products data.
 * @property {(productShopsAttributes: Array<Object>) => PostProductsRequest} productShopsAttributes Data concerning attributes dependent on indicated stores with particular product assigned.
 * @property {(productNames: Object) => PostProductsRequest} productNames Product name.
 * @property {(productDescriptions: Object) => PostProductsRequest} productDescriptions 
 * @property {(productLongDescriptions: Object) => PostProductsRequest} productLongDescriptions Long product description
 * @property {(productAuctionDescriptionsData: Array<Object>) => PostProductsRequest} productAuctionDescriptionsData Product data for auction services
 * @property {(productMetaTitles: Object) => PostProductsRequest} productMetaTitles Product meta title
 * @property {(productMetaDescriptions: Object) => PostProductsRequest} productMetaDescriptions Product meta description
 * @property {(productMetaKeywords: Object) => PostProductsRequest} productMetaKeywords Product meta keywords.
 * @property {(productUrl: Object) => PostProductsRequest} productUrl #!AdresURLDlaTowaru!#.
 * @property {(productVersion: Object) => PostProductsRequest} productVersion Data on product groups (variants)
 * @property {(currencyId: String) => PostProductsRequest} currencyId Currency ID
 * @property {(delivererId: Integer) => PostProductsRequest} delivererId Supplier ID.
 * @property {(productParametersDistinctionChangeMode: 'add'|'delete'|'delete_group'|'replace') => PostProductsRequest} productParametersDistinctionChangeMode This parameter is optional and it determines properties edition mode. Default value is "replace". Allowed values: "add" - adds properties to already existent ones, "delete" - removes properties of already existent ones, "delete_group" - removes properties from selected group, "replace" - overwrites properties already existent with new ones (default mode).
 * @property {(productDeliveryTime: Object) => PostProductsRequest} productDeliveryTime Product delivery time from the producer to the shop
 * @property {(productSumInBasket: String) => PostProductsRequest} productSumInBasket Do You wish to sum up the products in the basket as a one order? Available values: "y" - yes, "n" - no.
 * @property {(dispatchSettings: Object) => PostProductsRequest} dispatchSettings Shipping, returns and complaints settings
 * @property {(standardUnit: Object) => PostProductsRequest} standardUnit Standard unit settings
 * @property {(minQuantityPerOrder: Object) => PostProductsRequest} minQuantityPerOrder Minimal number of products in an order
 * @property {(productDimensions: Object) => PostProductsRequest} productDimensions Dimensions and overall weight
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutProductsRequest
 * @property {(settings: Object) => PutProductsRequest} settings Settings
 * @property {(picturesSettings: Object) => PutProductsRequest} picturesSettings Icon and photos settings
 * @property {(products: Array<Object>) => PutProductsRequest} products Products list.
 * @property {(productId: Integer) => PutProductsRequest} productId Product IAI code
 * @property {(productIndex: String) => PutProductsRequest} productIndex One of the unique, indexed product codes (IAI code / External system code / Producer code)
 * @property {(productSizeCodeExternal: String) => PutProductsRequest} productSizeCodeExternal External product system code for size.
 * @property {(productSizeCodeProducer: String) => PutProductsRequest} productSizeCodeProducer Producer code for size.
 * @property {(productDisplayedCode: String) => PutProductsRequest} productDisplayedCode External product system code.
 * @property {(productTaxCode: String) => PutProductsRequest} productTaxCode PKWiU [PCPandS].
 * @property {(productInWrapper: Integer) => PutProductsRequest} productInWrapper Number of items in package data
 * @property {(productSellByRetail: Number) => PutProductsRequest} productSellByRetail Sold at - for retailers.
 * @property {(productSellByWholesale: Number) => PutProductsRequest} productSellByWholesale Sold at - for wholesalers.
 * @property {(categoryIdoSellId: Integer) => PutProductsRequest} categoryIdoSellId IdoSell Category ID
 * @property {(categoryIdoSellPath: String) => PutProductsRequest} categoryIdoSellPath IdoSell Category pathname
 * @property {(categoryId: Integer) => PutProductsRequest} categoryId Category id
 * @property {(categoryName: String) => PutProductsRequest} categoryName Category name
 * @property {(producerId: Integer) => PutProductsRequest} producerId Brand ID
 * @property {(producerName: String) => PutProductsRequest} producerName Brand name
 * @property {(cnTaricCode: String) => PutProductsRequest} cnTaricCode CN/TARIC
 * @property {(countryOfOrigin: String) => PutProductsRequest} countryOfOrigin Country of origin. Country code in the ISO 3166-1 A2 standard
 * @property {(unitId: Integer) => PutProductsRequest} unitId Product unit of measure ID.
 * @property {(seriesId: Integer) => PutProductsRequest} seriesId ID of series, to which product belongs.
 * @property {(seriesPanelName: String) => PutProductsRequest} seriesPanelName Name of series, to which the product belongs, visible in panel.
 * @property {(sizesGroupId: Integer) => PutProductsRequest} sizesGroupId Size group ID Change of one size group to another results in zeroing all stock quantities in all stocks. Change of size group can be made, if product is not present in any unhandled orders nor listed on auctions.
 * @property {(sizesGroupName: String) => PutProductsRequest} sizesGroupName Size group name.
 * @property {(priceChangeMode: String) => PutProductsRequest} priceChangeMode Optional element, that determines prices edition mode. Default value is "amount_set", when indicated element is omitted in API gate call.. Allowed values "amount_set" - sets product prices to desired value (default mode), "amount_diff" - sets sum difference between prices set (adds or subtracts entered sum from the current price), "percent_diff" - sets percentage difference between prices set (adds or subtracts entered percent from the current price).
 * @property {(productRetailPrice: Number) => PutProductsRequest} productRetailPrice Gross price
 * @property {(productRetailPriceNet: Number) => PutProductsRequest} productRetailPriceNet Net retail price for every shop.
 * @property {(productWholesalePrice: Number) => PutProductsRequest} productWholesalePrice Wholesale price
 * @property {(productWholesalePriceNet: Number) => PutProductsRequest} productWholesalePriceNet Net wholesale price for every shop.
 * @property {(productMinimalPrice: Number) => PutProductsRequest} productMinimalPrice Minimal price
 * @property {(productMinimalPriceNet: Number) => PutProductsRequest} productMinimalPriceNet Net minimum price for every shop.
 * @property {(productAutomaticCalculationPrice: Number) => PutProductsRequest} productAutomaticCalculationPrice Price for automatic calculations
 * @property {(productAutomaticCalculationPriceNet: Number) => PutProductsRequest} productAutomaticCalculationPriceNet #!CenaDoObliczenAutomatycznychNettoDlaKazdegoSklepu!#.
 * @property {(productPosPrice: Number) => PutProductsRequest} productPosPrice price for POS.
 * @property {(productPosPriceNet: Number) => PutProductsRequest} productPosPriceNet price for POS.
 * @property {(productSuggestedPrice: Number) => PutProductsRequest} productSuggestedPrice Recommended retail price
 * @property {(productSuggestedPriceNet: Number) => PutProductsRequest} productSuggestedPriceNet Suggested net commodity price.
 * @property {(productStrikethroughRetailPrice: Number) => PutProductsRequest} productStrikethroughRetailPrice Strikethrough gross retail price
 * @property {(productStrikethroughRetailPriceNet: Number) => PutProductsRequest} productStrikethroughRetailPriceNet Strikethrough net retail price
 * @property {(productStrikethroughWholesalePrice: Number) => PutProductsRequest} productStrikethroughWholesalePrice Strikethrough gross wholesale price
 * @property {(productStrikethroughWholesalePriceNet: Number) => PutProductsRequest} productStrikethroughWholesalePriceNet Strikethrough net wholesale price
 * @property {(productVat: Number) => PutProductsRequest} productVat Value of VAT
 * @property {(productVatFree: String) => PutProductsRequest} productVatFree Is product VAT free Allowed values "y" - yes, "n" - no.
 * @property {(productPriceComparisonSitesPrices: Array<Object>) => PutProductsRequest} productPriceComparisonSitesPrices Different prices for price comparison websites.
 * @property {(productEnableInPos: String) => PutProductsRequest} productEnableInPos Object determines if the product is available in POS sale Available values: "n" - no, "y" - yes.
 * @property {(productAdvancePrice: Number) => PutProductsRequest} productAdvancePrice Required advance payment in percents
 * @property {(productNote: String) => PutProductsRequest} productNote Annotation.
 * @property {(productHotspotsZones: Array<Object>) => PutProductsRequest} productHotspotsZones Settings of hotspots display.
 * @property {(priceInPoints: Object) => PutProductsRequest} priceInPoints Loyalty points.
 * @property {(loyaltyPoints: Array<Object>) => PutProductsRequest} loyaltyPoints Loyalty points.
 * @property {(productWeight: Integer) => PutProductsRequest} productWeight Weight.
 * @property {(productInVisible: String) => PutProductsRequest} productInVisible Product visibility. Allowed values "y" - product visible, "n" - product not visible.
 * @property {(shopsMask: Integer) => PutProductsRequest} shopsMask Bit mask of shop IDs. Mask for indicated store is calculated on basis of following formula: 2^(store_ID - 1). If the product should be available in more than one shop, the masks should be summed up.
 * @property {(productComplexNotes: Integer) => PutProductsRequest} productComplexNotes Complex rating Available values: "0" - no, "1" - yes.
 * @property {(productInExportToPriceComparisonSites: 'y'|'selected'|'n') => PutProductsRequest} productInExportToPriceComparisonSites Product visibility in export to price comparison and marketplaces. Available values: "y" - Visible, "selected" - Selected, "assign_selected" - Enable the visibility of the product in the export to price comparison sites passed in the priceComparisonSites node. Price comparison sites previously assigned to the commodity will be retained, "unassign_selected" - Disable product visibility in exports to price comparison sites passed in the priceComparisonSites node, "n" - invisible.
 * @property {(priceComparisonSites: Array<Object>) => PutProductsRequest} priceComparisonSites Selection of comparison sites for which the product visibility will be changed
 * @property {(productInExportToAmazonMarketplace: String) => PutProductsRequest} productInExportToAmazonMarketplace Visibility of an item in an export to Amazon Marketplace. Available values: "y" - Visible, "selected" - Visible on selected regional services, "n" - invisible.
 * @property {(exportToAmazonMarketplacesList: Array<String>) => PutProductsRequest} exportToAmazonMarketplacesList Array
 * @property {(exportToAmazonExportAllSizes: 'n'|'y') => PutProductsRequest} exportToAmazonExportAllSizes Export sizes to Amazon: Available values: "y" - all, "n" - leave without change.
 * @property {(exportAmazonUpdateStocks: 'n'|'y') => PutProductsRequest} exportAmazonUpdateStocks Update merchandise inventory, on the Amazon side
 * @property {(productInExportToStrefaMarekAllegro: String) => PutProductsRequest} productInExportToStrefaMarekAllegro Visibility of product during the import to Strefa Marek Allegro. Allowed values: "yes" - product visible in the export to Strefa Marek Allegro, "no" - product invisible in the export to Strefa Marek Allegro.
 * @property {(productInExportToSmaPreset: Integer) => PutProductsRequest} productInExportToSmaPreset Profile ID which should be used when sending products to Strefa Marek Allegro.
 * @property {(availableProfile: Integer) => PutProductsRequest} availableProfile Availability profile ID.
 * @property {(productRebate: Integer) => PutProductsRequest} productRebate Discount profile ID
 * @property {(warrantyId: Integer) => PutProductsRequest} warrantyId Product warranty ID.
 * @property {(warrantyName: String) => PutProductsRequest} warrantyName Name of warranty for indicated product.
 * @property {(priceFormula: Object) => PutProductsRequest} priceFormula The JavaScript formula calculating prices
 * @property {(sizeChartId: Integer) => PutProductsRequest} sizeChartId Size chart ID
 * @property {(sizeChartName: String) => PutProductsRequest} sizeChartName Size chart name
 * @property {(productPriority: Integer) => PutProductsRequest} productPriority Priority. Allowed values from 1 to 10.
 * @property {(productPriorityInMenuNodes: Array<Object>) => PutProductsRequest} productPriorityInMenuNodes Product priority in menu node.
 * @property {(productIconLink: String) => PutProductsRequest} productIconLink Product icon link.
 * @property {(productAuctionIconLink: String) => PutProductsRequest} productAuctionIconLink Photo without background.
 * @property {(productGroupIconLink: String) => PutProductsRequest} productGroupIconLink Icon for a product group.
 * @property {(productPictures: Array<Object>) => PutProductsRequest} productPictures List of product photos
 * @property {(productPicturesReplace: Array<Object>) => PutProductsRequest} productPicturesReplace List of a product's photos with indication of a particular number of the photo.
 * @property {(productPromotion: Object) => PutProductsRequest} productPromotion Reduced price
 * @property {(productDiscount: Object) => PutProductsRequest} productDiscount Discount for shop.
 * @property {(productDistinguished: Object) => PutProductsRequest} productDistinguished Distinguished product in store.
 * @property {(productSpecial: Object) => PutProductsRequest} productSpecial Special product in store.
 * @property {(productParametersDistinction: Array<Object>) => PutProductsRequest} productParametersDistinction Parameters (distinguished).
 * @property {(parametersConfigurable: Array<Object>) => PutProductsRequest} parametersConfigurable Configuration parameters
 * @property {(associatedProducts: Array<Object>) => PutProductsRequest} associatedProducts List of products recommended with this product
 * @property {(productSizes: Array<Object>) => PutProductsRequest} productSizes Sizes available for products data.
 * @property {(attachments: Array<Object>) => PutProductsRequest} attachments Product attachments list.
 * @property {(removeAttachments: Array<Object>) => PutProductsRequest} removeAttachments The list of attachments to be deleted.
 * @property {(virtualAttachmentsToRemove: Boolean) => PutProductsRequest} virtualAttachmentsToRemove Do you want to delete attachments for digital files.
 * @property {(virtualAttachments: Array<Object>) => PutProductsRequest} virtualAttachments List of product's virtual attachments.
 * @property {(attachmentOperationValues: 'edit'|'add'|'remove') => PutProductsRequest} attachmentOperationValues Operation, that will be performed on attachments to product.
 * @property {(productShopsAttributes: Array<Object>) => PutProductsRequest} productShopsAttributes Data concerning attributes dependent on indicated stores with particular product assigned.
 * @property {(productNames: Object) => PutProductsRequest} productNames Product name.
 * @property {(productNamesInAuction: Object) => PutProductsRequest} productNamesInAuction DEPRECATED. This parameter is deprecated. Product name for online auctions.
 * @property {(productNamesInPriceComparer: Object) => PutProductsRequest} productNamesInPriceComparer Product name for price comparison websites.
 * @property {(productParamDescriptions: Object) => PutProductsRequest} productParamDescriptions Product short description
 * @property {(productLongDescriptions: Object) => PutProductsRequest} productLongDescriptions Long product description
 * @property {(productLongDescriptionsInAuction: Object) => PutProductsRequest} productLongDescriptionsInAuction DEPRECATED. This parameter is deprecated. Product description for marketplaces.
 * @property {(productAuctionDescriptionsData: Array<Object>) => PutProductsRequest} productAuctionDescriptionsData Product data for auction services
 * @property {(productMetaTitles: Object) => PutProductsRequest} productMetaTitles Product meta title
 * @property {(productMetaDescriptions: Object) => PutProductsRequest} productMetaDescriptions Product meta description
 * @property {(productMetaKeywords: Object) => PutProductsRequest} productMetaKeywords Product meta keywords.
 * @property {(productUrl: Object) => PutProductsRequest} productUrl #!AdresURLDlaTowaru!#.
 * @property {(productVersion: Object) => PutProductsRequest} productVersion Data on product groups (variants)
 * @property {(currencyId: String) => PutProductsRequest} currencyId Currency ID
 * @property {(productCurrenciesShops: Array<Object>) => PutProductsRequest} productCurrenciesShops Currency, in which product prices are stored.
 * @property {(delivererId: Integer) => PutProductsRequest} delivererId Supplier ID.
 * @property {(delivererName: String) => PutProductsRequest} delivererName Supplier name.
 * @property {(productParametersDistinctionChangeMode: 'add'|'delete'|'delete_group'|'replace') => PutProductsRequest} productParametersDistinctionChangeMode This parameter is optional and it determines properties edition mode. Default value is "replace". Allowed values: "add" - adds properties to already existent ones, "delete" - removes properties of already existent ones, "delete_group" - removes properties from selected group, "replace" - overwrites properties already existent with new ones (default mode).
 * @property {(productDeliveryTime: Object) => PutProductsRequest} productDeliveryTime Product delivery time from the producer to the shop
 * @property {(productParameters: Array<Object>) => PutProductsRequest} productParameters Parameters.
 * @property {(clearProductParameters: Boolean) => PutProductsRequest} clearProductParameters 
 * @property {(changeParametersDistinction: Array<Object>) => PutProductsRequest} changeParametersDistinction Change parameter distinction.
 * @property {(productPriceVatChangeMode: 'change_net'|'change_gross') => PutProductsRequest} productPriceVatChangeMode VAT rate change mode:. "change_gross" - changes the product gross price, leaving the net price unchanged, "change_net" - changes the net price, leaving the gross price unchanged (default mode).
 * @property {(productMenuItems: Array<Object>) => PutProductsRequest} productMenuItems An array of menu elements
 * @property {(removeAllProductsAssignedToMenu: Object) => PutProductsRequest} removeAllProductsAssignedToMenu #!UsuwaWszystkiePrzypisaneDoProduktuElementyWybranegoMenu!#.
 * @property {(productSumInBasket: String) => PutProductsRequest} productSumInBasket Do You wish to sum up the products in the basket as a one order? Available values: "y" - yes, "n" - no.
 * @property {(productShopsPricesConfig: 'same_prices'|'different_prices') => PutProductsRequest} productShopsPricesConfig Settings of prices for shop. Values allowed: "same_prices" - prices in each shop are the same, "different_prices" - prices in each shop are different.
 * @property {(productPosPricesConfig: 'pos_equals_retail'|'pos_notequals_retail'|'not_available_in_pos'|'sizes_pos_price_as_base_price') => PutProductsRequest} productPosPricesConfig Price settings for POS. Allowed values: "pos_equals_retail" - sets POS price the same as retail price. Possible to set only if the "shops_prices_config" parameter is set to jest same_prices or there is only one shop in panel, "pos_notequals_retail" - Price for POS different than retail price, "not_available_in_pos" - Product not available for POS sales. "sizes_pos_price_as_base_price" - Remove prices for sizes and set a sale price which equals a basic price.
 * @property {(productType: 'product_item'|'product_free'|'product_packaging'|'product_bundle'|'product_collection'|'product_virtual'|'product_service'|'product_configurable') => PutProductsRequest} productType Product type. Allowed values: "product_item" - Goods, "product_free" - Free product, "product_packaging" - packaging, "product_bundle" - set. "product_collection" - collection. "product_service" - service. "product_virtual" - virtual product. "product_configurable" - configurable product.
 * @property {(priceRoundMode: 'none'|'00'|'x0'|'99'|'x9') => PutProductsRequest} priceRoundMode Forced rounding up method.
 * @property {(productAvailabilityManagementType: 'manual'|'stock') => PutProductsRequest} productAvailabilityManagementType Product availability management method Available values: "stock" - by means of stock management tools, "manual" - manually.
 * @property {(removeChooseSizesValues: Array<String>) => PutProductsRequest} removeChooseSizesValues List of unused sizes in product to be deleted
 * @property {(removeAllUnusedProductSizes: Boolean) => PutProductsRequest} removeAllUnusedProductSizes Remove all unused sizes.
 * @property {(producerCodesStandard: 'auto'|'GTIN14'|'GTIN13'|'ISBN13'|'GTIN12'|'ISBN10'|'GTIN8'|'UPCE'|'MPN'|'other') => PutProductsRequest} producerCodesStandard Standard producer code. Available values: "auto" - Choose automatically, "GTIN14" - GTIN-14 "GTIN13" - GTIN-13 (EAN-13) "ISBN13" - GTIN-13 (ISBN-13) "GTIN12" - GTIN-12 (UPC-A) "ISBN10" - ISBN-10 "GTIN8" - GTIN-8 (EAN-8) "UPCE" - UPC-E "MPN" - MPN "other" - Other
 * @property {(javaScriptInTheItemCard: Array<Object>) => PutProductsRequest} javaScriptInTheItemCard JavaScript code displayed in the product page of the IdoSell Shop
 * @property {(serialNumbersOption: 'na'|'optional'|'required') => PutProductsRequest} serialNumbersOption Saving serial numbers Available values: "na" - not used, "optional" - Optional, "required" - required.
 * @property {(dispatchSettings: Object) => PutProductsRequest} dispatchSettings Shipping, returns and complaints settings
 * @property {(standardUnit: Object) => PutProductsRequest} standardUnit Standard unit settings
 * @property {(minQuantityPerOrder: Object) => PutProductsRequest} minQuantityPerOrder Minimal number of products in an order
 * @property {(dynamicPricingEnabled: String) => PutProductsRequest} dynamicPricingEnabled 
 * @property {(clearStockQuantities: Object) => PutProductsRequest} clearStockQuantities The setting allows you to reset the inventory to zero
 * @property {(productDimensions: Object) => PutProductsRequest} productDimensions Dimensions and overall weight
 * @property {function} append Append current data to array and start modifying next row
 * @property {(text: String, type: "name"|"short"|"long"|"metatitle"|"metadescription"|"metakeywords"|"acutionname"|"auctiondescription", language: String, shopId: Integer) => PutProductsRequest} setText Set various types of names or descriptions to the product
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} DeleteProductsProductsToFacebookCatalogRequest
 * @property {(facebookCatalogId: Integer) => DeleteProductsProductsToFacebookCatalogRequest} facebookCatalogId You can read the Facebook Catalog ID in the Marketing & Integrations/Facebook/Facebook Product Catalog admin panel
 * @property {(shopId: Integer) => DeleteProductsProductsToFacebookCatalogRequest} shopId Shop Id
 * @property {(products: Array<Integer>) => DeleteProductsProductsToFacebookCatalogRequest} products Products list.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetProductsProductsToFacebookCatalogRequest
 * @property {(facebookCatalogId: Integer) => GetProductsProductsToFacebookCatalogRequest} facebookCatalogId You can read the Facebook Catalog ID in the Marketing & Integrations/Facebook/Facebook Product Catalog admin panel
 * @property {(shopId: Integer) => GetProductsProductsToFacebookCatalogRequest} shopId Shop Id
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostProductsProductsToFacebookCatalogRequest
 * @property {(facebookCatalogId: Integer) => PostProductsProductsToFacebookCatalogRequest} facebookCatalogId You can read the Facebook Catalog ID in the Marketing & Integrations/Facebook/Facebook Product Catalog admin panel
 * @property {(shopId: Integer) => PostProductsProductsToFacebookCatalogRequest} shopId Shop Id
 * @property {(products: Array<Integer>) => PostProductsProductsToFacebookCatalogRequest} products Products list.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} DeleteProductsProductsToPromotionRequest
 * @property {(promotionId: Integer) => DeleteProductsProductsToPromotionRequest} promotionId Special offer ID
 * @property {(products: Array<Integer>) => DeleteProductsProductsToPromotionRequest} products Products list.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostProductsProductsToPromotionRequest
 * @property {(promotionId: Integer) => PostProductsProductsToPromotionRequest} promotionId Special offer ID
 * @property {(products: Array<Integer>) => PostProductsProductsToPromotionRequest} products Products list.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetProductsQuestionsRequest
 * @property {(id: Integer) => GetProductsQuestionsRequest} id Question ID.
 * @property {(productId: Integer) => GetProductsQuestionsRequest} productId Product IAI code
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutProductsQuestionsRequest
 * @property {(questions: Array<Object>) => PutProductsQuestionsRequest} questions Question Board.
 * @property {(id: Integer) => PutProductsQuestionsRequest} id Question ID.
 * @property {(lang: String) => PutProductsQuestionsRequest} lang Language of the question e.g. 'pol', 'eng'.
 * @property {(question: String) => PutProductsQuestionsRequest} question Your question(base64).
 * @property {(answer: String) => PutProductsQuestionsRequest} answer Content of the answer(base64).
 * @property {(dateAdd: String) => PutProductsQuestionsRequest} dateAdd The date the question was created.
 * @property {(host: String) => PutProductsQuestionsRequest} host The name and address of the host from which the question was added.
 * @property {(author: String) => PutProductsQuestionsRequest} author Author.
 * @property {(productIdent: Object) => PutProductsQuestionsRequest} productIdent Stock keeping unit.
 * @property {(visible: 'n'|'y') => PutProductsQuestionsRequest} visible Visibility: "y" - yes, "n" - no
 * @property {(priority: Integer) => PutProductsQuestionsRequest} priority Priority.
 * @property {(confirmed: 'n'|'y') => PutProductsQuestionsRequest} confirmed Validate the question: "y" - yes, "n" - no
 * @property {(shopId: Integer) => PutProductsQuestionsRequest} shopId Shop Id
 * @property {(answerDate: String) => PutProductsQuestionsRequest} answerDate Date of response.
 * @property {(answerAuthor: String) => PutProductsQuestionsRequest} answerAuthor Response author.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetProductsReservationsRequest
 * @property {(productsIdents: Array<Object>) => GetProductsReservationsRequest} productsIdents Products list.
 * @property {(ids: Array<Integer>) => GetProductsReservationsRequest} ids Define productsIdents by passing array of values
 * @property {(externalCodes: Array<String>) => GetProductsReservationsRequest} externalCodes Define productsIdents by passing array of values
 * @property {(producerCodes: Array<String>) => GetProductsReservationsRequest} producerCodes Define productsIdents by passing array of values
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostProductsRestoreRequest
 * @property {(productId: Integer) => PostProductsRestoreRequest} productId Product IAI code
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} DeleteProductsSeriesRequest
 * @property {(ids: Array<Integer>) => DeleteProductsSeriesRequest} ids IDs
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetProductsSeriesRequest
 * @property {(return_last_changed_time: String) => GetProductsSeriesRequest} return_last_changed_time With "y" value it returns the last series modification date in YYYY-MM-DD HH:MM:SS format.
 * @property {(ids: Array<Integer>) => GetProductsSeriesRequest} ids IDs
 * @property {(names: Array<String>) => GetProductsSeriesRequest} names Names
 * @property {(languagesIds: Array<String>) => GetProductsSeriesRequest} languagesIds List of languages
 * @property {(resultsPage: Integer) => GetProductsSeriesRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetProductsSeriesRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(page: Integer, limit: Integer) => GetProductsSeriesRequest} page Define page number and maximum results per page
 * @property {() => Integer} count Returns total numer of results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutProductsSeriesRequest
 * @property {(series: Array<Object>) => PutProductsSeriesRequest} series Series list.
 * @property {(id: Integer) => PutProductsSeriesRequest} id Id
 * @property {(nameInPanel: String) => PutProductsSeriesRequest} nameInPanel Name in panel
 * @property {(shopsConfigurations: Array<Object>) => PutProductsSeriesRequest} shopsConfigurations 
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetProductsSeriesFilterRequest
 * @property {(shopId: Integer) => GetProductsSeriesFilterRequest} shopId Shop Id
 * @property {(languageId: String) => GetProductsSeriesFilterRequest} languageId Language ID (code in ISO 639-2).
 * @property {(serieId: Integer) => GetProductsSeriesFilterRequest} serieId Series Id
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutProductsSeriesFilterRequest
 * @property {(shopId: Integer) => PutProductsSeriesFilterRequest} shopId Shop Id
 * @property {(languageId: String) => PutProductsSeriesFilterRequest} languageId Language ID (code in ISO 639-2).
 * @property {(serieId: Integer) => PutProductsSeriesFilterRequest} serieId Series Id
 * @property {(filterForNodeIsDefault: 'y'|'n') => PutProductsSeriesFilterRequest} filterForNodeIsDefault 
 * @property {(filtersActive: Array<Object>) => PutProductsSeriesFilterRequest} filtersActive Active filters.
 * @property {(filterId: String) => PutProductsSeriesFilterRequest} filterId Menu filter ID.
 * @property {(filterName: String) => PutProductsSeriesFilterRequest} filterName Filter name on page.
 * @property {(filterDisplay: 'name'|'gfx'|'namegfx') => PutProductsSeriesFilterRequest} filterDisplay Display as: "name" - text, "gfx" - graphics, "namegfx" - text and graphics.
 * @property {(filterValueSort: 'y'|'n'|'priority') => PutProductsSeriesFilterRequest} filterValueSort Sort by: "y" - alfabetically, "n" - by frequency and order of occurrence of indicated parameter value in found products, "priority" - according to value sequence in parameter.
 * @property {(filterDefaultEnabled: 'y'|'n') => PutProductsSeriesFilterRequest} filterDefaultEnabled Enabled by default .
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} DeleteProductsSizesRequest
 * @property {(mode: 'delete_by_size'|'delete_all') => DeleteProductsSizesRequest} mode Edition mode
 * @property {(params: Array<Object>) => DeleteProductsSizesRequest} params Parameters transmitted to method
 * @property {(deleteSizesIndexesData: Array<String>) => DeleteProductsSizesRequest} deleteSizesIndexesData Product parameters recognized by index.
 * @property {(productId: Integer) => DeleteProductsSizesRequest} productId Product IAI code
 * @property {(sizes: Array<Object>) => DeleteProductsSizesRequest} sizes List of sizes
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetProductsSizesRequest
 * @property {(result::page: Integer) => GetProductsSizesRequest} result::page Page with results number. Numeration starts from 0
 * @property {(result::pageNumber: Integer) => GetProductsSizesRequest} result::pageNumber Number of results on page. Value from 1 to 100
 * @property {(page: Integer, limit: Integer) => GetProductsSizesRequest} page Define page number and maximum results per page
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutProductsSizesRequest
 * @property {(mode: 'edit'|'add'|'replace') => PutProductsSizesRequest} mode Edition mode
 * @property {(sizesProductsData: Array<Object>) => PutProductsSizesRequest} sizesProductsData Product parameters recognized by product ID or its sizes
 * @property {(indexesData: Array<Object>) => PutProductsSizesRequest} indexesData Product parameters recognized by index
 * @property {(productId: Integer) => PutProductsSizesRequest} productId Product IAI code
 * @property {(sizes: Array<Object>) => PutProductsSizesRequest} sizes List of sizes
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutProductsStockQuantityRequest
 * @property {(products: Array<Object>) => PutProductsStockQuantityRequest} products Products list.
 * @property {(productSizeCodeExternal: String) => PutProductsStockQuantityRequest} productSizeCodeExternal External product system code for size.
 * @property {(stockId: Integer) => PutProductsStockQuantityRequest} stockId Stock ID
 * @property {(productSizeQuantity: Number) => PutProductsStockQuantityRequest} productSizeQuantity Product stock quantity
 * @property {(productPurchasePrice: Number) => PutProductsStockQuantityRequest} productPurchasePrice Cost price
 * @property {(productPurchasePriceNet: Number) => PutProductsStockQuantityRequest} productPurchasePriceNet Net purchase price
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetProductsStocksRequest
 * @property {(products: Array<Object>) => GetProductsStocksRequest} products Products list.
 * @property {(ids: Array<Integer>) => GetProductsStocksRequest} ids Define products by passing array of values
 * @property {(externalCodes: Array<String>) => GetProductsStocksRequest} externalCodes Define products by passing array of values
 * @property {(producerCodes: Array<String>) => GetProductsStocksRequest} producerCodes Define products by passing array of values
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutProductsStocksRequest
 * @property {(products: Array<Object>) => PutProductsStocksRequest} products Products list.
 * @property {(ident: Object) => PutProductsStocksRequest} ident 
 * @property {(sizes: Array<Object>) => PutProductsStocksRequest} sizes List of sizes
 * @property {(settings: Object) => PutProductsStocksRequest} settings 
 * @property {(error: Object) => PutProductsStocksRequest} error Error information.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetProductsStrikethroughPricesRequest
 * @property {(products: Array<Object>) => GetProductsStrikethroughPricesRequest} products Products list.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutProductsStrikethroughPricesRequest
 * @property {(products: Array<Object>) => PutProductsStrikethroughPricesRequest} products Products list.
 * @property {(ident: Object) => PutProductsStrikethroughPricesRequest} ident Identifier type.
 * @property {(sizes: Array<Object>) => PutProductsStrikethroughPricesRequest} sizes List of sizes
 * @property {(stp_settings: Object) => PutProductsStrikethroughPricesRequest} stp_settings 
 * @property {(shops: Array<Object>) => PutProductsStrikethroughPricesRequest} shops Strikethrough price settings for the page.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutProductsSupplierCodeRequest
 * @property {(products: Array<Object>) => PutProductsSupplierCodeRequest} products Products list.
 * @property {(productId: Integer) => PutProductsSupplierCodeRequest} productId Product IAI code
 * @property {(productDeliverers: Array<Object>) => PutProductsSupplierCodeRequest} productDeliverers Suppliers data
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutProductsSupplierProductDataRequest
 * @property {(products: Array<Object>) => PutProductsSupplierProductDataRequest} products Products list.
 * @property {(productId: Integer) => PutProductsSupplierProductDataRequest} productId Product IAI code
 * @property {(productDeliverers: Array<Object>) => PutProductsSupplierProductDataRequest} productDeliverers Suppliers data
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostProductsSynchronizationFileRequest
 * @property {(synchronizationId: Integer) => PostProductsSynchronizationFileRequest} synchronizationId Synchronization ID.
 * @property {(packageId: Integer) => PostProductsSynchronizationFileRequest} packageId File package number. Leave blank for the first file in the package, and the API will return a generated number, which should then be transmitted and by which the API will recognize subsequent files for this package.
 * @property {(fileType: String) => PostProductsSynchronizationFileRequest} fileType File Type IOF30 (full/light/categories/sizes/series/guarantees/parameters).
 * @property {(md5Content: String) => PostProductsSynchronizationFileRequest} md5Content MD5 from the file avarage before base64 encoding.
 * @property {(fileContent: String) => PostProductsSynchronizationFileRequest} fileContent Offer file encoded with base64 algorithm.
 * @property {(offerName: String) => PostProductsSynchronizationFileRequest} offerName Unique offer name.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutProductsSynchronizationFinishUploadRequest
 * @property {(synchronizationId: Integer) => PutProductsSynchronizationFinishUploadRequest} synchronizationId Synchronization ID.
 * @property {(packageId: Integer) => PutProductsSynchronizationFinishUploadRequest} packageId File package number.
 * @property {(filesInPackage: Integer) => PutProductsSynchronizationFinishUploadRequest} filesInPackage Total number of files in the parcel.
 * @property {(verifyFiles: Boolean) => PutProductsSynchronizationFinishUploadRequest} verifyFiles Whether to verify the package by sparsifying files and preparing requests. It may take a few minutes to answer.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostRefundsAddAutomaticRefundRequest
 * @property {(sourceType: 'return'|'rma') => PostRefundsAddAutomaticRefundRequest} sourceType Source type.: "return" "rma".
 * @property {(sourceId: Integer) => PostRefundsAddAutomaticRefundRequest} sourceId Source ID.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostRefundsAddAutomaticRefundForOrderRequest
 * @property {(sourceId: Integer) => PostRefundsAddAutomaticRefundForOrderRequest} sourceId Source ID.
 * @property {(refundValue: Number) => PostRefundsAddAutomaticRefundForOrderRequest} refundValue Amount.
 * @property {(paymentId: Integer) => PostRefundsAddAutomaticRefundForOrderRequest} paymentId Payment ID.
 * @property {(refundCurrency: String) => PostRefundsAddAutomaticRefundForOrderRequest} refundCurrency Payment currency.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostRefundsAddManualRefundRequest
 * @property {(sourceType: 'order'|'return'|'rma') => PostRefundsAddManualRefundRequest} sourceType Source type.: "order" "return" "rma".
 * @property {(sourceId: Integer) => PostRefundsAddManualRefundRequest} sourceId Source ID.
 * @property {(refundValue: Number) => PostRefundsAddManualRefundRequest} refundValue Amount.
 * @property {(refundCurrency: String) => PostRefundsAddManualRefundRequest} refundCurrency Payment currency.
 * @property {(refundDetails: Object) => PostRefundsAddManualRefundRequest} refundDetails 
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutRefundsCancelRefundRequest
 * @property {(sourceType: 'order'|'return'|'rma') => PutRefundsCancelRefundRequest} sourceType Source type.: "order" "return" "rma".
 * @property {(sourceId: Integer) => PutRefundsCancelRefundRequest} sourceId Source ID.
 * @property {(paymentId: String) => PutRefundsCancelRefundRequest} paymentId Payment ID.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutRefundsConfirmRefundRequest
 * @property {(sourceType: 'order'|'return'|'rma') => PutRefundsConfirmRefundRequest} sourceType Source type.: "order" , "return" "rma".
 * @property {(sourceId: Integer) => PutRefundsConfirmRefundRequest} sourceId Source ID.
 * @property {(paymentId: Integer) => PutRefundsConfirmRefundRequest} paymentId Payment ID.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetRefundsGetPossibleAutoRefundsRequest
 * @property {(sourceId: Integer) => GetRefundsGetPossibleAutoRefundsRequest} sourceId Source ID
 * @property {(sourceType: 'order'|'return'|'rma') => GetRefundsGetPossibleAutoRefundsRequest} sourceType Source type.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetRefundsGetRefundStatusRequest
 * @property {(sourceId: Integer) => GetRefundsGetRefundStatusRequest} sourceId Source ID
 * @property {(paymentId: Integer) => GetRefundsGetRefundStatusRequest} paymentId Payment ID.
 * @property {(sourceType: 'order'|'return'|'rma') => GetRefundsGetRefundStatusRequest} sourceType Source type.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetRefundsRetrieveRefundsListRequest
 * @property {(sourceType: 'order'|'return'|'rma'|'all') => GetRefundsRetrieveRefundsListRequest} sourceType Source type.
 * @property {(resultsPage: Integer) => GetRefundsRetrieveRefundsListRequest} resultsPage Page number, first 1
 * @property {(resultsLimit: Integer) => GetRefundsRetrieveRefundsListRequest} resultsLimit Limit results, between 1 - 100
 * @property {(page: Integer, limit: Integer) => GetRefundsRetrieveRefundsListRequest} page Define page number and maximum results per page
 * @property {() => Integer} count Returns total numer of results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutRefundsUpdateRefundRequest
 * @property {(sourceType: 'order'|'return'|'rma') => PutRefundsUpdateRefundRequest} sourceType Source type.: "order" , "return" "rma".
 * @property {(sourceId: Integer) => PutRefundsUpdateRefundRequest} sourceId Source ID.
 * @property {(paymentId: String) => PutRefundsUpdateRefundRequest} paymentId Payment ID.
 * @property {(refundValue: Number) => PutRefundsUpdateRefundRequest} refundValue Amount.
 * @property {(refundCurrency: String) => PutRefundsUpdateRefundRequest} refundCurrency Payment currency.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetReturnsRequest
 * @property {(order_sn: Integer) => GetReturnsRequest} order_sn Search by the order serial number to which a return was added.
 * @property {(return_id: Integer) => GetReturnsRequest} return_id Search by return ID.
 * @property {(return_shipping_number: String) => GetReturnsRequest} return_shipping_number Search by a return shipment number from a customer to the shop .
 * @property {(range: Object) => GetReturnsRequest} range Date range.
 * @property {(results_limit: Integer) => GetReturnsRequest} results_limit Number of results on page.
 * @property {(results_page: Integer) => GetReturnsRequest} results_page Result page number.
 * @property {(status: Integer) => GetReturnsRequest} status 1 - Return not handled, 2 - Return accepted, 3 - Return not accepted, 13 - Return canceled by the customer, 14 - Return canceled, 15 - Resend the order, 16 - Abort resending order, 17 - A customer generated a return - it will be delivered personally, 18 - A customer generated a return - it will be sent by the customer.
 * @property {(return_ids: Array<Integer>) => GetReturnsRequest} return_ids Search by return ID.
 * @property {(stock_id: Integer) => GetReturnsRequest} stock_id Search by ID of a stock to which a return is sent.
 * @property {(bundleAsProducts: Boolean) => GetReturnsRequest} bundleAsProducts Return a set as its constituent products
 * @property {(dateFrom: DateLike, dateTo: DateLike, dateType: "date_add"|"date_end") => GetReturnsRequest} dates Type of date according to the index results. Possible type values: date_add, date_end
 * @property {(page: Integer, limit: Integer) => GetReturnsRequest} page Define page number and maximum results per page
 * @property {() => Integer} count Returns total numer of results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutReturnsRequest
 * @property {(returns: Array<Object>) => PutReturnsRequest} returns 
 * @property {(id: Integer) => PutReturnsRequest} id Returns ID.
 * @property {(api_flag: Object) => PutReturnsRequest} api_flag 
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutReturnsSerialNumberRequest
 * @property {(return_id: Integer) => PutReturnsSerialNumberRequest} return_id Return number.
 * @property {(products: Array<Object>) => PutReturnsSerialNumberRequest} products Products list.
 * @property {(id: Integer) => PutReturnsSerialNumberRequest} id Product ID.
 * @property {(size: String) => PutReturnsSerialNumberRequest} size Size ID.
 * @property {(serialNumbers: Array<String>) => PutReturnsSerialNumberRequest} serialNumbers 
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetReturnsStatusesRequest
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetRmaRequest
 * @property {(rmaIds: Array<Integer>) => GetRmaRequest} rmaIds 
 * @property {(stockId: Integer) => GetRmaRequest} stockId Stock ID
 * @property {(operatorLogin: String) => GetRmaRequest} operatorLogin Login of the user handling the complaint
 * @property {(clientId: String) => GetRmaRequest} clientId Unique client's number.
 * @property {(creationDate: Object) => GetRmaRequest} creationDate Complaint creation date in the YYYY-MM-DD format
 * @property {(modificationDate: Object) => GetRmaRequest} modificationDate Complaint modification date in the YYYY-MM-DD format
 * @property {(endDate: Object) => GetRmaRequest} endDate Complaint closing date in the YYYY-MM-DD format
 * @property {(resultsPage: Integer) => GetRmaRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetRmaRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(dateFrom: DateLike, dateTo: DateLike) => GetRmaRequest} created Type of date according to the index results
 * @property {(dateFrom: DateLike, dateTo: DateLike) => GetRmaRequest} modified Type of date according to the index results
 * @property {(dateFrom: DateLike, dateTo: DateLike) => GetRmaRequest} ended Type of date according to the index results
 * @property {(page: Integer, limit: Integer) => GetRmaRequest} page Define page number and maximum results per page
 * @property {() => Integer} count Returns total numer of results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutRmaRequest
 * @property {(rmas: Array<Object>) => PutRmaRequest} rmas Complaints.
 * @property {(rmaId: Integer) => PutRmaRequest} rmaId Complaint id.
 * @property {(rmaStatusId: Integer) => PutRmaRequest} rmaStatusId Claim status. Available values: 15 - Complaint not confirmed by the shop service, 17 - The complaint has been cancelled, 18 - Complaint canceled by the customer, 14 - Complaint didn't arrive, 20 - Complaint not handled, 22 - Complaint rejected - no fault was found, 23 - Complaint rejected - the warranty period has expired, 24 - Complaint rejected - defect caused by improper use, 19 - Complaint confirmed, 28 - Complaint is being considered - repair completed, 5 - Complaint is being considered - Product sent to the producer , 4 - Complaint is being considered - Product was sent for testing, 6 - Complaint is being considered - Repair in progress, 29 - Complaint is being considered - the complaint requires additional information from the customer, 7 - Complaint adjusted negatively - no fault was found, 9 - Complaint adjusted negatively - the warranty period has expired, 30 - Complaint adjusted negatively - return shipment sent to the customer, 8 - Complaint adjusted negatively - defect caused by improper use, 25 - Complaint handled positively - return shipment sent to the customer, 12 - Complaint handled positively - replacement for a new product, 13 - Complaint handled positively - replacement for a different product, 26 - Complaint handled positively - a new item was shipped without waiting for the original one, 27 - Complaint handled positively - the recipient's data change on the sales document, 10 - Complaint handled positively - Refund - payment processing, 11 - Complaint handled positively - repair completed - payout made, 31 - Complaint handled positively - Awaiting correction invoice confirmation, 34 - Complaint handled positively - Refund - preparing correction invoice
 * @property {(rmaChat: Array<Object>) => PutRmaRequest} rmaChat Customer correspondence.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetRmaStatusesRequest
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} DeleteSizechartsRequest
 * @property {(ids: Array<Integer>) => DeleteSizechartsRequest} ids #!identyfikatory!#
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetSizechartsRequest
 * @property {(ids: Array<Integer>) => GetSizechartsRequest} ids IDs
 * @property {(names: Array<String>) => GetSizechartsRequest} names Names of size charts
 * @property {(languages: Array<String>) => GetSizechartsRequest} languages List of languages
 * @property {(resultsPage: Integer) => GetSizechartsRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetSizechartsRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(page: Integer, limit: Integer) => GetSizechartsRequest} page Define page number and maximum results per page
 * @property {() => Integer} count Returns total numer of results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutSizechartsRequest
 * @property {(sizeCharts: Array<Object>) => PutSizechartsRequest} sizeCharts 
 * @property {(id: Integer) => PutSizechartsRequest} id Id
 * @property {(nameInPanel: String) => PutSizechartsRequest} nameInPanel Name in panel
 * @property {(displayMode: 'single'|'all') => PutSizechartsRequest} displayMode Display mode
 * @property {(languagesData: Array<Object>) => PutSizechartsRequest} languagesData 
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetSizesRequest
 * @property {(return_last_changed_time: String) => GetSizesRequest} return_last_changed_time When the value is 'y', the last size modification date is returned, formatted as YYYY-MM-DD HH-MM-SS.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutSizesRequest
 * @property {(sizes: Array<Object>) => PutSizesRequest} sizes Size table.
 * @property {(faultCode: Integer) => PutSizesRequest} faultCode Error code.
 * @property {(faultString: String) => PutSizesRequest} faultString Error description.
 * @property {(group_id: Integer) => PutSizesRequest} group_id Size group ID.
 * @property {(id: String) => PutSizesRequest} id Size identifier.
 * @property {(name: String) => PutSizesRequest} name Category plural name.
 * @property {(description: String) => PutSizesRequest} description Size description.
 * @property {(operation: String) => PutSizesRequest} operation Operation type: add, edit, del
 * @property {(lang_data: Array<Object>) => PutSizesRequest} lang_data 
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetSystemConfigRequest
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutSystemConfigRequest
 * @property {(panelSettings: Object) => PutSystemConfigRequest} panelSettings Panel settings
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetSystemCurrenciesRequest
 * @property {(symbol: String) => GetSystemCurrenciesRequest} symbol Currency symbol in ISO 4217 format.
 * @property {(date: String) => GetSystemCurrenciesRequest} date Date in format YYYY-MM-DD-HH MM:SS.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutSystemCurrenciesRequest
 * @property {(currencies: Array<Object>) => PutSystemCurrenciesRequest} currencies 
 * @property {(id: String) => PutSystemCurrenciesRequest} id Currency code in ISO 4217 standard.
 * @property {(rate: Number) => PutSystemCurrenciesRequest} rate Currency exchange rate. Maximal value is 10000.
 * @property {(scale: Integer) => PutSystemCurrenciesRequest} scale Currency smaller unit.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetSystemProcessesAutomationRequest
 * @property {(shopId: Integer) => GetSystemProcessesAutomationRequest} shopId Shop Id
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutSystemProcessesAutomationRequest
 * @property {(shopId: Integer) => PutSystemProcessesAutomationRequest} shopId Shop Id
 * @property {(orders: Object) => PutSystemProcessesAutomationRequest} orders Orders.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetSystemServerLoadRequest
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetSystemServerTimeRequest
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetSystemShopsDataRequest
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetSystemUnitsRequest
 * @property {(languagesIds: Array<String>) => GetSystemUnitsRequest} languagesIds List of languages
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutSystemUnitsRequest
 * @property {(units: Array<Object>) => PutSystemUnitsRequest} units 
 * @property {(id: Integer) => PutSystemUnitsRequest} id #!IdentyfikatorJednostki!#
 * @property {(nameInPanel: String) => PutSystemUnitsRequest} nameInPanel Name in panel (limit of 30 characters)
 * @property {(precisionUnit: Integer) => PutSystemUnitsRequest} precisionUnit Accuracy (number of places after comma)
 * @property {(visible: Boolean) => PutSystemUnitsRequest} visible Visibility
 * @property {(descriptions: Array<Object>) => PutSystemUnitsRequest} descriptions Unit names
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetSystemUsersRequest
 * @property {(userType: 'all'|'active') => GetSystemUsersRequest} userType User type. List of options "all" - All users, "active" - Only active users
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutVouchersBlockRequest
 * @property {(vouchers: Array<Object>) => PutVouchersBlockRequest} vouchers 
 * @property {(id: Integer) => PutVouchersBlockRequest} id Voucher ID
 * @property {(number: String) => PutVouchersBlockRequest} number Number.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetVouchersTypesRequest
 * @property {(resultsPage: Integer) => GetVouchersTypesRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetVouchersTypesRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(page: Integer, limit: Integer) => GetVouchersTypesRequest} page Define page number and maximum results per page
 * @property {() => Integer} count Returns total numer of results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutVouchersUnblockRequest
 * @property {(vouchers: Array<Object>) => PutVouchersUnblockRequest} vouchers 
 * @property {(id: Integer) => PutVouchersUnblockRequest} id Voucher ID
 * @property {(number: String) => PutVouchersUnblockRequest} number Number.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} DeleteVouchersRequest
 * @property {(vouchers: Array<Object>) => DeleteVouchersRequest} vouchers 
 * @property {(id: Integer) => DeleteVouchersRequest} id Voucher ID
 * @property {(number: String) => DeleteVouchersRequest} number Number.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetVouchersRequest
 * @property {(vouchers: Array<Object>) => GetVouchersRequest} vouchers 
 * @property {(voucherTypeId: Integer) => GetVouchersRequest} voucherTypeId Discount code campaign ID
 * @property {(name: String) => GetVouchersRequest} name Name.
 * @property {(status: 'all'|'used'|'unused'|'unverified') => GetVouchersRequest} status Status
 * @property {(generetedFromAffiliateProgram: 'all'|'y'|'n') => GetVouchersRequest} generetedFromAffiliateProgram Generated in the affiliate program
 * @property {(noteContain: String) => GetVouchersRequest} noteContain Notes contain
 * @property {(balanceFrom: Number) => GetVouchersRequest} balanceFrom Value from
 * @property {(balanceTo: Number) => GetVouchersRequest} balanceTo Value to
 * @property {(expirationDateFrom: String) => GetVouchersRequest} expirationDateFrom Expiration date from
 * @property {(expirationDateTo: String) => GetVouchersRequest} expirationDateTo Expiration date to
 * @property {(issueDateFrom: String) => GetVouchersRequest} issueDateFrom Created from
 * @property {(issueDateTo: String) => GetVouchersRequest} issueDateTo Created to
 * @property {(usageDateFrom: String) => GetVouchersRequest} usageDateFrom To be used from
 * @property {(usageDateTo: String) => GetVouchersRequest} usageDateTo To be used to
 * @property {(resultsPage: Integer) => GetVouchersRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetVouchersRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(dateFrom: DateLike, dateTo: DateLike) => GetVouchersRequest} issued Type of date according to the index results
 * @property {(dateFrom: DateLike, dateTo: DateLike) => GetVouchersRequest} expires Type of date according to the index results
 * @property {(dateFrom: DateLike, dateTo: DateLike) => GetVouchersRequest} used Type of date according to the index results
 * @property {(ids: Array<Integer>) => GetVouchersRequest} ids Define vouchers by passing array of values
 * @property {(numbers: Array<Integer>) => GetVouchersRequest} numbers Define vouchers by passing array of values
 * @property {(page: Integer, limit: Integer) => GetVouchersRequest} page Define page number and maximum results per page
 * @property {() => Integer} count Returns total numer of results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostVouchersRequest
 * @property {(vouchers: Array<Object>) => PostVouchersRequest} vouchers List of vouchers to add
 * @property {(typeId: Integer) => PostVouchersRequest} typeId Gift voucher type id
 * @property {(number: String) => PostVouchersRequest} number Number.
 * @property {(name: String) => PostVouchersRequest} name Name.
 * @property {(expirationDate: String) => PostVouchersRequest} expirationDate Voucher expiration date
 * @property {(balance: Object) => PostVouchersRequest} balance Voucher balance
 * @property {(shops: Array<Integer>) => PostVouchersRequest} shops List of shops the voucher is active in
 * @property {(note: String) => PostVouchersRequest} note 
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutVouchersRequest
 * @property {(vouchers: Array<Object>) => PutVouchersRequest} vouchers List of vouchers to edit
 * @property {(id: Integer) => PutVouchersRequest} id Voucher ID
 * @property {(number: String) => PutVouchersRequest} number Number.
 * @property {(name: String) => PutVouchersRequest} name Name.
 * @property {(expirationDate: String) => PutVouchersRequest} expirationDate Voucher expiration date
 * @property {(balanceOperationType: 'set'|'add'|'subtract') => PutVouchersRequest} balanceOperationType Balance operation type, possible values: - set - balance positioning of funds, - add - add funds to balance, - subtract - subtract funds from balance.
 * @property {(balance: Object) => PutVouchersRequest} balance Voucher balance
 * @property {(shops: Array<Integer>) => PutVouchersRequest} shops List of shops the voucher is active in
 * @property {(note: String) => PutVouchersRequest} note 
 * @property {(status: 'used'|'unused') => PutVouchersRequest} status Status, possible values: - used - used, - unused - unused,
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetWarrantiesCountTotalRequest
 * @property {(warranty_ids: Array<String>) => GetWarrantiesCountTotalRequest} warranty_ids 
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutWarrantiesLanguageDataRequest
 * @property {(lang_data: Array<Object>) => PutWarrantiesLanguageDataRequest} lang_data 
 * @property {(warranty_id: String) => PutWarrantiesLanguageDataRequest} warranty_id Warranty ID (numeric or text based).
 * @property {(lang: Array<Object>) => PutWarrantiesLanguageDataRequest} lang 
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} DeleteWarrantiesRequest
 * @property {(warranty_ids: Array<String>) => DeleteWarrantiesRequest} warranty_ids 
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetWarrantiesRequest
 * @property {(warranty_ids: Array<String>) => GetWarrantiesRequest} warranty_ids 
 * @property {(results_limit: Integer) => GetWarrantiesRequest} results_limit Number of results on page.
 * @property {(results_page: Integer) => GetWarrantiesRequest} results_page Result page number.
 * @property {(results_order: Object) => GetWarrantiesRequest} results_order 
 * @property {(page: Integer, limit: Integer) => GetWarrantiesRequest} page Define page number and maximum results per page
 * @property {() => Integer} count Returns total numer of results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostWarrantiesRequest
 * @property {(warranties: Array<Object>) => PostWarrantiesRequest} warranties 
 * @property {(name: String) => PostWarrantiesRequest} name Name.
 * @property {(type: 'seller'|'producer') => PostWarrantiesRequest} type 
 * @property {(period: Integer) => PostWarrantiesRequest} period Warranty time. Default value 12.
 * @property {(shopname: Object) => PostWarrantiesRequest} shopname Name of warranty.
 * @property {(description: Object) => PostWarrantiesRequest} description Warranty description.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutWarrantiesRequest
 * @property {(warranties: Array<Object>) => PutWarrantiesRequest} warranties 
 * @property {(id: String) => PutWarrantiesRequest} id Warranty ID (numeric or text based).
 * @property {(name: String) => PutWarrantiesRequest} name Name.
 * @property {(type: 'seller'|'producer') => PutWarrantiesRequest} type 
 * @property {(period: Integer) => PutWarrantiesRequest} period Warranty time. Default value 12.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetWmsLocationsRequest
 * @property {(locationId: Integer) => GetWmsLocationsRequest} locationId Warehouse location ID
 * @property {(locationCode: String) => GetWmsLocationsRequest} locationCode Storage location code
 * @property {(stockId: Integer) => GetWmsLocationsRequest} stockId Stock ID
 * @property {(returnElements: Array<String>) => GetWmsLocationsRequest} returnElements Elements to be returned by the endpoint. By default all elements are returned. Available values: locationName, locationPath, locationCode, stockId, products
 * @property {(resultsPage: Integer) => GetWmsLocationsRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetWmsLocationsRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(page: Integer, limit: Integer) => GetWmsLocationsRequest} page Define page number and maximum results per page
 * @property {() => Integer} count Returns total numer of results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutWmsStocksdocumentsAcceptMMRequest
 * @property {(id: Integer) => PutWmsStocksdocumentsAcceptMMRequest} id Document identifier.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutWmsStocksdocumentsCloseRequest
 * @property {(type: 'pz'|'pw'|'px'|'rx'|'rw'|'mm') => PutWmsStocksdocumentsCloseRequest} type 
 * @property {(id: Integer) => PutWmsStocksdocumentsCloseRequest} id Document identifier.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} DeleteWmsStocksdocumentsDocumentsRequest
 * @property {(type: 'pz'|'pw'|'px'|'rx'|'rw'|'mm') => DeleteWmsStocksdocumentsDocumentsRequest} type 
 * @property {(id: Integer) => DeleteWmsStocksdocumentsDocumentsRequest} id Document identifier.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetWmsStocksdocumentsDocumentsRequest
 * @property {(stockDocumentType: 'pz'|'pw'|'px'|'rx'|'rw'|'wz'|'mm'|'wz'|'zw') => GetWmsStocksdocumentsDocumentsRequest} stockDocumentType Document type.
 * @property {(stockDocumentStatus: 'open'|'on_the_way'|'close') => GetWmsStocksdocumentsDocumentsRequest} stockDocumentStatus Document status.
 * @property {(stockDocumentsIds: Array<Integer>) => GetWmsStocksdocumentsDocumentsRequest} stockDocumentsIds Document identifier.
 * @property {(stockDocumentsNumbers: Array<String>) => GetWmsStocksdocumentsDocumentsRequest} stockDocumentsNumbers Document number.
 * @property {(productsInPreorder: 'y'|'n') => GetWmsStocksdocumentsDocumentsRequest} productsInPreorder Products available in presales.
 * @property {(dateRange: Object) => GetWmsStocksdocumentsDocumentsRequest} dateRange Date range
 * @property {(resultsPage: Integer) => GetWmsStocksdocumentsDocumentsRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetWmsStocksdocumentsDocumentsRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(dateFrom: DateLike, dateTo: DateLike, dateType: "open"|"modify"|"close"|"stockOperation") => GetWmsStocksdocumentsDocumentsRequest} dates Type of date according to the index results. Possible type values: open, modify, close, stockOperation
 * @property {(page: Integer, limit: Integer) => GetWmsStocksdocumentsDocumentsRequest} page Define page number and maximum results per page
 * @property {() => Integer} count Returns total numer of results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostWmsStocksdocumentsDocumentsRequest
 * @property {(type: 'pz'|'pw'|'px'|'rx'|'rw'|'mm') => PostWmsStocksdocumentsDocumentsRequest} type 
 * @property {(stockId: Integer) => PostWmsStocksdocumentsDocumentsRequest} stockId Target warehouse ID. The list of available warehouses can be downloaded via the method <a href = "en/shop/api/?action=method&function=systemconfig&method=get">#get</a> in gateway <a href = "en/shop/api/?action=documentation&function=systemconfig">SystemConfig</a>.
 * @property {(stockDocumentNumber: String) => PostWmsStocksdocumentsDocumentsRequest} stockDocumentNumber Document number.
 * @property {(stockSourceId: Integer) => PostWmsStocksdocumentsDocumentsRequest} stockSourceId Source warehouse ID. The list of available warehouses can be downloaded via the method <a href = "en/shop/api/?action=method&function=systemconfig&method=get">#get</a> in gateway <a href = "en/shop/api/?action=documentation&function=systemconfig">SystemConfig</a>.
 * @property {(note: String) => PostWmsStocksdocumentsDocumentsRequest} note 
 * @property {(productsInPreorder: 'y'|'n') => PostWmsStocksdocumentsDocumentsRequest} productsInPreorder Products available in presales. Available values: "y" - yes, "n" - no.
 * @property {(delivererId: Integer) => PostWmsStocksdocumentsDocumentsRequest} delivererId Supplier ID.
 * @property {(wnt: 'national_VAT_invoice'|'other_purchase_document'|'invoice_without_VAT'|'imports_from_outside_the_EU') => PostWmsStocksdocumentsDocumentsRequest} wnt Type of purchase document. Available values: "national_VAT_invoice" - National VAT invoice, "other_purchase_document" - Other purchase document, "invoice_without_VAT" - Invoice without VAT (EU), "imports_from_outside_the_EU" - Import from outside EU.
 * @property {(saleDocumentCreationDate: String) => PostWmsStocksdocumentsDocumentsRequest} saleDocumentCreationDate Issue date of purchase document. Correct format is yyyy-mm-dd, e.g. 2007-12-31..
 * @property {(deliveryOnTheWayPlannedDeliveryDate: String) => PostWmsStocksdocumentsDocumentsRequest} deliveryOnTheWayPlannedDeliveryDate Planned date of acceptance of delivery. Correct format is yyyy-mm-dd, e.g. 2007-12-31. Requires parameter: "confirmed=on_the_way".
 * @property {(confirmed: 'open'|'on_the_way') => PostWmsStocksdocumentsDocumentsRequest} confirmed Document status. Available values: "open" - open, "on_the_way" - on the way.
 * @property {(currencyForPurchasePrice: String) => PostWmsStocksdocumentsDocumentsRequest} currencyForPurchasePrice Purchase price currency, e.g. PLN, USD, GBP
 * @property {(priceType: 'brutto'|'netto') => PostWmsStocksdocumentsDocumentsRequest} priceType Settlement by prices. Available values: "brutto" - Gross value, "netto" - Net value
 * @property {(queueType: 'fifo'|'lifo') => PostWmsStocksdocumentsDocumentsRequest} queueType Methods of stock level correction. Available values: "fifo" - first-in, first-out (FIFO), "lifo" - last-in, first-out (LIFO)
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutWmsStocksdocumentsDocumentsRequest
 * @property {(stockDocumentId: Integer) => PutWmsStocksdocumentsDocumentsRequest} stockDocumentId Document identifier.
 * @property {(stockDocumentType: 'pz'|'pw'|'px'|'rx'|'rw'|'mm') => PutWmsStocksdocumentsDocumentsRequest} stockDocumentType Document type. Available values: "pz" - goods received note (GRN), "pw" - internal delivery note (IDN), "px" - goods received correction note (GRX), "rx" - goods despatch note (GRN) , "rw" - goods issued note (GIN), "mm" - inter-warehouse transfer.
 * @property {(stockDocumentNumber: String) => PutWmsStocksdocumentsDocumentsRequest} stockDocumentNumber Number of purchase document
 * @property {(stockId: Integer) => PutWmsStocksdocumentsDocumentsRequest} stockId Target warehouse ID. The list of available warehouses can be downloaded via the method <a href = "en/shop/api/?action=method&function=systemconfig&method=get">#get</a> in gateway <a href = "en/shop/api/?action=documentation&function=systemconfig">SystemConfig</a>.
 * @property {(stockSourceId: Integer) => PutWmsStocksdocumentsDocumentsRequest} stockSourceId Source warehouse ID. The list of available warehouses can be downloaded via the method <a href = "en/shop/api/?action=method&function=systemconfig&method=get">#get</a> in gateway <a href = "en/shop/api/?action=documentation&function=systemconfig">SystemConfig</a>.
 * @property {(note: String) => PutWmsStocksdocumentsDocumentsRequest} note 
 * @property {(productsInPreorder: 'y'|'n') => PutWmsStocksdocumentsDocumentsRequest} productsInPreorder Products available in presales. Available values: "y" - yes, "n" - no.
 * @property {(delivererId: Integer) => PutWmsStocksdocumentsDocumentsRequest} delivererId Supplier ID.
 * @property {(wnt: 'national_VAT_invoice'|'other_purchase_document'|'invoice_without_VAT'|'imports_from_outside_the_EU') => PutWmsStocksdocumentsDocumentsRequest} wnt Type of purchase document. Available values: "national_VAT_invoice" - National VAT invoice, "other_purchase_document" - Other purchase document, "invoice_without_VAT" - Invoice without VAT (EU), "imports_from_outside_the_EU" - Import from outside EU.
 * @property {(saleDocumentCreationDate: String) => PutWmsStocksdocumentsDocumentsRequest} saleDocumentCreationDate Issue date of purchase document. Correct format is yyyy-mm-dd, e.g. 2007-12-31..
 * @property {(deliveryOnTheWayPlannedDeliveryDate: String) => PutWmsStocksdocumentsDocumentsRequest} deliveryOnTheWayPlannedDeliveryDate Planned date of acceptance of delivery. Correct format is yyyy-mm-dd, e.g. 2007-12-31. Requires parameter: "confirmed=on_the_way".
 * @property {(confirmed: 'open'|'on_the_way') => PutWmsStocksdocumentsDocumentsRequest} confirmed Document status. Available values: "open" - open, "on_the_way" - on the way.
 * @property {(currencyForPurchasePrice: String) => PutWmsStocksdocumentsDocumentsRequest} currencyForPurchasePrice Purchase price currency, e.g. PLN, USD, GBP
 * @property {(currencyForPurchasePriceRate: Number) => PutWmsStocksdocumentsDocumentsRequest} currencyForPurchasePriceRate Currency exchange rate (Currency conversion)
 * @property {(currencyForPurchasePriceRateType: 'custom'|'currentDay'|'customDay'|'previousDay') => PutWmsStocksdocumentsDocumentsRequest} currencyForPurchasePriceRateType Type of currency rate. Available values: "custom" - not typical, "currentDay" - the currency rate from the day of issuing a stock document, "customDay" - on a selected day, "previousDay" - the currency rate of a working day preceding the date of the stock document issue.
 * @property {(currencyForPurchasePriceRateDate: String) => PutWmsStocksdocumentsDocumentsRequest} currencyForPurchasePriceRateDate Currency rate of the day. Correct format is yyyy-mm-dd, e.g. 2007-12-31..
 * @property {(priceType: 'brutto'|'netto') => PutWmsStocksdocumentsDocumentsRequest} priceType Settlement by prices. Available values: "brutto" - Gross value, "netto" - Net value.
 * @property {(queueType: 'fifo'|'lifo') => PutWmsStocksdocumentsDocumentsRequest} queueType Methods of stock level correction. Available values: "fifo" - first-in, first-out (FIFO), "lifo" - last-in, first-out (LIFO).
 * @property {(verificationDate: String) => PutWmsStocksdocumentsDocumentsRequest} verificationDate Verification date
 * @property {(verificationUser: String) => PutWmsStocksdocumentsDocumentsRequest} verificationUser Users verification
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetWmsStocksdocumentsOpenedDocumentsRequest
 * @property {(type: 'pz'|'pw'|'px'|'rx'|'rw'|'mm') => GetWmsStocksdocumentsOpenedDocumentsRequest} type 
 * @property {(status: 'open'|'on_the_way'|'all') => GetWmsStocksdocumentsOpenedDocumentsRequest} status 
 * @property {(stockId: Integer) => GetWmsStocksdocumentsOpenedDocumentsRequest} stockId Target warehouse ID. The list of available warehouses can be downloaded via the method <a href = "en/shop/api/?action=method&function=systemconfig&method=get">#get</a> in gateway <a href = "en/shop/api/?action=documentation&function=systemconfig">SystemConfig</a>.
 * @property {(stockSourceId: Integer) => GetWmsStocksdocumentsOpenedDocumentsRequest} stockSourceId Source warehouse ID. The list of available warehouses can be downloaded via the method <a href = "en/shop/api/?action=method&function=systemconfig&method=get">#get</a> in gateway <a href = "en/shop/api/?action=documentation&function=systemconfig">SystemConfig</a>.
 * @property {(dateRange: Object) => GetWmsStocksdocumentsOpenedDocumentsRequest} dateRange Date range
 * @property {(resultsPage: Integer) => GetWmsStocksdocumentsOpenedDocumentsRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetWmsStocksdocumentsOpenedDocumentsRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(dateFrom: DateLike, dateTo: DateLike, dateType: "open"|"modify") => GetWmsStocksdocumentsOpenedDocumentsRequest} dates Type of date according to the index results. Possible type values: open, modify
 * @property {(page: Integer, limit: Integer) => GetWmsStocksdocumentsOpenedDocumentsRequest} page Define page number and maximum results per page
 * @property {() => Integer} count Returns total numer of results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} DeleteWmsStocksdocumentsProductsRequest
 * @property {(products: Array<Object>) => DeleteWmsStocksdocumentsProductsRequest} products Products list.
 * @property {(type: 'pz'|'pw'|'px'|'rx'|'rw'|'mm') => DeleteWmsStocksdocumentsProductsRequest} type 
 * @property {(id: Integer) => DeleteWmsStocksdocumentsProductsRequest} id Document identifier.
 * @property {(product: Integer) => DeleteWmsStocksdocumentsProductsRequest} product Stock keeping unit.
 * @property {(size: String) => DeleteWmsStocksdocumentsProductsRequest} size Product size ID.
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetWmsStocksdocumentsProductsRequest
 * @property {(type: 'pz'|'pw'|'px'|'rx'|'rw'|'mm'|'wz'|'zw') => GetWmsStocksdocumentsProductsRequest} type 
 * @property {(id: Integer) => GetWmsStocksdocumentsProductsRequest} id Document identifier.
 * @property {(results_page: Integer) => GetWmsStocksdocumentsProductsRequest} results_page Result page number.
 * @property {(results_limit: Integer) => GetWmsStocksdocumentsProductsRequest} results_limit Number of results on page.
 * @property {(page: Integer, limit: Integer) => GetWmsStocksdocumentsProductsRequest} page Define page number and maximum results per page
 * @property {() => Integer} count Returns total numer of results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PostWmsStocksdocumentsProductsRequest
 * @property {(products: Array<Object>) => PostWmsStocksdocumentsProductsRequest} products Products list.
 * @property {(type: 'pz'|'pw'|'px'|'rx'|'rw'|'mm') => PostWmsStocksdocumentsProductsRequest} type 
 * @property {(id: Integer) => PostWmsStocksdocumentsProductsRequest} id Document identifier.
 * @property {(product: Integer) => PostWmsStocksdocumentsProductsRequest} product Stock keeping unit.
 * @property {(size: String) => PostWmsStocksdocumentsProductsRequest} size Product size ID.
 * @property {(quantity: Integer) => PostWmsStocksdocumentsProductsRequest} quantity Product quantity.
 * @property {(productPurchasePrice: Number) => PostWmsStocksdocumentsProductsRequest} productPurchasePrice Cost price
 * @property {(locationId: Integer) => PostWmsStocksdocumentsProductsRequest} locationId Warehouse location ID. The list of available warehouse locations can be downloaded via the method <a href = "pl/shop/api/?action=method&function=locations&method=get">#get</a> in gateway <a href = "en/shop/api/?action=documentation&function=locations">Locations</a> .
 * @property {(locationCode: String) => PostWmsStocksdocumentsProductsRequest} locationCode Storage location code
 * @property {(locationTextId: String) => PostWmsStocksdocumentsProductsRequest} locationTextId Warehouse location full path. Use a backslash (\) as a separator, for example: M1\Section name\Location name. The list of available warehouse locations can be downloaded via the method <a href = "pl/shop/api/?action=method&function=locations&method=get">#get</a> in gateway <a href = "en/shop/api/?action=documentation&function=locations">Locations</a> .
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutWmsStocksdocumentsProductsRequest
 * @property {(products: Array<Object>) => PutWmsStocksdocumentsProductsRequest} products Products list.
 * @property {(type: 'pz'|'pw'|'px'|'rx'|'rw'|'mm') => PutWmsStocksdocumentsProductsRequest} type 
 * @property {(id: Integer) => PutWmsStocksdocumentsProductsRequest} id Document identifier.
 * @property {(product: Integer) => PutWmsStocksdocumentsProductsRequest} product Stock keeping unit.
 * @property {(size: String) => PutWmsStocksdocumentsProductsRequest} size Product size ID.
 * @property {(quantity: Integer) => PutWmsStocksdocumentsProductsRequest} quantity Product quantity.
 * @property {(productPurchasePrice: Number) => PutWmsStocksdocumentsProductsRequest} productPurchasePrice Cost price
 * @property {(locationId: Integer) => PutWmsStocksdocumentsProductsRequest} locationId Warehouse location ID. The list of available warehouse locations can be downloaded via the method <a href = "pl/shop/api/?action=method&function=locations&method=get">#get</a> in gateway <a href = "en/shop/api/?action=documentation&function=locations">Locations</a> .
 * @property {(locationCode: String) => PutWmsStocksdocumentsProductsRequest} locationCode Storage location code
 * @property {(locationTextId: String) => PutWmsStocksdocumentsProductsRequest} locationTextId Warehouse location full path. Use a backslash (\) as a separator, for example: M1\Section name\Location name. The list of available warehouse locations can be downloaded via the method <a href = "pl/shop/api/?action=method&function=locations&method=get">#get</a> in gateway <a href = "en/shop/api/?action=documentation&function=locations">Locations</a> .
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutWmsStocksdocumentsRejectMMRequest
 * @property {(id: Integer) => PutWmsStocksdocumentsRejectMMRequest} id Document identifier.
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} DeleteWmsSuppliersRequest
 * @property {(ids: Array<Integer>) => DeleteWmsSuppliersRequest} ids Id
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} GetWmsSuppliersRequest
 * @property {(resultsPage: Integer) => GetWmsSuppliersRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetWmsSuppliersRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(returnProductsCount: Boolean) => GetWmsSuppliersRequest} returnProductsCount Return quantity of products assigned to supplier
 * @property {(names: Array<String>) => GetWmsSuppliersRequest} names Names
 * @property {(ids: Array<Integer>) => GetWmsSuppliersRequest} ids IDs
 * @property {(page: Integer, limit: Integer) => GetWmsSuppliersRequest} page Define page number and maximum results per page
 * @property {() => Integer} count Returns total numer of results
 * @property {function} exec Excecute request
 */

/**
 * @typedef {Object} PutWmsSuppliersRequest
 * @property {(suppliers: Array<Object>) => PutWmsSuppliersRequest} suppliers 
 * @property {(id: Integer) => PutWmsSuppliersRequest} id Id
 * @property {(name: String) => PutWmsSuppliersRequest} name Name.
 * @property {(email: String) => PutWmsSuppliersRequest} email e-mail address. (limit of 50 characters)
 * @property {(phone: String) => PutWmsSuppliersRequest} phone Phone number. (limit of 20 characters)
 * @property {(fax: String) => PutWmsSuppliersRequest} fax Fax. (limit of 20 characters)
 * @property {(street: String) => PutWmsSuppliersRequest} street Address. (limit of 50 characters)
 * @property {(zipCode: String) => PutWmsSuppliersRequest} zipCode ZIP / Post code. (limit of 6 characters)
 * @property {(city: String) => PutWmsSuppliersRequest} city Town / City. (limit of 50 characters)
 * @property {(country: Integer) => PutWmsSuppliersRequest} country Region ID
 * @property {(taxCode: String) => PutWmsSuppliersRequest} taxCode VAT no.. (limit of 13 characters)
 * @property {(averageDeliveryTime: Object) => PutWmsSuppliersRequest} averageDeliveryTime Average delivery time
 * @property {(description: String) => PutWmsSuppliersRequest} description Description. (limit of 255 characters)
 * @property {(orderCompletionTime: Object) => PutWmsSuppliersRequest} orderCompletionTime Order preparation time for shipment
 * @property {(workDays: Array<Object>) => PutWmsSuppliersRequest} workDays Supplier working hours
 * @property {function} append Append current data to array and start modifying next row
 * @property {function} exec Excecute request
 *//**
 * Idosell Gateways.
 * @typedef {Object} Gateways
 * @property {GetClientsBalanceRequest} getClientsBalance Method that enables extracting customer balance information from existing customer accounts.
 * @property {PostClientsBalanceRequest} postClientsBalance Method that allows for customer account balance operations.
 * @property {GetClientsRequest} getClients Method that enables extracting customer account details.
 * @property {PostClientsRequest} postClients Method that enables adding new customer accounts to the IdoSell Shop administration panel.
 * @property {PutClientsRequest} putClients Method enables modifying existing customer account data.
 * @property {GetClientsCrmRequest} getClientsCrm The method allows to download information about customers from the CRM module assigned to stores to which the user has rights.
 * @property {DeleteClientsDeliveryAddressRequest} deleteClientsDeliveryAddress The method allows you to delete unused delivery addresses for customer accounts in the IdoSell Shop administration panel
 * @property {GetClientsDeliveryAddressRequest} getClientsDeliveryAddress Method that enables extracting information about delivery addresses assigned to existing customer accounts.
 * @property {PostClientsDeliveryAddressRequest} postClientsDeliveryAddress Method that enables adding delivery address details to existing customer accounts.
 * @property {PutClientsDeliveryAddressRequest} putClientsDeliveryAddress Method that enables editing the delivery address details for existing customer accounts.
 * @property {PutClientsExternalCodeRequest} putClientsExternalCode Method that enables setting external system codes for existing customer accounts.
 * @property {PutClientsGiftcardsBlockRequest} putClientsGiftcardsBlock Enables gift card blocking
 * @property {DeleteClientsGiftcardsRequest} deleteClientsGiftcards Enables deleting a single or a list of gift cards
 * @property {GetClientsGiftcardsRequest} getClientsGiftcards Enables searching for gift cards and retrieving information about indicated gift cards
 * @property {PostClientsGiftcardsRequest} postClientsGiftcards Enables adding new gift cards with the selected card type
 * @property {PutClientsGiftcardsRequest} putClientsGiftcards Enables editing gift parameters, e.g. changing its balance, validity date, number or PIN
 * @property {GetClientsGiftcardsTypesRequest} getClientsGiftcardsTypes Allows for downloading all types of gift cards defined in the administration panel
 * @property {PutClientsGiftcardsUnblockRequest} putClientsGiftcardsUnblock Enables gift card unblocking
 * @property {GetClientsMembershipCardsRequest} getClientsMembershipCards Method that enables extracting information about loyalty cards available in the administration panel.
 * @property {PutClientsMembershipCardsRequest} putClientsMembershipCards Method that enables assigning loyalty cards to customer accounts.
 * @property {GetClientsNewsletterEmailSMSRequest} getClientsNewsletterEmailSMS Method that enables extracting a list of customer accounts that agreed / did not agree to receiving text message newsletters.
 * @property {GetClientsNewsletterEmailShopsRequest} getClientsNewsletterEmailShops Method that enables extracting a list of customer accounts that agreed / did not agree to receiving email newsletters.
 * @property {DeleteClientsPayerAddressRequest} deleteClientsPayerAddress The method allows you to delete unused buyer addresses for customer accounts in the IdoSell Shop administration panel
 * @property {GetClientsPayerAddressRequest} getClientsPayerAddress The method allows to retrieve buyer's addresses from sales documents, for existing customer accounts in the IdoSell administration panel.
 * @property {PostClientsPayerAddressRequest} postClientsPayerAddress The method allows to add buyer's addresses to sales documents, for existing customer accounts in the IdoSell administration panel.
 * @property {PutClientsPayerAddressRequest} putClientsPayerAddress The method allows to modify buyer's addresses in sales documents, for existing customer accounts in the IdoSell administration panel.
 * @property {GetClientsPricelistsClientsRequest} getClientsPricelistsClients The getClients method returns a list of customer IDs assigned to an individual price list
 * @property {PutClientsPricelistsClientsRequest} putClientsPricelistsClients The setClients method allows you to assign customers to an individual price list
 * @property {DeleteClientsPricelistsRequest} deleteClientsPricelists The delete method enables to delete an individual pricelist. The pricelist must not be associated with any customer. In order to check the clients related to the given group, the getClients method shall be used.
 * @property {GetClientsPricelistsRequest} getClientsPricelists The get method allows you to download individual price lists available in the administration panel
 * @property {PostClientsPricelistsRequest} postClientsPricelists The insert method enables you to add a new individual price list to the administration panel
 * @property {PutClientsPricelistsRequest} putClientsPricelists The update method allows you to change the individual price list.
 * @property {GetClientsPricelistsProductsRequest} getClientsPricelistsProducts The getProducts method enables the retrieval of products from an individual price list together with the price
 * @property {PutClientsPricelistsProductsRequest} putClientsPricelistsProducts The setProducts method allows you to add goods to an individual price list and specify their price
 * @property {PutClientsPricelistsRenameRequest} putClientsPricelistsRename The rename method enables changing the name of an individual price list
 * @property {GetClientsPricesActiveCardRequest} getClientsPricesActiveCard Method that enables getting information about active customer loyalty cards assigned to customer accounts in the administration panel.
 * @property {GetClientsPricesDiscountGroupsRequest} getClientsPricesDiscountGroups Method that enables extracting information about discount groups configured in the administration panel.
 * @property {GetClientsPricesDiscountsRequest} getClientsPricesDiscounts Method that allows for extracting information about individual discounts assigned to customer accounts.
 * @property {PutClientsPricesDiscountsRequest} putClientsPricesDiscounts Method that enables assigning individual discount to existing customer accounts.
 * @property {GetClientsProfitPointsRequest} getClientsProfitPoints Method that enables extracting information about the amount of loyalty points collected by customers in a loyalty program.
 * @property {PostClientsProfitPointsRequest} postClientsProfitPoints Method that allows for adding loyalty points to the balances of existing customer accounts.
 * @property {GetClientsProvinceListRequest} getClientsProvinceList The method allows to retrieve the list of administrative regions available in the IdoSell administration panel.
 * @property {DeleteClientsTagsClearRequest} deleteClientsTagsClear Use this method to delete all tags assigned to a customer
 * @property {DeleteClientsTagsRequest} deleteClientsTags Use this method to delete selected tags assigned to a customer
 * @property {GetClientsTagsRequest} getClientsTags Use this method to retrieve all tags assigned to a client
 * @property {PostClientsTagsRequest} postClientsTags Use this method to add new tags and their associated values to the client
 * @property {PutClientsTagsRequest} putClientsTags The method is used to update the value of the tags assigned to the client. A tag with value 0 is detached from the client
 * @property {GetCouriersAssignedToShippingProfilesRequest} getCouriersAssignedToShippingProfiles Retrieves information about assigned couriers to delivery profiles
 * @property {GetCouriersRequest} getCouriers Method that returns all couriers available for a given country. It also returns information whether the courier service handles personal collections.
 * @property {DeleteCouriersPickupPointsRequest} deleteCouriersPickupPoints The method enables cancelling personal collection points within your own collection points chain. It does not allow for modifying integrated couriers collection points. 
 * @property {GetCouriersPickupPointsRequest} getCouriersPickupPoints The method returns personal collection points within its own network of collection points and for integrated couriers.
 * @property {PostCouriersPickupPointsRequest} postCouriersPickupPoints The method enables adding personal collection points within your own collection points chain. It does not allow for modifying integrated couriers collection points. 
 * @property {PutCouriersPickupPointsRequest} putCouriersPickupPoints The method enables updating personal collection points within your own collection points chain. It does not allow for modifying integrated couriers collection points. 
 * @property {PutDeliveriesDefaultProfilesRequest} putDeliveriesDefaultProfiles The method allows to set the default delivery profile for the given region.
 * @property {GetDeliveriesProfilesRequest} getDeliveriesProfiles Allows to download all of the delivery profiles defined in the administration panel
 * @property {GetDeliveriesRegionsRequest} getDeliveriesRegions The method allows to download a list of regions supporting deliveries.
 * @property {PostDeliveriesRegionsRequest} postDeliveriesRegions Allows you to add a region to the indicated country
 * @property {GetDiscountsGroupsClientsRequest} getDiscountsGroupsClients Returns the list of customer IDs assigned to an indicated discount group. In order to assign a discount group, use setClients method in API Clients.
 * @property {DeleteDiscountsGroupsRequest} deleteDiscountsGroups Allows to remove a discount group. The condition for conducting this process is no customers assigned to the indicated group. In order to check the assigned customers use getClientsAssignedToDiscountGroup method. 
 * @property {GetDiscountsGroupsRequest} getDiscountsGroups Method that enables extracting information about discount groups configured in the administration panel.
 * @property {PostDiscountsGroupsRequest} postDiscountsGroups Allows to add a new discount group in the administration panel. The discount group is added by default with the setting "Discount for products - yes, but different for indicated groups".
 * @property {PutDiscountsGroupsRequest} putDiscountsGroups Allows to change a discount group name
 * @property {DeleteDiscountsGroupsProductsRequest} deleteDiscountsGroupsProducts The method allows the removal of products from a discount group
 * @property {PutDiscountsGroupsProductsRequest} putDiscountsGroupsProducts The method allows products to be added to a discount group and their price to be specified in the discount group
 * @property {PutDiscountsRebatesBlockCardRequest} putDiscountsRebatesBlockCard Allows to block an indicated discount card, eg. when it is assumed that its number has been made available publicly. The blocked card can be unblocked with the method unblockRebateCard.
 * @property {DeleteDiscountsRebatesCardRequest} deleteDiscountsRebatesCard Method allows to quickly delete all the discount codes, which have never been used by customers, from an indicated rebate campaign. Codes which have been used at least once, will not be deleted.
 * @property {PostDiscountsRebatesCardRequest} postDiscountsRebatesCard Allows to upload new card numbers to already existing discount card types in the administration panel. Cards uploaded such way retrieve settings, regarding the discount amount, from the type of cards to which they are uploaded. Every card can also have individual, independent discount settings which can be set in the administration panel..
 * @property {DeleteDiscountsRebatesCodeRequest} deleteDiscountsRebatesCode Allows to quickly delete all the discount codes, which have never been used by customers, from an indicated rebate campaign. Codes which have been used at least once, will not be deleted.
 * @property {PostDiscountsRebatesCodeRequest} postDiscountsRebatesCode Allows to upload new code numbers to already existing rebate campaigns in the administration panel. The codes uploaded in such way retrieve settings, regarding the discount amount, from a campaign to which they are uploaded. Each discount code can also have individual, independent discount settings which can be set in the administration panel.
 * @property {PutDiscountsRebatesUnblockCardRequest} putDiscountsRebatesUnblockCard unblockRebateCard method - allows to unblock discount cards. Block cards with the blockRebateCard method.
 * @property {DeleteEntriesRequest} deleteEntries Enables deleting blog or news entry
 * @property {GetEntriesRequest} getEntries Enables downloading blog or news entry data
 * @property {PostEntriesRequest} postEntries Enables adding blog or news entry 
 * @property {PutEntriesRequest} putEntries Enables changing blog or news entry in the shop
 * @property {GetEntriesPagesToDisplayRequest} getEntriesPagesToDisplay Allows you to download a list of sites on which a blog entry or a news item can be published.
 * @property {GetMenuFilterRequest} getMenuFilter The method returns information about filter settings in menu nodes.
 * @property {PutMenuFilterRequest} putMenuFilter The method allows you to manage filter settings in menu nodes.
 * @property {DeleteMenuRequest} deleteMenu Method that enables deleting existing menu elements.
 * @property {GetMenuRequest} getMenu Method that returns information about menus and menu elements.
 * @property {PostMenuRequest} postMenu Method that enables adding new menu elements.
 * @property {PutMenuRequest} putMenu Method that enables editing existing menu elements.
 * @property {PutMenuSortRequest} putMenuSort Method that enables sorting of menu elements.
 * @property {GetOrdersAnalyticsRequest} getOrdersAnalytics The method is used to retrieve information about the margins of the goods of the order.
 * @property {GetOrdersAuctionDetailsRequest} getOrdersAuctionDetails Method that enables getting information about external listings assigned to orders in the administration panel.
 * @property {PutOrdersClientRequest} putOrdersClient 
 * @property {PutOrdersCourierRequest} putOrdersCourier Method that enables changing the courier handling the shipment for an order.
 * @property {PutOrdersDeliveryAddressRequest} putOrdersDeliveryAddress Method that enables editing the delivery address details for an order in the administration panel.
 * @property {PutOrdersDevideRequest} putOrdersDevide Method for division order
 * @property {DeleteOrdersDocumentsRequest} deleteOrdersDocuments The method allows to delete documents added to the order in the IdoSell administration panel.
 * @property {GetOrdersDocumentsRequest} getOrdersDocuments Method that enables extracting information about documents issued for orders in the administration panel.
 * @property {PostOrdersDocumentsRequest} postOrdersDocuments The method allows to add TIFF, BMP, PNG, JPG, JPEG, GIF or PDF documents to the order in the IdoSell Shop administration panel.
 * @property {GetOrdersExportdocumentsEPPRequest} getOrdersExportdocumentsEPP This method returns sales and warehouse documents in the universal EDI (Electronic Data Interchange) format.
 * @property {GetOrdersExportdocumentsJPKRequest} getOrdersExportdocumentsJPK Method returns sales and warehouse documents in universal JPK format.
 * @property {GetOrdersHandlerRequest} getOrdersHandler Method that enables getting information about the handler currently assigned to an order.
 * @property {PutOrdersHandlerRequest} putOrdersHandler Method that enabled assigning a handler to an order.
 * @property {GetOrdersHistoryRequest} getOrdersHistory Method allows to retrieve orders history from the IdoSell Shop panel
 * @property {DeleteOrdersImagesRequest} deleteOrdersImages Method allows to remove image attachments from the details of the specified order.
 * @property {GetOrdersImagesRequest} getOrdersImages Method allows downloading image attachment data from the details of the specified order.
 * @property {PostOrdersImagesRequest} postOrdersImages Method allows to add image attachments to the details of the specified order.
 * @property {GetOrdersLabelsRequest} getOrdersLabels The method is used to generate parcels and printouts for a courier.
 * @property {GetOrdersOpinionsRequest} getOrdersOpinions The method allows for downloading information about reviews issued for orders available in the IdoSell Shop administration panel.
 * @property {GetOrdersOpinionsRateRequest} getOrdersOpinionsRate Evaluation of the usefulness of opinions issued for orders.
 * @property {ListOrdersRequest} listOrders Method that enables extracting information about orders present in the IdoSell Shop administration panel.
 * @property {GetOrdersRequest} getOrders Method that enables extracting information about orders present in the IdoSell Shop administration panel.
 * @property {PostOrdersRequest} postOrders Method that is used for adding new retail or wholesale orders to a shop in the administration panel.
 * @property {PutOrdersRequest} putOrders Method that enables editing an order in the administration panel. It allows, for example, to change the products included in the order or change its status.
 * @property {GetOrdersPackagesRequest} getOrdersPackages Method that enables getting a list of parcels assigned to an order.
 * @property {PostOrdersPackagesRequest} postOrdersPackages Method that enables editing parcels already assigned to an order.
 * @property {PutOrdersPackagesRequest} putOrdersPackages Method that enables editing parcels already assigned to an order.
 * @property {PutOrdersPickupPointRequest} putOrdersPickupPoint The method allows to change the collection point in the order.
 * @property {GetOrdersPrinterDocumentsRequest} getOrdersPrinterDocuments Method that enables getting a VAT invoice issued for an order added to the administration panel by the IAI POS application.
 * @property {PutOrdersProductsSerialNumbersRequest} putOrdersProductsSerialNumbers Method that enables adding serial numbers to products in an order.
 * @property {PutOrdersProfitMarginRequest} putOrdersProfitMargin Method that enables setting price margins for products in an order.
 * @property {GetOrdersProfitabilityRequest} getOrdersProfitability The method is used to retrieve information about the profitability of an order
 * @property {PutOrdersShippingCostsRequest} putOrdersShippingCosts Method that enables editing the delivery costs for an order in the administration panel.
 * @property {ListOrdersUnfinishedRequest} listOrdersUnfinished It allows you to download information about unclosed orders located in the store's administration panel. Orders with a status of false and lost are considered closed. Orders with a status of false and lost are considered closed.
 * @property {GetOrdersWarehouseRequest} getOrdersWarehouse Method that enables getting information about which warehouse an order is being handled from.
 * @property {PutOrdersWarehouseRequest} putOrdersWarehouse Method that enables setting which warehouse an order is handled from.
 * @property {GetPackagesLabelsRequest} getPackagesLabels The method allows you to download labels for the courier from orders, complaints and returns.
 * @property {PostPackagesLabelsRequest} postPackagesLabels The method is used to generate shipments and printouts for the courier in orders, complaints and returns. When generating a label with a default courier configuration, it is not necessary to complete the shipment configuration options. To generate a custom label, you must additionally forward the shipment configuration options available to the courier in a given event (parcelParameters node). Completable configuration options can be checked using the getPackages method.
 * @property {GetPackagesRequest} getPackages Method that enables getting a list of parcels assigned to an order.
 * @property {PostPackagesRequest} postPackages Method that enables adding parcels to an order.
 * @property {PutPackagesRequest} putPackages Method that enables editing parcels already assigned to an order.
 * @property {PostPaymentsCancelRequest} postPaymentsCancel Method that enables cancelling payments for orders in the administration panel.
 * @property {PostPaymentsCashbackRequest} postPaymentsCashback The method allows to send refund requests (so called cashback) for payments managed by external payment systems which have such option available..
 * @property {PutPaymentsConfirmRequest} putPaymentsConfirm Method that enables accepting payments for orders in the administration panel.
 * @property {GetPaymentsFormsRequest} getPaymentsForms Method that enables getting information about payment methods available in the administration panel.
 * @property {GetPaymentsRequest} getPayments Method that enables getting information about payments for orders in the administration panel.
 * @property {PostPaymentsRequest} postPayments Method that enables adding payments to orders in the administration panel.
 * @property {PutPaymentsRequest} putPayments Method that enables editing payments for orders in the administration panel.
 * @property {GetPaymentsProfilesRequest} getPaymentsProfiles Allows to download all of the payment profiles defined in the administration panel
 * @property {PostPaymentsRepaymentRequest} postPaymentsRepayment Method that enables adding withdrawals for orders in the administration panel.
 * @property {GetProductsSKUbyBarcodeRequest} getProductsSKUbyBarcode The method allows to download, among others, information on identifiers, names and size codes, their available stock quantity and locations in the warehouse based on scanned bar codes.
 * @property {PutProductsAttachmentsRequest} putProductsAttachments Method that enables adding and editing product attachments.
 * @property {GetProductsAuctionsRequest} getProductsAuctions Allows for downloading information about auctions and auction categories to which the product has been assigned (for a maximum of 100 products in one request)
 * @property {DeleteProductsBrandsRequest} deleteProductsBrands The method allows you to remove brands from the administration panel.
 * @property {GetProductsBrandsRequest} getProductsBrands Method that returns information about brands available in the IdoSell Shop administration panel.
 * @property {PostProductsBrandsRequest} postProductsBrands The method allows you to update brands information available in the administration panel.
 * @property {PutProductsBrandsRequest} putProductsBrands The method allows you to update brands information available in the administration panel.
 * @property {GetProductsBrandsFilterRequest} getProductsBrandsFilter The method allows you to download a list of filters for brands (manufacturers) available in the IdoSell administration panel.
 * @property {PutProductsBrandsFilterRequest} putProductsBrandsFilter The method allows you to manage filter settings for brands (manufacturers).
 * @property {PostProductsBundlesRequest} postProductsBundles createBundle method allows to create a new product with a type: set and to assign existing products as a set components. Products added via this gate are hidden from the shop customer by default. To change the visibility of created products use the gate setProducts or set it on a product card in the shop administration panel
 * @property {DeleteProductsBundlesProductsRequest} deleteProductsBundlesProducts removeProductsFromBundle method allows to remove indicated set components
 * @property {PostProductsBundlesProductsRequest} postProductsBundlesProducts addProductsToBundle method allows to add components to existing sets in the administration panel
 * @property {PutProductsBundlesProductsQuantityRequest} putProductsBundlesProductsQuantity setProductsQuantityInBundle method allows to indicate quantity of a set component
 * @property {PutProductsBundlesRenewRequest} putProductsBundlesRenew the renewProductsInBundle method allows you to rebuild components of Sets existing in the administration panel 
 * @property {GetProductsCategoriesRequest} getProductsCategories Method that returns information about categories configured in the administration panel.
 * @property {PutProductsCategoriesRequest} putProductsCategories Method that enables adding new categories to the administration panel as well editing and deleting of existing categories.
 * @property {GetProductsCategoriesIdosellRequest} getProductsCategoriesIdosell Method returns information about IdoSell Categories available in store.
 * @property {GetProductsCodeExistenceRequest} getProductsCodeExistence The method allows to check if a product with the given identification code (panel ID, IAI code, manufacturer code, external system code) exists in the panel.
 * @property {PostProductsCollectionsRequest} postProductsCollections createCollection method allows to create a new product with a type: collection and to assign existing products as a collection components. Products added via this gate are hidden from the shop customer by default. To change the visibility of created products use the gate setProducts or set it on a product card in the shop administration panel
 * @property {DeleteProductsCollectionsProductsRequest} deleteProductsCollectionsProducts removeProductsFromCollection method allows to remove indicated collection components
 * @property {PostProductsCollectionsProductsRequest} postProductsCollectionsProducts addProductsToCollection method allows to add components to existing collections in the administration panel
 * @property {PutProductsCollectionsProductsRequest} putProductsCollectionsProducts setProductsQuantityInCollection method allows to indicate quantity of a collection component
 * @property {PutProductsCollectionsRenewRequest} putProductsCollectionsRenew the renewProductsInCollection method allows you to rebuild existing components of Collections in the administration panel 
 * @property {GetProductsDeliveryTimeRequest} getProductsDeliveryTime The method returns the time needed to prepare the product for shipment
 * @property {GetProductsDescriptionsRequest} getProductsDescriptions Method that returns text elements for a given product, e.g. product name, long and short description, metadata.
 * @property {PutProductsDescriptionsRequest} putProductsDescriptions The method allows for setting text elements for a given product, e.g. product name, long and short description, metadata.
 * @property {PutProductsGroupsMainProductRequest} putProductsGroupsMainProduct The method allows you to change the main product in a group of products.
 * @property {PutProductsGroupsOrderRequest} putProductsGroupsOrder The method allows you to change the order of products in a group of products.
 * @property {PutProductsGroupsSettingsRequest} putProductsGroupsSettings The method allows you to change the settings for displaying products to a group of products .
 * @property {GetProductsIdBySizecodeRequest} getProductsIdBySizecode Method that returns information about product IDs, as well as size IDs and names, based on the provided product external system codes.
 * @property {DeleteProductsImagesRequest} deleteProductsImages This method is used to delete images of products
 * @property {PutProductsImagesRequest} putProductsImages Method used for adding and editing product pictures.
 * @property {GetProductsMarketingAllFacebookCatalogIdsRequest} getProductsMarketingAllFacebookCatalogIds The method allows you to download available Facebook catalogs in a given store.
 * @property {GetProductsMarketingPromotionRequest} getProductsMarketingPromotion The method allows to download a list of active special offers for the given store.
 * @property {PostProductsMarketingPromotionRequest} postProductsMarketingPromotion The method allows you to add promotions from a new module with elements.
 * @property {PutProductsMarketingPromotionRequest} putProductsMarketingPromotion The method allows you to edit the promotion from the new module with the elements.
 * @property {GetProductsMarketingZonesRequest} getProductsMarketingZones Allows for getting information about products assigned to marketing hot spots
 * @property {PutProductsMarketingZonesRequest} putProductsMarketingZones Allows for assigning products to marketing hot spots
 * @property {GetProductsOmnibusPricesRequest} getProductsOmnibusPrices Allows you to download information about the lowest prices before promotions
 * @property {PutProductsOmnibusPricesRequest} putProductsOmnibusPrices Allows for editing product strikethrough price settings
 * @property {DeleteProductsOpinionsRequest} deleteProductsOpinions The method allows to delete the feedback about the commodity from the panel.
 * @property {GetProductsOpinionsRequest} getProductsOpinions The method allows for downloading information about reviews issued for products available in the IdoSell Shop administration panel.
 * @property {PostProductsOpinionsRequest} postProductsOpinions The method allows for adding reviews of products available in the IdoSell Shop administration panel.
 * @property {PutProductsOpinionsRequest} putProductsOpinions The method allows to edit opinions about goods available in the IdoSell Shop administration panel.
 * @property {GetProductsOpinionsRateRequest} getProductsOpinionsRate Evaluation of the usefulness of opinions issued for products.
 * @property {DeleteProductsParametersRequest} deleteProductsParameters The method allows you to delete parameters and their values (for parameters that are not pinned to any product)..
 * @property {GetProductsParametersRequest} getProductsParameters Method that enables adding and editing of sections and parameters, modifying their values and setting their order.
 * @property {PutProductsParametersRequest} putProductsParameters Method that enables adding and editing of sections and parameters, modifying their values and setting their order.
 * @property {DeleteProductsRequest} deleteProducts Method used for deleting products from the IdoSell Shop administration panel.
 * @property {ListProductsRequest} listProducts Method that enables extracting information about non-deleted products available in the administration panel
 * @property {GetProductsRequest} getProducts Method that enables extracting information about non-deleted products available in the administration panel. 
 * @property {PostProductsRequest} postProducts The method is used to add products
 * @property {PutProductsRequest} putProducts Method that enables editing and adding new products to the administration panel.
 * @property {DeleteProductsProductsToFacebookCatalogRequest} deleteProductsProductsToFacebookCatalog The method allows you to add products to the Facebook catalog.
 * @property {GetProductsProductsToFacebookCatalogRequest} getProductsProductsToFacebookCatalog The method allows you to retrieve products assigned to the Facebook catalog.
 * @property {PostProductsProductsToFacebookCatalogRequest} postProductsProductsToFacebookCatalog The method allows you to add products to the Facebook catalog.
 * @property {DeleteProductsProductsToPromotionRequest} deleteProductsProductsToPromotion The method allows to remove the products from the promotion.
 * @property {PostProductsProductsToPromotionRequest} postProductsProductsToPromotion The method allows to add products to an existing special offer.
 * @property {GetProductsQuestionsRequest} getProductsQuestions The method allows you to download a list of questions to products available in the IdoSell Shop administration panel.
 * @property {PutProductsQuestionsRequest} putProductsQuestions The method allows you to add and edit questions to products available in the IdoSell Shop administration panel.
 * @property {GetProductsReservationsRequest} getProductsReservations It allows to download information about product reservations in orders (for up to 100 products in one request).
 * @property {PostProductsRestoreRequest} postProductsRestore The method is used to restore deleted products
 * @property {DeleteProductsSeriesRequest} deleteProductsSeries Method allows you to delete a series of products available in the IdoSell administration panel.
 * @property {GetProductsSeriesRequest} getProductsSeries Method returns information about the product series available in the IdoSell administration panel.
 * @property {PutProductsSeriesRequest} putProductsSeries Method allows you to update information about product series available in the IdoSell administration panel.
 * @property {GetProductsSeriesFilterRequest} getProductsSeriesFilter Method allows you to retrieve a list of filters for a series of products available in the IdoSell administration panel..
 * @property {PutProductsSeriesFilterRequest} putProductsSeriesFilter The method allows you to manage the filter settings for the series..
 * @property {DeleteProductsSizesRequest} deleteProductsSizes The method is used to remove sizes
 * @property {GetProductsSizesRequest} getProductsSizes Method that returns information about product sizes configured in the administration panel
 * @property {PutProductsSizesRequest} putProductsSizes This method allows you to edit the size-dependent data
 * @property {PutProductsStockQuantityRequest} putProductsStockQuantity MetodaPozwalaNaEdycjeDanychDotyczacychIlosci
 * @property {GetProductsStocksRequest} getProductsStocks Method that enables getting information about product stock levels and warehouse locations.
 * @property {PutProductsStocksRequest} putProductsStocks Method that enables setting product stock levels and warehouse locations.
 * @property {GetProductsStrikethroughPricesRequest} getProductsStrikethroughPrices Allows for getting information about product strikethrough price settings
 * @property {PutProductsStrikethroughPricesRequest} putProductsStrikethroughPrices Allows for editing product strikethrough price settings
 * @property {PutProductsSupplierCodeRequest} putProductsSupplierCode The method allows to edit supplier data in the IdoSell Shop administration panel.
 * @property {PutProductsSupplierProductDataRequest} putProductsSupplierProductData The method allows you to edit the commodity data related to its suppliers.
 * @property {PostProductsSynchronizationFileRequest} postProductsSynchronizationFile The method allows you to upload to the goods synchronization module, the offer in a file in IOF 3.0 format.
 * @property {PutProductsSynchronizationFinishUploadRequest} putProductsSynchronizationFinishUpload Method informs commodity synchronization module that uploading of files is complete.
 * @property {PostRefundsAddAutomaticRefundRequest} postRefundsAddAutomaticRefund Method allows you to add automatic refund of payments for returns and rma.
 * @property {PostRefundsAddAutomaticRefundForOrderRequest} postRefundsAddAutomaticRefundForOrder Method allows you to add automatic refund for order.
 * @property {PostRefundsAddManualRefundRequest} postRefundsAddManualRefund Method allows you to add manual refund for return and rma.
 * @property {PutRefundsCancelRefundRequest} putRefundsCancelRefund Method allows you to cancel refund.
 * @property {PutRefundsConfirmRefundRequest} putRefundsConfirmRefund Method allows you to confirm refund.
 * @property {GetRefundsGetPossibleAutoRefundsRequest} getRefundsGetPossibleAutoRefunds Method returns Automatic refunds possible.
 * @property {GetRefundsGetRefundStatusRequest} getRefundsGetRefundStatus Method returns refund status.
 * @property {GetRefundsRetrieveRefundsListRequest} getRefundsRetrieveRefundsList Method returns a list of incomplete refunds.
 * @property {PutRefundsUpdateRefundRequest} putRefundsUpdateRefund Method allows you to update refund.
 * @property {GetReturnsRequest} getReturns Method that enables getting information about returns issued for orders in the administration panel.
 * @property {PutReturnsRequest} putReturns Method that enables editing returns issued for orders in the administration panel.
 * @property {PutReturnsSerialNumberRequest} putReturnsSerialNumber Method that enables setting serial numbers for products included in returns issued for orders in the administration panel.
 * @property {GetReturnsStatusesRequest} getReturnsStatuses Allows to download all configurable return statuses
 * @property {GetRmaRequest} getRma This get method allows you to retrieve data about existing claims
 * @property {PutRmaRequest} putRma This update method allows to update the data in existing complaints
 * @property {GetRmaStatusesRequest} getRmaStatuses Allows to download all possible complaint statuses
 * @property {DeleteSizechartsRequest} deleteSizecharts The method allows the removal of size charts.
 * @property {GetSizechartsRequest} getSizecharts The method allows size charts to be downloaded.
 * @property {PutSizechartsRequest} putSizecharts The method allows the size charts settings to be updated.
 * @property {GetSizesRequest} getSizes Method that returns information about product sizes configured in the administration panel. List of size groups (with sizes that belong to particular group) is returned as a result.
 * @property {PutSizesRequest} putSizes Method that enables creating, deleting and editing product sizes in the administration panel.
 * @property {GetSystemConfigRequest} getSystemConfig Method is used for extracting information about a shop and its most important configuration settings.
 * @property {PutSystemConfigRequest} putSystemConfig The method is used to manage the most important settings in the store and in the panel. It enables, among others, configuration of tax and billing settings and configuration of warehouse management.
 * @property {GetSystemCurrenciesRequest} getSystemCurrencies This method returns the current exchange rate in relation to the currency set in the administration panel.
 * @property {PutSystemCurrenciesRequest} putSystemCurrencies Method that allows for setting currency exchange rates in relation to the currency set in the administration panel.
 * @property {GetSystemProcessesAutomationRequest} getSystemProcessesAutomation It allows you to download the current automation processes configuration .
 * @property {PutSystemProcessesAutomationRequest} putSystemProcessesAutomation The method is used for edit of processes automation settings .
 * @property {GetSystemServerLoadRequest} getSystemServerLoad This method returns server status information which is useful in determining whether the server is currently overloaded.
 * @property {GetSystemServerTimeRequest} getSystemServerTime Method that returns the current server time, which is essential for authentication.
 * @property {GetSystemShopsDataRequest} getSystemShopsData Method is used for extracting information about a shop and its most important configuration settings.
 * @property {GetSystemUnitsRequest} getSystemUnits The method allows units of measurement to be downloaded from the IdoSell administration panel.
 * @property {PutSystemUnitsRequest} putSystemUnits The method allows existing units of measurement to be updated to the IdoSell administration panel.
 * @property {GetSystemUsersRequest} getSystemUsers Method that returns information about IdoSell Shop administration panel users.
 * @property {PutVouchersBlockRequest} putVouchersBlock Enables gift voucer blocking
 * @property {GetVouchersTypesRequest} getVouchersTypes Allows for downloading all discount code campaigns defined in the administration panel
 * @property {PutVouchersUnblockRequest} putVouchersUnblock Enables gift vouchers unblocking
 * @property {DeleteVouchersRequest} deleteVouchers Enables deleting a single or a list of gift vouchers
 * @property {GetVouchersRequest} getVouchers Enables searching for vouchers and retrieving information about indicated vouchers
 * @property {PostVouchersRequest} postVouchers Enables adding new gift vouchers with the selected voucher type
 * @property {PutVouchersRequest} putVouchers Enables editing gift voucher, e.g. changing its balance, validity date or number (only for unused vouchers)
 * @property {GetWarrantiesCountTotalRequest} getWarrantiesCountTotal Method that enables getting the number of product guarantees available in the administration panel.
 * @property {PutWarrantiesLanguageDataRequest} putWarrantiesLanguageData Method that enables editing product warranty language settings.
 * @property {DeleteWarrantiesRequest} deleteWarranties Method that enables deleting product warranties from the administration panel.
 * @property {GetWarrantiesRequest} getWarranties Method that enables getting a list of product warranties available in the administration panel.
 * @property {PostWarrantiesRequest} postWarranties Method that enables adding product warranties to the administration panel.
 * @property {PutWarrantiesRequest} putWarranties Method that enables editing product warranties available in the administration panel.
 * @property {GetWmsLocationsRequest} getWmsLocations The method allows to download information about a selected location or all locations in a given warehouse together with a list of product IDs located in these locations.
 * @property {PutWmsStocksdocumentsAcceptMMRequest} putWmsStocksdocumentsAcceptMM The method enables the MM document to be received at the target warehouse.
 * @property {PutWmsStocksdocumentsCloseRequest} putWmsStocksdocumentsClose Method that enables closing warehouse documents.
 * @property {DeleteWmsStocksdocumentsDocumentsRequest} deleteWmsStocksdocumentsDocuments Method that enables deleting open warehouse documents.
 * @property {GetWmsStocksdocumentsDocumentsRequest} getWmsStocksdocumentsDocuments The method allows for downloading a list of warehouse documents.
 * @property {PostWmsStocksdocumentsDocumentsRequest} postWmsStocksdocumentsDocuments Method that enables warehouse document creation.
 * @property {PutWmsStocksdocumentsDocumentsRequest} putWmsStocksdocumentsDocuments The method allows for warehouse documents edit .
 * @property {GetWmsStocksdocumentsOpenedDocumentsRequest} getWmsStocksdocumentsOpenedDocuments Method that enables getting a list of open warehouse documents.
 * @property {DeleteWmsStocksdocumentsProductsRequest} deleteWmsStocksdocumentsProducts Method that enables deleting products from warehouse documents.
 * @property {GetWmsStocksdocumentsProductsRequest} getWmsStocksdocumentsProducts Method that enables getting a list of products present on a warehouse document.
 * @property {PostWmsStocksdocumentsProductsRequest} postWmsStocksdocumentsProducts Method that enables adding products to warehouse documents.
 * @property {PutWmsStocksdocumentsProductsRequest} putWmsStocksdocumentsProducts Method that enables, amongst others, editing the quantity of a given product on a warehouse document.
 * @property {PutWmsStocksdocumentsRejectMMRequest} putWmsStocksdocumentsRejectMM The method allows to withdraw the MM document to the source warehouse.
 * @property {DeleteWmsSuppliersRequest} deleteWmsSuppliers The method allows for the removal of suppliers..
 * @property {GetWmsSuppliersRequest} getWmsSuppliers The method allows to download a list of suppliers along with information about the number of products assigned to them.
 * @property {PutWmsSuppliersRequest} putWmsSuppliers The method allows information about suppliers to be updated, including address details, description, order preparation time or supplier working hours..
 */

export const DEFAULT_VERSION = 1;