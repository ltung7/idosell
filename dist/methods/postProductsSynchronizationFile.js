import { paramsProxy } from "../params.js";

/**
 * #!MetodaPozwalaNaWgranieDoModuluSynchronizacjiTowarowOfertyWPlikuWFormacieIOF30!#.
 * @typedef {Object} PostProductsSynchronizationFileRequest
 * @property {(synchronizationId: Integer) => PostProductsSynchronizationFileRequest} synchronizationId #!IdentyfikatorSynchronizacji!#.
 * @property {(packageId: Integer) => PostProductsSynchronizationFileRequest} packageId #!NumerPaczkiZPlikami!#. #!PrzyPierwszymPlikuWPaczceNalezyZostawicPusteAAPIZwrociWygenerowanyNumerKtoryNastepnieNalezyPrzesylacIPoKtorymAPIBedzieRozpoznawacKolejnePlikiDoTejPaczki!#.
 * @property {(fileType: String) => PostProductsSynchronizationFileRequest} fileType #!TypPlikuIOF30FullLightCategoriesSizesSeriesWarrantiesParameters!#.
 * @property {(md5Content: String) => PostProductsSynchronizationFileRequest} md5Content #!MD5ZZawartosciPlikuPrzedZakodowaniemBase64!#.
 * @property {(fileContent: String) => PostProductsSynchronizationFileRequest} fileContent #!PlikOfertyZakodowanyZaPomocaAlgorytmuBase64!#.
 * @property {(offerName: String) => PostProductsSynchronizationFileRequest} offerName #!UnikalnaNazwaOferty!#.
 * @property {(options: Object) => IdosellResponse} exec Excecute request
 */

/**
 * @returns {PostProductsSynchronizationFileRequest} #!MetodaPozwalaNaWgranieDoModuluSynchronizacjiTowarowOfertyWPlikuWFormacieIOF30!#.
 */
export const postProductsSynchronizationFileProxy = (object) => {
    object.gate = { method: 'post', node: '/products/synchronization/file' }
    return new Proxy(object, paramsProxy);
}