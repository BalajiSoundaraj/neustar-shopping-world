var app = angular.module('shoppingApp', [
    'ngRoute', 
    ]);
    
    /**
    * Configure the Routes
    */
    app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    // Home
    .when("/",
     {templateUrl: "templates/dashboard.html",
      controller: "dashboardController"
    })
    .when("/pricing",
     {templateUrl: "templates/pricing.html",
      controller: "pricingController"
    })
    .when("/services",
     {templateUrl: "templates/services.html",
      controller: "servicesController"
    })
    .when("/lipstick",
     {templateUrl:"templates/lipstick.html",
     controller: "lipstickController"
     })
     .when("/lip_liner",
     {templateUrl:"templates/lipliner.html",
     controller: "liplinerController"
     })
     .when("/foundation",
     {templateUrl:"templates/foundation.html",
     controller: "foundationController"
     })
     .when("/eyeliner",
     {templateUrl:"templates/eyeliner.html",
     controller: "eyelinerController"
     })
     .when("/eyeshadow",
     {templateUrl:"templates/eyeshadow.html",
     controller: "eyeshadowController"
     })
     .when("/blush",
     {templateUrl:"templates/blush.html",
     controller: "blushController"
     })
     .when("/bronzer",
     {templateUrl:"templates/bronzer.html",
     controller: "bronzerController"
     })
     .when("/mascara",
     {templateUrl:"templates/mascara.html",
     controller: "mascaraController"
     })
     .when("/eyebrow",
     {templateUrl:"templates/eyebrow.html",
     controller: "eyebrowController"
     })
     .when("/nailpolish",
     {templateUrl:"templates/nailpolish.html",
     controller: "nailpolishController"
     })
     
     
    // Pages
    
    }]);

    