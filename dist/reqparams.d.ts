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
        /** @description Deposit type */
        depositType?: number;
        /** @description Product deposit id */
        depositProductId?: number;
        /** @description Product deposit count */
        depositCount?: number;
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
        /** @description Deposit type */
        depositType?: number;
        /** @description Product deposit id */
        depositProductId?: number;
        /** @description Product deposit count */
        depositCount?: number;
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
            /** @description Country code (ISO 3166-1 alpha-2). */
            countryCode?: string;
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

export type PostClientsParams = {
    /** @description Customer data. */
    clients: {
        /** @description Customer's login. */
        login?: string;
        /** @description External system code. */
        code_extern?: string;
        /** @description Customer e-mail address. */
        email: string;
        /** @description Customer's first name. */
        firstname?: string;
        /** @description Customer's last name. */
        lastname?: string;
        /** @description Address. */
        street: string;
        /** @description Customer's postal code. */
        zipcode: string;
        /** @description Customer's city. */
        city: string;
        /** @description Customer country (ISO 3166-1 alfa-2 code). */
        country_code?: string;
        /** @description Administrative region code. */
        province_code?: string;
        /** @description Customer password (min. 8 characters). */
        password?: string;
        /** @description Date of birth. */
        birth_date?: string;
        /** @description Customer phone number. */
        phone: string;
        /** @example company */
        company?: string;
        /** @description Customer Tax no. */
        vat_number?: string;
        /** @description Determines, whether client is a wholesaler. */
        wholesaler?: boolean;
        /** @description Customer type, possible values: - person - if client sex is not determined, - person_male - when client is a male, - person_female - when a customer is a woman, - firm - when client is company. */
        client_type?: "person" | "person_male" | "person_female" | "firm";
        /** @description Customer language ID. */
        language?: string;
        /** @description Determines, in which store account should be active. */
        shops: number[];
        /** @description Defines availability of log in to other pages than the ones given in the element: shops  . */
        block_autosigning_to_shops?: boolean;
        /** @description Customer default currency (ISO 4217 code). */
        currency?: string;
        delivery_dates?: string[];
        /** @description Customer account balance in external system. */
        external_balance_value?: number;
        /** @description Debt limit. */
        external_trade_credit_limit_value?: number;
        /** @description Have customer agreed to a newsletter. List of allowed parameters: "y" - yes, "n" - no. The value will be set in all shops in which the customer account is active. */
        email_newsletter?: boolean;
        /** @description Have customer agreed to a newsletter. List of allowed parameters: "y" - yes, "n" - no. The value will be set in all shops in which the customer account is active. */
        sms_newsletter?: boolean;
        /** @description Discount group ID. */
        client_group?: number;
        /** @description Field used for identifying request-response pairs for the endpoint. */
        request_reference?: string;
        /** @description List of shops where a customer agreed or didn't agree to receive email newsletter. */
        newsletter_email_approvals?: {
            /** @description Have customer agreed to a newsletter. List of allowed parameters: "y" - yes, "n" - no. */
            approval?: "y" | "n";
            /** @description Store ID. */
            shop_id?: number;
        }[];
        /** @description List of shops where a customer agreed or didn't agree to receive sms newsletter. */
        newsletter_sms_approvals?: {
            /** @description Have customer agreed to a newsletter. List of allowed parameters: "y" - yes, "n" - no. */
            approval?: "y" | "n";
            /** @description Store ID. */
            shop_id?: number;
        }[];
        /** @description Block assigning of discount groups automatically based on order history */
        block_group_auto_assignment?: boolean;
    }[];
};

export type PostReturnsParams = {
    /** @description Order serial number */
    order_sn: number;
    /** @example 1 */
    stock_id: number;
    /** @description Products list. */
    products: {
        /** @example 1 */
        id?: number;
        /** @example size */
        size?: string;
        /** */
        quantity?: number;
        /** @description Price. */
        price?: number;
        serialNumbers?: string[];
        /** @description Additional information. */
        productOrderAdditional?: string;
    }[];
    /** @example 1 */
    status?: number;
    client_received?: boolean;
    change_status?: boolean;
    /** @example 1 */
    courier_id?: number;
    /** @example return_operator */
    return_operator?: string;
    tryCorrectInvoice?: boolean;
    /** @example include_shipping_cost */
    include_shipping_cost?: string;
    /** @example additional_payment_cost */
    additional_payment_cost?: string;
    /** */
    emptyReturn?: "n" | "y";
};

export type PostWmsStocksdocumentsDocumentsParams = {
    /** */
    type: "pz" | "pw" | "px" | "rx" | "rw" | "mm";
    /** @description Target warehouse ID.   The list of available warehouses can be downloaded via the method <a href = "en/shop/api/?action=method&function=systemconfig&method=get">#get</a> in gateway <a href = "en/shop/api/?action=documentation&function=systemconfig">SystemConfig</a>. */
    stockId: number;
    /** @description Document number. */
    stockDocumentNumber?: string;
    /** @description Source warehouse ID.   The list of available warehouses can be downloaded via the method <a href = "en/shop/api/?action=method&function=systemconfig&method=get">#get</a> in gateway <a href = "en/shop/api/?action=documentation&function=systemconfig">SystemConfig</a>. */
    stockSourceId?: number;
    /** @example note */
    note?: string;
    /** @description Products available in presales. Available values: "y" - yes, "n" - no. */
    productsInPreorder?: "y" | "n";
    /** @description Supplier ID. */
    delivererId?: number;
    /** @description Type of purchase document. Available values: "national_VAT_invoice" - National VAT invoice, "other_purchase_document" - Other purchase document, "invoice_without_VAT" - Invoice without VAT (EU), "imports_from_outside_the_EU" - Import from outside EU. */
    wnt?: "national_VAT_invoice" | "other_purchase_document" | "invoice_without_VAT" | "imports_from_outside_the_EU";
    /** @description Issue date of purchase document. Correct format is yyyy-mm-dd, e.g. 2007-12-31.. */
    saleDocumentCreationDate?: string;
    /** @description Planned date of acceptance of delivery. Correct format is yyyy-mm-dd, e.g. 2007-12-31. Requires parameter: "confirmed=on_the_way". */
    deliveryOnTheWayPlannedDeliveryDate?: string;
    /** @description Document status. Available values: "open" - open, "on_the_way" - on the way. */
    confirmed?: "open" | "on_the_way";
    /** @description Purchase price currency, e.g. PLN, USD, GBP */
    currencyForPurchasePrice?: string;
    /** @description Settlement by prices. Available values: "brutto" - Gross value, "netto" - Net value */
    priceType?: "brutto" | "netto";
    /** @description Methods of stock level correction. Available values: "fifo" - first-in, first-out (FIFO), "lifo" - last-in, first-out (LIFO) */
    queueType?: "fifo" | "lifo";
};

export type PostWmsStocksdocumentsProductsParams = {
    /** @description Products list. */
    products: {
        /** @description Stock keeping unit. */
        product: number;
        /** @description Product size ID. */
        size: string;
        /** @description Product quantity. */
        quantity: number;
        /** @description Cost price */
        productPurchasePrice?: number;
        /** @description Warehouse location ID.  The list of available warehouse locations can be downloaded via the method <a href = "pl/shop/api/?action=method&function=locations&method=get">#get</a> in gateway <a href = "en/shop/api/?action=documentation&function=locations">Locations</a> . */
        locationId?: number;
        /** @description Storage location code */
        locationCode?: string;
        /** @description Warehouse location full path. Use a backslash (\) as a separator, for example:  M1\Section name\Location name.  The list of available warehouse locations can be downloaded via the method <a href = "pl/shop/api/?action=method&function=locations&method=get">#get</a> in gateway <a href = "en/shop/api/?action=documentation&function=locations">Locations</a> . */
        locationTextId?: string;
    }[];
    /** */
    type: "pz" | "pw" | "px" | "rx" | "rw" | "mm";
    /** @description Document identifier. */
    id: number;
};

export type PostPaymentsParams = {
    /** @description Source ID. */
    sourceId: number;
    /** @description Source type. */
    sourceType: "order" | "return" | "rma";
    /** @description Payment amount. */
    value: number;
    /** @description Number of a bank account to which a payment is sent. */
    account?: string;
    /** */
    type: "payment" | "advance" | "repayment" | "fee";
    /** @description Form of payment ID. */
    paymentFormId: number;
    /** @description Gift card or voucher number */
    paymentVoucherKey?: string;
    /** @description Gift card PIN. */
    giftCardPIN?: number;
    /** @description Transaction ID in external service */
    externalPaymentId?: string;
};

export type PutReturnsParams = {
    returns: {
        /** @example 1 */
        id: number;
        /** @example 1 */
        status?: number;
        /** @description Flag informing on order registration or completion in external program through API. Allowed values. "none" - order was not registered in external program, "registered" - order was registered in external program, "realized" - order was completed in external program, "registered_pos" - order was registered in external program, "realized_pos" - order was completed in external program. */
        apiFlag?: {
            /** */
            flag?: "none" | "registered" | "registration_fault";
            /** @example note */
            note?: string;
        };
        /** @description Products list. */
        products?: {
            /** @example 1 */
            id?: number;
            /** @example size */
            size?: string;
            /** */
            quantity?: number;
            /** @description Price. */
            price?: number;
            serialNumbers?: string[];
            /** @description Additional information. */
            productOrderAdditional?: string;
        }[];
        /** @example userNote */
        userNote?: string;
        /** @description Notes from customer. */
        clientNote?: string;
        tryCorrectInvoice?: boolean;
    }[];
};

export type PutRmaParams = {
    /** @description Complaints. */
    rmas: {
        /** @description Complaint id. */
        rmaId: number;
        /** @description Claim status. Available values: 15 - Complaint not confirmed by the shop service, 17 - The complaint has been cancelled, 18 - Complaint canceled by the customer, 14 - Complaint didn't arrive, 20 - Complaint not handled, *                 22 - Complaint rejected - no fault was found, 23 - Complaint rejected - the warranty period has expired, 24 - Complaint rejected - defect caused by improper use, *                 19 - Complaint confirmed, *                 28 - Complaint is being considered - repair completed, 5 - Complaint is being considered - Product sent to the producer , 4 - Complaint is being considered - Product was sent for testing, 6 - Complaint is being considered - Repair in progress, 29 - Complaint is being considered - the complaint requires additional information from the customer, *                 7 - Complaint adjusted negatively - no fault was found, 9 - Complaint adjusted negatively - the warranty period has expired, 30 - Complaint adjusted negatively - return shipment sent to the customer, 8 - Complaint adjusted negatively - defect caused by improper use, *                 25 - Complaint handled positively  - return shipment sent to the customer, 12 - Complaint handled positively  - replacement for a new product, 13 - Complaint handled positively  - replacement for a different product, 26 - Complaint handled positively  - a new item was shipped without waiting for the original one, 27 - Complaint handled positively  - the recipient's data change on the sales document, 10 - Complaint handled positively  - Refund - payment processing, 11 - Complaint handled positively  - repair completed - payout made, 31 - Complaint handled positively  - Awaiting correction invoice confirmation, 34 - Complaint handled positively  - Refund - preparing correction invoice */
        rmaStatusId?: number;
        /** @description Customer correspondence. */
        rmaChat?: {
            /** @description Message content */
            message?: string;
        }[];
    }[];
};

export type PutWmsStocksdocumentsProductsParams = {
    /** @description Products list. */
    products: {
        /** @description Stock keeping unit. */
        product: number;
        /** @description Product size ID. */
        size: string;
        /** @description Product quantity. */
        quantity?: number;
        /** @description Cost price */
        productPurchasePrice?: number;
        /** @description Warehouse location ID.  The list of available warehouse locations can be downloaded via the method <a href = "pl/shop/api/?action=method&function=locations&method=get">#get</a> in gateway <a href = "en/shop/api/?action=documentation&function=locations">Locations</a> . */
        locationId?: number;
        /** @description Storage location code */
        locationCode?: string;
        /** @description Warehouse location full path. Use a backslash (\) as a separator, for example:  M1\Section name\Location name.  The list of available warehouse locations can be downloaded via the method <a href = "pl/shop/api/?action=method&function=locations&method=get">#get</a> in gateway <a href = "en/shop/api/?action=documentation&function=locations">Locations</a> . */
        locationTextId?: string;
    }[];
    /** */
    type: "pz" | "pw" | "px" | "rx" | "rw" | "mm";
    /** @description Document identifier. */
    id: number;
};

export type PostMenuParams = {
    menu_list: {
        /** @description Shop Id. */
        shop_id: number;
        /** @description Menu ID. */
        menu_id: number;
        /** @description Parent menu element ID. */
        parent_id?: string;
        /** @description Menu element text identifier. Example: "item1\item2". */
        parent_textid?: string;
        lang_data: {
            /** @description Language ID. */
            lang_id?: string;
            /** @description Menu element name. */
            name?: string;
            /** @description Menu element order. */
            priority?: number;
            /** @description Description displayed at the top of products list. */
            description?: string;
            /** @description Description displayed at the bottom of products list. */
            description_bottom?: string;
            /** @description Own link. */
            link?: string;
            /** */
            item_type?: "products" | "navigation" | "products_with_rich_text" | "navigation_with_rich_text" | "rich_text" | "static" | "link";
            /** @description Meta - title. */
            meta_title?: string;
            /** @description Meta description. */
            meta_description?: string;
            /** @description Meta - keywords. */
            meta_keywords?: string;
            /** @description URL address */
            url?: string;
            /** @description Link target attribute: !_self - open on the same page, !_blank - open in a new page. */
            href_target?: "_self" | "_blank";
            sort?: {
                /** @description Default product list view. */
                view?: "normal" | "list" | "gallery";
                /** @description Sort by. */
                sort_by?: "date" | "priority" | "priorityname" | "name" | "price";
                /** @description Sort order. */
                sort_order?: "ASC" | "DESC";
            }[];
            display_limit?: {
                /** @description Default product list view. */
                view?: "normal" | "list" | "gallery";
                /** @description Limit. */
                limit?: number;
            }[];
            /** */
            default_view?: "normal" | "list" | "gallery";
            /** @description Headline name. Leaving this value empty will automatically generate name basing on a name in menu. */
            headline_name?: string;
            /** @description Display by default nested elements. n - no, y - yes. */
            expand?: "n" | "y";
            /** @description Element of the menu hidden from the clients: n - no, y - yes. */
            hidden?: "n" | "y";
            /** @description After clicking on the element in the menu:: expand - Display subelements of the menu if any available, if not - create, reload - reload the page and open. */
            action?: "reload" | "expand";
            /** @description Element "show all" is:: products_list - link to the list of products, navigation_site - link to the "Navigation" page. */
            display_all_type?: "products_list" | "navigation_site";
            /** @description Display element "show all": n - no, y - yes. */
            display_all?: "n" | "y";
            /** @description Disable changing "sort by" for customers: n - no, y - yes. */
            allow_sort_change?: "n" | "y";
            /** @description Disable possibility of changing the number of displayed products on the page by customers : n - no, y - yes. */
            allow_limit_change?: "n" | "y";
            /** @description Graphics in menu: n - no, y - yes. */
            node_gfx?: "n" | "y";
            /** @description Type of graphics - When the cursor is on the link: img - Image (one size for computers, tablets and smartphones, not recommended), img_rwd - Image (three sizes for RWD). */
            gfx_active_type?: "img" | "img_rwd";
            /** @description Type of graphics - When the cursor is outside link: img - Image (one size for computers, tablets and smartphones, not recommended), img_rwd - Image (three sizes for RWD). */
            gfx_inactive_type?: "img" | "img_rwd";
            /** @description Type of graphics - When the link is opened: img - Image (one size for computers, tablets and smartphones, not recommended), img_rwd - Image (three sizes for RWD). */
            gfx_omo_type?: "img" | "img_rwd";
            /** @description Graphic on the "navigation" page. */
            gfx_nav?: {
                /** @description Graphic encoded with Base64 */
                base64?: string;
                /** @description Graphic format */
                format?: "jpg" | "jpeg" | "png" | "gif" | "svg" | "webp";
            };
            /** @description Graphic - When the cursor is on the link. */
            gfx_active?: {
                /** @description Graphic encoded with Base64 */
                base64?: string;
                /** @description Graphic format */
                format?: "jpg" | "jpeg" | "png" | "gif" | "svg" | "webp";
            };
            /** @description Graphic - When the cursor is on the link - Desktop. */
            gfx_active_desktop?: {
                /** @description Graphic encoded with Base64 */
                base64?: string;
                /** @description Graphic format */
                format?: "jpg" | "jpeg" | "png" | "gif" | "svg" | "webp";
            };
            /** @description Graphic - When the cursor is on the link - Tablet. */
            gfx_active_tablet?: {
                /** @description Graphic encoded with Base64 */
                base64?: string;
                /** @description Graphic format */
                format?: "jpg" | "jpeg" | "png" | "gif" | "svg" | "webp";
            };
            /** @description Graphic - When the cursor is on the link - Mobile. */
            gfx_active_mobile?: {
                /** @description Graphic encoded with Base64 */
                base64?: string;
                /** @description Graphic format */
                format?: "jpg" | "jpeg" | "png" | "gif" | "svg" | "webp";
            };
            /** @description Graphic - When the cursor is outside link. */
            gfx?: {
                /** @description Graphic encoded with Base64 */
                base64?: string;
                /** @description Graphic format */
                format?: "jpg" | "jpeg" | "png" | "gif" | "svg" | "webp";
            };
            /** @description Graphic - When the cursor is outside link - Desktop. */
            gfx_inactive_desktop?: {
                /** @description Graphic encoded with Base64 */
                base64?: string;
                /** @description Graphic format */
                format?: "jpg" | "jpeg" | "png" | "gif" | "svg" | "webp";
            };
            /** @description Graphic - When the cursor is outside link - Tablet. */
            gfx_inactive_tablet?: {
                /** @description Graphic encoded with Base64 */
                base64?: string;
                /** @description Graphic format */
                format?: "jpg" | "jpeg" | "png" | "gif" | "svg" | "webp";
            };
            /** @description Graphic - When the cursor is outside link - Mobile. */
            gfx_inactive_mobile?: {
                /** @description Graphic encoded with Base64 */
                base64?: string;
                /** @description Graphic format */
                format?: "jpg" | "jpeg" | "png" | "gif" | "svg" | "webp";
            };
            /** @description Graphic - When the link is opened. */
            gfx_onmouseover?: {
                /** @description Graphic encoded with Base64 */
                base64?: string;
                /** @description Graphic format */
                format?: "jpg" | "jpeg" | "png" | "gif" | "svg" | "webp";
            };
            /** @description Graphic - When the link is opened - Desktop. */
            gfx_omo_desktop?: {
                /** @description Graphic encoded with Base64 */
                base64?: string;
                /** @description Graphic format */
                format?: "jpg" | "jpeg" | "png" | "gif" | "svg" | "webp";
            };
            /** @description Graphic - When the link is opened - Tablet. */
            gfx_omo_tablet?: {
                /** @description Graphic encoded with Base64 */
                base64?: string;
                /** @description Graphic format */
                format?: "jpg" | "jpeg" | "png" | "gif" | "svg" | "webp";
            };
            /** @description Graphic - When the link is opened - Mobile. */
            gfx_omo_mobile?: {
                /** @description Graphic encoded with Base64 */
                base64?: string;
                /** @description Graphic format */
                format?: "jpg" | "jpeg" | "png" | "gif" | "svg" | "webp";
            };
            /** @description Add a canonical link that points to the parent menu item: n - no, y - yes. */
            canonical_to_parent?: "n" | "y";
            /** @description Meta robots index settings: default - automatically generate, index - index, noindex - noindex. */
            meta_robots_index?: "default" | "index" | "noindex";
            /** @description Meta robots follow settings: default - automatically generate, follow - follow, nofollow - nofollow. */
            meta_robots_follow?: "default" | "follow" | "nofollow";
        }[];
    }[];
    /** @description Settings */
    settings?: {
        /** @description Default: "\". */
        textid_separator?: string;
    };
};

export type PutClientsDeliveryAddressParams = {
    /** @description Customer data. */
    clients: {
        /** @description Customer's login. */
        clientLogin: string;
        /** @description External system code. */
        clientCodeExternal?: string;
        /** @description Delivery address ID. */
        clientDeliveryAddressId: string | number;
        /** @description List of stores IDs When mask is determined, this parameter is omitted. */
        shopsIds: number[];
        /** @description Currency ID */
        currencyId?: string;
        /** @description Recipient's first name. */
        clientDeliveryAddressFirstName?: string;
        /** @description Recipient's last name. */
        clientDeliveryAddressLastName?: string;
        /** @description Additional information. */
        clientDeliveryAddressAdditional?: string;
        /** @description Cell phone. */
        clientDeliveryAddressPhone1?: string;
        /** @description Recipient's city. */
        clientDeliveryAddressCity?: string;
        /** @description Recipient street and number. */
        clientDeliveryAddressStreet?: string;
        /** @description Administrative region code. */
        clientDeliveryAddressRegionId?: string;
        /** @description Administrative region code. */
        clientDeliveryAddressProvinceId?: string;
        /** @description Recipient's postal code. */
        clientDeliveryAddressZipCode?: string;
        /** @description Recipient's country. */
        clientDeliveryAddressCountry?: string;
    }[];
};

export type PutProductsAttachmentsParams = {
    productsAttachments: {
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
        }[];
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
                attachmentDownloadsLimit?: number;
                /** @description Number of days file should be available. */
                attachmentDaysLimit?: number;
            };
            /** @description Attachment ID. */
            attachmentId?: number;
            /** @description Attachment number. */
            attachmentPriority?: number;
            /** @description Information on error that occurred during gate call. */
            errors?: {
                /** @description Error code. */
                faultCode?: number;
                /** @description Error description. */
                faultString?: string;
            };
            /** @description Flag indicating if an attachment should be removed. */
            attachmentToDelete?: boolean;
        }[];
        /** @description Information on error that occurred during gate call. */
        errors?: {
            /** @description Error code. */
            faultCode?: number;
            /** @description Error description. */
            faultString?: string;
        };
        /** @description Flag indicating if there are errors in results of attachments settings. */
        attachmentsErrorsOccurred?: boolean;
        /** @description Flag indicating if there are errors in results of virtual attachments settings. */
        virtualAttachmentsErrorsOccurred?: boolean;
    }[];
};

