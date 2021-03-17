app.controller("dashboardController", function($scope, $rootScope, $location, $http, $window) {
	
	

$scope.dataBindCheck = 'Binded Data';
$scope.productType = [];
$scope.hideNormalDash = false;
$scope.productTypeUniqueData = [{product_type:"", image_link:"", description:""}];
$scope.numberLimit = 50;

$http.get('data.json').then(function(response){
	$scope.productList = response.data;
	for(var i=0; i<$scope.productList.length; i++)
	{
		$scope.productType.push($scope.productList[i].product_type);		
	}
	
	$scope.res = [];
	
		$scope.productTypeUnique = $scope.productType 
			.filter(function (item, pos) { 
				
			return $scope.productType.indexOf(item) == pos; 
		}) ;
	for(var j=0; j<$scope.productTypeUnique.length; j++)
	{
		for(var i=0; i<$scope.productList.length; i++)
	{
		if($scope.productList[i].product_type==$scope.productTypeUnique[j])
		{
			$scope.productTypeUniqueData[j] ={};
			$scope.productTypeUniqueData[j].product_type = $scope.productList[i].product_type;
			$scope.productTypeUniqueData[j].image_link = $scope.productList[i].image_link;
			$scope.productTypeUniqueData[j].description = $scope.productList[i].description;
			
			break;
			//console.log($scope.productTypeUniqueData.data);
			
		}
	}
	}
	//console.log($scope.productType);
	$rootScope.globalUniqueProducts = $scope.productTypeUnique;
	$window.localStorage.setItem('globalUniqueProducts', $scope.productTypeUnique);
	$scope.brandName = [];

    $http.get('data.json').then(function(response){
        $scope.productListForBrand = response.data;
        
        {
            for(var i=0; i<$scope.productListForBrand.length; i++)
            {
                $scope.brandName.push($scope.productListForBrand[i].brand);
            }
        }
        $scope.res = [];
        
            $scope.brandNameUnique = $scope.brandName 
                .filter(function (item, pos) { 
                    
                return $scope.brandName.indexOf(item) == pos; 
            }) ;
        
        //console.log($scope.brandNameUnique);
    })  
    $scope.complete = function(string){  
        $scope.hidethis = false;  
        var output = [];  
        angular.forEach($scope.brandNameUnique, function(brand){
            if(brand!=null)
            {
                if(brand.toLowerCase().indexOf(string.toLowerCase()) >= 0)  
             {  
                  output.push(brand);  
             } 
            }  
              
        });  
        $scope.filterCountry = output;  
   } 
   $scope.fillTextbox = function(string){  
    $scope.country = string;  
    $scope.hidethis = true;  
}  
	$scope.searchBrandNameInApi = function(brandName)
	{
		
		console.log('brandName'+ brandName);
		$http.get('http://makeup-api.herokuapp.com/api/v1/products.json?brand='+brandName).then(function(response){
			console.log(response.data);
			$scope.hideNormalDash = true;
			$scope.productTypeUniqueData = [];
			$scope.searchOutputData = response.data;
			
		
		})
	}
	
	


});

});
