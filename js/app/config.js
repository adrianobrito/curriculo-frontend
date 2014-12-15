var app = angular.module('curriculo',['ngRoute', 'modal', 'popover', 'alert']);
var root = '/curriculo-frontend';

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider.	

	when('/login', {
		templateUrl: 'view/login.html'
	}).

	when('/cadastrar_info_usuario',{
		templateUrl: 'view/info_usuario.html'
	}).

	when('/cadastrar_info_pessoal',{
		templateUrl: 'view/info_pessoal.html'
	})

}]);

app.directive('sameAs', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$parsers.unshift(function(viewValue) {
        if (viewValue === findProp(scope,attrs.sameAs)) {
          ctrl.$setValidity('sameAs', true);
          return viewValue;
        } else {
          ctrl.$setValidity('sameAs', false);
          return undefined;
        }
      });
    }
  };
});

function findProp(obj, prop, defval){
    if (typeof defval == 'undefined') defval = null;
    prop = prop.split('.');
    for (var i = 0; i < prop.length; i++) {
        if(typeof obj[prop[i]] == 'undefined')
            return defval;
        obj = obj[prop[i]];
    }
    return obj;
}