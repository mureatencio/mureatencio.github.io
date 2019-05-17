/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// [START log_event]

dataLayer = window.dataLayer || [];  

function logProductViewGTM() {
  dataLayer.push({
    reward_card: "",
    event: "productView",
    pageCategory: "",
    ecommerce: {
        detail: {
            products: [{
                "brand": "Souluxe",
                "category": "S01",
                "colour_code": "C128",
                "full_product_code": "N/A",
                "id": "S2668289_C128",
                "launch_status": "",
                "name": "Souluxe Asymmetric Zip Sports Hoodie",
                "offers": "N/A",
                "price": "18.0",
                "product_availability_percent": "100",
                "product_availability": "in_stock",
                "product_high_price": "0",
                "product_rating": "5",
                "season": "W17",
                "section": "S010305",
                "size_code": "N/A",
                "style_code": "S2668289",
                "sub_category": "S0103",
                "trends": "Navy",
                "variant": "N/A",
                "view_type": "PDP",
                "dimension84": "C128",
                "dimension85": "N/A",
                "dimension86": "",
                "dimension87": "N/A",
                "dimension88": "in_stock",
                "dimension89": "0",
                "dimension90": "5",
                "dimension91": "W17",
                "dimension92": "S010305",
                "dimension93": "N/A",
                "dimension94": "S2668289",
                "dimension95": "S0103",
                "dimension96": "Navy",
                "dimension97": "PDP",
                "list": "N/A"
            }]
        }
    }
  })
}
document.getElementById("gtmProductViewEvent").addEventListener("click", function() {
  logProductViewGTM();
});


function logAddProductGTM() {
  dataLayer.push({
    reward_card: "",
    event: "addToCart",
    pageCategory: "",
    ecommerce: {
        detail: {
            products: [{
                "brand": "Souluxe",
                "category": "S01",
                "colour_code": "C128",
                "full_product_code": "N/A",
                "id": "S2668289_C128",
                "launch_status": "",
                "name": "Souluxe Asymmetric Zip Sports Hoodie",
                "offers": "N/A",
                "price": "18.0",
                "product_availability_percent": "100",
                "product_availability": "in_stock",
                "product_high_price": "0",
                "product_rating": "5",
                "season": "W17",
                "section": "S010305",
                "size_code": "N/A",
                "style_code": "S2668289",
                "sub_category": "S0103",
                "trends": "Navy",
                "variant": "N/A",
                "view_type": "PDP",
                "dimension84": "C128",
                "dimension85": "N/A",
                "dimension86": "",
                "dimension87": "N/A",
                "dimension88": "in_stock",
                "dimension89": "0",
                "dimension90": "5",
                "dimension91": "W17",
                "dimension92": "S010305",
                "dimension93": "N/A",
                "dimension94": "S2668289",
                "dimension95": "S0103",
                "dimension96": "Navy",
                "dimension97": "PDP",
                "list": "N/A"
            }]
        }
    }
  })
}
document.getElementById("gtmAddProductEvent").addEventListener("click", function() {
  logAddProductGTM();
});


function logRemoveProductGTM() {
  dataLayer.push({
    reward_card: "",
    event: "removeFromCart",
    pageCategory: "",
    ecommerce: {
        detail: {
            products: [{
                "brand": "Souluxe",
                "category": "S01",
                "colour_code": "C128",
                "full_product_code": "N/A",
                "id": "S2668289_C128",
                "launch_status": "",
                "name": "Souluxe Asymmetric Zip Sports Hoodie",
                "offers": "N/A",
                "price": "18.0",
                "product_availability_percent": "100",
                "product_availability": "in_stock",
                "product_high_price": "0",
                "product_rating": "5",
                "season": "W17",
                "section": "S010305",
                "size_code": "N/A",
                "style_code": "S2668289",
                "sub_category": "S0103",
                "trends": "Navy",
                "variant": "N/A",
                "view_type": "PDP",
                "dimension84": "C128",
                "dimension85": "N/A",
                "dimension86": "",
                "dimension87": "N/A",
                "dimension88": "in_stock",
                "dimension89": "0",
                "dimension90": "5",
                "dimension91": "W17",
                "dimension92": "S010305",
                "dimension93": "N/A",
                "dimension94": "S2668289",
                "dimension95": "S0103",
                "dimension96": "Navy",
                "dimension97": "PDP",
                "list": "N/A"
            }]
        }
    }
  })
}
document.getElementById("gtmRemoveProductEvent").addEventListener("click", function() {
  logRemoveProductGTM();
});



function logTransactionGTM() {
  dataLayer.push({
    "transDate": "17/05/19",
    "transTime": "15:37:54",
    "event": "trackTrans",
    "ecommerce": {
      "purchase": {
        "actionField": {"id":50013137,"affiliation":"Matalan","revenue":"14.17","tax":"2.83","shipping_type":"Click & Collect Standard","shipping":"0.00","shipping_tax":"0.00","discount":"0.00","coupon":"","payment_type":"null"},
        "products": [
            {"id":"S2640354_C000","name":"Double Layer Fruit Basket (42cm)","brand":"N/A","size_code":"000","category":"H01","price":"6.67","tax":"1.33","style_code":"S2640354","colour_code":"000","sku":"S2640354_C000","sub_dept":"H0104","section":"H010401","season":"S17","trends":"Cream","quantity":1,"dimension84":"000","dimension86":"N/A","dimension87":"N/A","dimension88":"in_stock","dimension89":0,"dimension90":5,"dimension91":"S17","dimension92":"H010401","dimension93":"000","dimension94":"S2640354","dimension95":"H0104","dimension96":"Cream"},
            {"id":"S2669096_C000","name":"LED E14 Warm Candle Bulb (5.9W)","brand":"Energizer","size_code":"000","category":"H10","price":"2.50","tax":"0.50","style_code":"S2669096","colour_code":"000","sku":"S2669096_C000","sub_dept":"H1001","section":"H100101","season":"Y18","trends":"Clear","quantity":3,"dimension84":"000","dimension86":"N/A","dimension87":"N/A","dimension88":"in_stock","dimension89":0,"dimension90":0,"dimension91":"Y18","dimension92":"H100101","dimension93":"000","dimension94":"S2669096","dimension95":"H1001","dimension96":"Clear"},
        ]
      }
    }
  })
}
document.getElementById("gtmTransactionEvent").addEventListener("click", function() {
  logTransactionGTM();
});
