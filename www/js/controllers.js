angular.module('app.controllers', [])
  
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

//************************************************************
/*                  VARIABLES GLOBALES                      */
//************************************************************
$scope.menuType = true;
$scope.objectType = false;

$scope.homeMap = [
	{
		titulo:"titulo1",
		url: "url1",
		descripcion: "descripcion1"
	},
	{
		titulo:"titulo2",
		url: "url2",
		descripcion: "descripcion2"
	}
];

$scope.title = "";                       
$scope.picture = "";
$scope.description = "";
$scope.number = -1;
$scope.numGuardado = -1;

$scope.objectform = function(){
	$scope.menuType = false;
	$scope.objectType = true;
}

$scope.menuform = function(){
	$scope.menuType = true;
	$scope.objectType = false;
}
//************************************************************
/*               METODOS PARA FUNCIONALIDAD                 */
//************************************************************
$scope.nAleatorio = function(map){
	$scope.number = (Math.floor(Math.random()*map.length));
}

$scope.generate = function(map){
	var antes = $scope.number;
	$scope.nAleatorio(map);
	while(antes === $scope.number){
		$scope.nAleatorio(map);
	}
	var n = $scope.number;
	console.log("numero"+n);
	$scope.title = map[n].titulo;                       
	$scope.picture = map[n].url;
	$scope.description = map[n].descripcion;
}
$scope.selectMap = function(num){
	$scope.numGuardado = num;
	if(num === 0){
		$scope.generate($scope.homeMap);
	}
	else if(num === 1){
		$scope.generate($scope.carMap);
	}
	else if(num === 2){
		$scope.generate($scope.otherMap);
	}
}

}])
   
   
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {



}])
   
   
.controller('settingsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 