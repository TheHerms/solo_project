googleAuthApp.controller('NavController', function (AuthFactory, $window) {
  var ctrl = this;
  var authFactory = AuthFactory;
  ctrl.displayLogout = false; // should we display the logout option on the DOM?
  ctrl.message = {
    text: false,
    type: 'info',
  };

  authFactory.isLoggedIn()
  .then(function (response) {
    if (response.data.status) {
      ctrl.displayLogout = true;
      authFactory.setLoggedIn(true);
      ctrl.username = response.data.name;
    } else { // is not logged in on server
      ctrl.displayLogout = false;
      authFactory.setLoggedIn(false);
    }
  },

  function () {
    ctrl.message.text = 'Unable to properly authenticate user';
    ctrl.message.type = 'error';
  });

  ctrl.logout = function () {
    authFactory.logout()
      .then(function (response) { // success
        authFactory.setLoggedIn(false);
        ctrl.username = '';
        $window.location.href = '/'; // forces a page reload which will update our NavController
      },

      function (response) { // error
        ctrl.message.text = 'Unable to logout';
        ctrl.message.type = 'error';
      });
  };

});
