import type { PagableGateway, AppendableGateway, Gateway, DateLike, JSObject } from "./app.d.ts";

export type PostOrdersParams = {
    /** @description Orders. */
    orders: {
        /** @description Order type. Allowed values. "retail" - retail order, "wholesale" - wholesale order (can be added only by customer with wholesale account registered). Default value:: "retail" */
        orderType?: string;
        /** @description Shop Id */
        shopId?: number;
        /** @description Stock ID */
        stockId: number;
        /** @description Order payment method. Allowed values. "cash_on_delivery" - cash on delivery, "prepaid" - prepayment, "tradecredit" - Trade credit. */
        orderPaymentType: "cash_on_delivery" | "prepaid" | "tradecredit";
        /** @description Currency ID */
        currencyId: string;
        /** @description Determines if customer unregistered. Allowed values. "y" - casual client, "n" - registered customer. Default value:: "y". If customer is unregistered, enter customer details in element: "clientWithoutAccountData". For client with account - existing login should be stored in: "clientLogin". */
        clientWithoutAccount: string;
        /** @description Balance data for casual client. Object is necessary for casual clients (in case of client_once has y value). */
        clientWithoutAccountData?: {
            /** @description Customer's first name. */
            clientFirstName?: string;
            /** @description Customer's last name. */
            clientLastName?: string;
            /** @description Customer's company name. */
            clientFirm?: string;
            /** @description Customer Tax no. */
            clientNip?: string;
            /** @description Street and number. */
            clientStreet?: string;
            /** @description Customer's postal code. */
            clientZipCode?: string;
            /** @description Customer's city. */
            clientCity?: string;
            /** @description Customer's country. */
            clientCountry?: string;
            /** @description E-mail address. */
            clientEmail?: string;
            /** @description Cell phone. */
            clientPhone1?: string;
            /** @description Land line. */
            clientPhone2?: string;
            /** @description Language ID */
            langId?: string;
        };
        /** @description Customer's login. */
        clientLogin?: string;
        /** @description Customer comments on order. */
        clientNoteToOrder?: string;
        /** @description Customer remarks for courier. */
        clientNoteToCourier?: string;
        /** @description ID of a partner who acquired a given customer. */
        affiliateId?: number;
        /** @description Courier ID. */
        courierId: number;
        /** @description Collection point ID. */
        pickupPointId?: string;
        /** @description Delivery cost. */
        deliveryCost?: number;
        /** @description Delivery address data. */
        clientDeliveryAddress?: {
            /** @description Recipient's first name. */
            clientDeliveryAddressFirstName?: string;
            /** @description Recipient's last name. */
            clientDeliveryAddressLastName?: string;
            /** @description Additional information. */
            clientDeliveryAddressAdditional?: string;
            /** @description Recipient street and number. */
            clientDeliveryAddressStreet?: string;
            /** @description Recipient's postal code. */
            clientDeliveryAddressZipCode?: string;
            /** @description Recipient's city. */
            clientDeliveryAddressCity?: string;
            /** @description Recipient's country. */
            clientDeliveryAddressCountry?: string;
            /** @description Consignee's phone number. */
            clientDeliveryAddressPhone?: string;
        };
        /** @description Buyer's address data. */
        payerAddress?: {
            /** @description Buyer's address id. */
            payerAddressId?: number;
            /** @description Buyer's first name. */
            payerAddressFirstName?: string;
            /** @description Buyer's last name. */
            payerAddressLastName?: string;
            /** @description Company name. */
            payerAddressFirm?: string;
            /** @description Customer VAT ID. */
            payerAddressNip?: string;
            /** @description Buyer's street name and house number. */
            payerAddressStreet?: string;
            /** @description Buyer's postal code. */
            payerAddressZipCode?: string;
            /** @description Buyer's city. */
            payerAddressCity?: string;
            /** @description Country code in the ISO 3166-1 A2 standard. */
            payerAddressCountryId?: string;
            /** @description Buyer's telephone number. */
            payerAddressPhone?: string;
        };
        /** @description Products list. */
        products: {
            /** @description Product IAI code */
            productId: number;
            /** @description Size identifier */
            sizeId: string;
            /** @description External product system code for size. */
            productSizeCodeExternal?: string;
            /** @description Stock ID */
            stockId?: number;
            /** @description Product quantity. */
            productQuantity: number;
            /** @description Gross price */
            productRetailPrice?: number;
            /** @description Free product. */
            productFree?: boolean;
            /** */
            forceLoyaltyPoints?: number;
            /** @description Value of VAT */
            productVat?: number;
            /** @description Is product VAT free Allowed values "y" - yes, "n" - no. */
            productVatFree?: string;
            /** @description Information on used discount code. */
            discountCode?: {
                /** @description Name. */
                name?: string;
            };
            /** @description Client's remarks on product. */
            remarksToProduct?: string;
            /** @description Label for grouping products. */
            label?: string;
            /** @description List of components if a products is a set or collection. */
            productBundleItems?: {
                /** @description Product IAI code */
                productId?: number;
                /** @description Size identifier */
                sizeId?: string;
                /** @description Size name */
                sizePanelName?: string;
                /** @description One of the unique, indexed product codes (IAI code / External system code / Producer code) */
                productIndex?: string;
            }[];
        }[];
        /** @description Discount value. */
        orderRebateValue?: number;
        /** @description Order handler. */
        orderOperatorLogin?: string;
        /** @description Omits collecting orders via IAI Bridge. */
        ignoreBridge?: boolean;
        /** @description Settings */
        settings?: {
            /** @description Send an email with order placement confirmation. */
            settingSendMail?: boolean;
            /** @description Send a text message with order placement confirmation. */
            settingSendSMS?: boolean;
        };
        /** @description Settlement by prices. "gross" - gross, "net" - net, "net_without_VAT" - net without VAT. */
        orderSettledAtPrice?: "gross" | "net" | "net_without_VAT";
        /** @description Customer asked for invoice. List of parameters: "y" - yes (paper invoicing ), "e" - yes (electronic invoicing ), "n" - no. */
        clientRequestInvoice?: string;
        /** @description Order settlement currency. */
        billingCurrency?: string;
        /** @description Panel billing currency exchange rate in relation to billing currency in the shop . */
        billingCurrencyRate?: number;
        /** @description Sale date. ISO 8602 format. */
        purchaseDate?: string;
    }[];
};

