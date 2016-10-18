(function() {
	angular
		.module('MyApp')
		.factory('getPage', function($http, $q) {
			  var deffered = $q.defer();
			  var data = [];  
			  var getPage = {};

			  getPage.async = function(url) {
			    $http.get(url)
			    .success(function (d) {
			      data = d;			
			      deffered.resolve();
			    });
			    return deffered.promise;
			  };
			  getPage.data = function() { return data; };

			  return getPage;
		});
})();