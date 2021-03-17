app.controller("bronzerController", function($scope, $rootScope, $location, $http, $window) {

    $scope.lipStickData = [];
    $http.get('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=bronzer').then(function(response){
        $scope.lipStickData = response.data;
        
           })
        
  });   
  