export type PutMenuParams = {
    menu_list: {
        /** @description Shop Id. */
        shop_id: number;
        /** @description Menu ID. */
        menu_id: number;
        /** @description Menu element ID. */
        item_id: string;
        /** @description Menu element text identifier. Example: "item1\item2\item3". */
        item_textid?: string;
        lang_data?: {
            /** @description Language ID. */
            lang_id?: string;
            /** @description Menu element name. */
            name?: string;
            /** @description Menu element order. */
            priority?: number;
            /** @description Description displayed at the top of products list. */
            description?: string;
            /** @description Description displayed at the bottom of products list. */
            description_bottom?: string;
            /** @description Own link. */
            link?: string;
            /** */
            item_type?: "products" | "navigation" | "products_with_rich_text" | "navigation_with_rich_text" | "rich_text" | "static" | "link";
            /** @description Meta title  . */
            meta_title?: string;
            /** @description Meta description. */
            meta_description?: string;
            /** @description Meta - keywords. */
            meta_keywords?: string;
            /** @description URL address */
            url?: string;
            /** @description Link target attribute: !_self - open on the same page, !_blank - open in a new page. */
            href_target?: "_self" | "_blank";
            sort?: {
                /** @description Default product list view. */
                view?: "normal" | "list" | "gallery";
                /** @description Sort by. */
                sort_by?: "date" | "priority" | "priorityname" | "name" | "price";
                /** @description Sort order. */
                sort_order?: "ASC" | "DESC";
            }[];
            display_limit?: {
                /** @description Default product list view. */
                view?: "normal" | "list" | "gallery";
                /** @description Limit. */
                limit?: number;
            }[];
            /** */
            default_view?: "normal" | "list" | "gallery";
            /** @description Headline name. Leaving this value empty will automatically generate name basing on a name in menu. */
            headline_name?: string;
            /** @description Display by default nested elements. n - no, y - yes. */
            expand?: "n" | "y";
            /** @description Element of the menu hidden from the clients: n - no, y - yes. */
            hidden?: "n" | "y";
            /** @description After clicking on the element in the menu:: expand - Display subelements of the menu if any available, if not - create, reload - reload the page and open. */
            action?: "reload" | "expand";
            /** @description Element "show all" is:: products_list - link to the list of products, navigation_site - link to the "Navigation" page. */
            display_all_type?: "products_list" | "navigation_site";
            /** @description Display element "show all": n - no, y - yes. */
            display_all?: "n" | "y";
            /** @description Disable changing "sort by" for customers: n - no, y - yes. */
            allow_sort_change?: "n" | "y";
            /** @description Disable possibility of changing the number of displayed products on the page by customers : n - no, y - yes. */
            allow_limit_change?: "n" | "y";
            /** @description Graphics in menu: n - no, y - yes. */
            node_gfx?: "n" | "y";
            /** @description Type of graphics - When the cursor is on the link: img - Image (one size for computers, tablets and smartphones, not recommended), img_rwd - Image (three sizes for RWD). */
            gfx_active_type?: "img" | "img_rwd";
            /** @description Type of graphics - When the cursor is outside link: img - Image (one size for computers, tablets and smartphones, not recommended), img_rwd - Image (three sizes for RWD). */
            gfx_inactive_type?: "img" | "img_rwd";
            /** @description Type of graphics - When the link is opened: img - Image (one size for computers, tablets and smartphones, not recommended), img_rwd - Image (three sizes for RWD). */
            gfx_omo_type?: "img" | "img_rwd";
            /** @description Graphic on the "navigation" page. */
            gfx_nav?: {
                /** @description Graphic encoded with Base64 */
                base64?: string;
                /** @description Graphic format */
                format?: "jpg" | "jpeg" | "png" | "gif" | "svg" | "webp";
            };
            /** @description Graphic - When the cursor is on the link. */
            gfx_active?: {
                /** @description Graphic encoded with Base64 */
                base64?: string;
                /** @description Graphic format */
                format?: "jpg" | "jpeg" | "png" | "gif" | "svg" | "webp";
            };
            /** @description Graphic - When the cursor is on the link - Desktop. */
            gfx_active_desktop?: {
                /** @description Graphic encoded with Base64 */
                base64?: string;
                /** @description Graphic format */
                format?: "jpg" | "jpeg" | "png" | "gif" | "svg" | "webp";
            };
            /** @description Graphic - When the cursor is on the link - Tablet. */
            gfx_active_tablet?: {
                /** @description Graphic encoded with Base64 */
                base64?: string;
                /** @description Graphic format */
                format?: "jpg" | "jpeg" | "png" | "gif" | "svg" | "webp";
            };
            /** @description Graphic - When the cursor is on the link - Mobile. */
            gfx_active_mobile?: {
                /** @description Graphic encoded with Base64 */
                base64?: string;
                /** @description Graphic format */
                format?: "jpg" | "jpeg" | "png" | "gif" | "svg" | "webp";
            };
            /** @description Graphic - When the cursor is outside link. */
            gfx?: {
                /** @description Graphic encoded with Base64 */
                base64?: string;
                /** @description Graphic format */
                format?: "jpg" | "jpeg" | "png" | "gif" | "svg" | "webp";
            };
            /** @description Graphic - When the cursor is outside link - Desktop. */
            gfx_inactive_desktop?: {
                /** @description Graphic encoded with Base64 */
                base64?: string;
                /** @description Graphic format */
                format?: "jpg" | "jpeg" | "png" | "gif" | "svg" | "webp";
            };
            /** @description Graphic - When the cursor is outside link - Tablet. */
            gfx_inactive_tablet?: {
                /** @description Graphic encoded with Base64 */
                base64?: string;
                /** @description Graphic format */
                format?: "jpg" | "jpeg" | "png" | "gif" | "svg" | "webp";
            };
            /** @description Graphic - When the cursor is outside link - Mobile. */
            gfx_inactive_mobile?: {
                /** @description Graphic encoded with Base64 */
                base64?: string;
                /** @description Graphic format */
                format?: "jpg" | "jpeg" | "png" | "gif" | "svg" | "webp";
            };
            /** @description Graphic - When the link is opened. */
            gfx_onmouseover?: {
                /** @description Graphic encoded with Base64 */
                base64?: string;
                /** @description Graphic format */
                format?: "jpg" | "jpeg" | "png" | "gif" | "svg" | "webp";
            };
            /** @description Graphic - When the link is opened - Desktop. */
            gfx_omo_desktop?: {
                /** @description Graphic encoded with Base64 */
                base64?: string;
                /** @description Graphic format */
                format?: "jpg" | "jpeg" | "png" | "gif" | "svg" | "webp";
            };
            /** @description Graphic - When the link is opened - Tablet. */
            gfx_omo_tablet?: {
                /** @description Graphic encoded with Base64 */
                base64?: string;
                /** @description Graphic format */
                format?: "jpg" | "jpeg" | "png" | "gif" | "svg" | "webp";
            };
            /** @description Graphic - When the link is opened - Mobile. */
            gfx_omo_mobile?: {
                /** @description Graphic encoded with Base64 */
                base64?: string;
                /** @description Graphic format */
                format?: "jpg" | "jpeg" | "png" | "gif" | "svg" | "webp";
            };
            /** @description Add a canonical link that points to the parent menu item: n - no, y - yes. */
            canonical_to_parent?: "n" | "y";
            /** @description Meta robots index settings: default - automatically generate, index - index, noindex - noindex. */
            meta_robots_index?: "default" | "index" | "noindex";
            /** @description Meta robots follow settings: default - automatically generate, follow - follow, nofollow - nofollow. */
            meta_robots_follow?: "default" | "follow" | "nofollow";
        }[];
    }[];
    /** @description Settings. */
    settings?: {
        /** @description Default: "\". */
        textid_separator?: string;
    };
};

export type PostPaymentsRepaymentParams = {
    /** @description Returns ID. */
    source_id: number;
    /** @description Defines payment category. For the payments regarding returns, enter 'return'. */
    source_type: string;
    /** @description Refund value. */
    value: number;
    /** @description Payment method ID. Check getPaymentForms. */
    payment_form_id: number;
    /** @description Number of a bank account to which a payment is sent. */
    account?: string;
    /** @description Customer account. */
    client_account?: string;
    /** @description Other. */
    other?: {
        /** @description Payment system. */
        system?: number;
        /** @description Number. */
        number?: string;
        /** @description Month. */
        month?: number;
        /** @description Year. */
        year?: number;
        /** @description Security code. */
        securityCode?: string;
        /** @description Name. */
        name?: string;
    };
};

export type PostResponsibilityEntitiesParams = {
    entities: {
        /** @description Identificator of the entity. */
        id?: number;
        /** @description Short name/code. */
        code: string;
        /** @description Full name. */
        name: string;
        /** @description E-mail address. */
        mail: string;
        /** @description Street. */
        street: string;
        /** @description Building number. */
        number?: number | null;
        /** @description Apartment number. */
        subnumber?: number | null;
        /** @description Zipcode. */
        zipcode: string;
        /** @description City. */
        city: string;
        /** @description 2-letter ISO country code. */
        country: string;
        /** @description Phone number. */
        phone?: string | null;
        /** @description Additional description. */
        description?: string | null;
        /** @description URL to contact page. */
        url?: string | null;
    }[];
    /** @description Type of entity */
    type: "producer" | "person";
};

export type PutProductsCategoriesParams = {
    /** @description List of categories in which sought products are present. */
    categories: {
        /** @description Category id. */
        id: number;
        /** @description Parent category ID. */
        parent_id?: number;
        /** @description Category priority. Value from 1 to 19. */
        priority?: number;
        /** @description Operation code. Allowed values. "add" - adds new category, "edit" - edits existing category, "del" - deletes existing category. */
        operation?: string;
        lang_data?: {
            /** @description Language code. Codes are compliant with ISO-639-3 standard. */
            lang_id?: string;
            /** @description Category singular name. */
            singular_name?: string;
            /** @description Category plural name. */
            plural_name?: string;
        }[];
    }[];
};

export type SearchProductsParams = {
    dispatchSettings?: {
        enabled?: boolean;
        shippingSettings?: {
            /** */
            codDisabled?: "true" | "false";
            /** */
            dvpOnly?: "true" | "false";
            /** */
            insuranceOnly?: "true" | "false";
            atypicalSize?: boolean;
            /** @description Exclusion from the Smile service */
            excludeSmileService?: boolean;
            /** @description List of courier services which cannot be used to ship this product. IDs couriers */
            disallowedCouriers?: number[];
        };
        freeShippingSettings?: {
            /** @description Edition mode */
            mode?: "no" | "onlyProduct" | "wholeBasket";
            /** @description Set free shipping for the payment method only  */
            availablePaymentForms?: {
                prepaid?: boolean;
                /** @description Cash on delivery. */
                cashOnDelivery?: boolean;
                tradeCredit?: boolean;
            };
            /** @description List of courier services for which shipping is free. IDs couriers */
            availableCouriers?: number[];
            /** @description List of courier services by which the products can be sent free of charge. IDs couriers */
            availableCouriersForSingleProduct?: number[];
            /** @description List of regions with free shipment. IDs Delivery regions */
            availableRegions?: number[];
        };
        returnProductSettings?: {
            /** @description Product can be returned */
            returnOptions?: {
                enabled?: boolean;
                firm?: boolean;
                hurt?: boolean;
                detalist?: boolean;
            };
            /** */
            byOwnService?: "true" | "false";
            /** */
            byInPostSzybkieZwrotyByIAI?: "true" | "false";
        };
    };
    /** @description Element determines which products should be returned by the gate. Undeleted products are returned by default. Available values: "active" - undeleted products, "deleted" - deleted products. "in_trash" - products in the trash. */
    returnProducts?: string;
    /** @description Elements to be returned by the endpoint. By default all elements are returned Available values: * lang_data * adding_time, * deleted, * code, * note, * taxcode, * inwrapper, * sellby_retail, * sellby_wholesale, * producer_id, * producer_name, * iaiCategoryId, * iaiCategoryName, * iaiCategoryPath, * category_id, * category_name, * size_group_id, * modification_time, * currency, * currency_shop, * bestseller, * new_product, * retail_price, * wholesale_price, * minimal_price, * automatic_calculation_price, * pos_price, * strikethrough_retail_price, * strikethrough_wholesale_price, * last_purchase_price, * purchase_price_net_average, * purchase_price_net_last, * purchase_price_gross_average, * purchase_price_gross_last, * vat, * vat_free, * rebate, * hotspots_zones, * profit_points, * points, * weight, * export_to_pricecomparers, * export_to_amazon_marketplace, * enable_in_pos, * complex_notes, * available_profile, * traits, * parameters, * version_data, * advance, * promotion, * discount, * distinguished, * special, * visible, * persistent, * priority, * shops_mask, * icon, * icon_for_auctions, * icon_for_group, * pictures, * unit, * warranty, * series, * products_associated, * shops, * quantities, * sizes_attributes, * shops_attributes, * auction_prices, * price_comparers_prices, * deliverer, * sizes, * size_group_name, * pictures_count, * product_type, * price_changed_time, * quantity_changed_time, * deliverer_name, * available_profile_name, * availability_management_type, * sum_in_basket, * menu, * auction_settings, * bundle, * sizeschart_id, * sizeschart_name, * serialnumbers, * producer_codes_standard, * javaScriptInTheItemCard, * productAuctionDescriptionsData, * priceFormula, * productIndividualDescriptionsData, * productIndividualUrlsData, * productServicesDescriptionsData, * cnTaricCode, * productIsGratis, * dimensions, * responsibleProducerCode, * responsiblePersonCode */
    returnElements?: string[];
    /** @description Product availability. Available values: "y" - available, "n" - unavailable. */
    productIsAvailable?: string;
    /** @description Product visibility in store Available values: "y" - Visible, "n" - Invisible. */
    productIsVisible?: string;
    /** @description Product group ID */
    productVersionId?: number;
    /** @description Promoted product. Available values: "y" - promoted, "n" - not promoted. */
    productInPromotion?: string;
    /** @description Product on sale. Available values: "y" - on sale, "n" - not on sale. */
    productInDiscount?: string;
    /** @description Distinguished product. Available values: "y" - distinguished, "n" - not distinguished. */
    productInDistinguished?: string;
    /** @description Special product. Available values: "y" - #!specjalny!#, "n" - not special. */
    productInSpecial?: string;
    /** @description Product available for points. Available values: "y" - Available for points, "n" - Unavailable for points. */
    productInForPointsSelling?: string;
    /** @description Observed product. Available values: "Y" - observed, "n" - not observed. */
    productIsObservedByClients?: string;
    /** @description Element determines if default product (with 0 ID, contains settings of newly added products) should be omitted Available values: "y" - omits default product, "n" - allows to download default product. */
    skipDefaultProduct?: string;
    /** @description The item specifies whether promotional prices are to be shown in price nodes. Available values: "y" - show promotional prices, "n" - do not show promotional prices. (default value) */
    showPromotionsPrices?: string;
    /** @description List of categories in which sought products are present. */
    categories?: {
        /** @description Category id */
        categoryId?: number;
        /** @description Category name */
        categoryName?: string;
    }[];
    /** @description List of manufacturers assigned to sought products. */
    producers?: {
        /** @description Brand ID */
        producerId?: number;
        /** @description Brand name */
        producerName?: string;
    }[];
    /** @description List of sought products. This parameter can be used, when there have been no other parameter entered productIndexes. */
    productParams?: {
        /** @description Product IAI code */
        productId?: number;
        /** @description External product system code */
        productCode?: string;
        /** @description Product name. */
        productName?: string;
        /** @description External product system code for size. */
        productSizeCodeExternal?: string;
        /** @description Producer code */
        productProducerCode?: string;
        /** @description The product is free of charge. Possible values: "y" - is free of charge, "n" - is not free of charge. */
        productIsGratis?: string;
    }[];
    /** @description List of sought products by indexes. */
    productIndexes?: {
        /** @description One of the unique, indexed product codes (IAI code / External system code / Producer code) */
        productIndex?: string;
    }[];
    /** @description Data of stores product is assigned to. */
    productShops?: {
        /** @description Bit mask of shop IDs. Mask for indicated store is calculated on basis of following formula: 2^(store_ID - 1). If the product should be available in more than one shop, the masks should be summed up. */
        shopsMask?: number;
        /** @description Shop Id */
        shopId?: number;
    }[];
    /** @description List of special offers, sought products are assigned to. */
    productPromotionsIds?: number[];
    /** @description Settings concerning narrowing list of products found by date. */
    productDate?: {
        /** @description Date type. Allowed values "added" - #!dataDodaniaProduktu!#, "finished" - date of running out of product, "resumed" - date of resuming product, "modified" - date of last modification of product, "quantity_changed" - date of last product stock quantity modification, "price_changed" - date of last price change, "modified_and_quantity_changed" - date of last modification and stock quantity change. */
        productDateMode?: string;
        /** @description Starting date in the YYYY-MM-DD format */
        productDateBegin?: string;
        /** @description End date in the YYYY-MM-DD format */
        productDateEnd?: string;
    };
    /** @description Parameters */
    productParametersParams?: {
        /** @description Parameters group name */
        parameterNames?: string[];
        /** @description Properties IDs */
        parameterValuesIds?: number[];
        /** @description Parameters name */
        parameterValuesNames?: string[];
        /** @description Parameters group ID */
        productParameterIds?: {
            /** @description Set properties groups ID. */
            productParameterIdsEnabled?: number[];
            /** @description Unset properties groups ID. */
            productParameterIdsDisabled?: number[];
        };
    }[];
    /** @description Series, sought products are assigned to. */
    productSeriesParams?: {
        /** @description ID of series, to which product belongs. */
        seriesId?: number;
        /** @description Name of series, to which the product belongs, visible in panel. */
        seriesPanelName?: string;
        /** @description Names of series in indicated language visible in shop. */
        seriesDescriptionsLangData?: {
            /** @description Name of series in indicated language */
            seriesName?: string;
            /** @description Language ID */
            langId?: string;
        }[];
    }[];
    /** @description List of units of measure assigned to sought products. */
    productUnits?: {
        /** @description Product unit of measure ID. */
        unitId?: number;
        /** @description Product unit of measure name. */
        unitName?: string;
        /** @description Unit of measure precision. */
        unitPrecision?: number;
    }[];
    /** @description Narrowing list of products by set warranties. */
    productWarranties?: {
        /** @description Product warranty ID. */
        warrantyId?: number;
        /** @description Name of warranty for indicated product. */
        warrantyName?: string;
    }[];
    /** @description Suppliers, sought products are assigned to. */
    deliverersIds?: number[];
    /** @description Product contains text (searches in short and long description). */
    containsText?: string;
    /** @description Product code or it's part (based on producer's code, external product system code and code that is visible on a product card). Search is accesible only with available products. */
    containsCodePart?: string;
    /** @description Product availability in stocks */
    productAvailableInStocks?: {
        /** @description Determines whether availability in stocks has been set. Available values: "y" - is available in stocks, "n" - unavailable in stocks. */
        productIsAvailableInStocks?: string;
        /** @description Narrowing list to stocks sought trough Empty list concerns all stocks. */
        productAvailableInStocksIds?: number[];
    };
    /** @description Product availability on auctions */
    productAvailableInAuctions?: {
        /** @description Determines whether availability on auctions has been set. Available values: "y" - is available on auctions, "n" - is not available on auctions. */
        productIsAvailableInAuctions?: string;
        /** @description Narrow list of auction accounts sought through. */
        productAvailableInAuctionsAccountsIds?: number[];
    };
    /** @description Page with results number. Numeration starts from 0 */
    resultsPage?: number;
    /** @description Number of results on page. Value from 1 to 100 */
    resultsLimit?: number;
    /** @description Possibility of sorting returned list */
    ordersBy?: {
        /** @description Name of field, list will be sorted by. Available values: "id" - product ID, "name" - Product name, "code" - Product code, "product_sizecode" - External system code, "code_producer" - Producer code, "retail_price" - Retail price of the product, "pos_price" - price for POS, "vat" - Value of VAT, "wholesale_price" - wholesale price, "minimal_price" - Minimal price, "pictures_count" - number of product photos, "auction_name" - product name for auction sites, "pricecomparer_name" - Product name for price comparison websites, "version_name" - Name of the good in the group, "series_name" - Name of the batch, "category_name" - Category name, "deliverer_name" - Supplier name, "adding_time" - Date of entry, "modification_time" - date modified, "price_changed_time" - Date of last price change, "quantity_changed_time" - Date of modification of stock levels, "currency" - Currency DEPRECATED. This parameter is deprecated, "currency_shop" - Currency, "taxcode" - PKWiU [PCPandS], "meta_title" - Products meta titles, "meta_description" - Products meta description, "meta_keywords" - Products meta keywords, "suggested_price" - Recommended price. "observed_clients" - Number of visitors, who signed up to re-availability notifications "observed_time" - Average time of waiting for availability notification "wishes_clients" - Customers, who added product to favorites "wishes_time" - Average number of days, product is in favorites */
        elementName?: string;
        /** @description Determines sorting direction. Available values: "ASC" - ascending, "DESC" - descending. */
        sortDirection?: string;
    }[];
    /** @description Language ID that allows to search and return data in chosen language. This parameter is optional. If it's lacking, she search process unfolds in all available languages. */
    productSearchingLangId?: string;
    /** @description Currency ID allowing to search and browse products in given currency. This parameter is optional, when it's lacking, the search process unfolds in all available currencies. */
    productSearchingCurrencyId?: string;
    /** @description Currency ID allowing for returning all product prices in an indicated currency */
    returnPricesCurrency?: string;
    /** @description Annotation contains text. */
    productHasNote?: string;
    /** @description Product visibility in export to price comparison and marketplaces. Available values: "y" - Visible, "selected" - Selected, "assign_selected" - Enable the visibility of the product in the export to price comparison sites passed in the priceComparisonSites node. Price comparison sites previously assigned to the commodity will be retained, "unassign_selected" - Disable product visibility in exports to price comparison sites passed in the priceComparisonSites node, "n" - invisible. */
    productInExportToPriceComparisonSites?: string;
    /** @description Visibility of an item in an export to Amazon Marketplace. Available values: "y" - Visible, "selected" - Visible on selected regional services, "n" - invisible. */
    productInExportToAmazonMarketplace?: string;
    /** @description List of Amazon regional sites to which the product is exported (only in case of "selected" option) */
    selectedAmazonMarketplacesList?: string[];
    /** @description Product is bestseller. Available values: "n" - no, "y" - yes. */
    productInBestseller?: string;
    /** @description Product is new. Available values: "y" - is new, "n" - is not new. */
    productInNew?: string;
    /** @description Shops */
    searchByShops?: {
        /** @description Determine data search method on basis of options set for stores. Available values: "in_one_of_selected" - in one of indicated stores, "in_all_of_selected" - in all indicated stores, This parameter is optional. When it's lacking, search is performed by option: in one of indicated stores (in_one_of_selected). */
        searchModeInShops?: string;
        /** @description Bit mask of shop IDs. Mask for indicated store is calculated on basis of following formula: 2^(store_ID - 1). If the product should be available in more than one shop, the masks should be summed up. */
        shopsMask?: number;
        /** @description List of stores IDs When mask is determined, this parameter is omitted. */
        shopsIds?: number[];
    };
    /** @description Price range for sought products. */
    productSearchPriceRange?: {
        /** @description Determines price type for indicated values. Available values: "retail_price" - Retail price of the product, "wholesale_price" - Wholesale price of the product, "minimal_price" - Product minimal price, "pos_price" - price for POS, "last_purchase_price" - Last purchase price. */
        productSearchPriceMode?: string;
        /** @description Minimal price for product. */
        productSearchPriceMin?: number;
        /** @description Maximum price for product. */
        productSearchPriceMax?: number;
        /** @description Shop Id */
        shopId?: number;
    };
    /** @description VAT value for sought products */
    productVatRates?: number[];
    /** @description Is product VAT-free Allowed values "y" - yes, "n" - no. */
    productIsVatFree?: string;
    /** @description Product has defined wholesale price. Available values: "y" - has wholesale price, "n" - does not have wholesale price. */
    productHasWholesalePrice?: string;
    /** @description Product visible even though out of stock Available values: "y" - visible even though out of stock, "n" - not visible when out of stock. */
    productInPersistent?: string;
    /** @description Settings of products returned with variants All products with variants are returned by default Available values: version_all - returns all variants, version_main - returns only main variant. */
    returnProductsVersions?: string;
    /** @description Do You wish to sum up the products in the basket as a one order? Available values: "y" - yes, "n" - no. */
    productInSumInBasket?: string;
    /** @description Product type. Allowed values: "product_item" - Goods, "product_packaging" - packaging, "product_bundle" - set. "product_collection" - collection. "product_service" - service. "product_virtual" - virtual product. "product_configurable" - configurable product. */
    productType?: {
        /** @description Should products be returned on list. By default this parameter is set on true. */
        productTypeInItem?: boolean;
        /** @description Should sets be returned on list. By default this parameter is set on true. */
        productTypeInBundle?: boolean;
        /** @description Should collections be returned. By default this parameter is set on true. */
        productTypeInCollection?: boolean;
        /** @description Should packagings be returned on list. By default this parameter is set on true. */
        productTypeInPackaging?: boolean;
        /** @description Should services be returned. By default this parameter is set on true. */
        productTypeInService?: boolean;
        /** @description Should virtuals be returned. By default this parameter is set on true. */
        productTypeInVirtual?: boolean;
        /** @description Should configurable be returned. By default this parameter is set on true. */
        productTypeInConfigurable?: boolean;
    };
    /** @description An array of menu elements */
    productMenuItems?: {
        /** @description An array of IDs */
        menuItemsIds?: number[];
        /** @description An array of text IDs */
        menuItemsTextIds?: {
            /** @description Menu element text identifier. Example: "item1\item2\item3". */
            menuItemTextId?: string;
            /** @description Shop Id */
            shopId?: number;
            /** @description ID of the menu zone displayed in the mask */
            menuId?: number;
            /** @description The separator separates the individual elements of a text id. Default: "\". */
            menuItemTextIdSeparator?: string;
        }[];
    };
    /** @description Warehouse location ID */
    productLocationId?: number;
    /** @description Warehouse location full path Use a backslash (\) as a separator, for example:  M1\Section name\Location name If location_id parameter is provided, the full warehouse location path will not be taken into account */
    productLocationTextId?: string;
    /** @description Return all size attributes regardless of whether product prices are the same as the base price or if they differ from it. Available values: 1 - all size attributes will be returned; 0 - only attributes of those sizes, where the prices will be different from the base price (default value) will be returned. */
    alwaysReturnProductShopSizesAttributes?: boolean;
    /** @description Returns reservation information regardless of inventory levels */
    returnEmptyStocksWithReservation?: boolean;
    /** @description Data for operations on individual photos */
    picturesData?: {
        /** @description Shop Id */
        shopId?: number;
        /** @description External service identifier */
        serviceId?: number;
    };
    /** @description Responsible producer code */
    responsibleProducerCode?: string;
    /** @description Responsible person code */
    responsiblePersonCode?: string;
};

