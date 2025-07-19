export enum PRODUCTS_RETURN_ELEMENTS {
    LANG_DATA = 'lang_data',
    ADDING_TIME = 'adding_time',
    DELETED = 'deleted',
    CODE = 'code',
    NOTE = 'note',
    TAXCODE = 'taxcode',
    INWRAPPER = 'inwrapper',
    SELLBY_RETAIL = 'sellby_retail',
    SELLBY_WHOLESALE = 'sellby_wholesale',
    PRODUCER_ID = 'producer_id',
    PRODUCER_NAME = 'producer_name',
    IAI_CATEGORY_ID = 'iaiCategoryId',
    IAI_CATEGORY_NAME = 'iaiCategoryName',
    IAI_CATEGORY_PATH = 'iaiCategoryPath',
    CATEGORY_ID = 'category_id',
    CATEGORY_NAME = 'category_name',
    SIZE_GROUP_ID = 'size_group_id',
    MODIFICATION_TIME = 'modification_time',
    CURRENCY = 'currency',
    CURRENCY_SHOP = 'currency_shop',
    BESTSELLER = 'bestseller',
    NEW_PRODUCT = 'new_product',
    RETAIL_PRICE = 'retail_price',
    WHOLESALE_PRICE = 'wholesale_price',
    MINIMAL_PRICE = 'minimal_price',
    AUTOMATIC_CALCULATION_PRICE = 'automatic_calculation_price',
    POS_PRICE = 'pos_price',
    STRIKETHROUGH_RETAIL_PRICE = 'strikethrough_retail_price',
    STRIKETHROUGH_WHOLESALE_PRICE = 'strikethrough_wholesale_price',
    LAST_PURCHASE_PRICE = 'last_purchase_price',
    PURCHASE_PRICE_NET_AVERAGE = 'purchase_price_net_average',
    PURCHASE_PRICE_NET_LAST = 'purchase_price_net_last',
    PURCHASE_PRICE_GROSS_AVERAGE = 'purchase_price_gross_average',
    PURCHASE_PRICE_GROSS_LAST = 'purchase_price_gross_last',
    VAT = 'vat',
    VAT_FREE = 'vat_free',
    REBATE = 'rebate',
    HOTSPOTS_ZONES = 'hotspots_zones',
    PROFIT_POINTS = 'profit_points',
    POINTS = 'points',
    WEIGHT = 'weight',
    EXPORT_TO_PRICECOMPARERS = 'export_to_pricecomparers',
    EXPORT_TO_AMAZON_MARKETPLACE = 'export_to_amazon_marketplace',
    ENABLE_IN_POS = 'enable_in_pos',
    COMPLEX_NOTES = 'complex_notes',
    AVAILABLE_PROFILE = 'available_profile',
    TRAITS = 'traits',
    PARAMETERS = 'parameters',
    VERSION_DATA = 'version_data',
    ADVANCE = 'advance',
    PROMOTION = 'promotion',
    DISCOUNT = 'discount',
    DISTINGUISHED = 'distinguished',
    SPECIAL = 'special',
    VISIBLE = 'visible',
    PERSISTENT = 'persistent',
    PRIORITY = 'priority',
    SHOPS_MASK = 'shops_mask',
    ICON = 'icon',
    ICON_FOR_AUCTIONS = 'icon_for_auctions',
    ICON_FOR_GROUP = 'icon_for_group',
    PICTURES = 'pictures',
    UNIT = 'unit',
    WARRANTY = 'warranty',
    SERIES = 'series',
    PRODUCTS_ASSOCIATED = 'products_associated',
    SHOPS = 'shops',
    QUANTITIES = 'quantities',
    SIZES_ATTRIBUTES = 'sizes_attributes',
    SHOPS_ATTRIBUTES = 'shops_attributes',
    AUCTION_PRICES = 'auction_prices',
    PRICE_COMPARERS_PRICES = 'price_comparers_prices',
    DELIVERER = 'deliverer',
    SIZES = 'sizes',
    SIZE_GROUP_NAME = 'size_group_name',
    PICTURES_COUNT = 'pictures_count',
    PRODUCT_TYPE = 'product_type',
    PRICE_CHANGED_TIME = 'price_changed_time',
    QUANTITY_CHANGED_TIME = 'quantity_changed_time',
    DELIVERER_NAME = 'deliverer_name',
    AVAILABLE_PROFILE_NAME = 'available_profile_name',
    AVAILABILITY_MANAGEMENT_TYPE = 'availability_management_type',
    SUM_IN_BASKET = 'sum_in_basket',
    MENU = 'menu',
    AUCTION_SETTINGS = 'auction_settings',
    BUNDLE = 'bundle',
    SIZESCHART_ID = 'sizeschart_id',
    SIZESCHART_NAME = 'sizeschart_name',
    SERIALNUMBERS = 'serialnumbers',
    PRODUCER_CODES_STANDARD = 'producer_codes_standard',
    JAVASCRIPT_IN_THE_ITEM_CARD = 'javaScriptInTheItemCard',
    PRODUCT_AUCTION_DESCRIPTIONS_DATA = 'productAuctionDescriptionsData',
    PRICE_FORMULA = 'priceFormula',
    PRODUCT_INDIVIDUAL_DESCRIPTIONS_DATA = 'productIndividualDescriptionsData',
    PRODUCT_INDIVIDUAL_URLS_DATA = 'productIndividualUrlsData',
    PRODUCT_SERVICES_DESCRIPTIONS_DATA = 'productServicesDescriptionsData',
    CN_TARIC_CODE = 'cnTaricCode',
    PRODUCT_IS_GRATIS = 'productIsGratis',
    DIMENSIONS = 'dimensions',
    RESPONSIBLE_PRODUCER_CODE = 'responsibleProducerCode',
    RESPONSIBLE_PERSON_CODE = 'responsiblePersonCode',
}
  
