(function(){
	angular.module('MyApp')
		.controller('innerPageCtrl', ['$scope', '$http', '$routeParams', '$window' ,'homeApiUrl', function ($scope, $http, $routeParams, $window, homeApiUrl) {
			var id = $routeParams.id;
	  
			$scope.getPage = function(){
				$http.get(homeApiUrl+'/'+id).success(function(response){
					$scope.page = response;			
				});
			};

			$scope.updatePage = function(){
				$http.put(homeApiUrl+'/'+id, $scope.page).success(function(response){
					
				}).error(function(err) {
					console.log(err);
				});
			};

			$scope.removePage = function(){
				$http({
					method: 'DELETE',
					url: homeApiUrl+'/'+id
				}).success(function(){
					$window.location.href = '#/page-one';
				});

				// $http.delete(homeApiUrl+'/'+id).success(function(){
				// 	$window.location.href = '#/page-one';
				// });
			};

	}]);
}());