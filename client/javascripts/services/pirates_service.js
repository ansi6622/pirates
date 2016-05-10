angular.module('pirates')
.service('PiratesService', function($http){
  return {
    all: function() {
      return $http.get('/api/pirates');
    }
  }
})
