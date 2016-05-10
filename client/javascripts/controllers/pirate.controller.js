angular.module('pirates')
.controller('PiratesController', ['$scope','PiratesService', function($scope, PiratesService){
  $scope.data = {};
  PiratesService.all().then(function(pirates){
    $scope.pirates = pirates;
  });
  $scope.data.message = "I am a pirate";
  $scope.data.fun = "IIII am a  BAAANANA!";

}])
