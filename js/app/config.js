var app = angular.module('curriculo',['ngRoute', 'modal']);
var root = '/curriculo-frontend';

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider.	

	when('/login', {
		templateUrl: 'view/login.html'
	})

}]);