export type SearchOrdersParams = {
    /** @description Prepayment status. Status list: "unpaid" - not paid, "restored" - returned, "waiting" - not registered. */
    orderPrepaidStatus?: string;
    /** @description Order status. Status list: "new" - not handled, "finished" - completed, "false" - false, "lost" - lost, "on_order" - in progress, "packed" - being picked, "ready" - ready, "canceled" - canceled by customer, "payment_waiting" - awaiting payment, "delivery_waiting" - awaiting delivery, "suspended" - on hold, "joined" - merged, "finished_ext" - handled in FA application. */
    ordersStatuses?: string[];
    /** @description Order statusses ids. */
    ordersStatusesIds?: number[];
    /** */
    shippmentStatus?: "all" | "received" | "non-received";
    /** @description Shipping companies (packages deliverers). */
    couriersName?: string[];
    /** @description Courier service identifiers */
    couriersId?: number[];
    /** @description Order payment method. Allowed values. "cash_on_delivery" - cash on delivery, "prepaid" - prepayment, "tradecredit" - Trade credit. */
    orderPaymentType?: string;
    withMissingSalesDocuments?: string[];
    /** @description Order type. Allowed values. "retail" - retail order, "wholesale" - wholesale order (can be added only by customer with wholesale account registered). Default value:: "retail" */
    orderType?: "wholesale" | "retail" | "dropshipping" | "deliverer";
    /** */
    dropshippingOrderStatus?: "all" | "finished" | "canceled" | "notCanceled";
    /** @description Orders IDs. */
    ordersIds?: string[];
    /** @description Order serial numbers. */
    ordersSerialNumbers?: number[];
    /** @description Customer data. */
    clients?: {
        /** @description Customer's login. */
        clientLogin?: string;
        /** @description Unique client's number. */
        clientId?: number;
        /** @description Customer's first name. */
        clientFirstName?: string;
        /** @description Customer's last name. */
        clientLastName?: string;
        /** @description Customer's city. */
        clientCity?: string;
        /** @description E-mail address. */
        clientEmail?: string;
        /** @description Parameter can be used to search for orders assigned to customer with VAT number. Available values: "y" - customer has VAT number, "n" - customer does not have VAT number. */
        clientHasTaxNumber?: string;
        /** @description Parameter allows to choose, by which data orders should be searched. Includes city, firstname, lastname. Available values: "billing_data" - search by billing data - default, "delivery_data"- search by delivery data, "billing_delivery_data" - search by billing and delivery data. */
        clientSearchingMode?: string;
        /** @description Customer's company name. */
        clientFirm?: string;
        /** @description Customer Tax no. */
        clientNip?: string;
        /** @description Country ID in accordance with ISO-3166. */
        clientCountryId?: string;
        /** @description Region name takes priority over clientCountryId. */
        clientCountryName?: string;
    }[];
    /** @description Ranges of dates or serial numbers. */
    ordersRange?: {
        /** @description Data for date range */
        ordersDateRange?: {
            /** @description Type of date according to the orders are searched. Type of date listing: "add" - date of order was placed, "modified" - date of order modification, "dispatch" - date or order dispatch, "payment" - date of order payment, "last_payments_operation" - date of last payment operation, "declared_payments" - date of last payment. */
            ordersDateType?: "add" | "modified" | "dispatch" | "payment" | "last_payments_operation" | "declared_payments";
            /** @description Date chart according to which orders are searched. Type of date listing: "add" - date of order was placed, "modified" - date of order modification, "dispatch" - date or order dispatch, "payment" - date of order payment. "last_payments_operation" - date of last payment operation, "declared_payments" - date of last payment. */
            ordersDatesTypes?: {
                /** */
                ordersDatesType?: "add" | "modified" | "dispatch" | "payment" | "last_payments_operation" | "declared_payments";
            }[];
            /** @description Beginning date in YYYY-MM-DD HH:MM:SS format. */
            ordersDateBegin?: string;
            /** @description Ending date in YYYY-MM-DD HH:MM:SS format. */
            ordersDateEnd?: string;
        };
        /** @description Data for serial number range. */
        ordersSerialNumberRange?: {
            /** @description Starting number of serial numbers range for sought products. */
            ordersSerialNumberBegin?: number;
            /** @description Ending number for serial number range. */
            ordersSerialNumberEnd?: number;
        };
    };
    /** @description Order source data. */
    orderSource?: {
        /** @description Bit mask of shop IDs. Mask for indicated store is calculated on basis of following formula: 2^(store_ID - 1). If the product should be available in more than one shop, the masks should be summed up. */
        shopsMask?: number;
        /** @description List of stores IDs When mask is determined, this parameter is omitted. */
        shopsIds?: number[];
        /** @description Object used for order searching based on auctions' parameters. */
        auctionsParams?: {
            /** @description Auction sites names. Auction sites listing: "allegro" - Allegro.pl, "testwebapi" - Allegro.pl test site, "ebay" - eBay. */
            auctionsServicesNames?: string[];
            /** @description Auctions' numbers. */
            auctionsItemsIds?: number[];
            /** @description Auction sites accounts' data. */
            auctionsAccounts?: {
                /** @description Auction service account Id . */
                auctionsAccountId?: number;
                /** @description External marketplace service account name (which the listing was created from). */
                auctionsAccountLogin?: string;
            }[];
            /** @description Client's account on auction site data. */
            auctionsClients?: {
                /** @description Account ID on auction site. */
                auctionClientId?: string;
                /** @description Account login on auction site. */
                auctionClientLogin?: string;
            }[];
        };
    };
    /** @description Products list. */
    products?: {
        /** @description Product IAI code */
        productId?: number;
        /** @description Product name. */
        productName?: string;
        /** @description Size identifier */
        sizeId?: string;
        /** @description Size name */
        sizePanelName?: string;
    }[];
    /** @description Page with results number. Numeration starts from 0 */
    resultsPage?: number;
    /** @description Number of results on page. Value from 1 to 100 */
    resultsLimit?: number;
    /** @description Customer asked for invoice. List of parameters: "y" - yes (paper invoicing ), "e" - yes (electronic invoicing ), "n" - no. */
    clientRequestInvoice?: string;
    /** @description Information on consignments. */
    packages?: {
        /** @description Consignments numbers. */
        packagesNumbers?: string[];
        /** @description Does order have consignment number assigned. Available values: "y" - yes, "n" - no. */
        orderHasPackageNumbers?: string;
        /** @description Multipack order. Available values: "y" - yes, "n" - no. */
        hasMultiPackages?: "y" | "n";
    };
    /** @description Stock quantities data. */
    stocks?: {
        /** @description Stock ID */
        stockId?: number;
    }[];
    /** @description Used discount codes data. */
    campaign?: {
        /** @description Campaign ID. */
        campaignId?: number;
        /** @description Discount codes. */
        discountCodes?: string[];
    };
    /** @description Loyalty points. */
    loyaltyPointsMode?: "all" | "given" | "taken" | "given_or_taken" | "given_and_taken" | "not_given_nor_taken";
    /** @description Order handler. */
    orderOperatorLogin?: string;
    /** @description Order picker. */
    orderPackingPersonLogin?: string;
    /** @description Possibility of sorting returned list */
    ordersBy?: {
        /** @description Name of field, list will be sorted by. Available values: "id" - product ID, "name" - Product name, "code" - Product code, "product_sizecode" - External system code, "code_producer" - Producer code, "retail_price" - Retail price of the product, "pos_price" - price for POS, "vat" - Value of VAT, "wholesale_price" - wholesale price, "minimal_price" - Minimal price, "pictures_count" - number of product photos, "auction_name" - product name for auction sites, "pricecomparer_name" - Product name for price comparison websites, "version_name" - Name of the good in the group, "series_name" - Name of the batch, "category_name" - Category name, "deliverer_name" - Supplier name, "adding_time" - Date of entry, "modification_time" - date modified, "price_changed_time" - Date of last price change, "quantity_changed_time" - Date of modification of stock levels, "currency" - Currency DEPRECATED. This parameter is deprecated, "currency_shop" - Currency, "taxcode" - PKWiU [PCPandS], "meta_title" - Products meta titles, "meta_description" - Products meta description, "meta_keywords" - Products meta keywords, "suggested_price" - Recommended price. "observed_clients" - Number of visitors, who signed up to re-availability notifications "observed_time" - Average time of waiting for availability notification "wishes_clients" - Customers, who added product to favorites "wishes_time" - Average number of days, product is in favorites */
        elementName?: string;
        /** @description Determines sorting direction. Available values: "ASC" - ascending, "DESC" - descending. */
        sortDirection?: string;
    }[];
    /** @description Method of searching orders by handler. */
    searchingOperatorTypeMatch?: "no_assignment" | "no_empty" | "empty";
    /** @description Orders with the exceeded date of shipment. */
    ordersDelayed?: "y" | "n";
    /** @description Combine the components of the set into one item */
    showBundles?: boolean;
    /** @description The order ID of the external service */
    orderExternalId?: string;
    /** @description Order currency */
    orderCurrency?: string;
};

export type SearchProductsParametersParams = {
    /** @description List of identifiers */
    ids?: number[];
    /** @description Element text ID - can be entered instead of "id". */
    textIds?: {
        /** @description Language ID */
        languageId?: string;
        /** @description Text value */
        value?: string;
    }[];
    /** @description List of languages */
    languagesIds?: string[];
    /** @description Whether to return a list of parameter value IDs */
    parameterValueIds?: boolean;
    /** @description Page with results number. Numeration starts from 0 */
    resultsPage?: number;
    /** @description Number of results on page. Value from 1 to 100 */
    resultsLimit?: number;
};

export type SearchProductsDeliveryTimeParams = {
    /** @description Stock ID */
    stockId?: number;
    /** @description Should products be prepared for personal collection? */
    isCollectionInPerson?: boolean;
    products: {
        /** @description Product Id */
        productId?: number;
        /** @description Size identifier */
        sizeId?: string;
        /** @description Size name */
        sizePanelName?: string;
        /** @description Product IAI code */
        productIndex?: string;
        /** @description Product quantity. */
        productSizeQuantity?: number;
    }[];
};

export type SearchPackagesParams = {
    /** @description Consignments numbers. */
    deliveryPackageNumbers?: string[];
    /** @description Element, package is assigned to */
    events: {
        /** @description Type. */
        eventType?: "order" | "rma" | "return";
        /** @description IDs. */
        eventsIds?: number[];
    }[];
    /** @description Return parcel labels. */
    returnLabels?: boolean;
};

export type SearchClientsCrmParams = {
    /** @description Customer's login. */
    clientLogin?: string;
    /** @description Determines, whether client is a wholesaler. */
    clientIsWholesaler?: "yes" | "no";
    /** @description Country ID in accordance with ISO-3166. */
    clientCountryId?: string;
    /** @description Language ID */
    langId?: string;
    /** @description Customer service representative. */
    clientCustomerServiceRepresentativeLogin?: string;
    /** @description Customer group number */
    clientDiscountGroupNumber?: number;
    /** @description Date range of customer registrations */
    clientRegistrationDate?: {
        /** @description Start date (YYYY-MM-DD). */
        clientRegistrationDateBegin?: string;
        /** @description End date (YYYY-MM-DD). */
        clientRegistrationDateEnd?: string;
    };
    /** @description Date of last customer login (YYYY-MM-DD) */
    clientLastLoginDate?: {
        /** @description Start date (YYYY-MM-DD). */
        clientLastLoginDateBegin?: string;
        /** @description End date (YYYY-MM-DD). */
        clientLastLoginDateEnd?: string;
    };
    /** @description Customer type, possible values: - person - if client sex is not determined, - person_male - when client is a male, - person_female - when a customer is a woman, - firm - when client is company. */
    clientType?: "person" | "person_male" | "person_female" | "firm";
    /** @description Information about the loyalty program possible values: - yes_voucher - when customers are in a loyalty program and have only used vouchers, - yes_voucher_cash - when customers are in a loyalty program and have only used vouchers or cash deposits, - yes_clients, - yes_orders - when customers are in the loyalty program and have made at least one order, - no - when customers are in the loyalty program, - banned - when customers are blocked. */
    clientAffiliateProgram?: {
        /** @description Does the customer participate in the loyalty program: - yes_voucher_cash, - yes_voucher, - no, - banned. */
        clientAffiliateProgramValue?: "yes_voucher" | "yes_voucher_cash" | "yes_clients" | "yes_orders" | "no" | "banned";
    }[];
    /** @description Permission to E-mail Newsletter. */
    newsletterEmailApproval?: string;
    /** @description Permission to SMS Newsletter. */
    newsletterSmsApproval?: string;
    /** @description Shops */
    searchByShops?: {
        /** @description How to match shops. - one_of_selected - searches for customers assigned to at least one shop present in shopsList. - exactly_selected - searches for customers assigned to all shops present in shopsList. */
        searchModeInShops?: "one_of_selected" | "exactly_selected";
        /** @description List of stores IDs When mask is determined, this parameter is omitted. */
        shopsIds?: number[];
    };
    /** @description Loyalty cards: */
    clientLoyaltyCard?: {
        /** @description Does the customer have a loyalty card. - yes_active, - yes_not_active, - no. */
        clientHasLoyaltyCard?: "yes_active" | "yes_not_active" | "no";
        /** @description Customer loyalty card ID, omitted when has_loyalty_card = no. */
        clientLoyaltyCardId?: number;
        /** @description Customer loyalty card number, omitted when has_loyalty_card = no. */
        clientLoyaltyCardNumber?: string;
    };
    /** @description External system code. */
    clientCodeExternal?: string;
    /** @description External system codes list. */
    clientCodesExternal?: string[];
    /** @description Customer's first name. */
    clientFirstName?: string;
    /** @description Customer's last name. */
    clientLastName?: string;
    /** @description Customer Tax no. */
    clientNip?: string;
    /** @description Customer's company name. */
    clientFirm?: string;
    /** @description E-mail address. */
    clientEmail?: string;
    /** @description List of shops where a customer agreed or didn't agree to receive email newsletter. */
    newsletterEmailApprovalsData?: {
        /** @description Permission to E-mail Newsletter. */
        inNewsletterEmailApproval?: "y" | "n";
        /** @description Shop Id */
        shopId?: number;
    }[];
    /** @description List of shops where a customer agreed or didn't agree to receive sms newsletter. */
    newsletterSmsApprovalsData?: {
        /** @description Permission to SMS Newsletter. */
        inNewsletterSmsApproval?: "y" | "n";
        /** @description Shop Id */
        shopId?: number;
    }[];
    /** @description Customer loyalty card number, omitted when has_loyalty_card = no. */
    clientLoyaltyCardNumber?: string;
    /** @description Orders. */
    orders?: {
        /** @description Has the customer made an order. - yes, - no. */
        clientHasOrders?: "yes" | "no";
        /** @description Minimum order value, omitted when hasOrders = no. */
        ordersMinimalValue?: number;
        /** @description Data for serial number range. */
        ordersSerialNumberRange?: {
            /** @description Starting number of serial numbers range for sought products. */
            ordersSerialNumberBegin?: string;
            /** @description Ending number for serial number range. */
            ordersSerialNumberEnd?: string;
        };
        /** @description Date range of orders made by customers, omitted when hasOrders = no. */
        ordersAddDate?: {
            /** @description Start date (YYYY-MM-DD). */
            ordersAddDateBegin?: string;
            /** @description End date (YYYY-MM-DD). */
            ordersAddDateEnd?: string;
        };
    };
    /** @description Elements to be returned by the endpoint. By default all elements are returned */
    returnElements?: string[];
    /** @description Page with results number. Numeration starts from 0 */
    resultsPage?: number;
    /** @description Number of results on page. Value from 1 to 100 */
    resultsLimit?: number;
    /** @description Determines, if data - that will be returned - will be exactly as entered values, or values should be fragment of customer data. */
    settingsExactSearch?: boolean;
};

export type SearchClientsGiftcardsParams = {
    /** @description List of gift cards */
    giftCards?: {
        /** @description Card ID */
        id?: number;
        /** @description Card number */
        number?: string;
        /** @description Card PIN */
        pin?: string;
    }[];
    /** @description element is an element array of type searchGiftCards */
    searchGiftCards?: {
        /** @description Gift cards type ID */
        giftCardTypeId?: number;
        /** @description Name */
        name?: string;
        /** @description Notes contain */
        noteContain?: string;
        /** @description Value from */
        balanceFrom?: number;
        /** @description Value to */
        balanceTo?: number;
        /** @description Expiration date from */
        expirationDateFrom?: string;
        /** @description Expiration date to */
        expirationDateTo?: string;
        /** @description Created from */
        issueDateFrom?: string;
        /** @description Created to */
        issueDateTo?: string;
        /** @description Page with results number. Numeration starts from 0 */
        resultsPage?: number;
        /** @description Number of results on page. Value from 1 to 100 */
        resultsLimit?: number;
    };
};

