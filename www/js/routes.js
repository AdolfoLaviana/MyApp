angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu', {
    url: '/page2',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('house', {
    url: '/page4',
    templateUrl: 'templates/house.html',
    controller: 'houseCtrl'
  })

  .state('login', {
    url: '/page6',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('car', {
    url: '/page7',
    templateUrl: 'templates/car.html',
    controller: 'carCtrl'
  })

  .state('other', {
    url: '/page8',
    templateUrl: 'templates/other.html',
    controller: 'otherCtrl'
  })

  .state('settings', {
    url: '/page9',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

$urlRouterProvider.otherwise('/page6')

  

});