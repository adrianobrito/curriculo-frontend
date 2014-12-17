var app = angular.module('curriculo',['ngRoute', 'modal', 'popover', 'alert', 'ui.utils.masks', 'ui.mask']);
var root = '/curriculo-frontend';

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider.	

	when('/login', {
		templateUrl: 'view/login.html'
	}).

	when('/cadastrar',{
		templateUrl: 'view/cadastrar.html'
	}).

	when('/cadastrar_academica', {
		templateUrl: 'view/info_academica.html'
	})

}]);

/*** App Directives **/ 
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

app.directive('ngWizard', [function () {
	return {
		restrict: 'A',
		scope:{
			title: "@title",
			current: "@current",
			size: "=size"
		}, templateUrl: 'js/components/wizard-panel/template.html',
		transclude: true
	};
}]);

/*** App Filters **/ 
app.filter('range', function() {
  return function(input, total) {
    total = parseInt(total);
    for (var i=0; i<total; i++)
      input.push(i);
    return input;
  };
});


/*** App Functions **/ 
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