googleAuthApp.controller('TournamentController', function (TournamentService) {
  console.log('loaded TC');
  var ctrl = this;
  ctrl.data = '';
  ctrl.array = [];
  ctrl.addedTournament = {tournamentName:"", courseName:"", location:"", date:""};

  ctrl.getUserTournaments = function(){
    TournamentService.getUserTournaments().then(function(res){
      console.log('got tournament data', res);
      ctrl.array = res;
    });
  };
  ctrl.getUserTournaments();

  //add to faves to the database
  ctrl.addUserTournaments = function() {
    TournamentService.addUserTournaments(ctrl.addedTournament).then(function(res){
      console.log("Were getting a tournament response", res);
    });
    ctrl.getUserTournaments();
  };

});
