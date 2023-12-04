import { getOrdersAnalyticsProxy } from "./methods/getOrdersAnalytics.js";
import { getOrdersAuctionDetailsProxy } from "./methods/getOrdersAuctionDetails.js";
import { putOrdersClientProxy } from "./methods/putOrdersClient.js";
import { putOrdersCourierProxy } from "./methods/putOrdersCourier.js";
import { putOrdersDeliveryAddressProxy } from "./methods/putOrdersDeliveryAddress.js";
import { putOrdersDevideProxy } from "./methods/putOrdersDevide.js";
import { deleteOrdersDocumentsProxy } from "./methods/deleteOrdersDocuments.js";
import { getOrdersDocumentsProxy } from "./methods/getOrdersDocuments.js";
import { postOrdersDocumentsProxy } from "./methods/postOrdersDocuments.js";
import { getOrdersExportdocumentsEPPProxy } from "./methods/getOrdersExportdocumentsEPP.js";
import { getOrdersExportdocumentsJPKProxy } from "./methods/getOrdersExportdocumentsJPK.js";
import { getOrdersHandlerProxy } from "./methods/getOrdersHandler.js";
import { putOrdersHandlerProxy } from "./methods/putOrdersHandler.js";
import { getOrdersHistoryProxy } from "./methods/getOrdersHistory.js";
import { deleteOrdersImagesProxy } from "./methods/deleteOrdersImages.js";
import { getOrdersImagesProxy } from "./methods/getOrdersImages.js";
import { postOrdersImagesProxy } from "./methods/postOrdersImages.js";
import { getOrdersLabelsProxy } from "./methods/getOrdersLabels.js";
import { getOrdersOpinionsProxy } from "./methods/getOrdersOpinions.js";
import { getOrdersOpinionsRateProxy } from "./methods/getOrdersOpinionsRate.js";
import { listOrdersProxy } from "./methods/listOrders.js";
import { getOrdersProxy } from "./methods/getOrders.js";
import { postOrdersProxy } from "./methods/postOrders.js";
import { putOrdersProxy } from "./methods/putOrders.js";
import { getOrdersPackagesProxy } from "./methods/getOrdersPackages.js";
import { postOrdersPackagesProxy } from "./methods/postOrdersPackages.js";
import { putOrdersPackagesProxy } from "./methods/putOrdersPackages.js";
import { putOrdersPickupPointProxy } from "./methods/putOrdersPickupPoint.js";
import { getOrdersPrinterDocumentsProxy } from "./methods/getOrdersPrinterDocuments.js";
import { putOrdersProductsSerialNumbersProxy } from "./methods/putOrdersProductsSerialNumbers.js";
import { putOrdersProfitMarginProxy } from "./methods/putOrdersProfitMargin.js";
import { getOrdersProfitabilityProxy } from "./methods/getOrdersProfitability.js";
import { putOrdersShippingCostsProxy } from "./methods/putOrdersShippingCosts.js";
import { listOrdersUnfinishedProxy } from "./methods/listOrdersUnfinished.js";
import { getOrdersWarehouseProxy } from "./methods/getOrdersWarehouse.js";
import { putOrdersWarehouseProxy } from "./methods/putOrdersWarehouse.js";

/**
 * The method is used to retrieve information about the margins of the goods of the order.
 * @typedef {Object} GetOrdersAnalyticsRequest
 * @property {(orders: Array<Object>) => GetOrdersAnalyticsRequest} orders Orders.
 * @property {function} exec Excecute request
 */

/**
 * Method that enables getting information about external listings assigned to orders in the administration panel.
 * @typedef {Object} GetOrdersAuctionDetailsRequest
 * @property {(orders: Array<Object>) => GetOrdersAuctionDetailsRequest} orders Orders.
 * @property {function} exec Excecute request
 */

