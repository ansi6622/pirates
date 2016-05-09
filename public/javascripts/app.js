angular.module('pirates', ['ngRoute'])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/pirates.html',
    controller: 'PiratesController'
  })
})
