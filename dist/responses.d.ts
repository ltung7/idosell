type PagedResponse = {
    /** @description Number of all results found */
    resultsNumberAll: number;
    /** @description Number of pages of results found */
    resultsNumberPage: number;
    /** @description Page with results number. Numeration starts from 0 */
    resultsPage: number;
    /** @description Number of results on page. Value from 1 to 100 */
    resultsLimit: number;
}

type PagedSnakecaseResponse = {
    /** @description Total number of found elements. */
    results_number_all: number;
    /** @description Number of pages of results found. */
    results_number_page: number;
    /** @description Page with results number. Numeration starts from 0. */
    results_page: number;
    /** @description Number of results on page. Value from 1 to 100. */
    results_limit: number;
}

type FaultCodeString = {
    /** @description Error code. */
    faultCode: number;
    /** @description Error description. */
    faultString: string;
}

export type SearchOrdersResponse = {
    Results: {
        /** @description Order ID i.e. login-1 */
        orderId: string;
        /** @description Order note supported by IAI Bridge. */
        orderBridgeNote: string;
        /** @description Order serial number. i.e. 12345 */
        orderSerialNumber: number;
        /** @description Order type. List of values: "p" - wholesale order placed in panel, "t" - wholesale order placed in shop, "n" - retail order placed in shop, "r" - retail order placed in panel. */
        orderType: "p" | "t" | "n" | "r";
        /** @description Customer data. */
        clientResult: {
            /** @description Client's billing address' data. */
            clientBillingAddress: {
                /** @description Customer's first name. */
                clientFirstName: string;
                /** @description Customer's last name. */
                clientLastName: string;
                /** @description Customer Tax no. */
                clientNip: string;
                /** @description Customer's company name. */
                clientFirm: string;
                /** @description Product suggestion. */
                clientAdditional: string;
                /** @description Street and number. */
                clientStreet: string;
                /** @description Customer's postal code. */
                clientZipCode: string;
                /** @description Customer's city. */
                clientCity: string;
                /** @description Region name takes priority over clientCountryId. */
                clientCountryName: string;
                /** @description Country ID in accordance with ISO-3166. */
                clientCountryId: string;
                /** @description Cell phone. */
                clientPhone1: string;
                /** @description Land line. */
                clientPhone2: string;
                /** @description Administrative region code. */
                clientProvinceId: string;
                /** @description Administrative region. */
                clientProvince: string;
            };
            /** @description Delivery address data. */
            clientDeliveryAddress: {
                /** @description Delivery address ID. */
                clientDeliveryAddressId: string;
                /** @description Recipient's first name. */
                clientDeliveryAddressFirstName: string;
                /** @description Recipient's last name. */
                clientDeliveryAddressLastName: string;
                /** @description Company name. */
                clientDeliveryAddressFirm: string;
                /** @description Recipient street and number. */
                clientDeliveryAddressStreet: string;
                /** @description Recipient's postal code. */
                clientDeliveryAddressZipCode: string;
                /** @description Recipient's city. */
                clientDeliveryAddressCity: string;
                /** @description Recipient's country. */
                clientDeliveryAddressCountry: string;
                /** @description Country code in ISO 3166-1 standard. */
                clientDeliveryAddressCountryId: string;
                /** @description Cell phone. */
                clientDeliveryAddressPhone1: string;
                /** @description Land line. */
                clientDeliveryAddressPhone2: string;
                /** @description Administrative region code. */
                clientDeliveryAddressProvinceId: string;
                /** @description Administrative region. */
                clientDeliveryAddressProvince: string;
                /** @description Type of delivery address resulting from the type of delivery e.g. collection point. Available values: "client" - Address provided by customer to which he/she wishes to receive the shipment, "pickupPoint"- The address of the pickup point selected by the customer from which the customer wishes to pick up the order, "warehouse" - The address of the warehouse selected by the customer from which the customer wishes to pick up the order. */
                clientDeliveryAddressType: "client" | "pickupPoint" | "warehouse";
                /** @description Internal Receiving Point Identifier. */
                clientDeliveryAddressPickupPointInternalId: number;
            };
            clientPickupPointAddress: {
                /** @description Collection point ID. */
                pickupPointId: string;
                /** @description Town / City. */
                city: string;
                /** @description Address. */
                street: string;
                /** @description ZIP / Post code. */
                zipCode: string;
                description: string;
                /** @description Latitude. */
                latitude: number;
                /** @description Longitude. */
                longitude: number;
                /** @description Name. */
                name: string;
            };
            /** @description Buyer's address data. */
            payerAddress: {
                /** @description Buyer's address id. */
                payerAddressId: string;
                /** @description Buyer's first name. */
                payerAddressFirstName: string;
                /** @description Buyer's last name. */
                payerAddressLastName: string;
                /** @description Company name. */
                payerAddressFirm: string;
                /** @description Customer VAT ID. */
                payerAddressNip: string;
                /** @description Buyer's street name and house number. */
                payerAddressStreet: string;
                /** @description Buyer's postal code. */
                payerAddressZipCode: string;
                /** @description Buyer's city. */
                payerAddressCity: string;
                /** @description Buyer's country. */
                payerAddressCountry: string;
                /** @description Country code in the ISO 3166-1 A2 standard. */
                payerAddressCountryId: string;
                /** @description Buyer's telephone number. */
                payerAddressPhone: string;
            };
            /** @description Data of customer account in store. */
            clientAccount: {
                /** @description Unique client's number. */
                clientId: number;
                /** @description Customer's login. */
                clientLogin: string;
                /** @description E-mail address. */
                clientEmail: string;
                /** @description Cell phone. */
                clientPhone1: string;
                /** @description Land line. */
                clientPhone2: string;
                /** @description External system code. */
                clientCodeExternal: string;
            };
            /** @description End customer details. */
            endClientAccount: {
                /** @description Unique client's number. */
                clientId: number;
                /** @description Customer's login. */
                clientLogin: string;
                /** @description E-mail address. */
                clientEmail: string;
                /** @description Cell phone. */
                clientPhone1: string;
                /** @description Land line. */
                clientPhone2: string;
                /** @description External system code. */
                clientCodeExternal: string;
            };
        };
        /** @description Order data. */
        orderDetails: {
            /** @description Flag informing on order registration or completion in external program through API. Allowed values. "none" - order was not registered in external program, "registered" - order was registered in external program, "realized" - order was completed in external program, "registered_pos" - order was registered in external program, "realized_pos" - order was completed in external program. */
            apiFlag: "none" | "registered" | "realized" | "registered_pos" | "realized_pos" | "registration_fault";
            /** @description Order status. Allowed values: "finished_ext" - order status: completed in FA application, "finished" - completed, "new" - not handled, "payment_waiting" - awaiting payment, "delivery_waiting" - awaiting delivery, "on_order" - in progress, "packed" - being picked, "packed_fulfillment" - being picked - fulfilment, "packed_ready" - packed, "ready" - ready, "wait_for_dispatch" - awaiting dispatch date, "suspended" - on hold, "joined" - merged, "missing" - missing, "lost" - lost, "false" - false, "canceled" - Customer canceled. */
            orderStatus: string;
            dropshippingOrderStatus: string;
            /** @description Type of order confirmation. Confirmations listing: "none" - order unconfirmed , "email" - order confirmed by e-mail, "phone_client" - order confirmed by phone call made by client, "phone_service" - order confirmed by phone call made by staff, "postauction" - order confirmed by auction return page, "willingness" - confirmed by willingness to buy letter, "auctionfod" - confirmed by after-sales form Allegro. */
            orderConfirmation: string;
            /** @description Date of order placing in YYYY-MM-DD HH:MM:SS format. */
            orderAddDate: string;
            /** @description Date of order sending in YYYY-MM-DD HH:MM:SS format. */
            orderDispatchDate: string;
            receivedDate: string;
            /** @description Order handling time in seconds. */
            orderPrepareTime: string;
            /** @description Customer comments on order. */
            clientNoteToOrder: string;
            /** @description Customer remarks for courier. */
            clientNoteToCourier: string;
            /** @description Order payment data. */
            payments: {
                /** @description Order payment method. Allowed values. "cash_on_delivery" - cash on delivery, "prepaid" - prepayment, "tradecredit" - Trade credit. */
                orderPaymentType: string;
                /** @description Number of days. */
                orderPaymentDays: number;
                /** @description Accrued discount. */
                orderRebatePercent: number;
                /** @description Information on order value in currency of order adding. */
                orderCurrency: {
                    /** @description Currency ID */
                    currencyId: string;
                    /** @description Currency average rate set for order (by default, an average rate of order adding date, if it wasn't manually changed). */
                    orderCurrencyValue: number;
                    /** @description Currency scaler. */
                    orderCurrencyScale: number;
                    /** @description Panel billing currency exchange rate in relation to billing currency in the shop . */
                    billingCurrencyRate: number;
                    /** @description Products cost. */
                    orderProductsCost: number;
                    /** @description Shipping costs. */
                    orderDeliveryCost: number;
                    /** @description Additional charge for selected payment method. */
                    orderPayformCost: number;
                    /** @description Additional fee for insurance. */
                    orderInsuranceCost: number;
                };
                /** @description Information on order value in shop account currency. */
                orderBaseCurrency: {
                    billingCurrency: string;
                    /** @description Products cost. */
                    orderProductsCost: number;
                    /** @description Shipping costs. */
                    orderDeliveryCost: number;
                    /** @description Delivery VAT. */
                    orderDeliveryVat: number;
                    /** @description Additional charge for selected payment method. */
                    orderPayformCost: number;
                    /** @description VAT for additional fee for the chosen form of payment. */
                    orderPayformVat: number;
                    /** @description Additional fee for insurance. */
                    orderInsuranceCost: number;
                    /** @description Insurance VAT rate (in percents). */
                    orderInsuranceVat: number;
                };
                /** @description Order currency squaring method. "gross" - calculated in gross prices, "net" - squared in net prices. */
                orderWorthCalculateType: "gross" | "net";
                /** @description Information if the VAT for the current order was calculated: "y" - yes, "n" - no. */
                orderVatExists: string;
            };
            /** @description Information about prepayment for the order. */
            prepaids: {
                /** @description Order payment identifier. */
                prepaidId: number;
                /** @description Payment number for order. */
                paymentOrdinalNumber: number;
                /** @description Payment number - [order no.]-[payment no.], i.e. 1234-1. */
                paymentNumber: string;
                /** @description Date of payment addition. */
                paymentAddDate: string;
                /** @description Client's payment modification date. */
                paymentModifiedDateByClient: string;
                /** @description Payment modification date made by shop staff. */
                paymentModifiedDateByShop: string;
                /** @description Payment status. */
                paymentStatus: string;
                /** @description Transaction type: "payment" - payment, "advance" - advance payment, "repayment" - return, "fee" - handling fee. */
                paymentType: "payment" | "advance" | "repayment" | "fee";
                /** @description Form of payment ID. */
                payformId: number;
                /** @description Name of payment form. */
                payformName: string;
                /** @description Account. */
                payformAccount: string;
                /** @description Payment amount. */
                paymentValue: number;
                /** @description Currency ID */
                currencyId: string;
                /** @description Number of voucher used in a payment. */
                voucherNumber: string;
                /** @description Number of gift card used in a payment. */
                giftCardNumber: string;
            }[];
            /** @description Order source data. */
            orderSourceResults: {
                /** @description order source type - possible values:. "self_added" - Orders from panel, "shop" - Orders from shop, "search_engine" - Orders from search engines, "auction" - Orders from auctions, "advertisement_campaign" - Advertisement campaigns, "price_comparer" - Price comparison sites, "affiliate_program" - Affiliate programme, "api" - Order from API, "eletronic_offer" - Order from ODT price lst, "cpa" - Order from CPA program, "refferer_site" - Order from reference sites, "pos" - Orders from POS, "marketplace" - Order from the Marketplace, "iai_ads" - Orders from IAI Ads */
                orderSourceType: string;
                /** @description Shop Id */
                shopId: number;
                /** @description Auction site order comes from. Auction sites listing: "allegro" - Allegro.pl, "testwebapi" - Allegro.pl test site, "ebay" - eBay. */
                auctionsServiceName: string;
                /** @description Detailed information on order source. */
                orderSourceDetails: {
                    /** @description order source type - possible values:. "self_added" - Orders from panel, "shop" - Orders from shop, "search_engine" - Orders from search engines, "auction" - Orders from auctions, "advertisement_campaign" - Advertisement campaigns, "price_comparer" - Price comparison sites, "affiliate_program" - Affiliate programme, "api" - Order from API, "eletronic_offer" - Order from ODT price lst, "cpa" - Order from CPA program, "refferer_site" - Order from reference sites, "pos" - Orders from POS, "marketplace" - Order from the Marketplace, "iai_ads" - Orders from IAI Ads */
                    orderSourceType: string;
                    /** @description Exact source name. */
                    orderSourceName: string;
                    /** @description Numerical ID of order source type. */
                    orderSourceTypeId: number;
                    /** @description Numerical ID of order source. */
                    orderSourceId: number;
                    entryProductIdBeforeOrder: number;
                    sourcePageUrl: string;
                    /** @description The order ID of the external service */
                    orderExternalId: string;
                    /** @description Order from the InPost Fresh marketplace */
                    fresh: "y" | "n";
                    /** @description Order supported by InPost fulfillment */
                    fulfillment: "y" | "n";
                };
                preorderSourcesDetails: {
                    /** @description order source type - possible values:. "self_added" - Orders from panel, "shop" - Orders from shop, "search_engine" - Orders from search engines, "auction" - Orders from auctions, "advertisement_campaign" - Advertisement campaigns, "price_comparer" - Price comparison sites, "affiliate_program" - Affiliate programme, "api" - Order from API, "eletronic_offer" - Order from ODT price lst, "cpa" - Order from CPA program, "refferer_site" - Order from reference sites, "pos" - Orders from POS, "marketplace" - Order from the Marketplace, "iai_ads" - Orders from IAI Ads */
                    orderSourceType: string;
                    /** @description Exact source name. */
                    orderSourceName: string;
                    /** @description Numerical ID of order source type. */
                    orderSourceTypeId: number;
                    /** @description Numerical ID of order source. */
                    orderSourceId: number;
                    entryDate: string;
                }[];
            };
            /** @description Data of auction, order comes from (only if it comes from auction). */
            auctionInfo: {
                /** @description Account ID on auction site. */
                auctionClientId: string;
                /** @description Account login on auction site. */
                auctionClientLogin: string;
                /** @description #!TablicaNumerowAukcjiDoZamowienia!#. */
                auctionItemsIds: {
                    /** @description Auction number. */
                    auctionItemId: string;
                }[];
                /** @description The customer's email address at the auction service. */
                auctionClientEmail: string;
            };
            /** @description Consignment data. */
            dispatch: {
                /** @description Courier ID. */
                courierId: number;
                /** @description Name of the supplier of the shipment. */
                courierName: string;
                /** @description Courier via webservice. */
                courierWebserviceOnly: boolean;
                /** @description Shipment ID. */
                deliveryPackageId: string;
                /** @description Selected delivery date. */
                deliveryDate: string;
                /** @description Additional information on delivery date. */
                deliveryDateAdditional: string;
                /** @description Estimated date of shipment of the order. */
                estimatedDeliveryDate: string;
                /** @description Parcel weight. */
                deliveryWeight: number;
            };
            /** @description The list of products returned due to a gate call */
            productsResults: {
                /** @description Product IAI code */
                productId: number;
                /** @description Product name. */
                productName: string;
                /** @description External product system code */
                productCode: string;
                /** @description Name of the parameter value, e.g. orange, green, red */
                versionName: string;
                /** @description Size identifier */
                sizeId: string;
                /** @description Size name */
                sizePanelName: string;
                /** @description External product system code for size. */
                productSizeCodeExternal: string;
                /** @description Stock ID */
                stockId: number;
                /** @description Serial number of the product. */
                productSerialNumber: string;
                /** @description Product quantity. */
                productQuantity: number;
                /** @description Weight. */
                productWeight: number;
                /** @description Value of VAT */
                productVat: number;
                /** @description Is product VAT free Allowed values "y" - yes, "n" - no. */
                productVatFree: string;
                /** @description Gross price of the product in the currency of the administration panel. */
                productPanelPrice: number;
                /** @description Net price of the product in the currency of the administration panel. */
                productPanelPriceNet: number;
                /** @description Product gross price of order in order currency. */
                productOrderPrice: number;
                /** @description Product net price of order in order currency. */
                productOrderPriceNet: number;
                /** @description Product gross price of order in shop account currency. */
                productOrderPriceBaseCurrency: number;
                /** @description Product net price of order in shop account currency. */
                productOrderPriceNetBaseCurrency: number;
                /** @description List of product suggestions . */
                orderAdditionalList: {
                    /** @description Product suggestion. */
                    orderAdditional: {
                        /** @description Name of suggestion. */
                        orderAdditionalName: string;
                        /** @description Value of suggestion. */
                        orderAdditionalValue: string;
                    };
                };
                /** @description Client's remarks on product. */
                remarksToProduct: string;
                /** @description Product selling mode. Available values: "money", "gift", "points". */
                orderSalesMode: "money" | "gift" | "points";
                /** @description A set's ID. */
                bundleId: number;
                /** @description Serial numbers. */
                productSerialNumbers: string;
                /** @description Additional information. */
                productOrderAdditional: string;
                /** @description Item in basket. */
                basketPosition: number;
                /** @description price information. */
                productPriceLog: string;
                /** @description Information about the selected parameters in the configurator. */
                priceFormulaParameters: {
                    /** @description Parameter ID */
                    parameterId: string;
                    /** @description Parameter name. */
                    parameterName: string;
                    /** @description Parameter values */
                    parameterValues: {
                        valueId: string;
                        valueName: string;
                    }[];
                }[];
            }[];
            /** @description Parameter determines if product has been removed from stock. List of values: "y" - removed from stock, "n" - put in stock. */
            productRemovedInStock: "y" | "n";
            /** @description Stock ID */
            stockId: number;
            /** @description Customer asked for invoice. List of parameters: "y" - yes (paper invoicing ), "e" - yes (electronic invoicing ), "n" - no. */
            clientRequestInvoice: string;
            /** @description Delivery address ID. */
            clientDeliveryAddressId: number;
            /** @description Note to the order. */
            orderNote: string;
            /** @description Information on used discount code. */
            discountCode: {
                /** @description Campaign ID. */
                campaignId: string;
                /** @description Name of code. */
                discountCodeName: string;
                /** @description Accrued discount */
                discountCodeValue: string;
            };
            /** @description Discount card */
            discountCard: {
                /** @description Name of card */
                discountCardName: string;
            };
            /** @description Order handler. */
            orderOperatorLogin: string;
            /** @description Order picker. */
            orderPackingPersonLogin: string;
            /** @description Sale date. ISO 8602 format. */
            purchaseDate: string;
            /** @description Modification date in YYYY-MM-DD HH:MM:SS format . */
            orderChangeDate: string;
        };
        /** @description Information on error that occurred during gate call. */
        errors: FaultCodeString[];
    }[];
} & PagedResponse;