/**
 * Array
 * @typedef {Object} PutOrdersClientRequest
 * @property {(orderSerialNumber: Integer) => PutOrdersClientRequest} orderSerialNumber Order serial number.
 * @property {(clientId: Integer) => PutOrdersClientRequest} clientId Unique client's number.
 * @property {function} exec Excecute request
 */

/**
 * Method that enables changing the courier handling the shipment for an order.
 * @typedef {Object} PutOrdersCourierRequest
 * @property {(orderSerialNumber: Integer) => PutOrdersCourierRequest} orderSerialNumber Order serial number.
 * @property {(courierId: Integer) => PutOrdersCourierRequest} courierId Courier ID.
 * @property {(pickupPointId: String) => PutOrdersCourierRequest} pickupPointId Collection point ID.
 * @property {function} exec Excecute request
 */

/**
 * Method that enables editing the delivery address details for an order in the administration panel.
 * @typedef {Object} PutOrdersDeliveryAddressRequest
 * @property {(orderSerialNumber: Integer) => PutOrdersDeliveryAddressRequest} orderSerialNumber Order serial number.
 * @property {(clientDeliveryAddressId: Integer) => PutOrdersDeliveryAddressRequest} clientDeliveryAddressId Delivery address ID.
 * @property {(clientLogin: String) => PutOrdersDeliveryAddressRequest} clientLogin Customer's login.
 * @property {function} exec Excecute request
 */

/**
 * #!MetodaSluzyDoPodzialuZamowienia!#
 * @typedef {Object} PutOrdersDevideRequest
 * @property {(orderSerialNumber: Integer) => PutOrdersDevideRequest} orderSerialNumber Order serial number.
 * @property {(products: Array<Object>) => PutOrdersDevideRequest} products Products list.
 * @property {(splitPayments: Boolean) => PutOrdersDevideRequest} splitPayments Whether to split payments
 * @property {function} exec Excecute request
 */

/**
 * The method allows to delete documents added to the order in the IdoSell administration panel.
 * @typedef {Object} DeleteOrdersDocumentsRequest
 * @property {(documents: Array<Object>) => DeleteOrdersDocumentsRequest} documents List of documents.
 * @property {function} exec Excecute request
 */

/**
 * Method that enables extracting information about documents issued for orders in the administration panel.
 * @typedef {Object} GetOrdersDocumentsRequest
 * @property {function} exec Excecute request
 */

/**
 * The method allows to add TIFF, BMP, PNG, JPG, JPEG, GIF or PDF documents to the order in the IdoSell Shop administration panel.
 * @typedef {Object} PostOrdersDocumentsRequest
 * @property {(documents: Array<Object>) => PostOrdersDocumentsRequest} documents List of documents.
 * @property {function} exec Excecute request
 */

/**
 * This method returns sales and warehouse documents in the universal EDI (Electronic Data Interchange) format.
 * @typedef {Object} GetOrdersExportdocumentsEPPRequest
 * @property {(dateBegin: String) => GetOrdersExportdocumentsEPPRequest} dateBegin Beginning date in YYYY-MM-DD HH:MM:SS format.
 * @property {(dateEnd: String) => GetOrdersExportdocumentsEPPRequest} dateEnd Ending date in YYYY-MM-DD HH:MM:SS format.
 * @property {(applicationType: 'SubiektGT'|'Rachmistrz'|'wFirma') => GetOrdersExportdocumentsEPPRequest} applicationType 
 * @property {(stocks: Array<Integer>) => GetOrdersExportdocumentsEPPRequest} stocks Stock ID (required only when selecting particular stocks).
 * @property {(documentType: 'all'|'stocks'|'invoice'|'payments') => GetOrdersExportdocumentsEPPRequest} documentType Document type
 * @property {(invoiceFirstGeneratedDate: Integer) => GetOrdersExportdocumentsEPPRequest} invoiceFirstGeneratedDate Date the document was first generated.
 * @property {function} exec Excecute request
 */

