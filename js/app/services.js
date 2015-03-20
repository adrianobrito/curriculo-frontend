app.service('$cv', function ($http) {
	
	var service_url = function(path){
		return "http://localhost:4567/"
	}

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
		},
		send: function(){
			$http.post(service_url('api/v1/cvs'), JSON.parse(sessionStorage.cv))
				  success(function(data, status, headers, config) {
				    console.log("ok");
				  })
		}
	}
})
