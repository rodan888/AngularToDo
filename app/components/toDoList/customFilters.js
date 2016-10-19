angular.module('MyApp')
	.filter('deadline', function(){
		return function(value, sort) {
			var list = value,
					deadline = [],
					now      = new Date().toISOString(),
					valL     = value.length;

			if(sort === 'deadline'){					
				for(var i=0; i<valL;i++){
					if(value[i].timeEnd < now){
						deadline.push(value[i]);
					};
				}
				return deadline
			}else if(sort === 'done'){
				for(var i=0; i<valL;i++){
					if(value[i].status){
						deadline.push(value[i]);
					};
				}
				return deadline
			}else if(sort === 'open'){
				for(var i=0; i<valL;i++){
					if(value[i].status !== true){
						deadline.push(value[i]);
					};
				}
				return deadline
			}else{
				return list
			}
		}
	}).filter('priority', function(){
		return function(value, sort) {
			var priority = [],					
					valL     = value.length;

			if(sort){					
				for(var i=0; i<valL;i++){
					if(value[i].priority === true && value[i].status !== true){
						priority.push(value[i]);
					};
				}
				return priority
			}else{
				return value
			}
		}
	}).filter('coment', function(){
		return function(value, sort) {
			var result = [],					
					valL   = value.length;

			if(sort){					
				for(var i=0; i<valL;i++){
					if(value[i].coment.length){
						result.push(value[i]);
					};
				}
				return result
			}else{
				return value
			}
		}
	});