/**
 * #!MetodaZwracaDokumentySprzedazoweIMagazynoweWUniwersalnymFormacieJPK!#.
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
 * @property {function} exec Excecute request
 */

/**
 * Method that enables getting information about the handler currently assigned to an order.
 * @typedef {Object} GetOrdersHandlerRequest
 * @property {(orderSerialNumber: Integer) => GetOrdersHandlerRequest} orderSerialNumber Order serial number.
 * @property {function} exec Excecute request
 */

/**
 * Method that enabled assigning a handler to an order.
 * @typedef {Object} PutOrdersHandlerRequest
 * @property {(orderSerialNumber: Integer) => PutOrdersHandlerRequest} orderSerialNumber Order serial number.
 * @property {(orderOperatorLogin: String) => PutOrdersHandlerRequest} orderOperatorLogin Order handler.
 * @property {function} exec Excecute request
 */

/**
 * Method allows to retrieve orders history from the IdoSell Shop panel
 * @typedef {Object} GetOrdersHistoryRequest
 * @property {(orderSerialNumber: Integer) => GetOrdersHistoryRequest} orderSerialNumber Order serial number.
 * @property {function} exec Excecute request
 */

/**
 * Method allows to remove image attachments from the details of the specified order.
 * @typedef {Object} DeleteOrdersImagesRequest
 * @property {(order: Object) => DeleteOrdersImagesRequest} order 
 * @property {(images: Array<Object>) => DeleteOrdersImagesRequest} images List of attachment IDs to be removed from the details of the selected order
 * @property {function} exec Excecute request
 */

/**
 * Method allows downloading image attachment data from the details of the specified order.
 * @typedef {Object} GetOrdersImagesRequest
 * @property {(imageId: Integer) => GetOrdersImagesRequest} imageId Attachment ID (Photos)
 * @property {(orderSerialNumber: Integer) => GetOrdersImagesRequest} orderSerialNumber Order serial number
 * @property {function} exec Excecute request
 */

/**
 * Method allows to add image attachments to the details of the specified order.
 * @typedef {Object} PostOrdersImagesRequest
 * @property {(userName: String) => PostOrdersImagesRequest} userName Login
 * @property {(settings: Object) => PostOrdersImagesRequest} settings 
 * @property {(order: Object) => PostOrdersImagesRequest} order 
 * @property {(images: Array<Object>) => PostOrdersImagesRequest} images List of image attachments
 * @property {function} exec Excecute request
 */

/**
 * The method is used to generate parcels and printouts for a courier.
 * @typedef {Object} GetOrdersLabelsRequest
 * @property {(orderSerialNumber: Integer) => GetOrdersLabelsRequest} orderSerialNumber Order serial number.
 * @property {function} exec Excecute request
 */

/**
 * The method allows for downloading information about reviews issued for orders available in the IdoSell Shop administration panel.
 * @typedef {Object} GetOrdersOpinionsRequest
 * @property {(opinion: Object) => GetOrdersOpinionsRequest} opinion Review identification
 * @property {(orders: Object) => GetOrdersOpinionsRequest} orders Orders.
 * @property {(clients: Object) => GetOrdersOpinionsRequest} clients Customer data.
 * @property {(dateRange: Object) => GetOrdersOpinionsRequest} dateRange Date range
 * @property {(resultsPage: Integer) => GetOrdersOpinionsRequest} resultsPage Page with results number. Numeration starts from 0
 * @property {(resultsLimit: Integer) => GetOrdersOpinionsRequest} resultsLimit Number of results on page. Value from 1 to 100
 * @property {(ordersBy: Array<Object>) => GetOrdersOpinionsRequest} ordersBy Possibility of sorting returned list
 * @property {function} exec Excecute request
 */

