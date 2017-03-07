angular.module('app.controllers', [])
  
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

$scope.menuType = true;
$scope.objectType = false;
console.log("menuType menu"+$scope.menuType);
console.log("objectType menu"+$scope.objectType);
$scope.objectform = function(){
	$scope.menuType = false;
	$scope.objectType = true;
	console.log("menuType object"+$scope.menuType);
	console.log("objectType object"+$scope.objectType);
}
$scope.menuform = function(){
	$scope.menuType = true;
	$scope.objectType = false;
	console.log("menuType object"+$scope.menuType);
	console.log("objectType object"+$scope.objectType);
}

}])
   
   
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
console.log("menuType login"+$scope.menuType);
console.log("objectType login"+$scope.objectType);



}])
   
   
.controller('settingsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 