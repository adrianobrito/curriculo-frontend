var modal_module = angular.module('modal', []);

modal_module.directive('modal', function () {
	return {
		restrict: 'E',
		controller: function(scope, element, attrs){
			scope.title = attrs.title;

			scope.$watch(attrs.visible, function(value){
	          if(value == true)
	            $(element).modal('show');
	          else
	            $(element).modal('hide');
	        });

	        $(element).on('shown.bs.modal', function(){
	          scope.$apply(function(){
	            scope.$parent[attrs.visible] = true;
	          });
	        });

	        $(element).on('hidden.bs.modal', function(){
	          scope.$apply(function(){
	            scope.$parent[attrs.visible] = false;
	          });
	        });

		}, controllerAs: 'modal',
		transclude: true,
		templateUrl: 'js/modal/app.js'
	};
});