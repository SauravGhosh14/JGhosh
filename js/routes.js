angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('jGhoshHealthChart', {
    url: '/mainPage',
    templateUrl: 'templates/jGhoshHealthChart.html',
    controller: 'jGhoshHealthChartCtrl'
  })

//  .state('page', {
//    url: '/page4',
//    templateUrl: 'templates/page.html',
//    controller: 'pageCtrl'
//  })

$urlRouterProvider.otherwise('/mainPage')


});