export type SearchProductsResponse = {
    /** @description Object contains detailed information on result of operation. */
    results: {
        /** @description Product IAI code */
        productId: number;
        /** @description External product system code. */
        productDisplayedCode?: string;
        productIsDeleted?: string;
        /** @description Annotation. */
        productNote?: string;
        /** @description PKWiU [PCPandS]. */
        productTaxCode?: string;
        /** @description Brand ID */
        producerId?: number;
        /** @description Brand name */
        producerName?: string;
        /** @description IdoSell Category ID */
        categoryIdoSellId?: number;
        /** @description IdoSell Category pathname */
        categoryIdoSellPath?: string;
        /** @description Category id */
        categoryId?: number;
        /** @description Category name */
        categoryName?: string;
        /** @description Currency ID */
        currencyId?: string;
        /** @description CN/TARIC */
        cnTaricCode?: string;
        /** @description Country of origin. Country code in the ISO 3166-1 A2 standard */
        countryOfOrigin?: string;
        /** @description Currency, in which product prices are stored. */
        productCurrenciesShops?: {
            /** @description Shop Id */
            shopId: number;
            /** @description Currency ID */
            currencyId: string;
        }[];
        /** @description Product is bestseller. Available values: "n" - no, "y" - yes. */
        productInBestseller?: string;
        /** @description Gross price */
        productRetailPrice?: number;
        /** @description Gross price after promotion. The item is returned when the 'showPromotionsPrices' parameter is specified in the request */
        productPromoRetailPrice?: number;
        /** @description Wholesale price */
        productWholesalePrice?: number;
        /** @description Wholesale price after promotion. The item is returned when the 'showPromotionsPrices' parameter is specified in the request */
        productPromoWholesalePrice?: number;
        /** @description Minimal price */
        productMinimalPrice?: number;
        /** @description Price for automatic calculations */
        productAutomaticCalculationPrice?: number;
        /** @description price for POS. */
        productPosPrice?: number;
        /** @description Strikethrough gross retail price */
        productStrikethroughRetailPrice?: number;
        /** @description Strikethrough gross wholesale price */
        productStrikethroughWholesalePrice?: number;
        /** @description Average purchase price net. */
        productPurchasePriceNetAverage?: number;
        /** @description Last net purchase price */
        productPurchasePriceNetLast?: number;
        /** @description Average purchase price gross. */
        productPurchasePriceGrossAverage?: number;
        /** @description Last gross purchase price */
        productPurchasePriceGrossLast?: number;
        /** @description Value of VAT */
        productVat?: number;
        /** @description Is product VAT free Allowed values "y" - yes, "n" - no. */
        productVatFree?: string;
        /** @description Discount profile ID */
        productRebate?: number;
        /** @description Product is new. Available values: "y" - is new, "n" - is not new. */
        productInNew?: string;
        /** @description Settings of hotspots display. */
        productHotspotsZones?: {
            /** @description Is attribute set */
            productHotspotIsEnabled: boolean;
            /** @description Shop Id */
            shopId: number;
            /** @description Promotion for shop. */
            productIsPromotion: boolean;
            /** @description Discount for shop. */
            productIsDiscount: boolean;
            /** @description Distinguished product in store. */
            productIsDistinguished: boolean;
            /** @description Special product in store. */
            productIsSpecial: boolean;
        }[];
        /** @description Product value in points. */
        productProfitPoints?: {
            /** @description Is attribute set */
            productProfitPointsAreEnabled: boolean;
            /** @description Shop Id */
            shopId: number;
            /** @description Point value required for purchase made by retail customers. */
            productProfitPointsCostRetail: number;
            /** @description Point value required for purchase made by wholesale customers. */
            productProfitPointsCostWholesale: number;
            /** @description Points granted for product purchase made by retail customers. */
            productProfitPointsAwardRetail: number;
            /** @description Points granted for product purchase made by wholesale customers. */
            productProfitPointsAwardWholesale: number;
        }[];
        /** @description Weight. */
        productWeight?: number;
        /** @description Product visibility in export to price comparison and marketplaces. Available values: "y" - Visible, "selected" - Selected, "assign_selected" - Enable the visibility of the product in the export to price comparison sites passed in the priceComparisonSites node. Price comparison sites previously assigned to the commodity will be retained, "unassign_selected" - Disable product visibility in exports to price comparison sites passed in the priceComparisonSites node, "n" - invisible. */
        productInExportToPriceComparisonSites?: string;
        /** @description Visibility of an item in an export to Amazon Marketplace. Available values: "y" - Visible, "selected" - Visible on selected regional services, "n" - invisible. */
        productInExportToAmazonMarketplace?: string;
        /** @description Object determines if the product is available in POS sale Available values: "n" - no, "y" - yes. */
        productEnableInPos?: string;
        /** @description Complex rating Available values: "0" - no, "1" - yes. */
        productComplexNotes?: number;
        /** @description Availability profile ID. */
        availableProfile?: number;
        /** @description Availability profile name. */
        availableProfileName?: string;
        /** @description Product visibility in store Available values: "y" - Visible, "n" - Invisible. */
        productIsVisible?: string;
        /** @description Product visible even though out of stock Available values: "y" - visible even though out of stock, "n" - not visible when out of stock. */
        productInPersistent?: string;
        /** @description Priority. Allowed values from 1 to 10. */
        productPriority?: number;
        /** @description Bit mask of shop IDs. Mask for indicated store is calculated on basis of following formula: 2^(store_ID - 1). If the product should be available in more than one shop, the masks should be summed up. */
        shopsMask?: number;
        /** @description Product icon details. */
        productIcon?: {
            /** @description Determines whether icon has been set. Available values: "y" - icon is set, "n" - icon is not set (default icon is visible). */
            productIconExists: string;
            /** @description URL to large icon graphic file */
            productIconLargeUrl: string;
            /** @description Width of large icon */
            productIconLargeWidth?: number;
            /** @description Height of large icon */
            productIconLargeHeight?: number;
            /** @description Large icon size */
            productIconLargeSize?: number;
            /** @description URL to small icon graphic file */
            productIconSmallUrl: string;
            /** @description MD5 hash of large icon graphic file */
            productIconHash?: string;
            productIconLargeUrlSecond?: string;
            productIconLargeSizeSecond?: number;
        };
        /** @description Information about the external listing icon */
        productAuctionIcon?: {
            /** @description Determines whether icon has been set. Available values: "y" - icon is set, "n" - icon is not set (default icon is visible). */
            productAuctionIconExists: string;
            /** @description URL to large icon graphic file */
            productAuctionIconLargeUrl?: string;
            /** @description Width of large icon */
            productAuctionIconLargeWidth?: number;
            /** @description Height of large icon */
            productAuctionIconLargeHeight?: number;
            /** @description Large icon size */
            productAuctionIconLargeSize?: number;
            /** @description URL to small icon graphic file */
            productAuctionIconSmallUrl?: string;
            /** @description MD5 hash of large icon graphic file */
            productAuctionIconHash?: string;
            productAuctionIconLargeUrlSecond?: string;
            productAuctionIconLargeSizeSecond?: number;
            productAuctionIconSmallUrlSecond?: string;
            productAuctionIconSmallSizeSecond?: number;
        };
        /** @description Information about the product group icon */
        productGroupIcon?: {
            /** @description Determines whether icon has been set. Available values: "y" - icon is set, "n" - icon is not set (default icon is visible). */
            productGroupIconExists: string;
            /** @description URL to large icon graphic file */
            productGroupIconLargeUrl?: string;
            /** @description Width of large icon */
            productGroupIconLargeWidth?: number;
            /** @description Height of large icon */
            productGroupIconLargeHeight?: number;
            /** @description Large icon size */
            productGroupIconLargeSize?: number;
            /** @description URL to small icon graphic file */
            productGroupIconSmallUrl?: string;
            /** @description MD5 hash of large icon graphic file */
            productGroupIconHash?: string;
            productGroupIconLargeUrlSecond?: string;
            productGroupIconLargeSizeSecond?: string;
            productGroupIconSmallUrlSecond?: string;
            productGroupIconSmallSize?: number;
            productGroupIconSmallSizeSecond?: number;
        };
        /** @description Product photos details. */
        productImages?: {
            /** @description URL of a large graphics */
            productImageLargeUrl?: string;
            productImageLargeUrlSecond?: string;
            productImageMediumUrlSecond?: string;
            productImageSmallUrlSecond?: string;
            /** @description URL of a medium graphics */
            productImageMediumUrl?: string;
            /** @description URL of a small graphics */
            productImageSmallUrl?: string;
            /** @description Id */
            productImageId?: string;
            /** @description Picture height */
            productImageWidth?: number;
            /** @description Picture width */
            productImageHeight?: number;
            /** @description Image size on disk */
            productImageSize?: number;
            /** @description Date Photo was added */
            productImageDate?: string;
            /** @description Picture priority */
            productImagePriority?: number;
            /** @description Picture hash */
            productImageHash?: string;
        }[];
        /** @description Data of series, product belong to. */
        productSeries?: {
            /** @description ID of series, to which product belongs. */
            seriesId: number;
            /** @description Name of series, to which the product belongs, visible in panel. */
            seriesPanelName: string;
            /** @description Names of series in indicated language visible in shop. */
            seriesDescriptionsLangData: {
                /** @description Name of series in indicated language */
                seriesName: string;
                /** @description Language ID */
                langId: string;
            }[];
        };
        /** @description Product unit of measure data */
        productUnit?: {
            /** @description Product unit of measure ID. */
            unitId: number;
            /** @description Product unit of measure name. */
            unitName: string;
            /** @description Unit of measure precision. */
            unitPrecision: number;
        };
        /** @description Number of items in package data */
        productInWrapper?: number;
        /** @description Sold at - for retailers. */
        productSellByRetail?: number;
        /** @description Sold at - for wholesalers. */
        productSellByWholesale?: number;
        /** @description Size group ID Change of one size group to another results in zeroing all stock quantities in all stocks. Change of size group can be made, if product is not present in any unhandled orders nor listed on auctions. */
        sizesGroupId?: number;
        /** @description Product creation time and date in YYYY-MM-DD HH:MM:SS format */
        productAddingTime?: string;
        /** @description Last product modification date and time in YYYY-MM-DD HH:MM:SS format */
        productModificationTime?: string;
        /** @description Last product price modification date and time in YYYY-MM-DD HH:MM:SS format */
        productPriceChangedTime?: string;
        /** @description Last product stock quantities modification date and time in YYYY-MM-DD HH:MM:SS format */
        productQuantityChangedTime?: string;
        /** @description Product warranty data. */
        productWarranty?: {
            /** @description Product warranty ID. */
            warrantyId: number;
            /** @description Name of warranty for indicated product. */
            warrantyName: string;
        };
        /** @description Data on product groups (variants) */
        productVersion?: {
            /** @description ID of the main item (variant) in the group */
            versionParentId: number;
            /** @description Parameter value names */
            versionNames: {
                /** @description Array of languages, values are displayed in. */
                versionNamesLangData: {
                    /** @description Language ID */
                    langId: string;
                    /** @description Name of the parameter value, e.g. orange, green, red */
                    versionName: string;
                }[];
            };
            /** @description Parameter names */
            versionGroupNames: {
                /** @description Parameter name */
                versionGroupNamesLangData: {
                    /** @description Language ID */
                    langId: string;
                    /** @description Parameter name, e.g. color, width */
                    versionGroupName: string;
                }[];
            };
            /** @description Settings for groups of items (variants) */
            versionSettings: {
                /** @description Show in shop. Available values: "y" - all products from group, "n" - only the first product from group. */
                versionDisplayAllInShop: string;
                /** @description Show in panel. Available values: "y" - wszystkie towary z grupy, "n" - only the first product from group. */
                versionDisplayAllInPanel: string;
                /** @description Adding the canonical links to the site. Available values: "y" - on, "n" - Off. */
                versionDisplayRelCanonicalInShop: string;
                /** @description The same code. Available values: "y" - yes, "n" - no. */
                versionCommonCode: string;
                /** @description The same brand. Available values: "y" - yes, "n" - no. */
                versionCommonProducer: string;
                /** @description The same annotation. Available values: "y" - yes, "n" - no. */
                versionCommonNote: string;
                /** @description The same warranty. Available values: "y" - yes, "n" - no. */
                versionCommonWarranty: string;
                /** @description The same series. Available values: "y" - yes, "n" - no. */
                versionCommonSeries: string;
                /** @description The same category. Available values: "y" - yes, "n" - no. */
                versionCommonCategory: string;
                /** @description The same price. Available values: "y" - yes, "n" - no. */
                versionCommonPrice: string;
                /** @description Same price for auction services. Available values: "y" - yes, "n" - no. */
                versionCommonPriceAuctions: string;
                /** @description Same advance. Available values: "y" - yes, "n" - no. */
                versionCommonAdvance: string;
                /** @description Same quantity discount. Available values: "y" - yes, "n" - no. */
                versionCommonRebate: string;
                /** @description the same VAT rate. Available values: "y" - yes, "n" - no. */
                versionCommonVat: string;
                /** @description The same loyalty points. Available values: "y" - yes, "n" - no. */
                versionCommonProfitPoints: string;
                /** @description The same promotion. Available values: "y" - yes, "n" - no. */
                versionCommonPromotion: string;
                /** @description The same loyalty discount. Available values: "y" - yes, "n" - no. */
                versionCommonDiscount: string;
                /** @description The same privileged products. Available values: "y" - yes, "n" - no. */
                versionCommonDistinguished: string;
                /** @description The same for special. Available values: "y" - yes, "n" - no. */
                versionCommonSpecial: string;
                /** @description The same related product. Available values: "y" - yes, "n" - no. */
                versionCommonAssociated: string;
                /** @description The same visibility. Available values: "y" - yes, "n" - no. */
                versionCommonVisibility: string;
                /** @description Same display when not in stock. Available values: "y" - yes, "n" - no. */
                versionCommonPersistent: string;
                /** @description The same priority. Available values: "y" - yes, "n" - no. */
                versionCommonPriority: string;
                /** @description The same shops. Available values: "y" - yes, "n" - no. */
                versionCommonShops: string;
                /** @description The same sizes. Available values: "y" - yes, "n" - no. */
                versionCommonSizes: string;
                /** @description The same unit of measure. Available values: "y" - yes, "n" - no. */
                versionCommonUnit: string;
                /** @description The same weight. Available values: "y" - yes, "n" - no. */
                versionCommonWeight: string;
                /** @description The same parameters. possible values "y" - yes, "n" - no. */
                versionCommonDictionary: string;
                /** @description The same name. Available values: "y" - yes, "n" - no. */
                versionCommonName: string;
                /** @description The same short description. Available values: "y" - yes, "n" - no. */
                versionCommonDescription: string;
                /** @description The same long description. Available values: "y" - yes, "n" - no. */
                versionCommonLongDescription: string;
                /** @description The same icon. Available values: "y" - yes, "n" - no. */
                versionCommonIcon: string;
                /** @description The same large photos. Available values: "y" - yes, "n" - no. */
                versionCommonPhotos: string;
                /** @description The same availability profile. Available values: "y" - yes, "n" - no. */
                versionCommonAvailableProfile: string;
                /** @description The same complex rating. Available values: "y" - yes, "n" - no. */
                versionCommonComplexNotes: string;
                /** @description The same currency. Available values: "y" - yes, "n" - no. */
                versionCommonCurrency: string;
                /** @description The same supplier. Available values: "y" - yes, "n" - no. */
                versionCommonDeliverer: string;
                /** @description Do You wish to sum up the products in the basket as a one order? Available values: "y" - yes, "n" - no. */
                versionCommonSumInBasket: string;
                /** @description The same objects in menu Available values: "y" - yes, "n" - no. */
                versionCommonMenuItems: string;
                /** @description Same promotions Available values: "y" - yes, "n" - no. */
                versionCommonPromotions: string;
            };
            /** @description List of product variants. */
            versionProductsIds: number[];
        };
        /** @description Recommended products data. */
        associatedProductsIds?: number[];
        /** @description Data of advance payment required for order with this product. */
        productAdvance?: {
            /** @description Required advance payment in percents */
            productAdvancePrice: number;
            /** @description Percentage of product price, that is an advance payment. */
            productAdvancePercent: number;
        };
        /** @description Data of stores product is assigned to. */
        productShops?: {
            /** @description Bit mask of shop IDs. Mask for indicated store is calculated on basis of following formula: 2^(store_ID - 1). If the product should be available in more than one shop, the masks should be summed up. */
            shopsMask?: number;
            /** @description Shop Id */
            shopId: number;
        }[];
        /** @description Array of language-dependent elements. */
        productDescriptionsLangData?: {
            /** @description Language ID */
            langId: string;
            /** @description Product name. */
            productName: string;
            /** @description Product name for auction service. */
            productAuctionName: string;
            /** @description Product name on price comparison sites. */
            productPriceComparisonSitesName: string;
            /** @description Short product description. */
            productDescription: string;
            /** @description Long product description. */
            productLongDescription: string;
            /** @description DEPRECATED. This parameter is deprecated. Long product description for external listings. */
            productAuctionLongDescription: string;
            /** @description Product meta title. */
            productMetaTitle: string;
            /** @description Product meta description. */
            productMetaDescription: string;
            /** @description Product meta keywords. */
            productMetaKeywords: string;
        }[];
        /** @description Product data for auction services */
        productAuctionDescriptionsData?: {
            /** @description Auction system ID */
            productAuctionId: string;
            /** @description Auction site ID */
            productAuctionSiteId: string;
            /** @description Product name for auction service. */
            productAuctionName: string;
            /** @description Subtitle for auction service */
            productAuctionAdditionalName: string;
            /** @description Product description for marketplaces */
            productAuctionDescription: string;
        }[];
        /** @description Reduced price */
        productPromotion?: {
            /** @description Object determines if the promotion should be active.. Allowed values: "y" - active promotion, "n" - inactive promotion. */
            promoteItemEnabled: string;
            /** @description Strikethrough price */
            promoteItemNormalPrice?: number;
            /** @description Strikethrough wholesale price */
            promoteItemWholesaleNormalPrice?: number;
            /** @description Switching off date */
            promoteItemEndingDate?: string;
        };
        /** @description Discount for shop. */
        productDiscount?: {
            /** @description Object determines if the promotion should be active.. Allowed values: "y" - active promotion, "n" - inactive promotion. */
            promoteItemEnabled: string;
            /** @description Strikethrough price */
            promoteItemNormalPrice?: number;
            /** @description Strikethrough wholesale price */
            promoteItemWholesaleNormalPrice?: number;
            /** @description Switching off date */
            promoteItemEndingDate?: string;
        };
        /** @description Distinguished product in store. */
        productDistinguished?: {
            /** @description Object determines if the promotion should be active.. Allowed values: "y" - active promotion, "n" - inactive promotion. */
            promoteItemEnabled: string;
            /** @description Strikethrough price */
            promoteItemNormalPrice?: number;
            /** @description Strikethrough wholesale price */
            promoteItemWholesaleNormalPrice?: number;
            /** @description Switching off date */
            promoteItemEndingDate?: string;
        };
        /** @description Special product in store. */
        productSpecial?: {
            /** @description Object determines if the promotion should be active.. Allowed values: "y" - active promotion, "n" - inactive promotion. */
            promoteItemEnabled: string;
            /** @description Strikethrough price */
            promoteItemNormalPrice: number;
            /** @description Strikethrough wholesale price */
            promoteItemWholesaleNormalPrice: number;
            /** @description Switching off date */
            promoteItemEndingDate?: string;
        };
        /** @description Parameters (distinguished). */
        productParametersDistinction?: {
            /** @description Parameter ID */
            parameterId: number;
            /** @description Parameter name. */
            parameterName: string;
            /** @description Parameter value ID */
            parameterValueId: number;
            /** @description Attributes group name. */
            parameterValueName: string;
        }[];
        /** @description Product stock quantity data. */
        productStocksData?: {
            /** @description Stocks data */
            productStocksQuantities?: {
                /** @description Stock ID */
                stockId: number;
                /** @description Size data */
                productSizesData: {
                    /** @description Size identifier */
                    sizeId: string;
                    /** @description Size name */
                    sizePanelName: string;
                    /** @description External product system code for size. */
                    productSizeCodeExternal: string;
                    /** @description Product stock quantity */
                    productSizeQuantity: number;
                    /** @description Information of reservations */
                    productSizeReservations: {
                        /** @description Number of products reserved ad hoc. */
                        productSizeReservationAdhoc: number;
                        /** @description Number of products reserved for auctions. */
                        productSizeReservationAuction: number;
                        /** @description Customer's login */
                        productSizeReservationClient: number;
                        /** @description Number of products reserved for orders. */
                        productSizeReservationOrder: number;
                        /** @description Number of products reserved for retail sales. */
                        productSizeReservationRetail: number;
                        /** @description Number of products reserved for wholesale sales. */
                        productSizeReservationWholesale: number;
                    };
                }[];
            }[];
            /** @description Information on auction sites */
            productAuctionsQuantities?: {
                /** @description Stock ID */
                stockId: number;
                /** @description Size data */
                productSizesData: {
                    /** @description Size identifier */
                    sizeId: string;
                    /** @description Size name */
                    sizePanelName: string;
                    /** @description External product system code for size. */
                    productSizeCodeExternal: string;
                    /** @description Product stock quantity */
                    productSizeQuantity: number;
                    /** @description Information of reservations */
                    productSizeReservations: {
                        /** @description Number of products reserved ad hoc. */
                        productSizeReservationAdhoc: number;
                        /** @description Number of products reserved for auctions. */
                        productSizeReservationAuction: number;
                        /** @description Customer's login */
                        productSizeReservationClient: number;
                        /** @description Number of products reserved for orders. */
                        productSizeReservationOrder: number;
                        /** @description Number of products reserved for retail sales. */
                        productSizeReservationRetail: number;
                        /** @description Number of products reserved for wholesale sales. */
                        productSizeReservationWholesale: number;
                    };
                }[];
            }[];
            /** @description Information on incomplete orders */
            productOrdersUnfinishedQuantities?: {
                /** @description Stock ID */
                stockId: number;
                /** @description Size data */
                productSizesData: {
                    /** @description Size identifier */
                    sizeId: string;
                    /** @description Size name */
                    sizePanelName: string;
                    /** @description External product system code for size. */
                    productSizeCodeExternal: string;
                    /** @description Product stock quantity */
                    productSizeQuantity: number;
                    /** @description Information of reservations */
                    productSizeReservations: {
                        /** @description Number of products reserved ad hoc. */
                        productSizeReservationAdhoc: number;
                        /** @description Number of products reserved for auctions. */
                        productSizeReservationAuction: number;
                        /** @description Customer's login */
                        productSizeReservationClient: number;
                        /** @description Number of products reserved for orders. */
                        productSizeReservationOrder: number;
                        /** @description Number of products reserved for retail sales. */
                        productSizeReservationRetail: number;
                        /** @description Number of products reserved for wholesale sales. */
                        productSizeReservationWholesale: number;
                    };
                }[];
            }[];
            /** @description Available stock quantities data */
            productSizesDispositions?: {
                /** @description Available stock quantities for auctions */
                productSizesDispositionsInAuctions: {
                    /** @description Size identifier */
                    sizeId: string;
                    /** @description Size name */
                    sizePanelName: string;
                    /** @description External product system code for size. */
                    productSizeCodeExternal: string;
                    /** @description Product stock quantity */
                    productSizeQuantity: number;
                }[];
                /** @description Available stock quantity for order sales */
                productSizesDispositionsInSales: {
                    /** @description Size identifier */
                    sizeId: string;
                    /** @description Size name */
                    sizePanelName: string;
                    /** @description External product system code for size. */
                    productSizeCodeExternal: string;
                    /** @description Available stock quantity of product from supplier stock. */
                    productSizeQuantityOutsideStock: number;
                    /** @description Available stock quantity of product from own stock. */
                    productSizeQuantityOwnStock: number;
                    /** @description Available stock quantity of product from all stocks. */
                    productSizeQuantityAllStocks: number;
                    /** @description Available product quantity in own stock from before 1 day . */
                    productSizeDisposition1d: number;
                    /** @description Available product quantity in own stock from before 2 Days. */
                    productSizeDisposition2d: number;
                    /** @description Available product quantity in own stock from before 3 Days. */
                    productSizeDisposition3d: number;
                    /** @description Available product quantity in own stock from before 4 Days. */
                    productSizeDisposition4d: number;
                    /** @description Available product quantity in own stock from before 5 Days. */
                    productSizeDisposition5d: number;
                    /** @description Available product quantity in own stock from before 6 Days. */
                    productSizeDisposition6d: number;
                    /** @description Available product quantity in own stock from before 7 Days. */
                    productSizeDisposition7d: number;
                    /** @description Available product quantity in own stock from before 1 week. */
                    productSizeDisposition1w: number;
                    /** @description Available product quantity in own stock from before 2 weeks. */
                    productSizeDisposition2w: number;
                    /** @description Available product quantity in own stock from before 3 weeks. */
                    productSizeDisposition3w: number;
                    /** @description Available product quantity in own stock from before 4 weeks. */
                    productSizeDisposition4w: number;
                }[];
            };
            /** @description Delivery data */
            productSizesDeliveries: {
                /** @description Size identifier */
                sizeId: string;
                /** @description Size name */
                sizePanelName: string;
                /** @description Product stock quantity */
                productSizeQuantity: number;
            }[];
            /** @description Data of number of products added to GRN */
            productSizesGoodsReceivedNotes?: {
                /** @description Size identifier */
                sizeId: string;
                /** @description Size name */
                sizePanelName: string;
                /** @description Product stock quantity */
                productSizeQuantity: number;
            }[];
            /** @description Size data */
            productSizesStocksLocations: {
                /** @description Stock ID */
                stockId: number;
                productSizesLocation: {
                    /** @description Size identifier */
                    sizeId: string;
                    /** @description Warehouse location ID */
                    stockLocationId: number;
                    /** @description Warehouse location full path */
                    stockLocationTextId: string;
                    /** @description Storage location code */
                    stockLocationCode?: string;
                    /** @description Additional locations */
                    stockAdditionalLocations?: {
                        /** @description Warehouse location ID */
                        stockAdditionalLocationId: number;
                        /** @description Warehouse location full path */
                        stockAdditionalLocationTextId: string;
                        /** @description Storage location code */
                        stockAdditionalLocationCode: string;
                    }[];
                }[];
            }[];
        };
        /** @description Data concerning attributes dependent on indicated product sizes. */
        productSizesAttributes?: {
            /** @description Size identifier */
            sizeId: string;
            /** @description Size name */
            sizePanelName?: string;
            /** @description External product system code for size. */
            productSizeCodeExternal?: string;
            /** @description Producer code for size. */
            productSizeCodeProducer?: string;
            /** @description Supplier code */
            productSizeCodeDeliverer?: string;
            /** @description Product visible even though out of stock Available values: "y" - visible even though out of stock, "n" - not visible when out of stock. */
            productInPersistent: string;
            /** @description Data of customers observing product. */
            productObservedByClients?: {
                /** @description Customer's login */
                productSizeObservedClientLogin: string;
                /** @description Shop Id */
                shopId: number;
                /** @description Observed from */
                productSizeObservedDate: string;
            }[];
            /** @description Gross price */
            productRetailPrice?: number;
            /** @description Gross price after promotion. The item is returned when the 'showPromotionsPrices' parameter is specified in the request */
            productPromoRetailPrice?: number;
            /** @description Wholesale price */
            productWholesalePrice?: number;
            /** @description Wholesale price after promotion. The item is returned when the 'showPromotionsPrices' parameter is specified in the request */
            productPromoWholesalePrice?: number;
            /** @description Minimal price */
            productMinimalPrice?: number;
            /** @description Price for automatic calculations */
            productAutomaticCalculationPrice?: number;
            /** @description price for POS. */
            productPosPrice?: number;
            /** @description Strikethrough gross retail price */
            productStrikethroughRetailPrice?: number;
            /** @description Strikethrough gross wholesale price */
            productStrikethroughWholesalePrice?: number;
            /** @description Weight */
            productSizeWeight: number;
            /** @description Weight without the packaging */
            productSizeWeightWithoutPackaging: number;
        }[];
        /** @description Data concerning attributes dependent on indicated stores with particular product assigned. */
        productShopsAttributes?: {
            /** @description Shop Id */
            shopId: number;
            /** @description Information on the prices dependent on shop. */
            productShopSizesAttributes?: {
                /** @description Size identifier */
                sizeId: string;
                /** @description Size name */
                sizePanelName: string;
                /** @description External product system code for size. */
                productSizeCodeExternal: string;
                /** @description Gross price */
                productRetailPrice: number;
                /** @description Gross price after promotion. The item is returned when the 'showPromotionsPrices' parameter is specified in the request */
                productPromoRetailPrice: number;
                /** @description Wholesale price */
                productWholesalePrice: number;
                /** @description Wholesale price after promotion. The item is returned when the 'showPromotionsPrices' parameter is specified in the request */
                productPromoWholesalePrice: number;
                /** @description Minimal price */
                productMinimalPrice: number;
                /** @description Price for automatic calculations */
                productAutomaticCalculationPrice: number;
                /** @description Recommended retail price */
                productSuggestedPrice: number;
                /** @description Strikethrough gross retail price */
                productStrikethroughRetailPrice: number;
                /** @description Strikethrough gross wholesale price */
                productStrikethroughWholesalePrice: number;
            }[];
            /** @description Information about prices for price comparison websites dependent on a shop */
            productShopPriceComparisonSitesPrices: {
                /** @description price comparison website ID */
                priceComparisonSiteId: number;
                /** @description Percentage difference between the price comparison website and the shop */
                productPriceComparisonSitePercentDiff: number;
                /** @description Price for a price comparison website in a shop */
                productPriceComparisonSitePrice: number;
            }[];
            /** @description Gross price */
            productRetailPrice: number;
            /** @description Gross price after promotion. The item is returned when the 'showPromotionsPrices' parameter is specified in the request */
            productPromoRetailPrice?: number;
            /** @description Wholesale price */
            productWholesalePrice: number;
            /** @description Wholesale price after promotion. The item is returned when the 'showPromotionsPrices' parameter is specified in the request */
            productPromoWholesalePrice?: number;
            /** @description Minimal price */
            productMinimalPrice: number;
            /** @description Price for automatic calculations */
            productAutomaticCalculationPrice: number;
            /** @description Price settings, possible values: "wholesale_equals_retail" - Wholesale price same as retail price, "wholesale_notequals_retail" - Wholesale price different than retail price, "all_prices_equals_zero" - All prices request a quote by phone, "retail_price_equals_zero" - Retail price on call, "default_prices" - default prices, "retail_equals_suggested" - Retail price is the same as recommended one, "automatically_calculated" - Price calculated automatically. */
            productPricesConfig: string;
            /** @description Currency ID */
            currencyId: string;
            /** @description Recommended retail price */
            productSuggestedPrice: number;
            /** @description Strikethrough gross retail price */
            productStrikethroughRetailPrice: number;
            /** @description Strikethrough gross wholesale price */
            productStrikethroughWholesalePrice: number;
            /** @description Configuration details for setting of parameter  prices_config=default_prices. */
            productConfigPricesDefaultShop?: number;
            /** @description Average retail margin against average purchase price . */
            productMarginRetailFromAvaragePrices: number;
            /** @description Average wholesale margin against average purchase price. */
            productMarginWholesaleFromAvaragePrices: number;
            /** @description Configuration details for setting of parameter  prices_config=automatically_calculated. */
            productPricesConfigAutomatonDetails?: {
                /** @description Price name, one of values: retail, wholsale, minimal. */
                priceAutomatonPriceName: string;
                /** @description Price setting, one of values: own, last_purchased, avarage_purchased, retail, wholsale, minimal */
                priceAutomatonPriceSettings: string;
                /** @description Price type, one of values: gross, net */
                priceAutomatonPriceType: string;
                /** @description Final amount */
                priceAutomatonPriceValue: number;
                /** @description Final amount currency */
                priceAutomatonPriceCurrencyId: string;
                /** @description shop ID from which price is retrieved */
                priceAutomatonPriceShop: number;
                /** @description Amount margin */
                priceAutomatonMarginCurrencyValue: number;
                /** @description Amount margin currency */
                priceAutomatonMarginCurrencyId: string;
                /** @description Percentage margin */
                priceAutomatonMarginPercentValue: number;
                /** @description Minimal value of percentage margin */
                priceAutomatonPricePercentMinimalValue: number;
                /** @description Minimal value of percentage margin currency */
                priceAutomatonPricePercentMinimalCurrencyId: string;
                /** @description Minimal amount with margins reflected */
                priceAutomatonPriceMinimalValue: number;
                /** @description Minimal amount currency */
                priceAutomatonPriceMinimalCurrencyId: string;
                /** @description Decimal complement should contain 0 to 2 digits. If it contains 0 digits, the system will calculate the amount with precision of up to 2 decimal places. If it contains 2 digits, the system will calculate the amount with precision of the total number and will add the value of this field as a decimal part of this amount */
                priceAutomatonDecimalRoundValue: number;
            }[];
            /** @description Prices for marketplaces */
            productAuctionsPrices?: {
                /** @description Auction site ID */
                auctionId: number;
                /** @description Auction site page ID */
                auctionSiteId: number;
                /** @description Size identifier */
                sizeId: string;
                /** @description "Buy It Now" price */
                auctionBuyNowPrice: number;
                /** @description Minimal price */
                auctionMinimalPrice: number;
                /** @description Auction starting price */
                auctionStartPrice: number;
            }[];
            /** @description Parameters set for auction sites */
            productAuctions?: {
                /** @description Auction site ID */
                auctionId: number;
                /** @description Auction site page ID */
                auctionSiteId: number;
                /** @description Price settings, possible values: "manual" - Price entered manually, "automatically_calculated" - Price calculated automatically. */
                auctionPricesConfig: string;
                /** @description Configuration details for setting of parameter  prices_config=automatically_calculated */
                auctionPricesConfigAutomatonDetails: {
                    /** @description Price name, one of values: retail, wholsale, minimal. */
                    priceAutomatonPriceName: string;
                    /** @description Price setting, one of values: own, last_purchased, avarage_purchased, retail, wholsale, minimal */
                    priceAutomatonPriceSettings: string;
                    /** @description Price type, one of values: gross, net */
                    priceAutomatonPriceType: string;
                    /** @description Final amount */
                    priceAutomatonPriceValue: number;
                    /** @description Final amount currency */
                    priceAutomatonPriceCurrencyId: string;
                    /** @description shop ID from which price is retrieved */
                    priceAutomatonPriceShop: number;
                    /** @description Amount margin */
                    priceAutomatonMarginCurrencyValue: number;
                    /** @description Amount margin currency */
                    priceAutomatonMarginCurrencyId: string;
                    /** @description Percentage margin */
                    priceAutomatonMarginPercentValue: number;
                    /** @description Minimal value of percentage margin */
                    priceAutomatonPricePercentMinimalValue: number;
                    /** @description Minimal value of percentage margin currency */
                    priceAutomatonPricePercentMinimalCurrencyId: string;
                    /** @description Minimal amount with margins reflected */
                    priceAutomatonPriceMinimalValue: number;
                    /** @description Minimal amount currency */
                    priceAutomatonPriceMinimalCurrencyId: string;
                    /** @description Decimal complement should contain 0 to 2 digits. If it contains 0 digits, the system will calculate the amount with precision of up to 2 decimal places. If it contains 2 digits, the system will calculate the amount with precision of the total number and will add the value of this field as a decimal part of this amount */
                    priceAutomatonDecimalRoundValue: number;
                }[];
                /** @description Parameters for sizes */
                productAuctionsSizes: {
                    /** @description Size identifier */
                    sizeId: string;
                    /** @description Configuration details for setting of parameter  prices_config=automatically_calculated */
                    auctionPricesConfigAutomatonDetails: {
                        /** @description Price name, one of values: retail, wholsale, minimal. */
                        priceAutomatonPriceName: string;
                        /** @description Price setting, one of values: own, last_purchased, avarage_purchased, retail, wholsale, minimal */
                        priceAutomatonPriceSettings: string;
                        /** @description Price type, one of values: gross, net */
                        priceAutomatonPriceType: string;
                        /** @description Final amount */
                        priceAutomatonPriceValue: number;
                        /** @description Final amount currency */
                        priceAutomatonPriceCurrencyId: string;
                        /** @description shop ID from which price is retrieved */
                        priceAutomatonPriceShop: number;
                        /** @description Amount margin */
                        priceAutomatonMarginCurrencyValue: number;
                        /** @description Amount margin currency */
                        priceAutomatonMarginCurrencyId: string;
                        /** @description Percentage margin */
                        priceAutomatonMarginPercentValue: number;
                        /** @description Minimal value of percentage margin */
                        priceAutomatonPricePercentMinimalValue: number;
                        /** @description Minimal value of percentage margin currency */
                        priceAutomatonPricePercentMinimalCurrencyId: string;
                        /** @description Minimal amount with margins reflected */
                        priceAutomatonPriceMinimalValue: number;
                        /** @description Minimal amount currency */
                        priceAutomatonPriceMinimalCurrencyId: string;
                        /** @description Decimal complement should contain 0 to 2 digits. If it contains 0 digits, the system will calculate the amount with precision of up to 2 decimal places. If it contains 2 digits, the system will calculate the amount with precision of the total number and will add the value of this field as a decimal part of this amount */
                        priceAutomatonDecimalRoundValue: number;
                    }[];
                }[];
            }[];
            /** @description Parameters set for price comparison websites */
            productShopPriceComparisonSites: {
                /** @description price comparison website ID */
                priceComparisonSiteId: number;
                /** @description Whether the product is exported in the feed to the sales service */
                active: boolean;
                /** @description price comparison website name */
                priceComparisonSiteName: string;
                /** @description Price settings, possible values: "manual" - Price entered manually, "automatically_calculated" - Price calculated automatically. */
                priceComparisonSitePricesConfig?: string;
                /** @description Configuration details for setting of parameter  prices_config=automatically_calculated */
                priceComparisonSitePriceConfigAutomatonDetails?: {
                    /** @description Price setting, one of values: own, last_purchased, avarage_purchased, retail, wholsale, minimal */
                    priceAutomatonPriceSettings: string;
                    /** @description Price type, one of values: gross, net */
                    priceAutomatonPriceType: string;
                    /** @description Final amount */
                    priceAutomatonPriceValue: number;
                    /** @description Final amount currency */
                    priceAutomatonPriceCurrencyId: string;
                    /** @description shop ID from which price is retrieved */
                    priceAutomatonPriceShop: number;
                    /** @description Amount margin */
                    priceAutomatonMarginCurrencyValue: number;
                    /** @description Amount margin currency */
                    priceAutomatonMarginCurrencyId: string;
                    /** @description Percentage margin */
                    priceAutomatonMarginPercentValue: number;
                    /** @description Minimal value of percentage margin */
                    priceAutomatonPricePercentMinimalValue: number;
                    /** @description Minimal value of percentage margin currency */
                    priceAutomatonPricePercentMinimalCurrencyId: string;
                    /** @description Minimal amount with margins reflected */
                    priceAutomatonPriceMinimalValue: number;
                    /** @description Minimal amount currency */
                    priceAutomatonPriceMinimalCurrencyId: string;
                    /** @description Decimal complement should contain 0 to 2 digits. If it contains 0 digits, the system will calculate the amount with precision of up to 2 decimal places. If it contains 2 digits, the system will calculate the amount with precision of the total number and will add the value of this field as a decimal part of this amount */
                    priceAutomatonDecimalRoundValue: number;
                };
            }[];
        }[];
        /** @description Supplier ID. */
        delivererId?: number;
        /** @description Supplier name. */
        delivererName?: string;
        /** @description Sizes available for products data. */
        productSizes?: {
            /** @description Size identifier */
            sizeId: string;
            /** @description Size name */
            sizePanelName: string;
        }[];
        /** @description Size chart ID */
        sizeChartId?: number;
        /** @description Size chart name */
        sizeChartName?: string;
        /** @description Number of photos assigned to product. */
        productImagesCount?: number;
        /** @description Product availability management method Available values: "stock" - by means of stock management tools, "manual" - manually. */
        productAvailabilityManagementType?: string;
        /** @description Do You wish to sum up the products in the basket as a one order? Available values: "y" - yes, "n" - no. */
        productSumInBasket?: string;
        /** @description Menu assignments */
        productMenu?: {
            /** @description ID of the menu node to which the product is to be assigned */
            menuItemId: number;
            /** @description Shop Id */
            shopId: number;
            /** @description ID of the menu zone displayed in the mask */
            menuId: number;
            /** @description Menu lang data. */
            menuItemDescriptionsLangData: {
                /** @description Language ID */
                langId: string;
                /** @description Menu item name. */
                menuItemName: string;
                /** @description Menu element text identifier. Example: "item1\item2\item3". */
                menuItemTextId: string;
            }[];
        }[];
        /** @description Product type. Allowed values: "product_item" - Goods, "product_packaging" - packaging, "product_bundle" - set. "product_collection" - collection. "product_service" - service. "product_virtual" - virtual product. "product_configurable" - configurable product. */
        productType?: string;
        /** @description List of components if a products is a set or collection. */
        productBundleItems?: {
            /** @description Product IAI code */
            productId: number;
            /** @description Product ID in a set or collection */
            bundledId: number;
            /** @description Number of products in a set or collection */
            bundleQuantity: number;
            /** @description If a collection or a set is displayed with this product in a shop. */
            isBundleShown: boolean;
            /** @description Available sizes of products in a set or collection for the shop */
            bundledAvailableSizes: {
                /** @description Size identifier */
                sizeId: string;
                /** @description Size name */
                sizePanelName: string;
            }[];
            /** @description All sizes of products in a set or collection. */
            bundledAllSizes: {
                /** @description Size identifier */
                sizeId: string;
                /** @description Size name */
                sizePanelName: string;
            }[];
            /** @description Available sizes of products in a set or collection for marketplaces */
            bundledAvailableSizesInAuctions: {
                /** @description Size identifier */
                sizeId: string;
                /** @description Size name */
                sizePanelName: string;
            }[];
        }[];
        /** @description Remember serial numbers of sold products : "required" - #!wymagane!#, "optional" - optional, "na" - not used */
        productSaveSerialNumbers?: string;
        /** @description Parameters. */
        productParameters?: {
            /** @description Parameter ID */
            parameterId: number;
            /** @description Parameter type * @enum {string} */
            parameterType: "section" | "parameter";
            /** @description Language data */
            parameterDescriptionsLangData: {
                /** @description Language ID */
                langId: string;
                /** @description Parameter name. */
                parameterName: string;
                /** @description Parameter description */
                parameterDescription: string;
                /** @description Parameter options for shops */
                parameterShopsData: {
                    /** @description Shop Id */
                    shopId: number;
                    /** @description Link to icon on a product card */
                    parameterIconCard: string;
                    /** @description Link to icon on a product list */
                    parameterIconProductsList: string;
                }[];
            }[];
            /** @description Parameter values */
            parameterValues: {
                /** @description Parameter value ID */
                parameterValueId: number;
                /** @description Language data */
                parameterValueDescriptionsLangData: {
                    /** @description Language ID */
                    langId: string;
                    /** @description Attributes group name. */
                    parameterValueName: string;
                    /** @description Parameter description */
                    parameterValueDescription: string;
                    /** @description Parameter options for shops */
                    parameterValueShopsData: {
                        /** @description Shop Id */
                        shopId: number;
                        /** @description Link to icon on a product card */
                        parameterValueIconCard: string;
                        /** @description Link to icon on a product list */
                        parameterValueIconProductsList: string;
                    }[];
                }[];
            }[];
        }[];
        /** @description Standard producer code. Available values: "auto" - Choose automatically, "GTIN14" - GTIN-14 "GTIN13" - GTIN-13 (EAN-13) "ISBN13" - GTIN-13 (ISBN-13) "GTIN12" - GTIN-12 (UPC-A) "ISBN10" - ISBN-10 "GTIN8" - GTIN-8 (EAN-8) "UPCE" - UPC-E "MPN" - MPN "other" - Other */
        producerCodesStandard?: string;
        /** @description The JavaScript formula calculating prices */
        priceFormula?: {
            /** @description Formula identifier */
            priceFormulaId: number;
            /** @description Formula parameters for calculating price */
            priceFormulaParameters: string;
            /** @description Formula function for calculating price */
            priceFormulaFunction: string;
        };
        /** @description Identifiers of the sets, to which the goods are assigned */
        bundledIds?: number[];
        /** @description Data of individual descriptions for stores */
        productIndividualDescriptionsData?: {
            /** @description Shop Id */
            shopId: string;
            /** @description Language ID */
            langId: string;
            /** @description Product name. */
            productName: string;
            /** @description Short product description. */
            productDescription: string;
            /** @description Long product description. */
            productLongDescription: string;
        }[];
        /** @description #!DaneIndywidualnychAdresowURLDlaSklepow!# */
        productIndividualUrlsData?: {
            /** @description Shop Id */
            shopId: string;
            /** @description Language ID */
            langId: string;
            url: string;
        }[];
        /** @description Individual description data for external services */
        productServicesDescriptionsData?: {
            /** @description Shop Id */
            shopId: string;
            /** @description External service identifier */
            serviceId: string;
            /** @description Product name. */
            productName: string;
            /** @description Short product description. */
            productDescription: string;
            /** @description Long product description. */
            productLongDescription: string;
        }[];
        /** @description Shipping, returns and complaints settings */
        dispatchSettings?: {
            enabled: boolean;
            /** @description Shipping settings */
            shippingSettings?: {
                /** @description Disable cash on delivery orders */
                codDisabled: boolean;
                /** @description Only personal collection */
                dvpOnly: boolean;
                /** @description Insurance required */
                insuranceOnly: boolean;
                /** @description Oversized product */
                atypicalSize: boolean;
                /** @description Exclusion from the Smile service */
                excludeSmileService: boolean;
                /** @description List of courier services which cannot be used to ship this product */
                disallowedCouriers: number[];
            };
            /** @description Free shipping settings */
            freeShippingSettings?: {
                /** @description Edition mode * @enum {string} */
                mode: "no" | "onlyProduct" | "wholeBasket";
                /** @description Set free shipping for the payment method only . */
                availablePaymentForms: {
                    /** @description prepayment */
                    prepaid: boolean;
                    /** @description Cash on delivery */
                    cashOnDelivery: boolean;
                    /** @description Trade credit */
                    tradeCredit: boolean;
                };
                /** @description List of courier services for which shipping is free */
                availableCouriers: number[];
                /** @description List of courier services by which the products can be sent free of charge. IDs couriers */
                availableCouriersForSingleProduct: number[];
                /** @description List of regions with free shipment */
                availableRegions: number[];
            };
            /** @description Return and complaint settings */
            returnProductSettings: {
                /** @description Product can be returned */
                returnOptions: {
                    enabled: boolean;
                    /** @description yes - for companies */
                    firm: boolean;
                    /** @description yes - for wholesalers */
                    hurt: boolean;
                    /** @description yes - for retailers */
                    detalist: boolean;
                };
                byOwnService: boolean;
                byInPostSzybkieZwrotyByIAI: boolean;
            };
        };
        /** @description Standard unit settings */
        standardUnit?: {
            /** @description Possible special contexts corresponding to standard units. Available values: "CONTEXT_STD_UNIT_WEIGHT" - Product weight in grams, "CONTEXT_STD_UNIT_WEIGHT_SI" - Product weight in kilograms, "CONTEXT_STD_UNIT_VOLUME" - A product's value in milliliters "CONTEXT_STD_UNIT_VOLUME_SI" - A product's value in liters "CONTEXT_STD_UNIT_LENGTH" - Length of product in meters "CONTEXT_STD_UNIT_AREA_M2" - Area of ​​product in square meters "CONTEXT_STD_UNIT_VOLUME_M3" - The volume of products in cubic meters "CONTEXT_STD_UNIT_QUANTITY_PACKAGE" - Number of pieces per pack for standard unit */
            contextValue: string;
            /** @description Total length/volume/area/weight of product */
            standardUnitValue: number;
            /** @description Price converter per unit. Available values: "0" - default (taken from the category), "1" - price per gram/milliliter/meter "10" - price per 10 grams/10 milliliters/10 meters "100" - price per 100 grams/100 milliliters/100 meters "1000" - price per liter/kilogram/kilometer */
            converterUnitValue: number;
        };
        /** @description Minimal number of products in an order */
        minQuantityPerOrder?: {
            /** @description Minimum number of products in a retail order */
            minQuantityPerOrderRetail: number;
            /** @description Minimum number of products in a wholesale order */
            minQuantityPerOrderWholesale: number;
        };
        /** @description The product is free of charge. Possible values: "y" - is free of charge, "n" - is not free of charge. */
        productIsGratis?: string;
        /** @description Dimensions and overall weight */
        productDimensions?: {
            /** @description The width of a product in centimeters */
            productWidth: number;
            /** @description Height of a product in centimeters */
            productHeight: number;
            /** @description The length of a product in centimeters */
            productLength: number;
            /** @description Overall weight in grams */
            productOverallWeight: number;
        };
        /** @description Responsible producer code */
        responsibleProducerCode?: string;
        /** @description Responsible person code */
        responsiblePersonCode?: string;
    }[];
} & PagedResponse;

