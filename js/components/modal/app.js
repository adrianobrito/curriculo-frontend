var modal_module = angular.module('modal', []);

modal_module.directive('modal', function () {
	return {
		restrict: 'E',
		link: function(scope, element, attrs){
			scope.title = attrs.title;
			scope.confirm = attrs.confirm === "true";
			scope.width = attrs.width ? attrs.width : '';
			scope.closeable = attrs.closeable === "false" ? false : true;

			if(scope.confirm){
				$(element).find('.modal-confirm').click(function(){
					if(attrs.onconfirm)	eval(attrs.onconfirm);
					if(attrs.ngConfirm) scope.$eval(attrs.ngConfirm);
					$(element[0]).find('.modal').modal('hide');
				});
			} else{
				$(element).find('.modal-ok').click(function(){
					if(attrs.onok) eval(attrs.onok);
					if(attrs.ngOk) scope.$eval(attrs.ngOk);
					$(element[0]).find('.modal').modal('hide');
				});
			}

			scope.openModal = function(name){
				if($('#' + name).attr('closeable') === "false")
					$('#' + name + ' .modal').modal({
						show: true,
						backdrop: 'static',
 	 					keyboard: false
					});
				else
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

function showModal(name){
	if($('#' + name).attr('closeable') === "false")
		$('#' + name + ' .modal').modal({
			show: true,
			backdrop: 'static',
					keyboard: false
		});
	else
		$('#' + name + ' .modal').modal('show');
		
}

function hideModal(name){
	$('#' + name + ' .modal').modal('hide');		
}