export type PostProductsParams = {
    /** @description Settings */
    settings?: {
        /** @description Price format. Parameter is currently unused. */
        settingPriceFormat?: string;
        /** @description Object determines if new categories can be added when category linked with product couldn't be found in system. Allowed values "n" - adding new categories not allowed (default value), "y" - adding new categories is possible. */
        settingAddingCategoryAllowed?: string;
        /** @description Object determines if new product sizes can be added when size linked with product couldn't be found in system. Allowed values "n" - adding new sizes not allowed (default value), "y" - adding new sizes is possible. */
        settingAddingSizeAllowed?: string;
        /** @description Object determines if new producers can be added when producer linked with product couldn't be found in system. Allowed values "n" - you have no rights to add new manufacturers (default value), "y" - adding new producer is possible. */
        settingAddingProducerAllowed?: string;
        /** @description Object determines if new product series can be added when series linked with product couldn't be found in system. Allowed values "n" - you have no rights to add new product series (default value), "y" - adding new series is possible. */
        settingAddingSeriesAllowed?: string;
        /** @description Object determines default category which will be linked with product when it will not be linked with any category.. */
        settingDefaultCategory?: {
            /** @description Category id */
            categoryId?: number;
            /** @description Category name */
            categoryName?: string;
        };
        /** @description Element specifying the default size group that will be assigned to the new product in case no size group has been explicitly assigned. */
        settingDefaultSizesGroup?: {
            /** @description Size group ID Change of one size group to another results in zeroing all stock quantities in all stocks. Change of size group can be made, if product is not present in any unhandled orders nor listed on auctions. */
            sizesGroupId?: number;
            /** @description Size group name. */
            sizesGroupName?: string;
        };
        /** @description The item shall determine whether the default visibility in stores can be set if a new commodity is to be created and no parameters have been uploaded to set visibility in at least one store.. */
        settingsAddingDefaultShopMaskAllowed?: "n" | "y";
        /** @description Element specifying whether the default visibility in stores can be set according to the list of stores indicated in the web import source configuration, if a new product will be created and no parameters have been sent to set visibility in at least one store.. */
        settingsAddingManuallySelectedShopMaskAllowed?: number;
    };
    /** @description Icon and photos settings */
    picturesSettings?: {
        /** @description Object determines photo URL. */
        picturesSettingInitialUrlPart?: string;
        /** @description Object determines the method of adding photos in "pictures" object. Allowed values "base64" - photos added in base64 coding algorithm, "url" - photos added as URLs to external systems. */
        picturesSettingInputType?: string;
        /** @description Object determines the method of adding product photos. Allowed values "n" - photos are uploaded from the first free place, "y" - photos are uploaded from the first place. */
        picturesSettingOverwrite?: string;
        /** @description Object determines if the photo should be scaled. Allowed values "n" - no scaling allowance, "y" - scaling allowance. */
        picturesSettingScaling?: string;
    };
    /** @description Products list. */
    products: {
        /** @description Product IAI code */
        productId?: number;
        /** @description External product system code for size. */
        productSizeCodeExternal?: string;
        /** @description External product system code. */
        productDisplayedCode?: string;
        /** @description PKWiU [PCPandS]. */
        productTaxCode?: string;
        /** @description Number of items in package data */
        productInWrapper?: number;
        /** @description Sold at - for retailers. */
        productSellByRetail?: number;
        /** @description Sold at - for wholesalers. */
        productSellByWholesale?: number;
        /** @description IdoSell Category ID */
        categoryIdoSellId?: number;
        /** @description IdoSell Category pathname */
        categoryIdoSellPath?: string;
        /** @description Category id */
        categoryId?: number;
        /** @description Category name */
        categoryName?: string;
        /** @description Brand ID */
        producerId?: number;
        /** @description Brand name */
        producerName?: string;
        /** @description CN/TARIC */
        cnTaricCode?: string;
        /** @description Country of origin. Country code in the ISO 3166-1 A2 standard */
        countryOfOrigin?: string;
        /** @description Product unit of measure ID. */
        unitId?: number;
        /** @description ID of series, to which product belongs. */
        seriesId?: number;
        /** @description Name of series, to which the product belongs, visible in panel. */
        seriesPanelName?: string;
        /** @description Size group ID Change of one size group to another results in zeroing all stock quantities in all stocks. Change of size group can be made, if product is not present in any unhandled orders nor listed on auctions. */
        sizesGroupId?: number;
        /** @description Optional element, that determines prices edition mode. Default value is "amount_set", when indicated element is omitted in API gate call.. Allowed values "amount_set" - sets product prices to desired value (default mode), "amount_diff" - sets sum difference between prices set (adds or subtracts entered sum from the current price), "percent_diff" - sets percentage difference between prices set (adds or subtracts entered percent from the current price). */
        priceChangeMode?: string;
        /** @description The JavaScript formula calculating prices */
        priceFormula?: {
            /** @description Formula parameters for calculating price */
            priceFormulaParameters?: string;
            /** @description Formula function for calculating price */
            priceFormulaFunction?: string;
        };
        /** @description Gross price */
        productRetailPrice?: number;
        /** @description Wholesale price */
        productWholesalePrice?: number;
        /** @description Minimal price */
        productMinimalPrice?: number;
        /** @description Price for automatic calculations */
        productAutomaticCalculationPrice?: number;
        /** @description price for POS. */
        productPosPrice?: number;
        /** @description Value of VAT */
        productVat?: number;
        /** @description Is product VAT free Allowed values "y" - yes, "n" - no. */
        productVatFree?: string;
        /** @description Different prices for price comparison websites. */
        productPriceComparisonSitesPrices?: {
            /** @description price comparison website ID */
            priceComparisonSiteId?: number;
            /** @description Price for a price comparison website in a shop */
            productPriceComparisonSitePrice?: number;
        }[];
        /** @description Object determines if the product is available in POS sale Available values: "n" - no, "y" - yes. */
        productEnableInPos?: string;
        /** @description Required advance payment in percents */
        productAdvancePrice?: number;
        /** @description Annotation. */
        productNote?: string;
        /** @description Product value in points. */
        productProfitPoints?: number;
        /** @description Weight. */
        productWeight?: number;
        /** @description Product visibility. Allowed values "y" - product visible, "n" - product not visible. */
        productInVisible?: string;
        /** @description Product visible even though out of stock Available values: "y" - visible even though out of stock, "n" - not visible when out of stock. */
        productInPersistent?: string;
        /** @description Bit mask of shop IDs. Mask for indicated store is calculated on basis of following formula: 2^(store_ID - 1). If the product should be available in more than one shop, the masks should be summed up. */
        shopsMask: number;
        /** @description Complex rating Available values: "0" - no, "1" - yes. */
        productComplexNotes?: number;
        /** @description Product visibility in export to price comparison and marketplaces. Available values: "y" - Visible, "selected" - yes (selected), "n" - invisible. */
        productInExportToPriceComparisonSites?: string;
        /** @description Selection of comparison sites for which the product visibility will be changed */
        priceComparisonSites?: {
            /** @description Shop Id */
            shopId?: number;
            /** @description price comparison website ID */
            priceComparisonSiteId?: number;
        }[];
        /** @description Visibility of an item in an export to Amazon Marketplace. Available values: "y" - Visible, "selected" - Visible on selected regional services, "n" - invisible. */
        productInExportToAmazonMarketplace?: string;
        /** @description Availability profile ID. */
        availableProfile?: number;
        /** @description Discount profile ID */
        productRebate?: number;
        /** @description Product warranty ID. */
        warrantyId?: number;
        /** @description Priority. Allowed values from 1 to 10. */
        productPriority?: number;
        /** @description Product icon details. */
        productIcon?: string;
        /** @description Watermark ID */
        productWatermarkId?: number;
        /** @description Link to watermark */
        productWatermarkUrl?: string;
        /** @description List of product photos */
        productPictures?: string[];
        /** @description List of photos descriptions */
        productDescriptionPictures?: string[];
        /** @description Reduced price */
        productPromotion?: {
            /** @description Object determines if the promotion should be active.. Allowed values "y" - active promotion, "n" - inactive promotion. */
            promoteInEnabled?: string;
            /** @description Strikethrough price */
            promoteItemNormalPrice?: number;
            /** @description Strikethrough wholesale price */
            promoteItemWholesaleNormalPrice?: number;
            /** @description Switching off date */
            promoteItemEndingDate?: string;
        };
        /** @description Discount for shop. */
        productDiscount?: {
            /** @description Object determines if the promotion should be active.. Allowed values "y" - active promotion, "n" - inactive promotion. */
            promoteInEnabled?: string;
            /** @description Strikethrough price */
            promoteItemNormalPrice?: number;
            /** @description Strikethrough wholesale price */
            promoteItemWholesaleNormalPrice?: number;
            /** @description Switching off date */
            promoteItemEndingDate?: string;
        };
        /** @description Distinguished product in store. */
        productDistinguished?: {
            /** @description Object determines if the promotion should be active.. Allowed values "y" - active promotion, "n" - inactive promotion. */
            promoteInEnabled?: string;
            /** @description Strikethrough price */
            promoteItemNormalPrice?: number;
            /** @description Strikethrough wholesale price */
            promoteItemWholesaleNormalPrice?: number;
            /** @description Switching off date */
            promoteItemEndingDate?: string;
        };
        /** @description Special product in store. */
        productSpecial?: {
            /** @description Object determines if the promotion should be active.. Allowed values "y" - active promotion, "n" - inactive promotion. */
            promoteInEnabled?: string;
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
            parameterId?: number;
            /** @description Parameter name. */
            parameterName?: string;
            /** @description Parameter value ID */
            parameterValueId?: number;
            /** @description Attributes group name. */
            parameterValueName?: string;
        }[];
        /** @description List of products recommended with this product */
        associatedProducts?: {
            /** @description Recommended product ID */
            associatedProductId?: number;
            /** @description Recommended product name */
            associatedProductName?: string;
            /** @description Recommended product code. External system code. */
            associatedProductCode?: string;
        }[];
        /** @description Sizes available for products data. */
        productSizes?: {
            /** @description Size identifier */
            sizeId?: string;
            /** @description Size name */
            sizePanelName?: string;
            /** @description Weight. */
            productWeight?: number;
            /** @description Net weight. */
            productWeightNet?: number;
            /** @description Gross price */
            productRetailPrice?: number;
            /** @description Wholesale price */
            productWholesalePrice?: number;
            /** @description Minimal price */
            productMinimalPrice?: number;
            /** @description Price for automatic calculations */
            productAutomaticCalculationPrice?: number;
            /** @description price for POS. */
            productPosPrice?: number;
            /** @description Prices for marketplaces */
            productAuctionPrices?: {
                /** @description Auction system ID */
                productAuctionId?: number;
                /** @description Auction site ID */
                productAuctionSiteId?: number;
                /** @description Price for auction site */
                productAuctionPrice?: number;
            }[];
            /** @description External product system code */
            productCode?: string;
            /** @description Product visible even though out of stock Available values: "y" - visible even though out of stock, "n" - not visible when out of stock. */
            productInPersistent?: string;
            /** @description Product stock quantity data. */
            productStocksData?: {
                /** @description Object contains information on product quantity */
                productStockQuantities?: {
                    /** @description Stock ID */
                    stockId?: number;
                    /** Format: decimal
                     * @description Product stock quantity */
                    productSizeQuantity?: number;
                    /** Format: decimal
                     * @description Product quantity to add up */
                    productSizeQuantityToAdd?: number;
                    /** Format: decimal
                     * @description Product quantity to subtract */
                    productSizeQuantityToSubstract?: number;
                }[];
            };
            /** @description Object contains information dependent on shop and size. */
            shopsSizeAttributes?: {
                /** @description Shop Id */
                shopId?: number;
                /** @description Gross price */
                productRetailPrice?: number;
                /** @description Wholesale price */
                productWholesalePrice?: number;
                /** @description Minimal price */
                productMinimalPrice?: number;
                /** @description Price for automatic calculations */
                productAutomaticCalculationPrice?: number;
            }[];
        }[];
        /** @description Data concerning attributes dependent on indicated stores with particular product assigned. */
        productShopsAttributes?: {
            /** @description Shop Id */
            shopId?: number;
            /** @description Information about prices for price comparison websites dependent on a shop */
            productShopPriceComparisonSitesPrices?: {
                /** @description price comparison website ID */
                priceComparisonSiteId?: number;
                /** @description Percentage difference between the price comparison website and the shop */
                productPriceComparisonSitePercentDiff?: number;
            }[];
        }[];
        /** @description Products subscription settings. */
        subscription?: {
            /** @description Shop Id */
            shopId?: number;
            /** @description Is subscription enabled for product */
            enabled?: boolean;
            /** @description Days in period */
            daysInPeriod?: number[];
            /** @description Sold at - for retailers. */
            unitsNumberRetail?: number;
            /** @description Sold at - for wholesalers. */
            unitsNumberWholesale?: number;
        }[];
        /** @description Product name. */
        productNames?: {
            productNamesLangData?: {
                /** @description Language ID */
                langId?: string;
                /** @description Product name. */
                productName?: string;
            }[];
        };
        productDescriptions?: {
            /** @description Array of language-dependent elements. */
            productDescriptionsLangData?: {
                /** @description Language ID */
                langId?: string;
                /** @description Short product description. */
                productDescription?: string;
            }[];
        };
        /** @description Long product description */
        productLongDescriptions?: {
            productLongDescriptionsLangData?: {
                /** @description Language ID */
                langId?: string;
                /** @description Long product description. */
                productLongDescription?: string;
            }[];
        };
        /** @description Product data for auction services */
        productAuctionDescriptionsData?: {
            /** @description Auction system ID */
            productAuctionId?: string;
            /** @description Auction site ID */
            productAuctionSiteId?: string;
            /** @description Product name for auction service. */
            productAuctionName?: string;
            /** @description Subtitle for auction service */
            productAuctionAdditionalName?: string;
            /** @description Product description for marketplaces */
            productAuctionDescription?: string;
        }[];
        /** @description Product meta title */
        productMetaTitles?: {
            productMetaTitlesLangData?: {
                /** @description Language ID */
                langId?: string;
                /** @description Language name */
                langName?: string;
                /** @description Product meta title. */
                productMetaTitle?: string;
            }[];
        };
        /** @description Product meta description */
        productMetaDescriptions?: {
            productMetaDescriptionsLangData?: {
                /** @description Language ID */
                langId?: string;
                /** @description Language name */
                langName?: string;
                /** @description Product meta description. */
                productMetaDescription?: string;
            }[];
        };
        /** @description Product meta keywords. */
        productMetaKeywords?: {
            productMetaKeywordsLangData?: {
                /** @description Language ID */
                langId?: string;
                /** @description Language name */
                langName?: string;
                /** @description Product meta keywords. */
                productMetaKeyword?: string;
            }[];
        };
        /** @description #!AdresURLDlaTowaru!#. */
        productUrl?: {
            productUrlsLangData?: {
                /** @description Shop Id */
                shopId?: number;
                /** @description Language ID */
                langId?: string;
                /** @example url */
                url?: string;
            }[];
        };
        /** @description Data on product groups (variants) */
        productVersion?: {
            /** @description ID of the main item (variant) in the group */
            versionParentId?: number;
            /** @description The order of products in the group. Value needs to be more than 0. */
            versionPriority?: number;
            /** @description Settings for groups of items (variants) */
            versionSettings?: {
                /** @description Show in shop. Available values: "y" - all products from group, "n" - only the first product from group. */
                versionDisplayAllInShop?: string;
                /** @description The same code. Available values: "y" - yes, "n" - no. */
                versionCommonCode?: string;
                /** @description The same brand. Available values: "y" - yes, "n" - no. */
                versionCommonProducer?: string;
                /** @description The same annotation. Available values: "y" - yes, "n" - no. */
                versionCommonNote?: string;
                /** @description The same warranty. Available values: "y" - yes, "n" - no. */
                versionCommonWarranty?: string;
                /** @description The same series. Available values: "y" - yes, "n" - no. */
                versionCommonSeries?: string;
                /** @description The same category. Available values: "y" - yes, "n" - no. */
                versionCommonCategory?: string;
                /** @description The same price. Available values: "y" - yes, "n" - no. */
                versionCommonPrice?: string;
                /** @description Same price for auction services. possible values "y" - yes, "n" - no. */
                versionCommonAuctionsPrice?: string;
                /** @description Same advance. Available values: "y" - yes, "n" - no. */
                versionCommonAdvance?: string;
                /** @description Same quantity discount. Available values: "y" - yes, "n" - no. */
                versionCommonRebate?: string;
                /** @description the same VAT rate. Available values: "y" - yes, "n" - no. */
                versionCommonVat?: string;
                /** @description The same loyalty points. Available values: "y" - yes, "n" - no. */
                versionCommonProfitPoints?: string;
                /** @description The same promotion. Available values: "y" - yes, "n" - no. */
                versionCommonPromotion?: string;
                /** @description The same loyalty discount. Available values: "y" - yes, "n" - no. */
                versionCommonDiscount?: string;
                /** @description The same privileged products. Available values: "y" - yes, "n" - no. */
                versionCommonDistinguished?: string;
                /** @description The same for special. Available values: "y" - yes, "n" - no. */
                versionCommonSpecial?: string;
                /** @description DEPRECATED */
                versionCommonTraits?: string;
                /** @description The same related product. Available values: "y" - yes, "n" - no. */
                versionCommonAssociated?: string;
                /** @description The same visibility. Available values: "y" - yes, "n" - no. */
                versionCommonVisibility?: string;
                /** @description Same display when not in stock. Available values: "y" - yes, "n" - no. */
                versionCommonPersistent?: string;
                /** @description The same priority. Available values: "y" - yes, "n" - no. */
                versionCommonPriority?: string;
                /** @description The same shops. Available values: "y" - yes, "n" - no. */
                versionCommonShops?: string;
                /** @description The same sizes. Available values: "y" - yes, "n" - no. */
                versionCommonSizes?: string;
                /** @description The same unit of measure. Available values: "y" - yes, "n" - no. */
                versionCommonUnit?: string;
                /** @description The same weight. Available values: "y" - yes, "n" - no. */
                versionCommonWeight?: string;
                /** @description The same parameters. possible values "y" - yes, "n" - no. */
                versionCommonDictionary?: string;
                /** @description The same name. Available values: "y" - yes, "n" - no. */
                versionCommonName?: string;
                /** @description The same short description. Available values: "y" - yes, "n" - no. */
                versionCommonDescription?: string;
                /** @description The same long description. Available values: "y" - yes, "n" - no. */
                versionCommonLongDescription?: string;
                /** @description The same icon. Available values: "y" - yes, "n" - no. */
                versionCommonIcon?: string;
                /** @description The same large photos. Available values: "y" - yes, "n" - no. */
                versionCommonPhotos?: string;
                /** @description The same availability profile. Available values: "y" - yes, "n" - no. */
                versionCommonAvailableProfile?: string;
                /** @description The same complex rating. Available values: "y" - yes, "n" - no. */
                versionCommonComplexNotes?: string;
                /** @description Do You wish to sum up the products in the basket as a one order? Available values: "y" - yes, "n" - no. */
                versionCommonSumInBasket?: string;
            };
            /** @description Parameter value names */
            versionNames?: {
                /** @description Array of languages, values are displayed in. */
                versionNamesLangData?: {
                    /** @description Language ID */
                    langId?: string;
                    /** @description Name of the parameter value, e.g. orange, green, red */
                    versionName?: string;
                }[];
            };
            /** @description Parameter names */
            versionGroupNames?: {
                /** @description Parameter name */
                versionGroupNamesLangData?: {
                    /** @description Language ID */
                    langId?: string;
                    /** @description Parameter name, e.g. color, width */
                    versionGroupName?: string;
                }[];
            };
        };
        /** @description Currency ID */
        currencyId?: string;
        /** @description Supplier ID. */
        delivererId?: number;
        /** @description This parameter is optional and it determines properties edition mode. Default value is "replace". Allowed values: "add" - adds properties to already existent ones, "delete" - removes properties of already existent ones, "delete_group" - removes properties from selected group, "replace" - overwrites properties already existent with new ones (default mode). */
        productParametersDistinctionChangeMode?: "add" | "delete" | "delete_group" | "replace";
        /** @description Product delivery time from the producer to the shop */
        productDeliveryTime?: {
            /** @description Operation type: "product" - sets own product delivery time, "deliverer" - sets product delivery time exactly the same as deliverer's. */
            productDeliveryTimeChangeMode?: "product" | "deliverer";
            /** @description The amount of time it takes to get goods from the supplier to the store. The maximum time is 99 for the unit "days" or 999 for the unit "hours" and "minutes" */
            productDeliveryTimeValue?: number;
        };
        /** @description Do You wish to sum up the products in the basket as a one order? Available values: "y" - yes, "n" - no. */
        productSumInBasket?: string;
        /** @description Shipping, returns and complaints settings */
        dispatchSettings?: {
            enabled?: boolean;
            /** @description Shipping settings */
            shippingSettings?: {
                /** @description Disable cash on delivery orders */
                codDisabled?: boolean;
                /** @description Only personal collection */
                dvpOnly?: boolean;
                /** @description Oversized product */
                atypicalSize?: boolean;
                /** @description Insurance required */
                insuranceOnly?: boolean;
                /** @description Exclusion from the Smile service */
                excludeSmileService?: boolean;
                /** @description List of courier services which cannot be used to ship this product */
                disallowedCouriers?: number[];
            };
            /** @description Free shipping settings */
            freeShippingSettings?: {
                /** @description Edition mode */
                mode?: "no" | "onlyProduct" | "wholeBasket";
                /** @description Set free shipping for the payment method only . */
                availablePaymentForms?: {
                    /** @description prepayment */
                    prepaid?: boolean;
                    /** @description Cash on delivery */
                    cashOnDelivery?: boolean;
                    /** @description Trade credit */
                    tradeCredit?: boolean;
                };
                /** @description List of courier services for which shipping is free */
                availableCouriers?: number[];
                /** @description List of regions with free shipment */
                availableRegions?: number[];
            };
            /** @description Return and complaint settings */
            returnProductSettings?: {
                /** @description Product can be returned */
                returnOptions?: {
                    enabled?: boolean;
                    /** @description yes - for companies */
                    firm?: boolean;
                    /** @description yes - for wholesalers */
                    hurt?: boolean;
                    /** @description yes - for retailers */
                    detalist?: boolean;
                };
                byOwnService?: boolean;
                byInPostSzybkieZwrotyByIAI?: boolean;
            };
        };
        /** @description Standard unit settings */
        standardUnit?: {
            /** @description Possible special contexts corresponding to standard units. Available values: "CONTEXT_STD_UNIT_WEIGHT" - #!WagaTowaruWGramach!#, "CONTEXT_STD_UNIT_WEIGHT_SI" - Product weight in kilograms, "CONTEXT_STD_UNIT_VOLUME" - A product's value in milliliters "CONTEXT_STD_UNIT_VOLUME_SI" - A product's value in liters "CONTEXT_STD_UNIT_LENGTH" - Length of product in meters "CONTEXT_STD_UNIT_AREA_M2" - Area of ​​product in square meters "CONTEXT_STD_UNIT_VOLUME_M3" - The volume of products in cubic meters "CONTEXT_STD_UNIT_QUANTITY_PACKAGE" - Number of pieces per pack for standard unit */
            contextValue?: "CONTEXT_STD_UNIT_WEIGHT" | "CONTEXT_STD_UNIT_WEIGHT_SI" | "CONTEXT_STD_UNIT_VOLUME" | "CONTEXT_STD_UNIT_VOLUME_SI" | "CONTEXT_STD_UNIT_LENGTH" | "CONTEXT_STD_UNIT_AREA_M2" | "CONTEXT_STD_UNIT_VOLUME_M3" | "CONTEXT_STD_UNIT_QUANTITY_PACKAGE";
            /** @description Total length/volume/area/weight of product */
            standardUnitValue?: number;
            /** @description Price converter per unit. Available values: "0" - default (taken from the category), "1" - price per gram/milliliter/meter "10" - price per 10 grams/10 milliliters/10 meters "100" - price per 100 grams/100 milliliters/100 meters "1000" - price per liter/kilogram/kilometer */
            converterUnitValue?: "0" | "1" | "10" | "100" | "1000";
        };
        /** @description Minimal number of products in an order */
        minQuantityPerOrder?: {
            /** @description Minimum number of products in a retail order */
            minQuantityPerOrderRetail?: number;
            /** @description Minimum number of products in a wholesale order */
            minQuantityPerOrderWholesale?: number;
        };
        /** @description Dimensions and overall weight */
        productDimensions?: {
            /** @description The width of a product in centimeters */
            productWidth?: number;
            /** @description Height of a product in centimeters */
            productHeight?: number;
            /** @description The length of a product in centimeters */
            productLength?: number;
        };
        /** @description Responsible producer code */
        responsibleProducerCode?: string;
        /** @description Responsible person code */
        responsiblePersonCode?: string;
    }[];
};