type ProductParameter = {
    /** @description Parameter ID */
    id: number;
    /** @description Names of section, parameter or value. */
    names: {
        /** @description Language ID */
        languageId: string;
        /** @description Description */
        value: string;
    }[];
    /** @description Descriptions of section, parameter or value. */
    descriptions: {
        /** @description Language ID */
        languageId: string;
        /** @description Description */
        value: string;
    }[];
    /** @description Search descriptions of parameter value. */
    searchDescription: {
        /** @description Language ID */
        languageId: string;
        /** @description Description */
        value: string;
        /** @description Shop Id */
        shopId: number;
    }[];
    /** @description Icons of section, parameter or value to display on the product card. */
    cardIcons: {
        /** @description Language ID */
        languageId: string;
        /** @description Description */
        value: string;
        /** @description Shop Id */
        shopId: number;
        /** @description Icon type */
        iconType: string;
    }[];
    /** @description Icons of section, parameter or value to display on the list of products. */
    linkIcons: {
        /** @description Language ID */
        languageId: string;
        /** @description Description */
        value: string;
        /** @description Shop Id */
        shopId: string;
        /** @description Icon type */
        iconType: string;
    }[];
    /** @description Parameter's additional feature. */
    contextId: string;
    /** @description value of additional feature. */
    contextValueId: string;
    /** @description Parameter type */
    type: string;
    /** @description Identifier of the parameter to which the value belongs */
    parameterId: string;
    /** @description List of parameter value identifiers */
    parameterValueIds: number[];
}

