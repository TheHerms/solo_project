googleAuthApp.controller('FavoritesController', function (FavoritesService) {
  console.log('loaded FC');
  var ctrl = this;
  ctrl.data = '';
  ctrl.array = [];
  ctrl.addedFavorite = {googleEmail:"", courseName:"", location:"", courseType:"", courseLayout:"", highlight:"", courseConditions:"", price:"", value:"", recommend:"", };

  ctrl.getUserFavorites = function(){
    FavoritesService.getUserFavorites().then(function(res){
      console.log('got user data', res);
      ctrl.array = res;
    });
  };
  ctrl.getUserFavorites();

  //add to faves to the database
  ctrl.addUserFavorites = function() {
    // ctrl.list.courseName = addedFavorite.courseName;
    FavoritesService.addUserFavorites(ctrl.addedFavorite).then(function(res){
      console.log("We getting a response", res);

    });
    ctrl.getUserFavorites();
  };
  ctrl.deleteFavorites = function(id){
    FavoritesService.deleteFavorites(id).then(function(res){
      ctrl.res = res.data;
      console.log('Post Delete bike list:', ctrl.resList);

    })
  }

});