export type PutProductsParams = {
    /** @description Settings */
    settings?: {
        /** @description Object determines the products modification mode. Allowed values: "all" - (default value). - allows adding new products. If the product of entered ID or external product system code cannot be found in system, the product will be added as a new one., "edit" - doesn't allow adding new products. In this mode only editing the already existing products is possible. If the product of entered ID or external product system code cannot be found in shop, gate will return error and the product will not be added to shop. "add" - In this mode you can only add products. */
        settingModificationType?: "all" | "edit" | "add";
        /** @description Price format. Parameter is currently unused. */
        settingPriceFormat?: string;
        /** @description Element defining the way of calculating product base price basing on prices of sizes. If value is not provided, the base price will be calculated basing on prices of sizes with stock levels. In case of lack of the stock levels, the base price will be calculated basing on prices of all sizes. Allowed values "all" - Product price calculated basing on prices of all sizes "available" - Product price calculated basing on prices of sizes with stock levels */
        settingCalculateBasePriceSizes?: "all" | "available";
        /** @description Object determines if new categories can be added when category linked with product couldn't be found in system. Allowed values "n" - adding new categories not allowed (default value), "y" - adding new categories is possible. */
        settingAddingCategoryAllowed?: "n" | "y";
        /** @description Object determines if new product sizes can be added when size linked with product couldn't be found in system. Allowed values "n" - adding new sizes not allowed (default value), "y" - adding new sizes is possible. */
        settingAddingSizeAllowed?: "n" | "y";
        /** @description Object determines if new producers can be added when producer linked with product couldn't be found in system. Allowed values "n" - you have no rights to add new manufacturers (default value), "y" - adding new producer is possible. */
        settingAddingProducerAllowed?: "n" | "y";
        /** @description Object determines if new product series can be added when series linked with product couldn't be found in system. Allowed values "n" - you have no rights to add new product series (default value), "y" - adding new series is possible. */
        settingAddingSeriesAllowed?: "n" | "y";
        /** @description Element determines, whether new size charts can be added, when no size chart assigned to sizes is not found in the system. Allowed values: "n" - adding new size charts not allowed. (default value), "y" - adding new size charts allowed. */
        settingAddingSizeschartAllowed?: "n" | "y";
        /** @description Object determines default category which will be linked with product when it will not be linked with any category.. */
        settingDefaultCategory?: {
            /** @description Category id */
            categoryId?: number;
            /** @description Category name */
            categoryName?: string;
        };
        /** @description Element specifying the default size group that will be assigned to the new product in case no size group has been explicitly assigned. */
        settingDefaultSizesGroup?: {
            /** @description Size group ID Change of one size group to another results in zeroing all stock quantities in all stocks. Change of size group can be made, if product is not present in any unhandled orders nor listed on auctions. */
            sizesGroupId?: number;
            /** @description Size group name. */
            sizesGroupName?: string;
        };
        /** @description Delimiter separating elements of text ID. Default:. "\". */
        settingTextIdSeparator?: string;
        /** @description Element indicating if retail price in special offer should be ignored. */
        settingIgnoreRetailPricesInCaseOfPromotion?: "n" | "y";
        /** @description Element indicating if information about special offer should be retrieved. */
        returnPromotionStatus?: "n" | "y";
        /** @description Element specifying whether the item is to be restored after deletion. */
        settingsRestoreDeletedProducts?: "n" | "y";
        /** @description The item shall determine whether the default visibility in stores can be set if a new commodity is to be created and no parameters have been uploaded to set visibility in at least one store.. */
        settingsAddingDefaultShopMaskAllowed?: "n" | "y";
        /** @description Element specifying whether the default visibility in stores can be set according to the list of stores indicated in the web import source configuration, if a new product will be created and no parameters have been sent to set visibility in at least one store.. */
        settingsAddingManuallySelectedShopMaskAllowed?: number;
        /** @description Element specifying whether the system should create a new provider in case of not finding one in the panel. */
        settingAddingSupplierAllowed?: "n" | "y";
        /** @description The element specifies how to update the product supplier Available values: "always" - (default value). - update in any case, "ifNecessary" - update when no supplier is assigned to the product, "none" - supplier update disabled. */
        settingActualizeDelivererMode?: "always" | "ifNecessary" | "none";
        /** @description Element specifying the mask of stores for which individual names and descriptions are to be removed.. */
        settingDeleteIndividualDescriptionsByShopsMask?: {
            /** @description Bit mask of shop IDs. Mask for indicated store is calculated on basis of following formula: 2^(store_ID - 1). If the product should be available in more than one shop, the masks should be summed up. */
            shopsMask?: number;
        };
        /** @description Element that specifies the mask of stores for which individual meta updated products are to be removed.. */
        settingDeleteIndividualMetaByShopsMask?: {
            /** @description Bit mask of shop IDs. Mask for indicated store is calculated on basis of following formula: 2^(store_ID - 1). If the product should be available in more than one shop, the masks should be summed up. */
            shopsMask?: number;
        };
        /** @description Automatically skip adding manufacturer code and external system code in the product when adding goods if a duplicate code is encountered in other products. */
        settingsSkipDuplicatedProducers?: boolean;
    };
    /** @description Icon and photos settings */
    picturesSettings?: {
        /** @description Object determines photo URL. */
        picturesSettingInitialUrlPart?: string;
        /** @description Object determines the method of adding photos in "pictures" object. Allowed values "base64" - photos added in base64 coding algorithm, "url" - photos added as URLs to external systems. */
        picturesSettingInputType?: "base64" | "url";
        /** @description Object determines the method of adding product photos. Allowed values "n" - photos are uploaded from the first free place, "y" - photos are uploaded from the first place. */
        picturesSettingOverwrite?: "n" | "y";
        /** @description Element determining whether or not to delete existing merchandise images. */
        picturesSettingDeleteProductPictures?: "n" | "y";
        /** @description Element determining whether to delete existing commodity icons. */
        picturesSettingDeleteProductIcons?: "n" | "y";
        /** @description Element determining whether to remove the selected icon. */
        picturesSettingDeleteIcon?: "default" | "versions" | "auctions";
        /** @description Element determining whether or not to create icon from the selected photo . */
        picturesSettingCreateIconFromPicture?: "default" | "versions" | "auctions";
        /** @description Element determining whether to restore existing original images. */
        picturesSettingRestoreOriginalPictures?: "n" | "y";
        /** @description Element determining the type of icon whose original is to be restored, if any. */
        picturesSettingRestoreOriginalIcons?: "default" | "versions" | "auctions" | "all";
        /** @description Macro ID to be applied to images on the product. */
        picturesSettingApplyMacroForPictures?: number;
        /** @description Macro for the selected icon. */
        picturesSettingApplyMacroForIcon?: {
            /** @description Icon type. */
            iconType?: "default" | "versions" | "auctions";
            /** @description Macro identifier. */
            macroId?: number;
        };
        /** @description Identifier of the shop for which the action is to be performed. */
        picturesSettingShopId?: string;
        /** @description Identifier of an external service for which the action is to be performed on photos in the goods. */
        picturesSettingServiceId?: number;
        /** @description Object determines if the photo should be scaled. Allowed values "n" - no scaling allowance, "y" - scaling allowance. */
        picturesSettingScaling?: "n" | "y";
        /** @description Element determining whether to delete existing original images. */
        picturesSettingDeleteOriginalPictures?: "n" | "y";
        /** @description Element specifying the type of icon whose original is to be deleted. */
        picturesSettingDeleteOriginalIcons?: "default" | "versions" | "auctions" | "all";
        /** @example picturesSettingRestoreBackupPicturesAndIconsByDateTime */
        picturesSettingRestoreBackupPicturesAndIconsByDateTime?: string;
    };
    /** @description Products list. */
    products: {
        /** @description Product IAI code */
        productId?: number;
        /** @description One of the unique, indexed product codes (IAI code / External system code / Producer code) */
        productIndex?: string;
        /** @description External product system code for size. */
        productSizeCodeExternal?: string;
        /** @description Producer code for size. */
        productSizeCodeProducer?: string;
        /** @description External product system code. */
        productDisplayedCode?: string;
        /** @description PKWiU [PCPandS]. */
        productTaxCode?: string;
        /** @description Number of items in package data */
        productInWrapper?: number;
        /** @description Sold at - for retailers. */
        productSellByRetail?: number;
        /** @description Sold at - for wholesalers. */
        productSellByWholesale?: number;
        /** @description IdoSell Category ID */
        categoryIdoSellId?: number;
        /** @description IdoSell Category pathname */
        categoryIdoSellPath?: string;
        /** @description Category id */
        categoryId?: number;
        /** @description Category name */
        categoryName?: string;
        /** @description Brand ID */
        producerId?: number;
        /** @description Brand name */
        producerName?: string;
        /** @description CN/TARIC */
        cnTaricCode?: string;
        /** @description Country of origin. Country code in the ISO 3166-1 A2 standard */
        countryOfOrigin?: string;
        /** @description Product unit of measure ID. */
        unitId?: number;
        /** @description ID of series, to which product belongs. */
        seriesId?: number;
        /** @description Name of series, to which the product belongs, visible in panel. */
        seriesPanelName?: string;
        /** @description Size group ID Change of one size group to another results in zeroing all stock quantities in all stocks. Change of size group can be made, if product is not present in any unhandled orders nor listed on auctions. */
        sizesGroupId?: number;
        /** @description Size group name. */
        sizesGroupName?: string;
        /** @description Optional element, that determines prices edition mode. Default value is "amount_set", when indicated element is omitted in API gate call.. Allowed values "amount_set" - sets product prices to desired value (default mode), "amount_diff" - sets sum difference between prices set (adds or subtracts entered sum from the current price), "percent_diff" - sets percentage difference between prices set (adds or subtracts entered percent from the current price). */
        priceChangeMode?: string;
        /** @description Gross price */
        productRetailPrice?: number;
        /** @description Net retail price for every shop. */
        productRetailPriceNet?: number;
        /** @description Wholesale price */
        productWholesalePrice?: number;
        /** @description Net wholesale price for every shop. */
        productWholesalePriceNet?: number;
        /** @description Minimal price */
        productMinimalPrice?: number;
        /** @description Net minimum price for every shop. */
        productMinimalPriceNet?: number;
        /** @description Price for automatic calculations */
        productAutomaticCalculationPrice?: number;
        /** @description Price for automatic net calculations for each store */
        productAutomaticCalculationPriceNet?: number;
        /** @description price for POS. */
        productPosPrice?: number;
        /** @description price for POS. */
        productPosPriceNet?: number;
        /** @description Recommended retail price */
        productSuggestedPrice?: number;
        /** @description Suggested net commodity price. */
        productSuggestedPriceNet?: number;
        /** @description Strikethrough gross retail price */
        productStrikethroughRetailPrice?: number;
        /** @description Strikethrough net retail price */
        productStrikethroughRetailPriceNet?: number;
        /** @description Strikethrough gross wholesale price */
        productStrikethroughWholesalePrice?: number;
        /** @description Strikethrough net wholesale price */
        productStrikethroughWholesalePriceNet?: number;
        /** @description Value of VAT */
        productVat?: number;
        /** @description Is product VAT free Allowed values "y" - yes, "n" - no. */
        productVatFree?: string;
        /** @description Different prices for price comparison websites. */
        productPriceComparisonSitesPrices?: {
            /** @description price comparison website ID */
            priceComparisonSiteId?: number;
            /** @description Price for a price comparison website in a shop */
            productPriceComparisonSitePrice?: number;
            /** @description Net price for price comparison service in shop */
            productPriceComparisonSitePriceNet?: number;
        }[];
        /** @description Object determines if the product is available in POS sale Available values: "n" - no, "y" - yes. */
        productEnableInPos?: string;
        /** @description Required advance payment in percents */
        productAdvancePrice?: number;
        /** @description Annotation. */
        productNote?: string;
        /** @description Settings of hotspots display. */
        productHotspotsZones?: {
            /** @description Is attribute set */
            productHotspotIsEnabled?: boolean;
            /** @description Shop Id */
            shopId?: number;
            /** @description Promotion for shop. */
            productIsPromotion?: boolean;
            /** @description Discount for shop. */
            productIsDiscount?: boolean;
            /** @description Distinguished product in store. */
            productIsDistinguished?: boolean;
            /** @description Special product in store. */
            productIsSpecial?: boolean;
        }[];
        /** @description Loyalty points. */
        priceInPoints?: {
            /** @description Element determines what kind of operation should be performed. Allowed values: "clients_cost" - Clients who are allowed to buy selected products for points, "clients_award" - Clients can be awarded with points for buying selected products, "count_cost" - Number of points for which the selected products will be sold, "count_award" - Number of points clients will be rewarded for buying selected products. */
            priceInPointsOperation?: string;
            /** @description Shop Id */
            shopId?: number;
            /** @description Price in points for manual points quantity configuration. Price in points will be calculated on basis of default exchange rates set for indicated store, when this value is 0. */
            priceInPointsPrice?: number;
            /** @description Element determines for which customers prices will be changed. Allowed values: "retailers" - Prices will be changed for retail customers, "wholesalers" - Prices will be changed for wholesale customers, "both" - Prices will be changed for both retail and wholesale customers, "nobody" - This option is available only for setting determining, which customers can buy for points. Using this value turns off possibility of granting points or buying for points for both retail and wholesale customers. */
            priceInPointsClients?: string;
        };
        /** @description Loyalty points. */
        loyaltyPoints?: {
            /** @description Shop Id */
            shopId?: number;
            /** @description Customer type. */
            loyaltyPointsClientsType?: "retailers" | "wholesalers" | "both";
            /** @description Operation. */
            loyaltyPointsOperation?: "disablePoints" | "setDefaults" | "setPoints";
            /** @description Loyalty points type. */
            loyaltyPointsType?: "awardClient" | "chargeClient" | "both";
            /** @description Number of points. */
            numberOfLoyaltyPoints?: number;
        }[];
        /** @description Weight. */
        productWeight?: number;
        /** @description Product visibility. Allowed values "y" - product visible, "n" - product not visible. */
        productInVisible?: string;
        /** @description Bit mask of shop IDs. Mask for indicated store is calculated on basis of following formula: 2^(store_ID - 1). If the product should be available in more than one shop, the masks should be summed up. */
        shopsMask?: number;
        /** @description Complex rating Available values: "0" - no, "1" - yes. */
        productComplexNotes?: number;
        /** @description Product visibility in export to price comparison and marketplaces. Available values: "y" - Visible, "selected" - Selected, "assign_selected" - Enable the visibility of the product in the export to price comparison sites passed in the priceComparisonSites node. Price comparison sites previously assigned to the commodity will be retained, "unassign_selected" - Disable product visibility in exports to price comparison sites passed in the priceComparisonSites node, "n" - invisible. */
        productInExportToPriceComparisonSites?: "y" | "selected" | "n";
        /** @description Selection of comparison sites for which the product visibility will be changed */
        priceComparisonSites?: {
            /** @description Shop Id */
            shopId?: number;
            /** @description price comparison website ID */
            priceComparisonSiteId?: number;
        }[];
        /** @description Visibility of an item in an export to Amazon Marketplace. Available values: "y" - Visible, "selected" - Visible on selected regional services, "n" - invisible. */
        productInExportToAmazonMarketplace?: string;
        /** @description Array */
        exportToAmazonMarketplacesList?: string[];
        /** @description Export sizes to Amazon: Available values: "y" - all, "n" - leave without change. */
        exportToAmazonExportAllSizes?: "n" | "y";
        /** @description Update merchandise inventory, on the Amazon side */
        exportAmazonUpdateStocks?: "n" | "y";
        /** @description Visibility of product during the import to Strefa Marek Allegro. Allowed values: "yes" - product visible in the export to Strefa Marek Allegro, "no" - product invisible in the export to Strefa Marek Allegro. */
        productInExportToStrefaMarekAllegro?: string;
        /** @description Profile ID which should be used when sending products to Strefa Marek Allegro. */
        productInExportToSmaPreset?: number;
        /** @description Availability profile ID. */
        availableProfile?: number;
        /** @description Discount profile ID */
        productRebate?: number;
        /** @description Product warranty ID. */
        warrantyId?: number;
        /** @description Name of warranty for indicated product. */
        warrantyName?: string;
        /** @description The JavaScript formula calculating prices */
        priceFormula?: {
            /** @description Formula parameters for calculating price */
            priceFormulaParameters?: string;
            /** @description Formula function for calculating price */
            priceFormulaFunction?: string;
        };
        /** @description Size chart ID */
        sizeChartId?: number;
        /** @description Size chart name */
        sizeChartName?: string;
        /** @description Priority. Allowed values from 1 to 10. */
        productPriority?: number;
        /** @description Product priority in menu node. */
        productPriorityInMenuNodes?: {
            /** @description Menu element ID. */
            productMenuNodeId?: number;
            /** @description Priority. Allowed values from 1 to 10. */
            productPriority?: number;
            /** @description Shop Id */
            shopId?: number;
            /** @description Tree menu ID. */
            productMenuTreeId?: number;
        }[];
        /** @description Product icon link. */
        productIconLink?: string;
        /** @description Photo without background. */
        productAuctionIconLink?: string;
        /** @description Icon for a product group. */
        productGroupIconLink?: string;
        /** @description List of product photos */
        productPictures?: {
            /** @description A picture in url or base64 (depends on pictures_input_type). */
            productPictureSource?: string;
            /** @description Shop Id */
            shopId?: number;
            /** @description List of stores IDs When mask is determined, this parameter is omitted. */
            shopsIds?: number[];
            /** @description External service identifiers */
            servicesIds?: number[];
        }[];
        /** @description List of a product's photos with indication of a particular number of the photo. */
        productPicturesReplace?: {
            /** @description A product photo's number. */
            productPictureNumber?: number;
            /** @description A picture in url or base64 (depends on pictures_input_type). */
            productPictureSource?: string;
        }[];
        /** @description Reduced price */
        productPromotion?: {
            /** @description Is attribute set */
            promoteIsEnabled?: string;
            /** @description Strikethrough price */
            promoteItemNormalPrice?: number;
            /** @description Net strikethrough price. */
            promoteItemNormalPriceNet?: number;
            /** @description Strikethrough wholesale price */
            promoteItemWholesaleNormalPrice?: number;
            /** @description Net wholesale strikethrough price. */
            promoteItemWholesaleNormalPriceNet?: number;
            /** @description Switching off date */
            promoteItemEndingDate?: string;
        };
        /** @description Discount for shop. */
        productDiscount?: {
            /** @description Is attribute set */
            promoteIsEnabled?: string;
            /** @description Strikethrough price */
            promoteItemNormalPrice?: number;
            /** @description Net strikethrough price. */
            promoteItemNormalPriceNet?: number;
            /** @description Strikethrough wholesale price */
            promoteItemWholesaleNormalPrice?: number;
            /** @description Net wholesale strikethrough price. */
            promoteItemWholesaleNormalPriceNet?: number;
            /** @description Switching off date */
            promoteItemEndingDate?: string;
        };
        /** @description Distinguished product in store. */
        productDistinguished?: {
            /** @description Is attribute set */
            promoteIsEnabled?: string;
            /** @description Strikethrough price */
            promoteItemNormalPrice?: number;
            /** @description Net strikethrough price. */
            promoteItemNormalPriceNet?: number;
            /** @description Strikethrough wholesale price */
            promoteItemWholesaleNormalPrice?: number;
            /** @description Switching off date */
            promoteItemEndingDate?: string;
            /** @description Net wholesale strikethrough price. */
            promoteItemWholesaleNormalPriceNet?: number;
        };
        /** @description Special product in store. */
        productSpecial?: {
            /** @description Is attribute set */
            promoteIsEnabled?: string;
            /** @description Strikethrough price */
            promoteItemNormalPrice?: number;
            /** @description Net strikethrough price. */
            promoteItemNormalPriceNet?: number;
            /** @description Strikethrough wholesale price */
            promoteItemWholesaleNormalPrice?: number;
            /** @description Net wholesale strikethrough price. */
            promoteItemWholesaleNormalPriceNet?: number;
            /** @description Switching off date */
            promoteItemEndingDate?: string;
        };
        /** @description Parameters (distinguished). */
        productParametersDistinction?: {
            /** @description Parameter ID */
            parameterId?: number;
            /** @description Parameter name. */
            parameterName?: string;
            /** @description Parameter value ID */
            parameterValueId?: number;
            /** @description Attributes group name. */
            parameterValueName?: string;
        }[];
        /** @description Configuration parameters */
        parametersConfigurable?: {
            /** @description Parameter ID */
            parameterId?: number;
            /** @description Parameter type. Available values: "disable" - Deletion, "input" - Text field, "radio" - Single-choice field, "checkbox" - Checkbox type multiple choice list, "select" - Drop-down single choice list. */
            priceConfigurableType?: "disable" | "input" | "radio" | "checkbox" | "select";
            /** @description Price modifier value */
            priceModifierValues?: {
                /** @description Parameter ID */
                parameterId?: number;
                /** @example 1 */
                modifierValue?: number;
                /** @description Available values: "amount" - in value, "percent" - percentage */
                modifierType?: "amount" | "percent";
            }[];
        }[];
        /** @description List of products recommended with this product */
        associatedProducts?: {
            /** @description Recommended product ID */
            associatedProductId?: number;
            /** @description Recommended product name */
            associatedProductName?: string;
            /** @description Recommended product code. External system code. */
            associatedProductCode?: string;
        }[];
        /** @description Sizes available for products data. */
        productSizes?: {
            /** @description Size identifier */
            sizeId?: string;
            /** @description Size name */
            sizePanelName?: string;
            /** @description Weight. */
            productWeight?: number;
            /** @description Net weight. */
            productWeightNet?: number;
            /** @description Last gross purchase price */
            productPurchasePriceGrossLast?: number;
            /** @description Last net purchase price */
            productPurchasePriceNetLast?: number;
            /** @description External product system code for size. */
            productSizeCodeExternal?: string;
            /** @description Product stock quantity data. */
            productStocksData?: {
                /** @description Stocks data */
                productStocksQuantities?: {
                    /** @description Stock ID */
                    stockId?: number;
                    /** Format: decimal
                     * @description Product stock quantity */
                    productSizeQuantity?: number;
                    /** Format: decimal
                     * @description Product quantity to add up */
                    productSizeQuantityToAdd?: number;
                    /** Format: decimal
                     * @description Product quantity to subtract */
                    productSizeQuantityToSubstract?: number;
                    /** @description Warehouse location ID */
                    stockLocationId?: number;
                    /** @description Warehouse location full path */
                    stockLocationTextId?: string;
                    /** @description Storage location code */
                    stockLocationCode?: string;
                    /** @description Additional locations */
                    stockAdditionalLocations?: {
                        /** @description Element specifying the modification mode for additional locations. Available values: "add" - assignment of additional product location, "remove" - Remove the assignment of an additional location to the product. */
                        stockAdditionalLocationSettings?: "add" | "remove";
                        /** @description Warehouse location ID */
                        stockAdditionalLocationId?: number;
                        /** @description Warehouse location full path */
                        stockAdditionalLocationTextId?: string;
                        /** @description Storage location code */
                        stockAdditionalLocationCode?: string;
                    }[];
                }[];
            };
            /** @description Producer code for size. */
            productSizeCodeProducer?: string;
            /** @description Supplier code */
            productSizeCodeDeliverer?: string;
        }[];
        /** @description Product attachments list. */
        attachments?: {
            /** @description Attachment file link. */
            attachmentUrl?: string;
            /** @description Attachment name. */
            attachmentName?: {
                /** @description List of languages. */
                attachmentLanguages?: {
                    /** @description Language ID */
                    langId?: string;
                    /** @description Language name */
                    langName?: string;
                    /** @description Literal in selected language. */
                    langValue?: string;
                }[];
            };
            /** @description File type: audio, video, doc, other. */
            attachmentFileType?: "audio" | "video" | "doc" | "other" | "image";
            /** @description Type of customer, attachment should be available for: 'all','ordered','wholesaler','wholesaler_or_ordered','wholesaler_and_ordered'. */
            attachmentEnable?: "all" | "only_logged" | "ordered" | "wholesaler" | "wholesaler_or_orderer" | "wholesaler_and_ordered";
            /** @description Attachment ID. */
            attachmentId?: number;
            /** @description Attachment downloads record. */
            attachmentDownloadLog?: "y" | "n";
            /** @description Attachment file extension. */
            attachmentFileExtension?: string;
            /** @description Attachment number. */
            attachmentPriority?: number;
            /** @description Attachment document types list. */
            documentTypes?: {
                /** @description Document type. */
                documentType?: "energy_label" | "instruction_with_safety_information" | "user_manual" | "installation_instructions" | "product_card" | "guide" | "others";
                /** @description Additional description. */
                description?: string;
            }[];
        }[];
        /** @description The list of attachments to be deleted. */
        removeAttachments?: {
            /** @description Language ID */
            langId?: string;
        }[];
        /** @description Do you want to delete attachments for digital files. */
        virtualAttachmentsToRemove?: boolean;
        /** @description List of product's virtual attachments. */
        virtualAttachments?: {
            /** @description Attachment file link. */
            attachmentUrl?: string;
            /** @description Attachment name. */
            attachmentName?: {
                /** @description List of languages. */
                attachmentLanguages?: {
                    /** @description Language ID */
                    langId?: string;
                    /** @description Language name */
                    langName?: string;
                    /** @description Literal in selected language. */
                    langValue?: string;
                }[];
            };
            /** @description Full version or sample. */
            attachmentType?: "full" | "demo";
            /** @description Number of attachment downloads limit. */
            attachmentLimits?: {
                /** @description Number of downloads limit. */
                arrachmentDownloadsLimit?: number;
                /** @description Number of days file should be available. */
                arrachmentDaysLimit?: number;
            };
            /** @description Attachment ID. */
            attachmentId?: number;
            /** @description Attachment number. */
            attachmentPriority?: number;
        }[];
        /** @description Operation, that will be performed on attachments to product. */
        attachmentOperationValues?: "edit" | "add" | "remove";
        /** @description Data concerning attributes dependent on indicated stores with particular product assigned. */
        productShopsAttributes?: {
            /** @description Product visibility in store. */
            shopInVisible?: "y" | "n";
            /** @description Shop Id */
            shopId?: number;
            /** @description Prices for marketplaces */
            productAuctionsPrices?: {
                /** @description Auction site ID */
                auctionId?: number;
                /** @description Cost price. */
                auctionPrice?: number;
                /** @description Auction site page ID */
                auctionSiteId?: number;
                /** @description Size identifier */
                sizeId?: string;
                /** @description Auction starting price */
                auctionStartPrice?: number;
                /** @description Auction starting price net */
                auctionStartPriceNet?: number;
                /** @description "Buy It Now" price */
                auctionBuyNowPrice?: number;
                /** @description Kup Teraz price net. */
                auctionBuyNowPriceNet?: number;
                /** @description Minimal price */
                auctionMinimalPrice?: number;
                /** @description Minimal net price */
                auctionMinimalPriceNet?: number;
                /** @description Currency ID */
                currencyId?: string;
                /** @description External product system code for size. */
                productSizeCodeExternal?: string;
                /** @description Size name */
                sizePanelName?: string;
            }[];
            shopPriceComparersPrices?: {
                /** @description price comparison website ID */
                priceComparisonSiteId?: number;
                /** @description Price for a price comparison website in a shop */
                productPriceComparisonSitePrice?: number;
                /** @description Net price for price comparison service in shop */
                productPriceComparisonSitePriceNet?: number;
                /** @description Percentage difference between the price comparison website and the shop */
                productPriceComparisonSitePercentDiff?: number;
                /** @description Forced rounding up method. */
                priceRoundMode?: "none" | "00" | "x0" | "99" | "x9";
            }[];
            /** @description Gross price */
            productRetailPrice?: number;
            /** @description Net retail price for every shop. */
            productRetailPriceNet?: number;
            /** @description Wholesale price */
            productWholesalePrice?: number;
            /** @description Net wholesale price for every shop. */
            productWholesalePriceNet?: number;
            /** @description Minimal price */
            productMinimalPrice?: number;
            /** @description Net minimum price for every shop. */
            productMinimalPriceNet?: number;
            /** @description Price settings, possible values: "wholesale_equals_retail" - Wholesale price same as retail price, "wholesale_notequals_retail" - Wholesale price different than retail price, "all_prices_equals_zero" - All prices request a quote by phone, "retail_price_equals_zero" - Retail price on call, "default_prices" - default prices, "retail_equals_suggested" - Retail price is the same as recommended one, "automatically_calculated" - Price calculated automatically. */
            productPricesConfig?: "default_prices" | "wholesale_equals_retail" | "wholesale_notequals_retail" | "all_prices_equals_zero" | "retail_price_equals_zero" | "retail_equals_suggested" | "automatically_calculated" | "sizes_price_as_base_price";
            /** @description Recommended retail price */
            productSuggestedPrice?: number;
            /** @description Suggested net commodity price. */
            productSuggestedPriceNet?: number;
            /** @description Strikethrough gross retail price */
            productStrikethroughRetailPrice?: number;
            /** @description Strikethrough net retail price */
            productStrikethroughRetailPriceNet?: number;
            /** @description Strikethrough gross wholesale price */
            productStrikethroughWholesalePrice?: number;
            /** @description Strikethrough net wholesale price */
            productStrikethroughWholesalePriceNet?: number;
            /** @description Configuration details for setting of parameter  prices_config=default_prices. */
            productConfigPricesDefaultShop?: number;
            /** @description Forced rounding up method. */
            priceRoundMode?: "none" | "00" | "x0" | "99" | "x9";
            /** @description Configuration details for setting of parameter  prices_config=automatically_calculated. */
            productPricesConfigAutomatonDetails?: {
                /** @description Price name, one of values: retail, wholsale, minimal. */
                priceAutomatonPriceName?: "retail" | "wholesale" | "minimal" | "automatic_calculation";
                /** @description Price setting, one of values: own, last_purchased, avarage_purchased, retail, wholsale, minimal */
                priceAutomatonPriceSettings?: "own" | "last_purchased" | "avarage_purchased" | "retail" | "wholesale" | "minimal" | "automatic_calculation";
                /** @description Price type, one of values: gross, net */
                priceAutomatonPriceType?: "gross" | "net";
                /** @description Final amount */
                priceAutomatonPriceValue?: number;
                /** @description Final amount currency */
                priceAutomatonPriceCurrencyId?: string;
                /** @description shop ID from which price is retrieved */
                priceAutomatonPriceShop?: number;
                /** @description Amount margin */
                priceAutomatonMarginCurrencyValue?: number;
                /** @description Amount margin currency */
                priceAutomatonMarginCurrencyId?: string;
                /** @description Percentage margin */
                priceAutomatonMarginPercentValue?: number;
                /** @description Minimal value of percentage margin */
                priceAutomatonPricePercentMinimalValue?: number;
                /** @description Minimal value of percentage margin currency */
                priceAutomatonPricePercentMinimalCurrencyId?: string;
                /** @description Minimal amount with margins reflected */
                priceAutomatonPriceMinimalValue?: number;
                /** @description Minimal amount currency */
                priceAutomatonPriceMinimalCurrencyId?: string;
                /** @description Decimal complement should contain 0 to 2 digits. If it contains 0 digits, the system will calculate the amount with precision of up to 2 decimal places. If it contains 2 digits, the system will calculate the amount with precision of the total number and will add the value of this field as a decimal part of this amount */
                priceAutomatonDecimalRoundValue?: string;
            }[];
            /** @description Parameters set for auction sites */
            productAuctions?: {
                /** @description Auction site ID */
                auctionId?: number;
                /** @description Auction site page ID */
                auctionSiteId?: number;
                /** @description Price settings, possible values: "manual" - Price entered manually, "automatically_calculated" - Price calculated automatically. */
                auctionPricesConfig?: "manual" | "automatically_calculated";
                /** @description Configuration details for setting of parameter  prices_config=automatically_calculated */
                auctionPricesConfigAutomatonDetails?: {
                    /** @description Price name, one of values: buy_now, start, minimal_auction */
                    auctionPriceAutomatonPriceName?: "buy_now" | "start" | "minimal_auction";
                    /** @description Price setting, one of values: own, last_purchased, avarage_purchased, retail, wholsale, minimal, buy_now, start, minimal_auction. */
                    auctionPriceAutomatonPriceSettings?: "own" | "last_purchased" | "avarage_purchased" | "retail" | "wholesale" | "minimal" | "automatic_calculation" | "buy_now" | "start" | "minimal_auction";
                    /** @description Price type, one of values: gross, net */
                    priceAutomatonPriceType?: "gross" | "net";
                    /** @description Final amount */
                    priceAutomatonPriceValue?: number;
                    /** @description Final amount currency */
                    priceAutomatonPriceCurrencyId?: string;
                    /** @description shop ID from which price is retrieved */
                    priceAutomatonPriceShop?: number;
                    /** @description Amount margin */
                    priceAutomatonMarginCurrencyValue?: number;
                    /** @description Amount margin currency */
                    priceAutomatonMarginCurrencyId?: string;
                    /** @description Percentage margin */
                    priceAutomatonMarginPercentValue?: number;
                    /** @description Minimal value of percentage margin */
                    priceAutomatonPricePercentMinimalValue?: number;
                    /** @description Minimal value of percentage margin currency */
                    priceAutomatonPricePercentMinimalCurrencyId?: string;
                    /** @description Minimal amount with margins reflected */
                    priceAutomatonPriceMinimalValue?: number;
                    /** @description Minimal amount currency */
                    priceAutomatonPriceMinimalCurrencyId?: string;
                    /** @description Decimal complement should contain 0 to 2 digits. If it contains 0 digits, the system will calculate the amount with precision of up to 2 decimal places. If it contains 2 digits, the system will calculate the amount with precision of the total number and will add the value of this field as a decimal part of this amount */
                    priceAutomatonDecimalRoundValue?: string;
                }[];
                /** @description Parameters for sizes */
                productAuctionsSizes?: {
                    /** @description Size identifier */
                    sizeId?: string;
                    /** @description Size name */
                    sizePanelName?: string;
                    /** @description Configuration details for setting of parameter  prices_config=automatically_calculated */
                    auctionPricesConfigAutomatonDetails?: {
                        /** @description Price name, one of values: buy_now, start, minimal_auction */
                        auctionPriceAutomatonPriceName?: "buy_now" | "start" | "minimal_auction";
                        /** @description Price setting, one of values: own, last_purchased, avarage_purchased, retail, wholsale, minimal, buy_now, start, minimal_auction. */
                        auctionPriceAutomatonPriceSettings?: "own" | "last_purchased" | "avarage_purchased" | "retail" | "wholesale" | "minimal" | "buy_now" | "start" | "minimal_auction" | "automatic_calculation";
                        /** @description Price type, one of values: gross, net */
                        priceAutomatonPriceType?: "gross" | "net";
                        /** @description Final amount */
                        priceAutomatonPriceValue?: number;
                        /** @description Final amount currency */
                        priceAutomatonPriceCurrencyId?: string;
                        /** @description shop ID from which price is retrieved */
                        priceAutomatonPriceShop?: number;
                        /** @description Amount margin */
                        priceAutomatonMarginCurrencyValue?: number;
                        /** @description Amount margin currency */
                        priceAutomatonMarginCurrencyId?: string;
                        /** @description Percentage margin */
                        priceAutomatonMarginPercentValue?: number;
                        /** @description Minimal value of percentage margin */
                        priceAutomatonPricePercentMinimalValue?: number;
                        /** @description Minimal value of percentage margin currency */
                        priceAutomatonPricePercentMinimalCurrencyId?: string;
                        /** @description Minimal amount with margins reflected */
                        priceAutomatonPriceMinimalValue?: number;
                        /** @description Minimal amount currency */
                        priceAutomatonPriceMinimalCurrencyId?: string;
                        /** @description Decimal complement should contain 0 to 2 digits. If it contains 0 digits, the system will calculate the amount with precision of up to 2 decimal places. If it contains 2 digits, the system will calculate the amount with precision of the total number and will add the value of this field as a decimal part of this amount */
                        priceAutomatonDecimalRoundValue?: string;
                    }[];
                }[];
            }[];
            /** @description Set the same price for auction sites as in store. */
            setTheSamePriceForAuctionAsInStore?: boolean;
            /** @description Parameters set for price comparison websites */
            productShopPriceComparisonSites?: {
                /** @description price comparison website ID */
                priceComparisonSiteId?: number;
                /** @description price comparison website name */
                priceComparisonSiteName?: string;
                /** @description Price settings, possible values: "manual" - Price entered manually, "automatically_calculated" - Price calculated automatically. */
                priceComparisonSitePricesConfig?: "manual" | "automatically_calculated";
                /** @description Configuration details for setting of parameter  prices_config=automatically_calculated */
                priceComparisonSitePriceConfigAutomatonDetails?: {
                    /** @description Price setting, one of values: own, last_purchased, avarage_purchased, retail, wholsale, minimal */
                    priceAutomatonPriceSettings?: "own" | "last_purchased" | "avarage_purchased" | "retail" | "wholesale" | "minimal";
                    /** @description Price type, one of values: gross, net */
                    priceAutomatonPriceType?: "gross" | "net";
                    /** @description Final amount */
                    priceAutomatonPriceValue?: number;
                    /** @description Final amount currency */
                    priceAutomatonPriceCurrencyId?: string;
                    /** @description shop ID from which price is retrieved */
                    priceAutomatonPriceShop?: number;
                    /** @description Amount margin */
                    priceAutomatonMarginCurrencyValue?: number;
                    /** @description Amount margin currency */
                    priceAutomatonMarginCurrencyId?: string;
                    /** @description Percentage margin */
                    priceAutomatonMarginPercentValue?: number;
                    /** @description Minimal value of percentage margin */
                    priceAutomatonPricePercentMinimalValue?: number;
                    /** @description Minimal value of percentage margin currency */
                    priceAutomatonPricePercentMinimalCurrencyId?: string;
                    /** @description Minimal amount with margins reflected */
                    priceAutomatonPriceMinimalValue?: number;
                    /** @description Minimal amount currency */
                    priceAutomatonPriceMinimalCurrencyId?: string;
                    /** @description Decimal complement should contain 0 to 2 digits. If it contains 0 digits, the system will calculate the amount with precision of up to 2 decimal places. If it contains 2 digits, the system will calculate the amount with precision of the total number and will add the value of this field as a decimal part of this amount */
                    priceAutomatonDecimalRoundValue?: string;
                };
            }[];
        }[];
        /** @description Products subscription settings. */
        subscription?: {
            /** @description Shop Id */
            shopId?: number;
            /** @description Is subscription enabled for product */
            enabled?: boolean;
            /** @description Days in period */
            daysInPeriod?: number[];
            /** @description Sold at - for retailers. */
            unitsNumberRetail?: number;
            /** @description Sold at - for wholesalers. */
            unitsNumberWholesale?: number;
        }[];
        /** @description Product name. */
        productNames?: {
            productNamesLangData?: {
                /** @description Language ID */
                langId?: string;
                /** @description Product name. */
                productName?: string;
                /** @description Shop Id */
                shopId?: number;
                /** @description External service identifier */
                serviceId?: number;
            }[];
        };
        /** @description DEPRECATED. This parameter is deprecated. Product name for online auctions. */
        productNamesInAuction?: {
            productNamesInAuctionLangData?: {
                /** @description Language ID */
                langId?: string;
                /** @example productNameInAuction */
                productNameInAuction?: string;
            }[];
        };
        /** @description Product name for price comparison websites. */
        productNamesInPriceComparer?: {
            productNamesInPriceComparerLangData?: {
                /** @description Language ID */
                langId?: string;
                /** @description Product name for price comparison websites. */
                productNameInPriceComparer?: string;
            }[];
        };
        /** @description Product short description */
        productParamDescriptions?: {
            productParamDescriptionsLangData?: {
                /** @description Language ID */
                langId?: string;
                /** @description Product short description */
                productParamDescriptions?: string;
                /** @description Shop Id */
                shopId?: number;
                /** @description External service identifier */
                serviceId?: number;
            }[];
        };
        /** @description Long product description */
        productLongDescriptions?: {
            productLongDescriptionsLangData?: {
                /** @description Language ID */
                langId?: string;
                /** @description Long product description. */
                productLongDescription?: string;
                /** @description Shop Id */
                shopId?: number;
                /** @description External service identifier */
                serviceId?: number;
            }[];
        };
        /** @description DEPRECATED. This parameter is deprecated. Product description for marketplaces. */
        productLongDescriptionsInAuction?: {
            productLongDescriptionsInAuctionLangData?: {
                /** @description Language ID */
                langId?: string;
                /** @example productLongDescriptionInAuction */
                productLongDescriptionInAuction?: string;
            }[];
        };
        /** @description Product data for auction services */
        productAuctionDescriptionsData?: {
            /** @description Auction system ID */
            productAuctionId?: string;
            /** @description Auction site ID */
            productAuctionSiteId?: string;
            /** @description Product name for auction service. */
            productAuctionName?: string;
            /** @description Subtitle for auction service */
            productAuctionAdditionalName?: string;
            /** @description Product description for marketplaces */
            productAuctionDescription?: string;
        }[];
        /** @description Product meta title */
        productMetaTitles?: {
            productMetaTitlesLangData?: {
                /** @description Shop Id */
                shopId?: number;
                /** @description Language ID */
                langId?: string;
                /** @description Language name */
                langName?: string;
                /** @description Product meta title. */
                productMetaTitle?: string;
            }[];
        };
        /** @description Product meta description */
        productMetaDescriptions?: {
            productMetaDescriptionsLangData?: {
                /** @description Shop Id */
                shopId?: number;
                /** @description Language ID */
                langId?: string;
                /** @description Language name */
                langName?: string;
                /** @description Product meta description. */
                productMetaDescription?: string;
            }[];
        };
        /** @description Product meta keywords. */
        productMetaKeywords?: {
            productMetaKeywordsLangData?: {
                /** @description Shop Id */
                shopId?: number;
                /** @description Language ID */
                langId?: string;
                /** @description Language name */
                langName?: string;
                /** @description Product meta keywords. */
                productMetaKeyword?: string;
            }[];
        };
        /** @description URL for the product */
        productUrl?: {
            productUrlsLangData?: {
                /** @description Shop Id */
                shopId?: number;
                /** @description Language ID */
                langId?: string;
                /** @example url */
                url?: string;
            }[];
        };
        /** @description Data on product groups (variants) */
        productVersion?: {
            /** @description ID of the main item (variant) in the group. */
            versionParent?: {
                /** @description Value. */
                versionParentId?: string;
                /** @description Identifier type. */
                versionParentType?: "id" | "codeExtern" | "codeProducer";
            };
            /** @description The order of products in the group. Value needs to be more than 0. */
            versionPriority?: number;
            /** @description Settings for groups of items (variants) */
            versionSettings?: {
                /** @description Show in shop. Available values: "y" - all products from group, "n" - only the first product from group. */
                versionDisplayAllInShop?: string;
                /** @description Show in panel. Available values: "y" - wszystkie towary z grupy, "n" - only the first product from group. */
                versionDisplayAllInPanel?: string;
                /** @description Adding the canonical links to the site. Available values: "y" - on, "n" - Off. */
                versionDisplayRelCanonicalInShop?: string;
                /** @description The same code. Available values: "y" - yes, "n" - no. */
                versionCommonCode?: string;
                /** @description The same brand. Available values: "y" - yes, "n" - no. */
                versionCommonProducer?: string;
                /** @description The same annotation. Available values: "y" - yes, "n" - no. */
                versionCommonNote?: string;
                /** @description The same warranty. Available values: "y" - yes, "n" - no. */
                versionCommonWarranty?: string;
                /** @description The same for size chart. Available values: "y" - yes, "n" - no. */
                versionCommonSizesChart?: string;
                /** @description The same series. Available values: "y" - yes, "n" - no. */
                versionCommonSeries?: string;
                /** @description The same category. Available values: "y" - yes, "n" - no. */
                versionCommonCategory?: string;
                /** @description The same price. Available values: "y" - yes, "n" - no. */
                versionCommonPrice?: string;
                /** @description Same advance. Available values: "y" - yes, "n" - no. */
                versionCommonAdvance?: string;
                /** @description Same quantity discount. Available values: "y" - yes, "n" - no. */
                versionCommonRebate?: string;
                /** @description the same VAT rate. Available values: "y" - yes, "n" - no. */
                versionCommonVat?: string;
                /** @description The same loyalty points. Available values: "y" - yes, "n" - no. */
                versionCommonProfitPoints?: string;
                /** @description The same related product. Available values: "y" - yes, "n" - no. */
                versionCommonAssociated?: string;
                /** @description The same visibility. Available values: "y" - yes, "n" - no. */
                versionCommonVisibility?: string;
                /** @description The same priority. Available values: "y" - yes, "n" - no. */
                versionCommonPriority?: string;
                /** @description The same shops. Available values: "y" - yes, "n" - no. */
                versionCommonShops?: string;
                /** @description The same sizes. Available values: "y" - yes, "n" - no. */
                versionCommonSizes?: string;
                /** @description The same weight. Available values: "y" - yes, "n" - no. */
                versionCommonWeight?: string;
                /** @description The same name. Available values: "y" - yes, "n" - no. */
                versionCommonName?: string;
                /** @description The same product's name for Internet auctions. Available values: "y" - yes, "n" - no. */
                versionCommonAuctionName?: string;
                /** @description The same short description. Available values: "y" - yes, "n" - no. */
                versionCommonDescription?: string;
                /** @description The same long description. Available values: "y" - yes, "n" - no. */
                versionCommonLongDescription?: string;
                /** @description The same icon. Available values: "y" - yes, "n" - no. */
                versionCommonIcon?: string;
                /** @description The same large photos. Available values: "y" - yes, "n" - no. */
                versionCommonPhotos?: string;
                /** @description The same availability profile. Available values: "y" - yes, "n" - no. */
                versionCommonAvailableProfile?: string;
                /** @description The same complex rating. Available values: "y" - yes, "n" - no. */
                versionCommonComplexNotes?: string;
                /** @description Do You wish to sum up the products in the basket as a one order? Available values: "y" - yes, "n" - no. */
                versionCommonSumInBasket?: string;
                /** @description The same objects in menu Available values: "y" - yes, "n" - no. */
                versionCommonMenuItems?: string;
                /** @description The same supplier. Available values: "y" - yes, "n" - no. */
                versionCommonDeliverer?: string;
                /** @description The same attachments Available values: "y" - yes, "n" - no. */
                versionCommonAttachments?: string;
                /** @description The same icons for auctions Available values: "y" - yes, "n" - no. */
                versionCommonAuctionIcon?: string;
                /** @description The same serial numbers Available values: "y" - yes, "n" - no. */
                versionCommonSerialNumbers?: string;
                /** @description The same parameters. possible values "y" - yes, "n" - no. */
                versionCommonDictionary?: string;
                /** @description Same promotions Available values: "y" - yes, "n" - no. */
                versionCommonPromotions?: string;
                /** @description The same meta settings Available values: "y" - yes, "n" - no. */
                versionCommonMetaTags?: string;
                /** @description The same currency. Available values: "y" - yes, "n" - no. */
                versionCommonCurrency?: string;
                /** @description The same formula for calculating prices Available values: "y" - yes, "n" - no. */
                versionCommonPriceFormula?: string;
                /** @description The same JavaScript displayed on the product card Available values: "y" - yes, "n" - no. */
                versionCommonJavaScriptOnCard?: string;
            };
            /** @description Parameter value names */
            versionNames?: {
                /** @description Array of languages, values are displayed in. */
                versionNamesLangData?: {
                    /** @description Language ID */
                    langId?: string;
                    /** @description Name of the parameter value, e.g. orange, green, red */
                    versionName?: string;
                }[];
            };
            /** @description Parameter names */
            versionGroupNames?: {
                /** @description Parameter name */
                versionGroupNamesLangData?: {
                    /** @description Language ID */
                    langId?: string;
                    /** @description Parameter name, e.g. color, width */
                    versionGroupName?: string;
                }[];
            };
        };
        /** @description Currency ID */
        currencyId?: string;
        /** @description Currency, in which product prices are stored. */
        productCurrenciesShops?: {
            /** @description Shop Id */
            shopId?: number;
            /** @description Currency ID */
            currencyId?: string;
        }[];
        /** @description Supplier ID. */
        delivererId?: number;
        /** @description Supplier name. */
        delivererName?: string;
        /** @description This parameter is optional and it determines properties edition mode. Default value is "replace". Allowed values: "add" - adds properties to already existent ones, "delete" - removes properties of already existent ones, "delete_group" - removes properties from selected group, "replace" - overwrites properties already existent with new ones (default mode). */
        productParametersDistinctionChangeMode?: "add" | "delete" | "delete_group" | "replace";
        /** @description Product delivery time from the producer to the shop */
        productDeliveryTime?: {
            /** @description Operation type: "product" - sets own product delivery time, "deliverer" - sets product delivery time exactly the same as deliverer's. */
            productDeliveryTimeChangeMode?: "product" | "deliverer";
            /** @description The amount of time it takes to get goods from the supplier to the store. The maximum time is 99 for the unit "days" or 999 for the unit "hours" and "minutes" */
            productDeliveryTimeValue?: number;
            /** @description Determine the type of time it takes to get goods from supplier to store */
            productDeliveryTimeType?: "immediately" | "minutes" | "hours" | "upTo24h" | "workingDays" | "notKnown";
        };
        /** @description Parameters. */
        productParameters?: {
            /** @description "add_parameter" - assigning element to product, "delete_parameter" - removing element from product. */
            productParameterOperation?: "add_parameter" | "delete_parameter";
            /** @description Parameter ID */
            productParameterId?: number;
            /** @description Determines where the parameter will be added. If no value is specified, the parameter will be placed at the end of the list. If a value of e.g. 5 is set, the value of all priorities >= 5 will be increased by 1 to provide a unique priority value. */
            productParameterPriority?: number;
            /** @description Allows to enter parameter name i multiple languages at the same time. If it is used, item_textid and lang_id are ingored. */
            productParameterTextIdsLangData?: {
                /** @description Language ID */
                langId?: string;
                /** @description Parameter ID. */
                productParameterTextId?: string;
            }[];
            /** @description Language ID */
            langId?: string;
            /** @description Parameters descriptions in indicated language versions. */
            productParametersDescriptionsLangData?: {
                /** @description Language ID */
                langId?: string;
                /** @description Parameter description */
                productParametersDescription?: string;
            }[];
        }[];
        clearProductParameters?: boolean;
        /** @description Change parameter distinction. */
        changeParametersDistinction?: {
            /** @description Parameter ID */
            productParameterId?: number;
            /** @description Parameter name (if ID was not used). */
            productParameterTextIdent?: string;
            /** @description Language ID */
            langId?: string;
            /** @description Available values: distinction - Set as distinguished on product card, list of products (distinguished), projector_hide - Set as hidden on list of parameters on product card, group_distinction - Set as parameter differentiating products in group  (nieaktywne), auction_template_hide - Hidden for a variable [iai:product_parameters] in auction templates . */
            productParameterDescriptionType?: "distinction" | "group_distinction" | "projector_hide" | "auction_template_hide";
            /** @description Value. Allowed values: "y" "n" */
            parameterDistinctionValue?: "y" | "n";
        }[];
        /** @description VAT rate change mode:. "change_gross" - changes the product gross price, leaving the net price unchanged, "change_net" - changes the net price, leaving the gross price unchanged (default mode). */
        productPriceVatChangeMode?: "change_net" | "change_gross";
        /** @description An array of menu elements */
        productMenuItems?: {
            /** @description Menu element operation type. Available values. - add_product - assigns a product to the menu element. - delete_product - removes a product from the menu element. */
            productMenuOperation?: "add_product" | "delete_product";
            /** @description ID of the menu node to which the product is to be assigned */
            menuItemId?: number;
            /** @description Menu element text identifier. Example: "item1\item2\item3". */
            menuItemTextId?: string;
            /** @description Shop Id */
            shopId?: number;
            /** @description ID of the menu zone displayed in the mask */
            menuId?: number;
        }[];
        /** @description Deletes all items assigned to the product of the selected menu */
        removeAllProductsAssignedToMenu?: {
            /** @description Shop Id */
            shopId?: number;
            /** @description ID of the menu zone displayed in the mask */
            menuId?: number;
        };
        /** @description Do You wish to sum up the products in the basket as a one order? Available values: "y" - yes, "n" - no. */
        productSumInBasket?: string;
        /** @description Settings of prices for shop. Values allowed: "same_prices" - prices in each shop are the same, "different_prices" - prices in each shop are different. */
        productShopsPricesConfig?: "same_prices" | "different_prices";
        /** @description Price settings for POS. Allowed values: "pos_equals_retail" - sets POS price the same as retail price. Possible to set only if the "shops_prices_config" parameter is set to jest same_prices or there is only one shop in panel, "pos_notequals_retail" - Price for POS different than retail price, "not_available_in_pos" - Product not available for POS sales. "sizes_pos_price_as_base_price" - Remove prices for sizes and set a sale price which equals a basic price. */
        productPosPricesConfig?: "pos_equals_retail" | "pos_notequals_retail" | "not_available_in_pos" | "sizes_pos_price_as_base_price";
        /** @description Product type. Allowed values: "product_item" - Goods, "product_free" - Free product, "product_packaging" - packaging, "product_bundle" - set. "product_collection" - collection. "product_service" - service. "product_virtual" - virtual product. "product_configurable" - configurable product. */
        productType?: "product_item" | "product_free" | "product_packaging" | "product_bundle" | "product_collection" | "product_virtual" | "product_service" | "product_configurable";
        /** @description Forced rounding up method. */
        priceRoundMode?: "none" | "00" | "x0" | "99" | "x9";
        /** @description Product availability management method Available values: "stock" - by means of stock management tools, "manual" - manually. */
        productAvailabilityManagementType?: "manual" | "stock";
        /** @description List of unused sizes in product to be deleted */
        removeChooseSizesValues?: string[];
        /** @description Remove all unused sizes. */
        removeAllUnusedProductSizes?: boolean;
        /** @description Standard producer code. Available values: "auto" - Choose automatically, "GTIN14" - GTIN-14 "GTIN13" - GTIN-13 (EAN-13) "ISBN13" - GTIN-13 (ISBN-13) "GTIN12" - GTIN-12 (UPC-A) "ISBN10" - ISBN-10 "GTIN8" - GTIN-8 (EAN-8) "UPCE" - UPC-E "MPN" - MPN "other" - Other */
        producerCodesStandard?: "auto" | "GTIN14" | "GTIN13" | "ISBN13" | "GTIN12" | "ISBN10" | "GTIN8" | "UPCE" | "MPN" | "other";
        /** @description JavaScript code displayed in the product page of the IdoSell Shop */
        javaScriptInTheItemCard?: {
            /** @description Shop Id */
            shopId?: number;
            /** @description JavaScript code displayed in the product page of the IdoSell Shop */
            scriptCode?: string;
        }[];
        /** @description Saving serial numbers Available values: "na" - not used, "optional" - Optional, "required" - required. */
        serialNumbersOption?: "na" | "optional" | "required";
        /** @description Shipping, returns and complaints settings */
        dispatchSettings?: {
            enabled?: boolean;
            /** @description Shipping settings */
            shippingSettings?: {
                /** @description Disable cash on delivery orders */
                codDisabled?: boolean;
                /** @description Only personal collection */
                dvpOnly?: boolean;
                /** @description Oversized product */
                atypicalSize?: boolean;
                /** @description Insurance required */
                insuranceOnly?: boolean;
                /** @description Exclusion from the Smile service */
                excludeSmileService?: boolean;
                /** @description List of courier services which cannot be used to ship this product */
                disallowedCouriers?: number[];
            };
            /** @description Free shipping settings */
            freeShippingSettings?: {
                /** @description Edition mode */
                mode?: "no" | "onlyProduct" | "wholeBasket";
                /** @description Set free shipping for the payment method only . */
                availablePaymentForms?: {
                    /** @description prepayment */
                    prepaid?: boolean;
                    /** @description Cash on delivery */
                    cashOnDelivery?: boolean;
                    /** @description Trade credit */
                    tradeCredit?: boolean;
                };
                /** @description List of courier services for which shipping is free */
                availableCouriers?: number[];
                /** @description List of courier services by which the products can be sent free of charge. IDs couriers */
                availableCouriersForSingleProduct?: number[];
                /** @description List of regions with free shipment */
                availableRegions?: number[];
            };
            /** @description Return and complaint settings */
            returnProductSettings?: {
                /** @description Product can be returned */
                returnOptions?: {
                    enabled?: boolean;
                    /** @description yes - for companies */
                    firm?: boolean;
                    /** @description yes - for wholesalers */
                    hurt?: boolean;
                    /** @description yes - for retailers */
                    detalist?: boolean;
                };
                byOwnService?: boolean;
                byInPostSzybkieZwrotyByIAI?: boolean;
            };
        };
        /** @description Standard unit settings */
        standardUnit?: {
            /** @description Possible special contexts corresponding to standard units. Available values: "CONTEXT_STD_UNIT_WEIGHT" - Product weight in grams, "CONTEXT_STD_UNIT_WEIGHT_SI" - Product weight in kilograms, "CONTEXT_STD_UNIT_VOLUME" - A product's value in milliliters "CONTEXT_STD_UNIT_VOLUME_SI" - A product's value in liters "CONTEXT_STD_UNIT_LENGTH" - Length of product in meters "CONTEXT_STD_UNIT_AREA_M2" - Area of ​​product in square meters "CONTEXT_STD_UNIT_VOLUME_M3" - The volume of products in cubic meters "CONTEXT_STD_UNIT_QUANTITY_PACKAGE" - Number of pieces per pack for standard unit */
            contextValue?: "CONTEXT_STD_UNIT_WEIGHT" | "CONTEXT_STD_UNIT_WEIGHT_SI" | "CONTEXT_STD_UNIT_VOLUME" | "CONTEXT_STD_UNIT_VOLUME_SI" | "CONTEXT_STD_UNIT_LENGTH" | "CONTEXT_STD_UNIT_AREA_M2" | "CONTEXT_STD_UNIT_VOLUME_M3" | "CONTEXT_STD_UNIT_QUANTITY_PACKAGE";
            /** @description Total length/volume/area/weight of product */
            standardUnitValue?: number;
            /** @description Price converter per unit. Available values: "0" - default (taken from the category), "1" - price per gram/milliliter/meter "10" - price per 10 grams/10 milliliters/10 meters "100" - price per 100 grams/100 milliliters/100 meters "1000" - price per liter/kilogram/kilometer */
            converterUnitValue?: "0" | "1" | "10" | "100" | "1000";
        };
        /** @description Minimal number of products in an order */
        minQuantityPerOrder?: {
            /** @description Minimum number of products in a retail order */
            minQuantityPerOrderRetail?: number;
            /** @description Minimum number of products in a wholesale order */
            minQuantityPerOrderWholesale?: number;
        };
        /** @example dynamicPricingEnabled */
        dynamicPricingEnabled?: string;
        /** @description The setting allows you to reset the inventory to zero */
        clearStockQuantities?: {
            /** @description The setting allows you to reset the inventories of warehouse M0 and all your own warehouses */
            clearAllStockQuantities?: boolean;
            /** @description List of warehouses for which inventories are to be reset */
            stocksListToClear?: number[];
        };
        /** @description Dimensions and overall weight */
        productDimensions?: {
            /** @description The width of a product in centimeters */
            productWidth?: number;
            /** @description Height of a product in centimeters */
            productHeight?: number;
            /** @description The length of a product in centimeters */
            productLength?: number;
        };
        /** @description Responsible producer code */
        responsibleProducerCode?: string;
        /** @description Responsible person code */
        responsiblePersonCode?: string;
    }[];
};

