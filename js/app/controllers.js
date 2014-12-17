var cv;

app.controller('LoginController', function(){
	this.salvar = function(){
		alert("Salvou");
	}
});

app.controller('CadastroController', function($scope, $rootScope){
	$rootScope.step = 0;
	console.log($scope.step);
});

app.controller('InfoUsuarioController', function($scope, $rootScope){
	cv = {};

	if(cv.info_usuario == null)
		this.info_usuario = {};
	else
		this.info_usuario = cv.info_usuario;

	this.continuar = function(){
		var info_usuario = $scope.info_usuario;
		cv.info_usuario = info_usuario;
		$rootScope.step = 1;
	}

});

app.controller('InfoPessoalController', function($scope, $rootScope){
	$scope.info_pessoal = {};

	this.voltar = function(){
		$rootScope.step = 0;
	}

	this.continuar = function(){
		$rootScope.step = 2;
	}

});

app.controller('InfoAcademicaController', function($scope, $rootScope){
	$scope.info_academica = {};
	$scope.infos_academica = [];

	$scope.adicionar = function(){
		$scope.infos_academica.push($scope.info_academica);
		$scope.info_academica = {}
	}

	this.remover = function(index){
		$scope.infos_academica.splice(index, 1);
	}

	this.voltar = function(){
		$rootScope.step = 1;
	}

	this.continuar = function(){
		console.log($scope.info_academica);
		$rootScope.step = 3;
	}

});