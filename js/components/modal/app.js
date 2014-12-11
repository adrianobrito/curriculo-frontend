var modal_module = angular.module('modal', []);

modal_module.directive('modal', function ($parse) {
	return {
		restrict: 'E',
		link: function(scope, element, attrs){
			scope.title = attrs.title;
			scope.confirm = attrs.confirm === "true";
			
			if(scope.confirm){
				$(element).find('.modal-confirm').click(function(){
					confirm_action()
					$(element[0]).find('.modal').modal('hide');
				});
			} else{
				$(element).find('.modal-ok').click(function(){
					$(element[0]).find('.modal').modal('hide');
				});
			}

			scope.openModal = function(name){
				$('#' + name + ' .modal').modal('show');
			}

			scope.close = function(name){
				$('#' + name + ' .modal').modal('hide');	
			}

		}, 
		transclude: true,
		templateUrl: 'js/components/modal/modal.html'
	};
});