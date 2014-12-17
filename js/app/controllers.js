app.controller('LoginController', function(){
	this.salvar = function(){
		alert("Salvou");
	}
});

app.controller('CadastroController', function($scope, $rootScope, $cv){
	$rootScope.step = 0;
	if($cv.get() == null || $cv.get() == undefined)
		$cv.init();
});

app.controller('InfoUsuarioController', function($scope, $rootScope, $cv){
	$scope.info_usuario = {};
	
	this.continuar = function(){
		var info_usuario = $scope.info_usuario;
		$cv.put('info_usuario', info_usuario);
		console.log($cv.get());
		$rootScope.step = 1;
	}

});

app.controller('InfoPessoalController', function($scope, $rootScope, $cv){
	$scope.info_pessoal = {};

	this.voltar = function(){
		$rootScope.step = 0;
	}

	this.continuar = function(){
		$cv.put('info_pessoal', $scope.info_pessoal);
		console.log($cv.get());
		$rootScope.step = 2;
	}

});

app.controller('InfoAcademicaController', function($scope, $rootScope, $cv){
	$scope.info_academica = {};
	$scope.infos_academica = [];
	$scope.niveis = {
		'ensino_fundamental' : "Ensino Fundamental",
		'ensino_medio' : "Ensino Médio",
		'ensino_superior_graduacao' : "Ensino Superior",
		'ensino_superior_pos_graduacao' : "Pós-Graduação"
	}

	$scope.adicionar = function(){
		$scope.infos_academica.push($scope.info_academica);
		$scope.info_academica_form.$setPristine(false);
		$scope.info_academica = {}
	}

	this.remover = function(index){
		$scope.infos_academica.splice(index, 1);
	}

	this.voltar = function(){
		$rootScope.step = 1;
	}

	this.continuar = function(){
		$cv.put('info_academicas', $scope.info_academicas);
		console.log($cv.get());
		$rootScope.step = 3;
	}

});