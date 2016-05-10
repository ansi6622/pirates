angular.module('pirates')
.controller('PiratesController', ['$scope','PiratesService', '$location', function($scope, PiratesService, $location){
  $scope.data = {};
  PiratesService.all().then(function(pirates){
    $scope.pirates = pirates;
  });
  $scope.data.message = "I am a pirate";
  $scope.data.fun = "IIII am a  BAAANANA!";

  $scope.submit = function(pirate){
    PiratesService.create(pirate).then(function(success){
      console.log('funfunfunfunfunfunf', success);
      PiratesService.all()
      .then(function(pirates){
        $scope.pirates = pirates;
        $location.path('/pirates');
      })
      .catch(function(err){
        console.log(err);
      })

    })
  };
}])
