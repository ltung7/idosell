import { paramsProxy } from "../params.js";

/**
 * Method that enables warehouse document creation.
 * @typedef {Object} PostWmsStocksdocumentsDocumentsRequest
 * @property {(type: String) => PostWmsStocksdocumentsDocumentsRequest} type 
 * @property {(stockId: Integer) => PostWmsStocksdocumentsDocumentsRequest} stockId Target warehouse ID. The list of available warehouses can be downloaded via the method <a href = "en/shop/api/?action=method&function=systemconfig&method=get">#get</a> in gateway <a href = "en/shop/api/?action=documentation&function=systemconfig">SystemConfig</a>.
 * @property {(stockDocumentNumber: String) => PostWmsStocksdocumentsDocumentsRequest} stockDocumentNumber Document number.
 * @property {(stockSourceId: Integer) => PostWmsStocksdocumentsDocumentsRequest} stockSourceId Source warehouse ID. The list of available warehouses can be downloaded via the method <a href = "en/shop/api/?action=method&function=systemconfig&method=get">#get</a> in gateway <a href = "en/shop/api/?action=documentation&function=systemconfig">SystemConfig</a>.
 * @property {(note: String) => PostWmsStocksdocumentsDocumentsRequest} note 
 * @property {(productsInPreorder: String) => PostWmsStocksdocumentsDocumentsRequest} productsInPreorder Products available in presales. Available values: "y" - yes, "n" - no.
 * @property {(delivererId: Integer) => PostWmsStocksdocumentsDocumentsRequest} delivererId Supplier ID.
 * @property {(wnt: String) => PostWmsStocksdocumentsDocumentsRequest} wnt Type of purchase document. Available values: "national_VAT_invoice" - National VAT invoice, "other_purchase_document" - Other purchase document, "invoice_without_VAT" - Invoice without VAT (EU), "imports_from_outside_the_EU" - Import from outside EU.
 * @property {(saleDocumentCreationDate: String) => PostWmsStocksdocumentsDocumentsRequest} saleDocumentCreationDate Issue date of purchase document. Correct format is yyyy-mm-dd, e.g. 2007-12-31..
 * @property {(deliveryOnTheWayPlannedDeliveryDate: String) => PostWmsStocksdocumentsDocumentsRequest} deliveryOnTheWayPlannedDeliveryDate Planned date of acceptance of delivery. Correct format is yyyy-mm-dd, e.g. 2007-12-31. Requires parameter: "confirmed=on_the_way".
 * @property {(confirmed: String) => PostWmsStocksdocumentsDocumentsRequest} confirmed Document status. Available values: "open" - open, "on_the_way" - on the way.
 * @property {(currencyForPurchasePrice: String) => PostWmsStocksdocumentsDocumentsRequest} currencyForPurchasePrice Purchase price currency, e.g. PLN, USD, GBP
 * @property {(priceType: String) => PostWmsStocksdocumentsDocumentsRequest} priceType Settlement by prices. Available values: "brutto" - Gross value, "netto" - Net value
 * @property {(queueType: String) => PostWmsStocksdocumentsDocumentsRequest} queueType Methods of stock level correction. Available values: "fifo" - first-in, first-out (FIFO), "lifo" - last-in, first-out (LIFO)
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostWmsStocksdocumentsDocumentsRequest} Method that enables warehouse document creation.
 */
export const postWmsStocksdocumentsDocumentsProxy = (object) => {
    object.gate = { method: 'post', node: '/wms/stocksdocuments/documents' }
    return new Proxy(object, paramsProxy);
}