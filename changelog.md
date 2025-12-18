# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.4.16] - 2025-12-18
- Updated to v7.10
- Updated utils
- Fixed dates helper default value
- Improved typing on empty PHP objects conversion

## [0.4.13] - 2025-10-15
### Changed
- Updated to v7.2
- Added utils

## [0.4.11] - 2025-09-26
### Changed
- Updated to v7
- Fixed few gates
- Improved typings
  
## [0.4.3] - 2025-08-28
### Changed
- Added type RequestParams for typescript support
- Added new explanatory and examples page
- Improved typings

## [0.3.20] - 2025-08-23
### Changed
- Updated default version to v6.3
- Improved types


## [0.3.17] - 2025-08-02
### Changed
- Updated default version to v6
- Updated order status enums
- Modified response types to match reality instead of API specification

## [0.3.15] - 2025-07-21
### Fixed
- Added custom requirements
- Fixed requirements
- Updates tests
- Fixed several gates and tests
  
## [0.3.13] - 2025-07-19
### Fixed
- Fixed requirements
- Updates tests


## [0.3.12] - 2025-07-19
### Changed
- Specified requirement for any parameter on getReturns and getVouchers
- Added more enums, responses, tests
- Added setText function to putProductsDescriptions and modified setText on putProducts to use original nodes

### Fixed
- Added missing dates functions that were not nested
- Fixed requirements on appendable gates

## [0.3.11] - 2025-07-18
### Fixed
- Added hard requirements for search/POST and GET gates
- Auto reset current page on change parameters on paged gates
- Fixed appendable type

## [0.3.7] - 2025-07-05
### Fixed
- Fixed chaining then after await
- Improved memory usage
- Added hard requirements for POST and PUT gates

## [0.3.6] - 2025-05-24
### Changed
- Idosell v5.4 - Added support to subscription methods
- Idosell v5.6 - Added params to getProductOpinions
- Enforce arrays where parameters require to i.e. idosellRequest.searchParams.returnElements('code') instead of .returnElements(['code'])


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