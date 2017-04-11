
googleAuthApp.service('TournamentService', function ($http) {

  //get request
  this.getUserTournaments = function() {
    return $http.get('/private/tournaments').then(function(res){
      console.log('first response ', res.data);
      return res.data;

    }).catch(function(err){
      console.log("Got an error form the db", err);
    });
  };

  // post request
  this.addUserTournaments = function(tournament){
    console.log( 'we are getting tournaments', tournament);
    return $http.post('/tournaments', tournament).then(function(res){
      console.log('Response from the post', res);
      swal("You added another tournament to your records!", "Yay!", "success");
      return res.data;
    }).catch(function(err){
      console.log('Got an error from the post', err);
    });
  };


});
