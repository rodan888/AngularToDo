(function(){
	angular.module('MyApp')
		.controller('pageOneCtrl', ['$scope', '$http', '$window', 'homeApiUrl','getPage', function ($scope, $http, $window, homeApiUrl, getPage) {
	  
		getPage.async(homeApiUrl).then(function() {
		    $scope.testData = getPage.data();
		});

		$scope.newPage = function(){
			$http.post(homeApiUrl, $scope.page).success(function(response){
				$scope.testData.push(response);
				console.log(response);
			});
		};		
	}]);
}());