export type SearchProductsParametersResponse = {
    parametersResult: Record<string, ProductParameter>;
} & PagedResponse;

export type SearchClientsCrmResponse = {
    /** @description List of customers. */
    clientsResults: {
        /** @description Unique client's number. */
        clientId: number;
        /** @description Customer's login. */
        clientLogin: string;
        /** @description E-mail address. */
        clientEmail: string;
        /** @description Customer type, possible values:- person - if client sex is not determined,- person_male - when client is a male,- person_female - when a customer is a woman,- firm - when client is company. */
        clientType: "person" | "person_male" | "person_female" | "firm";
        /** @description Determines, whether client is a wholesaler. */
        clientIsWholesaler: "yes" | "no";
        /** @description Country ID in accordance with ISO-3166. */
        clientCountryId: string;
        /** @description Language ID */
        langId: string;
        /** @description Completed orders. */
        clientOrdersCompletedCount: number;
        /** @description Number of orders. */
        clientOrdersAllCount: number;
        /** @description Number of watched products. */
        clientObservedProductsCount: number;
        /** @description Number of purchased products. */
        clientPurchasedProductsCount: number;
        /** @description Total cash transaction value. */
        clientTotalOrdersValue: number;
        /** @description Total number of customer loyalty points. */
        clientLoyaltyPoints: number;
        /** @description Customer discount information */
        clientDiscount: {
            /** @description Discount type:- advanced,- simple,- none,- group. */
            clientDiscountType: "advanced" | "simple" | "none" | "group";
            /** @description percentage discount value. (No data is returned if rebate_type is not "simple"). */
            clientDiscountValue: number;
        };
        /** @description Date of last purchase. */
        clientLastPurchaseDate: string;
        /** @description Date of last customer login (YYYY-MM-DD) */
        clientLastLoginDate: string;
        /** @description List of shops the customer is active in */
        clientActiveInShops: {
            /** @description Shop Id */
            shopId: number;
            /** @description Store name. */
            shopName: string;
        }[];
        /** @description Information about the loyalty programpossible values:- yes_voucher - when customers are in a loyalty program and have only used vouchers,- yes_voucher_cash - when customers are in a loyalty program and have only used vouchers or cash deposits,- yes_clients,- yes_orders - when customers are in the loyalty program and have made at least one order,- no - when customers are in the loyalty program,- banned - when customers are blocked. */
        clientAffiliateProgram: {
            /** @description Does the customer participate in the loyalty program:- yes_voucher_cash,- yes_voucher,- no,- banned. */
            clientAffiliateProgramValue: "yes_voucher_cash" | "yes_voucher" | "no" | "banned";
            /** @description Data about loyalty program participant, omitted if active = no / banned. */
            affiliatePrograms: {
                /** @description Number of all orders. */
                clientAffiliateProgramTotalOrdersCount: number;
                /** @description Total cash transaction value. */
                clientAffiliateProgramTotalOrdersWorth: number;
                /** @description Partner name. */
                affiliateProgramName: string;
            }[];
        };
        /** @description List of observed products. If this parameter is returned, the maximum number of results was reached: 10. */
        clientObservedProductsData: {
            /** @description Product IAI code */
            productId: number;
            /** @description Size identifier */
            sizeId: string;
        }[];
        /** @description List of purchased products. If this parameter is returned, the maximum number of results was reached: 10. */
        clientPurchasedProductsData: {
            /** @description Product IAI code */
            productId: number;
            /** @description Size identifier */
            sizeId: string;
        }[];
        /** @description Order list. If this parameter is returned, the maximum number of results was reached: 10. */
        clientOrdersData: {
            /** @description Order ID. */
            orderId: string;
            /** @description Order serial number. */
            orderSerialNumber: number;
        }[];
        /** @description List of completed orders. If this parameter is returned, the maximum number of results was reached: 10. */
        clientOrdersCompletedData: {
            /** @description Order ID. */
            orderId: string;
            /** @description Order serial number. */
            orderSerialNumber: number;
        }[];
        /** @description Cell phone. */
        clientPhone1: string;
        /** @description Land line. */
        clientPhone2: string;
        /** @description Notes from customer. */
        clientNote: string;
        /** @description Number of opinions. */
        clientOpinionsCount: number;
        /** @description List of shops where a customer agreed or didn't agree to receive email newsletter. */
        newsletterEmailApprovalsData: {
            /** @description Permission to E-mail Newsletter. */
            inNewsletterEmailApproval: string;
            /** @description Shop Id */
            shopId: number;
        }[];
        /** @description List of shops where a customer agreed or didn't agree to receive sms newsletter. */
        newsletterSmsApprovalsData: {
            /** @description Permission to SMS Newsletter. */
            inNewsletterSmsApproval: string;
            /** @description Shop Id */
            shopId: number;
        }[];
        /** @description Information about customer balance. */
        clientBalances: {
            /** @description Balance value. */
            clientBalanceAmount: number;
            /** @description Currency ID */
            currencyId: string;
        }[];
        /** @description Customer orders statistics. */
        clientOrdersStatistic: {
            /** @description Retail turnover. */
            clientOrdersStatisticRetailValues: {
                /** @description Total net value. */
                orderRetailValueNet: number;
                /** @description Total gross value. */
                orderRetailValue: number;
                /** @description Currency ID */
                currencyId: string;
            }[];
            /** @description Wholesale turnover. */
            clientOrdersStatisticWholesaleValues: {
                /** @description Total net value. */
                orderWholesaleValueNet: number;
                /** @description Total gross value. */
                orderWholesaleValue: number;
                /** @description Currency ID */
                currencyId: string;
            }[];
            /** @description Turnover with the division to shops. */
            clientOrdersStatisticValuesByShops: {
                /** @description Shop Id */
                shopId: number;
                /** @description Turnover with the division to shops. */
                clientOrdersStatisticValues: {
                    /** @description Total net value. */
                    orderValueNet: number;
                    /** @description Total gross value. */
                    orderValue: number;
                    /** @description Currency ID */
                    currencyId: string;
                }[];
            }[];
            /** @description Profit margin. */
            clientProfitMargin: number;
            /** @description Average order value. */
            clientOrderValueAverage: number;
            /** @description Average amount of products in an order. */
            clientProductsCountAverage: number;
        };
        /** @description Number of returns. */
        clientRmaCount: number;
        /** @description Information about returns. */
        clientReturnsOrdersStatistic: {
            /** @description Number of returns. */
            clientReturnsOrdersCount: number;
            /** @description Number of returned products. */
            clientReturnsProductsCount: number;
        };
        clientLoyaltyCards: {
            /** @description Does the customer have a loyalty card.- yes_active,- yes_not_active,- no. */
            clientHasLoyaltyCard: "yes_active" | "yes_not_active" | "no";
            /** @description Customer loyalty card ID, omitted when has_loyalty_card = no. */
            clientLoyaltyCardId: number;
            /** @description Customer loyalty card number, omitted when has_loyalty_card = no. */
            clientLoyaltyCardNumber: string;
        }[];
        /** @description Customer's first name. */
        clientFirstName: string;
        /** @description Customer's last name. */
        clientLastName: string;
        /** @description Customer Tax no. */
        clientNip: string;
        /** @description Customer's company name. */
        clientFirm: string;
        /** @description External system code. */
        clientCodeExternal: string;
    }[];
} & PagedResponse;