export type PutOrdersParams = {
    /** @description Orders. */
    orders: {
        /** @description Order ID. */
        orderId?: string;
        /** @description Order serial number. */
        orderSerialNumber?: number;
        /** @description Order status. Allowed values: "finished_ext" - order status: completed in FA application, "finished" - completed, "new" - not handled, "payment_waiting" - awaiting payment, "delivery_waiting" - awaiting delivery, "on_order" - in progress, "packed" - being picked, "packed_fulfillment" - being picked - fulfilment, "packed_ready" - packed, "ready" - ready, "wait_for_dispatch" - awaiting dispatch date, "suspended" - on hold, "joined" - merged, "missing" - missing, "lost" - lost, "false" - false, "canceled" - Customer canceled. */
        orderStatus?: string;
        /** @description Order status id . */
        orderStatusId?: number;
        /** @description Flag informing on order registration or completion in external program through API. Allowed values. "none" - order was not registered in external program, "registered" - order was registered in external program, "realized" - order was completed in external program, "registered_pos" - order was registered in external program, "realized_pos" - order was completed in external program. */
        apiFlag?: "none" | "registered" | "realized" | "registered_pos" | "realized_pos" | "registration_fault";
        /** @description API note added to order. */
        apiNoteToOrder?: string;
        /** @description Customer comments on order. */
        clientNoteToOrder?: string;
        /** @description Customer remarks for courier. */
        clientNoteToCourier?: string;
        /** @description Note to the order. */
        orderNote?: string;
        /** @description Products list. */
        products?: {
            /** @description Product IAI code */
            productId?: number;
            /** @description Size identifier */
            sizeId?: string;
            /** @description External product system code for size. */
            productSizeCodeExternal?: string;
            /** @description Item in basket. */
            basketPosition?: number;
            /** @description Stock ID */
            stockId?: number;
            /** @description Free product. */
            productFree?: boolean;
            /** */
            forceLoyaltyPoints?: number;
            /** @description Product quantity. */
            productQuantity?: number;
            /** @description Type of operation performed on product linked to current order. Allowed values: "add" - adds the product to current order in appropriate amount, "subtract" - removes the product from current order in appropriate amount. */
            productQuantityOperationType?: "add" | "substract";
            /** @description Gross price */
            productRetailPrice?: number;
            /** @description Value of VAT */
            productVat?: number;
            /** @description Is product VAT free Allowed values "y" - yes, "n" - no. */
            productVatFree?: string;
            /** @description Client's remarks on product. */
            remarksToProduct?: string;
            /** @description Label for grouping products. */
            label?: string;
            /** @description List of components if a products is a set or collection. */
            productBundleItems?: {
                /** @description Product IAI code */
                productId?: number;
                /** @description Size identifier */
                sizeId?: string;
                /** @description Size name */
                sizePanelName?: string;
                /** @description One of the unique, indexed product codes (IAI code / External system code / Producer code) */
                productIndex?: string;
            }[];
            /** @description Information about the selected parameters in the configurator. */
            priceFormulaParameters?: {
                /** @description Parameter ID */
                parameterId?: string;
                /** @example parameterValue */
                parameterValue?: string;
                /** @description Parameter values */
                parameterValues?: {
                    /** @example valueId */
                    valueId?: string;
                }[];
            }[];
        }[];
        /** @description Order payment method. Allowed values. "cash_on_delivery" - cash on delivery, "prepaid" - prepayment, "tradecredit" - Trade credit. */
        orderPaymentType?: "cash_on_delivery" | "prepaid" | "tradecredit";
        /** @description Settlement by prices. "gross" - gross, "net" - net, "net_without_VAT" - net without VAT. */
        orderSettledAtPrice?: "gross" | "net" | "net_without_VAT";
        /** @description Omits collecting orders via IAI Bridge. */
        ignoreBridge?: boolean;
        /** @description Settings */
        settings?: {
            /** @description Blocks the sending of emails */
            dontSendMail?: "y" | "n";
            /** @description Blocks the sending of sms messages */
            dontSendSMS?: "y" | "n";
        };
        /** @description Consent to send data to cooperating services */
        emailProcessingConsent?: "yes" | "no" | "disabled";
        /** @description Customer asked for invoice. List of parameters: "y" - yes (paper invoicing ), "e" - yes (electronic invoicing ), "n" - no. */
        clientRequestInvoice?: string;
        /** @description Order settlement currency. */
        billingCurrency?: string;
        /** @description Panel billing currency exchange rate in relation to billing currency in the shop . */
        billingCurrencyRate?: number;
        /** @description Sale date. ISO 8602 format. */
        purchaseDate?: string;
        /** @description Estimated date of shipment of the order in format Y-m-d H:i */
        estimatedDeliveryDate?: string;
    }[];
};

