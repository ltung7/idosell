import { paramsProxy } from "../params.js";

/**
 * The method allows for warehouse documents edit .
 * @typedef {Object} PutWmsStocksdocumentsDocumentsRequest
 * @property {(stockDocumentId: Integer) => PutWmsStocksdocumentsDocumentsRequest} stockDocumentId Document identifier.
 * @property {(stockDocumentType: String) => PutWmsStocksdocumentsDocumentsRequest} stockDocumentType Document type. Available values: "pz" - goods received note (GRN), "pw" - internal delivery note (IDN), "px" - goods received correction note (GRX), "rx" - goods despatch note (GRN) , "rw" - goods issued note (GIN), "mm" - inter-warehouse transfer.
 * @property {(stockDocumentNumber: String) => PutWmsStocksdocumentsDocumentsRequest} stockDocumentNumber Number of purchase document
 * @property {(stockId: Integer) => PutWmsStocksdocumentsDocumentsRequest} stockId Target warehouse ID. The list of available warehouses can be downloaded via the method <a href = "en/shop/api/?action=method&function=systemconfig&method=get">#get</a> in gateway <a href = "en/shop/api/?action=documentation&function=systemconfig">SystemConfig</a>.
 * @property {(stockSourceId: Integer) => PutWmsStocksdocumentsDocumentsRequest} stockSourceId Source warehouse ID. The list of available warehouses can be downloaded via the method <a href = "en/shop/api/?action=method&function=systemconfig&method=get">#get</a> in gateway <a href = "en/shop/api/?action=documentation&function=systemconfig">SystemConfig</a>.
 * @property {(note: String) => PutWmsStocksdocumentsDocumentsRequest} note 
 * @property {(productsInPreorder: String) => PutWmsStocksdocumentsDocumentsRequest} productsInPreorder Products available in presales. Available values: "y" - yes, "n" - no.
 * @property {(delivererId: Integer) => PutWmsStocksdocumentsDocumentsRequest} delivererId Supplier ID.
 * @property {(wnt: String) => PutWmsStocksdocumentsDocumentsRequest} wnt Type of purchase document. Available values: "national_VAT_invoice" - National VAT invoice, "other_purchase_document" - Other purchase document, "invoice_without_VAT" - Invoice without VAT (EU), "imports_from_outside_the_EU" - Import from outside EU.
 * @property {(saleDocumentCreationDate: String) => PutWmsStocksdocumentsDocumentsRequest} saleDocumentCreationDate Issue date of purchase document. Correct format is yyyy-mm-dd, e.g. 2007-12-31..
 * @property {(deliveryOnTheWayPlannedDeliveryDate: String) => PutWmsStocksdocumentsDocumentsRequest} deliveryOnTheWayPlannedDeliveryDate Planned date of acceptance of delivery. Correct format is yyyy-mm-dd, e.g. 2007-12-31. Requires parameter: "confirmed=on_the_way".
 * @property {(confirmed: String) => PutWmsStocksdocumentsDocumentsRequest} confirmed Document status. Available values: "open" - open, "on_the_way" - on the way.
 * @property {(currencyForPurchasePrice: String) => PutWmsStocksdocumentsDocumentsRequest} currencyForPurchasePrice Purchase price currency, e.g. PLN, USD, GBP
 * @property {(currencyForPurchasePriceRate: Number) => PutWmsStocksdocumentsDocumentsRequest} currencyForPurchasePriceRate Currency exchange rate (Currency conversion)
 * @property {(currencyForPurchasePriceRateType: String) => PutWmsStocksdocumentsDocumentsRequest} currencyForPurchasePriceRateType Type of currency rate. Available values: "custom" - not typical, "currentDay" - the currency rate from the day of issuing a stock document, "customDay" - on a selected day, "previousDay" - the currency rate of a working day preceding the date of the stock document issue.
 * @property {(currencyForPurchasePriceRateDate: String) => PutWmsStocksdocumentsDocumentsRequest} currencyForPurchasePriceRateDate Currency rate of the day. Correct format is yyyy-mm-dd, e.g. 2007-12-31..
 * @property {(priceType: String) => PutWmsStocksdocumentsDocumentsRequest} priceType Settlement by prices. Available values: "brutto" - Gross value, "netto" - Net value.
 * @property {(queueType: String) => PutWmsStocksdocumentsDocumentsRequest} queueType Methods of stock level correction. Available values: "fifo" - first-in, first-out (FIFO), "lifo" - last-in, first-out (LIFO).
 * @property {(verificationDate: String) => PutWmsStocksdocumentsDocumentsRequest} verificationDate Verification date
 * @property {(verificationUser: String) => PutWmsStocksdocumentsDocumentsRequest} verificationUser Users verification
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutWmsStocksdocumentsDocumentsRequest} The method allows for warehouse documents edit .
 */
export const putWmsStocksdocumentsDocumentsProxy = (object) => {
    object.gate = { method: 'put', node: '/wms/stocksdocuments/documents' }
    return new Proxy(object, paramsProxy);
}