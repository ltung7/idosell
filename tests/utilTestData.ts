import type { SearchProductsResponse } from "../dist/responses";

export const STOCK_PRODUCT: SearchProductsResponse['results'][number] = {
    "productId": 1234,
    "productDisplayedCode": 'ZERO',
    "productStocksData": {
        "productSizesDeliveries": [
            {
                "productSizeQuantity": 3,
                "sizeId": "5",
                "sizePanelName": "L"
            },
            {
                "productSizeQuantity": 3,
                "sizeId": "6",
                "sizePanelName": "X"
            }
        ],
        "productStocksQuantities": [
            {
                "stockId": 1,
                "productSizesData": [
                    {
                        "sizeId": "3",
                        "sizePanelName": "S",
                        "productSizeCodeExternal": "PX-ZERO-S",
                        "productSizeQuantity": 1,
                        // @ts-expect-error never needed
                        "productSizeReservations": {
                            "productSizeReservationOrder": 0
                        }
                    },
                    {
                        "sizeId": "4",
                        "sizePanelName": "M",
                        "productSizeCodeExternal": "PX-ZERO-M",
                        "productSizeQuantity": 0,
                        // @ts-expect-error never needed
                        "productSizeReservations": {
                            "productSizeReservationOrder": 0
                        }
                    },
                    {
                        "sizeId": "5",
                        "sizePanelName": "L",
                        "productSizeCodeExternal": "PX-ZERO-L",
                        "productSizeQuantity": 0,
                        // @ts-expect-error never needed
                        "productSizeReservations": {
                            "productSizeReservationOrder": 0
                        }
                    },
                    {
                        "sizeId": "6",
                        "sizePanelName": "XL",
                        "productSizeCodeExternal": "PX-ZERO-X",
                        "productSizeQuantity": 0,
                        // @ts-expect-error never needed
                        "productSizeReservations": {
                            "productSizeReservationOrder": 0
                        }
                    }
                ]
            },
            {
                "stockId": 3,
                "productSizesData": [
                    {
                        "sizeId": "3",
                        "sizePanelName": "S",
                        "productSizeCodeExternal": "PX-ZERO-S",
                        "productSizeQuantity": 9,
                        // @ts-expect-error never needed
                        "productSizeReservations": {
                            "productSizeReservationOrder": 2
                        }
                    },
                    {
                        "sizeId": "4",
                        "sizePanelName": "M",
                        "productSizeCodeExternal": "PX-ZERO-M",
                        "productSizeQuantity": 10,
                        // @ts-expect-error never needed
                        "productSizeReservations": {
                            "productSizeReservationOrder": 0
                        }
                    },
                    {
                        "sizeId": "5",
                        "sizePanelName": "L",
                        "productSizeCodeExternal": "PX-ZERO-L",
                        "productSizeQuantity": 0,
                        // @ts-expect-error never needed
                        "productSizeReservations": {
                            "productSizeReservationOrder": 0
                        }
                    },
                    {
                        "sizeId": "6",
                        "sizePanelName": "XL",
                        "productSizeCodeExternal": "PX-ZERO-X",
                        "productSizeQuantity": 0,
                        // @ts-expect-error never needed
                        "productSizeReservations": {
                            "productSizeReservationOrder": 0
                        }
                    }
                ]
            }
        ],
        "productSizesDispositions": {
            "productSizesDispositionsInSales": [
                {
                    "sizeId": "3",
                    "sizePanelName": "S",
                    "productSizeCodeExternal": "PX-ZERO-S",
                    "productSizeQuantityOutsideStock": 0,
                    "productSizeQuantityOwnStock": 8,
                    "productSizeQuantityAllStocks": 8
                },
                {
                    "sizeId": "4",
                    "sizePanelName": "M",
                    "productSizeCodeExternal": "PX-ZERO-M",
                    "productSizeQuantityOutsideStock": 0,
                    "productSizeQuantityOwnStock": 10,
                    "productSizeQuantityAllStocks": 10
                },
                {
                    "sizeId": "5",
                    "sizePanelName": "L",
                    "productSizeCodeExternal": "PX-ZERO-L",
                    "productSizeQuantityOutsideStock": 5,
                    "productSizeQuantityOwnStock": 0,
                    "productSizeQuantityAllStocks": 5
                },
                {
                    "sizeId": "6",
                    "sizePanelName": "XL",
                    "productSizeCodeExternal": "PX-ZERO-X",
                    "productSizeQuantityOutsideStock": 0,
                    "productSizeQuantityOwnStock": 0,
                    "productSizeQuantityAllStocks": 0
                }
            ],
            "productSizesDispositionsInAuctions": [
                {
                    "sizeId": "3",
                    "sizePanelName": "S",
                    "productSizeCodeExternal": "PX-ZERO-S",
                    "productSizeQuantity": 1
                },
                {
                    "sizeId": "4",
                    "sizePanelName": "M",
                    "productSizeCodeExternal": "PX-ZERO-M",
                    "productSizeQuantity": 0
                },
                {
                    "sizeId": "5",
                    "sizePanelName": "L",
                    "productSizeCodeExternal": "PX-ZERO-L",
                    "productSizeQuantity": 0
                },
                {
                    "sizeId": "6",
                    "sizePanelName": "XL",
                    "productSizeCodeExternal": "PX-ZERO-X",
                    "productSizeQuantity": 0
                }
            ]
        },
        "productOrdersUnfinishedQuantities": [
            {
                "stockId": 1,
                "productSizesData": [
                    {
                        "sizeId": "3",
                        "sizePanelName": "S",
                        "productSizeCodeExternal": "PX-ZERO-S",
                        "productSizeQuantity": 2
                    }
                ]
            }
        ],
        "productSizesStocksLocations": [
            {
                "stockId": 1,
                "productSizesLocation": [
                    {
                        "stockLocationCode": "F",
                        "stockAdditionalLocations": [
                            {
                                "stockAdditionalLocationId": 46,
                                "stockAdditionalLocationTextId": "M1\\A015",
                                "stockAdditionalLocationCode": "P"
                            },
                            {
                                "stockAdditionalLocationId": 1,
                                "stockAdditionalLocationTextId": "M1\\A113",
                                "stockAdditionalLocationCode": "A"
                            }
                        ],
                        "sizeId": "3",
                        "stockLocationId": 16,
                        "stockLocationTextId": "M1\\A014"
                    },
                    {
                        "stockLocationCode": "F",
                        "sizeId": "4",
                        "stockLocationId": 16,
                        "stockLocationTextId": "M1\\A014"
                    },
                    {
                        "stockLocationCode": "B",
                        "sizeId": "5",
                        "stockLocationId": 4,
                        "stockLocationTextId": "M1\\B013"
                    },
                    {
                        "stockLocationCode": "B",
                        "sizeId": "6",
                        "stockLocationId": 4,
                        "stockLocationTextId": "M1\\B013"
                    }
                ]
            },
            {
                "stockId": 2,
                "productSizesLocation": [
                    {
                        "stockLocationCode": "B",
                        "sizeId": "3",
                        "stockLocationId": 5,
                        "stockLocationTextId": "M2\\G013"
                    },
                    {
                        "stockLocationCode": "Q",
                        "sizeId": "4",
                        "stockLocationId": 50,
                        "stockLocationTextId": "M2\\G015"
                    },
                    {
                        "stockLocationCode": "L",
                        "sizeId": "5",
                        "stockLocationId": 35,
                        "stockLocationTextId": "M2\\G114"
                    },
                    {
                        "stockLocationCode": "G",
                        "sizeId": "6",
                        "stockLocationId": 20,
                        "stockLocationTextId": "M2\\G214"
                    }
                ]
            },
            {
                "stockId": 3,
                "productSizesLocation": [
                    {
                        "stockLocationCode": "F",
                        "sizeId": "3",
                        "stockLocationId": 18,
                        "stockLocationTextId": "M3\\K014"
                    },
                    {
                        "stockLocationCode": "B",
                        "sizeId": "4",
                        "stockLocationId": 6,
                        "stockLocationTextId": "M3\\L013"
                    },
                    {
                        "stockLocationCode": "B",
                        "sizeId": "5",
                        "stockLocationId": 6,
                        "stockLocationTextId": "M3\\L013"
                    },
                    {
                        "stockLocationCode": "F",
                        "sizeId": "6",
                        "stockLocationId": 18,
                        "stockLocationTextId": "M3\\K014"
                    }
                ]
            }
        ]
    },
    "productSizesAttributes": [
        {
            "productSizeWeightWithoutPackaging": 0,
            "sizeId": "3",
            "sizePanelName": "S",
            "productSizeCodeExternal": "PX-ZERO-S",
            "productSizeCodeProducer": "1234567890128",
            "productInPersistent": "y",
            "productSizeWeight": 0
        },
        {
            "productSizeWeightWithoutPackaging": 0,
            "sizeId": "4",
            "sizePanelName": "M",
            "productSizeCodeExternal": "PX-ZERO-M",
            "productSizeCodeProducer": "1234567890135",
            "productInPersistent": "y",
            "productSizeWeight": 0
        },
        {
            "productSizeWeightWithoutPackaging": 0,
            "sizeId": "5",
            "sizePanelName": "L",
            "productSizeCodeExternal": "PX-ZERO-L",
            "productSizeCodeProducer": "1234567890142",
            "productInPersistent": "y",
            "productSizeWeight": 0
        },
        {
            "productSizeWeightWithoutPackaging": 0,
            "sizeId": "6",
            "sizePanelName": "XL",
            "productSizeCodeExternal": "PX-ZERO-X",
            "productSizeCodeProducer": "1234567890159",
            "productInPersistent": "y",
            "productSizeWeight": 0
        }
    ],
    "productSizes": [
        {
            "sizeId": "3",
            "sizePanelName": "S"
        },
        {
            "sizeId": "4",
            "sizePanelName": "M"
        },
        {
            "sizeId": "5",
            "sizePanelName": "L"
        },
        {
            "sizeId": "6",
            "sizePanelName": "XL"
        }
    ]
}

