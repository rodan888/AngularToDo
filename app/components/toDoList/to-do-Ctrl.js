(function(){
	angular.module('MyApp')
		.controller('taskCtrl', ['$scope', '$http', '$window', '$filter', function ($scope, $http, $window, $filter) {
	  	$scope.timeStart = new Date();
	  	$scope.now = $scope.timeStart.toISOString();
	  	$scope.tasks = (localStorage.getItem('todos')!==null) ? JSON.parse(localStorage.getItem('todos')) : [];
		
	  	function Task(name,priority,timeEnd) {
	  			this.id = $scope.timeStart.valueOf();
	  			this.name = name;
	  			this.status = false;
	  			this.priority = priority;
	  			this.timeStart = $scope.timeStart;
	  			this.timeEnd = timeEnd;
	  			this.coment = [];
	  		};	 

	  	$scope.addTask = function(task){		
	  		var newTask = new Task(task.name,task.priority,task.timeEnd.toISOString());
				$scope.tasks.push(newTask);
				localStorage.setItem('todos', JSON.stringify($scope.tasks));			
	  	};

	  	$scope.editTask = function(name,ind){
	  		$scope.tasks[ind].name = name;
	  	};

	  	$scope.deleteTask = function(ind){
	  		$scope.tasks.splice(ind, 1);
	  	};

	  	$scope.reloadTask = function(task,newDate){
	  		var newDeadline = newDate.toISOString(),
	  				newTask = new Task(task.name,task.priority,newDate.toISOString());

	  		$scope.tasks.push(newTask);
	  	};

	  	$scope.taskStatus = function(ind){
	  		$scope.tasks[ind].status ? true : false;        	
	  	};

	  	$scope.addComent = function(coment,ind){
	  		var newComent = {
	  			"text": coment.text,
	  			"date": new Date().toISOString()
	  		}
	  		$scope.tasks[ind].coment.push(newComent);
	  	};

	  	$scope.save = function(){
	  		localStorage.setItem('todos', JSON.stringify($scope.tasks));
	  	};	  	

	}]);
}());