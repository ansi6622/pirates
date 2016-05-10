angular.module('pirates', ['ngRoute'])
.config(function ($routeProvider) {
  $routeProvider
  .when('/pirates', {
    templateUrl: 'views/pirates.html',
    controller: 'PiratesController'
  })
  .when('/pirates/add', {
    templateUrl: 'views/pirateform.html',
    controller: 'PiratesController'
  })
})