export enum ORDER_STATUS {
    NEW = 'new',
    ON_ORDER = 'on_order',
    PACKED = 'packed',
    PACKED_FULFILLMENT = 'packed_fulfillment',
    PACKED_READY = 'packed_ready',
    READY = 'ready',
    PAYMENT_WAITING = 'payment_waiting',
    DELIVERY_WAITING = 'delivery_waiting',
    WAIT_FOR_DISPATCH = 'wait_for_dispatch',
    SUSPENDED = 'suspended',
    FINISHED_EXT = 'finished_ext',
}

export enum STOCK_DOCUMENT_TYPE {
    PZ = 'pz',
    PW = 'pw',
    PX = 'px',
    RX = 'rx',
    RW = 'rw',
    MM = 'mm',
    WZ = 'wz',
    ZW = 'zw',
}

export enum RETURN_STATUS {
    /** @description Zwrot nieobsłużony */
    NOT_HANDLED = 1,
    /** @description Zwrot rozpatrzony pozytywnie */
    ACCEPTED = 2,
    /** @description Zwrot rozpatrzony negatywnie */
    NOT_ACCEPTED = 3,
    /** @description Zwrot anulowany - Odesłanie towaru klientowi */
    RETURN_PRODUCTS = 5,
    /** @description Zwrot anulowany - Towar nie dotarł */
    REJECTED_NOT_ARRIVED = 6,
    /** @description Zwrot rozpatrzony negatywnie - Towary nie są nowe */
    REJECTED_NOT_NEW = 7,
    /** @description Zwrot rozpatrzony negatywnie - Minął termin na zwrot */
    REJECTED_DEADLINE = 8,
    /** @description Zwrot rozpatrzony negatywnie - Towary niezgodne z zamówieniem */
    REJECTED_NOT_MATCH = 9,
    /** @description Zwrot rozpatrzony pozytywnie - Zwrot pieniędzy - skierowanie do wypłaty */
    ACCEPTED_TO_REFUND = 10,
    /** @description Zwrot rozpatrzony pozytywnie - Zwrot pieniędzy - wypłata zrealizowana */
    ACCEPTED_REFUNDED = 11,
    /** @description Zwrot anulowany przez klienta */
    CANCELLED_BY_CUSTOMER = 13,
    /** @description Zwrot anulowany */
    CANCELLED = 14,
    /** @description Ponowna wysyłka zamówienia */
    RESEND = 15,
    /** @description Zaniechanie ponownej wysyłki zamówienia */
    ABORT_RESEND = 16,
    /** @description Klient wygenerował zwrot - dostarczy go osobiście */
    GENERATED_PERSONAL = 17,
    /** @description Klient wygenerował zwrot - wyśle go samodzielnie */
    GENERATED_SENT = 18,
    /** @description Zwrot rozpatrzony pozytywnie - Oczekiwanie na zatwierdzenie faktury korygującej */
    ACCEPTED_AWAITING_INVOICE = 19,
    /** @description Zwrot rozpatrzony pozytywnie - Zwrot pieniędzy - przygotowanie faktury korygującej */
    ACCEPTED_PENDING_INVOICE = 20,
}

