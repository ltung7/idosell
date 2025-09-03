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
        /** @description Order ID. */
        orderId: string;
        /** @description Order note supported by IAI Bridge. */
        orderBridgeNote: string;
        /** @description Order serial number. */
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
                clientAdditional?: string;
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
            clientPickupPointAddress?: {
                /** @description Collection point ID. */
                pickupPointId: number;
                /** @description Town / City. */
                city: string;
                /** @description Address. */
                street: string;
                /** @description ZIP / Post code. */
                zipCode: string;
                /** @example description */
                description: string;
                /** @description Latitude. */
                latitude: number;
                /** @description Longitude. */
                longitude: number;
                /** @description Name. */
                name: string;
            };
            /** @description Buyer's address data. */
            payerAddress?: {
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
            /** @description Order status id. */
            orderStatusId: number;
            /** @example dropshippingOrderStatus */
            dropshippingOrderStatus: string;
            /** @description Type of order confirmation. Confirmations listing: "none" - order unconfirmed , "email" - order confirmed by e-mail, "phone_client" - order confirmed by phone call made by client, "phone_service" - order confirmed by phone call made by staff, "postauction" - order confirmed by auction return page, "willingness" - confirmed by willingness to buy letter, "auctionfod" - confirmed by after-sales form Allegro. */
            orderConfirmation: string;
            /** @description Date of order placing in YYYY-MM-DD HH:MM:SS format. */
            orderAddDate: string;
            /** @description Date of order sending in YYYY-MM-DD HH:MM:SS format. */
            orderDispatchDate: 0 | string | null;
            /** @example receivedDate */
            receivedDate: string;
            /** @description Order handling time in seconds. */
            orderPrepareTime: number | null;
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
                    orderCurrencyScale?: number;
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
                    /** @example billingCurrency */
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
                voucherNumber?: string;
                /** @description Number of gift card used in a payment. */
                giftCardNumber?: string;
            }[];
            /** @description Order source data. */
            orderSourceResults: {
                /** @description order source type - possible values:. "self_added" - Orders from panel, "shop" - Orders from shop, "search_engine" - Orders from search engines, "auction" - Orders from auctions, "advertisement_campaign" - Advertisement campaigns, "price_comparer" - Price comparison sites, "affiliate_program" - Affiliate programme, "api" - Order from API, "eletronic_offer" - Order from ODT price lst, "cpa" - Order from CPA program, "refferer_site" - Order from reference sites, "pos" - Orders from POS, "marketplace" - Order from the Marketplace, "iai_ads" - Orders from IAI Ads */
                orderSourceType: string;
                /** @description Shop Id */
                shopId: number;
                /** @description Auction site order comes from. Auction sites listing: "allegro" - Allegro.pl, "testwebapi" - Allegro.pl test site, "ebay" - eBay. */
                auctionsServiceName: string | null;
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
                    /** @example 1 */
                    entryProductIdBeforeOrder?: number;
                    /** @example sourcePageUrl */
                    sourcePageUrl?: string;
                    /** @description The order ID of the external service */
                    orderExternalId: string | null;
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
                    /** @example entryDate */
                    entryDate: string;
                }[];
            };
            /** @description Data of auction, order comes from (only if it comes from auction). */
            auctionInfo: {
                /** @description Account ID on auction site. */
                auctionClientId?: string;
                /** @description Account login on auction site. */
                auctionClientLogin?: string;
                /** @description #!TablicaNumerowAukcjiDoZamowienia!#. */
                auctionItemsIds?: {
                    /** @description Auction number. */
                    auctionItemId: string;
                }[];
                /** @description The customer's email address at the auction service. */
                auctionClientEmail?: string;
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
                versionName?: string;
                /** @description Size identifier */
                sizeId: string;
                /** @description Size name */
                sizePanelName: string;
                /** @description External product system code for size. */
                productSizeCodeExternal: string;
                /** @description Stock ID */
                stockId: number;
                /** @description Serial number of the product. */
                productSerialNumber?: string;
                /** @description Product quantity. */
                productQuantity: number;
                /** @description Weight. */
                productWeight: number;
                /** @description Value of VAT */
                productVat: number;
                /** @description Is product VAT free Allowed values "y" - yes, "n" - no. */
                productVatFree?: string;
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
                orderAdditionalList?: {
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
                /** @description Label for grouping products. */
                label: string | null;
                /** @description Product selling mode. Available values: "money", "gift", "points". */
                orderSalesMode: "money" | "gift" | "points";
                /** @description A set's ID. */
                bundleId: number;
                /** @description Serial numbers. */
                productSerialNumbers: string | null;
                /** @description Additional information. */
                productOrderAdditional: string;
                /** @description Item in basket. */
                basketPosition: number;
                /** @description price information. */
                productPriceLog: string;
                /** @description Information about the selected parameters in the configurator. */
                priceFormulaParameters?: {
                    /** @description Parameter ID */
                    parameterId: string;
                    /** @description Parameter name. */
                    parameterName: string;
                    /** @description Parameter values */
                    parameterValues: {
                        /** @example valueId */
                        valueId: string;
                        /** @example valueName */
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
            discountCode?: {
                /** @description Campaign ID. */
                campaignId: string;
                /** @description Name of code. */
                discountCodeName: string;
                /** @description Accrued discount */
                discountCodeValue: string;
            };
            /** @description Discount card */
            discountCard?: {
                /** @description Name of card */
                discountCardName: string;
            };
            /** @description Order handler. */
            orderOperatorLogin: string;
            /** @description Order picker. */
            orderPackingPersonLogin: string | null;
            /** @description Sale date. ISO 8602 format. */
            purchaseDate: string;
            /** @description Modification date in YYYY-MM-DD HH:MM:SS format . */
            orderChangeDate: string;
            /** @description Subscription's identifier */
            subscriptionId: number;
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
        /** @example productIsDeleted */
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
            productIconHash?: string | false;
            /** @example productIconLargeUrlSecond */
            productIconLargeUrlSecond?: string;
            /** */
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
            /** @example productAuctionIconLargeUrlSecond */
            productAuctionIconLargeUrlSecond?: string;
            /** */
            productAuctionIconLargeSizeSecond?: number;
            /** @example productAuctionIconSmallUrlSecond */
            productAuctionIconSmallUrlSecond?: string;
            /** */
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
            /** @example productGroupIconLargeUrlSecond */
            productGroupIconLargeUrlSecond?: string;
            /** @example productGroupIconLargeSizeSecond */
            productGroupIconLargeSizeSecond?: string;
            /** @example productGroupIconSmallUrlSecond */
            productGroupIconSmallUrlSecond?: string;
            /** */
            productGroupIconSmallSize?: number;
            /** */
            productGroupIconSmallSizeSecond?: number;
        };
        /** @description Product photos details. */
        productImages?: {
            /** @description URL of a large graphics */
            productImageLargeUrl?: string;
            /** @example productImageLargeUrlSecond */
            productImageLargeUrlSecond?: string;
            /** @example productImageMediumUrlSecond */
            productImageMediumUrlSecond?: string;
            /** @example productImageSmallUrlSecond */
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
                versionCommonPriceAuctions?: string;
                /** @description Same advance. Available values: "y" - yes, "n" - no. */
                versionCommonAdvance: string;
                /** @description Same quantity discount. Available values: "y" - yes, "n" - no. */
                versionCommonRebate: string;
                /** @description the same VAT rate. Available values: "y" - yes, "n" - no. */
                versionCommonVat: string;
                /** @description The same loyalty points. Available values: "y" - yes, "n" - no. */
                versionCommonProfitPoints: string;
                /** @description The same promotion. Available values: "y" - yes, "n" - no. */
                versionCommonPromotion?: string;
                /** @description The same loyalty discount. Available values: "y" - yes, "n" - no. */
                versionCommonDiscount?: string;
                /** @description The same privileged products. Available values: "y" - yes, "n" - no. */
                versionCommonDistinguished?: string;
                /** @description The same for special. Available values: "y" - yes, "n" - no. */
                versionCommonSpecial?: string;
                /** @description The same related product. Available values: "y" - yes, "n" - no. */
                versionCommonAssociated: string;
                /** @description The same visibility. Available values: "y" - yes, "n" - no. */
                versionCommonVisibility: string;
                /** @description Same display when not in stock. Available values: "y" - yes, "n" - no. */
                versionCommonPersistent?: string;
                /** @description The same priority. Available values: "y" - yes, "n" - no. */
                versionCommonPriority: string;
                /** @description The same shops. Available values: "y" - yes, "n" - no. */
                versionCommonShops: string;
                /** @description The same sizes. Available values: "y" - yes, "n" - no. */
                versionCommonSizes: string;
                /** @description The same unit of measure. Available values: "y" - yes, "n" - no. */
                versionCommonUnit?: string;
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
                versionCommonPromotions?: string;
            };
            /** @description List of product variants. */
            versionProductsIds: string[];
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
            productMetaDescription?: string;
            /** @description Product meta keywords. */
            productMetaKeywords: string;
        }[];
        /** @description Product data for auction services */
        productAuctionDescriptionsData?: {
            /** @description Auction system ID */
            productAuctionId: number;
            /** @description Auction site ID */
            productAuctionSiteId: number;
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
            promoteItemNormalPrice?: number;
            /** @description Strikethrough wholesale price */
            promoteItemWholesaleNormalPrice?: number;
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
                    productSizeReservations?: {
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
                    productSizeDisposition1d?: number;
                    /** @description Available product quantity in own stock from before 2 Days. */
                    productSizeDisposition2d?: number;
                    /** @description Available product quantity in own stock from before 3 Days. */
                    productSizeDisposition3d?: number;
                    /** @description Available product quantity in own stock from before 4 Days. */
                    productSizeDisposition4d?: number;
                    /** @description Available product quantity in own stock from before 5 Days. */
                    productSizeDisposition5d?: number;
                    /** @description Available product quantity in own stock from before 6 Days. */
                    productSizeDisposition6d?: number;
                    /** @description Available product quantity in own stock from before 7 Days. */
                    productSizeDisposition7d?: number;
                    /** @description Available product quantity in own stock from before 1 week. */
                    productSizeDisposition1w?: number;
                    /** @description Available product quantity in own stock from before 2 weeks. */
                    productSizeDisposition2w?: number;
                    /** @description Available product quantity in own stock from before 3 weeks. */
                    productSizeDisposition3w?: number;
                    /** @description Available product quantity in own stock from before 4 weeks. */
                    productSizeDisposition4w?: number;
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
                auctionPricesConfigAutomatonDetails?: {
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
                productAuctionsSizes?: {
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
                active?: boolean;
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
        delivererName?: string | null;
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
            /** @description Parameter type */
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
            parameterValues?: {
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
        bundledIds?: string[];
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
            shopId: number;
            /** @description Language ID */
            langId: string;
            /** @example url */
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
                disallowedCouriers: string[];
            };
            /** @description Free shipping settings */
            freeShippingSettings?: {
                /** @description Edition mode */
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
            returnProductSettings?: {
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
        responsibleProducerCode?: string | null;
        /** @description Responsible person code */
        responsiblePersonCode?: string | null;
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
        /** @description Customer type, possible values: - person - if client sex is not determined, - person_male - when client is a male, - person_female - when a customer is a woman, - firm - when client is company. */
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
            /** @description Discount type: - advanced, - simple, - none, - group. */
            clientDiscountType: "advanced" | "simple" | "none" | "group";
            /** @description percentage discount value. (No data is returned if rebate_type is not "simple"). */
            clientDiscountValue?: number;
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
        /** @description Information about the loyalty program possible values: - yes_voucher - when customers are in a loyalty program and have only used vouchers, - yes_voucher_cash - when customers are in a loyalty program and have only used vouchers or cash deposits, - yes_clients, - yes_orders - when customers are in the loyalty program and have made at least one order, - no - when customers are in the loyalty program, - banned - when customers are blocked. */
        clientAffiliateProgram: {
            /** @description Does the customer participate in the loyalty program: - yes_voucher_cash, - yes_voucher, - no, - banned. */
            clientAffiliateProgramValue: "yes_voucher_cash" | "yes_voucher" | "no" | "banned";
            /** @description Data about loyalty program participant, omitted if active = no / banned. */
            affiliatePrograms?: {
                /** @description Number of all orders. */
                clientAffiliateProgramTotalOrdersCount: number;
                /** @description Total cash transaction value. */
                clientAffiliateProgramTotalOrdersWorth: number;
                /** @description Partner name. */
                affiliateProgramName: string;
            }[];
        };
        /** @description List of observed products. If this parameter is returned, the maximum number of results was reached: 10. */
        clientObservedProductsData?: {
            /** @description Product IAI code */
            productId: number;
            /** @description Size identifier */
            sizeId: string;
        }[];
        /** @description List of purchased products. If this parameter is returned, the maximum number of results was reached: 10. */
        clientPurchasedProductsData?: {
            /** @description Product IAI code */
            productId: number;
            /** @description Size identifier */
            sizeId: string;
        }[];
        /** @description Order list. If this parameter is returned, the maximum number of results was reached: 10. */
        clientOrdersData?: {
            /** @description Order ID. */
            orderId: string;
            /** @description Order serial number. */
            orderSerialNumber: number;
        }[];
        /** @description List of completed orders. If this parameter is returned, the maximum number of results was reached: 10. */
        clientOrdersCompletedData?: {
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
            [currency: string]: {
                /** @description Balance value. */
                clientBalanceAmount: number;
                /** @description Currency ID */
                currencyId: string;
            }
        } | [];
        /** @description Customer orders statistics. */
        clientOrdersStatistic: {
            /** @description Retail turnover. */
            worth_retail: {
                [currency: string]: {
                    currency: string;
                    worth_net: string;
                    worth_gross: string;
                }
            } | [];
            /** @description Wholesale turnover. */
            worth_wholesale: {
                [currency: string]: {
                    currency: string;
                    worth_net: string;
                    worth_gross: string;
                }
            } | [];
            /** @description Turnover with the division to shops. */
            worth_by_shops: {
                /** @description Shop Id */
                shop_id: string;
                /** @description Turnover with the division to shops. */
                worths: {
                    [currency: string]: {
                        currency: string;
                        worth_net: string;
                        worth_gross: string;
                    }
                } | [];
            }[];
            /** @description Profit margin. */
            profit_margin: number;
            /** @description Average order value. */
            worth_average: number;
            /** @description Average amount of products in an order. */
            average_products_count: number;
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
        clientLoyaltyCards?: {
            /** @description Does the customer have a loyalty card. - yes_active, - yes_not_active, - no. */
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
                    value?: string;
                    options?: {
                        /** @description Id */
                        id: string | number;
                        /** @description Name */
                        name: string;
                    }[];
                }[];
                /** @description Information on error that occurred during gate call. */
                errors?: FaultCodeString;
            };
            incomingShippingNumber: null;
        };
        /** @description Type. */
        eventType: string;
        /** @description Id. */
        eventId: number;
        /** @description Parcel label encoded with base64 algorythm. */
        label?: string;
    }[];
};

export type SearchProductsCategoriesIdosellResponse = {
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
            [language: string]: {
                /** @description Language ID (code in ISO 639-2). */
                languageId: string;
                /** @description IdoSell Category name */
                categoryIdoSellName: string;
                /** @description IdoSell Category pathname */
                categoryIdoSellPath: string;
                }
        } | [];
    }[];
} & PagedResponse;

export type SearchOrdersOpinionsResponse = {
    /** @description Object contains detailed information on result of operation. */
    results: {
        /** @example 1 */
        id: number;
        /** @example content */
        content: string;
        /** @example createDate */
        createDate: string;
        /** */
        points: 0 | 1 | 2 | 3 | 4 | 5;
        confirmed: boolean;
        /** @example rating */
        rating: string;
        /** @description Customer language ID. */
        language: string;
        /** @example host */
        host: string;
        /** @description Shop Id */
        shopId: number;
        /** @example 1 */
        scorePositive: number;
        /** @example 1 */
        scoreNegative: number;
        picture?: {
            large: {
                /** @example url */
                url: string;
                /** @example 1 */
                width: number;
                /** @example 1 */
                height: number;
                /** @example hash */
                hash: string;
            };
            small: {
                /** @example url */
                url: string;
                /** @example 1 */
                width: number;
                /** @example 1 */
                height: number;
                /** @example hash */
                hash: string;
            };
        };
        /** @description Opinion writer's data */
        client: {
            /** @description Customer's login. */
            login: string;
            /** @example 1 */
            id: number;
        };
        order: {
            /** @example 1 */
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

export type SearchProductsDeliveryTimeResponse = {
    /** @description Object contains detailed information on result of operation. */
    results: {
        /** @description Product IAI code */
        productId: number;
        /** @description Size identifier */
        sizeId: string;
        /** @description Size name */
        sizePanelName: string;
        /** @description Product stock quantity */
        productSizeQuantity: number;
        /** @description Producer code */
        productProducerCode: string;
        /** @description External product system code for size. */
        productSizeCodeExternal: string;
        /** @description Number of days required to prepare product for shipment */
        deliveryTimeDays?: number;
        /** @description Number of hours required to prepare product for shipment */
        deliveryTimeHours?: number;
        /** @description Error number */
        errno: number;
        /** @description Error information. */
        error: string;
    }[];
};

export type SearchClientsGiftcardsResponse = {
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

export type SearchClientsNewsletterEmailResponse = SearchNewsletterResponse<{
    /** @description Customer e-mail address. */
    email: string;
}>;

export type SearchClientsNewsletterSmsResponse = SearchNewsletterResponse<{
    /** @description Cell phone. */
    phone_cellular: string;
}>;

export type GetWmsStocksdocumentsProductsResponse = {
    /** @description Products list. */
    products: {
        /** @description Stock keeping unit. */
        product: number;
        /** @description Product name. */
        name?: string;
        /** @description Product size ID. */
        size: string;
        /** @description Size name */
        sizeName?: string;
        /** @example 1 */
        quantity: number;
        ordersQuantity?: {
            /** @description Order ID. If the products are not required for the order (they are collected to stock), 0 is returned. */
            orderSerialNumber: number;
            /** @description Product quantity. */
            productQuantity: number;
        }[];
        /** @description Gross purchase price */
        productPurchasePriceGross: number;
        /** @description Net purchase price */
        productPurchasePriceNet: number;
        /** @description Value of VAT */
        productVat: number;
        /** @description Currency ID */
        currencyId: string;
        /** @description External system code. */
        sizeCodeExternal?: string;
        /** @description Producer code. */
        sizeCodeProducer?: string;
        /** @description Product type on the document. */
        typeOnDocument: "temporaryProduct" | "existingProduct";
        /** @description Warehouse location ID.  The list of available warehouse locations can be downloaded via the method <a href = "pl/shop/api/?action=method&function=locations&method=get">#get</a> in gateway <a href = "en/shop/api/?action=documentation&function=locations">Locations</a> . */
        locationId: number;
        /** @description Storage location code */
        locationCode: string | null;
        /** @description Warehouse location full path.  The list of available warehouse locations can be downloaded via the method <a href = "pl/shop/api/?action=method&function=locations&method=get">#get</a> in gateway <a href = "en/shop/api/?action=documentation&function=locations">Locations</a> . */
        locationPath: string | null;
    }[];
} & PagedSnakecaseResponse;

export type GetWmsStocksdocumentsDocumentsResponse = {
    /** @description List of documents. */
    stocksDocuments: {
        /** @description Document identifier. */
        stockDocumentId: number;
        /** @description Document number. */
        stockDocumentNumber?: string;
        /** @description Document type. */
        stockDocumentType: "pz" | "pw" | "px" | "rx" | "rw" | "wz" | "mm" | "zw";
        /** @description Document status. */
        stockDocumentStatus: "open" | "on_the_way" | "close" | "close_delivered" | "close_returned";
        /** @description Note to document. */
        stockDocumentNote: string;
        /** @description Stock ID */
        stockId: number;
        /** @description Source warehouse ID */
        stockSourceId?: number;
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
        deliveryOnTheWay?: boolean;
        /** @description Planned date of acceptance of delivery. */
        plannedDeliveryDate?: string;
        /** @description Products available in presales. */
        productsInPreorder?: string;
        /** @description Supplier ID. */
        delivererId?: number;
        /** @description Purchase document */
        purchaseDocument?: {
            /** @description Type of purchase document */
            type: "national_VAT_invoice" | "other_purchase_document" | "invoice_without_VAT" | "imports_from_outside_the_EU";
            /** @description Number of purchase document */
            number: string;
        };
        /** @description Order serial number. */
        orderNumber?: number;
        /** @description Supplier name. */
        delivererName?: string;
        /** @description Issue date of purchase document */
        saleDocumentCreationDate?: string;
        /** @description settled at */
        priceType?: string;
    }[];
} & PagedResponse;

export type GetClientsResponse = {
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
        /** @description Customer type, possible values: - private - if client sex is not determined, - male - when client is a male, - female - when a customer is a woman, - firm - when client is company. */
        clientType: string;
        /** @description Display as partner on the page: n - No, y - Yes. */
        showClientAsPartner: "y" | "n" | "";
        operator: {
            /** @description Customer's login. */
            login?: string;
            /** @description Name. */
            name?: string;
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
            /** @description Is the customer VAT registered: always - always, never - never, neverconfirm - no, this requires confirmation, bycountry - settings as per country. */
            clientVatPreferences: "always" | "never" | "neverconfirm" | "bycountry";
            /** @description Discount group ID. */
            clientGroupDiscountNumber: number;
            /** @description Customer group name. */
            clientGroupDiscountName: string | null;
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
            /** @description Balance value. */
            clientBalanceAmount: number;
            /** @description Currency ID */
            currencyId: string;
        }[];
        /** @description Customer trade credit information. */
        clientTradeCredit: {
            /** @description Granted credit limit. */
            clientTradeCreditLimit: number;
            /** @description Currency ID */
            currencyId: string;
            /** @description Used credit limit. */
            clientTradeCreditUsed: number;
        };
        /** @description The parameter stores information about who acquired the customer */
        affiliateLogin: string | null;
        /** @description ID of a partner who acquired a given customer. */
        affiliateId: number;
        /** Format: date
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
            product_sizecode: string | null;
            /** @description Product quantity. */
            quantity: number;
            /** @description Price. */
            price: number;
            /** @description Net price. */
            price_net: number;
            /** @description Order value. */
            order_price: number;
            /** @description Net order worth. */
            order_price_net: number;
            /** @description Client's remarks on product. */
            remarks?: string;
            /** @description Loyalty points. */
            points: number;
            /** @description Accrued loyalty points. */
            points_awarded: number;
            /** @description Product type. */
            product_type: string;
            serial_numbers: Record<string,string> | null;
            /** @description Additional information. */
            product_order_additional: string;
        }[];
        /** @description Added on. */
        date_add: string;
        /** @description Ending date */
        date_end: string | null;
        /** @description Consignment number assigned to return. */
        package_number: string;
        /** @description Last modification date. */
        date_last_edit: string | null;
        /** @description Currency. */
        currency: string;
        /** @description Note to return used by IAI Bridge. */
        bridge_note: string;
        /** @description Shipping fee will be refunded to customer? */
        include_shipping_cost: string;
        /** @description Refund additional fee for the payment?. */
        additional_payment_cost: string;
        /** @description Cost for shop. */
        shop_shipping_cost: number;
        /** @description Return shipping number sent by the customer to the seller */
        incomingShippingNumber: string;
        /** @description Cost for shop - VAT rate */
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
            /** @description Payment amount. */
            paymentValue: number;
            /** @description Currency ID */
            currencyId: string;
            /** @description Number of voucher used in a payment. */
            voucherNumber?: string;
            /** @description Number of gift card used in a payment. */
            giftCardNumber?: string;
        }[];
        /** @description Shop return shipping cost */
        returnShopShippingCost: number;
        /** @description Shop return shipping cost - VAT rate */
        returnShopShippingCostVat: number;
        /** @description Shipping cost of the order */
        shippingCost: {
            /** @description Gross value. */
            gross: number;
            /** @description Net value. */
            net: number;
            /** @description VAT rate. */
            vat: number;
        };
        /** @description Additional costs for the payment of the order */
        additionalPaymentCostValue: {
            /** @description Gross value. */
            gross: number;
            /** @description Net value. */
            net: number;
            /** @description VAT rate. */
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
        productId: string | null;
        /** @description Product name. */
        productName: string | null;
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
        operatorLogin: string | null;
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
            /** @description Product quantity */
            quantity: number;
            /** @description Product price */
            price: number;
            /** @description Product net price */
            priceNet: number;
            /** @description Order price */
            orderPrice: number;
            /** @description Order price net */
            orderPriceNet: number;
            /** @description Points */
            points: number;
            /** @description Awarded points */
            pointsAwarded: number;
            /** @description Product types: `product_item` - single or multi variant product, `product_free` - free product, `product_packaging` - packaging, `product_bundle` - bundle, `product_collection` - collection, `product_service` - service, `product_virtual` - virtual, `product_configurable` - product with configurator */
            productType: string | null;
            /** @description Product serial numbers "1", "2" ] */
            serial_numbers?: Record<string,string>;
            /** @description Additional information */
            productOrderAdditional: string;
            /** @description List of attachments "1", "2" ] */
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
        errors?: FaultCodeString;
    }[];
    /** @description Flag marking errors in the result. */
    isErrors: boolean;
} & PagedResponse;

export type GetSystemConfigResponse = {
    /** @example 1 */
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
            saleDatePrepaid: "saleDateFromOrder" | "saleDateFromPayment" | "saleDateFromDocument" | null;
            /** @description Sales date settings on sales documents for orders paid with cash on delivery */
            saleDateCashOnDelivery: "saleDateFromOrder" | "saleDateFromPayment" | "saleDateFromDocument" | null;
            /** @description Sales date settings on sales documents for orders paid with trade credit */
            saleDateTradeCredit: "saleDateFromOrder" | "saleDateFromPayment" | "saleDateFromDocument" | null;
            /** @description Configuration of default currency rate for orders */
            currencyRate: "currentDay" | "previousDay" | null;
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
            /** @description Default price difference. */
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
            /** @description How to proceed with a refund. Available values: "fullOnFirstReturn" - refund all at the first refund, "proportionalToProductQuantity" - refund proportionally to a number of products in an original order, "fullOnAllProductsReturn" - refund at the return of a whole order. */
            methodReturnShippingCost: "fullOnFirstReturn" | "proportionalToProductQuantity" | "fullOnAllProductsReturn";
            /** @description Refund. Available values: "shipping" - delivery cost calculated for a primary order, "positive_min_shipping" - the lowest amount of delivery costs available at the moment of placing an order for the selected delivery method (more than zero but less than actual cost charged), "min_shipping" - absolute the lowest delivery cost available at the moment of placing an order for the selected delivery method (for free shipping it is zero). */
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
        /** @description Object determines unit visibility in panel. List of values: "y" - unit visible in panel, "n" - unit invisible in panel. */
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
    warranties?: {
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
        /** @description VAT rate value. */
        value: number;
    }[];
    auction_systems?: {
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
    rebate_profiles?: {
        /** @description Id */
        id: number;
        /** @description Name */
        name: string;
    }[];
    pictures_settings: {
        /** @description Object determines if the product icon should be scaled. List of values: "y" - icon is scaled, "n" - icon is unscaled. */
        icon_resize: string;
        /** @description Graphic quality in percent (0-100). . "0" - the worst quality, "100" - the best quality (no compression). */
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
        /** @description Photo quality in percents (0-100). "0" - the worst quality, "100" - the best quality (no compression). */
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
        [id: string]: {
            /** @description Id */
            id?: number;
            /** @example key */
            key?: string;
            /** @description Name */
            name?: string;
            /** @description Information about whether price comparison service is active. */
            active?: string;
        }
    } | [];
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
        /** @example key */
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
        /** @example key */
        key: string;
    }[];
    /** @description Monitoring address protocol from the main Printer window. */
    typeOfPrinterProtocolAdress: string;
};

type ShopsPanelSettings = {
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
    /** @description Sales documents in third party application. */
    salesDocumentsAreCreatedByClient: boolean;
    search_by_code: {
        /** @description IAI code. */
        code_iai: boolean;
        /** @description External system code. */
        code_extern: boolean;
        /** @description Producer code. */
        code_producer: boolean;
    };
}

export type GetSystemShopsDataResponse = Omit<GetSystemConfigResponse, 'panel_settings'|'shops'> & {
/** @description Shop contact data */
    shop_contact: {
        /** @description shop ID */
        shop_id: number;
        /** @description Shop name */
        shop_name: string;
        /** @description Shop's contact data */
        contact_data: {
            /** @description Language code. Codes are compliant with ISO-639-3 standard. */
            lang_id: string;
            /** @description Contact email address */
            contact_email: string;
            /** @description Contact phone number */
            contact_phone_number: string;
        }[];
    }[];
    panel_settings: ShopsPanelSettings;
    /** @description List of stores. */
    shops: {
        /** @description Shop Id. */
        shop_id: number;
        /** @description Store name. */
        shop_name: string;
        /** @description Default shop language ID in ISO-639-3 standard. */
        shop_lang_id_default: string;
        /** @description Determines whether loyalty program is active. */
        shop_loyalty_active: boolean;
        active_price_comparers: {
            /** @example 1 */
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
            /** @example address */
            address: string;
            /** @description ZIP / Post code. */
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
    }[];
};

export type GetSizechartsResponse = {
    sizeCharts: {
        [id: string]: {
            /** @description Id */
            id: number;
            /** @description Name in panel */
            nameInPanel: string;
            /** @description Display mode */
            displayMode: string;
            languagesData: {
                /** @description Customer language ID. */
                language: string;
                columns: {
                    [column: string]: {
                        /** @description Column number */
                        columnNumber: number;
                        /** @description Column name */
                        columnTitle: string;
                    }
                } | [];
                /** @description List of sizes */
                sizes?: {
                    [size: string]: {
                        /** @description Size identifier */
                        sizeId: string;
                        /** @description Priority */
                        priority: number;
                        descriptions: {
                            [column: string]: {
                                /** @description Column number */
                                columnNumber: number;
                                /** @description Value */
                                value: string;
                            }
                        } | [];
                    }
                } | [];
            }[];
        };
    } | [];
} & PagedResponse;

export type GetWmsLocationsResponse = {
    /** @description Object contains detailed information on result of operation. */
    results: {
        /** @description Warehouse location ID */
        locationId: number;
        /** @description Parent's identifier */
        parentId: number;
        /** @description Warehouse location name */
        locationName: string;
        /** @description #!SciezkaNazwyLokalizacji!# */
        locationPath: string;
        /** @description Storage location code */
        locationCode: string;
        /** @description Stock ID */
        stockId: number;
        /** @description Products list. */
        products: {
            /** @description Product IAI code */
            productId: number;
            /** @description Size identifier */
            sizeId: string;
            /* @description Quantity */
            quantity: number;
        }[];
    }[];
} & PagedResponse;

export type GetWarrantiesResponse = {
    warranties: {
        /** @description Warranty language id (numeric). */
        id: number;
        /** @description Name. */
        name: string;
        /** @description Warranty type. */
        type: string;
        /** @description Warranty time. */
        period: number;
        lang_data: {
            /** @description Warranty language id (numeric). */
            id: number;
            /** @description Warranty language id (numeric) (three letter sequence). */
            lang_id: string;
            /** @description Name. */
            name: string;
            /** @description warranty icon for language. */
            icon: string;
            /** @description Warranty description. */
            description: string;
        }[];
    }[];
} & PagedSnakecaseResponse;

export type GetProductsCategoriesResponse = {
    last_changed_time: string;
    /** @description Element containing a list of found results on a given page. */
    categories: {
        /** @description Category id. */
        id: number;
        /** @description Parent category ID. */
        parent_id: number;
        /** @description PKWiU number. */
        pkwiu: string;
        /** @description Priority. */
        priority: number;
        /** @description Number of products assigned to category. */
        product_count: number;
        /** @description Category ID on Allegro auction site. */
        allegro_category_id?: number;
        /** @description Category ID on eBay auction site. */
        ebay_category_id?: number;
        /** @description Category ID on WP shopping mall. */
        wp_category_id?: number;
        /** @description Category ID on Onet shopping mall. */
        onet_category_id?: number;
        /** @description Category ID on Interia shopping mall. */
        interia_category_id?: number;
        /** @description Store mask code. */
        shop_mask?: number;
        /** @description Array of IDs of stores, in which category is present. */
        shops?: number[];
        lang_data: {
            /** @description Language code. Codes are compliant with ISO-639-3 standard. */
            lang_id: string;
            /** @description Category singular name. */
            singular_name: string;
            /** @description Category plural name. */
            plural_name: string;
            /** @description Category description. */
            description: string;
        }[];
        vatMappings?: {
            /** @example 1 */
            regionId: number;
            /** */
            vat: number;
        }[];
    }[];
} & PagedSnakecaseResponse;

export type GetMenuResponse = {
    /** @description Parameters concerning returned results */
    result: {
        /** @description Menu element ID. */
        item_id: number;
        /** @description Parent menu element ID. */
        parent_id: number;
        lang_data: {
            /** @description Language ID. */
            lang_id: string;
            /** @description Menu element text identifier. Example: "item1\item2\item3". */
            item_textid: string;
            /** @description Menu element name. */
            name: string;
            /** @description Menu element order. */
            priority: number;
            /** @description Description displayed at the top of products list. */
            description: string;
            /** @description Description displayed at the bottom of products list. */
            description_bottom: string | null;
            /** @description Own link. */
            link: string;
            /** */
            item_type: "products" | "navigation" | "products_with_rich_text" | "navigation_with_rich_text" | "rich_text" | "static" | "link";
            /** @description Meta title  . */
            meta_title: string;
            /** @description Meta description. */
            meta_description: string;
            /** @description Meta - keywords. */
            meta_keywords: string;
            /** @description URL address */
            url: string;
            /** @description Link target attribute. !_self - open on the same page, !_blank - open in a new page. */
            href_target: "_self" | "_blank";
            sort?: {
                /** @description Default product list view. */
                view: "normal" | "list" | "gallery";
                /** @description Sort by. */
                sort_by: "date" | "priority" | "priorityname" | "name" | "price";
                /** @description Sort order. */
                sort_order: "ASC" | "DESC";
            }[];
            display_limit?: {
                /** @description Default product list view. */
                view: "normal" | "list" | "gallery";
                /** @description Limit. */
                limit: number;
            }[];
            /** */
            default_view: "normal" | "list" | "gallery";
            /** @description Headline name. Leaving this value empty will automatically generate name basing on a name in menu: */
            headline_name: string;
            /** @description Display by default nested elements: n - no, y - yes. */
            expand: "n" | "y";
            /** @description Element of the menu hidden from the clients: n - no, y - yes. */
            hidden: "n" | "y";
            /** @description After clicking on the element in the menu:: expand - Display subelements of the menu if any available, if not - create, reload - reload the page and open. */
            action: "reload" | "expand" | "";
            /** @description Element "show all" is:: products_list - link to the list of products, navigation_site - link to the "Navigation" page. */
            display_all_type: "products_list" | "navigation_site" | "";
            /** @description Display element "show all": n - no, y - yes. */
            display_all: "n" | "y" | "";
            /** @description Disable changing "sort by" for customers: n - no, y - yes, default - #!domyślny!#. */
            allow_sort_change: "n" | "y" | "default" | "";
            /** @description Disable possibility of changing the number of displayed products on the page by customers : n - no, y - yes, default - #!domyślny!#. */
            allow_limit_change: "n" | "y" | "default" | "";
            /** @description Link to graphic on the "navigation" page. */
            gfx_nav?: string;
            /** @description Graphics in menu: n - no, y - yes. */
            node_gfx: "n" | "y" | null;
            /** @description Type of graphics - When the cursor is on the link: img - Image (one size for computers, tablets and smartphones, not recommended), img_rwd - Image (three sizes for RWD). */
            gfx_active_type?: "img" | "img_rwd";
            /** @description Link to graphic - When the cursor is on the link. */
            gfx_active?: string;
            /** @description Link to graphic - When the cursor is on the link - Desktop. */
            gfx_active_desktop?: string;
            /** @description Link to graphic - When the cursor is on the link - Tablet. */
            gfx_active_tablet?: string;
            /** @description Link to graphic - When the cursor is on the link - Mobile. */
            gfx_active_mobile?: string;
            /** @description Type of graphics - When the cursor is outside link: img - Image (one size for computers, tablets and smartphones, not recommended), img_rwd - Image (three sizes for RWD). */
            gfx_inactive_type?: "img" | "img_rwd";
            /** @description Link to graphic - When the cursor is outside link. */
            gfx?: string;
            /** @description Link to graphic - When the cursor is outside link - Desktop. */
            gfx_inactive_desktop?: string;
            /** @description Link to graphic - When the cursor is outside link - Tablet. */
            gfx_inactive_tablet?: string;
            /** @description Link to graphic - When the cursor is outside link - Mobile. */
            gfx_inactive_mobile?: string;
            /** @description Type of graphics - When the link is opened: img - Image (one size for computers, tablets and smartphones, not recommended), img_rwd - Image (three sizes for RWD). */
            gfx_omo_type?: "img" | "img_rwd";
            /** @description Link to graphic - When the link is opened. */
            gfx_onmouseover?: string;
            /** @description Link to graphic - When the link is opened - Desktop. */
            gfx_omo_desktop?: string;
            /** @description Link to graphic - When the link is opened - Tablet. */
            gfx_omo_tablet?: string;
            /** @description Link to graphic - When the link is opened - Mobile. */
            gfx_omo_mobile?: string;
            /** @description Add a canonical link that points to the parent menu item: n - no, y - yes. */
            canonical_to_parent: "n" | "y" | null;
            /** @description Meta robots index settings: default - automatically generate, index - index, noindex - noindex. */
            meta_robots_index: "default" | "index" | "noindex" | null;
            /** @description Meta robots follow settings: default - automatically generate, follow - follow, nofollow - nofollow. */
            meta_robots_follow: "default" | "follow" | "nofollow" | null;
        }[];
    }[];
};

export type GetOrdersAuctionDetailsResponse = {
    /** @description External listings - orders table. */
    auctions: {
        /** @description Order ID. */
        orderIdent: {
            /** @description Identifier type. */
            orderIdentType: "orders_id" | "orders_sn";
            /** @description ID value. */
            identValue: string;
        };
        /** @description The auctions array for the order. */
        auctionsDetails?: {
            /** @description Auction number. */
            auctionItemId: string | number;
            /** @description Link to the auction, from which the order came. */
            auctionUrl: string;
            /** @description Auction start date. */
            auctionStartDate: string;
            /** @description Auction end date. */
            auctionEndingDate: string;
            /** @description Transaction details. */
            auctionTransactionDetails: string;
        }[];
        /** @description External marketplace service name. */
        auctionServiceName?: string | null;
        /** @description External marketplace service address. */
        auctionServiceUrl?: string | null;
        /** @description Auction service account Id . */
        auctionsAccountId?: string;
        /** @description External marketplace service account name (which the listing was created from). */
        auctionsAccountLogin?: string;
        /** @description Account ID on auction site. */
        auctionClientId?: string;
        /** @description Account login on auction site. */
        auctionClientLogin?: string;
        /** @description detailed client data. */
        auctionClientDetails?: string;
        /** @description Buyer comment. */
        auctionFeedback?: string;
        /** @description Order ID in the auction service. */
        auctionOrderId?: string;
        /** @description Information on error that occurred during gate call. */
        errors?: FaultCodeString;
    }[];
    /** @description Flag marking errors in the result. */
    isErrors: boolean;
};

export type GetOrdersDocumentsResponse = {
    /** @description List of documents. */
    documents: {
        /** @description Order serial number. */
        orderSerialNumber: number;
        /** @description Document type */
        documentType: "sales_confirmation" | "vat_invoice" | "corrective_vat_invoice" | "advance_vat_invoice" | "final_advance_vat_invoice" | "pro_forma_invoice" | "advance_pro_forma_invoice" | "final_advance_pro_forma_invoice" | "delivery_note" | "fiscal_receipt" | "fiscal_invoice";
        /** @description Document id. */
        id?: number;
        /** @description Document number. */
        documentId?: string;
        /** @description Document name */
        documentName?: string;
        /** @description Base64 encoded PDF document. */
        pdfWithDocumentsInBase64?: string;
        /** @description Information on error that occurred during gate call. */
        errors?: FaultCodeString;
        /** @description Sale date. ISO 8602 format. */
        documentPurchaseDate?: string | null;
        /** @example documentIssuedDate */
        documentIssuedDate?: string | null;
        /** @description Date of paying for order. */
        orderPaymentDate?: string | null;
        /** @description Document data. */
        documentData?: string;
        /** @description The identifier of the corrected invoice. */
        correctedInvoiceId?: string;
    }[];
};

/** @version v6.1 Typechecked 2025-08-06 */
export type GetProductsStocksResponse = {
    /** @description Object contains detailed information on result of operation. */
    results: {
        ident: {
            /** */
            identType: "id" | "index" | "codeExtern" | "codeProducer";
            /** @description ID value. */
            identValue: string;
        };
        /** @description Error information. */
        error?: FaultCodeString;
        quantities?: {
            /** @description Stocks data. */
            stocks: {
                /** @description Stock ID. */
                stock_id: number;
                /** @description List of sizes */
                sizes: {
                    /** @description Size identifier. */
                    size_id: string;
                    /** @description Size name. */
                    size_name: string;
                    /** @description External system code. */
                    product_sizecode: string;
                    /** @description Number of products in delivery. */
                    quantity: number;
                    /** @description Information of reservations. */
                    reservations?: {
                        /** @description Number of products reserved ad hoc. */
                        adhoc: number;
                        /** @description Number of products reserved for auctions. */
                        auction: number;
                        /** @description Number of products reserved for clients. */
                        client: number;
                        /** @description Number of products reserved for orders. */
                        order: number;
                        /** @description Number of products reserved for retail sales. */
                        retail: number;
                        /** @description Number of products reserved for wholesale sales. */
                        wholesale: number;
                    };
                }[];
            }[];
            /** @description Information on auction sites. */
            auctions?: {
                /** @description Stock ID. */
                stock_id: number;
                /** @description List of sizes */
                sizes: {
                    /** @description Size identifier. */
                    size_id: string;
                    /** @description Size name. */
                    size_name: string;
                    /** @description External system code. */
                    product_sizecode: string;
                    /** @description Number of products in delivery. */
                    quantity: number;
                    /** @description Information of reservations. */
                    reservations?: {
                        /** @description Number of products reserved ad hoc. */
                        adhoc: number;
                        /** @description Number of products reserved for auctions. */
                        auction: number;
                        /** @description Number of products reserved for clients. */
                        client: number;
                        /** @description Number of products reserved for orders. */
                        order: number;
                        /** @description Number of products reserved for retail sales. */
                        retail: number;
                        /** @description Number of products reserved for wholesale sales. */
                        wholesale: number;
                    };
                }[];
            }[];
            /** @description Information on incomplete orders. */
            orders_unfinished?: {
                /** @description Stock ID. */
                stock_id: number;
                /** @description List of sizes */
                sizes: {
                    /** @description Size identifier. */
                    size_id: string;
                    /** @description Size name. */
                    size_name: string;
                    /** @description External system code. */
                    product_sizecode: string;
                    /** @description Number of products in delivery. */
                    quantity: number;
                    /** @description Information of reservations. */
                    reservations?: {
                        /** @description Number of products reserved ad hoc. */
                        adhoc: number;
                        /** @description Number of products reserved for auctions. */
                        auction: number;
                        /** @description Number of products reserved for clients. */
                        client: number;
                        /** @description Number of products reserved for orders. */
                        order: number;
                        /** @description Number of products reserved for retail sales. */
                        retail: number;
                        /** @description Number of products reserved for wholesale sales. */
                        wholesale: number;
                    };
                }[];
            }[];
            /** @description Available stock quantities data. */
            dispositions: {
                /** @description Information on auction sites. */
                auctions: {
                    /** @description Size identifier. */
                    size_id: number;
                    /** @description Size identifier */
                    sizeId: string;
                    /** @description Size name. */
                    size_name: string;
                    /** @description External system code. */
                    product_sizecode: string;
                    /** @description Number of products in delivery. */
                    quantity: number;
                }[];
                sales: {
                    /** @description Size identifier. */
                    size_id: number;
                    /** @description Size identifier */
                    sizeId: string;
                    /** @description Size name. */
                    size_name: string;
                    /** @description External system code. */
                    product_sizecode: string;
                    /** @description Available stock quantity of product from supplier stock. */
                    outsidestock: number;
                    /** @description Available stock quantity of product from own stock. */
                    ownstock: number;
                    /** @description Available stock quantity of product from all stocks. */
                    allstocks: number;
                    /** @description Available product quantity in own stock from before 1 day . */
                    disposition1d?: number;
                    /** @description Available product quantity in own stock from before 2 Days. */
                    disposition2d?: number;
                    /** @description Available product quantity in own stock from before 3 Days. */
                    disposition3d?: number;
                    /** @description Available product quantity in own stock from before 4 Days. */
                    disposition4d?: number;
                    /** @description Available product quantity in own stock from before 5 Days. */
                    disposition5d?: number;
                    /** @description Available product quantity in own stock from before 6 Days. */
                    disposition6d?: number;
                    /** @description Available product quantity in own stock from before 7 Days. */
                    disposition7d?: number;
                    /** @description Available product quantity in own stock from before 1 week. */
                    disposition1w?: number;
                    /** @description Available product quantity in own stock from before 2 weeks. */
                    disposition2w?: number;
                    /** @description Available product quantity in own stock from before 3 weeks. */
                    disposition3w?: number;
                    /** @description Available product quantity in own stock from before 4 weeks. */
                    disposition4w?: number;
                }[];
            };
            /** @description Delivery data. */
            deliveries: {
                /** @description Size identifier. */
                size_id: string;
                /** @description Size name. */
                size_name: string;
                /** @description Number of products in delivery. */
                quantity: number;
            }[];
            /** @description Data of number of products added to GRN. */
            goods_received_notes: {
                /** @description Size identifier. */
                size_id: string;
                /** @description Size name. */
                size_name: string;
                /** @description Number of products in delivery. */
                quantity: number;
            }[];
            stocks_locations: {
                /** @description Stock ID. */
                stock_id: number;
                /** @description List of sizes */
                sizes: {
                    /** @description Size identifier. */
                    size_id: string;
                    /** @description Warehouse location ID. */
                    location_id: number;
                    /** @description Warehouse location full path. */
                    location_text_id: string;
                    /** @description Storage location code */
                    location_code: string;
                    /** @description Additional locations. */
                    additionalLocations?: {
                        /** @description Warehouse location ID. */
                        additionalLocationId: number;
                        /** @description Warehouse location full path. */
                        additionalLocationTextId: string;
                        /** @description Storage location code */
                        additionalLocationCode: string;
                    }[];
                }[];
            }[];
        };
    }[];
    /** @description Flag marking errors in the result. */
    is_errors: boolean;
    errors?: FaultCodeString;
};

/** @version v6.1 Typechecked 2025-08-06 */
export type GetResponsibilityEntitiesResponse = {
    results: {
        /** @description Identificator of the entity. */
        id: number;
        /** @description Short name/code. */
        code: string;
        /** @description Full name. */
        name: string;
        /** @description E-mail address. */
        mail: string;
        /** @description Street. */
        street: string;
        /** @description Building number. */
        number: string | null;
        /** @description Apartment number. */
        subnumber: string | null;
        /** @description Zipcode. */
        zipcode: string;
        /** @description City. */
        city: string;
        /** @description 2-letter ISO country code. */
        country: string;
        /** @description Phone number. */
        phone: string | null;
        /** @description Additional description. */
        description: string | null;
        /** @description URL to contact page. */
        url: string | null;
    }[];
    pagination: PagedResponse;
};

/** @version v6.1 Typechecked 2025-08-06 */
export type GetSizesResponse = {
    /** @description Date of last modification (YYYY-MM-DD HH-MM-SS). */
    last_changed_time: string;
    size_groups: {
        /** @description Size group ID. */
        group_id: number;
        /** @description Size group name. */
        group_name: string;
        /** @description List of sizes which belong to the group. */
        sizes: {
            /** @description Size identifier. */
            size_id: string;
            /** @description Size name. */
            size_name: string;
            lang_data: {
                /** @description Language code. Codes are compliant with ISO-639-3 standard. */
                lang_id: string;
                /** @description Size name in selected language. */
                name: string;
            }[];
        }[];
    }[];
};

/** @version v6.1 Typechecked 2025-08-06 */
export type GetCouriersPickupPointsResponse = {
    /** @description Parameters concerning returned results */
    result: {
        /** @description Collection point ID. */
        pickupPointId: number;
        /** @description external system code. */
        pickupPointExternalId: string;
        /** @description Courier ID. */
        courierId: number;
        /** @description collection point details. */
        descriptions: {
            /** @description Language ID (code in ISO 639-2). */
            languageId: string;
            /** @description Name of the pickup point. */
            name: string;
            /** @description collection point description . */
            description: string;
        }[];
        /** @description Accepted payment types. */
        paymentForms: ("cash" | "card")[];
        /** @description Collection point activity. Available values: available, outOfService . */
        serviceStatus: "out_of_service" | "available";
        /** @description Pickup point address. */
        address: {
            /** @description Address. */
            street: string;
            /** @description ZIP / Post code. */
            zipCode: string;
            /** @description Town / City. */
            city: string;
            /** @description Administrative region (code in ISO 3166-2). */
            provinceCode?: string;
            /** @description Region name. */
            provinceName?: string;
        };
        /** @description Geographic coordinates. */
        coordinates: {
            /** @description Longitude. */
            longitude: number;
            /** @description Latitude. */
            latitude: number;
        };
        /** @description Personal collection point work hours. */
        operatingDays: {
            /** @description Days of the week designation.Day number: 1- Monday, 7 - Sunday. */
            weekday: number;
            /** @description collection point opening hours (HH:MM). */
            opening: string;
            /** @description collection point closing time (HH:MM). */
            closing: string;
            /** @description #!trybPracyPunktuDostepneWartosciOpenInOtwartyOdDoClosedZamkniety24hCzynnyCalaDobe!#. */
            operatingMode: "open_in" | "closed" | "24h";
        }[];
    }[];
} & PagedResponse;

export type GetClientsDeliveryAddressResponse = {
    /** @description Object contains detailed information on result of operation. */
    results: {
        /** @description External system code. */
        clientCodeExternal?: string;
        /** @description Unique client's number. */
        clientId: number;
        /** @description Customer's login. */
        clientLogin?: string;
        /** @description Delivery address. */
        clientDeliveryAddresses: {
            /** @description Delivery address ID. */
            clientDeliveryAddressId: string;
            /** @description Recipient's first name. */
            clientDeliveryAddressFirstName: string;
            /** @description Recipient's last name. */
            clientDeliveryAddressLastName: string;
            /** @description Additional information. */
            clientDeliveryAddressAdditional: string;
            /** @description Cell phone. */
            clientDeliveryAddressPhone1: string;
            /** @description Recipient's city. */
            clientDeliveryAddressCity: string;
            /** @description Recipient street and number. */
            clientDeliveryAddressStreet: string;
            /** @description Administrative region code. */
            clientDeliveryAddressRegionId: string;
            /** @description Administrative region code. */
            clientDeliveryAddressProvinceId: string;
            /** @description Recipient's postal code. */
            clientDeliveryAddressZipCode: string;
            /** @description Recipient's country. */
            clientDeliveryAddressCountry: string;
        }[];
        error: FaultCodeString;
    }[];
};

export type GetClientsPayerAddressResponse = {
    payerAddressesResults: {
        /** @description Buyer's address id. */
        payerAddressId: number;
        /** @description Buyer's first name. */
        payerAddressFirstName: string;
        /** @description Buyer's last name. */
        payerAddressLastName: string;
        /** @description Company name. */
        payerAddressFirm: string;
        /** @description Customer VAT ID. */
        payerAddressNip: string;
        /** @description Buyer's telephone number. */
        payerAddressPhone: string;
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
    }[];
} & PagedResponse;

export type GetProductsAuctionsResponse = {
    /** @description Object contains detailed information on result of operation. */
    results: {
        /** @description Products list. */
        products: {
            [auction: string]: {
                productId: {
                    /** */
                    identType: "id" | "index" | "codeExtern" | "codeProducer";
                    /** @description ID value. */
                    identValue: string;
                };
                /** @description External listings - orders table. */
                auctions: {
                    [index: string]: {
                        /** @description Auction site page ID */
                        auctionSiteId: string;
                        /** @description Auction number on the auction site */
                        auctionId: string;
                    }
                } | [];
                auctionCategories: {
                    [index: string]: {
                        /** @description Auction site page ID */
                        auctionSiteId: string;
                        /** @description Numeric ID of the category in the auction site */
                        auctionCategoryId: string;
                        /** @description Category path */
                        auctionCategoryPath: string;
                    }
                } | [];
            }
        } | [];
    } & PagedResponse;
};

export type GetProductsBrandsResponse = {
    /** @description Element containing a list of found results on a given page. */
    producers: {
        /** @description Brand ID. */
        id: number;
        /** @description Brand name. */
        name: string;
        /** @description Deliverer ID (deprecated). */
        deliverer_id: number;
        /** @description Supplier name (deprecated). */
        deliverer_name: string;
        /** @description Supplier login (deprecated). */
        deliverer_login: string;
        /** @description Average delivery time in days (deprecated). */
        delivery_time_days: number;
        /** @description Currency. */
        currency: string;
        lang_data: {
            /** @description Language code. Codes are compliant with ISO-639-3 standard. */
            lang_id: string;
            /** @description Description. */
            text: string;
            productsListImagesConfiguration: {
                /** @description Type of graphics */
                graphicType?: "img" | "img_rwd";
                /** @description Image (one size for computers, tablets and smartphones, not recommended) */
                singleGraphic: string;
                /** @description #!GrafikaDlaEkranowKomputera#! */
                pcGraphic: string;
                /** @description Graphics for tablets */
                tabletGraphic: string;
                /** @description Graphics for smartphones */
                phoneGraphic: string;
            };
            /** @description Graphic displayed on product card */
            productCardImagesConfiguration: {
                /** @description Type of graphics */
                graphicType?: "img" | "img_rwd";
                /** @description Image (one size for computers, tablets and smartphones, not recommended) */
                singleGraphic: string;
                /** @description #!GrafikaDlaEkranowKomputera#! */
                pcGraphic: string;
                /** @description Graphics for tablets */
                tabletGraphic: string;
                /** @description Graphics for smartphones */
                phoneGraphic: string;
            };
        }[];
    }[];
} & PagedSnakecaseResponse;

export type GetProductsDescriptionsResponse = {
    /** @description Object contains detailed information on result of operation. */
    results: {
        /** @description Stock keeping unit. */
        productIdent: {
            /** @description Identifier type. */
            productIdentType: "id" | "index" | "codeExtern" | "codeProducer";
            /** @description ID value. */
            identValue: string;
            /** @description Shop Id */
            shopId?: number;
        };
        /** @description Array of language-dependent elements. */
        productDescriptionsLangData: {
            /** @description Language ID */
            langId: string;
            /** @description Product name. */
            productName: string;
            /** @description Product name for auction service. */
            productAuctionName: string;
            /** @description Product name on price comparison sites */
            productPriceComparerName: string;
            /** @description Short product description. */
            productDescription: string;
            /** @description Long product description. */
            productLongDescription: string;
            productDescriptionSections: {
                descriptionSections: {
                    [section: string]: {
                        /** @enum {string} */
                        type: "text" | "photo" | "video" | "html";
                        /** @description HTML content depending on the type */
                        content: string;
                    };
                }[];
            }
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
            productAuctionId: number;
            /** @description Auction site ID */
            productAuctionSiteId: number;
            /** @description Product name for auction service. */
            productAuctionName: string;
            /** @description Subtitle for auction service */
            productAuctionAdditionalName: string;
            /** @description Product description for marketplaces */
            productAuctionDescription: string;
        }[];
        /** @description Error information. */
        error?: FaultCodeString;
    }[];
    /** @description Information about whether any errors occurred. */
    errorsOccurred: boolean;
};

export type GetProductsOpinionsResponse = {
    /** @description Object contains detailed information on result of operation. */
    results: {
        /** @example 1 */
        id: number;
        /** @example content */
        content: string;
        /** @example createDate */
        createDate: string;
        /** */
        points: number;
        confirmed: boolean;
        /** @example rating */
        rating: string;
        /** @description Customer language ID. */
        language: string;
        /** @example host */
        host: string;
        /** @description Shop Id */
        shopId: number;
        /** @example 1 */
        scorePositive: number;
        /** @example 1 */
        scoreNegative: number;
        picture?: {
            large: {
                /** @example url */
                url: string;
                /** @example 1 */
                width: number;
                /** @example 1 */
                height: number;
                /** @example hash */
                hash: string;
            };
            small?: {
                /** @example url */
                url: string;
                /** @example 1 */
                width: number;
                /** @example 1 */
                height: number;
                /** @example hash */
                hash: string;
            };
        };
        /** @description Opinion writer's data */
        client?: {
            /** @description Customer's login. */
            login: string;
            /** @example 1 */
            id: number;
        };
        product: {
            /** @example 1 */
            id: number;
        };
        /** @description Reply to an opinion */
        answer: string;
        /** @description Date of reply to opinion in the YYYY-MM-DD HH:MM:SS format */
        answerDatetime: string;
        /** @description Opinion modification date */
        modificationDatetime: string;
        /** @description Opinion confirmed with purchase */
        confirmedByPurchase: boolean;
    }[];
} & PagedResponse;

export type GetSnippetsResponse = {
    results: {
        /** @description Id of the code snippet. */
        id: number | null;
        /** @description The snippet name. */
        name: string;
        /** @description Whether the snippet is active. */
        active: "y" | "n";
        /** @description Snippet campaign id */
        campaign: number;
        dateBegin: {
            /** @description Whether date condition is active */
            defined: "y" | "n";
            /** Format: date
             * @description Date of snippet activation */
            date: string | null;
        } & {
            /** @description Automatic shutdown control */
            autoBlock: "y" | "n";
        };
        /** @description Filter to control snippet activation. */
        dateEnd: {
            /** @description Whether date condition is active */
            defined: "y" | "n";
            /** Format: date
             * @description Date of snippet activation */
            date: string | null;
        };
        /** @description Code snippet type. */
        type: "html" | "javascript" | "cgi";
        /** @description Whether to load contents asynchronously via XHR request. */
        useAjax: "y" | "n";
        /** @description Url. */
        link: string;
        /** @description Content waiting time (timeout) in seconds. */
        timeout: number;
        /** @description The place where the code snippet is loaded. */
        zone: "head" | "bodyBegin" | "bodyEnd";
        /** @description The order in which the code snippet will be displayed. */
        order: number;
        /** @description Snippet content for each language. */
        body: {
            /** @description Language code. */
            lang: string;
            /** @example Hello world */
            body: string;
        }[];
        display: {
            /** @description Type of customers to whom to display the snippet */
            clientType: "all" | "unregistered" | "registered" | "retailer" | "wholesaler";
            /** @description Whether to display only for newsletter visitors. */
            newsletter: "y" | "n" | "all";
            /** @description Whether to display the code snippet only for customers who have placed an order */
            hasOrders: "y" | "n" | "all";
            /** @description Display only after entering rebate code */
            useRebateCode: "y" | "n" | "all";
        } & {
            /** @description Display on desktop screens */
            screen: "y" | "n";
            /** @description Display on mobile tablets */
            tablet: "y" | "n";
            /** @description Display on mobile phones */
            phone: "y" | "n";
        };
        pages: {
            /** @description Whether to display to all sites. */
            all: "y" | "n";
            /** @description List of selected pages where snippet shows (works for all=n mode). If passed, the url should be omitted. */
            pages?: ("home" | "basket" | "checkout_payment_delivery" | "checkout_confirmation" | "new_order_placement" | "order_details" | "navigation" | "product_details" | "search_results" | "after_order_place" | "mailing_subscribe" | "payment_success" | "payment_error" | "payment_pending" | "other_pages")[];
            /** @description List of selected url (works for all=n mode) If passed, pages should be omitted. */
            url?: string[];
        };
        /** @description Snippet entry source filter. */
        sources?: {
            direct: {
                /** @description Whether source filter is active */
                active: "y" | "n";
                /** @description Id of service of given source */
                id: number | null;
            } | null;
            search: {
                /** @description Whether source filter is active */
                active: "y" | "n";
                /** @description Id of service of given source */
                id: number | null;
            } | null;
            advert: {
                /** @description Whether source filter is active */
                active: "y" | "n";
                /** @description Id of service of given source */
                id: number | null;
            } | null;
            priceComparers: {
                /** @description Whether source filter is active */
                active: "y" | "n";
                /** @description Id of service of given source */
                id: number | null;
            } | null;
            affiliate: {
                /** @description Whether source filter is active */
                active: "y" | "n";
                /** @description Id of service of given source */
                id: number | null;
            } | null;
            cpa: {
                /** @description Whether source filter is active */
                active: "y" | "n";
                /** @description Id of service of given source */
                id: number | null;
            } | null;
            newsletter: {
                /** @description Whether source filter is active */
                active: "y" | "n";
                /** @description Id of service of given source */
                id: number | null;
            } | null;
            social: {
                /** @description Whether source filter is active */
                active: "y" | "n";
                /** @description Id of service of given source */
                id: number | null;
            } | null;
            page: {
                /** @description Whether source filter is active */
                active: "y" | "n";
                /** @description Id of service of given source */
                id: number | null;
            } | null;
        };
        /** @description Whether the snippet is marked as deleted. */
        readonly deleted: "y" | "n";
        /** @description The number of cookies associated with the snippet. */
        readonly cookiesCount: number;
    }[];
    pagination: PagedResponse;
};

export type GetSystemUsersResponse = {
    /** @description List of panel users. */
    users: {
        /** @description Panel user login. */
        login: string;
        /** @description User name and surname. */
        name: string;
        /** @description User rights to modules. */
        rights: {
            /** @description Limited hours of access to panel: "y" - yes, "n" - no. */
            limited: string;
            /** @description Customers: "y" - yes, "n" - no. */
            clients: string;
            /** @description Orders: "y" - yes, "n" - no. */
            orders: string;
            /** @description Products: "y" - yes, "n" - no. */
            products: string;
            /** @description Moderator: "y" - yes, "n" - no. */
            moderator: string;
            /** @description POS sales: "y" - yes, "n" - no. */
            selling: string;
            /** @description Printing invoices in IdoSell POS: "y" - yes, "n" - no. */
            pos_invoice_printing: string;
            /** @description Financial statements: "y" - yes, "n" - no. */
            finances: string;
            /** @description Payment management: "y" - yes, "n" - no. */
            payments: string;
            /** @description Newsletter and customer database export: "y" - yes, "n" - no. */
            mailing: string;
            /** @description Marketing: "y" - yes, "n" - no. */
            integration: string;
            /** @description Admin: "y" - yes, "n" - no. */
            admin: string;
            /** @description Approval of outsourced work cost: "y" - yes, "n" - no. */
            iai_orders: string;
            /** @description Access rights to M0 supplier stock: "y" - yes, "n" - no. */
            outsource: string;
            /** @description Access rights to own stocks (bit mask). */
            stocks: number;
            /** @description List of warehouses with relevant user rights */
            stocks_list: {
                /** @description Stock ID. */
                stock_id: number;
                /** @description User privileges for a given warehouse. */
                stock_rights: boolean;
            }[];
            /** @description List of languages in which the user can translate the offer. */
            offer_translations: {
                /** @description Language ID. */
                language_id: string;
                /** @description User language privileges. */
                language_rights: boolean;
            }[];
        };
        /** @description Panel interface language. */
        panel_language: string;
        /** @description Format of dates, numbers and amounts. */
        locale: string;
    }[];
};

export type GetWmsSuppliersResponse = {
    /** @description List of product suppliers */
    suppliers: {
        /** @description Id */
        id: number;
        /** @description Name. */
        name: string;
        /** @description Quantities of products */
        productsCount: null | number;
        /** @description E-mail address */
        email: string;
        /** @description Phone number. */
        phone: string;
        /** @description Fax */
        fax: string;
        /** @description Address. */
        street: string;
        /** @description ZIP / Post code. */
        zipCode: string;
        /** @description Town / City. */
        city: string;
        /** @description Region ID */
        country: number;
        /** @description VAT no. */
        taxCode: string;
        /** @description Average delivery time */
        averageDeliveryTime: {
            /** @example 1 */
            value: number;
            /** @example unit */
            unit: string;
        };
        /** @description Description */
        description: string;
        /** @description Order preparation time for shipment */
        orderCompletionTime: {
            /** @example 1 */
            value: number;
            /** @example unit */
            unit: string;
        };
        /** @description Supplier working hours */
        workDays: {
            /** @description day */
            day: number;
            /** @description Type */
            type: string;
            /** @description from */
            from: null | string;
            /** @description to */
            to: null | string;
        }[];
    }[];
} & PagedResponse;

export type GetProductsCodeExistenceResponse = {
    results: {
        /** @description Products list. */
        products: {
            /** @description Identifier of the product being checked */
            requestProductId: string;
            /** @description Type of identifier of the product being checked. */
            requestProductIdentType: "id" | "index" | "codeExtern" | "codeProducer" | "codeDeliverer";
            /** @description Supplier ID. */
            delivererId?: string;
            /** @description IdoSell ID of the searched product */
            foundProductId?: string;
            /** @description The identifier of the retrieved size, if the passed product identifier allowed such identification. */
            foundSizeId?: string;
        }[];
    };
};

export type GetProductsIdBySizecodeResponse = {
    /** @description Object contains detailed information on result of operation. */
    results: {
        /** @description Searching code. */
        productSizeCode: string;
        /** @description Product IAI code */
        productId?: number;
        /** @description Size identifier */
        sizeId?: string;
        /** @description Size name */
        sizePanelName?: string;
        /** @description Does the product with the specified code exist. */
        productWithIndicatedCodeExists: boolean;
        /** @description Element determines whether product is deleted */
        productIsDeleted: boolean;
    }[];
};

export type GetProductsOmnibusPricesResponse = {
    /** @description Products list. */
    products: {
        [productId: string]: {
            shops: {
                [shopId: string]: {
                    /** @description Shop Id */
                    shop_id: number;
                    /** @description Lowest retail price before active promotion (gross). */
                    omnibusPriceRetail: number;
                    /** @description Lowest wholesale price before active promotion (gross). */
                    omnibusPriceWholesale: number;
                    /** @description How to manage the lowest price before promotion. */
                    omnibusPriceManagement: "automatic" | "manual";
                    /** @description List of sizes */
                    sizes: {
                        [sizeId: string]: {
                            /** @description Identifier type. */
                            ident: {
                                /** */
                                type: "id" | "index" | "codeExtern" | "codeProducer";
                                /** @description Value. */
                                value: string;
                            };
                            /** @description Lowest retail price before active promotion (gross). */
                            omnibusPriceRetail: number;
                            /** @description Lowest wholesale price before active promotion (gross). */
                            omnibusPriceWholesale: number;
                            /** @description How to manage the lowest price before promotion. */
                            omnibusPriceManagement: "automatic" | "manual"
                        } | []
                    }
                } | []
            };
            /** @description Error information. */
            error?: FaultCodeString
        } | []
    };
};

export type GetProductsSizesResponse = {
    /** @description Object contains detailed information on result of operation. */
    results: {
        [productId: string]: {
            /** @description Product IAI code */
            productId: number;
            /** @description List of sizes */
            sizesResult: {
                /** @description Size identifier */
                sizeId: string;
                /** @description Size name */
                sizePanelName: string;
                /** @description Producer code */
                productProducerCode: string;
                /** @description External product system code for size. */
                productSizeCodeExternal: string;
                /** @description Weight. */
                productWeight: number;
                /** @description Page list */
                sites?: {
                    /** @description Page ID */
                    siteId: number;
                    /** @description Store name */
                    siteName: string;
                    /** @description Gross price */
                    productRetailPrice: number;
                    /** @description Wholesale price */
                    productWholesalePrice: number;
                    /** @description Minimal price */
                    productMinimalPrice: number;
                    /** @description Recommended retail price */
                    productSuggestedPrice: number;
                }[];
            }[]
        } | []
    };
    /** @description Parameters concerning returned results */
    result: {
        /** @description Page with results number. Numeration starts from 0 */
        page: number;
        /** @description Number of results on page. Value from 1 to 100 */
        pageNumber: number;
        /** @description Number of pages of results found */
        pageAll: number;
        /** @description Number of all results found. */
        pageNumberAll: number;
    };
};

export type GetProductsSKUbyBarcodeResponse = {
    /** @description Object contains detailed information on result of operation. */
    results: {
        /** @description One of the unique, indexed product codes (IAI code / External system code / Producer code) */
        foundByIndex: string;
        /** @description Products matching the indicated search criteria */
        productSkuList: {
            /** @description Product IAI code */
            productId: number;
            /** @description Product name. */
            productName: string;
            /** @description Size identifier */
            sizeId: string;
            /** @description Size name */
            sizeName: string;
            /** @description IAI code */
            codeIai: string;
            /** @description External product system code for size. */
            codeExternal: string;
            /** @description Producer code for size. */
            codeProducer: string;
            /** @description Weight */
            weight: number;
            /** @description Available stock quantities data */
            quantities: {
                /** @description Stock ID */
                stockId: number;
                /** @description Product stock quantity */
                quantity: number;
                /** @description Available stock quantity for order sales */
                disposition: number;
            }[];
            /** @description Warehouse locations */
            stockLocations: {
                /** @description Stock ID */
                stockId: number;
                /** @description Warehouse location ID */
                stockLocationId: number;
                /** @description Warehouse location full path */
                stockLocationTextId: string;
                /** @description Storage location code */
                stockLocationCode: string;
                /** @description Additional locations */
                stockAdditionalLocations: {
                    /** @description Warehouse location ID */
                    stockAdditionalLocationId: number;
                    /** @description Warehouse location full path */
                    stockAdditionalLocationTextId: string;
                    /** @description Storage location code */
                    stockAdditionalLocationCode: string;
                }[];
            }[];
            /** @description Sold at - for wholesalers */
            sellByWholesale: number;
            /** @description Sold at - for retailers */
            sellByRetail: number;
            /** @description Number of items in package data */
            inWrapper: number;
            /** @description Brand name */
            producerName: string;
            /** @description Product icon details. */
            productIcon: {
                /** @description Determines whether icon has been set. Available values: "y" - icon is set, "n" - icon is not set (default icon is visible). */
                productIconExists: string;
                /** @description URL to large icon graphic file */
                productIconLargeUrl: string;
                /** @example productIconLargeUrlSecond */
                productIconLargeUrlSecond?: string;
                /** */
                productIconLargeSizeSecond?: number;
                /** @description Width of large icon */
                productIconLargeWidth: number;
                /** @description Height of large icon */
                productIconLargeHeight: number;
                /** @description Large icon size */
                productIconLargeSize: number;
                /** @description URL to small icon graphic file */
                productIconSmallUrl: string;
                /** @example productIconSmallUrlSecond */
                productIconSmallUrlSecond?: string;
                /** */
                productIconSmallSizeSecond?: number;
                /** @description MD5 hash of large icon graphic file */
                productIconHash: string;
            };
            /** @description Value of VAT */
            productVat: number;
            /** @description Is product VAT free Allowed values "y" - yes, "n" - no. */
            productVatFree: string;
            /** @description Supplier name. */
            delivererName: string;
            /** @description Annotation. */
            productNote: string;
            /** @description Product type. Allowed values: "product_item" - Goods, "product_free" - Free product, "product_packaging" - packaging, "product_bundle" - set. "product_collection" - collection. "product_service" - service. "product_virtual" - virtual product. "product_configurable" - configurable product. */
            productType: string;
            /** @description Prices in shops */
            productPrices: {
                /** @description Shop Id */
                shopId: number;
                /** @description Store name. */
                shopName: string;
                /** @description Gross price */
                productRetailPrice: number;
                /** @description Wholesale price */
                productWholesalePrice: number;
                /** @description Product retail price in the base currency of the panel. */
                productRetailPriceInPanelBaseCurrency: number;
                /** @description Wholesale price of the product in the base currency of the panel. */
                productWholesalePriceInPanelBaseCurrency: number;
                /** @description Currency ID */
                currencyId: string;
            }[];
            /** @description Array of language-dependent elements. */
            productDescriptionsLangData: {
                /** @description Language ID */
                langId: string;
                /** @description Product name. */
                name: string;
                /** @description Short product description. */
                description: string;
            }[];
            /** @description Barcode for product manufacturer code in Code39 or EAN13 standard. */
            codeProducerBarcodes: {
                /** @description Barcode type. */
                barcodeType: string;
                /** @example value */
                value: string;
            }[];
            /** @description Barcode for the external code of the product in standard Code39 or EAN13. */
            codeExternalBarcodes: {
                /** @description Barcode type. */
                barcodeType: string;
                /** @example value */
                value: string;
            }[];
            /** @description Barcode for product Id in Code39 or EAN13 standard. */
            codeIaiBarcodes: {
                /** @description Barcode type. */
                barcodeType: string;
                /** @example value */
                value: string;
            }[];
        }[];
    }[];
};

export type GetSystemUnitsResponse = {
    result: {
        units: {
            [id: string]: {
                /** @description #!IdentyfikatorJednostki!# */
                id?: number;
                /** @description Name in panel (limit of 30 characters) */
                nameInPanel?: string;
                /** @description Accuracy (number of places after comma) */
                precisionUnit?: number;
                /** @description Visibility */
                visible: "y" | "n";
                descriptions: {
                    [language: string]: {
                        /** @description ISO-639-3 Language */
                        language: string;
                        /** @description Name (singular) (limit of 30 characters) */
                        nameSingular: string;
                        /** @description Name (plural) (limit of 30 characters) */
                        namePlural: string;
                        /** @description Name (by fractions) (limit of 30 characters) */
                        nameFractions: string
                    } | []
                }
            } | []
        };
    };
};

export type GetProductsReservationsResponse = {
    /** @description Object contains detailed information on result of operation. */
    results: {
        /** @description Products list. */
        products: ({
            /** @description ID value. */
            identValue: string;
                        /** @description An array of product reservations */
            reservations: {
                /** @description Stock ID */
                stockId: number;
                /** @description Order serial number. */
                orderSerialNumber: number;
                /** @description Number of reserved products */
                quantity: number;
                /** @description Reservation end date */
                endTime: string;
                /** @description Size identifier */
                sizeId: string;
                /** @description Unique client's number. */
                clientId: string;
                /** @description Reservation type */
                type: string;
                /** @description Last note to reservation */
                lastNote: {
                    /** @description Login of a panel user that added a note */
                    user: string;
                    /** @description Date of adding a note */
                    date: string;
                    /** @description Content of the note */
                    note: string;
                };
            }[];
        } | {
            /** @description Information on error that occurred during gate call. */
            errors?: FaultCodeString;
        })[];
    };
};

export type GetProductsSeriesResponse = {
    /** @description Date of last modification (YYYY-MM-DD HH-MM-SS). */
    last_changed_time: string;
    /** @description Series list. */
    series: {
        /** @description Series Id. */
        id: number;
        /** @description Name. */
        name: string;
        lang_data: {
            /** @description Language code. Codes are compliant with ISO-639-3 standard. */
            lang_id: string;
            /** @description Name. */
            name: string;
            /** @description Additional text on product's pages. */
            desc_search: string;
            /** @description Additional text in product tab. */
            desc_projector: string;
        }[];
    }[];
} & PagedResponse;

export type GetShopsCurrenciesResponse = {
    /** @description List of shops */
    shops: {
        /** @description Shop ID */
        shopId: number;
        /** @description Shop name */
        shopName: string;
        /** @description Currency setting inherited from another shop */
        inherited: boolean;
        /** @description List of available languages */
        currencies: {
            /** @description Currency name */
            currency: string;
            /** @description Is the currency allowed for orders */
            allowedForOrders: boolean;
        }[];
    }[];
};

export type GetShopsLanguagesResponse = {
    /** @description List of shops */
    shops: {
        /** @description Shop ID */
        shopId: number;
        /** @description Shop name */
        shopName: string;
        /** @description Language setting inherited from another shop */
        inherited: boolean;
        /** @description List of available languages */
        languages: {
            /** @description Language id */
            id: string;
            /** @description Language name */
            name: string;
            /** @description Language ISO code */
            isoCode: string;
            /** @example true */
            enabled: boolean;
            /** @description Is the the language set as default */
            isDefault: boolean;
        }[];
    }[];
};

export type GetConfigVariablesResponse = {
    results: ({
        /** @description Key of config value. */
        key: string;
        /** @description Name of config item. */
        readonly name: string;
        /** @description Value of config item. */
        value: string;
    } & {
        /** @description The type of module for which the configuration is used */
        type: "snippets_campaign";
        /** @description Identifier of the item in used module */
        itemId: number;
        /** @description Name of config item. */
        name: string;
    })[];
    pagination: PagedResponse;
};

export type GetSystemCurrenciesResponse = {
    /** @description Number of decimal spaces for price rounding. */
    currency_round: number;
    currencies: {
        /** @description Currency ID. */
        id: string;
        /** @description Rate. */
        rate: number;
        /** @description Unit. */
        scale: number;
        /** @description Currency symbol. */
        symbol: string;
        /** @description Currency country code. */
        country_code: string;
        /** @description Element determines whether currency is active. List of values: "all" - currency is visible and applies both in panel and store, "panel" - currency applies and is visible only in panel, "n" - currency is not visible (does not apply). */
        active: string;
    }[];
};

export type GetPackagesLabelsResponse = {
    /** @description Package labels encoded in base64 */
    labels: string[];
    /** @description Label type */
    labelsType: "PDF" | "A4" | "16x10" | "SPL" | "ZPL" | "EPL" | "DPL";
};

export type GetOrdersProfitabilityResponse = {
    /** @description Order value (net) */
    totalPrice: number;
    /** @description Cost or purchasing products (net) */
    purchasePrice: number;
    /** @description Payment costs borne by the store (net) */
    shopPayformCost: number;
    /** @description Cost for shop. */
    shippingShopCosts: number;
    /** @description Insurance cost borne by the store (net) */
    insuranceShopCosts: number;
    /** @description Costs of gaining order (net) */
    acquisitionCost: number;
    /** @description Profit margin (gain from order) */
    profitMargin: number;
    /** @description Percentage margin (gain from order) */
    profitMarginPercent: number;
};

export type GetOrdersPackagesResponse = {
    /** @description Object contains detailed information on result of operation. */
    results: {
        /** @description Information on error that occurred during gate call. */
        errors?: FaultCodeString;
        /** @description Package details. */
        deliveryPackage: {} | {
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
            /** @description Date of receipt by the buyer, possible formats: "YYYY-MM-dd HH:mm:ss", "YYYY-MM-dd", */
            receivedDate: string;
            /** @description Package parameters. */
            deliveryPackageParameters: {
                /** @description Cash on delivery. */
                cashOnDelivery: number;
                /** @description Postal cash on delivery currency. */
                cashOnDeliveryCurrency: string;
                /** @description Parcel weight. */
                deliveryWeight: number;
                /** @description Link to package tracing. */
                trackingUrl: string;
                /** @description Cost for shop. */
                shippingStoreCosts: {
                    /** @description Package sending net cost. */
                    shippingStoreCostNet: number;
                    /** @description VAT rate for cost of package sending. */
                    shippingStoreCostVat: number;
                    /** @description Package sending gross cost. */
                    shippingStoreCostGross: number;
                }[];
                /** @description Package cost. */
                shippingCosts: {
                    /** @description Package sending net cost. */
                    shippingCostNet: number;
                    /** @description VAT rate for cost of package sending. */
                    shippingCostVat: number;
                    /** @description Package sending gross cost. */
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
                    options?: {
                        /** @description Id */
                        id: string;
                        /** @description Name */
                        name: string;
                    }[];
                }[];
                /** @description Information on error that occurred during gate call. */
                errors?: FaultCodeString;
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

export type GetOrdersAnalyticsResponse = {
    /** @description Object contains detailed information on result of operation. */
    results: null |  {
        /** @description Order serial number. */
        orderSerialNumber: number;
        /** @description The list of products returned due to a gate call */
        productsMargins: {
            /** @description Stock keeping unit */
            productId: number;
            /** @description Size identifier */
            sizeId: string;
            /** @description Unit margin for gross product. */
            productProfitMargin: number;
            /** @description Unit margin for the net product. */
            productProfitMarginNet: number;
            /** @description Returns the number of goods in the order */
            productQuantity: number;
            /** @description Item in basket. */
            basketPosition: number;
        }[];
    }[];
};

export type GetCouriersAssignedToShippingProfilesResponse = {
    couriers: {
        [courier: string]: {
            /** @description Courier Id */
            id: string;
            /** @description #!RegionKuriera!# */
            region: string;
            /** @description Courier name */
            name: string;
            /** @example trackingurl */
            trackingurl: string;
            /** @example pickup */
            pickup: string;
            /** @example multiple_packages_support */
            multiple_packages_support: string;
            /** @example webservice_only */
            webservice_only: string;
            /** @example shipping_number_support */
            shipping_number_support: string;
            /** @example package_number_support */
            package_number_support: string
        } | []
    };
};

export type GetOrdersStatusesResponse = {
    statuses: {
        /** @description Status identifier */
        id: number;
        /** @description Parent status identifier */
        parentId: number | null;
        /** @example Packed by Employee#1 */
        panelName: string;
    }[];
};

export type GetPaymentsResponse = {
    /** @description Parameters concerning returned results */
    result: {
        /** @description Order serial number. */
        orderNumber: number;
        /** @description Payment number for order. */
        ordinalNumber: number;
        /** @description Amount of payment. */
        value: number;
        /** @description Order currency ID (currency list can be obtained through getShopsData gate). */
        currency: string;
        /** @description Registering date. */
        accountingDate: string;
        /** */
        status: "pending" | "processed" | "cancelled";
        /** @description Form of payment ID. */
        paymentFormId: number;
        /** @description Transaction ID in external service */
        externalPaymentId: string;
        /** @description The additional status of the payment or refund returned by the third-party service. For returns by IdoPay, possible values are: "waiting", "waiting for funds", "waiting for data", "processed", "confirmed", "rejected", "error". */
        externalPaymentStatus: string;
        /** @description Event log. */
        eventLog: {
            /** @description Event log. */
            eventLogList: {
                /** @description User login. */
                user: string;
                /** @description Error code. */
                eventCode: string;
                /** @description Date. */
                date: string;
                /** */
                level: "info" | "error" | "warn";
                /** @description Error description. */
                details: string;
            }[];
        };
    };
};

export type GetProductsStrikethroughPricesResponse = {
    /** @description Products list. */
    products: {
        [productId: string]: {
            /** @description Identifier type. */
            ident: {
                /** */
                type: "id" | "index" | "codeExtern" | "codeProducer";
                /** @description Value. */
                value: number;
            };
            /** @description Strikethrough gross retail price. */
            strikethrough_retail_price: number;
            /** @description Strikethrough gross wholesale price. */
            strikethrough_wholesale_price: number;
            shops: {
                [shop: string]: {
                    /** @description Shop Id */
                    shop_id: number;
                    /** @description Strikethrough gross retail price. */
                    strikethrough_retail_price: number;
                    /** @description Strikethrough gross wholesale price. */
                    strikethrough_wholesale_price: number;
                    /** @description List of sizes */
                    sizes: {
                        [size: string]: {
                            /** @description Identifier type. */
                            ident: {
                                /** */
                                type: "id" | "index" | "codeExtern" | "codeProducer";
                                /** @description Value. */
                                value: string;
                            };
                            /** @description Strikethrough gross retail price. */
                            strikethrough_retail_price: number;
                            /** @description Strikethrough gross wholesale price. */
                            strikethrough_wholesale_price: number
                        } | []
                    }
                } | []
            };
            /** @description Error information. */
            error?: FaultCodeString
        } | []
    };
};

export type GetSystemProcessesAutomationResponse = {
    /** @description Orders. */
    orders: {
        shops: {
            /** @description Shop Id */
            shopId: number;
            /** @description Allow the status to be changed to "Shipped" even if the order payments and stock levels do not match */
            alwaysAllowSentStatus: "y" | "n";
        }[];
        /** @description Order management restrictions */
        restrictions: {
            /** @description Block the ability of selecting a status, if there are products in the warehouse from which the order is being processed, with insufficient stock level. */
            blockIfIncorrectStockQuantities: {
                restrictedShops: {
                    /** @description Shop Id */
                    shopId: number;
                    /** @description Block the ability of selecting a status "completed" if there are products in the warehouse from which the order is being processed, with insufficient stock level */
                    finished: "y" | "n";
                }[];
            };
        };
    };
};

export type GetEntriesPagesToDisplayResponse = {
    /** @description Parameters concerning returned results */
    result: {
        /** @description List of pages on which the entry is to be published */
        pagesToDisplayOn: {
            /** @description Page ID */
            siteId: string;
            /** @description Store name */
            siteName: string;
        }[];
    };
};

export type GetEntriesResponse = {
    /** @description Parameters concerning returned results */
    result: {
        /** @description Blog entry content */
        entry: {
            /** @description Date of creating an entry */
            date: string;
            /** @description Entry visibility */
            visible: "y" | "n";
            /** @description Photo */
            picture: string;
            /** @description Name on the page */
            title: string;
            /** @description short description */
            shortDescription: string;
            /** @description Long description */
            longDescription: string;
            /** @description Blog post URL */
            blogUrl: string;
            /** @description News item URL */
            newsUrl: string;
            /** @description Products list. */
            products: {
                /** @description Merchandise identifier */
                productId: string;
                /** @description Product name. */
                productName: string;
            }[];
            /** @description List of pages on which the entry is to be published */
            visibleOnSitesList: {
                /** @description Page ID */
                siteId: string;
                /** @description Store name */
                siteName: string;
            }[];
            /** @description Type of title and shortcut linking: fullContentLink - link to the subpage with full content, givenUrlLink - link to the given URL, noLink - static element */
            titleLinkType: string;
            /** @description Provided URL (for link to specified URL option) */
            link: string;
        };
    };
};

export type GetCpaResponse = {
    results: {
        /** @description Id of the CPA program. */
        id: number | null;
        /** @description The CPA program name. */
        name: string;
        /** @description Whether the CPA program is active. */
        active: "y" | "n";
        /** @description CPA campaign id */
        campaign: number;
        /** @description CPA program page settings simple or advanced, depending on the mode. */
        pageSettings: (Omit<{
            /** @description Whether to display to all sites. */
            mode: "simple" | "advanced";
        }, "mode"> & {
            /** @description Whether to display to all sites. */
            mode: "simple";
            /** @description The place where the cpa code is loaded. (For "all" mode)
|null} */
            zone: "head" | "bodyBegin" | "bodyEnd" | null;
            /** @description Snippet content for each language. (For "all" mode) */
            body: {
                /** @description Language code. */
                lang: string;
                /** @example Hello world */
                body: string;
            }[] | null;
        }) | (Omit<{
            /** @description Whether to display to all sites. */
            mode: "simple" | "advanced";
        }, "mode"> & {
            /** @description Whether to display to all sites. */
            mode: "advanced";
            /** @description Page setting for advance mode */
            pages: {
                /** @enum {string} */
                active: "y" | "n";
                /** @enum {string} */
                page: "home" | "basket" | "checkout_payment_delivery" | "checkout_confirmation" | "new_order_placement" | "order_details" | "navigation" | "product_details" | "search_results" | "after_order_place" | "mailing_subscribe" | "other_pages";
                /** @description The place where the cpa code is loaded. (For "all" mode) */
                zone: "head" | "bodyBegin" | "bodyEnd";
                body: {
                    /** @description Language code. */
                    lang: string;
                    /** @example Hello world */
                    body: string;
                }[];
            }[];
        });
        display: {
            /** @description Type of customers to whom to display the snippet */
            clientType: "all" | "unregistered" | "registered" | "retailer" | "wholesaler";
            /** @description Whether to display only for newsletter visitors. */
            newsletter: "y" | "n" | "all";
            /** @description Whether to display the code snippet only for customers who have placed an order */
            hasOrders: "y" | "n" | "all";
            /** @description Display only after entering rebate code */
            useRebateCode: "y" | "n" | "all";
        };
        /** @description Snippet entry source filter. */
        sources?: {
            direct: {
                /** @description Whether source filter is active */
                active: "y" | "n";
                /** @description Id of service of given source */
                id: number | null;
            } | null;
            search: {
                /** @description Whether source filter is active */
                active: "y" | "n";
                /** @description Id of service of given source */
                id: number | null;
            } | null;
            advert: {
                /** @description Whether source filter is active */
                active: "y" | "n";
                /** @description Id of service of given source */
                id: number | null;
            } | null;
            priceComparers: {
                /** @description Whether source filter is active */
                active: "y" | "n";
                /** @description Id of service of given source */
                id: number | null;
            } | null;
            affiliate: {
                /** @description Whether source filter is active */
                active: "y" | "n";
                /** @description Id of service of given source */
                id: number | null;
            } | null;
            cpa: {
                /** @description Whether source filter is active */
                active: "y" | "n";
                /** @description Id of service of given source */
                id: number | null;
            } | null;
            newsletter: {
                /** @description Whether source filter is active */
                active: "y" | "n";
                /** @description Id of service of given source */
                id: number | null;
            } | null;
            social: {
                /** @description Whether source filter is active */
                active: "y" | "n";
                /** @description Id of service of given source */
                id: number | null;
            } | null;
            page: {
                /** @description Whether source filter is active */
                active: "y" | "n";
                /** @description Id of service of given source */
                id: number | null;
            } | null;
        };
        /** @description List of variables that can be used in a body template. */
        variables?: {
            name: string;
            /** @enum {string} */
            source: "session" | "cookie";
        }[];
    }[];
    pagination: PagedResponse;
};

export type GetVouchersTypesResponse = {
    /** @description List of all discount code campaigns defined in the administration panel */
    vouchersTypes: {
        /** @description Discount code campaign ID */
        voucherTypeId: number;
        /** @description Discount code campaign name */
        voucherTypeName: string;
    }[];
} & PagedResponse;

export type GetVouchersResponse = {
    /** @description Parameters concerning returned results */
    result: {
        voucherData: {
            /** @description Voucher ID */
            id: number;
            /** @description Number. */
            number: string;
            /** @description Name. */
            name: string;
            /** @description Voucher expiration date */
            expirationDate: string;
            /** @description Voucher balance */
            balance: {
                /** @description Available balance */
                amount: number;
                /** @description Currency. */
                currency: string;
            };
            /** @description List of shops the voucher is active in */
            shops: number[];
            /** @example note */
            note: string;
            /** @description Status list: "y" - used, "n" - unused, "b" - blocked, "unverified" - awaiting approval */
            status: string;
            /** @description Is active? */
            blocked: "0" | "1";
        };
        /** @description Error code. List of error codes: "0" - Operation was successful, "1" - Login failure: invalid username or key, "123" - Error occurred when retrieving voucher data */
        faultCode: number;
        /** @description Error description. */
        faultString: string;
    }[];
} & PagedResponse;

export type GetOrdersHistoryResponse = {
    /** @description List of events */
    historyEvents: {
        /** @description Date when the event occurred */
        eventDate: string;
        /** @description Login */
        username: string;
        /** @description Event details */
        eventDetails: string;
    }[];
};

export type GetSnippetsCampaignResponse = {
    results: {
        /** @description Snippet campaign id */
        id: number | null;
        /** @description Snippet campaign name */
        name: string;
        /** @description Snippet campaign internal description */
        description: string;
        /** @description Shop ids where code snippets are active 1 ] */
        shop: number[] | null;
        /** @description Whether the snippet is active */
        active: "y" | "n";
        /** @description Whether the snippet campaign is deleted */
        readonly deleted: "y" | "n";
        /** @description Snippet order. */
        order: number;
        /** @description Number of code snippets associated with the campaign. */
        readonly snippetCount: number | null;
        /** @description Number of active code snippets associated with the campaign. */
        readonly activeSnippetCount: number | null;
        configVariables: {
            /** @description Key of config value. */
            key: string;
            /** @description Name of config item. */
            readonly name: string;
            /** @description Value of config item. */
            value: string;
        }[];
    }[];
    pagination: PagedResponse;
};

export type GetSnippetsCookiesResponse = {
    results: {
        /** @description Snippet */
        id: number | null;
        /** @description Id of the snippet code. */
        snippetId: number;
        /** @description Name of the cookie vendor. */
        deliverer: string;
        /** @description Category of the cookie */
        category: "analytics" | "marketing" | "functional";
        /** @description Cookie description for each language. */
        description: {
            /** @description Language code. */
            lang: string;
            /** @example Hello world */
            body: string;
        }[];
        /** @description Name of the cookie. */
        name: string | null;
        /** @description Type of the cookie
|null} */
        type: "cookie" | "pixel" | "localStorage" | null;
        /** @description Cookie lifetime mode
|null} */
        lifeTimeType: "temporary" | "days" | "minutes" | null;
        /** @description Cookie lifetime */
        lifeTime: number | null;
    }[];
    pagination: PagedResponse;
};

export type PostOrdersResponse = {
    results: {
        /** @description List of orders returned in gate call. */
        ordersResults: {
            /** @description Error code. */
            faultCode: number;
            /** @description Error description. */
            faultString: string;
            /** @description Order ID. */
            orderId: string;
            /** @description Order serial number. */
            orderSerialNumber?: number;
            /** @description The list of products returned due to a gate call */
            productsResults: null | {
                /** @description Product IAI code */
                productId: number;
                /** @description Size identifier */
                sizeId: string;
                /** @description External product system code for size. */
                productSizeCodeExternal: string;
                /** @description Stock ID */
                stockId?: number;
                /** @description Item in basket. */
                basketPosition: number;
                /** @description Error code. */
                faultCode: number;
                /** @description Error description. */
                faultString: string;
            }[];
        }[];
    };
};

export type PostProductsResponse = {
    /** @description Object contains detailed information on result of operation. */
    results: {
        /** @description The list of products returned due to a gate call */
        productsResults: {
            /** @description Product IAI code */
            productId: number;
            /** @description Size identifier */
            sizeId: string | null;
            /** @description External product system code for size. */
            productSizeCodeExternal: string | null;
            /** @description Element containing details of the error. */
            faults?: {
                /** @description Error code. */
                faultCode: string;
                /** @description Error description. */
                faultString: string;
            }[];
            /** @description Object contains detailed information on performed operation. */
            productResultDetails?: {
                /** @description Stock ID */
                stockId?: number;
                /** @description Product stock quantity */
                productSizeQuantity?: number;
                /** @description Shop Id */
                shopId?: number;
                /** @description Size identifier */
                sizeId?: string;
                /** @description Operation type */
                operationType?: string;
                /** @description Element containing details of the error. */
                fault?: {
                    /** @description Error code. */
                    faultCode: string;
                    /** @description Error description. */
                    faultString: string;
                };
                existingCodes?: {
                    [code: string]: {
                        /** @description Product IAI code */
                        productId: number;
                        /** @description Size identifier */
                        sizeId: string;
                        /** @description External product system code for size. */
                        productSizeCodeExternal: string;
                        /** @description Producer code */
                        productProducerCode: string
                    } | []
                };
            }[];
        }[];
    };
};

export type PutProductsResponse = {
    /** @description Object contains detailed information on result of operation. */
    results: {
        /** @description The list of products returned due to a gate call */
        productsResults: {
            /** @description Product IAI code */
            productId: number;
            /** @description One of the unique, indexed product codes (IAI code / External system code / Producer code) */
            productIndex?: string;
            promoteStatus?: {
                /** @description Is attribute set */
                promoteIsEnabled: boolean;
                /** @description Strikethrough price */
                promoteItemNormalPrice: number;
                /** @description Gross price */
                productRetailPrice: number;
            };
            /** @description Size identifier */
            sizeId: string | null;
            /** @description External product system code for size. */
            productSizeCodeExternal: string | null;
            /** @description Element containing details of the error. */
            faults: {
                /** @description Error code. */
                faultCode: string;
                /** @description Error description. */
                faultString: string;
            }[];
            /** @description Object contains detailed information on performed operation. */
            productResultDetails: {
                /** @description Stock ID */
                stockId: number;
                /** @description Product stock quantity */
                productSizeQuantity: number;
                /** @description Shop Id */
                shopId: number;
                /** @description Size identifier */
                sizeId: string;
                /** @description Operation type */
                operationType: string;
                /** @description Element containing details of the error. */
                fault: {
                    /** @description Error code. */
                    faultCode: string;
                    /** @description Error description. */
                    faultString: string;
                };
                existingCodes: {
                    /** @description Product IAI code */
                    productId: number;
                    /** @description Size identifier */
                    sizeId: string;
                    /** @description External product system code for size. */
                    productSizeCodeExternal: string;
                    /** @description Producer code */
                    productProducerCode: string;
                }[];
            }[];
        }[];
    };
};

export type PutOrdersResponse = {
    results: {
        /** @description List of orders returned in gate call. */
        ordersResults: {
            /** @description Order ID. */
            orderId: string;
            /** @description Order serial number. */
            orderSerialNumber: number;
            /** @description Order status. Allowed values: "finished_ext" - order status: completed in FA application, "finished" - completed, "new" - not handled, "payment_waiting" - awaiting payment, "delivery_waiting" - awaiting delivery, "on_order" - in progress, "packed" - being picked, "packed_fulfillment" - being picked - fulfilment, "packed_ready" - packed, "ready" - ready, "wait_for_dispatch" - awaiting dispatch date, "suspended" - on hold, "joined" - merged, "missing" - missing, "lost" - lost, "false" - false, "canceled" - Customer canceled. */
            orderStatus: string;
            /** @description Order status id . */
            orderStatusId: number;
            /** @description The list of products returned due to a gate call */
            productsResults?: {
                /** @description Product IAI code */
                productId: number;
                /** @description Size identifier */
                sizeId: string;
                /** @description External product system code for size. */
                productSizeCodeExternal: string;
                /** @description Item in basket. */
                basketPosition: number;
                /** @description Stock ID */
                stockId: number;
                /** @description Error code. List of error codes: 0 - Operation was successful, 1 - Not specified Id or serial number of the order, 2 - Order status entered in call parameters is not handled by the gate, 3 - Customer has not been informed about order status change, 4 - An error occurred during attempt to change order status., 5 - No such status, 6 - If you want to merge orders, use the tool provided by IdoSell Shop, 10 - Balance of payments made by customer for this order does not equal its value. Organize status of payments and try to change order status again., 11 - You cannot fulfill the order, because products are not removed from the stock. Remove the products first., 13 - You cannot send order, because not all product have been transferred from supplier stock., 14 - Balance of payments made by customer for this order does not equal its value. Organize status of payments and try to change order status again., 15 - There are payments registered for this order. Sort status of payments and try again to change the status of order., There are not registered payments for this order. Organize status of payments and try changing order status again., 16 - Order can't be completed by supplier as not all products are from foreign stock, Order cannot be sent. Check reservations and stock quantities., 18 - Ccustomers VAT settings have not been approved yet. To change the status of order confirm settings or charge VAT., 19 - There are products in order bought within presale., 19 - Order cannot be sent. There are products in order bought within presale., 20 - Not all products have been moved to target stock., 21 - You cannot complete order, , 22 - You can't send orders as there are products in it for which serial numbers were not saved, 23 - Order cannot be sent. Not all products have been moved to target stock., 24 - There are sale documents issued to this order. Cancel issued documents and change status next., 25 - Not all of documents demanded by customer have been issued., 2214 - Order status cannot be changed, 26 - Order status cannot be changed. List of products causing problems, 27 - Change of a billing currency is possible only in case of open orders which have neither any issued invoices (or all invoices have the status "cancelled") nor declared or completed payments., 28 - Invalid currency, 29 - Wrong sale date format 32 - Invalid order calculation parameter 33 - Incorrect loyalty point value for a product 34 - Customer does not have enough loyalty points 36 - Incorrect VAT rate of the product */
                faultCode: number;
                /** @description Error description. */
                faultString: string;
            }[];
            /** @description Error code. List of error codes: 0 - Operation was successful, 1 - Not specified Id or serial number of the order, 2 - Order status entered in call parameters is not handled by the gate, 3 - Customer has not been informed about order status change, 4 - An error occurred during attempt to change order status., 5 - No such status, 6 - If you want to merge orders, use the tool provided by IdoSell Shop, 10 - Balance of payments made by customer for this order does not equal its value. Organize status of payments and try to change order status again., 11 - You cannot fulfill the order, because products are not removed from the stock. Remove the products first., 13 - You cannot send order, because not all product have been transferred from supplier stock., 14 - Balance of payments made by customer for this order does not equal its value. Organize status of payments and try to change order status again., 15 - There are payments registered for this order. Sort status of payments and try again to change the status of order., There are not registered payments for this order. Organize status of payments and try changing order status again., 16 - Order can't be completed by supplier as not all products are from foreign stock, Order cannot be sent. Check reservations and stock quantities., 18 - Ccustomers VAT settings have not been approved yet. To change the status of order confirm settings or charge VAT., 19 - There are products in order bought within presale., 19 - Order cannot be sent. There are products in order bought within presale., 20 - Not all products have been moved to target stock., 21 - You cannot complete order, , 22 - You can't send orders as there are products in it for which serial numbers were not saved, 23 - Order cannot be sent. Not all products have been moved to target stock., 24 - There are sale documents issued to this order. Cancel issued documents and change status next., 25 - Not all of documents demanded by customer have been issued., 2214 - Order status cannot be changed, 26 - Order status cannot be changed. List of products causing problems, 27 - Change of a billing currency is possible only in case of open orders which have neither any issued invoices (or all invoices have the status "cancelled") nor declared or completed payments., 28 - Invalid currency, 29 - Wrong sale date format 32 - Invalid order calculation parameter 33 - Incorrect loyalty point value for a product 34 - Customer does not have enough loyalty points 36 - Incorrect VAT rate of the product */
            faultCode: number;
            /** @description Error description. */
            faultString: string;
        }[];
    };
};

export type PostCouriersPickupPointsResponse = {
    /** @description Parameters concerning returned results */
    result: {
        /** @description Collection point ID. */
        pickupPointId: number; 
        /** @description external system code. */
        pickupPointExternalId: string;
        /** @description Courier ID. */
        courierId: number;
        /** @description Error code. */
        faultCode: number;
        /** @description Error description. */
        faultString: string;
    }[];
};

export type PutCouriersPickupPointsResponse = {
    /** @description Parameters concerning returned results */
    result: {
        /** @description Collection point ID. */
        pickupPointId: number;
        /** @description external system code. */
        pickupPointExternalId: string;
        /** @description Courier ID. */
        courierId: number;
        /** @description Error code. */
        faultCode: number;
        /** @description Error description. */
        faultString: string;
    }[];
};

export type PostPackagesLabelsResponse = {
    /** @description Id. */
    eventId: number;
    /** @description Type. */
    eventType: string;
    /** @description Information on consignments. */
    packages: {
        /** @description Parcel ID in the panel */
        id: string;
        /** @description Shipment number provided by the courier. Returned only if the courier supports tracking numbers */
        shippingNumber?: string;
        /** @description Number of the parcel in the shipmnet given by the courier. Returned only if the courier supports parcel numbers */
        packageNumber: string;
    }[];
    /** @description Package labels encoded in base64 */
    labels: {
        /** @description Parcel label encoded with base64 algorythm. */
        label: string;
        /** @description Label format */
        format: "PDF" | "A4" | "16x10" | "EPL" | "ZPL" | "SPL";
    };
};

export type PostOrdersDocumentsCreateResponse = {
    documentsResults: {
        documentsData: {
            /** @description Document type */
            documentType: "vat_invoice" | "corrective_vat_invoice" | "advance_vat_invoice" | "final_advance_vat_invoice" | "pro_forma_invoice" | "advance_pro_forma_invoice" | "final_advance_pro_forma_invoice" | "fiscalInvoice" | "invoices" | "fiscal_receipt" | "sales_confirmation";
            /** @description Order serial number */
            orderSerialNumber: number;
            /** @example  */
            id?: number;
            /** @example  */
            documentNumber?: string;
            /** @example  */
            documentData?: string;
            error: {
                /** @description Error code. */
                faultCode: number;
                /** @description Error description. */
                faultString: string;
            };
        }[];
        pdfBase64: string;
    };
};

export type PostClientsResponse = {
    /** @description Customer data. */
    clients: {
        /** @description Information about newly created customer accounts. */
        status: boolean;
        /** @description Parameters transmitted to method */
        params: {
            /** @description Customer ID. */
            id: number;
            /** @description Customer's login. */
            login: string;
            /** @description Field used for identifying request-response pairs for the endpoint. */
            request_reference?: string;
        };
        /** @description Information on error that occurred during gate call. */
        errors?: FaultCodeString[];
    }[];
};

export type PostReturnsResponse = {
    /** @example 1 */
    return_id: number;
};

export type PostWmsStocksdocumentsDocumentsResponse = {
    /** @description Document identifier. */
    id: number;
};

export type PostWmsStocksdocumentsProductsResponse = {
    errors?: FaultCodeString;
} | [];

export type PostPaymentsResponse = {
    /** @description Parameters concerning returned results */
    result: {
        /** @description Transaction ID. */
        paymentId: string;
    };
};

export type PutReturnsResponse = {
    errors?: FaultCodeString;
    /** @description Object contains detailed information on result of operation. */
    results: {
        /** @example 1 */
        id: number;
        errors: FaultCodeString;
    }[];
};

export type PutRmaResponse = {
    /** @description Object contains detailed information on result of operation. */
    results: {
        rmasResults: {
            /** @description Complaint id. */
            rmaId: number;
            /** @description Error code. */
            faultCode: number;
            /** @description Error description. */
            faultString?: string;
        }[];
    };
};

export type PutWmsStocksdocumentsProductsResponse = {
    errors?: FaultCodeString;
} | [];

export type PostMenuResponse = {
    /** @description Parameters concerning returned results */
    result: {
        /** @description Shop Id. */
        shop_id: number;
        /** @description Menu ID. */
        menu_id: number;
        /** @description Menu element ID */
        item_id: number;
        /** @description Parent menu element ID. Example: "item1\item2\item3". */
        item_textid: string;
        /** @description Parent menu element ID */
        parent_id: number;
        /** @description Menu element text identifier. Example: "item1\item2\item3". */
        parent_textid: string | null;
        /** @description Error code. List of error codes: "0" - Operation was successful, "1" - Incorrect shop id, "2" - Incorrect language ID, "3" - Incorrect menu id, "4" - Element with indicated ID doesn't exist, "5" - Element name is empty, "6" - Element with the provided name already exists. */
        faultCode: number;
        /** @description Error description. */
        faultString: string;
        /** @description Error adding graphics. */
        faultGfx: {
            /** @description Graphic type. List of types: "gfx_nav" - Graphic on the "navigation" page, "gfx_active" - Graphic - When the cursor is on the link, "gfx_active_desktop" - Graphic - When the cursor is on the link - Desktop, "gfx_active_tablet" - Graphic - When the cursor is on the link - Tablet, "gfx_active_mobile" - Graphic - When the cursor is on the link - Mobile, "gfx" - Graphic - When the cursor is outside link, "gfx_inactive_desktop" - Graphic - When the cursor is outside link - Desktop, "gfx_inactive_tablet" - Graphic - When the cursor is outside link - Tablet, "gfx_inactive_mobile" - Graphic - When the cursor is outside link - Mobile, "gfx_onmouseover" - Graphic - When the link is opened, "gfx_omo_desktop" - Graphic - When the link is opened - Desktop, "gfx_omo_tablet" - Graphic - When the link is opened - Tablet, "gfx_omo_mobile" - Graphic - When the link is opened - Mobile. */
            type: string;
            /** @description Graphic error code. List of error codes: "101" - File is not a graphics format, "102" - File size too large, "103" - Graphic is too wide, "104" - Graphics is too narrow. */
            code: number;
            /** @description Graphic error description. */
            val: string;
        }[];
    }[];
};

export type PutClientsDeliveryAddressResponse = {
    /** @description Object contains detailed information on result of operation. */
    results: {
        /** @description Information whether the operation was successful. */
        resultStatus: boolean;
        /** @description Object contains detailed information on performed operation. */
        clientDeliveryAddressResult: {
            /** @description Unique client's number. */
            clientId: number;
            /** @description Delivery address ID. */
            clientDeliveryAddressId: number;
        };
        /** @description Information on error that occurred during gate call. */
        errors?: FaultCodeString[];
    }[];
};

export type PutProductsAttachmentsResponse = {
    /** @description Object contains detailed information on result of operation. */
    results: {
        /** @description Stock keeping unit. */
        productIdent: {
            /** @description ID value. */
            identValue: string | number;
            /** @description Identifier type. */
            productIdentType: "id" | "index" | "codeExtern" | "codeProducer";
        };
        /** @description Product attachments list. */
        attachments?: {
            /** @description Attachment file link. */
            attachmentUrl: string;
            /** @description Attachment name. */
            attachmentName: string;
            /** @description Language ID */
            langId: string;
            /** @description File type: audio, video, doc, other. */
            attachmentFileType: "audio" | "video" | "doc" | "other" | "image";
            /** @description Type of customer, attachment should be available for: 'all','ordered','wholesaler','wholesaler_or_ordered','wholesaler_and_ordered'. */
            attachmentEnable: "all" | "ordered" | "wholesaler" | "wholesaler_or_orderer" | "wholesaler_and_ordered";
            /** @description Attachment ID. */
            attachmentId?: number;
            /** @description Attachment downloads record. */
            attachmentDownloadLog: "y" | "n";
            /** @description Attachment file extension. */
            attachmentFileExtension?: string;
            /** @description Attachment number. */
            attachmentPriority?: number;
            /** @description Flag indicating if an attachment should be removed. */
            attachmentToDelete?: boolean;
            /** @description Attachment document types list. */
            documentTypes?: {
                /** @description Document type. */
                documentType?: "energy_label" | "instruction_with_safety_information" | "user_manual" | "installation_instructions" | "product_card" | "guide" | "others";
                /** @description Additional description. */
                description?: string;
            }[];
            /** @description Information on error that occurred during gate call. */
            errors?: FaultCodeString;
        }[];
        /** @description List of product's virtual attachments. */
        virtualAttachments?: {
            /** @description Attachment file link. */
            attachmentUrl: string;
            /** @description Attachment name. */
            attachmentName: {
                /** @description List of languages. */
                attachmentLanguages: {
                    /** @description Language ID */
                    langId: string;
                    /** @description Language name */
                    langName: string;
                    /** @description Literal in selected language. */
                    langValue: string;
                }[];
            };
            /** @description Full version or sample. */
            attachmentType: "full" | "demo";
            /** @description Number of attachment downloads limit. */
            attachmentLimits: {
                /** @description Number of downloads limit. */
                attachmentDownloadsLimit: number;
                /** @description Number of days file should be available. */
                attachmentDaysLimit: number;
            };
            /** @description Attachment ID. */
            attachmentId: number;
            /** @description Attachment number. */
            attachmentPriority: number;
            /** @description Flag indicating if an attachment should be removed. */
            attachmentToDelete: boolean;
            /** @description Information on error that occurred during gate call. */
            errors?: FaultCodeString;
        }[];
        /** @description Information on error that occurred during gate call. */
        errors?: FaultCodeString;
        /** @description Flag indicating if there are errors in results of attachments settings. */
        attachmentsErrorsOccurred?: boolean;
        /** @description Flag indicating if there are errors in results of virtual attachments settings. */
        virtualAttachmentsErrorsOccurred?: boolean;
    }[];
    /** @description Information about whether any errors occurred. */
    errorsOccurred: boolean;
};

export type PutMenuResponse = {
    /** @description Parameters concerning returned results */
    result: {
        /** @description Shop Id. */
        shop_id: number;
        /** @description Menu ID. */
        menu_id: number;
        /** @description Menu element ID. */
        item_id: string;
        /** @description Menu element text identifier. Example: "item1\item2\item3". */
        item_textid: null | string;
        /** @description Error code. List of error codes: "0" - Operation was successful, "1" - Incorrect shop id, "2" - Incorrect language ID, "3" - Incorrect menu id, "4" - Element with indicated ID doesn't exist, "5" - Element name is empty, "6" - Element with the provided name already exists, "7" - Menu element ID or menu element text identifier is required. */
        faultCode: number;
        /** @description Error description. */
        faultString: string;
        /** @description Error adding graphics. */
        faultGfx: {
            /** @description Graphic type. List of types: "gfx_nav" - Graphic on the "navigation" page, "gfx_active" - Graphic - When the cursor is on the link, "gfx_active_desktop" - Graphic - When the cursor is on the link - Desktop, "gfx_active_tablet" - Graphic - When the cursor is on the link - Tablet, "gfx_active_mobile" - Graphic - When the cursor is on the link - Mobile, "gfx" - Graphic - When the cursor is outside link, "gfx_inactive_desktop" - Graphic - When the cursor is outside link - Desktop, "gfx_inactive_tablet" - Graphic - When the cursor is outside link - Tablet, "gfx_inactive_mobile" - Graphic - When the cursor is outside link - Mobile, "gfx_onmouseover" - Graphic - When the link is opened, "gfx_omo_desktop" - Graphic - When the link is opened - Desktop, "gfx_omo_tablet" - Graphic - When the link is opened - Tablet, "gfx_omo_mobile" - Graphic - When the link is opened - Mobile. */
            type: string;
            /** @description Graphic error code. List of error codes: "101" - File is not a graphics format, "102" - File size too large, "103" - Graphic is too wide, "104" - Graphics is too narrow. */
            code: number;
            /** @description Graphic error description. */
            val: string;
        }[];
    }[];
};

export type PostPaymentsRepaymentResponse = {
    /** @description Parameters concerning returned results */
    result: {
        /** @description Payment ID. */
        payment_id: string;
    };
};

export type PutProductsCategoriesResponse = {
    /** @description Parameters concerning returned results */
    result: {
        /** @description List of categories in which sought products are present. */
        categories: {
            /** @description Category id. */
            id: number;
            /** @description Parent category ID. */
            parent_id?: number;
            /** @description Priority. */
            priority?: number;
            /** @description Operation code. */
            operation?: string;
            /** @description Error code. Error description: "0" - Operation was successful, "1" - Login failure: invalid username or key, "4" - Shop has been blocked due to number of overdue invoices owed to IAI Company */
            faultCode: number;
            /** @description Error description. */
            faultString: string;
        }[];
    };
};

export type GetCouriersResponse = {
    /** @description Parameters concerning returned results */
    result: {
        /** @description Courier ID. */
        courierId: number;
        /** @description Courier name. */
        name: string;
        /** @description Information if a courier delivers to personal collection points. */
        hasPickupPoints: boolean;
    }[];
} & PagedResponse;

export type PutWmsSuppliersResponse = {
    suppliersResponse: {
        /** @description Id */
        id: number;
        /** @description Name. */
        name: string;
        /** @description Quantities of products */
        productsCount: number;
        /** @description E-mail address */
        email: string | null;
        /** @description Phone number. */
        phone: string | null;
        /** @description Fax */
        fax: string | null;
        /** @description Address. */
        street: string | null;
        /** @description ZIP / Post code */
        zipCode: string | null;
        /** @description Town / City. */
        city: string | null;
        /** @description Region ID */
        country: number;
        /** @description VAT no. */
        taxCode: string | null;
        /** @description Average delivery time */
        averageDeliveryTime: {
            /** @description value */
            value?: number;
            /** @description Unit */
            unit?: string;
        };
        /** @description Description */
        description: string | null;
        /** @description Order preparation time for shipment */
        orderCompletionTime: {
            /** @description value */
            value?: number;
            /** @description Unit */
            unit?: string;
        };
        /** @description Supplier working hours */
        workDays: null | {
            /** @description day */
            day: number;
            /** @example type */
            type: string;
            /** @description from */
            from: string;
            /** @description to */
            to: string;
        }[];
        supplierErrors?: {
            /** @description Error code. */
            faultCode: string;
            /** @description Error description. */
            faultString: string;
        }[];
    }[];
};

export type PutWarrantiesResponse = {
    warranties: {
        /** @description Warranty ID. */
        id: number;
        /** @description Name. */
        name: string;
        /** @description Information on error that occurred during gate call. */
        errors: FaultCodeString;
    }[];
};

export type PutSystemUnitsResponse = {
    result: {
        unitsResponse: {
            /** @description #!IdentyfikatorJednostki!# */
            id: number;
            /** @description Name in panel (limit of 30 characters) */
            nameInPanel: string;
            /** @description Accuracy (number of places after comma) */
            precisionUnit: number;
            /** @description Visibility */
            visible: boolean | null;
            /** @description Unit names */
            descriptions: null | {
                /** @description ISO-639-3 Language */
                language: string;
                /** @description Name (singular) (limit of 30 characters) */
                nameSingular: string;
                /** @description Name (plural) (limit of 30 characters) */
                namePlural: string;
                /** @description Name (by fractions) (limit of 30 characters) */
                nameFractions: string;
            }[];
            unitErrors?: {
                /** @description Error code. */
                faultCode: string;
                /** @description Error description. */
                faultString: string;
            }[];
        }[];
    };
};

export type PutSizesResponse = {
    /** @description Element contains list of sizes. */
    sizes: {
        /** @description Error code. */
        faultCode: number;
        /** @description Error description. */
        faultString: string;
        /** @description Size group ID. */
        group_id: number;
        /** @description Size identifier. */
        id: string | null;
        /** @description Category plural name. */
        name: string;
        /** @description Size description. */
        description: string | null;
        /** @description Operation type: add, edit, del */
        operation: string;
        lang_data?: {
            /** @description Language code. Codes are compliant with ISO-639-3 standard. */
            lang_id: string;
            /** @description Category plural name. */
            name: string;
        }[];
    }[];
};

export type PutSizechartsResponse = {
    sizeChartsResponse: {
        /** @description Id */
        id: number;
        /** @description Name in panel */
        nameInPanel: string;
        /** @description Display mode */
        displayMode: string;
        languagesData: {
            /** @description Customer language ID. */
            language: string;
            columns: {
                /** @description Column number */
                columnNumber: number;
                /** @description Column name */
                columnTitle: string;
            }[];
            /** @description List of sizes */
            sizes: {
                /** @description Size identifier */
                sizeId: string;
                /** @description Priority */
                priority: number;
                descriptions: {
                    /** @description Column number */
                    columnNumber: number;
                    /** @description Value */
                    value: string;
                }[];
            }[];
        }[];
        chartErrors?: {
            /** @description Error code */
            faultCode: string;
            /** @description Error description */
            faultString: string;
        }[];
    }[];
};

export type PutProductsParametersResponse = {
    /** @description Object contains detailed information on result of operation. */
    results: {
        /** @description ID of added or edited section, parameter or value. */
        item_id: number;
        /** @description Error code. */
        faultCode: number;
        /** @description Error description. */
        faultString: string;
    }[];
};

export type PutPaymentsResponse = {
    headers: {
        [name: string]: unknown;
    };
    content: never;
};

export type PostVouchersResponse = {
    /** @description Parameters concerning returned results */
    result: {
        /** @description Voucher ID */
        id: number;
        /** @description Number. */
        number: string;
        /** @description Error code. List of error codes: "0" - Operation was successful, "1" - Login failure: invalid username or key, "121" - Error occurred when adding a voucher */
        faultCode: number;
        /** @description Error description. */
        faultString: string;
    }[];
};

export type PostEntriesResponse = {
    result: {
        /** @description Entry ID */
        entryId: number;
    };
};

export type PostClientsPayerAddressResponse = {
    /** @description Object contains detailed information on result of operation. */
    results: {
        /** @description Information whether the operation was successful. */
        resultStatus: boolean;
        payerAddressResult: {
            /** @description Buyer's address id. */
            payerAddressId: number;
        };
        /** @description Information on error that occurred during gate call. */
        errors?: FaultCodeString[];
    }[];
};

export type PostClientsDeliveryAddressResponse = {
    /** @description Object contains detailed information on result of operation. */
    results: {
        /** @description Information whether the operation was successful. */
        resultStatus: boolean;
        /** @description Object contains detailed information on performed operation. */
        clientDeliveryAddressResult?: {
            /** @description Delivery address ID. */
            clientDeliveryAddressId: number;
        };
        /** @description Information on error that occurred during gate call. */
        errors?: FaultCodeString[];
    }[];
};

export type PutClientsResponse = {
    /** @description Object contains detailed information on result of operation. */
    results: {
        /** @description Information whether the operation was successful. */
        resultStatus: boolean;
        /** @description Information, whether account was successfully edited, or about error, if one occurred. */
        clientsResult?: {
            /** @description Unique client's number. */
            clientId: number;
            /** @description Field used for identifying request-response pairs for the endpoint. */
            requestReference?: string;
        };
        /** @description Information on error that occurred during gate call. */
        errors?: FaultCodeString[];
    }[];
};

export type PutClientsPayerAddressResponse = {
    /** @description Object contains detailed information on result of operation. */
    results: {
        /** @description Information whether the operation was successful. */
        resultStatus: boolean;
        /** @description Payer address information */
        payerAddressResult?: {
            /** @description Unique client's number. */
            clientId: number;
            /** @description Buyer's address id. */
            payerAddressId: number;
        };
        /** @description Information on error that occurred during gate call. */
        errors?: FaultCodeString[];
    }[];
};

type CmsResult = {
    id: number;
    errors: {
        code: string;
        field?: string | null;
        value?: string | null;
        message?: string;
        uid?: string;
    }[]
}

export type CmsResponse = {
    errors?: [];
    results: CmsResult[];
};

export type CmsCampaignResponse = {
    errors?: [];
    results: (CmsResult & { name: string })[];
};

export type GetCpaCampaignResponse = {
    results: {
        /** @description Snippet campaign id */
        id: number | null;
        /** @description Snippet campaign name */
        name: string;
        /** @description Snippet campaign internal description */
        description: string;
        /** @description Shop ids where code snippets are active 1 ] */
        shop: number[] | null;
        /** @description Whether the snippet is active */
        active: "y" | "n";
        /** @description Number of CPA programs associated with the campaign. */
        readonly cpaCount: number | null;
        /** @description Number of active CPA programs associated with the campaign. */
        readonly activeCpaCount: number | null;
    }[];
    pagination: PagedResponse;
};

export type PutResponsibilityEntitiesResponse = {
    errors: [];
    results: {
        /** @description Responsible entity code */
        code: string;
        /** @description Errors */
        errors: ((({
            /** @description Error code. */
            code: string;
            /** @description Field associated with the error. */
            field: string | null;
            /** @description Error description. */
            message: string | null;
            /** @description Value associated with the error. */
            value: string | null;
            /** @description Unique identifier of the error (for support). */
            uid: string | null;
        } & {
            errorCode: string;
        }) & {
            /** @description Possible values: - unexpected_error - invalid_language_code - invalid_language_for_shop - invalid_shop - invalid_date_range - invalid_number_range - collection_is_empty - collection_limit_exceeded - invalid_parameter_for_post_method - invalid_parameter_for_put_method - no_data - connection_error
             * */
            errorCode: string;
        }) | {
            code: string;
        })[];
    }[];
};

export type PutSystemCurrenciesResponse = {
    currencies: {
        /** @description Currency code in ISO 4217 standard. */
        id: string;
        /** @description Currency exchange rate. */
        rate: null | string;
        /** @description Error code. */
        faultCode: number;
        /** @description Error description. */
        faultString: string;
    }[];
};

export type PutVouchersResponse = {
    /** @description Parameters concerning returned results */
    result: {
        /** @description Voucher ID */
        id: number;
        /** @description Number. */
        number: string;
        /** @description Voucher balance */
        balance: {
            /** @description Available balance */
            amount: number;
            /** @description Currency. */
            currency: string;
        };
        /** @description Error code. List of error codes: "0" - Operation was successful, "1" - Login failure: invalid username or key, "122" - Error occurred when editing a voucher */
        faultCode: number;
        /** @description Error description. */
        faultString: string;
    }[];
};

export type PutProductsBrandsResponse = {
    errors?: {
        faultCode: string
        faultString: string
    };
    producersResponse: {
        /** @description Id */
        id?: number;
        /** @description Name in panel */
        nameInPanel: string;
        languagesConfigurations?: null | {
            productsListImagesConfiguration: {
                /** @description Type of graphics */
                graphicType: "img" | "img_rwd";
                /** @description Image (one size for computers, tablets and smartphones, not recommended) */
                singleGraphic: string;
                /** @description #!GrafikaDlaEkranowKomputera#! */
                pcGraphic: string;
                /** @description Graphics for tablets */
                tabletGraphic: string;
                /** @description Graphics for smartphones */
                phoneGraphic: string;
            };
            /** @description Graphic displayed on product card */
            productCardImagesConfiguration: {
                /** @description Type of graphics */
                graphicType: "img" | "img_rwd";
                /** @description Image (one size for computers, tablets and smartphones, not recommended) */
                singleGraphic: string;
                /** @description #!GrafikaDlaEkranowKomputera#! */
                pcGraphic: string;
                /** @description Graphics for tablets */
                tabletGraphic: string;
                /** @description Graphics for smartphones */
                phoneGraphic: string;
            };
            /** @description Language ID (code in ISO 639-2). */
            languageId: string;
            shopsConfigurations: {
                /** @description Name. */
                name: string;
                /** @description Name displayed in the website header */
                headerName: string;
                /** @description Description displayed at the top of products list */
                descriptionTop: string;
                /** @description Description displayed at the bottom of products list */
                descriptionBottom: string;
                /** @description Shop Id */
                shopId: number;
                /** @description Products display settings */
                view: "default" | "own";
                /** @description Enable customers to change sorting */
                enableSort: boolean;
                /** @description Enable customers to change the number of products displayed */
                enableChangeDisplayCount: boolean;
                /** @description Number of displayed products */
                numberOfProductsGrid: number;
                /** @description Selected sorting mode */
                sortModeGrid: "d_relevance" | "d_date" | "a_date" | "d_priority" | "a_priority" | "a_priorityname" | "d_priorityname" | "d_priorityonly" | "a_priorityonly" | "a_name" | "d_name" | "a_price" | "d_price";
                /** @description Meta settings */
                metaSettings: "auto" | "custom";
                /** @description Title */
                metaTitle: string;
                /** @description Description */
                metaDescription: string;
                /** @description Keywords */
                metaKeywords: string;
                /** @description Array */
                metaRobotsSettingsIndex: "auto" | "index" | "noindex";
                /** @description Array */
                metaRobotsSettingsFollow: "auto" | "follow" | "nofollow";
            }[];
        }[];
        producerErrors?: {
            /** @description Error code. */
            faultCode: string;
            /** @description Error description. */
            faultString: string;
        }[];
    }[];
};

export type PutProductsDescriptionsResponse = {
    /** @description Object contains detailed information on result of operation. */
    errors?: {
        faultCode: number
        faultString: null
    };
    results: {
        productIdent: {
            /** @description Identifier type. */
            productIdentType: "id" | "index" | "codeExtern" | "codeProducer";
            /** @description ID value. */
            identValue: string;
        };
        /** @description Error information. */
        error?: FaultCodeString;
    }[];
    /** @description Information about whether any errors occurred. */
    errorsOccurred: boolean;
};

export type PostProductsOpinionsResponse = {
    /** @description Parameters concerning returned results */
    result: {
        opinions: string[];
    };
};

export type PutProductsGroupsMainProductResponse = {
    /** @description Object contains detailed information on result of operation. */
    errors?: {
        faultCode: number
        faultString: null
    };
    results: {
        productIdent: {
            /** @description Identifier type. */
            productIdentType: "id" | "index" | "codeExtern" | "codeProducer";
            /** @description ID value. */
            identValue: string;
        };
        /** @description Error information. */
        error?: FaultCodeString;
    }[];
    /** @description Information about whether any errors occurred. */
    errorsOccurred: boolean;
};

export type PostProductsMarketingPromotionResponse = {
    results: {
        /** @description Promotion ID */
        newPromotionId: number;
        /** @description Promotion name */
        newPromotionName: string;
    };
};

export type PutProductsMarketingZonesResponse = {
    /** @description Products list. */
    products: {
        /** @description Identifier type. */
        ident: {
            /** */
            type: "id" | "index" | "codeExtern" | "codeProducer";
            /** @description Value. */
            value: string;
        };
        /** @description Error information. */
        error: {
            /** @description Error code. List of error codes: "0" - Operation was successful, "1" - Login failure: invalid username or key, "3" - Shop has been blocked due to number of overdue invoices owed to IAI Company, "4" - Incorrect product ID sent, "5" - Wrong size Id sent */
            faultCode: number;
            /** @description Error description. */
            faultString: string;
        };
    }[];
};

export type PutProductsImagesResponse = {
    /** @description Object contains detailed information on result of operation. */
    results: {
        productIdent: {
            /** @description ID value. */
            identValue: string;
            /** @description Identifier type. */
            productIdentType: "id" | "index" | "codeExtern" | "codeProducer";
        };
        /** @description Product photos details. */
        productImages: {
            /** @description Product photo. */
            productImageSource: string | null;
            /** @description A product photo's number. */
            productImageNumber: number;
            /** @description Picture priority */
            productImagePriority: number;
            /** @description Flag marking if a picture should be deleted. */
            deleteProductImage?: boolean;
            /** @description Information on error that occurred during gate call. */
            errors?: FaultCodeString;
        }[];
        /** @description Product icons list. */
        productIcons?: {
            /** @example productIconSourceType */
            productIconSourceType: string;
            /** @description Information on error that occurred during gate call. */
            errors?: FaultCodeString;
            /** @description Flag indicating whether to remove the product icon. */
            deleteProductIcon: boolean;
            /** @description Icon type. */
            productIconType: "shop" | "auction" | "group";
        }[];
        /** @description Information on error that occurred during gate call. */
        errors?: FaultCodeString;
        isImagesErrors?: boolean;
        /** @description Flag marking if there are errors in results of setting icons. */
        isIconsErrors?: boolean;
        /** @description Product settings. */
        productImagesSettings?: {
            /** @description Way of delivering information about a picture. */
            productImageSourceType: "base64" | "url";
            /** @description Whether images for products should be scalable. */
            productImagesApplyMacro: boolean;
        };
    }[];
};

export type PutProductsSeriesResponse = {
    seriesResponse: {
        /** @description Id */
        id: number;
        /** @description Name in panel */
        nameInPanel: string;
        shopsConfigurations: {
            /** @description Shop Id */
            shopId: number;
            /** @description Customer language ID. */
            language: string;
            /** @example nameOnPage */
            nameOnPage: string;
            /** @description Name displayed in the website header */
            headerName: string;
            /** @example description */
            description: string;
            /** @description Products display settings */
            view: "default" | "own";
            /** @example defaultView */
            defaultView: string;
            /** @description Enable customers to change sorting */
            enableSort: boolean;
            /** @description Enable customers to change the number of products displayed */
            enableChangeDisplayCount: boolean;
            /** @description Number of displayed products */
            numberOfProductsGrid: number;
            /** @description Selected sorting mode */
            sortModeGrid: "d_relevance" | "d_date" | "a_date" | "d_priority" | "a_priority" | "a_priorityname" | "d_priorityname" | "d_priorityonly" | "a_priorityonly" | "a_name" | "d_name" | "a_price" | "d_price";
            imagesConfiguration: {
                /** @description Type of graphics */
                graphicType: "img" | "img_rwd";
                /** @description Image (one size for computers, tablets and smartphones, not recommended) */
                singleGraphic: string;
                /** @description Graphics for computer screens */
                pcGraphic: string;
                /** @description Graphics for tablets */
                tabletGraphic: string;
                /** @description Graphics for smartphones */
                phoneGraphic: string;
            };
            /** @description Meta settings */
            metaSettings: "auto" | "custom";
            /** @description Title */
            metaTitle: string;
            /** @description Description */
            metaDescription: string;
            /** @description Keywords */
            metaKeywords: string;
            /** */
            metaRobotsSettingsIndex: "auto" | "index" | "noindex";
            /** */
            metaRobotsSettingsFollow: "auto" | "follow" | "nofollow";
        }[];
        serieErrors?: {
            /** @description Error code. */
            faultCode: string;
            /** @description Error description. */
            faultString: string;
        }[];
    }[];
};

export type PutProductsSizesResponse = {
    /** @description Object contains detailed information on result of operation. */
    results: {
        /** @description Product IAI code */
        productId: number;
        /** @description List of sizes */
        sizes?: {
            /** @description Size identifier */
            sizeId: string;
            /** @description Size name */
            sizePanelName: string;
            /** @description Information on error that occurred during gate call. */
            errors?: FaultCodeString[];
            /** @description Page list */
            sites?: {
                /** @description Page ID */
                siteId: number;
                /** @description Information on error that occurred during gate call. */
                errors?: FaultCodeString[];
            }[];
        }[];
        /** @description Product index. */
        sizeIndex?: string;
        /** @description Information on error that occurred during gate call. */
        errors?: FaultCodeString[];
    }[];
};

export type PutProductsStockQuantityResponse = {
    /** @description Object contains detailed information on result of operation. */
    results: {
        /** @description External product system code for size. */
        productSizeCodeExternal?: string;
        /** @description External product producer code for size. */
        productSizeCodeProducer?: string;
        /** @description Product index. */
        productIndex?: string;
        /** @description Stock ID */
        stockId: number;
        /** @description Error code. */
        faultCode: number;
        /** @description Error description. */
        faultString: string;
    }[];
};

export type PutProductsStocksResponse = {
    /** @description Object contains detailed information on result of operation. */
    results: {
        ident: {
            /** */
            identType: "id" | "index" | "codeExtern" | "codeProducer";
            /** @description ID value. */
            identValue: string;
        };
        /** @description List of sizes */
        sizes: {
            ident: {
                /** */
                identType: "id" | "index" | "codeExtern" | "codeProducer";
                /** @description ID value. */
                identValue: string;
            };
            /** @description Error information. */
            error?: FaultCodeString;
        }[];
        /** @description Flag marking errors in the result. */
        isSizesErrors?: boolean;
        /** @description Error information. */
        error?: FaultCodeString;
    }[];
    /** @description Flag marking errors in the result. */
    isErrors: null | boolean;
};

export type PutProductsSupplierCodeResponse = {
    /** @description Object contains detailed information on result of operation. */
    results: {
        /** @description The list of products returned due to a gate call */
        productsResults: {
            /** @description Product IAI code */
            productId: number;
            /** @description Error code. */
            faultCode: number;
            /** @description Error description. */
            faultString: string;
        }[];
    };
};

export type PutProductsMarketingPromotionResponse = {
    results: {
        /** @description Promotion ID */
        promotionId: number;
        /** @description Promotion name */
        promotionName: string;
    };
};

export type PutProductsSupplierProductDataResponse = {
    /** @description Object contains detailed information on result of operation. */
    results: {
        /** @description The list of products returned due to a gate call */
        productsResults: {
            /** @description Product IAI code */
            productId: number;
            /** @description Size identifier */
            sizeId: string;
            /** @description Supplier ID. */
            delivererId: number;
            /** @example sizeDelivererCode */
            sizeDelivererCode?: string;
            /** @description Error code. */
            faultCode: number;
            /** @description Error description. */
            faultString: string;
        }[];
    };
};

export { };