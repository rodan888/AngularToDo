(function(){
	angular.module('MyApp')
		.controller('taskCtrl', ['$scope', '$http', '$window', function ($scope, $http, $window) {
	  	
	  	$scope.tasks = [];	  	

	  	$scope.addTask = function(task){
	  		var newTask = {
	  			"id": new Date().valueOf(),
	  			"name": task.name,
	  			"priority": task.priority,
	  			"date": task.date,
	  			"coment": []
	  		};
			$scope.tasks.push(newTask);
	  		console.log($scope.tasks);
	  	};

	  	$scope.addComent = function(coment,ind){
	  		var newComent = {
	  			"text": coment.text,
	  			"date": new Date().toISOString()
	  		}
	  		$scope.tasks[ind].coment.push(newComent);
	  	};
		

	}]);
}());