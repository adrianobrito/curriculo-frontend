var popover_module = angular.module('popover', []);
	
popover_module.directive('popover', function () {
	return {
		restrict: 'E',
		transclude: true,
		link: function(scope, element, attrs){
			scope.title = attrs.title;
			scope.position = attrs.position;
			scope.forelement = attrs.forelement; 			

			$('#' + scope.forelement).popover({
				html: true, 
				content: $(element).find('.ng-popover div').html(),
				title: scope.title,
				placement: scope.position
			});

			scope.closePopover = function(id){
				$('#' + forElement).popover('hide');
			};
		},
		templateUrl: 'js/components/popover/popover.html'
	};
});