export type SearchClientsNewsletterEmailParams = {
    shops?: {
        /** @description Store ID. */
        shop_id?: number;
        /** @description Have customer agreed to a newsletter. List of allowed parameters: "y" - yes, "n" - no. */
        approval?: "y" | "n";
        /** @description Is registered: y - only registered customers, n - only non-registered customers, null (argument not sent) - all. */
        registered?: "y" | "n";
    }[];
    /** @description Customer language ID. */
    language?: string;
    date?: {
        /** @description Start date (YYYY-MM-DD HH:MM:SS). */
        from?: string;
        /** @description End date (YYYY-MM-DD HH:MM:SS). */
        to?: string;
    };
    /** @description Elements to be returned by the endpoint. By default all elements are returned */
    return_elements?: string[];
    /** @description Results page number. Numbering begins at 0. Default value: 0. */
    results_page?: number;
    /** @description Maximum number of results on a single page. Default is 100. */
    results_limit?: number;
};

export type SearchOrdersOpinionsParams = {
    /** @description Review identification */
    opinion?: {
        /** @example 1 */
        id?: number;
        /** @description Customer language ID. */
        language?: string;
        confirmed?: boolean;
        /** @example host */
        host?: string;
        /** @description Shop Id */
        shopId?: number;
    };
    /** @description Orders. */
    orders?: {
        /** */
        type?: "id" | "serialNumber";
        /** @example value */
        value?: string;
    };
    /** @description Customer data. */
    clients?: {
        /** */
        type?: "id" | "login" | "codeExtern";
        /** @example value */
        value?: string;
    };
    /** @description Date range */
    dateRange?: {
        /** @example begin */
        begin?: string;
        /** @example end */
        end?: string;
    };
    /** @description Page with results number. Numeration starts from 0 */
    resultsPage?: number;
    /** @description Number of results on page. Value from 1 to 100 */
    resultsLimit?: number;
    /** @description Possibility of sorting returned list */
    ordersBy?: {
        /** @description Field name by which a list will be sorted. Available values: "date" - Date of adding an opinion, "rating" - Rating attached to opinion, "scorePositive" - Usefulness of the opinion - number of positive ratings, "scoreNegative" - Usefulness of the opinion - number of negative ratings, "modificationDatetime" - Last modification date */
        elementName?: string;
        /** @description Determines sorting direction. Available values: "ASC" - ascending, "DESC" - descending. */
        sortDirection?: string;
    }[];
};

export type SearchClientsNewsletterSmsParams = {
    shops?: {
        /** @description Store ID. */
        shop_id?: number;
        /** @description Have customer agreed to a newsletter. List of allowed parameters: "y" - yes, "n" - no. */
        approval?: "y" | "n";
        /** @description Is registered: yes - only registered customers, no - only non-registered customers, null (argument not sent) - all. */
        registered?: "y" | "n";
    }[];
    /** @description Customer language ID. */
    language?: string;
    date?: {
        /** @description Start date (YYYY-MM-DD HH:MM:SS). */
        from?: string;
        /** @description End date (YYYY-MM-DD HH:MM:SS). */
        to?: string;
    };
    /** @description Elements to be returned by the endpoint. By default all elements are returned */
    return_elements?: string[];
    /** @description Results page number. Numbering begins at 0. Default value: 0. */
    results_page?: number;
    /** @description Maximum number of results on a single page. Default is 100. */
    results_limit?: number;
};

export type PutWmsSuppliersParams = {
    suppliers: {
        /** @description Id */
        id?: number;
        /** @description Name. */
        name: string;
        /** @description e-mail address. (limit of 50 characters) */
        email?: string;
        /** @description Phone number. (limit of 20 characters) */
        phone?: string;
        /** @description Fax. (limit of 20 characters) */
        fax?: string;
        /** @description Address. (limit of 50 characters) */
        street?: string;
        /** @description ZIP / Post code. (limit of 6 characters) */
        zipCode?: string;
        /** @description Town / City. (limit of 50 characters) */
        city?: string;
        /** @description Region ID */
        country?: number;
        /** @description VAT no.. (limit of 13 characters) */
        taxCode?: string;
        /** @description Average delivery time */
        averageDeliveryTime?: {
            /** @description value */
            value?: number;
            /** @description Unit */
            unit?: "minutes" | "hours" | "days" | "immediately";
        };
        /** @description Description. (limit of 255 characters) */
        description?: string;
        /** @description Order preparation time for shipment */
        orderCompletionTime?: {
            /** @description value */
            value?: number;
            /** @description Unit */
            unit?: "minutes" | "hours" | "days" | "immediately";
        };
        /** @description Supplier working hours */
        workDays?: {
            /** @description day */
            day?: number;
            /** */
            type?: "deliverer_closed" | "deliverer_open_hours" | "deliverer_open_24h";
            /** @description from */
            from?: string;
            /** @description to */
            to?: string;
        }[];
    }[];
};

export type PutWarrantiesParams = {
    warranties: {
        /** @description Warranty ID (numeric or text based). */
        id: string;
        /** @description Name. */
        name?: string;
        /** */
        type?: "seller" | "producer";
        /** @description Warranty time. Default value 12. */
        period?: number;
    }[];
};

export type PutSystemUnitsParams = {
    units: {
        /** @description #!IdentyfikatorJednostki!# */
        id: number;
        /** @description Name in panel (limit of 30 characters) */
        nameInPanel?: string;
        /** @description Accuracy (number of places after comma) */
        precisionUnit?: number;
        /** @description Visibility */
        visible?: boolean;
        /** @description Unit names */
        descriptions?: {
            /** @description ISO-639-3 Language */
            language?: string;
            /** @description Name (singular) (limit of 30 characters) */
            nameSingular?: string;
            /** @description Name (plural) (limit of 30 characters) */
            namePlural?: string;
            /** @description Name (by fractions) (limit of 30 characters) */
            nameFractions?: string;
        }[];
    }[];
};

export type PutSizesParams = {
    /** @description Size table. */
    sizes: {
        /** @description Error code. */
        faultCode?: number;
        /** @description Error description. */
        faultString?: string;
        /** @description Size group ID. */
        group_id?: number;
        /** @description Size identifier. */
        id?: string;
        /** @description Category plural name. */
        name?: string;
        /** @description Size description. */
        description?: string;
        /** @description Operation type: add, edit, del */
        operation: string;
        lang_data?: {
            /** @description Language code. Codes are compliant with ISO-639-3 standard. */
            lang_id?: string;
            /** @description Category plural name. */
            name?: string;
        }[];
    }[];
};

export type PutSizechartsParams = {
    sizeCharts: {
        /** @description Id */
        id: number;
        /** @description Name in panel */
        nameInPanel?: string;
        /** @description Display mode */
        displayMode: "single" | "all";
        languagesData?: {
            /** @description Customer language ID. */
            language?: string;
            columns?: {
                /** @description Column number */
                columnNumber?: number;
                /** @description Column name */
                columnTitle?: string;
            }[];
            /** @description List of sizes */
            sizes?: {
                /** @description Size identifier */
                sizeId?: string;
                /** @description Priority */
                priority?: number;
                descriptions?: {
                    /** @description Column number */
                    columnNumber?: number;
                    /** @description Value */
                    value?: string;
                }[];
            }[];
        }[];
    }[];
};

export type PutProductsParametersParams = {
    /** @description Sections, parameters or valued to add or edit. */
    items: {
        /** @description Parameter ID. */
        id: number;
        /** @description Element text ID - can be entered instead of "id". Recognized save format: "section" (without backslash), "parameter\" (parameter without assigned value). */
        item_text_ids?: {
            /** @description Language ID. */
            lang_id?: string;
            /** @description Text value. */
            value?: string;
        }[];
        /** @description Names of section, parameter or value. */
        names?: {
            /** @description Language ID. */
            lang_id?: string;
            /** @description Text value. */
            value?: string;
        }[];
        /** @description Descriptions of section, parameter or value. */
        descriptions?: {
            /** @description Language ID. */
            lang_id?: string;
            /** @description Text value. */
            value?: string;
        }[];
        /** @description Search descriptions of parameter value. */
        search_description?: {
            /** @description Language ID */
            lang_id?: string;
            /** @description Text value */
            value?: string;
            /** @description Shop Id */
            shop_id?: number;
        }[];
        /** @description Icons of section, parameter or value to display on the product card. */
        card_icons?: {
            /** @description Language ID. */
            lang_id?: string;
            /** @description Text value. */
            value?: string;
            /** @description Shop Id */
            shop_id?: number;
        }[];
        /** @description Icons of section, parameter or value to display on the list of products. */
        link_icons?: {
            /** @description Language ID. */
            lang_id?: string;
            /** @description Text value. */
            value?: string;
            /** @description Shop Id */
            shop_id?: number;
        }[];
        /** @description Parameter's additional feature. 1. Status: context_id = "CONTEXT_STATE" Takes values context_value_id: - CONTEXT_STATE_NEW - New, - CONTEXT_STATE_USED - Used, - CONTEXT_STATE_USED_EXCELLENT - Used - excellent condition - CONTEXT_STATE_USED_VERYGOOD - Used - very good condition - CONTEXT_STATE_USED_CORRECT - Used - good condition - CONTEXT_STATE_USED_ACCEPTABLE - Used - acceptable condition - CONTEXT_STATE_REFURBISHED_EXCELLENT - Refurbished - excellent condition - CONTEXT_STATE_REFURBISHED_VERYGOOD - Refurbished - very good condition - CONTEXT_STATE_REFURBISHED_CORRECT - Refurbished - good condition - CONTEXT_STATE_NEW_OTHERS - New other (see details) - CONTEXT_STATE_NEW_WITH_DEFECTS - New with defects - CONTEXT_STATE_NEW_OEM - New - OEM - CONTEXT_STATE_NEW_OPEN_BOX - New - open box - CONTEXT_STATE_REFURBISHED_BY_PRODUCER - Renewed by a manufacturer, - CONTEXT_STATE_REFURBISHED_BY_SELLER - Renewed by a seller, - CONTEXT_STATE_FOR_PARTS_OR_BROKEN - In parts or damaged. 2. Product weight in grams: context_id = "CONTEXT_STD_UNIT_WEIGHT" Takes values context_value_id: - Value of additional feature is set automatically basing on the parameter's value. 3. A product's value in milliliters: context_id = "CONTEXT_STD_UNIT_VOLUME" Takes values context_value_id: - Value of additional feature is set automatically basing on the parameter's value. 4. Sex: context_id = "CONTEXT_SEX" Takes values context_value_id: - CONTEXT_SEX_MAN - Man, - CONTEXT_SEX_WOMAN - Woman, - CONTEXT_SEX_UNISEX - Unisex. 5. Age group: context_id = "CONTEXT_AGE_GROUP" Takes values context_value_id: - CONTEXT_AGE_GROUP_ADULT - Adults, - CONTEXT_AGE_GROUP_MINOR - Children. 6. Maximum number of products in an order: context_id = "CONTEXT_MAX_QUANTITY_PER_RETAIL_ORDER" Takes values context_value_id: - Value of additional feature is set automatically basing on the parameter's value. 7. Maximum number of products in a wholesale order: context_id = "CONTEXT_MAX_QUANTITY_PER_WHOLESALE_ORDER" Takes values context_value_id: - Value of additional feature is set automatically basing on the parameter's value. 8. Minimal number of products in an order: context_id = "CONTEXT_MIN_QUANTITY_PER_RETAIL_ORDER" Takes values context_value_id: - Value of additional feature is set automatically basing on the parameter's value. 9. Minimum number of products in a wholesale order: context_id = "CONTEXT_MIN_QUANTITY_PER_WHOLESALE_ORDER" Takes values context_value_id: - Value of additional feature is set automatically basing on the parameter's value. 10. Maximal number of a single size in an order: context_id = "CONTEXT_MAX_SIZE_QUANTITY_PER_RETAIL_ORDER" Takes values context_value_id: - Value of additional feature is set automatically basing on the parameter's value. 11. Maximal number of a single size in a wholesale order: context_id = "CONTEXT_MAX_SIZE_QUANTITY_PER_WHOLESALE_ORDER" Takes values context_value_id: - Value of additional feature is set automatically basing on the parameter's value. 12. Minimal number of a single size in an order: context_id = "CONTEXT_MIN_SIZE_QUANTITY_PER_RETAIL_ORDER" Takes values context_value_id: - Value of additional feature is set automatically basing on the parameter's value. 13. Minimal number of a single size in a wholesale order: context_id = "CONTEXT_MIN_SIZE_QUANTITY_PER_WHOLESALE_ORDER" Takes values context_value_id: - Value of additional feature is set automatically basing on the parameter's value. 14. Net weight: context_id = "CONTEXT_WEIGHT_NET" Takes values context_value_id: - Value of additional feature is set automatically basing on the parameter's value. 15. Color: context_id = "CONTEXT_COLOR" Takes values context_value_id: - Value of additional feature is set automatically basing on the parameter's value. 16. #!TylkoDlaDoroslych!#: context_id = "CONTEXT_ONLY_ADULTS" Takes values context_value_id: - CONTEXT_ONLY_ADULTS_YES - yes, - CONTEXT_ONLY_ADULTS_NO - no. 17. Prescription drug: context_id = "CONTEXT_PRESCRIPTION_MEDICINE" Takes values context_value_id: - CONTEXT_PRESCRIPTION_MEDICINE_YES - yes, - CONTEXT_PRESCRIPTION_MEDICINE_NO - no. 18. Season Rate: context_id = "CONTEXT_SEASON" Takes values context_value_id: - CONTEXT_SEASON_SPRING - Spring, - CONTEXT_SEASON_SUMMER - Summer, - CONTEXT_SEASON_FALL - Autumn, - CONTEXT_SEASON_WINTER - Winter, - CONTEXT_SEASON_SPRING_SUMMER - Spring/Summer, - CONTEXT_SEASON_FALL_WINTER - Autumn/Winter 19. Risk - signal word: context_id = \"CONTEXT_HAZMAT_SIGNAL\" Takes values context_value_id: - CONTEXT_HAZMAT_SIGNAL_DANGER - danger, - CONTEXT_HAZMAT_SIGNAL_WARNING - warnging, - CONTEXT_HAZMAT_SIGNAL_CAUTION - caution, - CONTEXT_HAZMAT_SIGNAL_NOTICE - notice, 20. Risk - warning pictogram context_id = \"CONTEXT_HAZMAT_PICTOGRAM\" Takes values context_value_id: - GHS01, GHS02, GHS03, GHS04, GHS05, GHS06, GHS07, GHS08, GHS09 21. Risk - type of hazard: context_id = \"CONTEXT_HAZMAT_STATEMENT\" Takes values context_value_id: - H200, H201, H202, H203, H204, H205, H220, H221, H222, H223, H224, H225, H226, H228, H240, H241, H242, H250, H251, H252, H260, H261, H270, H271, H272, H280, H281, H290, H300, H301, H302, H304, H310, H311, H312, H314, H315, H317, H318, H319, H330, H331, H332, H334, H335, H336, H340, H341, H350, H351, H360, H361, H362, H370, H371, H372, H373, H400, H410, H411, H412, H413, EUH 001, EUH 014, EUH 018, EUH 019, EUH 044, EUH 029, EUH 031, EUH 032, EUH 066, EUH 070, EUH 071, EUH 201, EUH 201A, EUH 202, EUH 203, EUH 204, EUH 205, EUH 206, EUH 207, EUH 208, EUH 209, EUH 209A, EUH 210, EUH 401 22. Repair score: context_id = \"CONTEXT_REPAIR_SCORE\" Takes values context_value_id: - The value of the additional feature is set automatically based on the parameter's value 23. Safety - information pictogram: context_id = \"CONTEXT_SAFETY_PICTOGRAM\" Takes values context_value_id: - 1 (Not suitable for small children) - 2 (CE mark) 24. Safety - type of warning: context_id = \"CONTEXT_SAFETY_STATEMENT\" Takes values context_value_id: - 1 (Not suitable for children under 3 years) - 2 (Keep out of the reach of children) - 3 (Product contains a button cell or coin battery) - 4 (Use under the direct supervision of adults) - 5 (Required protective gear. Do not use in public traffic) - 6 (Contains toy. Adult supervision recommended) - 7 (To prevent possible injury from entanglement, remove this toy as soon as the child begins to crawl) - 8 (Use only in shallow water under adult supervision) - 9 (Only use under adult supervision) - 10 (This toy does not provide protection) - 11 (Contains fragrances that may cause allergies) - 12 (For household use only). */
        context_id?: string;
        /** @description value of additional feature - Values described in context_id. */
        context_value_id?: string;
    }[];
    /** @description Settings */
    settings?: {
        /** */
        icons_input_type?: "base64" | "url";
    };
};

export type PutPaymentsParams = {
    /** @description Defines payment category. For the payments regarding returns, enter 'return'. */
    sourceType: "order" | "return" | "rma";
    /** @description Payment number - [order no.]-[payment no.], i.e. 1234-1. */
    paymentNumber: string;
    /** @description Payment method ID. Check getPaymentForms. */
    paymentFormId?: number;
    /** @description Refund value. */
    value: number;
    /** @description Registering date. */
    accountingDate?: string;
    /** @description Number of a bank account to which a payment is sent. */
    account?: string;
    /** @description Data of customer account in store. */
    clientAccount?: string;
    other?: {
        /** @description Payment system. */
        system?: number;
    };
    /** @description Transaction ID in external service */
    externalPaymentId?: string;
};

export type PostWarrantiesParams = {
    warranties: {
        /** @description Name. */
        name: string;
        /** */
        type?: "seller" | "producer";
        /** @description Warranty time. Default value 12. */
        period?: number;
        /** @description Name of warranty. */
        shopname?: {
            languages?: {
                /** @description Language ID. */
                language_id?: string;
                /** @description Language name. */
                language_name?: string;
                /** @description Literal in selected language. */
                value?: string;
            }[];
        };
        /** @description Warranty description. */
        description?: {
            languages?: {
                /** @description Language ID. */
                language_id?: string;
                /** @description Language name. */
                language_name?: string;
                /** @description Literal in selected language. */
                value?: string;
            }[];
        };
    }[];
};

export type PostVouchersParams = {
    /** @description List of vouchers to add */
    vouchers: {
        /** @description Gift voucher type id */
        typeId: number;
        /** @description Number. */
        number: string;
        /** @description Name. */
        name: string;
        /** @description Voucher expiration date */
        expirationDate?: string;
        /** @description Voucher balance */
        balance: {
            /** @description Available balance */
            amount?: number;
            /** @description Currency. */
            currency?: string;
        };
        /** @description List of shops the voucher is active in */
        shops: number[];
        /** @example note */
        note?: string;
    }[];
};

export type PostEntriesParams = {
    /** @description Shop Id */
    shopId: number;
    /** @description Date of creating an entry */
    date: string;
    /** @description Entry visibility */
    visible: "y" | "n";
    /** @description List of pages on which the entry is to be published */
    visibleOnSitesList: {
        /** @description Site ID */
        siteId?: string;
    }[];
    /** @description Products list. */
    products?: {
        /** @description Merchandise identifier */
        productId?: number;
    }[];
    /** @description Photo */
    pictureData?: {
        /** @description Photo encoded with Base64 */
        pictureBase64?: string;
        /** @description Photo format */
        pictureFormat?: "jpg" | "jpeg" | "png" | "gif";
    };
    /** @description Element including entry content in selected languages */
    langs: {
        /** @description Language ID */
        langId: string;
        /** @description Name on the page */
        title?: string;
        /** @description short description */
        shortDescription?: string;
        /** @description Long description */
        longDescription?: string;
        /** @description Blog post URL */
        blogUrl?: string;
        /** @description News item URL */
        newsUrl?: string;
    }[];
    /** @description Type of title and shortcut linking: fullContentLink - link to the subpage with full content, givenUrlLink - link to the given URL, noLink - static element */
    titleLinkType?: "fullContentLink" | "givenUrlLink" | "noLink";
    /** @description Provided URL (for link to specified URL option) */
    link?: string;
};

export type PostClientsPayerAddressParams = {
    payers: {
        /** @description Unique client's number. */
        clientId: number;
        /** @description Buyer's first name. */
        payerAddressFirstName?: string;
        /** @description Buyer's last name. */
        payerAddressLastName?: string;
        /** @description Company name. */
        payerAddressFirm?: string;
        /** @description Customer VAT ID. */
        payerAddressNip?: string;
        /** @description Buyer's street name and house number. */
        payerAddressStreet: string;
        /** @description Buyer's postal code. */
        payerAddressZipCode: string;
        /** @description Buyer's city. */
        payerAddressCity: string;
        /** @description Country code in the ISO 3166-1 A2 standard. */
        payerAddressCountryId: string;
        /** @description Buyer's telephone number. */
        payerAddressPhone?: string;
    }[];
};

export type PostClientsDeliveryAddressParams = {
    /** @description Customer data. */
    clients: {
        /** @description Customer's login. */
        clientLogin: string;
        /** @description External system code. */
        clientCodeExternal?: string;
        /** @description List of stores IDs When mask is determined, this parameter is omitted. */
        shopsIds: number[];
        /** @description Currency ID */
        currencyId?: string;
        /** @description Recipient's first name. */
        clientDeliveryAddressFirstName: string;
        /** @description Recipient's last name. */
        clientDeliveryAddressLastName: string;
        /** @description Additional information. */
        clientDeliveryAddressAdditional?: string;
        /** @description Cell phone. */
        clientDeliveryAddressPhone1?: string;
        /** @description Recipient's city. */
        clientDeliveryAddressCity: string;
        /** @description Recipient street and number. */
        clientDeliveryAddressStreet: string;
        /** @description Administrative region code. */
        clientDeliveryAddressRegionId?: string;
        /** @description Administrative region code. */
        clientDeliveryAddressProvinceId?: string;
        /** @description Recipient's postal code. */
        clientDeliveryAddressZipCode: string;
        /** @description Recipient's country. */
        clientDeliveryAddressCountry?: string;
    }[];
};

