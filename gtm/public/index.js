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

dataLayer = [];

func logGTM() {
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

function logEvent(name, params) {
  if (!name) {
    return;
  }

  if (window.AnalyticsWebInterface) {
    // Call Android interface
    window.AnalyticsWebInterface.logEvent(name, JSON.stringify(params));
  } else if (window.webkit
      && window.webkit.messageHandlers
      && window.webkit.messageHandlers.firebase) {
    // Call iOS interface
    var message = {
      command: 'logEvent',
      name: name,
      parameters: params
    };
    window.webkit.messageHandlers.firebase.postMessage(message);
  } else {
    // No Android or iOS interface found
    console.log("No native APIs found.");
  }
}
// [END log_event]

// [START set_user_property]
function setUserProperty(name, value) {
  if (!name || !value) {
    return;
  }

  if (window.AnalyticsWebInterface) {
    // Call Android interface
    window.AnalyticsWebInterface.setUserProperty(name, value);
  } else if (window.webkit
      && window.webkit.messageHandlers
      && window.webkit.messageHandlers.firebase) {
    // Call iOS interface
    var message = {
      command: 'setUserProperty',
      name: name,
      value: value
   };
    window.webkit.messageHandlers.firebase.postMessage(message);
  } else {
    // No Android or iOS interface found
    console.log("No native APIs found.");
  }
}
// [END set_user_property]

document.getElementById("event1").addEventListener("click", function() {
  console.log("event1");
  logEvent("event1", { foo: "bar", baz: 123 });
});

document.getElementById("event2").addEventListener("click", function() {
  console.log("event2");
  logEvent("event2", { size: 123.456 });
});

document.getElementById("event3").addEventListener("click", function() {
  console.log("event2");
  logGTM()
});

document.getElementById("userprop").addEventListener("click", function() {
    console.log("userprop");
    setUserProperty("userprop", "custom_value");
});
