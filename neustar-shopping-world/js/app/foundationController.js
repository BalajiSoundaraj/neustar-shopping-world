app.controller("foundationController", function($scope, $rootScope, $location, $http, $window) {

    $scope.foundationData = [];
    $http.get('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation').then(function(response){
        $scope.foundationData = response.data;
        
           })
        
  });   
  
  
  
  