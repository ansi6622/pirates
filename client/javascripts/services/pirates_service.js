angular.module('pirates')
.service('PiratesService', function($http){
  this.master = {};
  return {
    all: function() {
      return $http.get('/api/pirates');
    },
    create: function(pirate) {
      return $http.post('/api/pirates/create', pirate).success(function(data, status){
       console.log('yaaaay');
       console.log(data);
       console.log(status);
     })
    },
    reset: function() {
      this.pirate = angular.copy(this.master);
    },
    update: function(user) {
      this.master = angular.copy(pirate);
    }
  }
})