export type PostCouriersPickupPointsParams = {
    pickupPoints: {
        /** @description external system code. */
        pickupPointExternalId: string;
        /** @description Courier ID. */
        courierId: number;
        /** @description collection point details. */
        descriptions?: {
            /** @description Language ID (code in ISO 639-2). */
            languageId?: string;
            /** @description Name of the pickup point. */
            name?: string;
            /** @description collection point description . */
            description?: string;
        }[];
        /** @description Accepted payment types. */
        paymentForms?: ("cash" | "card")[];
        /** @description Collection point activity. Available values: available, outOfService . */
        serviceStatus?: "out_of_service" | "available";
        /** @description Pickup point address. */
        address: {
            /** @description Address. */
            street?: string;
            /** @description ZIP / Post code. */
            zipCode?: string;
            /** @description Town / City. */
            city?: string;
            /** @description Administrative region (code in ISO 3166-2). */
            provinceCode?: string;
        };
        /** @description Geographic coordinates. */
        coordinates: {
            /** @description Longitude. */
            longitude?: number;
            /** @description Latitude. */
            latitude?: number;
        };
        /** @description Personal collection point work hours. */
        operatingDays?: {
            /** @description Days of the week designation.Day number: 1- Monday, 7 - Sunday. */
            weekday?: number;
            /** @description collection point opening hours (HH:MM). */
            opening?: string;
            /** @description collection point closing time (HH:MM). */
            closing?: string;
            /** @description #!trybPracyPunktuDostepneWartosciOpenInOtwartyOdDoClosedZamkniety24hCzynnyCalaDobe!#. */
            operatingMode?: "open_in" | "closed" | "24h";
        }[];
    }[];
};

