# Idosell REST API

This package wraps around the Idosell Api to make it easier to use using chainable options, more intuitive methods and helpers to easily format requests. [Official Idosell documentation](https://idosell.readme.io/docs) is still applicable for the most part.

## Basic use

Package translates awkward gate names into more readable method names using REST verbs and gateways. Most of the possible methods are kept as is, only changed to camel case. For example:

```javascript
import idosell from 'idosell';
const idosellRequest = idosell('SHOP_URL', 'API_KEY')
```

**API_KEY** can be obtainer in your Idosell panel.
**SHOP_URL** is the base URI of your shop. Here are some examples:
```
https://yourdomain.com
https://clientXXXX.idosell.com
https://yourshop.iai-shop.com
```

### Properties vs endpoints

After initiating idosell object, call one of it's properties to retrieve methods concerning the enpoint you are going to use. For example:

```javascript
const idosellRequest = idosell('SHOP_URL', 'API_KEY');
const categories = idosellRequest.getProductsCategories.params(parameters).exec();
```

In this example, getProductCategories translates to a GET request to *products/categories* endpoint. You can use *params()* method to set parameters for the request as JSON object as per Idosell guidelines. Analogically, you can send PUT request to the same endpoint by using following code:

```javascript
const createCategoryRequest = idosell('SHOP_URL', 'API_KEY').putProductsCategories.params(parameters).exec();
```

Note that method *categories()* is used to set request body, while *exec()* method is used to send request and retrieve data from endpoint.

Some less obvious gate properties include:
```javascript
const idosellRequest = idosell('SHOP_URL', 'API_KEY');
idosellRequest.getProducts.exec(); // Translates to GET on /products/products endpoint
idosellRequest.listProducts.exec(); // Translates to POST on /products/products/get endpoint
idosellRequest.deleteProducts.exec(); // Translates to POST on /products/products/post endpoint
idosellRequest.deleteProductsOpinions.exec() // Translates to POST on products/opinions/opinions/delete endpoint
```

### Chaining methods to set request parameters

Alternatively to setting parameters object, you can chain several methods named after top level parameters to set their value to your request. To execute the request after setting all the parameters, run *exec()* method.

```javascript
const idosellRequest = idosell('SHOP_URL', 'API_KEY');
const categories = idosellRequest.ids([123, 456, 789]).languages(['pol', 'eng']).result_page(1).result_limit(10).getProductsCategories.exec();
```

This example, will generate following GET request:

```
https://yourdomain.com/api/admin/v1/products/categories?ids=123,456,789&languages=pol,eng&result_page=1&result_limit=10
```

For POST request will generate a JSON body request.

```javascript
await idosellRequest.postDiscountsRebatesCode.campaign_id(123).code_number('REBATECODE').exec();
```

This example will generate a POST request with following body:

```json
{ 
  "campaign_id": 123, 
  "code_number": "REBATECODE" 
}
```

## Helper functions

There are several methods that are included in the methods list that are not defined by specifications, but are designed to set parameters more easily and withour relying on specifitactions for single endpoint.

### Page and Count

Several endpoints return big number of results making in neccessary to inlcude paging of the results in the form of either *results_page*/*results_limit* or *resultsPage*/*resultsLimit* parameters. These enpoints include both *page(pageNumber, limit)* and *count()* methods. 

```javascript
const categoriesCount = idosellRequest.getProductsCategories.count();
// use to count number of categories

const categories = idosellRequest.getProductsCategories.page(1,10).exec();
// is equivalent to using the following (without needing to know if this endpoint uses results_page or resultsPage parameter):
//const categories = idosellRequest.getProductsCategories.results_page(1).result_limit(10).exec();
```

### Date, date ranges and formatting

Some enpoints require dates in either 'YYYY-MM-DD' format of 'YYYY-MM-DD HH:mm:ss' format. Many of them use set of dates to define range of the results, for example listing orders dispatched between start of the month and end of the same month. Instead, you can use dates helper:

```javascript
const dispatchedOrders = idosellRequest.listOrders.dates('2023-12-01', '2023-12-31', 'dispatch').exec();
// This function will return orders that have dispatch date betwen 2023-12-01 00:00:00 and 2023-12-31 23:59:59
```

This example will translate to following request body:
```json
{
  "ordersRange": {
    "ordersDateRange": {
      "ordersDateBegin": "2023-12-01 00:00:00",
      "ordersDateEnd": "2023-12-31 23:59:59",
      "ordersDateType": "dispatch"
    }
  }
}
```

As as argument, you can pass anything that is accepted as native Date constructor or leave it empty for current timestamp. For example:

```javascript
const orders = idosellRequest.listOrders.dates(Date.now() - 86400000).exec();
// This function will return orders added (default value of date type is 'add') between 24 hours ago and now
```

## Other formatters

Some other helpers include following methods

### Array of Objects

Some enpoints require an array of objects of single key. This method allows you to use array of primitive types and translates it into specific array of Objects.

```javascript
const orderAnalytics = await idosellRequest.getOrdersAnalytics.serialNumbers([123,456,789]).exec()
```

This will translate to following request parameters:

```json
{
  "orders": [
    { "orderSerialNumber": 123 },
    { "orderSerialNumber": 456 },
    { "orderSerialNumber": 789 }
  ]
}
```

### OrderBy

Some endpoints have option to customize ordering of results. This helper simplifies the parameters by passing two parameters: elementName and if order should be descending (true by default), but does not allow ordering on multiple fields.

```javascript
const lowestRatings = await idosellRequest.getProductsOpinions.orderBy('rating', false).exec();
```

This will translate to following request parameters:

```json
{
  "ordersBy": [
    {
      "elementName": "rating",
      "sortDirection": "ASC"
    }
  ]
}
```