export type SearchPackagesResponse = {
    /** @description Object contains detailed information on result of operation. */
    results: {
        /** @description Information on error that occurred during gate call. */
        errors: FaultCodeString;
        /** @description Package details. */
        deliveryPackage: {
            /** @description Shipment ID. */
            deliveryPackageId: number;
            /** @description Package number. */
            deliveryPackageNumber: string;
            /** @description consignment number. */
            deliveryShippingNumber: string;
            /** @description Courier ID. */
            courierId: number;
            /** @description Name of the supplier of the shipment. */
            courierName: string;
            /** @description Selected delivery date. */
            deliveryDate: string;
            /** @description Additional information on delivery date. */
            deliveryDateAdditional: string;
            /** @description Estimated date of shipment of the order. */
            estimatedDeliveryDate: string;
            /** @description Date of receipt by the buyer,possible formats:"YYYY-MM-dd HH:mm:ss","YYYY-MM-dd", */
            receivedDate: string;
            /** @description Package parameters. */
            deliveryPackageParameters: {
                /* @description Cash on delivery. */
                cashOnDelivery: number;
                /** @description Postal cash on delivery currency. */
                cashOnDeliveryCurrency: string;
                /** @description Parcel weight. */
                deliveryWeight: number;
                /** @description Link to package tracing. */
                trackingUrl: string;
                /** @description Cost for shop. */
                shippingStoreCosts: {
                    /* @description Package sending net cost. */
                    shippingStoreCostNet: number;
                    /* @description VAT rate for cost of package sending. */
                    shippingStoreCostVat: number;
                    /* @description Package sending gross cost. */
                    shippingStoreCostGross: number;
                }[];
                /** @description Package cost. */
                shippingCosts: {
                    /* @description Package sending net cost. */
                    shippingCostNet: number;
                    /* @description VAT rate for cost of package sending. */
                    shippingCostVat: number;
                    /* @description Package sending gross cost. */
                    shippingCostGross: number;
                }[];
                /** @description Shipment configuration options available for a given courier */
                parcelParameters: {
                    /** @description Key */
                    key: string;
                    /** @description Name */
                    name: string;
                    /** @description Type */
                    type: "radio" | "text" | "select" | "checkbox";
                    /** @description Default value for option */
                    defaultValue: string;
                    /** @description Available values ​​for the options */
                    options: {
                        /** @description Id */
                        id: string;
                        /** @description Name */
                        name: string;
                    }[];
                }[];
                /** @description Information on error that occurred during gate call. */
                errors: FaultCodeString;
            };
        };
        /** @description Type. */
        eventType: string;
        /** @description Id. */
        eventId: number;
        /** @description Parcel label encoded with base64 algorythm. */
        label?: string;
    }[];
};