/**
 * Evaluation of the usefulness of opinions issued for orders.
 * @typedef {Object} GetOrdersOpinionsRateRequest
 * @property {(id: Integer) => GetOrdersOpinionsRateRequest} id 
 * @property {(operation: 'positive'|'negative') => GetOrdersOpinionsRateRequest} operation 
 * @property {function} exec Excecute request
 */

/**
 * Method that enables extracting information about orders present in the IdoSell Shop administration panel.
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
 * @property {(dateFrom: DateLike, dateTo: DateLike, dateType: String<"add", "modified", "dispatch", "payment", "last_payments_operation", "declared_payments">) => ListOrdersRequest} dates Type of date according to the orders are searched: "add", "modified", "dispatch", "payment", "last_payments_operation", "declared_payments"
 * @property {(page: Integer, limit: Integer) => ListOrdersRequest} page Define page number and maximum results per page
 * @property {function} exec Excecute request
 */

/**
 * Method that enables extracting information about orders present in the IdoSell Shop administration panel.
 * @typedef {Object} GetOrdersRequest
 * @property {(ordersIds: Array<String>) => GetOrdersRequest} ordersIds Orders IDs.
 * @property {(ordersSerialNumbers: Array<Integer>) => GetOrdersRequest} ordersSerialNumbers Order serial numbers.
 * @property {(orderExternalId: String) => GetOrdersRequest} orderExternalId The order ID of the external service
 * @property {function} exec Excecute request
 */

/**
 * Method that is used for adding new retail or wholesale orders to a shop in the administration panel.
 * @typedef {Object} PostOrdersRequest
 * @property {(orders: Array<Object>) => PostOrdersRequest} orders Orders.
 * @property {function} exec Excecute request
 */

/**
 * Method that enables editing an order in the administration panel. It allows, for example, to change the products included in the order or change its status.
 * @typedef {Object} PutOrdersRequest
 * @property {(orders: Array<Object>) => PutOrdersRequest} orders Orders.
 * @property {function} exec Excecute request
 */

/**
 * Method that enables getting a list of parcels assigned to an order.
 * @typedef {Object} GetOrdersPackagesRequest
 * @property {(deliveryPackageNumbers: Array<String>) => GetOrdersPackagesRequest} deliveryPackageNumbers Consignments numbers.
 * @property {(events: Array<Object>) => GetOrdersPackagesRequest} events Element, package is assigned to
 * @property {(returnLabels: Boolean) => GetOrdersPackagesRequest} returnLabels Return parcel labels.
 * @property {function} exec Excecute request
 */

/**
 * Method that enables editing parcels already assigned to an order.
 * @typedef {Object} PostOrdersPackagesRequest
 * @property {(orderPackages: Array<Object>) => PostOrdersPackagesRequest} orderPackages List of parcels assigned to the order Maximum default number: 100 parcels.
 * @property {function} exec Excecute request
 */

/**
 * Method that enables editing parcels already assigned to an order.
 * @typedef {Object} PutOrdersPackagesRequest
 * @property {(orderPackages: Array<Object>) => PutOrdersPackagesRequest} orderPackages List of parcels assigned to the order Maximum default number: 100 parcels.
 * @property {function} exec Excecute request
 */

/**
 * The method allows to change the collection point in the order.
 * @typedef {Object} PutOrdersPickupPointRequest
 * @property {(orderSerialNumber: Integer) => PutOrdersPickupPointRequest} orderSerialNumber Order serial number.
 * @property {(pickupPointId: String) => PutOrdersPickupPointRequest} pickupPointId Collection point ID.
 * @property {function} exec Excecute request
 */

/**
 * Method that enables getting a VAT invoice issued for an order added to the administration panel by the IAI POS application.
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
 * Method that enables adding serial numbers to products in an order.
 * @typedef {Object} PutOrdersProductsSerialNumbersRequest
 * @property {(orders: Array<Object>) => PutOrdersProductsSerialNumbersRequest} orders Orders.
 * @property {function} exec Excecute request
 */

