// start building food app
import React from "react";
import ReactDOM  from "react-dom/client";
/*
Header
-Logo
-nav items
  -Home
  -About Us
  -Contact Us
-Cart

Body
-Search Bar
-Restuarent list
 -Restuarent Card
  -Name of Restuarent
  -Image
  -Ratings
  -cuisine

Footer
-Links
-Copyright

*/
const HeaderComponent = ()=> {
return (
<div className="header">
<img className= "web-logo" alt="logo"  src="https://marketplace.canva.com/EAFowsrK6x8/1/0/1600w/canva-red-and-yellow-catering-flat-illustrative-food-place-logo-rYbQJ_qtaz8.jpg"></img>
<ul className="nav-bar-items-list">
<li>Home</li>
 <li>About</li>
 <li>Contact Us</li>
 <li>Cart</li>
</ul>

</div>

)
};
// Get the data from swiggy website

const restaurantsList = [
    {
      "info": {
        "id": "185154",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "p4auwbltmzjsrz0r65d1",
        "locality": "Gill Road",
        "areaName": "Jawahar Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Pastas",
          "Desserts"
        ],
        "avgRating": 4.1,
        "feeDetails": {
          "restaurantId": "185154",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2100
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2100
        },
        "parentId": "2456",
        "avgRatingString": "4.1",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 25,
          "serviceability": "SERVICEABLE",
          "slaString": "25 mins",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-14 00:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹999",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/dominos-pizza-gill-road-jawahar-nagar-ludhiana-185154",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "129854",
        "name": "K Chawla Ice Cream & Sweets",
        "cloudinaryImageId": "ui0avqud3o8i4jvhnrhl",
        "locality": "Gill Road",
        "areaName": "Industrial Area",
        "costForTwo": "₹230 for two",
        "cuisines": [
          "Ice Cream",
          "Chinese",
          "Snacks",
          "Continental",
          "Beverages",
          "Sweets",
          "Tandoor"
        ],
        "avgRating": 4.2,
        "veg": true,
        "feeDetails": {
          "restaurantId": "129854",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2100
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2100
        },
        "parentId": "112659",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 2.5,
          "serviceability": "SERVICEABLE",
          "slaString": "21 mins",
          "lastMileTravelString": "2.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-13 23:15:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/k-chawla-ice-cream-and-sweets-gill-road-industrial-area-ludhiana-129854",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "116031",
        "name": "Dyal Sweets and Bakery",
        "cloudinaryImageId": "g06eiuibz1443ie4a3br",
        "locality": "Janta Nagar",
        "areaName": "Gill Road",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Bakery",
          "Chinese",
          "Desserts",
          "North Indian",
          "Indian",
          "South Indian"
        ],
        "avgRating": 4.3,
        "veg": true,
        "feeDetails": {
          "restaurantId": "116031",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2100
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2100
        },
        "parentId": "75610",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 2.8,
          "serviceability": "SERVICEABLE",
          "slaString": "25 mins",
          "lastMileTravelString": "2.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-13 22:25:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/dyal-sweets-and-bakery-janta-nagar-gill-road-ludhiana-116031",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "205387",
        "name": "Kumar Ice Cream & Fast Food",
        "cloudinaryImageId": "aaelfrs4cgpskq8cq2dd",
        "locality": "Shahpur Road",
        "areaName": "Ludhiana Junction",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Beverages",
          "Chinese",
          "South Indian",
          "Ice Cream"
        ],
        "avgRating": 4.2,
        "veg": true,
        "feeDetails": {
          "restaurantId": "205387",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2100
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2100
        },
        "parentId": "121764",
        "avgRatingString": "4.2",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 1.6,
          "serviceability": "SERVICEABLE",
          "slaString": "21 mins",
          "lastMileTravelString": "1.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-13 22:45:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/kumar-ice-cream-and-fast-food-shahpur-road-ludhiana-junction-ludhiana-205387",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "116781",
        "name": "Meshi Vaishnu Dhaba",
        "cloudinaryImageId": "bskqcvobts5au0c0hlfi",
        "locality": "Gill Road",
        "areaName": "Industrial Area",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "North Indian",
          "Thalis"
        ],
        "avgRating": 4,
        "veg": true,
        "feeDetails": {
          "restaurantId": "116781",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2100
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2100
        },
        "parentId": "135377",
        "avgRatingString": "4.0",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 18,
          "lastMileTravel": 2.1,
          "serviceability": "SERVICEABLE",
          "slaString": "18 mins",
          "lastMileTravelString": "2.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-13 23:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/meshi-vaishnu-dhaba-gill-road-industrial-area-ludhiana-116781",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "79134",
        "name": "Rishi Vegetarian Dhaba (RVN)",
        "cloudinaryImageId": "k8kymmi0ep2slhkvvjls",
        "locality": "pritam nagar",
        "areaName": "Model Town",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "North Indian",
          "Thalis"
        ],
        "avgRating": 4.2,
        "veg": true,
        "feeDetails": {
          "restaurantId": "79134",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2100
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2100
        },
        "parentId": "169736",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 2.7,
          "serviceability": "SERVICEABLE",
          "slaString": "21 mins",
          "lastMileTravelString": "2.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-13 22:45:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "55% OFF",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/rishi-vegetarian-dhaba-rvn-pritam-nagar-model-town-ludhiana-79134",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "66558",
        "name": "Sartaj Sweets & Savouries",
        "cloudinaryImageId": "zav2e1hftvjqsknfh8os",
        "locality": "Saraba Nagar",
        "areaName": "Civil Lines",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Bakery"
        ],
        "avgRating": 4.3,
        "veg": true,
        "feeDetails": {
          "restaurantId": "66558",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2100
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2100
        },
        "parentId": "178513",
        "avgRatingString": "4.3",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 4,
          "serviceability": "SERVICEABLE",
          "slaString": "29 mins",
          "lastMileTravelString": "4.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-13 21:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
              "description": "OnlyOnSwiggy"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "OnlyOnSwiggy",
                    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/sartaj-sweets-and-savouries-saraba-nagar-civil-lines-ludhiana-66558",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "262097",
        "name": "Burger King",
        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "locality": "Pavilion Mall",
        "areaName": "Civil Lines",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 4.1,
        "feeDetails": {
          "restaurantId": "262097",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2100
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2100
        },
        "parentId": "166",
        "avgRatingString": "4.1",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 3.7,
          "serviceability": "SERVICEABLE",
          "slaString": "33 mins",
          "lastMileTravelString": "3.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-13 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/burger-king-pavilion-mall-civil-lines-ludhiana-262097",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "87259",
        "name": "KFC",
        "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
        "locality": "GT Road",
        "areaName": "Ludhiana Junction",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Biryani",
          "American",
          "Snacks",
          "Fast Food"
        ],
        "avgRating": 3.9,
        "feeDetails": {
          "restaurantId": "87259",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2400
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2400
        },
        "parentId": "547",
        "avgRatingString": "3.9",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 18,
          "lastMileTravel": 1.5,
          "serviceability": "SERVICEABLE",
          "slaString": "18 mins",
          "lastMileTravelString": "1.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-14 02:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/kfc-gt-road-ludhiana-junction-ludhiana-87259",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "253767",
        "name": "McDonald's",
        "cloudinaryImageId": "6dc3ed2ca21d71acff7c2a51dfe4c720",
        "locality": "Ansal Plaza Mall",
        "areaName": "Gurdev Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "American"
        ],
        "avgRating": 4.3,
        "feeDetails": {
          "restaurantId": "253767",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2600
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2600
        },
        "parentId": "630",
        "avgRatingString": "4.3",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 5,
          "serviceability": "SERVICEABLE",
          "slaString": "30 mins",
          "lastMileTravelString": "5.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-14 00:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/mcdonalds-ansal-plaza-mall-gurdev-nagar-ludhiana-253767",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "67313",
        "name": "Baba Chicken (Sarabha Nagar)",
        "cloudinaryImageId": "zi38hslwfjoook2wh5mo",
        "locality": "Sarabha Nagar",
        "areaName": "Shastri Nagar",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "North Indian"
        ],
        "avgRating": 4.2,
        "feeDetails": {
          "restaurantId": "67313",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2400
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2400
        },
        "parentId": "5285",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 3.8,
          "serviceability": "SERVICEABLE",
          "slaString": "33 mins",
          "lastMileTravelString": "3.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-13 23:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
              "description": "OnlyOnSwiggy"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "OnlyOnSwiggy",
                    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/baba-chicken-sarabha-nagar-sarabha-nagar-shastri-nagar-ludhiana-67313",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "183103",
        "name": "The Coffee Bean & Tea Leaf",
        "cloudinaryImageId": "rhlcuswokouaxkwqj2o4",
        "locality": "PAVILION MALL, NEAR FOUNTAIN CHOWK",
        "areaName": "Civil Lines",
        "costForTwo": "₹450 for two",
        "cuisines": [
          "Beverages",
          "Snacks"
        ],
        "avgRating": 4.4,
        "feeDetails": {
          "restaurantId": "183103",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2100
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2100
        },
        "parentId": "5171",
        "avgRatingString": "4.4",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 3.7,
          "serviceability": "SERVICEABLE",
          "slaString": "32 mins",
          "lastMileTravelString": "3.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-13 20:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/the-coffee-bean-and-tea-leaf-pavilion-mall-near-fountain-chowk-civil-lines-ludhiana-183103",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "190621",
        "name": "Bake Fresh (Pakhowal Road)",
        "cloudinaryImageId": "xqzzogs82mabufitb7hg",
        "locality": "2nd Phase",
        "areaName": "Pakhowal Road",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Cakes and Pastries",
          "Bakery",
          "Snacks",
          "Beverages"
        ],
        "avgRating": 4.4,
        "feeDetails": {
          "restaurantId": "190621",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3600
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3600
        },
        "parentId": "39913",
        "avgRatingString": "4.4",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 6.3,
          "serviceability": "SERVICEABLE",
          "slaString": "33 mins",
          "lastMileTravelString": "6.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-13 22:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/bake-fresh-pakhowal-road-2nd-phase-pakhowal-road-ludhiana-190621",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "97767",
        "name": "Oberoi Special",
        "cloudinaryImageId": "cuoadmyhnbppr1i3iceb",
        "locality": "National Road",
        "areaName": "Civil Lines",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "North Indian",
          "Chinese",
          "Italian"
        ],
        "avgRating": 4.1,
        "veg": true,
        "feeDetails": {
          "restaurantId": "97767",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2100
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2100
        },
        "parentId": "11612",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 27,
          "lastMileTravel": 4.1,
          "serviceability": "SERVICEABLE",
          "slaString": "27 mins",
          "lastMileTravelString": "4.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-13 21:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/oberoi-special-national-road-civil-lines-ludhiana-97767",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "66658",
        "name": "Big N Meats",
        "cloudinaryImageId": "jszu32ih9yhjvk7ugzfk",
        "locality": "Pakhowal Road",
        "areaName": "Gurdev Nagar",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "North Indian",
          "Chinese"
        ],
        "avgRating": 4.3,
        "feeDetails": {
          "restaurantId": "66658",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2100
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2100
        },
        "parentId": "45652",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 4.1,
          "serviceability": "SERVICEABLE",
          "slaString": "31 mins",
          "lastMileTravelString": "4.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-14 02:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/big-n-meats-pakhowal-road-gurdev-nagar-ludhiana-66658",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "111814",
        "name": "Barista Coffee",
        "cloudinaryImageId": "02731f6bd73f982bc74a522edd9c1b01",
        "locality": "BRS Nagar",
        "areaName": "BRS Nagar",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Beverages",
          "Snacks",
          "Desserts"
        ],
        "avgRating": 3.9,
        "feeDetails": {
          "restaurantId": "111814",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2100
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2100
        },
        "parentId": "2359",
        "avgRatingString": "3.9",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 27,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "27 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-13 22:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/barista-coffee-brs-nagar-ludhiana-111814",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "66865",
        "name": "Subway",
        "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
        "locality": "Cemetery Road",
        "areaName": "Civil Lines",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Healthy Food",
          "Salads",
          "Snacks",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4,
        "feeDetails": {
          "restaurantId": "66865",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2100
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2100
        },
        "parentId": "2",
        "avgRatingString": "4.0",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 3.8,
          "serviceability": "SERVICEABLE",
          "slaString": "26 mins",
          "lastMileTravelString": "3.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-13 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/subway-cemetery-road-civil-lines-ludhiana-66865",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "319936",
        "name": "La Pino'z Pizza",
        "cloudinaryImageId": "lfmlerdw9cd7bal7tx2y",
        "locality": "Goel market",
        "areaName": "Model Town",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Pizzas",
          "Pastas",
          "Italian",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 3.9,
        "feeDetails": {
          "restaurantId": "319936",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2100
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2100
        },
        "parentId": "4961",
        "avgRatingString": "3.9",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 2.7,
          "serviceability": "SERVICEABLE",
          "slaString": "25 mins",
          "lastMileTravelString": "2.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-14 04:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹599",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-goel-market-model-town-ludhiana-319936",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "70803",
        "name": "Pizza Hut",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "locality": "Pavilion Mall",
        "areaName": "Civil Lines",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 3.7,
        "feeDetails": {
          "restaurantId": "70803",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2100
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2100
        },
        "parentId": "721",
        "avgRatingString": "3.7",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 39,
          "lastMileTravel": 3.6,
          "serviceability": "SERVICEABLE",
          "slaString": "39 mins",
          "lastMileTravelString": "3.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-13 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/pizza-hut-pavilion-mall-civil-lines-ludhiana-70803",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "66653",
        "name": "Wok Singh",
        "cloudinaryImageId": "dpq7u73jorybzeqelawc",
        "locality": "A Block",
        "areaName": "Sarabha Nagar",
        "costForTwo": "₹450 for two",
        "cuisines": [
          "Chinese",
          "Continental",
          "Thai",
          "Japanese"
        ],
        "avgRating": 4.4,
        "feeDetails": {
          "restaurantId": "66653",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2600
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2600
        },
        "parentId": "11183",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 5,
          "serviceability": "SERVICEABLE",
          "slaString": "30 mins",
          "lastMileTravelString": "5.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-09-13 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/wok-singh-a-block-sarabha-nagar-ludhiana-66653",
        "type": "WEBLINK"
      }
    }
  ]