export type SearchCategoriesIdosellResponse = {
    /** @description List of IdoSell Categories */
    categoriesIdoSell: {
        /** @description IdoSell Category ID */
        categoryIdoSellId: number;
        /** @description Parent's identifier */
        categoryIdoSellParentId: number;
        /** @description Items quantity */
        productsCount: number;
        /** @description Information about IdoSell Category in a given language  */
        categoryIdoSellLangsData: {
            /** @description Language ID (code in ISO 639-2). */
            languageId: string;
            /** @description IdoSell Category name */
            categoryIdoSellName: string;
            /** @description IdoSell Category pathname */
            categoryIdoSellPath: string;
        }[];
    }[];
} & PagedResponse;

export type SearchOpinionsResponse = {
    /** @description Object contains detailed information on result of operation. */
    results: {
        id: number;
        content: string;
        createDate: string;
        points: "1" | "2" | "3" | "4" | "5";
        confirmed: boolean;
        rating: string;
        /** @description Customer language ID. */
        language: string;
        host: string;
        /** @description Shop Id */
        shopId: number;
        scorePositive: number;
        scoreNegative: number;
        picture: {
            large: {
                url: string;
                width: number;
                height: number;
                hash: string;
            };
            small: {
                url: string;
                width: number;
                height: number;
                hash: string;
            };
        };
        /** @description Opinion writer's data */
        client: {
            /** @description Customer's login. */
            login: string;
            id: number;
        };
        order: {
            serialNumber: number;
        };
        /** @description Reply to an opinion */
        answer: string;
        /** @description Date of reply to opinion in the YYYY-MM-DD HH:MM:SS format */
        answerDatetime: string;
        /** @description Opinion modification date */
        modificationDatetime: string;
    }[];
} & PagedResponse;