export type PutCouriersPickupPointsParams = {
    pickupPoints: {
        /** @description Collection point ID. */
        pickupPointId?: string | number;
        /** @description external system code. */
        pickupPointExternalId?: string;
        /** @description Courier ID. */
        courierId: number;
        /** @description collection point details. */
        descriptions?: {
            /** @description Language ID (code in ISO 639-2). */
            languageId?: string;
            /** @description Name of the pickup point. */
            name?: string;
            /** @description collection point description . */
            description?: string;
        }[];
        /** @description Accepted payment types. */
        paymentForms?: ("cash" | "card")[];
        /** @description Collection point activity. Available values: available, outOfService . */
        serviceStatus?: "out_of_service" | "available";
        /** @description Pickup point address. */
        address?: {
            /** @description Address. */
            street?: string;
            /** @description ZIP / Post code. */
            zipCode?: string;
            /** @description Town / City. */
            city?: string;
            /** @description Administrative region (code in ISO 3166-2). */
            provinceCode?: string;
        };
        /** @description Geographic coordinates. */
        coordinates?: {
            /** @description Longitude. */
            longitude?: number;
            /** @description Latitude. */
            latitude?: number;
        };
        /** @description Personal collection point work hours. */
        operatingDays?: {
            /** @description Days of the week designation.Day number: 1- Monday, 7 - Sunday. */
            weekday?: number;
            /** @description collection point opening hours (HH:MM). */
            opening?: string;
            /** @description collection point closing time (HH:MM). */
            closing?: string;
            /** @description #!trybPracyPunktuDostepneWartosciOpenInOtwartyOdDoClosedZamkniety24hCzynnyCalaDobe!#. */
            operatingMode?: "open_in" | "closed" | "24h";
        }[];
    }[];
};