// data fom mc donald object dynamic
const mcDonald = {
img : "https://cdn.logojoy.com/wp-content/uploads/2018/05/30151550/1317.png",
name : "Mc Donald",
cuisine : ["American", "Burger"],
ratings : "4.4"
};
/*
 an example of static restuarent card
const RestuarentCard = () => {
    return (

<div className="card">
    <img src= "https://cdn.logojoy.com/wp-content/uploads/2018/05/30151550/1317.png"></img>
    <ul>
    <li>Name of the Restuarent</li>
    <li>American cuisine</li>
    <li>5 stars</li>
    </ul>
</div>
  )
};
*/
// render data without props --> with this method you only render one restuarent[0] in all cards
/*
const RestuarentCard = () => {
    return (
        <div className="card">
        <img src= {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+restaurantsList[0].info?.cloudinaryImageId}></img>
    <ul>
    <li><h3>{restaurantsList[0].info?.name}</h3></li>
    <li><h4>{restaurantsList[0].info?.cuisines.join(', ')}</h4></li>
    <li><h4>{restaurantsList[0].info?.avgRating} stars</h4> </li>
    </ul>
    </div>
    )
};
*/
// render different data in each card using (props) --> success
// const RestuarentCard = (props) => {
//     console.log(props);
//     return(
//     <div className="card">
//         <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props.restaurant.cloudinaryImageId}></img>
//     <h3>{props.restaurant.name}</h3>
//     <h4>{props.restaurant.cuisines.join(', ')}</h4>
//     <h4>{props.restaurant.avgRating} stars</h4>
    
