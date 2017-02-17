googleAuthApp.controller('FavoritesController', function (FavoritesService) {
  console.log('loaded FC');
  var ctrl = this;
  ctrl.data = '';
  ctrl.array = [];
  // ctrl.list = {courseName:"", review:"", pros:"", cons""}

ctrl.getUserFavorites = function(){
  FavoritesService.getUserFavorites().then(function(res){
    console.log('got user data', res);
   ctrl.array = res;
 });
};

ctrl.getUserFavorites();

//add to faves to the database
// ctrl.addFaves = function() {
//   FavoritesService.addFaves().then(function(res){
//     console.log("Error getting a response", res);
//     ctrl.getFaves();
//   })
// }

});