export type PostPackagesLabelsParams = {
    /** @description Id. */
    eventId: number;
    /** @description Type. */
    eventType: "order" | "rma" | "return";
    /** @description Shipment configuration options available for a given courier */
    parcelParameters?: {
        /** @description Configuration option identifier for the shipment */
        id?: string;
        /** @description The value of the configuration option for the shipment */
        value?: string;
    }[];
    /** @description Shipment configuration options available for Inpost Smile courier */
    parcelParametersByPackages?: {
        /** @description Package ID in system. */
        packageId?: string;
        /** @description Shipment configuration options available for a given courier */
        parcelParameters?: {
            /** @description Configuration option identifier for the shipment */
            id?: string;
            /** @description The value of the configuration option for the shipment */
            value?: string;
        }[];
    }[];
};

export type PostOrdersDocumentsCreateParams = {
    /** @example [ 1, 2 ] */
    orderSerialNumbers: number[];
    /** @example false */
    actualize?: boolean;
    /** @description Document type */
    documentType: "vat_invoice" | "fiscal_invoice" | "corrective_vat_invoice" | "fiscal_receipt" | "sales_confirmation";
    /** @description Document issued date */
    documentIssuedDate?: string;
    /** @description Document purchase date */
    documentPurchaseDate?: string;
    /** @description Printer id */
    printerId?: number;
};

export { };