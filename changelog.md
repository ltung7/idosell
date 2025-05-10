# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.5] - 2025-05-10
### Changed
- Added enums
- Improved resposes types

## [0.3.4] - 2025-05-07
### Changed
- Improved responses types

### Fixed
- Fixed aliases and added deprecation warning


## [0.3.3] - 2025-04-30
### Changed
- Gate definitions become transpiled from typescript files
- Export main types definitions


## [0.3.0] - 2025-04-30
### Changed
- Rewrote main files as typescript and added main types and response types
- Added serveral gates definitions


## [0.2.5] - 2025-04-25
### Changed
- API version changed to v5
- Added logging functions as options to exec
- Added subsription methods


## [0.2.4] - 2025-03-27
### Fixed
- Fixed several gates definitions
- Fixed params method for arrays of objects

### Changed
- Added clone method
- Hidden custom atttributes from console.log


## [0.2.3] - 2025-03-26
### Changed
- Changed definitions and tests according to new gates
- Added readable missing access error


## [0.2.2] - 2025-03-20
### Fixed
- Fixed params helper function
- Fixed getReturns.dates function


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