var alert_module = angular.module('alert', []);
	
alert_module.directive('alert', function () {
	return {
		restrict: 'E',
		transclude: true,
		link: function(scope, element, attrs){
			scope.type = attrs.type;
			scope.closeable = attrs.closeable === "false" ? false : true; 
		},
		templateUrl: 'js/components/alert/alert.html'
	}
});