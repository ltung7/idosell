import { paramsProxy } from "../params.js";

/**
 * #!MetodaInformujeModulSynchronizacjiOZakonczeniuWgrywaniaPlikow!#.
 * @typedef {Object} PutProductsSynchronizationFinishUploadRequest
 * @property {(synchronizationId: Integer) => PutProductsSynchronizationFinishUploadRequest} synchronizationId #!IdentyfikatorSynchronizacji!#.
 * @property {(packageId: Integer) => PutProductsSynchronizationFinishUploadRequest} packageId #!NumerPaczkiZPlikami!#.
 * @property {(filesInPackage: Integer) => PutProductsSynchronizationFinishUploadRequest} filesInPackage #!LacznaLiczbaPlikowWPaczce!#.
 * @property {(verifyFiles: Boolean) => PutProductsSynchronizationFinishUploadRequest} verifyFiles #!CzyZweryfikowacPaczkePoprzezSparsowaniePlikowIPrzygotowanieRequestow!#. #!OdpowiedzMozeZajacKilkaMinut!#.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PutProductsSynchronizationFinishUploadRequest} #!MetodaInformujeModulSynchronizacjiOZakonczeniuWgrywaniaPlikow!#.
 */
export const putProductsSynchronizationFinishUploadProxy = (object) => {
    object.gate = { method: 'put', node: '/products/synchronization/finishUpload' }
    return new Proxy(object, paramsProxy);
}