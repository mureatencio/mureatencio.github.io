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

function logGTM() {
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

document.getElementById("gtmEvent").addEventListener("click", function() {
  logGTM();
});