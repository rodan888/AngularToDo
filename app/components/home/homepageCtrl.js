(function(){
	angular.module('MyApp')
		.controller('homePageCtrl', ['$scope', '$http', '$window','homeApiUrl', function ($scope, $http, $window, homeApiUrl) {
	  
		$http.get(homeApiUrl).success(function (data) {
			$scope.testData = data;	
		}).error(function(err){
			console.log(err);
		});

	}]);
}());