export enum RMA_STATUS {
    /** @description Reklamacja rozpatrywana - Skierowano do testów */
    PENDING_RETEST = 4,
    /** @description Reklamacja rozpatrywana - Produkt wysłany do producenta */
    PENDING_PRODUCER = 5,
    /** @description Reklamacja rozpatrywana - Trwa naprawianie */
    PENDING_FIX = 6,
    /** @description Reklamacja rozpatrzona negatywnie - Nie stwierdzono usterki */
    NETAGIVE_NO_FAULT = 7,
    /** @description Reklamacja rozpatrzona negatywnie - Wada spowodowana złą eksploatacją */
    NETAGIVE_EXPLOITATION = 8,
    /** @description Reklamacja rozpatrzona negatywnie - Przekroczono termin gwarancji */
    NETAGIVE_DEADLINE = 9,
    /** @description Reklamacja rozpatrzona pozytywnie - Zwrot pieniędzy - skierowanie do wypłaty */
    ACCEPTED_TO_REFUND = 10,
    /** @description Reklamacja rozpatrzona pozytywnie - Zwrot pieniędzy - wypłata zrealizowana */
    ACCEPTED_REFUNDED = 11,
    /** @description Reklamacja rozpatrzona pozytywnie - Wymiana na nowy produkt */
    ACCEPTED_EXCHANGE = 12,
    /** @description Reklamacja rozpatrzona pozytywnie - Wymiana produktu na inny */
    ACCEPTED_REPLACE = 13,
    /** @description Reklamacja nie dotarła */
    REJECTED_NOT_ARRIVED = 14,
    /** @description Reklamacja niepotwierdzona przez obsługę */
    UNCONFIRMED = 15,
    /** @description Reklamacja anulowana */
    CANCELLED = 17,
    /** @description Reklamacja anulowana przez klienta */
    CANCELLED_BY_CUSTOMER = 18,
    /** @description Reklamacja potwierdzona */
    CONFIRMED = 19,
    /** @description Reklamacja nieobsłużona */
    NOT_HANDLED = 20,
    /** @description Reklamacja odrzucona - Nie stwierdzono usterki */
    REJECTED_NO_FAULT = 22,
    /** @description Reklamacja odrzucona - Przekroczono termin gwarancji */
    REJECTED_DEADLINE = 23,
    /** @description Reklamacja odrzucona - Wada spowodowana złą eksploatacją */
    REJECTED_EXPLOITATION = 24,
    /** @description Reklamacja rozpatrzona pozytywnie - Przesyłka zwrotna wysłana do klienta */
    ACCEPTED_RESENT = 25,
    /** @description Reklamacja rozpatrzona pozytywnie - Wysłano nowy towar bez oczekiwania na pierwotny */
    ACCEPTED_EXCHANGE_WITHOUT_CONFIRM = 26,
    /** @description Reklamacja rozpatrzona pozytywnie - Zmiana danych odbiorcy na dokumencie sprzedaży */
    ACCEPTED_DOCUMENT_CHANGE = 27,
    /** @description Reklamacja rozpatrywana - Naprawa zakończona */
    PENDING_FIXED = 28,
    /** @description Reklamacja rozpatrywana - Wymaga dodatkowych informacji od klienta */
    PENDING_REQUIRE_INFORMATION = 29,
    /** @description Reklamacja rozpatrzona negatywnie - Przesyłka zwrotna wysłana do klienta */
    NETAGIVE_RESENT = 30,
    /** @description Reklamacja rozpatrzona pozytywnie - Oczekiwanie na zatwierdzenie faktury korygującej */
    ACCEPTED_AWAITING_INVOICE = 31,
    /** @description Reklamacja rozpatrzona pozytywnie - Zwrot pieniędzy - przygotowanie faktury korygujące */
    ACCEPTED_PENDING_INVOICE = 34,
}