/**
 * Method that enables setting price margins for products in an order.
 * @typedef {Object} PutOrdersProfitMarginRequest
 * @property {(orders: Array<Object>) => PutOrdersProfitMarginRequest} orders Orders.
 * @property {function} exec Excecute request
 */

/**
 * #!MetodaSluzyDoPobieraniaInformacjiOOplacalnosciZamowienia!#
 * @typedef {Object} GetOrdersProfitabilityRequest
 * @property {(orderSerialNumber: Integer) => GetOrdersProfitabilityRequest} orderSerialNumber Order serial number.
 * @property {function} exec Excecute request
 */

/**
 * Method that enables editing the delivery costs for an order in the administration panel.
 * @typedef {Object} PutOrdersShippingCostsRequest
 * @property {(orderSerialNumber: Integer) => PutOrdersShippingCostsRequest} orderSerialNumber Order serial number.
 * @property {(deliveryCost: Number) => PutOrdersShippingCostsRequest} deliveryCost Delivery cost.
 * @property {(orderDeliveryVat: Number) => PutOrdersShippingCostsRequest} orderDeliveryVat Delivery VAT.
 * @property {function} exec Excecute request
 */

/**
 * It allows you to download information about unclosed orders located in the store's administration panel. Orders with a status of false and lost are considered closed. Orders with a status of false and lost are considered closed.
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
 * @property {function} exec Excecute request
 */

/**
 * Method that enables getting information about which warehouse an order is being handled from.
 * @typedef {Object} GetOrdersWarehouseRequest
 * @property {(orderSerialNumber: Integer) => GetOrdersWarehouseRequest} orderSerialNumber Order serial number.
 * @property {function} exec Excecute request
 */

/**
 * Method that enables setting which warehouse an order is handled from.
 * @typedef {Object} PutOrdersWarehouseRequest
 * @property {(orderSerialNumber: Integer) => PutOrdersWarehouseRequest} orderSerialNumber Order serial number.
 * @property {(stockId: Integer) => PutOrdersWarehouseRequest} stockId Stock ID
 * @property {(orderOperatorLogin: String) => PutOrdersWarehouseRequest} orderOperatorLogin Order handler.
 * @property {(externalStockId: 'amazonde'|'amazones'|'amazonfr'|'amazonit'|'amazoncouk'|'amazonnl'|'amazonse'|'amazoncomtr'|'amazonae'|'amazonus'|'amazonpl') => PutOrdersWarehouseRequest} externalStockId External warehouse ID (if required)
 * @property {function} exec Excecute request
 *//**
 * Idosell Gateways.
 * @typedef {Object} Gateways
 * @property {GetOrdersAnalyticsRequest} getOrdersAnalytics
 * @property {GetOrdersAuctionDetailsRequest} getOrdersAuctionDetails
 * @property {PutOrdersClientRequest} putOrdersClient
 * @property {PutOrdersCourierRequest} putOrdersCourier
 * @property {PutOrdersDeliveryAddressRequest} putOrdersDeliveryAddress
 * @property {PutOrdersDevideRequest} putOrdersDevide
 * @property {DeleteOrdersDocumentsRequest} deleteOrdersDocuments
 * @property {GetOrdersDocumentsRequest} getOrdersDocuments
 * @property {PostOrdersDocumentsRequest} postOrdersDocuments
 * @property {GetOrdersExportdocumentsEPPRequest} getOrdersExportdocumentsEPP
 * @property {GetOrdersExportdocumentsJPKRequest} getOrdersExportdocumentsJPK
 * @property {GetOrdersHandlerRequest} getOrdersHandler
 * @property {PutOrdersHandlerRequest} putOrdersHandler
 * @property {GetOrdersHistoryRequest} getOrdersHistory
 * @property {DeleteOrdersImagesRequest} deleteOrdersImages
 * @property {GetOrdersImagesRequest} getOrdersImages
 * @property {PostOrdersImagesRequest} postOrdersImages
 * @property {GetOrdersLabelsRequest} getOrdersLabels
 * @property {GetOrdersOpinionsRequest} getOrdersOpinions
 * @property {GetOrdersOpinionsRateRequest} getOrdersOpinionsRate
 * @property {ListOrdersRequest} listOrders
 * @property {GetOrdersRequest} getOrders
 * @property {PostOrdersRequest} postOrders
 * @property {PutOrdersRequest} putOrders
 * @property {GetOrdersPackagesRequest} getOrdersPackages
 * @property {PostOrdersPackagesRequest} postOrdersPackages
 * @property {PutOrdersPackagesRequest} putOrdersPackages
 * @property {PutOrdersPickupPointRequest} putOrdersPickupPoint
 * @property {GetOrdersPrinterDocumentsRequest} getOrdersPrinterDocuments
 * @property {PutOrdersProductsSerialNumbersRequest} putOrdersProductsSerialNumbers
 * @property {PutOrdersProfitMarginRequest} putOrdersProfitMargin
 * @property {GetOrdersProfitabilityRequest} getOrdersProfitability
 * @property {PutOrdersShippingCostsRequest} putOrdersShippingCosts
 * @property {ListOrdersUnfinishedRequest} listOrdersUnfinished
 * @property {GetOrdersWarehouseRequest} getOrdersWarehouse
 * @property {PutOrdersWarehouseRequest} putOrdersWarehouse
 */

