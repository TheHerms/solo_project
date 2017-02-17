googleAuthApp.service('FavoritesService', function ($http) {

  //get request
  this.getUserFavorites = function() {
    return $http.get('/favorites').then(function(res){
      console.log('Response from the db', res);
      return res.data;
    }).catch(function(err){
      console.log("Got an error form the db", err);
    });
  };
  //post request
  // this.addFaves = function(favorites){
  //   return $http.post('/favorites', favorites).then(function(res){
  //     console.log('Response from the post', res);
  //     return res.data;
  //   }).catch(function(err){
  //     console.log('Got an error from the post', err);
  //   });
});