export type PostSnippetsParams = {
    snippets: ({
        /** @description Id of the code snippet. */
        id?: number | null;
        /** @description The snippet name. */
        name: string;
        /** @description Whether the snippet is active. */
        active?: "y" | "n";
        /** @description Snippet campaign id */
        campaign: number;
        dateBegin?: {
            /** @description Whether date condition is active */
            defined?: "y" | "n";
            /** Format: date
             * @description Date of snippet activation */
            date?: string | null;
        } & {
            /** @description Automatic shutdown control */
            autoBlock?: "y" | "n";
        };
        /** @description Filter to control snippet activation. */
        dateEnd?: {
            /** @description Whether date condition is active */
            defined?: "y" | "n";
            /** Format: date
             * @description Date of snippet activation */
            date?: string | null;
        };
        /** @description Code snippet type. */
        type?: "html" | "javascript" | "cgi";
        /** @description Whether to load contents asynchronously via XHR request. */
        useAjax?: "y" | "n";
        /** @description Url. */
        link?: string;
        /** @description Content waiting time (timeout) in seconds. */
        timeout?: number;
        /** @description The place where the code snippet is loaded. */
        zone?: "head" | "bodyBegin" | "bodyEnd";
        /** @description The order in which the code snippet will be displayed. */
        order?: number;
        /** @description Snippet content for each language. */
        body?: {
            /** @description Language code. */
            lang?: string;
            /** @example Hello world */
            body?: string;
        }[];
        display?: {
            /** @description Type of customers to whom to display the snippet */
            clientType?: "all" | "unregistered" | "registered" | "retailer" | "wholesaler";
            /** @description Whether to display only for newsletter visitors. */
            newsletter?: "y" | "n" | "all";
            /** @description Whether to display the code snippet only for customers who have placed an order */
            hasOrders?: "y" | "n" | "all";
            /** @description Display only after entering rebate code */
            useRebateCode?: "y" | "n" | "all";
        } & {
            /** @description Display on desktop screens */
            screen?: "y" | "n";
            /** @description Display on mobile tablets */
            tablet?: "y" | "n";
            /** @description Display on mobile phones */
            phone?: "y" | "n";
        };
        pages?: {
            /** @description Whether to display to all sites. */
            all?: "y" | "n";
            /** @description List of selected pages where snippet shows (works for all=n mode). If passed, the url should be omitted. */
            pages?: ("home" | "basket" | "checkout_payment_delivery" | "checkout_confirmation" | "new_order_placement" | "order_details" | "navigation" | "product_details" | "search_results" | "after_order_place" | "mailing_subscribe" | "payment_success" | "payment_error" | "payment_pending" | "other_pages")[];
            /** @description List of selected url (works for all=n mode) If passed, pages should be omitted. */
            url?: string[];
        };
        /** @description Snippet entry source filter. */
        sources?: {
            direct?: {
                /** @description Whether source filter is active */
                active?: "y" | "n";
                /** @description Id of service of given source */
                id?: number | null;
            } | null;
            search?: {
                /** @description Whether source filter is active */
                active?: "y" | "n";
                /** @description Id of service of given source */
                id?: number | null;
            } | null;
            advert?: {
                /** @description Whether source filter is active */
                active?: "y" | "n";
                /** @description Id of service of given source */
                id?: number | null;
            } | null;
            priceComparers?: {
                /** @description Whether source filter is active */
                active?: "y" | "n";
                /** @description Id of service of given source */
                id?: number | null;
            } | null;
            affiliate?: {
                /** @description Whether source filter is active */
                active?: "y" | "n";
                /** @description Id of service of given source */
                id?: number | null;
            } | null;
            cpa?: {
                /** @description Whether source filter is active */
                active?: "y" | "n";
                /** @description Id of service of given source */
                id?: number | null;
            } | null;
            newsletter?: {
                /** @description Whether source filter is active */
                active?: "y" | "n";
                /** @description Id of service of given source */
                id?: number | null;
            } | null;
            social?: {
                /** @description Whether source filter is active */
                active?: "y" | "n";
                /** @description Id of service of given source */
                id?: number | null;
            } | null;
            page?: {
                /** @description Whether source filter is active */
                active?: "y" | "n";
                /** @description Id of service of given source */
                id?: number | null;
            } | null;
        };
        /** @description Whether the snippet is marked as deleted. */
        readonly deleted?: "y" | "n";
        /** @description The number of cookies associated with the snippet. */
        readonly cookiesCount?: number;
    } & {
        /** @example null */
        id?: number | null;
    })[];
};

export type PostSnippetsCampaignParams = {
    campaigns: ({
        /** @description Snippet campaign id */
        id?: number | null;
        /** @description Snippet campaign name */
        name: string;
        /** @description Snippet campaign internal description */
        description?: string;
        /** @description Shop ids where code snippets are active 1 ] */
        shop: number[] | null;
        /** @description Whether the snippet is active */
        active?: "y" | "n";
        /** @description Whether the snippet campaign is deleted */
        readonly deleted?: "y" | "n";
        /** @description Snippet order. */
        order?: number;
        /** @description Number of code snippets associated with the campaign. */
        readonly snippetCount?: number | null;
        /** @description Number of active code snippets associated with the campaign. */
        readonly activeSnippetCount?: number | null;
        configVariables?: {
            /** @description Key of config value. */
            key?: string;
            /** @description Name of config item. */
            readonly name: string;
            /** @description Value of config item. */
            value?: string;
        }[];
    } & {
        /** @example null */
        id?: number | null;
    })[];
};

export type PostSnippetsCookiesParams = {
    cookies: ({
        /** @description Snippet */
        id?: number | null;
        /** @description Id of the snippet code. */
        snippetId: number;
        /** @description Name of the cookie vendor. */
        deliverer: string;
        /** @description Category of the cookie */
        category?: "analytics" | "marketing" | "functional";
        /** @description Cookie description for each language. */
        description?: {
            /** @description Language code. */
            lang?: string;
            /** @example Hello world */
            body?: string;
        }[];
        /** @description Name of the cookie. */
        name?: string | null;
        /** @description Type of the cookie|null} */
        type?: "cookie" | "pixel" | "localStorage" | null;
        /** @description Cookie lifetime mode|null} */
        lifeTimeType?: "temporary" | "days" | "minutes" | null;
        /** @description Cookie lifetime */
        lifeTime?: number | null;
    } & {
        /** @example null */
        id?: number | null;
    })[];
};

export type PostCpaParams = {
    cpa: ({
        /** @description Id of the CPA program. */
        id?: number | null;
        /** @description The CPA program name. */
        name: string;
        /** @description Whether the CPA program is active. */
        active?: "y" | "n";
        /** @description CPA campaign id */
        campaign: number;
        /** @description CPA program page settings simple or advanced, depending on the mode. */
        pageSettings?: (Omit<{
            /** @description Whether to display to all sites. */
            mode: "simple" | "advanced";
        }, "mode"> & {
            /** @description Whether to display to all sites. */
            mode?: "simple";
            /** @description The place where the cpa code is loaded. (For "all" mode)|null} */
            zone?: "head" | "bodyBegin" | "bodyEnd" | null;
            /** @description Snippet content for each language. (For "all" mode) */
            body?: {
                /** @description Language code. */
                lang?: string;
                /** @example Hello world */
                body?: string;
            }[] | null;
        }) | (Omit<{
            /** @description Whether to display to all sites. */
            mode: "simple" | "advanced";
        }, "mode"> & {
            /** @description Whether to display to all sites. */
            mode?: "advanced";
            /** @description Page setting for advance mode */
            pages?: {
                /** @enum {string} */
                active?: "y" | "n";
                /** @enum {string} */
                page?: "home" | "basket" | "checkout_payment_delivery" | "checkout_confirmation" | "new_order_placement" | "order_details" | "navigation" | "product_details" | "search_results" | "after_order_place" | "mailing_subscribe" | "other_pages";
                /** @description The place where the cpa code is loaded. (For "all" mode) */
                zone?: "head" | "bodyBegin" | "bodyEnd";
                body?: {
                    /** @description Language code. */
                    lang?: string;
                    /** @example Hello world */
                    body?: string;
                }[];
            }[];
        });
        display?: {
            /** @description Type of customers to whom to display the snippet */
            clientType?: "all" | "unregistered" | "registered" | "retailer" | "wholesaler";
            /** @description Whether to display only for newsletter visitors. */
            newsletter?: "y" | "n" | "all";
            /** @description Whether to display the code snippet only for customers who have placed an order */
            hasOrders?: "y" | "n" | "all";
            /** @description Display only after entering rebate code */
            useRebateCode?: "y" | "n" | "all";
        };
        /** @description Snippet entry source filter. */
        sources?: {
            direct?: {
                /** @description Whether source filter is active */
                active?: "y" | "n";
                /** @description Id of service of given source */
                id?: number | null;
            } | null;
            search?: {
                /** @description Whether source filter is active */
                active?: "y" | "n";
                /** @description Id of service of given source */
                id?: number | null;
            } | null;
            advert?: {
                /** @description Whether source filter is active */
                active?: "y" | "n";
                /** @description Id of service of given source */
                id?: number | null;
            } | null;
            priceComparers?: {
                /** @description Whether source filter is active */
                active?: "y" | "n";
                /** @description Id of service of given source */
                id?: number | null;
            } | null;
            affiliate?: {
                /** @description Whether source filter is active */
                active?: "y" | "n";
                /** @description Id of service of given source */
                id?: number | null;
            } | null;
            cpa?: {
                /** @description Whether source filter is active */
                active?: "y" | "n";
                /** @description Id of service of given source */
                id?: number | null;
            } | null;
            newsletter?: {
                /** @description Whether source filter is active */
                active?: "y" | "n";
                /** @description Id of service of given source */
                id?: number | null;
            } | null;
            social?: {
                /** @description Whether source filter is active */
                active?: "y" | "n";
                /** @description Id of service of given source */
                id?: number | null;
            } | null;
            page?: {
                /** @description Whether source filter is active */
                active?: "y" | "n";
                /** @description Id of service of given source */
                id?: number | null;
            } | null;
        };
        /** @description List of variables that can be used in a body template. */
        variables?: {
            name: string;
            /** @enum {string} */
            source?: "session" | "cookie";
        }[];
    } & {
        /** @example null */
        id?: number | null;
    })[];
};

export type PostCpaCampaignParams = {
    campaigns: ({
        /** @description Snippet campaign id */
        id?: number | null;
        /** @description Snippet campaign name */
        name: string;
        /** @description Snippet campaign internal description */
        description?: string;
        /** @description Shop ids where code snippets are active 1 ] */
        shop: number[] | null;
        /** @description Whether the snippet is active */
        active?: "y" | "n";
        /** @description Number of CPA programs associated with the campaign. */
        readonly cpaCount?: number | null;
        /** @description Number of active CPA programs associated with the campaign. */
        readonly activeCpaCount?: number | null;
    } & {
        /** @example null */
        id?: number | null;
    })[];
};

export type PutClientsParams = {
    /** @description Customer data. */
    clients: {
        /** @description Customer's login. */
        clientLogin: string;
        /** @description E-mail address. */
        clientEmail?: string;
        /** @description Customer's first name. */
        clientFirstName?: string;
        /** @description Customer's last name. */
        clientLastName?: string;
        /** @description Street and number. */
        clientStreet?: string;
        /** @description Customer's postal code. */
        clientZipCode?: string;
        /** @description Customer's city. */
        clientCity?: string;
        /** @description Country ID in accordance with ISO-3166. */
        clientCountryId?: string;
        /** @description Administrative region code. */
        clientProvinceId?: string;
        /** @description Customer password (min. 8 characters). */
        clientPassword?: string;
        /** @description Date of birth. */
        clientBirthDate?: string;
        /** @description Cell phone. */
        clientPhone1?: string;
        /** @description Customer's company name. */
        clientFirm?: string;
        /** @description Customer Tax no. */
        clientNip?: string;
        /** @description Determines, whether client is a wholesaler. */
        clientIsWholesaler?: boolean;
        /** @description Customer type, possible values: - person - if client sex is not determined, - person_male - when client is a male, - person_female - when a customer is a woman, - firm - when client is company. */
        clientType?: "person" | "person_male" | "person_female" | "firm";
        /** @description Language ID */
        langId?: string;
        /** @description Defines availability of log in to other pages than the ones given in the element: shops  . */
        blockLoginToOtherShops?: boolean;
        /** @description List of stores IDs When mask is determined, this parameter is omitted. */
        shopsIds?: number[];
        /** @description Currency ID */
        currencyId?: string;
        /** @description External system code. */
        clientCodeExternal?: string;
        /** @description List with delivery dates and times */
        deliveryDates?: {
            /** @description Delivery date in format: Y-m-d */
            deliveryDate?: string;
            /** @description Delivery time in format: H:i */
            deliveryHours?: string[];
        }[];
        /** @description Customer account balance in external system. */
        clientBalanceAmountExternal?: number;
        /** @description Debt limit. */
        clientTradeCreditLimitExternal?: number;
        /** @description Permission to E-mail Newsletter. */
        newsletterEmailApproval?: boolean;
        /** @description Permission to SMS Newsletter. */
        newsletterSmsApproval?: boolean;
        /** @description Discount group ID. */
        clientGroupDiscountNumber?: number;
        /** @description Field used for identifying request-response pairs for the endpoint. */
        requestReference?: string;
        /** @description List of shops where a customer agreed or didn't agree to receive email newsletter. */
        newsletterEmailApprovalsData?: {
            /** @description Permission to E-mail Newsletter. */
            inNewsletterEmailApproval?: "y" | "n";
            /** @description Shop Id */
            shopId?: number;
        }[];
        /** @description List of shops where a customer agreed or didn't agree to receive sms newsletter. */
        newsletterSmsApprovalsData?: {
            /** @description Permission to SMS Newsletter. */
            inNewsletterSmsApproval?: "y" | "n";
            /** @description Shop Id */
            shopId?: number;
        }[];
        /** @description Is the customer active */
        clientActive?: boolean;
        /** @description Number of days to pay for invoice */
        numberOfDaysToPay?: number;
        /** @description The parameter stores information about who acquired the customer */
        affiliateLogin?: string;
        /** @description ID of a partner who acquired a given customer. */
        affiliateId?: number;
        /** @description Notes from customer. */
        clientNote?: string;
    }[];
};

export type PutClientsPayerAddressParams = {
    payers: {
        /** @description Unique client's number. */
        clientId: string;
        /** @description Buyer's address id. */
        payerAddressId: string;
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
    }[];
};

export type PutCpaCampaignParams = {
    campaigns: {
        /** @description Snippet campaign id */
        id: number | null;
        /** @description Snippet campaign name */
        name?: string;
        /** @description Snippet campaign internal description */
        description?: string;
        /** @description Shop ids where code snippets are active 1 ] */
        shop?: number[] | null;
        /** @description Whether the snippet is active */
        active?: "y" | "n";
        /** @description Number of CPA programs associated with the campaign. */
        readonly cpaCount?: number | null;
        /** @description Number of active CPA programs associated with the campaign. */
        readonly activeCpaCount?: number | null;
    }[];
};

export type PutCpaParams = {
    cpa: ({
        /** @description Id of the CPA program. */
        id: number | null;
        /** @description The CPA program name. */
        name?: string;
        /** @description Whether the CPA program is active. */
        active?: "y" | "n";
        /** @description CPA campaign id */
        campaign?: number;
        /** @description CPA program page settings simple or advanced, depending on the mode. */
        pageSettings?: (Omit<{
            /** @description Whether to display to all sites. */
            mode: "simple" | "advanced";
        }, "mode"> & {
            /** @description Whether to display to all sites. */
            mode?: "simple";
            /** @description The place where the cpa code is loaded. (For "all" mode)|null} */
            zone?: "head" | "bodyBegin" | "bodyEnd" | null;
            /** @description Snippet content for each language. (For "all" mode) */
            body?: {
                /** @description Language code. */
                lang?: string;
                /** @example Hello world */
                body?: string;
            }[] | null;
        }) | (Omit<{
            /** @description Whether to display to all sites. */
            mode: "simple" | "advanced";
        }, "mode"> & {
            /** @description Whether to display to all sites. */
            mode?: "advanced";
            /** @description Page setting for advance mode */
            pages?: {
                /** @enum {string} */
                active?: "y" | "n";
                /** @enum {string} */
                page?: "home" | "basket" | "checkout_payment_delivery" | "checkout_confirmation" | "new_order_placement" | "order_details" | "navigation" | "product_details" | "search_results" | "after_order_place" | "mailing_subscribe" | "other_pages";
                /** @description The place where the cpa code is loaded. (For "all" mode) */
                zone?: "head" | "bodyBegin" | "bodyEnd";
                body?: {
                    /** @description Language code. */
                    lang?: string;
                    /** @example Hello world */
                    body?: string;
                }[];
            }[];
        });
        display?: {
            /** @description Type of customers to whom to display the snippet */
            clientType?: "all" | "unregistered" | "registered" | "retailer" | "wholesaler";
            /** @description Whether to display only for newsletter visitors. */
            newsletter?: "y" | "n" | "all";
            /** @description Whether to display the code snippet only for customers who have placed an order */
            hasOrders?: "y" | "n" | "all";
            /** @description Display only after entering rebate code */
            useRebateCode?: "y" | "n" | "all";
        };
        /** @description Snippet entry source filter. */
        sources?: {
            direct?: {
                /** @description Whether source filter is active */
                active?: "y" | "n";
                /** @description Id of service of given source */
                id: number | null;
            } | null;
            search?: {
                /** @description Whether source filter is active */
                active?: "y" | "n";
                /** @description Id of service of given source */
                id?: number | null;
            } | null;
            advert?: {
                /** @description Whether source filter is active */
                active?: "y" | "n";
                /** @description Id of service of given source */
                id?: number | null;
            } | null;
            priceComparers?: {
                /** @description Whether source filter is active */
                active?: "y" | "n";
                /** @description Id of service of given source */
                id?: number | null;
            } | null;
            affiliate?: {
                /** @description Whether source filter is active */
                active?: "y" | "n";
                /** @description Id of service of given source */
                id?: number | null;
            } | null;
            cpa?: {
                /** @description Whether source filter is active */
                active?: "y" | "n";
                /** @description Id of service of given source */
                id?: number | null;
            } | null;
            newsletter?: {
                /** @description Whether source filter is active */
                active?: "y" | "n";
                /** @description Id of service of given source */
                id?: number | null;
            } | null;
            social?: {
                /** @description Whether source filter is active */
                active?: "y" | "n";
                /** @description Id of service of given source */
                id?: number | null;
            } | null;
            page?: {
                /** @description Whether source filter is active */
                active?: "y" | "n";
                /** @description Id of service of given source */
                id?: number | null;
            } | null;
        };
        /** @description List of variables that can be used in a body template. */
        variables?: {
            name?: string;
            /** @enum {string} */
            source?: "session" | "cookie";
        }[];
    } & {
        /** @example null */
        id: number | null;
    })[];
};

export type PutSnippetsParams = {
    snippets: ({
        /** @description Id of the code snippet. */
        id: number | null;
        /** @description The snippet name. */
        name?: string;
        /** @description Whether the snippet is active. */
        active?: "y" | "n";
        /** @description Snippet campaign id */
        campaign?: number;
        dateBegin?: {
            /** @description Whether date condition is active */
            defined?: "y" | "n";
            /** Format: date
             * @description Date of snippet activation */
            date?: string | null;
        } & {
            /** @description Automatic shutdown control */
            autoBlock?: "y" | "n";
        };
        /** @description Filter to control snippet activation. */
        dateEnd?: {
            /** @description Whether date condition is active */
            defined?: "y" | "n";
            /** Format: date
             * @description Date of snippet activation */
            date?: string | null;
        };
        /** @description Code snippet type. */
        type?: "html" | "javascript" | "cgi";
        /** @description Whether to load contents asynchronously via XHR request. */
        useAjax?: "y" | "n";
        /** @description Url. */
        link?: string;
        /** @description Content waiting time (timeout) in seconds. */
        timeout?: number;
        /** @description The place where the code snippet is loaded. */
        zone?: "head" | "bodyBegin" | "bodyEnd";
        /** @description The order in which the code snippet will be displayed. */
        order?: number;
        /** @description Snippet content for each language. */
        body?: {
            /** @description Language code. */
            lang?: string;
            /** @example Hello world */
            body?: string;
        }[];
        display?: {
            /** @description Type of customers to whom to display the snippet */
            clientType?: "all" | "unregistered" | "registered" | "retailer" | "wholesaler";
            /** @description Whether to display only for newsletter visitors. */
            newsletter?: "y" | "n" | "all";
            /** @description Whether to display the code snippet only for customers who have placed an order */
            hasOrders?: "y" | "n" | "all";
            /** @description Display only after entering rebate code */
            useRebateCode?: "y" | "n" | "all";
        } & {
            /** @description Display on desktop screens */
            screen?: "y" | "n";
            /** @description Display on mobile tablets */
            tablet?: "y" | "n";
            /** @description Display on mobile phones */
            phone?: "y" | "n";
        };
        pages?: {
            /** @description Whether to display to all sites. */
            all?: "y" | "n";
            /** @description List of selected pages where snippet shows (works for all=n mode). If passed, the url should be omitted. */
            pages?: ("home" | "basket" | "checkout_payment_delivery" | "checkout_confirmation" | "new_order_placement" | "order_details" | "navigation" | "product_details" | "search_results" | "after_order_place" | "mailing_subscribe" | "payment_success" | "payment_error" | "payment_pending" | "other_pages")[];
            /** @description List of selected url (works for all=n mode) If passed, pages should be omitted. */
            url?: string[];
        };
        /** @description Snippet entry source filter. */
        sources?: {
            direct?: {
                /** @description Whether source filter is active */
                active?: "y" | "n";
                /** @description Id of service of given source */
                id: number | null;
            } | null;
            search?: {
                /** @description Whether source filter is active */
                active?: "y" | "n";
                /** @description Id of service of given source */
                id?: number | null;
            } | null;
            advert?: {
                /** @description Whether source filter is active */
                active?: "y" | "n";
                /** @description Id of service of given source */
                id?: number | null;
            } | null;
            priceComparers?: {
                /** @description Whether source filter is active */
                active?: "y" | "n";
                /** @description Id of service of given source */
                id?: number | null;
            } | null;
            affiliate?: {
                /** @description Whether source filter is active */
                active?: "y" | "n";
                /** @description Id of service of given source */
                id?: number | null;
            } | null;
            cpa?: {
                /** @description Whether source filter is active */
                active?: "y" | "n";
                /** @description Id of service of given source */
                id?: number | null;
            } | null;
            newsletter?: {
                /** @description Whether source filter is active */
                active?: "y" | "n";
                /** @description Id of service of given source */
                id?: number | null;
            } | null;
            social?: {
                /** @description Whether source filter is active */
                active?: "y" | "n";
                /** @description Id of service of given source */
                id?: number | null;
            } | null;
            page?: {
                /** @description Whether source filter is active */
                active?: "y" | "n";
                /** @description Id of service of given source */
                id?: number | null;
            } | null;
        };
        /** @description Whether the snippet is marked as deleted. */
        readonly deleted?: "y" | "n";
        /** @description The number of cookies associated with the snippet. */
        readonly cookiesCount?: number;
    } & {
        /** @example null */
        id: number | null;
    })[];
};

