googleAuthApp.service('FavoritesService', function ($http) {

  //get request
  this.getUserFavorites = function() {
    return $http.get('/private/favorites').then(function(res){
      console.log('first response ', res.data);
      return res.data;

    }).catch(function(err){
      console.log("Got an error form the db", err);
    });
  };

  // post request
  this.addUserFavorites = function(favorite){
    // console.log( 'we are getting favorites', favorite);
    return $http.post('/favorites', favorite).then(function(res){
      console.log('Response from the post', res);
      return res.data;
    }).catch(function(err){
      console.log('Got an error from the post', err);

    });
  
  };


});
