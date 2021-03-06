function next(rootScope, step, label, value, $cv){
	$cv.put(label, value);
	go_to(rootScope, step);
}

function go_to(rootScope, step){
	rootScope.step = step;
}

app.controller('LoginController', function(){
	this.salvar = function(){
		alert("Salvou");
	}
});

app.controller('CadastroController', function($scope, $rootScope, $cv){
	go_to($rootScope, 0);
	if($cv.get() == null || $cv.get() == undefined)
		$cv.init();
});

app.controller('InfoUsuarioController', function($scope, $rootScope, $cv){
	$scope.info_usuario = {};
	
	this.continuar = function(){
		next($rootScope, 1,'info_usuario', $scope.info_usuario, $cv);
	}

});

app.controller('InfoPessoalController', function($scope, $rootScope, $cv){
	$scope.info_pessoal = {};

	this.voltar = function(){
		go_to($rootScope, 0);
	}

	this.continuar = function(){
		$scope.info_pessoal.nascimento = $scope.info_pessoal.nascimento.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
		next($rootScope, 2,'info_pessoal', $scope.info_pessoal , $cv);
	}

});

app.controller('InfoAcademicaController', function($scope, $rootScope, $cv){
	$scope.info_academica = {};
	$scope.infos_academica = [];
	$scope.editing = false;

	$scope.niveis = {
		'ensino_fundamental' : "Ensino Fundamental",
		'ensino_medio' : "Ensino Médio",
		'ensino_superior_graduacao' : "Ensino Superior",
		'ensino_superior_pos_graduacao' : "Pós-Graduação"
	}

	$scope.editar = function(info_academica){
		$scope.editing = true;
		$scope.info_academica = info_academica;
	}

	$scope.adicionar = function(){
		if($scope.editing){
			$scope.editing = false;
		} else{
			$scope.infos_academica.push($scope.info_academica);	
		}
		
		$scope.info_academica_form.$setPristine(false);
		$scope.info_academica = {}
	}

	$scope.prepareRemove = function(index){
		$scope.removeIndex = index;
	}

	$scope.remover = function(){
		$scope.infos_academica.splice($scope.removeIndex, 1);
		$scope.$apply();
	}

	this.voltar = function(){
		go_to($rootScope, 1);
	}

	this.continuar = function(){
		next($rootScope, 3,'info_academicas', $scope.info_academicas, $cv);
	}

});

app.controller('InfoProfissionalController', function($scope, $rootScope, $cv){
	$scope.infos_profissional = []
	var init = function(){
		$scope.info_profissional = {}
		$scope.info_profissional.atividades = []
		$scope.atividade = { }
		$scope.editing = false;
	};

	init();

	$scope.remover = function(){
		$scope.infos_profissional.splice($scope.removeIndex, 1);
		$scope.$apply();
	}

	$scope.prepareRemove = function(index){
		$scope.removeIndex = index;
	}

	$scope.editar = function(info_profissional){
		$scope.editing = true;
		$scope.info_profissional = info_profissional;	
	}

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

		if($scope.editing){
			$scope.editing = false;
		} else{
			$scope.infos_profissional.push($scope.info_profissional);	
		}

		init();
		$scope.info_profissional_form.$setPristine(false);
	}

	this.voltar = function(){
		go_to($rootScope, 2);
	}

	this.continuar = function(){
		if($scope.infos_profissional.length != 0)
			$cv.put('info_profissionals', $scope.infos_profissional);
		go_to($rootScope, 4);
	}

});

app.controller('CursoController', function($scope, $rootScope, $cv){
	$scope.cursos = []
	var init = function(){
		$scope.curso = {};
		$scope.editing = false;
	}

	init();

	$scope.adicionar_curso = function(){
		curso = $scope.curso;
		curso.inicio = curso.inicio.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
		if(curso.fim)
			curso.fim = curso.fim.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");

		if($scope.editing){
			$scope.editing = false;
		} else{
			$scope.cursos.push($scope.curso);	
		}

		init();
		$scope.curso_form.$setPristine(false);
	}
	
	$scope.remover = function(){
		$scope.cursos.splice($scope.removeIndex, 1);
		$scope.$apply();
	}

	$scope.prepareRemove = function(index){
		$scope.removeIndex = index;
	}

	$scope.editar = function(curso){
		$scope.editing = true;
		$scope.curso = curso;	
	}

	this.continuar = function(){
		if($scope.cursos.length != 0)
			$cv.put('cursos', $scope.cursos);
		go_to($rootScope, 5);
	}

	this.voltar = function(){
		go_to($rootScope, 3);
	}

});

app.controller('QualificacaoController', function($scope, $rootScope, $cv){
	$scope.qualificacoes = []
	$scope.qualificacao = {}

	$scope.remover_qualificacao = function(index){
		$scope.qualificacoes.splice(index, 1);
	}

	$scope.adicionar_qualificacao = function(){
		$scope.qualificacoes.push($scope.qualificacao);
		$scope.qualificacao =  {}
		console.log($scope.qualificacoes);
	}

	this.continuar = function(){
		if($scope.qualificacoes.length != 0)
			$cv.put('qualifcacoes', $scope.qualificacoes);

		$cv.send();
		go_to($rootScope, 6);
	}

	this.voltar = function(){
		go_to($rootScope, 4);
	}
	
});

app.controller('SuccessController', function($scope, $rootScope, $cv){
	//$scope.info_usuario = $cv.get().info_usuario;
	$scope.info_usuario = {}
	$scope.info_usuario.login = "adrianobrito"
});