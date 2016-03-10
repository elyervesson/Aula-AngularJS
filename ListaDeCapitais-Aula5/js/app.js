var mvcApp = angular.module('episodio5App', []);

/*
	Deifinição do controller ep05Controller para o modulo episodio5App

	Ex: mvcApp.controller('NomeDoController', FunçãoComOCodigoDoController);
*/
mvcApp.controller('ep05Controller', function ep05Controller($scope) {
	
	//Variavel states
	$scope.states = [
		{name:'Minas Gerais', capital: 'Belo Horizonte'},
		{name:'Sao Paulo', capital: 'Sao Paulo'},
		{name:'Paraiba', capital: 'Joao Pessoa'},
		{name:'Rio de Janeiro', capital: 'Rio de Janeiro'},
		{name:'Espirito Santo', capital: 'Vitoria'}
	];

	//Metodo addState
	$scope.addState = function() {
		$scope.states.push({name : $scope.estado, capital : $scope.capital});
		$scope.estado = '';
		$scope.capital = '';
	};
	
	//Metodo incrementa
	$scope.incrementa = function() {
	    $scope.contador = $scope.contador + 1;
	};
  
  	//Variaveis
	$scope.gostei = false;
	$scope.escondido = false;
	$scope.contador = 0;
});