//     </div>
//     )
// };
 
// render different data in each card with (props) using restuarent
// const AppLayout = ()=> {
//     return (
//         <>
//         <HeaderComponent/>
//         <div className="list" style={{display : 'flex', marginTop : '3px', flexWrap : 'wrap', justifyContent : 'space-between'}}>    
//         <RestuarentCard restaurant= {restaurantsList[0].info}/>
//         <RestuarentCard restaurant= {restaurantsList[1].info}/>
//         <RestuarentCard restaurant= {restaurantsList[2].info}/>
//         <RestuarentCard restaurant= {restaurantsList[3].info}/>
//         <RestuarentCard restaurant= {restaurantsList[4].info}/>
//         <RestuarentCard restaurant= {restaurantsList[5].info}/>
//         <RestuarentCard restaurant= {restaurantsList[6].info}/>
//         <RestuarentCard restaurant= {restaurantsList[7].info}/>
//         <RestuarentCard restaurant= {restaurantsList[8].info}/>
//         <RestuarentCard restaurant= {restaurantsList[9].info}/>
//         <RestuarentCard restaurant= {restaurantsList[10].info}/>
//         <RestuarentCard restaurant= {restaurantsList[11].info}/>
//         </div>
//         </>
//     )

// };

// render different data in each card using (props) with object destructuring --> sucess
const RestuarentCard = ({name, cloudinaryImageId, cuisines, avgRating}) => {
        // console.log(props);
        return(
        <div className="card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} stars</h4>
        
        </div>
        )
    };
// use spread opeartor & use map function for array like restuarentList
// if we do't use spread operator then 
// <RestuarentCard name = {restaurantsList[0].info.name} cloudinaryImageId = {restaurantsList[0].info.cloudinaryImageId} cuisines = {restaurantsList[0].info.cuisines}  avgRating = {restaurantsList[0].info.avgRating}/>
//
//
const AppLayout = () => {
    return (
                <>
                <HeaderComponent/>
         <div className="list" style={{display : 'flex', marginTop : '3px', flexWrap : 'wrap', justifyContent : 'space-between'}}>   
         {/* <RestuarentCard {...restaurantsList[0].info}/>  */ }
         {
            restaurantsList.length > 0 && restaurantsList.map((restaurant) => {
             return <RestuarentCard  {...restaurant.info}/> })
         }
         </div>
         </>
    )
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
