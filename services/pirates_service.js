app.service('PiratesSerrvice', function($http){
  return {
    all: function() {
      return $http.get('/api/pirates');
    }
  }
})