export enum PAYMENT_FORMS {
    /** @description 1 - HHTransfer */
    HHTRANSFER = 1,
    /** @description 2 - Karty podarunkowe i bony towarowe */
    KARTY_PODARUNKOWE_I_BONY_TOWAROWE = 2,
    /** @description 3 - Gotówka */
    GOTOWKA = 3,
    /** @description 4 - Pobranie */
    POBRANIE = 4,
    /** @description 5 - Przelew */
    PRZELEW = 5,
    /** @description 6 - mTransfer (wycofywany) */
    MTRANSFER_WYCOFYWANY = 6,
    /** @description 7 - Inteligo */
    INTELIGO = 7,
    /** @description 9 - Dotpay */
    DOTPAY = 9,
    /** @description 10 - Przelewy24 */
    PRZELEWY24 = 10,
    /** @description 11 - PayU */
    PAYU = 11,
    /** @description 12 - SkipJack */
    SKIPJACK = 12,
    /** @description 13 - Skrill */
    SKRILL = 13,
    /** @description 14 - PayPal */
    PAYPAL = 14,
    /** @description 15 - Punkty Zysk */
    PUNKTY_ZYSK = 15,
    /** @description 16 - MultiTransfer */
    MULTITRANSFER = 16,
    /** @description 17 - eKredyt Żagiel */
    EKREDYT_ZAGIEL = 17,
    /** @description 18 - Czek */
    CZEK = 18,
    /** @description 19 - Allegro Finanse */
    ALLEGRO_FINANSE = 19,
    /** @description 20 - eCard */
    ECARD = 20,
    /** @description 21 - eRaty Santander */
    ERATY_SANTANDER = 21,
    /** @description 22 - Kompensata */
    KOMPENSATA = 22,
    /** @description 23 - PayMaker.eu */
    PAYMAKER_EU = 23,
    /** @description 24 - Inpay */
    INPAY = 24,
    /** @description 25 - Karta płatnicza (terminal kartowy) */
    KARTA_PLATNICZA_TERMINAL_KARTOWY = 25,
    /** @description 26 - PayByNet */
    PAYBYNET = 26,
    /** @description 27 - Saldo klienta */
    SALDO_KLIENTA = 27,
    /** @description 28 - Credit Agricole Raty */
    CREDIT_AGRICOLE_RATY = 28,
    /** @description 29 - IdoPay */
    IDOPAY = 29,
    /** @description 30 - tpay.com */
    TPAY_COM = 30,
    /** @description 32 - mBank Raty */
    MBANK_RATY = 32,
    /** @description 33 - Przelew. Klarna */
    PRZELEW_KLARNA = 33,
    /** @description 34 - Amazon Marketplace */
    AMAZON_MARKETPLACE = 34,
    /** @description 35 - Nochex */
    NOCHEX = 35,
    /** @description 36 - Google Wallet */
    GOOGLE_WALLET = 36,
    /** @description 37 - PayU.cz */
    PAYU_CZ = 37,
    /** @description 38 - Kredyt kupiecki */
    KREDYT_KUPIECKI = 38,
    /** @description 41 - Raty */
    RATY = 41,
    /** @description 42 - Shopgate */
    SHOPGATE = 42,
    /** @description 43 - Mobile Payment */
    MOBILE_PAYMENT = 43,
    /** @description 44 - eService */
    ESERVICE = 44,
    /** @description 45 - Barclaycard ePDQ */
    BARCLAYCARD_EPDQ = 45,
    /** @description 46 - First Data */
    FIRST_DATA = 46,
    /** @description 47 - LeaseLink */
    LEASELINK = 47,
    /** @description 48 - CashBill */
    CASHBILL = 48,
    /** @description 50 - First Data Polcard */
    FIRST_DATA_POLCARD = 50,
    /** @description 51 - Yandex Money */
    YANDEX_MONEY = 51,
    /** @description 52 - Payfort */
    PAYFORT = 52,
    /** @description 53 - Klarna */
    KLARNA = 53,
    /** @description 54 - BitBayPay */
    BITBAYPAY = 54,
    /** @description 55 - PayPo */
    PAYPO = 55,
    /** @description 56 - Romcard */
    ROMCARD = 56,
    /** @description 57 - PayLane */
    PAYLANE = 57,
    /** @description 58 - Stripe */
    STRIPE = 58,
    /** @description 59 - imoje */
    IMOJE = 59,
    /** @description 60 - MyPlacimy.pl */
    MYPLACIMY_PL = 60,
    /** @description 61 - Braintree */
    BRAINTREE = 61,
    /** @description 62 - Carrefour Marketplace */
    CARREFOUR_MARKETPLACE = 62,
    /** @description 63 - Morele.net */
    MORELE_NET = 63,
    /** @description 64 - iPłatności */
    IPLATNOSCI = 64,
    /** @description 65 - eBay Managed Payments */
    EBAY_MANAGED_PAYMENTS = 65,
    /** @description 66 - PKO Leasing */
    PKO_LEASING = 66,
    /** @description 67 - Credimax */
    CREDIMAX = 67,
    /** @description 68 - PayPal */
    PAYPAL_68 = 68,
    /** @description 69 - BNPParibas */
    BNPPARIBAS = 69,
    /** @description 70 - Wish Marketplace */
    WISH_MARKETPLACE = 70,
    /** @description 71 - Stripe */
    STRIPE_71 = 71,
    /** @description 72 - Shopee */
    SHOPEE = 72,
    /** @description 73 - InPost Pay */
    INPOST_PAY = 73,
    /** @description 74 - Straal */
    STRAAL = 74,
}