const gates = {
    getOrdersAnalytics: getOrdersAnalyticsProxy,
    getOrdersAuctionDetails: getOrdersAuctionDetailsProxy,
    putOrdersClient: putOrdersClientProxy,
    putOrdersCourier: putOrdersCourierProxy,
    putOrdersDeliveryAddress: putOrdersDeliveryAddressProxy,
    putOrdersDevide: putOrdersDevideProxy,
    deleteOrdersDocuments: deleteOrdersDocumentsProxy,
    getOrdersDocuments: getOrdersDocumentsProxy,
    postOrdersDocuments: postOrdersDocumentsProxy,
    getOrdersExportdocumentsEPP: getOrdersExportdocumentsEPPProxy,
    getOrdersExportdocumentsJPK: getOrdersExportdocumentsJPKProxy,
    getOrdersHandler: getOrdersHandlerProxy,
    putOrdersHandler: putOrdersHandlerProxy,
    getOrdersHistory: getOrdersHistoryProxy,
    deleteOrdersImages: deleteOrdersImagesProxy,
    getOrdersImages: getOrdersImagesProxy,
    postOrdersImages: postOrdersImagesProxy,
    getOrdersLabels: getOrdersLabelsProxy,
    getOrdersOpinions: getOrdersOpinionsProxy,
    getOrdersOpinionsRate: getOrdersOpinionsRateProxy,
    listOrders: listOrdersProxy,
    getOrders: getOrdersProxy,
    postOrders: postOrdersProxy,
    putOrders: putOrdersProxy,
    getOrdersPackages: getOrdersPackagesProxy,
    postOrdersPackages: postOrdersPackagesProxy,
    putOrdersPackages: putOrdersPackagesProxy,
    putOrdersPickupPoint: putOrdersPickupPointProxy,
    getOrdersPrinterDocuments: getOrdersPrinterDocumentsProxy,
    putOrdersProductsSerialNumbers: putOrdersProductsSerialNumbersProxy,
    putOrdersProfitMargin: putOrdersProfitMarginProxy,
    getOrdersProfitability: getOrdersProfitabilityProxy,
    putOrdersShippingCosts: putOrdersShippingCostsProxy,
    listOrdersUnfinished: listOrdersUnfinishedProxy,
    getOrdersWarehouse: getOrdersWarehouseProxy,
    putOrdersWarehouse: putOrdersWarehouseProxy,
}

export const gateProxy = {
    get: (object, property) => gates[property](object)
};