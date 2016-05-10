angular.module('pirates')
.service('PiratesService', function($http, $q){
  this.master = {};
  return {
    all: function() {
      return $http.get('/api/pirates');
    },
    create: function(pirate) {
      var deferred = $q.defer();

      $http.post('/api/pirates/create', pirate)
      .then(function(success){
       console.log('yaaaay');
       if(success){
         deferred.resolve(success);
         console.log(success);
       }
     })
     .catch(function(err){
       deferred.reject(err);
       console.log(err);
     })

     return deferred.promise;
    },
    reset: function() {
      this.pirate = angular.copy(this.master);
    },
    update: function(user) {
      this.master = angular.copy(pirate);
    }
  }
})