export type SearchDeliveryTimeResponse = {
    /** @description Object contains detailed information on result of operation. */
    results: {
        /** @description Product IAI code */
        productId: number;
        /** @description Size identifier */
        sizeId: string;
        /** @description Size name */
        sizePanelName: string;
        /* @description Product stock quantity */
        productSizeQuantity: number;
        /** @description Producer code */
        productProducerCode: string;
        /** @description External product system code for size. */
        productSizeCodeExternal: string;
        /** @description Number of days required to prepare product for shipment */
        deliveryTimeDays: number;
        /** @description Number of hours required to prepare product for shipment */
        deliveryTimeHours: number;
        /** @description Error number */
        errno: number;
        /** @description Error information. */
        error: string;
    }[];
};

export type SearchGiftcardsResponse = {
    result: ({
        /** @description Gift card data */
        giftCardData: {
            /** @description Card ID */
            id: number;
            /** @description Card number */
            number: string;
            /** @description Name of card */
            name: string;
            /** @description Card expiration date */
            expirationDate: string;
            /** @description Card balance */
            balance: {
                /* @description Available balance */
                amount: number;
                /** @description Currency. */
                currency: string;
            };
            /** @description List of shops the card is active in */
            shops: number[];
            /** @description note */
            note: string;
            /** @description Is active? */
            blocked: boolean;
        };
        } & FaultCodeString)[];
} & PagedResponse;

type SearchNewsletterResponse<T> = {
    /** @description Customer data. */
    clients: ({
        /** @description Customer ID. */
        client_number: number;
        /** @description Customer's login. */
        login: string;
        /** @description Is registered. */
        registered: string;
        /** @description Customer language ID. */
        language: string;
        /** @description Customer e-mail address. */
        shops: {
            /** @description shop ID. */
            shop_id: number;
            /** @description Newsletter participant approval */
            approval: string;
            /** @description Last modification date. For noregister client - adding to newsletter, for registered - last modification participant in newsletter (add or remove from newsletter lists) */
            date_modification: string;
        }[];
    } & T)[];
} & PagedSnakecaseResponse;

export type SearchNewsletterEmailResponse = SearchNewsletterResponse<{
    /** @description Customer e-mail address. */
    email: string;
}>;

export type SearchNewsletterSmsResponse = SearchNewsletterResponse<{
    /** @description Cell phone. */
    phone_cellular: string;
}>;

export type GetStocksdocumentsProductsResponse = {
    /** @description Products list. */
    products: {
        /** @description Stock keeping unit. */
        product: number;
        /** @description Product name. */
        name: string;
        /** @description Product size ID. */
        size: string;
        /** @description Size name */
        sizeName: string;
        quantity: number;
        ordersQuantity: {
            /** @description Order ID. If the products are not required for the order (they are collected to stock), 0 is returned. */
            orderSerialNumber: number;
            /* @description Product quantity. */
            productQuantity: number;
        }[];
        /* @description Gross purchase price */
        productPurchasePriceGross: number;
        /* @description Net purchase price */
        productPurchasePriceNet: number;
        /* @description Value of VAT */
        productVat: number;
        /** @description Currency ID */
        currencyId: string;
        /** @description External system code. */
        sizeCodeExternal: string;
        /** @description Producer code. */
        sizeCodeProducer: string;
        /** @description Product type on the document. */
        typeOnDocument: "temporaryProduct" | "existingProduct";
        /** @description Warehouse location ID.  The list of available warehouse locations can be downloaded via the method <a href = "pl/shop/api/?action=method&function=locations&method=get">#get</a> in gateway <a href = "en/shop/api/?action=documentation&function=locations">Locations</a> . */
        locationId: number;
        /** @description Storage location code */
        locationCode: string;
        /** @description Warehouse location full path.  The list of available warehouse locations can be downloaded via the method <a href = "pl/shop/api/?action=method&function=locations&method=get">#get</a> in gateway <a href = "en/shop/api/?action=documentation&function=locations">Locations</a> . */
        locationPath: string;
    }[];
} & PagedSnakecaseResponse;

export type GetStocksdocumentsDocumentsResponse = {
    /** @description List of documents. */
    stocksDocuments: {
        /** @description Document identifier. */
        stockDocumentId: number;
        /** @description Document number. */
        stockDocumentNumber: string;
        /** @description Document type. */
        stockDocumentType: "pz" | "pw" | "px" | "rx" | "rw" | "wz" | "mm" | "zw";
        /** @description Document status. */
        stockDocumentStatus: "open" | "on_the_way" | "close" | "close_delivered" | "close_returned";
        /** @description Note to document. */
        stockDocumentNote: string;
        /** @description Stock ID */
        stockId: number;
        /** @description Source warehouse ID */
        stockSourceId: number;
        /** @description Document issue date in the YYYY-MM-DD HH:MM:SS format */
        openDate: string;
        /** @description User who issued the document */
        openUser: string;
        /** @description Document closing date in the  YYYY-MM-DD HH:MM:SS format */
        closeDate: string;
        /** @description The user who closed the document */
        closeUser: string;
        /** @description Document modification date in the YYYY-MM-DD HH:MM:SS format */
        modificationDate: string;
        /** @description The user who modified the document */
        modificationUser: string;
        /** @description Change in stock date in the YYYY-MM-DD HH:MM:SS format */
        stockOperationDate: string;
        /** @description The user who caused the change in stock */
        stockOperationUser: string;
        /** @description Delivery on the way. */
        deliveryOnTheWay: boolean;
        /** @description Planned date of acceptance of delivery. */
        plannedDeliveryDate: string;
        /** @description Products available in presales. */
        productsInPreorder: string;
        /** @description Supplier ID. */
        delivererId: number;
        /** @description Purchase document */
        purchaseDocument: {
            /** @description Type of purchase document */
            type: "national_VAT_invoice" | "other_purchase_document" | "invoice_without_VAT" | "imports_from_outside_the_EU";
            /** @description Number of purchase document */
            number: string;
        };
        /** @description Order serial number. */
        orderNumber: number;
        /** @description Supplier name. */
        delivererName: string;
        /** @description Issue date of purchase document */
        saleDocumentCreationDate: string;
        /** @description settled at */
        priceType: string;
    }[];
} & PagedResponse;

export type GetClientsResponse = {
    /** @description Number of all results found */
    resultsNumberAll: number;
    /** @description Number of pages of results found */
    resultsNumberPage: number;
    /** @description Page with results number. Numeration starts from 0 */
    resultsPage: number;
    /** @description Number of results on page. Value from 1 to 100 */
    resultsLimit: number;
    /** @description Object contains detailed information on result of operation. */
    results: {
        /** @description Unique client's number. */
        clientId: number;
        /** @description Last modification date. */
        clientsLastModificationDate: string;
        /** @description Customer's login. */
        clientLogin: string;
        /** @description External system code. */
        clientCodeExternal: string;
        /** @description E-mail address. */
        clientEmail: string;
        /** @description Customer type, possible values:- private - if client sex is not determined,- male - when client is a male,- female - when a customer is a woman,- firm - when client is company. */
        clientType: string;
        /** @description Display as partner on the page:n - No,y - Yes. */
        showClientAsPartner: "y" | "n";
        operator: {
            /** @description Customer's login. */
            login: string;
            /** @description Name. */
            name: string;
        };
        /** @description Is client without registration */
        isUnregistered: "y" | "n";
        /** @description Block assigning of discount groups automatically based on order history */
        blockAutomaticallyAssigningGroupDiscount: "y" | "n";
        /** @description Client's billing address' data. */
        clientBillingAddress: {
            /** @description Customer's first name. */
            clientFirstName: string;
            /** @description Customer's last name. */
            clientLastName: string;
            /** @description Customer Tax no. */
            clientNip: string;
            /** @description Customer's company name. */
            clientFirm: string;
            /** @description Street and number. */
            clientStreet: string;
            /** @description Customer's postal code. */
            clientZipCode: string;
            /** @description Customer's city. */
            clientCity: string;
            /** @description Country ID in accordance with ISO-3166. */
            clientCountryId: string;
            /** @description Administrative region code. */
            clientRegionId: string;
            /** @description Administrative region code. */
            clientProvinceId: string;
            /** @description Cell phone. */
            clientPhone1: string;
            /** @description Land line. */
            clientPhone2: string;
        };
        /** @description Personal information about customer. */
        clientPersonalData: {
            /** @description Date of birth. */
            clientBirthDate: string;
        };
        /** @description Customer preferences. */
        clientPreferences: {
            /** @description Language ID */
            langId: string;
            /** @description Currency ID */
            currencyId: string;
            /** @description Determines, whether client is a wholesaler. */
            clientIsWholesaler: "yes" | "no";
            /** @description Is the customer VAT registered:always - always,never - never,neverconfirm - no, this requires confirmation,bycountry - settings as per country. */
            clientVatPreferences: "always" | "never" | "neverconfirm" | "bycountry";
            /** @description Discount group ID. */
            clientGroupDiscountNumber: number;
            /** @description Customer group name. */
            clientGroupDiscountName: string;
        };
        /** @description List of shops where a customer agreed or didn't agree to receive email newsletter. */
        newsletterEmailApprovalsData: {
            /** @description Date from which a customer agreed to receive the newsletter. */
            newsletterEmailApprovalDate: string;
            /** @description Shop Id */
            shopId: number;
        }[];
        /** @description List of shops where a customer agreed or didn't agree to receive sms newsletter. */
        newsletterSmsApprovalsData: {
            /** @description Date from which a customer agreed to receive the newsletter. */
            newsletterSmsApprovalDate: string;
            /** @description Shop Id */
            shopId: number;
        }[];
        /** @description Information about customer balance. */
        clientBalances: {
            /* @description Balance value. */
            clientBalanceAmount: number;
            /** @description Currency ID */
            currencyId: string;
        }[];
        /** @description Customer trade credit information. */
        clientTradeCredit: {
            /* @description Granted credit limit. */
            clientTradeCreditLimit: number;
            /** @description Currency ID */
            currencyId: string;
            /* @description Used credit limit. */
            clientTradeCreditUsed: number;
        };
        /** @description The parameter stores information about who acquired the customer */
        affiliateLogin: string;
        /** @description ID of a partner who acquired a given customer. */
        affiliateId: number;
        /* Format: date
         * @description Client registration date */
        clientRegistrationDate: string;
        /** @description List of shops the customer is active in */
        clientActiveInShops: {
            /** @description Shop Id */
            shopId: number;
            /** @description Store name. */
            shopName: string;
        }[];
    }[];
} & PagedResponse;

export type GetReturnsResponse = {
    /** @description Element that contains the list of found returns. */
    returns: {
        /** @description Merchandise identifier. */
        id: number;
        /** @description Order serial number */
        order_sn: number;
        /** @description Status label. */
        status: string;
        /** @description Identifier of the status label. */
        status_numeric: number;
        /** @description Status label in the user language. */
        statusNameInUserLanguage: string;
        /** @description Status. */
        parentStatus: string;
        /** @description Status identifier. */
        parentStatusNumeric: number;
        /** @description Status name in the user language. */
        parentStatusNameInUserLanguage: string;
        /** @description Stock to accept returned products. */
        stock_id: number;
        /** @description Products list. */
        products: {
            /** @description Merchandise identifier. */
            id: number;
            /** @description Size identifier. */
            size: string;
            /** @description Code of outside system for product. */
            product_sizecode: string;
            /* @description Product quantity. */
            quantity: number;
            /* @description Price. */
            price: number;
            /* @description Net price. */
            price_net: number;
            /* @description Order value. */
            order_price: number;
            /* @description Net order worth. */
            order_price_net: number;
            /** @description Client's remarks on product. */
            remarks: string;
            /* @description Loyalty points. */
            points: number;
            /* @description Accrued loyalty points. */
            points_awarded: number;
            /** @description Product type. */
            product_type: string;
            serial_numbers: string[];
            /** @description Additional information. */
            product_order_additional: string;
        }[];
        /** @description Added on. */
        date_add: string;
        /** @description Ending date */
        date_end: string;
        /** @description Consignment number assigned to return. */
        package_number: string;
        /** @description Last modification date. */
        date_last_edit: string;
        /** @description Currency. */
        currency: string;
        /** @description Note to return used by IAI Bridge. */
        bridge_note: string;
        /** @description Shipping fee will be refunded to customer? */
        include_shipping_cost: string;
        /** @description Refund additional fee for the payment?. */
        additional_payment_cost: string;
        /* @description Cost for shop. */
        shop_shipping_cost: number;
        /** @description Return shipping number sent by the customer to the seller */
        incomingShippingNumber: string;
        /* @description Cost for shop - VAT rate */
        shop_shipping_cost_vat: number;
        /** @description Product return method. */
        return_method: string;
        /** @description Customer bank account number. */
        account_number: string;
        /** */
        preferedPaymentType: "customerBalance" | "bankTransfer" | "postal" | "cash";
        /** @description Return note. */
        userNote: string;
        /** @description Notes from customer. */
        clientNote: string;
        /** @description Information about prepayment for the order. */
        prepaids: {
            /** @description Order payment identifier. */
            prepaidId: number;
            /** @description Payment number for order. */
            paymentOrdinalNumber: number;
            /** @description Payment number - [order no.]-[payment no.], i.e. 1234-1. */
            paymentNumber: string;
            /** @description Date of payment addition. */
            paymentAddDate: string;
            /** @description Client's payment modification date. */
            paymentModifiedDateByClient: string;
            /** @description Payment modification date made by shop staff. */
            paymentModifiedDateByShop: string;
            /** @description Payment status. */
            paymentStatus: "pending" | "processed" | "cancelled";
            /** @description Preferred refund method. Types: `payment` - refund to customer for returned products, `repayment` - correction of refunded money */
            paymentType: "payment" | "advance" | "repayment" | "fee";
            /** @description Form of payment ID. */
            payformId: number;
            /** @description Name of payment form. */
            payformName: string;
            /** @description Account. */
            payformAccount: string;
            /* @description Payment amount. */
            paymentValue: number;
            /** @description Currency ID */
            currencyId: string;
            /** @description Number of voucher used in a payment. */
            voucherNumber: string;
            /** @description Number of gift card used in a payment. */
            giftCardNumber: string;
        }[];
        /** @description Shipping cost of the order */
        shippingCost: {
            /* @description Gross value. */
            gross: number;
            /* @description Net value. */
            net: number;
            /* @description VAT rate. */
            vat: number;
        };
        /** @description Additional costs for the payment of the order */
        additionalPaymentCostValue: {
            /* @description Gross value. */
            gross: number;
            /* @description Net value. */
            net: number;
            /* @description VAT rate. */
            vat: number;
        };
    }[];
} & PagedSnakecaseResponse;

