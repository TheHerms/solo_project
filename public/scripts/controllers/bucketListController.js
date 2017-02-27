googleAuthApp.controller('BucketListController', function (BucketService) {
  console.log('loaded BC');
  var ctrl = this;
  ctrl.data = '';
  ctrl.array = [];
  ctrl.addedBucket = {courseName:"", location:"", whenToGo:""};

  ctrl.getUserBuckets = function(){
    BucketService.getUserBuckets().then(function(res){
      console.log('got bucket data', res);
      ctrl.array = res;
    });
  };
  ctrl.getUserBuckets();

  //add to faves to the database
  ctrl.addUserBuckets = function() {
    BucketService.addUserBuckets(ctrl.addedBucket).then(function(res){
      console.log("Were getting a bucket response", res);
    });
    ctrl.getUserBuckets();
  };

});