export type PutSnippetsCampaignParams = {
    campaigns: {
        /** @description Snippet campaign id */
        id: number | null;
        /** @description Snippet campaign name */
        name?: string;
        /** @description Snippet campaign internal description */
        description?: string;
        /** @description Shop ids where code snippets are active 1 ] */
        shop?: number[] | null;
        /** @description Whether the snippet is active */
        active?: "y" | "n";
        /** @description Whether the snippet campaign is deleted */
        readonly deleted?: "y" | "n";
        /** @description Snippet order. */
        order?: number;
        /** @description Number of code snippets associated with the campaign. */
        readonly snippetCount?: number | null;
        /** @description Number of active code snippets associated with the campaign. */
        readonly activeSnippetCount?: number | null;
        configVariables?: {
            /** @description Key of config value. */
            key?: string;
            /** @description Name of config item. */
            readonly name?: string;
            /** @description Value of config item. */
            value?: string;
        }[];
    }[];
};

export type PutSnippetsCookiesParams = {
    cookies: ({
        /** @description Snippet */
        id: number | null;
        /** @description Id of the snippet code. */
        snippetId?: number;
        /** @description Name of the cookie vendor. */
        deliverer?: string;
        /** @description Category of the cookie */
        category?: "analytics" | "marketing" | "functional";
        /** @description Cookie description for each language. */
        description?: {
            /** @description Language code. */
            lang?: string;
            /** @example Hello world */
            body?: string;
        }[];
        /** @description Name of the cookie. */
        name?: string | null;
        /** @description Type of the cookie|null} */
        type?: "cookie" | "pixel" | "localStorage" | null;
        /** @description Cookie lifetime mode|null} */
        lifeTimeType?: "temporary" | "days" | "minutes" | null;
        /** @description Cookie lifetime */
        lifeTime?: number | null;
    } & {
        /** @example null */
        id: number | null;
    })[];
};

export type PutEntriesParams = {
    /** @description Entry ID */
    entryId: number;
    /** @description Shop Id */
    shopId: number;
    /** @description Date of creating an entry */
    date?: string;
    /** @description Entry visibility */
    visible?: "y" | "n";
    /** @description List of pages on which the entry is to be published */
    visibleOnSitesList?: {
        /** @description Page ID */
        siteId?: string;
    }[];
    /** @description Products list. */
    products?: {
        /** @description Merchandise identifier */
        productId?: number;
    }[];
    /** @description Photo */
    pictureData?: {
        /** @description Photo encoded with Base64 */
        pictureBase64?: string;
        /** @description Photo format */
        pictureFormat?: "jpg" | "jpeg" | "png" | "gif";
    };
    /** @description Determines whether to delete an entry photo */
    deletePicture?: "y" | "n";
    /** @description Element including entry content in selected languages */
    langs?: {
        /** @description Language ID */
        langId?: string;
        /** @description Name on the page */
        title?: string;
        /** @description short description */
        shortDescription?: string;
        /** @description Long description */
        longDescription?: string;
        /** @description Blog post URL */
        blogUrl?: string;
        /** @description News item URL */
        newsUrl?: string;
    }[];
    /** @description Type of title and shortcut linking: fullContentLink - link to the subpage with full content, givenUrlLink - link to the given URL, noLink - static element */
    titleLinkType?: "fullContentLink" | "givenUrlLink" | "noLink";
    /** @description Provided URL (for link to specified URL option) */
    link?: string;
};

export type PutResponsibilityEntitiesParams = {
    entities: {
        /** @description Identificator of the entity. */
        id?: number;
        /** @description Short name/code. */
        code: string;
        /** @description Full name. */
        name?: string;
        /** @description E-mail address. */
        mail?: string;
        /** @description Street. */
        street?: string;
        /** @description Building number. */
        number?: string | null;
        /** @description Apartment number. */
        subnumber?: string | null;
        /** @description Zipcode. */
        zipcode?: string;
        /** @description City. */
        city?: string;
        /** @description 2-letter ISO country code. */
        country?: string;
        /** @description Phone number. */
        phone?: string | null;
        /** @description Additional description. */
        description?: string | null;
        /** @description URL to contact page. */
        url?: string | null;
    }[];
    /** @description Type of entity */
    type: "producer" | "person";
};

export type PutSystemCurrenciesParams = {
    currencies: {
        /** @description Currency code in ISO 4217 standard. */
        id: string;
        /** @description Currency exchange rate. Maximal value is 10000. */
        rate: number;
        /** @description Currency smaller unit. */
        scale: number;
    }[];
};

export type PutVouchersParams = {
    /** @description List of vouchers to edit */
    vouchers: {
        /** @description Voucher ID */
        id: number;
        /** @description Number. */
        number?: string;
        /** @description Name. */
        name?: string;
        /** @description Voucher expiration date */
        expirationDate?: string;
        /** @description Balance operation type, possible values: - set - balance positioning of funds, - add - add funds to balance, - subtract - subtract funds from balance. */
        balanceOperationType?: "set" | "add" | "subtract";
        /** @description Voucher balance */
        balance?: {
            /** @description Available balance */
            amount?: number;
            /** @description Currency. */
            currency?: string;
        };
        /** @description List of shops the voucher is active in */
        shops?: number[];
        /** @example note */
        note?: string;
        /** @description Status, possible values: - used - used, - unused - unused, */
        status?: "used" | "unused";
    }[];
};

export type PutProductsBrandsParams = {
    /** @description List of manufacturers assigned to sought products. */
    producers: {
        /** @description Id */
        id: number;
        /** @description Name in panel */
        nameInPanel?: string;
        imagesSettings?: {
            /** @description Images source type. Available values: base64 - image data encoded using the base64 algorithm (default), url - image file link */
            sourceType?: "base64" | "url";
        };
        languagesConfigurations?: {
            productsListImagesConfiguration?: {
                /** @description Type of graphics */
                graphicType?: "img" | "img_rwd";
                /** @description Image (one size for computers, tablets and smartphones, not recommended) */
                singleGraphic?: string;
                /** @description #!GrafikaDlaEkranowKomputera#! */
                pcGraphic?: string;
                /** @description Graphics for tablets */
                tabletGraphic?: string;
                /** @description Graphics for smartphones */
                phoneGraphic?: string;
            };
            /** @description Graphic displayed on product card */
            productCardImagesConfiguration?: {
                /** @description Type of graphics */
                graphicType?: "img" | "img_rwd";
                /** @description Image (one size for computers, tablets and smartphones, not recommended) */
                singleGraphic?: string;
                /** @description #!GrafikaDlaEkranowKomputera#! */
                pcGraphic?: string;
                /** @description Graphics for tablets */
                tabletGraphic?: string;
                /** @description Graphics for smartphones */
                phoneGraphic?: string;
            };
            /** @description Language ID (code in ISO 639-2). */
            languageId?: string;
            shopsConfigurations?: {
                /** @description Name. */
                name?: string;
                /** @description Name displayed in the website header */
                headerName?: string;
                /** @description Description displayed at the top of products list */
                descriptionTop?: string;
                /** @description Description displayed at the bottom of products list */
                descriptionBottom?: string;
                /** @description Shop Id */
                shopId?: number;
                /** @description Products display settings */
                view?: "default" | "own";
                /** @description Enable customers to change sorting */
                enableSort?: boolean;
                /** @description Enable customers to change the number of products displayed */
                enableChangeDisplayCount?: boolean;
                /** @description Number of displayed products */
                numberOfProductsGrid?: number;
                /** @description Selected sorting mode */
                sortModeGrid?: "d_relevance" | "d_date" | "a_date" | "d_priority" | "a_priority" | "a_priorityname" | "d_priorityname" | "d_priorityonly" | "a_priorityonly" | "a_name" | "d_name" | "a_price" | "d_price";
                /** @description Meta settings */
                metaSettings?: "auto" | "custom";
                /** @description Title */
                metaTitle?: string;
                /** @description Description */
                metaDescription?: string;
                /** @description Keywords */
                metaKeywords?: string;
                /** @description Meta robots settings for index attribute */
                metaRobotsSettingsIndex?: "auto" | "index" | "noindex";
                /** @description Meta robots settings for follow attribute */
                metaRobotsSettingsFollow?: "auto" | "follow" | "nofollow";
            }[];
        }[];
    }[];
};

export type PutProductsDescriptionsParams = {
    /** @description Products list. */
    products: {
        productIdent: {
            /** @description Identifier type. */
            productIdentType?: "id" | "index" | "codeExtern" | "codeProducer";
            /** @description ID value. */
            identValue?: string;
        };
        /** @description Array of language-dependent elements. */
        productDescriptionsLangData?: {
            /** @description Language ID */
            langId?: string;
            /** @description Shop Id */
            shopId?: number;
            /** @description Product name. */
            productName?: string;
            /** @description Product name for auction service. */
            productAuctionName?: string;
            /** @description Product name for price comparison websites */
            productPriceComparerName?: string;
            /** @description Short product description. */
            productDescription?: string;
            /** @description Long product description. */
            productLongDescription?: string;
            productDescriptionSections?: {
                descriptionSections?: {
                    section_1?: {
                        /** @enum {string} */
                        type: "text" | "photo" | "video" | "html";
                        /** @description HTML content depending on the type */
                        content: string;
                    };
                    section_2?: {
                        /** @enum {string} */
                        type: "text" | "photo" | "video" | "html";
                        /** @description HTML content depending on the type */
                        content: string;
                    };
                }[];
            };
            /** @description DEPRECATED. This parameter is deprecated. Long product description for external listings. */
            productAuctionLongDescription?: string;
            /** @description Product meta title. */
            productMetaTitle?: string;
            /** @description Product meta description. */
            productMetaDescription?: string;
            /** @description Product meta keywords. */
            productMetaKeywords?: string;
        }[];
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
    }[];
};

export type PostProductsBrandsParams = {
    /** @description List of manufacturers assigned to sought products. */
    producers: {
        /** @description Name in panel */
        nameInPanel: string;
        imagesSettings?: {
            /** @description Images source type. Available values: base64 - image data encoded using the base64 algorithm (default), url - image file link */
            sourceType?: "base64" | "url";
        };
        languagesConfigurations?: {
            productsListImagesConfiguration?: {
                /** @description Type of graphics */
                graphicType?: "img" | "img_rwd";
                /** @description Image (one size for computers, tablets and smartphones, not recommended) */
                singleGraphic?: string;
                /** @description #!GrafikaDlaEkranowKomputera#! */
                pcGraphic?: string;
                /** @description Graphics for tablets */
                tabletGraphic?: string;
                /** @description Graphics for smartphones */
                phoneGraphic?: string;
            };
            /** @description Graphic displayed on product card */
            productCardImagesConfiguration?: {
                /** @description Type of graphics */
                graphicType?: "img" | "img_rwd";
                /** @description Image (one size for computers, tablets and smartphones, not recommended) */
                singleGraphic?: string;
                /** @description #!GrafikaDlaEkranowKomputera#! */
                pcGraphic?: string;
                /** @description Graphics for tablets */
                tabletGraphic?: string;
                /** @description Graphics for smartphones */
                phoneGraphic?: string;
            };
            /** @description Language ID (code in ISO 639-2). */
            languageId?: string;
            shopsConfigurations?: {
                /** @description Name. */
                name?: string;
                /** @description Name displayed in the website header */
                headerName?: string;
                /** @description Description displayed at the top of products list */
                descriptionTop?: string;
                /** @description Description displayed at the bottom of products list */
                descriptionBottom?: string;
                /** @description Shop Id */
                shopId?: number;
                /** @description Products display settings */
                view?: "default" | "own";
                /** @description Enable customers to change sorting */
                enableSort?: boolean;
                /** @description Enable customers to change the number of products displayed */
                enableChangeDisplayCount?: boolean;
                /** @description Number of displayed products */
                numberOfProductsGrid?: number;
                /** @description Selected sorting mode */
                sortModeGrid?: "d_relevance" | "d_date" | "a_date" | "d_priority" | "a_priority" | "a_priorityname" | "d_priorityname" | "d_priorityonly" | "a_priorityonly" | "a_name" | "d_name" | "a_price" | "d_price";
                /** @description Meta settings */
                metaSettings?: "auto" | "custom";
                /** @description Title */
                metaTitle?: string;
                /** @description Description */
                metaDescription?: string;
                /** @description Keywords */
                metaKeywords?: string;
                /** @description Array */
                metaRobotsSettingsIndex?: "auto" | "index" | "noindex";
                /** @description Array */
                metaRobotsSettingsFollow?: "auto" | "follow" | "nofollow";
            }[];
        }[];
    }[];
};

export type PostProductsOpinionsParams = {
    /** @description List of reviews */
    opinions: {
        /** @example createDate */
        createDate?: string;
        confirmed?: boolean;
        /** @example rating */
        rating?: string;
        /** @example content */
        content?: string;
        /** @description Customer language ID. */
        language?: string;
        /** @example picture */
        picture?: string;
        /** @description Shop Id */
        shopId?: number;
        /** @example host */
        host?: string;
        /** @description Customer data. */
        clients?: {
            /** */
            type?: "id" | "login" | "codeExtern";
            /** @example value */
            value?: string;
            /** @description Name. */
            name?: string;
            /** @description E-mail address */
            email?: string;
        };
        /** @example 1 */
        scorePositive?: number;
        /** @example 1 */
        scoreNegative?: number;
        /** @description Products list. */
        products: {
            /** */
            type?: "id" | "index" | "codeExtern" | "codeProducer";
            /** @example value */
            value?: string;
        };
        /** @description Order serial number. */
        orderSerialNumber?: number;
        /** @description Reply to an opinion */
        shopAnswer?: string;
        /** @description Opinion confirmed with purchase */
        opinionConfirmedByPurchase?: boolean;
    }[];
};

export type PutProductsOpinionsParams = {
    /** @example 1 */
    id: number;
    /** */
    confirmed?: "y" | "n";
    /** */
    rating?: "1" | "2" | "3" | "4" | "5";
    /** @example content */
    content?: string;
    /** @description Customer language ID. */
    language?: string;
    /** @description Reply to an opinion */
    shopAnswer?: string;
    /** @example picture */
    picture?: string;
    /** @description Opinion confirmed with purchase */
    opinionConfirmedByPurchase?: boolean;
};

export type PutProductsGroupsMainProductParams = {
    groups: {
        productIdent: {
            /** @description Identifier type. */
            productIdentType?: "id" | "index" | "codeExtern" | "codeProducer";
            /** @description ID value. */
            identValue?: string;
        };
    }[];
};

export type PostProductsMarketingPromotionParams = {
    /** @description Promotion name */
    promotionName: string;
    /** @description List of stores IDs When mask is determined, this parameter is omitted. */
    shopsIds: number[];
    /** @description Special zones */
    marketingZones: {
        /** @description Reduced price */
        promotion?: "y" | "n";
        /** @description Sale */
        discount?: "y" | "n";
        /** @description Distinguished product */
        distinguished?: "y" | "n";
        /** @description Special product */
        special?: "y" | "n";
        /** @description New */
        new?: "y" | "n";
    };
    /** @description Promotional price settings */
    newPriceSettings?: {
        /** */
        type?: "retail" | "wholesale" | "pos";
        /** @description Discount value */
        discountValue?: number;
        /** @description ISO 4217 currency */
        currencyId?: string;
        /** @description Edition mode */
        mode?: "percent_diff" | "amount_diff" | "amount_set";
        /** @description Fractional price value */
        endValue?: string;
    };
    /** @description Promotion start date in Y-m-d H:i:s format */
    startDate?: string;
    /** @description Promotion end date in Y-m-d H:i:s format */
    endDate?: string;
    /** @description Change the status of hidden products to visible while starting the special offer */
    changeProductsToVisibleWhileStarting?: "y" | "n";
    /** @description After running out of stock, automatically remove from the promotion products added separately (does not apply to series, producers, categories and menu) */
    removeProductsAfterStockLevelRunsDown?: "y" | "n";
    /** @description After running out of own stock, automatically remove from the promotion products added separately (does not apply to series, producers, categories and menu) */
    removeProductsAfterOwnStockLevelRunsDown?: "y" | "n";
    /** @description Reduce based on price (net/gross) */
    reduceBasingPrice?: "net" | "gross";
    /** @description Price reduction calculation method */
    calculationMethod?: "sum" | "chooseAdvantageous";
    /** @description Elements to be affected by the promotion */
    promotionElements?: {
        /** */
        elementType?: "product" | "series" | "producer" | "category" | "menu";
        /** @description Identifier of the element affected by the promotion (in the case of a menu in the format: storeId-menuId-itemId) */
        elementId?: string;
    }[];
};

export type PutProductsMarketingZonesParams = {
    /** @description Products list. */
    products: {
        /** @description Identifier type. */
        ident: {
            /** */
            type?: "id" | "index" | "codeExtern" | "codeProducer";
            /** @description Value. */
            value?: string;
        };
        /** */
        assignment_mode?: "auto" | "manual";
        marketing_zones?: {
            /** @description Promoted product. */
            promotion?: "yes" | "no";
            /** @description Product on sale. */
            discount?: "yes" | "no";
            /** @description Distinguished product. */
            distinguished?: "yes" | "no";
            /** @description Special product. */
            special?: "yes" | "no";
        };
        /** @description Marketing hotspots in shops */
        shops?: {
            /** @description Shop Id */
            shop_id?: number;
            /** */
            assignment_mode?: "auto" | "manual";
            marketing_zones?: {
                /** @description Promoted product. */
                promotion?: "yes" | "no";
                /** @description Product on sale. */
                discount?: "yes" | "no";
                /** @description Distinguished product. */
                distinguished?: "yes" | "no";
                /** @description Special product. */
                special?: "yes" | "no";
            };
        }[];
    }[];
    /** */
    assignment_mode?: "auto" | "manual";
    marketing_zones?: {
        /** @description Promoted product. */
        promotion?: "yes" | "no";
        /** @description Product on sale. */
        discount?: "yes" | "no";
        /** @description Distinguished product. */
        distinguished?: "yes" | "no";
        /** @description Special product. */
        special?: "yes" | "no";
    };
    /** @description Marketing hotspots in shops */
    shops?: {
        /** @description Shop Id */
        shop_id?: number;
        /** */
        assignment_mode?: "auto" | "manual";
        marketing_zones?: {
            /** @description Promoted product. */
            promotion?: "yes" | "no";
            /** @description Product on sale. */
            discount?: "yes" | "no";
            /** @description Distinguished product. */
            distinguished?: "yes" | "no";
            /** @description Special product. */
            special?: "yes" | "no";
        };
    }[];
};

export type PutProductsImagesParams = {
    productsImagesSettings?: {
        /** @description How to provide information about images of products. */
        productsImagesSourceType?: "base64" | "url";
        /** @description Whether images for products should be scalable. */
        productsImagesApplyMacro?: boolean;
    };
    /** @description Information on product images */
    productsImages: {
        productIdent: {
            /** @description ID value. */
            identValue?: string;
            /** @description Identifier type. */
            productIdentType?: "id" | "index" | "codeExtern" | "codeProducer";
        };
        /** @description Shop Id */
        shopId?: number;
        /** @description List of shops for which photos will be added (including shop provided in shopId). If parameter is empty or not provided, photos will be added to all shops. */
        otherShopsForPic?: number[];
        /** @description Product photos details. */
        productImages?: {
            /** @description Product photo. */
            productImageSource?: string;
            /** @description A product photo's number. */
            productImageNumber?: number;
            /** @description Picture priority */
            productImagePriority?: number;
            /** @description Flag marking if a picture should be deleted. */
            deleteProductImage?: boolean;
        }[];
        /** @description Product icons list. */
        productIcons?: {
            /** @description Photo in the goods list. */
            productIconSource?: string;
            /** @description Flag indicating whether to remove the product icon. */
            deleteProductIcon?: boolean;
            /** @description Icon type. */
            productIconType?: "shop" | "auction" | "group";
        }[];
        /** @description Product settings. */
        productImagesSettings?: {
            /** @description How to provide information about images of product. */
            productImagesSourceType?: "base64" | "url";
            /** @description Whether images for products should be scalable. */
            productImagesApplyMacro?: boolean;
        };
    }[];
};

export type PutProductsSeriesParams = {
    /** @description Series list. */
    series: {
        /** @description Id */
        id: number;
        /** @description Name in panel */
        nameInPanel?: string;
        shopsConfigurations?: {
            /** @description Shop Id */
            shopId?: number;
            /** @description Customer language ID. */
            language?: string;
            /** @description Name on the page */
            nameOnPage?: string;
            /** @description Name displayed in the website header */
            headerName?: string;
            /** @description Description */
            description?: string;
            /** @description Products display settings */
            view?: "default" | "own";
            /** @description Enable customers to change sorting */
            enableSort?: boolean;
            /** @description Enable customers to change the number of products displayed */
            enableChangeDisplayCount?: boolean;
            /** @description Number of displayed products */
            numberOfProductsGrid?: number;
            /** @description Selected sorting mode */
            sortModeGrid?: "d_relevance" | "d_date" | "a_date" | "d_priority" | "a_priority" | "a_priorityname" | "d_priorityname" | "d_priorityonly" | "a_priorityonly" | "a_name" | "d_name" | "a_price" | "d_price";
            imagesConfiguration?: {
                /** @description Type of graphics */
                graphicType?: "img" | "img_rwd";
                /** @description Image (one size for computers, tablets and smartphones, not recommended) */
                singleGraphic?: string;
                /** @description Graphics for computer screens */
                pcGraphic?: string;
                /** @description Graphics for tablets */
                tabletGraphic?: string;
                /** @description Graphics for smartphones */
                phoneGraphic?: string;
            };
            /** @description Meta settings */
            metaSettings?: "auto" | "custom";
            /** @description Title */
            metaTitle?: string;
            /** @description Description */
            metaDescription?: string;
            /** @description Keywords */
            metaKeywords?: string;
            /** @description Meta robots settings for index attribute */
            metaRobotsSettingsIndex?: "auto" | "index" | "noindex";
            /** @description Meta robots settings for follow attribute */
            metaRobotsSettingsFollow?: "auto" | "follow" | "nofollow";
        }[];
    }[];
};

