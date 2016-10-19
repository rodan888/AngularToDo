(function(){
	angular.module('MyApp')
		.controller('taskCtrl', ['$scope', '$http', '$window', '$filter', function ($scope, $http, $window, $filter) {
	  	$scope.timeStart = new Date();
	  	$scope.now = $scope.timeStart.toISOString();
	  	$scope.tasks = (localStorage.getItem('todos')!==null) ? JSON.parse(localStorage.getItem('todos')) : [];
		
	  	$scope.addTask = function(task){		
	  		var newTask = {
	  			"id": $scope.timeStart.valueOf(),
	  			"name": task.name,
	  			"status": false,
	  			"priority": task.priority,
	  			"timeStart": $scope.timeStart,
	  			"timeEnd": task.timeEnd.toISOString(),
	  			"coment": []
	  		};	  		
			$scope.tasks.push(newTask);
			localStorage.setItem('todos', JSON.stringify($scope.tasks));
	  	};

	  	$scope.deleteTask = function(ind){
	  		$scope.tasks.splice(ind, 1);
	  		localStorage.setItem('todos', JSON.stringify($scope.tasks));
	  	};

	  	$scope.reloadTask = function(task,newDate){
	  		var newDeadline = newDate.toISOString(),
	  			lastTask    = $scope.tasks.length;
	  		$scope.tasks.push(task);
	  		$scope.tasks[lastTask].timeEnd = newDeadline;
	  	localStorage.setItem('todos', JSON.stringify($scope.tasks));	  			
	  	};
	  	$scope.taskStatus = function(ind){
	  		$scope.tasks[ind].status ? true : false;        	
	  		localStorage.setItem('todos', JSON.stringify($scope.tasks));
	  	};

	  	$scope.addComent = function(coment,ind){
	  		var newComent = {
	  			"text": coment.text,
	  			"date": new Date().toISOString()
	  		}
	  		$scope.tasks[ind].coment.push(newComent);
	  		localStorage.setItem('todos', JSON.stringify($scope.tasks));
	  	};	  	
	}]);
}());