app.controller("liplinerController", function($scope, $rootScope, $location, $http, $window) {
    $scope.globalUniqueProducts = $window.localStorage.getItem('globalUniqueProducts');
    $scope.liplinerData = [];
    $http.get('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lip_liner').then(function(response){
        $scope.liplinerData = response.data;
        
           })
	
});