export const PARAMETER_PRODUCT: SearchProductsResponse['results'][number] = {
    "productId": 356,
    "productParameters": [
        {
            "parameterId": 326,
            "parameterType": "parameter",
            "parameterDescriptionsLangData": [
                {
                    "langId": "eng",
                    "parameterName": "Kolor akcentów",
                    "parameterDescription": "",
                    "parameterShopsData": []
                },
                {
                    "langId": "ger",
                    "parameterName": "Kolor akcentów",
                    "parameterDescription": "",
                    "parameterShopsData": []
                },
                {
                    "langId": "pol",
                    "parameterName": "Kolor akcentów",
                    "parameterDescription": "",
                    "parameterShopsData": []
                }
            ],
            "parameterValues": [
                {
                    "parameterValueId": 399,
                    "parameterValueDescriptionsLangData": [
                        {
                            "langId": "eng",
                            "parameterValueName": "Czarny",
                            "parameterValueDescription": "",
                            "parameterValueShopsData": []
                        },
                        {
                            "langId": "ger",
                            "parameterValueName": "Czarny",
                            "parameterValueDescription": "",
                            "parameterValueShopsData": []
                        },
                        {
                            "langId": "pol",
                            "parameterValueName": "Czarny",
                            "parameterValueDescription": "",
                            "parameterValueShopsData": []
                        }
                    ]
                }
            ]
        },
        {
            "parameterId": 173,
            "parameterType": "parameter",
            "parameterDescriptionsLangData": [
                {
                    "langId": "eng",
                    "parameterName": "Waga całkowita",
                    "parameterDescription": "",
                    "parameterShopsData": []
                },
                {
                    "langId": "ger",
                    "parameterName": "Waga całkowita",
                    "parameterDescription": "",
                    "parameterShopsData": []
                },
                {
                    "langId": "pol",
                    "parameterName": "Waga całkowita",
                    "parameterDescription": "",
                    "parameterShopsData": []
                }
            ],
            "parameterValues": [
                {
                    "parameterValueId": 522,
                    "parameterValueDescriptionsLangData": [
                        {
                            "langId": "eng",
                            "parameterValueName": "100g",
                            "parameterValueDescription": "",
                            "parameterValueShopsData": []
                        },
                        {
                            "langId": "ger",
                            "parameterValueName": "100g",
                            "parameterValueDescription": "",
                            "parameterValueShopsData": []
                        },
                        {
                            "langId": "pol",
                            "parameterValueName": "100g",
                            "parameterValueDescription": "",
                            "parameterValueShopsData": []
                        }
                    ]
                }
            ]
        },
        {
            "parameterId": 521,
            "parameterType": "section",
            "parameterDescriptionsLangData": [
                {
                    "langId": "eng",
                    "parameterName": "XCut",
                    "parameterDescription": "",
                    "parameterShopsData": []
                },
                {
                    "langId": "ger",
                    "parameterName": "XCut",
                    "parameterDescription": "",
                    "parameterShopsData": []
                },
                {
                    "langId": "pol",
                    "parameterName": "XCut",
                    "parameterDescription": "",
                    "parameterShopsData": []
                }
            ]
        },
        {
            "parameterId": 26,
            "parameterType": "parameter",
            "parameterDescriptionsLangData": [
                {
                    "langId": "eng",
                    "parameterName": "Color",
                    "parameterDescription": "",
                    "parameterShopsData": []
                },
                {
                    "langId": "ger",
                    "parameterName": "Kolor",
                    "parameterDescription": "",
                    "parameterShopsData": []
                },
                {
                    "langId": "pol",
                    "parameterName": "Kolor",
                    "parameterDescription": "",
                    "parameterShopsData": []
                }
            ],
            "parameterValues": [
                {
                    "parameterValueId": 48,
                    "parameterValueDescriptionsLangData": [
                        {
                            "langId": "eng",
                            "parameterValueName": "Black",
                            "parameterValueDescription": "",
                            "parameterValueShopsData": []
                        },
                        {
                            "langId": "ger",
                            "parameterValueName": "czarny",
                            "parameterValueDescription": "",
                            "parameterValueShopsData": []
                        },
                        {
                            "langId": "pol",
                            "parameterValueName": "czarny",
                            "parameterValueDescription": "",
                            "parameterValueShopsData": []
                        }
                    ]
                },
                {
                    "parameterValueId": 96,
                    "parameterValueDescriptionsLangData": [
                        {
                            "langId": "eng",
                            "parameterValueName": "red",
                            "parameterValueDescription": "",
                            "parameterValueShopsData": []
                        },
                        {
                            "langId": "ger",
                            "parameterValueName": "czerwony",
                            "parameterValueDescription": "",
                            "parameterValueShopsData": []
                        },
                        {
                            "langId": "pol",
                            "parameterValueName": "czerwony",
                            "parameterValueDescription": "",
                            "parameterValueShopsData": []
                        }
                    ]
                }
            ]
        }
    ]
}

export const PARAMETER_PRODUCT_RESULT = [
    {
        "id": 326,
        "name": "Kolor akcentów",
        "values": [
            {
                "valueId": 399,
                "value": "Czarny"
            }
        ]
    },
    {
        "id": 173,
        "name": "Waga całkowita",
        "values": [
            {
                "valueId": 522,
                "value": "100g"
            }
        ]
    },
    {
        "id": 26,
        "name": "Kolor",
        "values": [
            {
                "valueId": 48,
                "value": "czarny"
            },
            {
                "valueId": 96,
                "value": "czerwony"
            }
        ]
    }
]