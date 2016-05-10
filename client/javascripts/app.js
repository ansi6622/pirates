angular.module('pirates', ['ngRoute'])
.config(function ($routeProvider) {
  $routeProvider
  .when('/arggh', {
    templateUrl: 'views/pirates.html',
    controller: 'PiratesController'
  })
})
