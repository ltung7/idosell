# Idosell REST API

This package wraps around the Idosell REST Api to make it easier to use by implementing chainable options, more intuitive methods and helpers to format requests more easily. [Official Idosell documentation](https://idosell.readme.io/docs) is still applicable for the most part.

## Basic use

Package translates awkward gate names into more readable method names using REST verbs and gateways. Most of the possible methods are kept as is, only changed to camel case. For example:

```javascript
import idosell from 'idosell';
const idosellRequest = idosell('SHOP_URL', 'API_KEY', API_VERSION)
```

**API_KEY** can be obtained in your Idosell panel.
**SHOP_URL** is the base URI of your shop. 
**API_VERSION** version of the API to call, current default version is **v3**
Here are some examples:
```
https://yourdomain.com
https://clientXXXX.idosell.com
https://yourshop.iai-shop.com
```

### Properties vs endpoints

After initializing the Idosell object, call one of its properties to retrieve methods concerning the endpoint you are going to use. For example:

```javascript
const categories = idosellRequest.getProductsCategories.params(parameters).exec();
```

In this example, getProductCategories translates to a GET request to the *products/categories* endpoint. You can use the *params()* method to set parameters for the request as JSON object as per Idosell guidelines. Analogously, you can send a PUT request to the same endpoint by using the following code:

```javascript
const createCategoryRequest = idosellRequest.putProductsCategories.params(parameters).exec();
```

Note that the method *categories()* is used to set the request body, while the *exec()* method is used to send the request and retrieve data from the endpoint.

Some less obvious gate properties include:
```javascript
idosellRequest.getProducts.exec(); // Translates to GET on /products/products endpoint
idosellRequest.listProducts.exec(); // Translates to POST on /products/products/get endpoint
idosellRequest.deleteProducts.exec(); // Translates to POST on /products/products/delete endpoint
idosellRequest.deleteProductsOpinions.exec() // Translates to POST on products/opinions/opinions/delete endpoint
```

### Chaining methods to set request parameters

Alternatively to setting parameters in an object, you can chain several methods named after top-level parameters to set their value to your request. To execute the request after setting all the parameters, run the *exec()* method.

```javascript
const idosellRequest = idosell('https://yourdomain.com', 'API_KEY');
const categories = idosellRequest.getProductsCategories.ids([123, 456, 789]).languages(['pol', 'eng']).result_page(1).result_limit(10).exec();
```

This example will generate the following GET request:

```
https://yourdomain.com/api/admin/v3/products/categories?ids=123,456,789&languages=pol,eng&result_page=1&result_limit=10
```

A POST request will generate a JSON body request.

```javascript
await idosellRequest.postDiscountsRebatesCode.campaign_id(123).code_number('REBATECODE').exec();
```

This example will generate a POST request with the following body:

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

### Looping through pages

The execution of the Idosell request checks for the next page and applies it. This is available for use with native loop functions using the *hasNext()* function

```javascript
const getReturnsRequest = idosellRequest.getReturns.dates('2023-12-01').page(0, 10)

while (getReturnsRequest.hasNext()) {
    const results = await idosellRequest.exec();
    // do something with results
}
```

### Date, date ranges and formatting

Some endpoints require dates in either the "YYYY-MM-DD" format or the "YYYY-MM-DD HH:mm:ss" format. Many of them use a set of dates to define the range of the results, for example, listing orders dispatched between the start of the month and the end of the same month. Instead, you can use the *dates()* helper:

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

As an argument, you can pass anything that is accepted as a native Date constructor or leave it empty for the current timestamp. For example:

```javascript
const orders = idosellRequest.listOrders.dates(Date.now() - 86400000).exec();
// This function will return orders added (default value of date type is 'add') between 24 hours ago and now
```

## Array of objects

Some endpoints require an array of objects. As complex as they may be, there are some helpers to make it easier.

### Simple objects

For GET requests, they are mostly simple objects with single keys that can be set with a single method with a simple array.

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

### Complex objects

For POST and PUT requests, there is usually a main parameter with an array of very complex objects, like a list of products to add / edit. *The append()* method allows you to use them in a more simplistic way without worrying about the array itself.

```javascript
const updatedProducts = idosellRequest.putProducts
    .settings({ settingModificationType: 'edit' })
    .productId(101).productDisplayedCode('CODE1').countryOfOrigin('PL').append()
    .productId(102).productDisplayedCode('CODE2').productRetailPrice(99.99).append()
    .productId(103).productDisplayedCode('CODE3').productNote('Latest product').exec()
```

This request translates into the following request body:

```json
{
  "settings":{
    "settingModificationType":"edit"
  },
  "products":[
    {
      "productId":101,
      "productDisplayedCode":"CODE1",
      "countryOfOrigin":"PL"
    },
    {
      "productId":102,
      "productDisplayedCode":"CODE2",
      "productRetailPrice":99.99
    },
    {
      "productId":103,
      "productDisplayedCode":"CODE3",
      "productNote":"Latest product"
    }
  ]
}
```

This request modifies 3 products, each with their own parameters. Products are separated using the *append()* method. This method can also be used in a loop.

```javascript
const productCodes = [
    { id: 202, code: 'CODE202' },
    { id: 203, code: 'CODE203' },
    { id: 204, code: 'CODE204' },
]

const updateProducts = idosellRequest.putProducts.settings({ settingModificationType: 'edit' })
for (const { id, code } of productCodes) {
    updateProducts.productId(id).productDisplayedCode(code).append();
}
updateProducts.exec()
```

## Other formatters

Some other helpers include following methods

### OrderBy

Some endpoints have the option to customize the ordering of results. This helper simplifies the parameters by passing two parameters: elementName and if order should be descending (true by default), but does not allow ordering on multiple fields.

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

### Set text

This method is used specifically for updating and creating products and allows you to easily set multiple types of descriptions in different languages and different shops.

```javascript
idosellRequest.putProducts.setText(text, type, languageId, shopId)
```

| Field | Description | Default | Possible values |
|----------|----------|----------|----------|
| text | Content to be added to the product | (none) | any |
| type | Type of text | short | See below |
| languageId | Language of the text | pol | Any ISO 639-2 language installed in the panel |
| shopId | Shop of the text (leave blank for general description) | null | Any ID of a shop installed in the panel |

Possible text types:

| Type | Description | Limitations |
|----------|----------|----------|
| name | Name of the product | Up to 420 characters, no HTML |
| short | Short description of the product | Up to 255 characters, no HTML |
| long | Long description of the product | Preferred HTML |
| metatitle | Contents of the title tag, name of the product page | Up to 255 characters, no HTML |
| metadescription | Meta description, often used by search engines | Up to 255 characters, no HTML |
| metakeywords | Meta keywords, sometimes used by search engines | Up to 255 characters, no HTML |
| acutionname | Auction name exported to marketplaces | Depends on marketplace |
| auctiondescription | Auction description exported to marketplaces | Possibly HTML |


Example of usage:

```javascript
const updateProduct = await idosellRequest.putProducts.productId(202).setText('Świetny produkt').setText('Awesome product', 'short', 'eng').setText('This product is really amazing', 'long', 'eng', 1).exec();
```

This will result in following request body

```json
{
    "products": [
        {
            "productId": 202,
            "productParamDescriptions": {
                "productParamDescriptionsLangData": [
                    {
                        "langId": "pol",
                        "productParamDescriptions": "Świetny produkt"
                    },
                    {
                        "langId": "eng",
                        "productParamDescriptions": "Awesome product"
                    }
                ]
            },
            "productLongDescriptions": {
                "productLongDescriptionsLangData": [
                    {
                        "langId": "eng",
                        "shopId": 1,
                        "productLongDescription": "<p>This product is really amazing</p>"
                    }
                ]
            }
        }
    ]
}
```

## Debugging

You can use the *getParams()* function to retrieve request parameters as Javascript Object.

```javascript 
const orderRequest = idosellRequest.getOrders.ordersSerialNumbers([123, 456, 789]).getParams();
// Will return Object: { ordersSerialNumbers: [ 123, 456, 789 ] }
```

## examples

Read documentation and examples on [This page](https://idosell-converter.vercel.app/examples)