export type PutProductsSizesParams = {
    /** @description Edition mode */
    mode?: "edit" | "add" | "replace";
    /** @description Product parameters recognized by product ID or its sizes */
    sizesProductsData: {
        /** @description Product IAI code */
        productId: number;
        /** @description List of sizes */
        sizes: {
            /** @description Size identifier */
            sizeId?: string;
            /** @description Size name */
            sizePanelName?: string;
            /** @description Parameters set for sizes. */
            sizeData?: {
                /** @description Weight. */
                productWeight?: number;
                /** @description Producer code */
                codeProducer?: string;
                /** @description External product system code for size. */
                productSizeCodeExternal?: string;
                /** @description Parameters set for shops */
                sitesData?: {
                    /** @description Page ID */
                    siteId?: number;
                    /** @description Prices in shops */
                    productPrices?: {
                        /** @description Gross price */
                        productRetailPrice?: number;
                        /** @description Wholesale price */
                        productWholesalePrice?: number;
                        /** @description Minimal price */
                        productMinimalPrice?: number;
                        /** @description Recommended retail price */
                        productSuggestedPrice?: number;
                    };
                }[];
            };
        }[];
    }[];
    /** @description Product parameters recognized by index */
    indexesData?: {
        /** @description Product index. */
        sizeIndex?: string;
        /** @description Parameters set for sizes. */
        sizeData?: {
            /** @description Weight. */
            productWeight?: number;
            /** @description Producer code */
            codeProducer?: string;
            /** @description External product system code for size. */
            productSizeCodeExternal?: string;
            /** @description Parameters set for shops */
            sitesData?: {
                /** @description Page ID */
                siteId?: number;
                prices?: {
                    /** @description Retail price */
                    productPriceRetail?: number;
                    /** @description Wholesale price */
                    productPriceWholesale?: number;
                    /** @description Minimal price for product. */
                    productSearchPriceMin?: number;
                    /** @description Recommended retail price */
                    productPriceSuggested?: number;
                };
            }[];
        };
    }[];
};

export type PutProductsStockQuantityParams = {
    /** @description Products list. */
    products: {
        /** @description Product index */
        productIndex?: string;
        /** @description Product size code producer */
        productSizeCodeProducer?: string;
        /** @description External product system code for size. */
        productSizeCodeExternal: string;
        /** @description Stock ID */
        stockId: number;
        /** @description Product stock quantity */
        productSizeQuantity?: number;
        /** @description Cost price */
        productPurchasePrice?: number;
        /** @description Net purchase price */
        productPurchasePriceNet?: number;
    }[];
};

export type PutProductsStocksParams = {
    /** @description Products list. */
    products: {
        ident: {
            /** */
            identType?: "id" | "index" | "codeExtern" | "codeProducer";
            /** @description ID value. */
            identValue?: string;
        };
        /** @description List of sizes */
        sizes: {
            ident: {
                /** */
                identType?: "id" | "index" | "codeExtern" | "codeProducer";
                /** @description ID value. */
                identValue?: string;
            };
            /** @description Product quantity. */
            quantity?: {
                /** @description Stock operations. */
                stocks?: {
                    /** @description Stock ID. */
                    stock_id?: number;
                    quantity_operation?: {
                        /** @description Operation type. */
                        operation?: "set" | "add" | "substract";
                        /** @description Product quantity. */
                        quantity?: number;
                    };
                    /** @description Warehouse location ID. */
                    location_id?: number;
                    /** @description Warehouse location full path. Use a backslash (\) as a separator, for example:  M1\Section name\Location name. If location_id parameter is provided, the full warehouse location path will not be taken into account. */
                    location_text_id?: string;
                    /** @description Storage location code */
                    location_code?: string;
                    /** @description Additional locations. */
                    additionalLocations?: {
                        /** @description Element specifying the modification mode for additional locations. Available values: "add" - assignment of additional product location, "remove" - Remove the assignment of an additional location to the product. */
                        additionalLocationSettings?: "add" | "remove";
                        /** @description Warehouse location ID. */
                        additionalLocationId?: number;
                        /** @description Warehouse location full path. */
                        additionalLocationTextId?: string;
                        /** @description Storage location code */
                        additionalLocationCode?: string;
                    }[];
                }[];
            };
        }[];
        settings?: {
            productIndent?: {
                /** */
                identType?: "id" | "index" | "codeExtern" | "codeProducer";
                /** @description ID value. */
                identValue?: string;
            };
            sizesIndent?: {
                /** */
                identType?: "id" | "index" | "codeExtern" | "codeProducer";
                /** @description ID value. */
                identValue?: string;
            };
        };
        /** @description Error information. */
        error?: {
            /** @description Error code. */
            faultCode?: number;
            /** @description Error description. */
            faultString?: string;
        };
    }[];
};

export type PutProductsSupplierCodeParams = {
    /** @description Products list. */
    products: {
        /** @description Product IAI code */
        productId: number;
        /** @description Suppliers data */
        productDeliverers: {
            /** @description Supplier ID. */
            delivererId?: number;
            /** @description Sizes available for products data. */
            productSizes?: {
                /** @description Size identifier */
                sizeId?: string;
                /** @description Supplier code for size */
                sizeDelivererCode?: string;
            }[];
        }[];
    }[];
};

export type PutProductsMarketingPromotionParams = {
    /** @description Promotion ID */
    promotionId: string;
    /** @description Promotion name */
    promotionName?: string;
    /** @description List of stores IDs When mask is determined, this parameter is omitted. */
    shopsIds?: number[];
    /** @description Special zones */
    marketingZones?: {
        /** @description Reduced price */
        promotion?: "y" | "n";
        /** @description Sale */
        discount?: "y" | "n";
        /** @description Distinguished product */
        distinguished?: "y" | "n";
        /** @description Special product */
        special?: "y" | "n";
        /** @description New */
        new?: "y" | "n";
    };
    /** @description Promotional price settings */
    newPriceSettings?: {
        /** */
        type?: "retail" | "wholesale" | "pos";
        /** @description Discount value */
        discountValue?: number;
        /** @description ISO 4217 currency */
        currencyId?: string;
        /** @description Edition mode */
        mode?: "percent_diff" | "amount_diff" | "amount_set";
        /** @description Fractional price value */
        endValue?: string;
    };
    /** @description Promotion start date in Y-m-d H:i:s format */
    startDate?: string;
    /** @description Promotion end date in Y-m-d H:i:s format */
    endDate?: string;
    /** @description Change the status of hidden products to visible while starting the special offer */
    changeProductsToVisibleWhileStarting?: "y" | "n";
    /** @description After running out of stock, automatically remove from the promotion products added separately (does not apply to series, producers, categories and menu) */
    removeProductsAfterStockLevelRunsDown?: "y" | "n";
    /** @description After running out of own stock, automatically remove from the promotion products added separately (does not apply to series, producers, categories and menu) */
    removeProductsAfterOwnStockLevelRunsDown?: "y" | "n";
    /** @description Reduce based on price (net/gross) */
    reduceBasingPrice?: "net" | "gross";
    /** @description Price reduction calculation method */
    calculationMethod?: "sum" | "chooseAdvantageous";
    /** @description Specifies whether to remove all existing promotion elements */
    removeAllPromotionElements?: "y" | "n";
    /** @description Elements to be affected by the promotion */
    promotionElements?: {
        /** */
        elementType?: "product" | "series" | "producer" | "category" | "menu";
        /** @description Identifier of the element affected by the promotion (in the case of a menu in the format: storeId-menuId-itemId) */
        elementId?: string;
    }[];
};

export type PutProductsOmnibusPricesParams = {
    /** @description Products list. */
    products: {
        /** @description Identifier type. */
        ident: {
            /** */
            type?: "id" | "index" | "codeExtern" | "codeProducer";
            /** @description Value. */
            value?: string;
        };
        /** @description List of sizes */
        sizes?: {
            /** @description Identifier type. */
            ident?: {
                /** */
                type?: "id" | "index" | "codeExtern" | "codeProducer";
                /** @description Value. */
                value?: string;
            };
            /** @description Strikethrough price settings. */
            omnibusPrices?: {
                /** @description How to manage the lowest price before promotion. */
                omnibusPriceManagement?: "automatic" | "manual";
                /** @description Lowest retail price before active promotion (gross). */
                omnibusPriceRetail?: number;
                /** @description Lowest wholesale price before active promotion (gross). */
                omnibusPriceWholesale?: number;
            };
            /** @description Strikethrough price settings for the page. */
            shops?: {
                /** @description Shop Id */
                shopId?: number;
                /** @description Strikethrough price settings. */
                omnibusPrices?: {
                    /** @description How to manage the lowest price before promotion. */
                    omnibusPriceManagement?: "automatic" | "manual";
                    /** @description Lowest retail price before active promotion (gross). */
                    omnibusPriceRetail?: number;
                    /** @description Lowest wholesale price before active promotion (gross). */
                    omnibusPriceWholesale?: number;
                };
            }[];
        }[];
        /** @description Strikethrough price settings. */
        omnibusPrices?: {
            /** @description How to manage the lowest price before promotion. */
            omnibusPriceManagement?: "automatic" | "manual";
            /** @description Lowest retail price before active promotion (gross). */
            omnibusPriceRetail?: number;
            /** @description Lowest wholesale price before active promotion (gross). */
            omnibusPriceWholesale?: number;
        };
        /** @description Strikethrough price settings for the page. */
        shops?: {
            /** @description Shop Id */
            shopId?: number;
            /** @description Strikethrough price settings. */
            omnibusPrices?: {
                /** @description How to manage the lowest price before promotion. */
                omnibusPriceManagement?: "automatic" | "manual";
                /** @description Lowest retail price before active promotion (gross). */
                omnibusPriceRetail?: number;
                /** @description Lowest wholesale price before active promotion (gross). */
                omnibusPriceWholesale?: number;
            };
        }[];
    }[];
};

export type PutProductsQuestionsParams = {
    /** @description Question Board. */
    questions: {
        /** @description Question ID. */
        id?: number;
        /** @description Language of the question e.g. 'pol', 'eng'. */
        lang?: string;
        /** @description Your question(base64). */
        question?: string;
        /** @description Content of the answer(base64). */
        answer?: string;
        /** @description The date the question was created. */
        dateAdd?: string;
        /** @description The name and address of the host from which the question was added. */
        host?: string;
        /** @description Author. */
        author?: string;
        /** @description Stock keeping unit. */
        productIdent?: {
            /** @description Product IAI code */
            productId?: string;
            /** @description Identifier type. */
            productIdentType?: "id" | "codeExtern" | "codeProducer";
        };
        /** @description Visibility: "y" - yes, "n" - no */
        visible?: "n" | "y";
        /** @description Priority. */
        priority?: number;
        /** @description Validate the question: "y" - yes, "n" - no */
        confirmed?: "n" | "y";
        /** @description Shop Id */
        shopId?: number;
        /** @description Date of response. */
        answerDate?: string;
        /** @description Response author. */
        answerAuthor?: string;
    }[];
};

export type PutProductsStrikethroughPricesParams = {
    /** @description Products list. */
    products: {
        /** @description Identifier type. */
        ident: {
            /** */
            type?: "id" | "index" | "codeExtern" | "codeProducer";
            /** @description Value. */
            value?: string;
        };
        /** @description List of sizes */
        sizes?: {
            /** @description Identifier type. */
            ident?: {
                /** */
                type?: "id" | "index" | "codeExtern" | "codeProducer";
                /** @description Value. */
                value?: string;
            };
            stp_settings?: {
                /** */
                price_change_mode?: "amount_set" | "amount_diff" | "percent_diff";
                /** */
                price_change_basevalue?: "price" | "price_minimal" | "price_pos" | "price_srp" | "price_crossed";
                /** @description Strikethrough retail price value change in relation to the starting price. */
                retail_price_change_value?: number;
                /** @description Strikethrough wholesale price value change in relation to the starting price. */
                wholesale_price_change_value?: number;
            };
            /** @description Strikethrough price settings for the page. */
            shops?: {
                /** @description Shop Id */
                shop_id?: number;
                stp_settings?: {
                    /** */
                    price_change_mode?: "amount_set" | "amount_diff" | "percent_diff";
                    /** */
                    price_change_basevalue?: "price" | "price_minimal" | "price_pos" | "price_srp" | "price_crossed";
                    /** @description Strikethrough retail price value change in relation to the starting price. */
                    retail_price_change_value?: number;
                    /** @description Strikethrough wholesale price value change in relation to the starting price. */
                    wholesale_price_change_value?: number;
                };
            }[];
        }[];
        stp_settings?: {
            /** */
            price_change_mode?: "amount_set" | "amount_diff" | "percent_diff";
            /** */
            price_change_basevalue?: "price" | "price_minimal" | "price_pos" | "price_srp" | "price_crossed";
            /** @description Strikethrough retail price value change in relation to the starting price. */
            retail_price_change_value?: number;
            /** @description Strikethrough wholesale price value change in relation to the starting price. */
            wholesale_price_change_value?: number;
        };
        /** @description Strikethrough price settings for the page. */
        shops?: {
            /** @description Shop Id */
            shop_id?: number;
            stp_settings?: {
                /** */
                price_change_mode?: "amount_set" | "amount_diff" | "percent_diff";
                /** */
                price_change_basevalue?: "price" | "price_minimal" | "price_pos" | "price_srp" | "price_crossed";
                /** @description Strikethrough retail price value change in relation to the starting price. */
                retail_price_change_value?: number;
                /** @description Strikethrough wholesale price value change in relation to the starting price. */
                wholesale_price_change_value?: number;
            };
        }[];
    }[];
};

export type PutProductsSupplierProductDataParams = {
    /** @description Products list. */
    products: {
        /** @description Product IAI code */
        productId: number;
        /** @description Suppliers data */
        productDeliverers?: {
            /** @description Supplier ID. */
            delivererId?: number;
            /** @description Sizes available for products data. */
            productSizes?: {
                /** @description Size identifier */
                sizeId?: string;
                /** @description Supplier code */
                sizeDelivererCode?: string;
                /** @description Supplier's stock level */
                quantity?: number;
                /** @description Last purchase price */
                lastPrice?: number;
                /** @description Last net purchase price */
                lastPriceNet?: number;
            }[];
            /** @description #!UstawieniePozwalaWyzerowacStanyMagazynowegoDostawcyDlaWszystkichRozmiarowDanegoProduktu!# */
            clearAllQuantities?: boolean;
        }[];
    }[];
};

export type PostOrdersDocumentsParams = {
    /** @description List of documents. */
    documents: {
        /** @description Order serial number. */
        orderSerialNumber: number;
        /** @description File name. */
        name: string;
        /** @description BMP, PNG, JPG, JPEG, GIF or PDF files in Base64 encoding algorithm. */
        pdfBase64?: string;
        /** @description Document type. */
        type?: "vat_invoice" | "corrective_vat_invoice" | "other";
        /** @description Is it to be shown to the customer in the order view. */
        returnedInOrderDetails?: "y" | "n";
        /** @description Additional information. */
        additionalData?: {
            /** @description Document number. */
            documentId?: string;
            /** @description The date document was issued in the ISO 8601 format (YYYY-MM-DD). */
            documentIssuedDate?: string;
        };
    }[];
};

export type PostOrdersImagesParams = {
    /** @description Login */
    userName?: string;
    settings?: {
        /** @description Source type. Available values: base64 - Attachment data encoded using the base64 algorithm, url - Attachment file link */
        sourceType?: "base64" | "url";
    };
    order: {
        /** @description Order ID */
        orderId?: string;
        /** @description Order serial number */
        orderSerialNumber?: number;
    };
    /** @description List of image attachments */
    images: {
        /** @description Type. Available values: product - Product photo, package - Package photo */
        type?: "product" | "package";
        /** @description Attachment source data, depending on the source type selected in the settings. BMP, PNG, JPG, JPEG, GIF or PDF files in Base64 encoding algorithm. */
        source?: string;
        /** @description Name */
        name?: string;
    }[];
};

export type PostOrdersPackagesParams = {
    /** @description List of parcels assigned to the order Maximum default number: 100 parcels. */
    orderPackages: {
        /** @description Id. */
        eventId: string;
        /** @description Type. */
        eventType: "order" | "rma" | "return";
        /** @description Information on consignments. */
        packages: {
            /** @description Shipment ID. */
            deliveryPackageId?: number;
            /** @description Courier ID. */
            courierId?: string;
            /** @description Package number. */
            deliveryPackageNumber?: string;
            /** @description consignment number. */
            deliveryShippingNumber?: string;
            /** @description Package parameters. */
            deliveryPackageParameters?: {
                /** @description Product weight (g). */
                productWeight?: number;
                /** @description Packaging weight (g). */
                packagingWeight?: number;
            };
            /** @description Cost for shop. */
            shippingStoreCosts?: {
                /** @description Value. */
                amount?: number;
                /** @description Value Added Tax. */
                tax?: number;
            };
        }[];
    }[];
};

export type PostPackagesParams = {
    /** @description List of parcels assigned to the order Maximum default number: 100 parcels. */
    orderPackages: {
        /** @description Order ID. */
        orderId: string;
        /** @description Order type. Allowed values. "retail" - retail order, "wholesale" - wholesale order (can be added only by customer with wholesale account registered). Default value:: "retail" */
        orderType: "order" | "rma" | "return";
        /** @description Information on consignments. */
        packages: {
            /** @description Courier Id. */
            delivery?: number;
            /** @description Number of the parcel in the shipmnet given by the courier. Returned only if the courier supports parcel numbers */
            packageNumber?: string;
            /** @description Shipment number provided by the courier. Returned only if the courier supports tracking numbers */
            shippingNumber?: string;
            /** @description Package parameters (this option is temporarily unavailable). */
            packageParameters?: string;
            /** @description Cost for shop. */
            shippingStoreCosts?: {
                /** @description Value. */
                amount?: number;
                /** @description Value Added Tax. */
                tax?: number;
            };
        }[];
    }[];
};

export type PostProductsProductsToFacebookCatalogParams = {
    /** @description You can read the Facebook Catalog ID in the Marketing & Integrations/Facebook/Facebook Product Catalog admin panel */
    facebookCatalogId?: number;
    /** @description Shop Id */
    shopId?: number;
    /** @description Products list. */
    products?: number[];
};

export type PostProductsProductsToPromotionParams = {
    /** @description Special offer ID */
    promotionId?: number;
    /** @description Products list. */
    products?: number[];
};

export type SearchProductsCategoriesIdosellParams = {
    /** @description List of languages */
    languagesIds?: ("pol" | "eng" | "ger")[];
    /** @description Number of IdoSell Categories identifiers */
    categoriesIdoSellIds?: string[];
    /** @description IdoSell Categories name list */
    categoriesIdoSellNames?: string[];
    /** @description IdoSell Categories path list */
    categoriesIdoSellPaths?: string[];
    /** @description Page with results number. Numeration starts from 0 */
    resultsPage?: number;
    /** @description Number of results on page. Value from 1 to 100 */
    resultsLimit?: number;
};

export type PostClientsPricelistsParams = {
    /** @description Name of individual price list. */
    priceListName: string;
    /** @description Restrict visibility to products listed in price list (other products will remain hidden) - yes - no */
    onlyOrderProductsWithManuallySetPrices?: "yes" | "no";
    /** @description Restrict products visibility to products listed in price list, remaining products will be seen as "Call for price" - yes - no */
    onlySeeProductsWithManuallySetPrices?: "yes" | "no";
};

export type PutClientsPricelistsParams = {
    /** @description Individual price list ID. */
    priceListId: number;
    /** @description Name of individual price list. */
    priceListName?: string;
    /** @description Restrict visibility to products listed in price list (other products will remain hidden) - yes - no */
    onlyOrderProductsWithManuallySetPrices?: "yes" | "no";
    /** @description Restrict products visibility to products listed in price list, remaining products will be seen as "Call for price" - yes - no */
    onlySeeProductsWithManuallySetPrices?: "yes" | "no";
};

export type PutClientsPricelistsClientsParams = {
    /** @description Individual price list ID. */
    priceListId: number;
    /** @description Customer numbers. */
    clientsIds: number[];
};

export type PutClientsPricelistsProductsParams = {
    /** @description Individual price list ID. */
    priceListId: number;
    /** @description Products list. */
    products?: {
        /** @description Product IAI code */
        productId?: number;
        /** @description Price. */
        price?: number;
        /** @description Currency ID */
        currencyId?: string;
    }[];
    /** @description List of manufacturers assigned to sought products. */
    producers?: {
        /** @description Brand ID */
        producerId?: number;
        /** @description Price. */
        price?: number;
        /** @description Currency ID */
        currencyId?: string;
    }[];
    /** @description Series list. */
    series?: {
        /** @description ID of series, to which product belongs. */
        seriesId?: number;
        /** @description Price. */
        price?: number;
        /** @description Currency ID */
        currencyId?: string;
    }[];
    /** @description List of categories in which sought products are present. */
    categories?: {
        /** @description Category id */
        categoryId?: number;
        /** @description Price. */
        price?: number;
        /** @description Currency ID */
        currencyId?: string;
    }[];
    menuItems?: {
        /** @description ID of the menu node to which the product is to be assigned */
        menuItemId?: number;
        /** @description Price. */
        price?: number;
        /** @description Currency ID */
        currencyId?: string;
    }[];
};

export type PutClientsPricelistsRenameParams = {
    /** @description Name of individual price list. */
    priceListName?: string;
    /** @description Individual price list ID. */
    priceListId: number;
};

