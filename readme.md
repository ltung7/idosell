# Idosell REST API

This package wraps around the Idosell Api to make it easier to use using chainable options, more intuitive methods and helpers to easily format requests. [Official Idosell documentation](https://idosell.readme.io/docs) is still applicable for the most part.

### Basic use

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
const categories = idosellRequest.getProductsCategories.exec();
```

In this example, getProductCategories translates to a GET request to *products/categories* endpoint. Analogically, you can send PUT request to the same endpoint by using following code:

```javascript
const createCategoryRequest = idosell('SHOP_URL', 'API_KEY').putProductsCategories.categories(newCategoriesList).exec();
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

You can chain several methods to set parameters of your request. To execute the request after setting all the parameters, run *exec()* method.

```javascript
const idosellRequest = idosell('SHOP_URL', 'API_KEY');
const categories = idosellRequest.ids([123, 456, 789]).languages(['pol', 'eng']).result_page(1).result_limit(10).getProductsCategories.exec();
```

This example, will generate following GET request:

```
https://yourdomain.com/api/admin/v1/products/categories?ids=123,456,789&languages=pol,eng&result_page=1&result_limit=10
```