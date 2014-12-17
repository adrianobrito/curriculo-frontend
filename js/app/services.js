app.service('$cv', [function () {
	return {
		put: function(name, value){
			var cv = JSON.parse(sessionStorage.cv);
			cv[name] = value;
			sessionStorage.cv = JSON.stringify(cv);
		}, 
		clean: function(name){
			var cv = JSON.parse(sessionStorage.cv);
			cv[name] = undefined;
			sessionStorage.cv = JSON.stringify(cv);
		}, 
		get: function(){
			return sessionStorage.cv ? JSON.parse(sessionStorage.cv) : null
		}, 
		init: function(){
			var cv = {};
			sessionStorage.cv = JSON.stringify(cv);
		}
	}
}])