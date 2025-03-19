# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [0.2.1] - 2025-03-19
### Changed
- (Idosell change) Due to changes in Idosell API, some gates have beed removed or replaced
- (Idosell change) Gates getClientsBalance, getDiscountsGroups no longer uses snake case parameters
- (Idosell change) New Gates: deleteClient, getShopsLanguages, getShopsCurrencies
- (Idosell change) Fixed gates: getProductsStrikethroughPrices, getProductsMarketingZones, getProductsOmnibusPrices, getProductsCodeExistence, getProductsStocks, getProductsReservations, getOrdersAnalytics - method of qyerying has been changed
- (Idosell change) Changed gates: postProductsMarketingPromotion and putProductsMarketingPromotion got new parameters
- Default API version changed to 5

### Fixed
- Idosell request can now be directly returned from Promise / await function

### Deprecated
- (Idosell change) Following gates have been renamed and have their call methods effectively changed, altghough still available at both old and new names:
  - listProducts =>  searchProducts
  - listOrders =>  searchOrders
  - listOrdersUnfinished =>  searchOrdersUnfinished
  - getClientsGiftcards =>  searchClientsGiftcards
  - getClientsCrm =>  searchClientsCrm
  - getClientsNewsletterEmailShops =>  searchClientsNewsletterEmail
  - getClientsNewsletterEmailSMS =>  searchClientsNewsletterSms
  - getOrdersOpinions =>  searchOrdersOpinions
  - getPackages =>  searchPackages
  - getProductsCategoriesIdosell =>  searchProductsCategoriesIdosell
  - getProductsDeliveryTime =>  searchProductsDeliveryTime
  - getProductsParameters =>  searchProductsParameters,"