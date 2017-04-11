
googleAuthApp.service('BucketService', function ($http) {

  //get request
  this.getUserBuckets = function() {
    return $http.get('/private/buckets').then(function(res){
      console.log('first response ', res.data);
      return res.data;

    }).catch(function(err){
      console.log("Got an error form the db", err);
    });
  };

  // post request
  this.addUserBuckets = function(bucket){
    console.log( 'we are getting buckets', bucket);
    return $http.post('/buckets', bucket).then(function(res){
      console.log('Response from the post', res);
      swal("Looks like you got some courses to play!", "Fore!", "success");
      return res.data;
    }).catch(function(err){
      console.log('Got an error from the post', err);
    });
  };


});
