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
		$scope.info_pessoal.nascimento = $scope.info_pessoal.nascimento.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
		$cv.put('info_pessoal', $scope.info_pessoal);
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
		$rootScope.step = 3;
	}

});

app.controller('InfoProfissionalController', function($scope){
	$scope.infos_profissional = []
	var init = function(){
		$scope.info_profissional = {}
		$scope.info_profissional.atividades = []
		$scope.atividade = { }
	};

	init();

	$scope.adicionar_atividade = function(){
		$scope.info_profissional.atividades.push($scope.atividade);
		$scope.atividade = { }		
	}

	$scope.remover_atividade = function(index){
		$scope.info_profissional.atividades.splice(index, 1);	
	}

	$scope.adicionar = function(){
		info_profissional = $scope.info_profissional;
		info_profissional.inicio = info_profissional.inicio.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
		if(info_profissional.fim)
			info_profissional.fim = info_profissional.fim.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");

		$scope.infos_profissional.push($scope.info_profissional);
		init();

		$scope.info_profissional_form.$setPristine(false);
	}

	$scope.remover = function(index){
		$scope.infos_profissional.splice(index, 1);
	}

	this.voltar = function(){
		$rootScope.step = 2;
	}

	this.continuar = function(){
		if($scope.infos_profissional.length != 0)
			$cv.put('info_profissionals', $scope.infos_profissional);
		$rootScope.step = 4;
	}

});

app.controller('CursoController', function($scope){
	$scope.cursos = []
	var init = function(){
		$scope.curso = {};
	}

	init();

	$scope.adicionar_curso = function(){
		curso = $scope.curso;
		curso.inicio = curso.inicio.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
		if(curso.fim)
			curso.fim = curso.fim.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");

		$scope.cursos.push($scope.curso);
		init();
		$scope.curso_form.$setPristine(false);
	}
});