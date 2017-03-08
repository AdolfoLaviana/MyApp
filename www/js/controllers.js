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
		titulo:"Ir de playa",
		url: ".../../img/playa.jpg",
		descripcion: "Disfrutar de un bonito y soleado dia de playa"
	},
	{
		titulo:"Ir de ruta",
		url: "../../img/ruta.jpg",
		descripcion: "Aprovecha el día y sal de casa"
	},
	{
		titulo:"Cine",
		url: "../../img/cine.jpg",
		descripcion: "Que mejor manera de pasar el día que ver una película en el cine"
	},
	{
		titulo:"Paseo",
		url: "../../img/paseo.jpg",
		descripcion: "simplemente pasea"
	},
	{
		titulo:"Tiendas",
		url: "../../img/tiendas.jpg",
		descripcion: "tal vez sea momento de unas compras"
	},
	{
		titulo:"Piscina",
		url: "../../img/piscina.jpg",
		descripcion: "Un chapuzón??"
	},
	{
		titulo:"Television",
		url: "../../img/tele.jpg",
		descripcion: "Tal vez lo que buscas es una relajada tarde de sofá"
	},
	{
		titulo:"Deporte",
		url: "../../img/deporte.jpg",
		descripcion: "disfruta del día y ejercítate"
	},
	{
		titulo:"Cocinar",
		url: "../../img/cocinar.jpg",
		descripcion: "Por que no convertirte en un auténtico Gourmet"
	}
];

$scope.carMap = [
	{
		titulo:"Ir de playa",
		url: ".../../img/playa.jpg",
		descripcion: "Disfrutar de un bonito y soleado dia de playa"
	},
	{
		titulo:"Ir de ruta",
		url: "../../img/ruta.jpg",
		descripcion: "Aprovecha el día y sal de casa"
	},
	{
		titulo:"Cine",
		url: "../../img/cine.jpg",
		descripcion: "Que mejor manera de pasar el día que ver una película en el cine"
	},
	{
		titulo:"Paseo",
		url: "../../img/paseo.jpg",
		descripcion: "simplemente pasea"
	},
	{
		titulo:"Tiendas",
		url: "../../img/tiendas.jpg",
		descripcion: "tal vez sea momento de unas compras"
	},
	{
		titulo:"Piscina",
		url: "../../img/piscina.jpg",
		descripcion: "Un chapuzón??"
	},
	{
		titulo:"Television",
		url: "../../img/tele.jpg",
		descripcion: "Tal vez lo que buscas es una relajada tarde de sofá"
	},
	{
		titulo:"Deporte",
		url: "../../img/deporte.jpg",
		descripcion: "disfruta del día y ejercítate"
	},
	{
		titulo:"Cocinar",
		url: "../../img/cocinar.jpg",
		descripcion: "Por que no convertirte en un auténtico Gourmet"
	}
];

$scope.otherMap = [
	{
		titulo:"Ir de playa",
		url: ".../../img/playa.jpg",
		descripcion: "Disfrutar de un bonito y soleado dia de playa"
	},
	{
		titulo:"Ir de ruta",
		url: "../../img/ruta.jpg",
		descripcion: "Aprovecha el día y sal de casa"
	},
	{
		titulo:"Cine",
		url: "../../img/cine.jpg",
		descripcion: "Que mejor manera de pasar el día que ver una película en el cine"
	},
	{
		titulo:"Paseo",
		url: "../../img/paseo.jpg",
		descripcion: "simplemente pasea"
	},
	{
		titulo:"Tiendas",
		url: "../../img/tiendas.jpg",
		descripcion: "tal vez sea momento de unas compras"
	},
	{
		titulo:"Piscina",
		url: "../../img/piscina.jpg",
		descripcion: "Un chapuzón??"
	},
	{
		titulo:"Television",
		url: "../../img/tele.jpg",
		descripcion: "Tal vez lo que buscas es una relajada tarde de sofá"
	},
	{
		titulo:"Deporte",
		url: "../../img/deporte.jpg",
		descripcion: "disfruta del día y ejercítate"
	},
	{
		titulo:"Cocinar",
		url: "../../img/cocinar.jpg",
		descripcion: "Por que no convertirte en un auténtico Gourmet"
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
 