export type PostClientsBalanceParams = {
    /** @description Unique client's number. */
    clientId: number;
    /** @description Operation: - add, - remove. */
    operation: string;
    /** @description Value to add or remove from balance. */
    balance: number;
    /** @description Currency of operation. */
    currency: string;
    /** @description Note. */
    note?: string;
    /** @description Order payment identifier. */
    prepaidId?: number;
};

export type PostClientsGiftcardsParams = {
    /** @description List of cards to add */
    giftCards: {
        /** @description Gift card type id */
        typeId: number;
        /** @description Card number */
        number: string;
        /** @description Card PIN */
        pin: string;
        /** @description Name of card */
        name: string;
        /** @description Card expiration date */
        expirationDate?: string;
        /** @description Card balance */
        balance: {
            /** @description Available balance */
            amount?: number;
            /** @description Currency. */
            currency?: string;
        };
        /** @description List of shops the card is active in */
        shops: number[];
        /** @example note */
        note?: string;
    }[];
};

export type PostClientsTagsParams = {
    params: {
        /** @description Unique client's number. */
        clientId: number;
        /** @description Tag name. */
        tagName: string;
        /** @description Tag value. */
        tagValue: number;
    }[];
};

export type PostDeliveriesRegionsParams = {
    /** @description Name of the region in the panel */
    regionName?: string;
    /** @description Shop Id */
    shopId?: number;
    /** @description The range of postal codes from %s */
    postCodeFrom?: string;
    /** @description The range of postal codes to %s */
    postCodeTo?: string;
    /** @description ID of the country for which the region is being added */
    parentRegionId: number;
};

export type PostDiscountsGroupsParams = {
    /** @description Discount group name */
    discountGroupName: string;
};

export type PostDiscountsRebatesCardParams = {
    /** @description Discount card type */
    campaign_id: number;
    /** @description Card number */
    card_number: string;
};

export type PostDiscountsRebatesCodeParams = {
    /** @description Campaign ID */
    campaign_id: number;
    /** @description Code */
    code_number: string;
};

export type PutClientsExternalCodeParams = {
    /** @example 1 */
    client_id?: number;
    /** @description Customer's login. */
    client_login?: string;
    /** @description External system code. */
    code_extern?: string;
};

export type PutClientsGiftcardsParams = {
    /** @description List of cards to edit */
    giftCards: {
        /** @description Card ID */
        id?: number;
        /** @description Card number */
        number?: string;
        /** @description Card PIN */
        pin?: string;
        /** @description Name of card */
        name?: string;
        /** @description Card expiration date */
        expirationDate?: string;
        /** @description Balance operation type, possible values: - set - balance positioning of funds, - add - add funds to balance, - subtract - subtract funds from balance. */
        balanceOperationType?: "set" | "add" | "subtract";
        /** @description Card balance */
        balance?: {
            /** @description Available balance */
            amount?: number;
            /** @description Currency ID */
            currency?: string;
        };
        /** @description List of shops the card is active in */
        shops?: number[];
        /** @example note */
        note?: string;
    }[];
};

export type PutClientsGiftcardsBlockParams = {
    /** @description List of gift cards */
    giftCards: {
        /** @description Card ID */
        id?: number;
        /** @description Card number */
        number?: string;
    }[];
};

export type PutClientsGiftcardsUnblockParams = {
    /** @description List of gift cards */
    giftCards: {
        /** @description Card ID */
        id?: number;
        /** @description Card number */
        number?: string;
    }[];
};

export type PutClientsMembershipCardsParams = {
    /** @description Customer ID. */
    id?: number;
    /** @description Customer's login. */
    login?: string;
    membership_cards: {
        /** @description Card ID entered by customer. */
        ordinal_number?: number;
        /** @description Card ID. */
        card_type?: number;
        /** @description Loyalty card number. */
        number?: string;
        /** @description Card PIN. */
        pin?: number;
        /** @description Issue date. */
        creation_date?: string;
        /** @description Determines whether a card should be deactivated. */
        deactivate?: boolean;
        /** @description Flag that determines whether a discount group should be set. */
        set_rebate_group?: boolean;
        /** @description Information on error that occurred during gate call. */
        errors?: {
            /** @description Error code. List of error codes: 0 - Operation was successful, 1 - Login failure: invalid username or key, 2 - Empty result, 3 - No parameters were received, 4 - Shop has been blocked due to number of overdue invoices owed to IAI Company */
            faultCode?: number;
            /** @description Error description. */
            faultString?: string;
        };
    }[];
};

export type PutClientsPricesDiscountsParams = {
    customers?: {
        customers_numbers?: number[];
    };
    /** @description Discount type, possible values: - simple */
    discount_type?: string;
    /** @description Action, possible values: - sum_with_other_discounts_to_orders - sum with other discounts assigned to orders, - use_only_if_greater_than_the_sum_of_other_discounts - use only if greater than the sum of other discounts */
    discount_operating?: string;
    discount_parameters: {
        /** @description Parameter type. - DEPRECATED */
        parameter_type?: string;
        /** @description Parameter text ID. - DEPRECATED */
        parameter_value?: string;
        /** Format: decimal
         * @description Size of discount. */
        discount_value?: number;
    }[];
};

export type PutClientsTagsParams = {
    /** @description Unique client's number. */
    clientId?: number;
    clientTags: {
        /** @description Tag ID. */
        tagId?: number;
        /** */
        operation?: "add" | "set" | "subtract";
        /** @description Tag value. */
        tagValue?: number;
    }[];
};

export type PutPackagesParams = {
    /** @description List of parcels assigned to the order Maximum default number: 100 parcels. */
    orderPackages: {
        /** @description Order ID. */
        orderId?: string;
        /** @description Order type. Allowed values. "retail" - retail order, "wholesale" - wholesale order (can be added only by customer with wholesale account registered). Default value:: "retail" */
        orderType?: "order" | "rma" | "return";
        /** @description Information on consignments. */
        packages?: {
            /** @description Package ID in system. */
            packageId?: number;
            /** @description Courier Id. */
            delivery?: number;
            /** @description Number of the parcel in the shipmnet given by the courier. Returned only if the courier supports parcel numbers */
            packageNumber?: string;
            /** @description Shipment number provided by the courier. Returned only if the courier supports tracking numbers */
            shippingNumber?: string;
            /** @description Package parameters (this option is temporarily unavailable). */
            packageParameters?: string;
            /** @description Cost for shop. */
            shippingStoreCosts?: {
                /** @description Value. */
                amount?: number;
                /** @description Value Added Tax. */
                tax?: number;
            };
        }[];
    }[];
};

export type PostClientsProfitPointsParams = {
    /** @example 1 */
    client_id: number;
    /** @description Operation: - add, - remove. */
    operation: string;
    /** @description Amount of points to add or subtract. */
    score: number;
    /** @example note */
    note?: string;
    /** @description Prepayment ID. */
    order_number?: number;
};

export type PutDiscountsGroupsParams = {
    /** @description Discount group ID */
    discountGroupId: number;
    /** @description Discount group name */
    discountGroupName: string;
};

export type PutDiscountsRebatesBlockCardParams = {
    /** @description Card number */
    card_number: string;
};

export type PutDiscountsRebatesUnblockCardParams = {
    /** @description Card number */
    card_number: string;
};

export type PutOrdersClientParams = {
    /** @description Order serial number. */
    orderSerialNumber?: number;
    /** @description Unique client's number. */
    clientId?: number;
};

export type PutOrdersCourierParams = {
    /** @description Order serial number. */
    orderSerialNumber: number;
    /** @description Courier ID. */
    courierId: number;
    /** @description Collection point ID. */
    pickupPointId?: string;
};

export type PutOrdersDeliveryAddressParams = {
    /** @description Order serial number. */
    orderSerialNumber: number;
    /** @description Delivery address ID. */
    clientDeliveryAddressId: number;
    /** @description Customer's login. */
    clientLogin: string;
};

export type PutOrdersHandlerParams = {
    /** @description Order serial number. */
    orderSerialNumber: number;
    /** @description Order handler. */
    orderOperatorLogin: string;
};

export type PutOrdersPackagesParams = {
    /** @description List of parcels assigned to the order Maximum default number: 100 parcels. */
    orderPackages: {
        /** @description Id. */
        eventId: string;
        /** @description Type. */
        eventType: "order" | "rma" | "return";
        /** @description Information on consignments. */
        packages?: {
            /** @description Shipment ID. */
            deliveryPackageId?: number;
            /** @description Courier ID. */
            courierId?: string;
            /** @description Package number. */
            deliveryPackageNumber?: string;
            /** @description consignment number. */
            deliveryShippingNumber?: string;
            /** @description Package parameters. */
            deliveryPackageParameters?: {
                /** @description Product weight (g). */
                productWeight?: number;
                /** @description Packaging weight (g). */
                packagingWeight?: number;
            };
            /** @description Cost for shop. */
            shippingStoreCosts?: {
                /** @description Value. */
                amount?: number;
                /** @description Value Added Tax. */
                tax?: number;
            };
        }[];
    }[];
};

export type PutVouchersUnblockParams = {
    vouchers: {
        /** @description Voucher ID */
        id?: number;
        /** @description Number. */
        number?: string;
    }[];
};

export type PutVouchersBlockParams = {
    vouchers: {
        /** @description Voucher ID */
        id?: number;
        /** @description Number. */
        number?: string;
    }[];
};

export type PutProductsGroupsSettingsParams = {
    groups: {
        productIdent: {
            /** @description Identifier type. */
            productIdentType?: "id" | "index" | "codeExtern" | "codeProducer";
            /** @description ID value. */
            identValue?: string;
        };
        /** @description Display on the product list in the panel. */
        displayInPanel?: "firstAvailable" | "all";
        /** @description Display on a product list on the page. */
        displayOnPage?: "firstAvailable" | "all" | "specified";
        /** @description Selected product in the group. */
        specifiedProductIdent?: {
            /** @description Identifier type. */
            productIdentType?: "id" | "index" | "codeExtern" | "codeProducer";
            /** @description ID value. */
            identValue?: string;
        };
    }[];
};

export type PutOrdersWarehouseParams = {
    /** @description Order serial number. */
    orderSerialNumber: number;
    /** @description Stock ID */
    stockId: number;
    /** @description Order handler. */
    orderOperatorLogin?: string;
    /** @description External warehouse ID (if required) */
    externalStockId?: "amazonde" | "amazones" | "amazonfr" | "amazonit" | "amazoncouk" | "amazonnl" | "amazonse" | "amazoncomtr" | "amazonae" | "amazonus" | "amazonpl";
};

export type PutOrdersShippingCostsParams = {
    /** @description Order serial number. */
    orderSerialNumber: number;
    /** @description Delivery cost. */
    deliveryCost: number;
    /** @description Delivery VAT. */
    orderDeliveryVat?: number;
};

export type PutOrdersProfitMarginParams = {
    /** @description Orders. */
    orders: {
        /** @description Order serial number. */
        orderSerialNumber?: number;
        /** @description Products list. */
        products?: {
            productIdent?: {
                /** @description ID value. */
                identValue?: string;
                /** @description Identifier type. */
                productIdentType?: "id" | "index" | "codeExtern";
            };
            /** @description Size identifier */
            sizeId?: string;
            /** @description Product profit margin gross. */
            productProfitMargin?: number;
            /** @description Product profit margin net. */
            productProfitMarginNet?: number;
            /** @description Information on error that occurred during gate call. */
            errors?: {
                /** @description Error code. */
                faultCode?: number;
                /** @description Error description. */
                faultString?: string;
            };
        }[];
        /** @description Information on error that occurred during gate call. */
        errors?: {
            /** @description Error code. */
            faultCode?: number;
            /** @description Error description. */
            faultString?: string;
        };
        /** @description Flag marking errors in the result. */
        isProductsErrors?: boolean;
    }[];
};

export type PutOrdersPickupPointParams = {
    /** @description Order serial number. */
    orderSerialNumber: number;
    /** @description Collection point ID. */
    pickupPointId: string;
};

export type PutDiscountsGroupsProductsParams = {
    /** @description Discount group ID */
    discountGroupId: number;
    /** @description Products list. */
    products?: {
        /** @description ID */
        id?: number;
        /** @description Price */
        price?: number;
        /** @description Currency. */
        currency?: string;
    }[];
    /** @description Brands */
    producers?: {
        /** @description ID */
        id?: number;
        /** @description Price */
        price?: number;
        /** @description Currency. */
        currency?: string;
    }[];
    /** @description Series */
    series?: {
        /** @description ID */
        id?: number;
        /** @description Price */
        price?: number;
        /** @description Currency. */
        currency?: string;
    }[];
    /** @description List of categories in which sought products are present. */
    categories?: {
        /** @description ID */
        id?: number;
        /** @description Price */
        price?: number;
        /** @description Currency. */
        currency?: string;
    }[];
    /** @description Menu elements */
    menuItems?: {
        /** @description ID */
        id?: number;
        /** @description Price */
        price?: number;
        /** @description Currency. */
        currency?: string;
    }[];
};

export type PutOrdersProductsSerialNumbersParams = {
    /** @description Orders. */
    orders: {
        /** @description Order serial number. */
        orderSerialNumber: number;
        /** @description Products list. */
        orderProducts: {
            /** @description Product IAI code */
            productId?: number;
            /** @description Size identifier */
            sizeId?: string;
            /** @description Serial numbers. */
            productSerialNumbers?: string[];
        }[];
    }[];
};

export type PutProductsGroupsOrderParams = {
    groups: {
        productsInOrder: {
            productIdent?: {
                /** @description Identifier type. */
                productIdentType?: "id" | "index" | "codeExtern" | "codeProducer";
                /** @description ID value. */
                identValue?: string;
            };
            /** @description The order of products in the group. Value needs to be more than 0. */
            priority?: number;
        }[];
    }[];
};

export type PostPaymentsCancelParams = {
    /** @description Defines payment category. For the payments regarding returns, enter 'return'. */
    sourceType: "order" | "return" | "rma";
    /** @description Payment number - [order no.]-[payment no.], i.e. 1234-1. */
    paymentNumber: string;
};

export type PutPaymentsConfirmParams = {
    /** @description Defines payment category. For the payments regarding returns, enter 'return'. */
    sourceType: "order" | "return" | "rma";
    /** @description Payment number - [order no.]-[payment no.], i.e. 1234-1. */
    paymentNumber: string;
    /** @description Registering date */
    accountingDate?: string;
};

export type PutConfigVariablesParams = {
    variables: ({
        /** @description Key of config value. */
        key: string;
        /** @description Name of config item. */
        readonly name?: string;
        /** @description Value of config item. */
        value?: string;
    } & {
        /** @description The type of module for which the configuration is used */
        type: "snippets_campaign";
        /** @description Identifier of the item in used module */
        itemId: number;
        /** @description Name of config item. */
        name?: string;
    })[];
};

export type PutMenuSortParams = {
    menu_list: {
        /** @description Shop Id. */
        shop_id: number;
        /** @description Menu ID. */
        menu_id: number;
        /** @description Language ID. */
        lang_id: string;
        /** @description Menu element text identifier. */
        parent_id?: number;
        /** @description Menu element text identifier. Example: "item1\item2\item3". */
        parent_textid?: string;
        /** @description Recurring: y/n! */
        recursive?: "y" | "n";
    }[];
    /** @description Settings */
    settings?: {
        /** @description Default: "\". */
        textid_separator?: string;
    };
};

export type PutSystemConfigParams = {
    /** @description Panel settings */
    panelSettings: {
        /** @description The main warehouse and sales system */
        mainStockSystem?: "other" | "iai";
        /** @description Stock quantities in third party application */
        stockStateConfig?: "uncontrolled" | "bridge" | "outside";
        /** @description Fiscal and settlement settings */
        taxSettings?: {
            /** @description Sales date settings on sales documents for prepaid orders */
            saleDatePrepaid?: "saleDateFromOrder" | "saleDateFromPayment" | "saleDateFromDocument";
            /** @description Sales date settings on sales documents for orders paid with cash on delivery */
            saleDateCashOnDelivery?: "saleDateFromOrder" | "saleDateFromPayment" | "saleDateFromDocument";
            /** @description Sales date settings on sales documents for orders paid with trade credit */
            saleDateTradeCredit?: "saleDateFromOrder" | "saleDateFromPayment" | "saleDateFromDocument";
            /** @description Configuration of default currency rate for orders */
            currencyRate?: "currentDay" | "previousDay";
        };
        shops?: {
            /** @description Shop Id */
            shopId?: number;
            /** @description Sales documents in third party application. */
            salesDocumentsAreCreatedByClient?: "y" | "n";
        }[];
    };
};

export type PutSystemProcessesAutomationParams = {
    /** @description Shop Id */
    shopId?: number;
    /** @description Orders. */
    orders: {
        /** @description Allow the status to be changed to "Shipped" even if the order payments and stock levels do not match */
        alwaysAllowSentStatus?: "y" | "n";
        /** @description Order management restrictions */
        restrictions?: {
            /** @description Block the ability of selecting a status, if there are products in the warehouse from which the order is being processed, with insufficient stock level. */
            blockIfIncorrectStockQuantities?: {
                /** */
                finished?: "y" | "n";
            };
        };
    };
};

export type PutWarrantiesLanguageDataParams = {
    lang_data: {
        /** @description Warranty ID (numeric or text based). */
        warranty_id: string;
        lang: {
            /** @description Warranty language id (numeric) (three letter sequence). */
            lang_id?: string;
            /** @description Warranty name. */
            name?: string;
            /** @description warranty icon for language. */
            icon?: string;
            icon_settings?: {
                /** */
                format?: "jpg" | "gif" | "png";
                /** */
                data_type?: "url" | "base64";
            };
            /** @description Warranty description. */
            description?: string;
        }[];
    }[];
};

export type PutDeliveriesDefaultProfilesParams = {
    /** @description Country ID */
    regionId: number;
    /** @description Shop Id */
    shopId: number;
    /** @description ID of delivery profile for retail sales */
    retailProfileId?: number;
    /** @description ID of delivery profile for wholesale sales */
    wholesaleProfileId?: number;
};

export type PutReturnsSerialNumberParams = {
    /** @description Return number. */
    return_id: number;
    /** @description Products list. */
    products: {
        /** @description Product ID. */
        id?: number;
        /** @description Size ID. */
        size: string;
        serialNumbers: string[];
    }[];
};

export type PutWmsStocksdocumentsDocumentsParams = {
    /** @description Document identifier. */
    stockDocumentId: number;
    /** @description Document type. Available values: "pz" - goods received note (GRN), "pw" - internal delivery note (IDN), "px" - goods received correction note (GRX), "rx" - goods despatch note (GRN) , "rw" - goods issued note (GIN), "mm" - inter-warehouse transfer. */
    stockDocumentType: "pz" | "pw" | "px" | "rx" | "rw" | "mm";
    /** @description Number of purchase document */
    stockDocumentNumber?: string;
    /** @description Target warehouse ID. The list of available warehouses can be downloaded via the method <a href = "en/shop/api/?action=method&function=systemconfig&method=get">#get</a> in gateway <a href = "en/shop/api/?action=documentation&function=systemconfig">SystemConfig</a>. */
    stockId?: number;
    /** @description Source warehouse ID. The list of available warehouses can be downloaded via the method <a href = "en/shop/api/?action=method&function=systemconfig&method=get">#get</a> in gateway <a href = "en/shop/api/?action=documentation&function=systemconfig">SystemConfig</a>. */
    stockSourceId?: number;
    /** @example note */
    note?: string;
    /** @description Products available in presales. Available values: "y" - yes, "n" - no. */
    productsInPreorder?: "y" | "n";
    /** @description Supplier ID. */
    delivererId?: number;
    /** @description Type of purchase document. Available values: "national_VAT_invoice" - National VAT invoice, "other_purchase_document" - Other purchase document, "invoice_without_VAT" - Invoice without VAT (EU), "imports_from_outside_the_EU" - Import from outside EU. */
    wnt?: "national_VAT_invoice" | "other_purchase_document" | "invoice_without_VAT" | "imports_from_outside_the_EU";
    /** @description Issue date of purchase document. Correct format is yyyy-mm-dd, e.g. 2007-12-31.. */
    saleDocumentCreationDate?: string;
    /** @description Planned date of acceptance of delivery. Correct format is yyyy-mm-dd, e.g. 2007-12-31. Requires parameter: "confirmed=on_the_way". */
    deliveryOnTheWayPlannedDeliveryDate?: string;
    /** @description Document status. Available values: "open" - open, "on_the_way" - on the way. */
    confirmed?: "open" | "on_the_way";
    /** @description Purchase price currency, e.g. PLN, USD, GBP */
    currencyForPurchasePrice?: string;
    /** @description Currency exchange rate (Currency conversion) */
    currencyForPurchasePriceRate?: number;
    /** @description Type of currency rate. Available values: "custom" - not typical, "currentDay" - the currency rate from the day of issuing a stock document, "customDay" - on a selected day, "previousDay" - the currency rate of a working day preceding the date of the stock document issue. */
    currencyForPurchasePriceRateType?: "custom" | "currentDay" | "customDay" | "previousDay";
    /** @description Currency rate of the day. Correct format is yyyy-mm-dd, e.g. 2007-12-31.. */
    currencyForPurchasePriceRateDate?: string;
    /** @description Settlement by prices. Available values: "brutto" - Gross value, "netto" - Net value. */
    priceType?: "brutto" | "netto";
    /** @description Methods of stock level correction. Available values: "fifo" - first-in, first-out (FIFO), "lifo" - last-in, first-out (LIFO). */
    queueType?: "fifo" | "lifo";
    /** @description Verification date */
    verificationDate?: string;
    /** @description Users verification */
    verificationUser?: string;
};

export type PutWmsStocksdocumentsCloseParams = {
    /** */
    type: "pz" | "pw" | "px" | "rx" | "rw" | "mm";
    /** @description Document identifier. */
    id: number;
};

export type PutWmsStocksdocumentsRejectMMParams = {
    /** @description Document identifier. */
    id: number;
};

export type PutWmsStocksdocumentsAcceptMMParams = {
    /** @description Document identifier. */
    id: number;
};

export { };