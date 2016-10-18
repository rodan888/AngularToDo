(function(){
	angular.module('MyApp')
		.controller('pageTwoCtrl', ['$scope', '$http', '$window', function ($scope, $http, $window) {
	  
		$scope.test = ('Hello from page two Controller');

	}]);
}());