export type GetRmaResponse = {
    /** @description Complaints. */
    rmas: {
        /** @description Complaint id. */
        rmaId: number;
        /** @description Customer's login. */
        clientLogin: string;
        /** @description Customer ID */
        clientNumber: number;
        /** @description ID of the product which the complaint concers */
        productId: string;
        /** @description Product name. */
        productName: string;
        /** @description Current complaint status */
        rmaStatus: string;
        /** @description Complaint creation date in the YYYY-MM-DD format */
        creationDate: string;
        /** @description Complaint modification date in the YYYY-MM-DD format */
        modificationDate: string;
        /** @description Complaint closing date in the YYYY-MM-DD format */
        endDate: string;
        /** @description Reimbursement method */
        paymentReturnMethod: string;
        /** @description Bank account number or customer address used for reimbursement */
        paymentReturnDetails: string;
        /** @description Order source data. */
        orderSource: string;
        /** @description Message displayed for the customer */
        comments: string;
        /** @description Stock ID */
        stockId: number;
        /** @description Login of the user handling the complaint */
        operatorLogin: string;
        /** @description External auction number connected to the order which the complaint concerns */
        orderAuctionNumber: string;
        /** @description Order ID. */
        orderId: string;
        /** @description Place of making the order which the complaint concerns */
        orderPlace: string;
        /** @description Serial number of the product. */
        productSerialNumber: string;
        /** @description Description of the defect. New RMA module enables downloading a complaint description from chat. Parameter: rmaChat */
        rmaDescription: string;
        /** @description List of products */
        products: {
            /** @description Product id */
            id: number;
            /** @description Product size */
            size: string;
            /** @description Size code */
            productSizecode: string;
            /* @description Product quantity */
            quantity: number;
            /* @description Product price */
            price: number;
            /* @description Product net price */
            priceNet: number;
            /* @description Order price */
            orderPrice: number;
            /* @description Order price net */
            orderPriceNet: number;
            /* @description Points */
            points: number;
            /* @description Awarded points */
            pointsAwarded: number;
            /** @description Product types: `product_item` - single or multi variant product, `product_free` - free product, `product_packaging` - packaging, `product_bundle` - bundle, `product_collection` - collection, `product_service` - service, `product_virtual` - virtual, `product_configurable` - product with configurator */
            productType: string;
            /** @description Product serial numbers"1","2"] */
            serial_numbers: string[];
            /** @description Additional information */
            productOrderAdditional: string;
            /** @description List of attachments"1","2"] */
            attachments: string[];
        }[];
        /** @description Customer correspondence */
        rmaChat: {
            /** @description Message sender type. Available values: client - shop customer, panel - administration panel handling */
            messageAuthor: string;
            /** @description Message sender login */
            messageAuthorLogin: string;
            /** @description Message content */
            message: string;
            /** @description Date of adding a message in the YYYY-MM-DD hh:mm:ss format */
            messageAddTime: string;
        }[];
        /** @description Information on error that occurred during gate call. */
        errors: FaultCodeString
    }[];
    /** @description Flag marking errors in the result. */
    isErrors: boolean;
} & PagedResponse;

export type GetConfigResponse = {
    /** @description Customers ID */
    client_id: number;
    /** @description Dedicated server. */
    dedicated_server: boolean;
    shop_owner_data: {
        /** @description Full company name. */
        company_name: string;
        /** @description Company short name. */
        company_short_name: string;
        /** @description NIP [TIN]. */
        nip: string;
        /** @description CRN. */
        regon: string;
        /** @description no of entry to NCR. */
        krs: string;
        /** @description Address. */
        address: string;
        /** @description Customer's postal code. */
        zipcode: string;
        /** @description Town / City. */
        city: string;
        /** @description region. */
        country: string;
        /** @description VAT registered. */
        VATRegistered: boolean;
    };
    /** @description List of languages configured in the administration panel. */
    languages: {
        /** @description Language code. Codes are compliant with ISO-639-3 standard. */
        lang_id: string;
        /** @description Language name. */
        lang_name: string;
    }[];
    /** @description Code of default panel language in ISO-639-3 standard. */
    panel_lang_id_default: string;
    /** @description Panel base currency ID. */
    panel_basecurrency_id: string;
    panel_settings: {
        /** @description Default panel language. */
        default_lang_id: string;
        /** @description Panel base currency. */
        basecurrency_id: string;
        /** @description Manual stock quantity modification restriction. */
        stocks_change_disabled: string;
        /** */
        stock_state_config: "uncontrolled" | "bridge" | "outside";
        /** */
        main_stock_system: "other" | "iai";
        search_by_code: {
            /** @description IAI code. */
            code_iai: boolean;
            /** @description External system code. */
            code_extern: boolean;
            /** @description Producer code. */
            code_producer: boolean;
        };
        /** @description Fiscal and settlement settings */
        taxSettings: {
            /** @description Sales date settings on sales documents for prepaid orders */
            saleDatePrepaid: "saleDateFromOrder" | "saleDateFromPayment" | "saleDateFromDocument";
            /** @description Sales date settings on sales documents for orders paid with cash on delivery */
            saleDateCashOnDelivery: "saleDateFromOrder" | "saleDateFromPayment" | "saleDateFromDocument";
            /** @description Sales date settings on sales documents for orders paid with trade credit */
            saleDateTradeCredit: "saleDateFromOrder" | "saleDateFromPayment" | "saleDateFromDocument";
            /** @description Configuration of default currency rate for orders */
            currencyRate: "currentDay" | "previousDay";
        };
    };
    panel_literals: {
        /** @description "Reduced price" - name in the panel. */
        promotion: string;
        /** @description "Sale" - name in panel. */
        discount: string;
        /** @description "Distinguished product" - name in panel. */
        distinguished: string;
        /** @description "Warranty" - name in shop. */
        warranty: string;
    };
    /** @description List of warehouses. */
    stocks: {
        /** @description Stock ID. */
        stock_id: number;
        /** @description Stock name. */
        stock_name: string;
    }[];
    /** @description List of stores. */
    shops: {
        /** @description Shop Id */
        shop_id: number;
        /** @description Store name. */
        shop_name: string;
        /** @description Default shop language ID in ISO-639-3 standard. */
        shop_lang_id_default: string;
        /** @description Determines whether loyalty program is active. */
        shop_loyalty_active: boolean;
        active_price_comparers: {
            /** @description Id */
            id: number;
            /* @description Default price difference. */
            default_price_percent_diff: number;
        }[];
        /** @description Url to default product icon. */
        default_icon_url: string;
        branch_document_data: {
            /** @description Full company name. */
            company_name: string;
            /** @description Company short name. */
            company_short_name: string;
            /** @description NIP [TIN]. */
            nip: string;
            /** @description CRN. */
            regon: string;
            /** @description no of entry to NCR. */
            krs: string;
            /** @description Address. */
            address: string;
            /** @description Customer's postal code. */
            zipcode: string;
            /** @description Town / City. */
            city: string;
            /** @description region. */
            country: string;
        };
        active_client_order_edit_status: string[];
        /** @description Auction site currency ID. */
        currency_id: string;
        client_edit_require_fields: {
            /** @description Is providing a value required for the field. */
            lastname: boolean;
            /** @description Is providing a value required for the field. */
            email: boolean;
            /** @description Is providing a value required for the field. */
            phone: boolean;
            /** @description Is providing a value required for the field. */
            vat_number: boolean;
        };
        /** @description Defines how to include complimentary products on VAT invoices and receipts. */
        product_free_invoices: string;
        /** @description Does the store have active vouchers?. */
        vouchers: {
            /** @description Information about whether price comparison service is active. */
            active: boolean;
        };
        /** @description Does the store have active gift cards?. */
        giftCards: {
            /** @description Information about whether price comparison service is active. */
            active: boolean;
        };
        defaultConfigReturns: {
            /** @description Refund a shipping fee? */
            defaultIncludeShippingCost: string;
            /** @description How to proceed with a refund.Available values:"fullOnFirstReturn" - refund all at the first refund,"proportionalToProductQuantity" - refund proportionally to a number of products in an original order,"fullOnAllProductsReturn" - refund at the return of a whole order. */
            methodReturnShippingCost: "fullOnFirstReturn" | "proportionalToProductQuantity" | "fullOnAllProductsReturn";
            /** @description Refund.Available values:"shipping" - delivery cost calculated for a primary order,"positive_min_shipping" - the lowest amount of delivery costs available at the moment of placing an order for the selected delivery method (more than zero but less than actual cost charged),"min_shipping" - absolute the lowest delivery cost available at the moment of placing an order for the selected delivery method (for free shipping it is zero). */
            defaultIncludeShippingCostValue: "shipping" | "positive_min_shipping" | "min_shipping";
            /** @description Refund a surcharge for a payment method used in an order? */
            defaultAdditionalPaymentCost: string;
        };
        /** @description Sales documents in third party application. */
        salesDocumentsAreCreatedByClient: boolean;
    }[];
    /** @description List of size units. */
    units: {
        /** @description Unit of measure ID. */
        unit_id: number;
        /** @description Unit of measure name in panel. */
        unit_name: string;
        /** @description Accuracy (number of places after comma). */
        unit_precision: number;
        /** @description Object determines unit visibility in panel.List of values:"y" - unit visible in panel,"n" - unit invisible in panel. */
        unit_visible: string;
        lang_data: {
            /** @description Language code. Codes are compliant with ISO-639-3 standard. */
            lang_id: string;
            /** @description Name (singular). */
            singular_name: string;
            /** @description Name (plural). */
            plural_name: string;
            /** @description Name (by fractions). */
            fraction_name: string;
        }[];
    }[];
    /** @description List of warranties. */
    warranties: {
        /** @description Id */
        id: number;
        /** @description Name */
        name: string;
    }[];
    /** @description List of parcel delivery companies. */
    deliverers: {
        /** @description Id */
        id: number;
        /** @description Name */
        name: string;
    }[];
    product_deliverers: {
        /** @description Id */
        id: number;
        /** @description Name */
        name: string;
    }[];
    vat_rates: {
        /** @description Id */
        id: number;
        /* @description VAT rate value. */
        value: number;
    }[];
    auction_systems: {
        /** @description Auction system ID. */
        auction_id: number;
        /** @description Auction site ID. */
        site_id: number;
        /** @description Auction site currency ID. */
        currency_id: string;
        /** @description Auction site description. */
        description: string;
    }[];
    availability_profiles: {
        /** @description Id */
        id: number;
        /** @description Name */
        name: string;
    }[];
    rebate_profiles: {
        /** @description Id */
        id: number;
        /** @description Name */
        name: string;
    }[];
    pictures_settings: {
        /** @description Object determines if the product icon should be scaled.List of values:"y" - icon is scaled,"n" - icon is unscaled. */
        icon_resize: string;
        /** @description Graphic quality in percent (0-100). ."0" - the worst quality,"100" - the best quality (no compression). */
        icon_quality: number;
        /** @description Large icon width in pixels. */
        icon_large_width: number;
        /** @description Large icon height in pixels. */
        icon_large_height: number;
        /** @description Small icon width in pixels. */
        icon_small_width: number;
        /** @description Small icon height in pixels. */
        icon_small_height: number;
        /** @description Width of an icon on the marketplaces. */
        auction_icon_height: number;
        /** @description Hight of an icon on the marketplaces. */
        auction_icon_width: number;
        /** @description Group icon width in pixels. */
        group_icon_height: number;
        /** @description Group icon height in pixels. */
        group_icon_width: number;
        /** @description Photo quality in percents (0-100)."0" - the worst quality,"100" - the best quality (no compression). */
        picture_quality: number;
        /** @description Large photo width in pixels. */
        picture_large_width: number;
        /** @description Large photo height in pixels. */
        picture_large_height: number;
        /** @description Medium photo width in pixels. */
        picture_medium_width: number;
        /** @description Medium photo height in pixels. */
        picture_medium_height: number;
        /** @description Small photo width in pixels. */
        picture_small_width: number;
        /** @description Small photo height in pixels. */
        picture_small_height: number;
    };
    price_comparers: {
        /** @description Id */
        id: number;
        /** @description key */
        key: string;
        /** @description Name */
        name: string;
        /** @description Information about whether price comparison service is active. */
        active: string;
    }[];
    /** @description Content of the column "Product or service name" on sales documents. */
    inv_prod_name_templace: string;
    /** @description List of document printers. */
    printers: {
        /** @description Id */
        id: number;
        /** @description Name */
        name: string;
        /** @description Address. */
        address: string;
        /** @description key */
        key: string;
    }[];
    /** @description List of fiscal printers. */
    fiscal_printers: {
        /** @description Id */
        id: number;
        /** @description Name */
        name: string;
        /** @description Address. */
        address: string;
        /** @description key */
        key: string;
    }[];
    /** @description Monitoring address protocol from the main Printer window. */
    typeOfPrinterProtocolAdress: string;
};

export { }