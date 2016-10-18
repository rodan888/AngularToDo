angular.module('MyApp', ['ngRoute', 'ngAnimate', 'ngMap', 'ngResource'])
	.constant('homeApiUrl','http://localhost:2403/solarsistem')
	.config(['$routeProvider', '$httpProvider',function ($routeProvider, $httpProvider){
		$routeProvider
		.when('/', {
			templateUrl: 'components/home/home.html',
			controller: 'homePageCtrl',
			animation: 'first'
		}).when('/page-one', {
			templateUrl: 'components/page-one/page-one.html',
			controller: 'pageOneCtrl',
			animation: 'first'
		}).when('/page-one/details/:id',{
			controller: 'innerPageCtrl',
			templateUrl: 'components/page-one-inner/inner-page.html',
			animation: 'first'
		}).when('/page-two', {
			templateUrl: 'components/page-two/page-two.html',
			controller: 'pageTwoCtrl',
			animation: 'first'
		}).otherwise({
	      redirectTo: '/'
	    });
	}])
	.controller('animateCtrl', function($scope, $rootScope){
		$rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
			$rootScope.animation = currRoute.animation;
		});
	});