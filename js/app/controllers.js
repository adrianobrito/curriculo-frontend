var cv;

app.controller('LoginController', function(){
	this.salvar = function(){
		alert("Salvou");
	}
});

app.controller('InfoUsuarioController', function($scope){
	cv = {};
	
	if(cv.info_usuario == null)
		this.info_usuario = {};
	else
		this.info_usuario = cv.info_usuario;

	this.continuar = function(){
		var info_usuario = $scope.info_usuario;
		cv.info_usuario = info_usuario;
		location.href = "#cadastrar_info_pessoal";
	}

});

app.controller('InfoPessoalController', function(){
	
	this.info_pessoal = {};

	this.voltar = function(){
		location.href = "#cadastrar_info_usuario";
	}

	this.continuar = function(){

	}

});