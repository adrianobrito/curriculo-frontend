(function() {
	var app = angular.module('index', ['modal','popover']);

	app.controller('IndexController', function(){
		this.showModal = true;
	});

})();