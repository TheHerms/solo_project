googleAuthApp.controller('AuthController', function (AuthFactory) {
  var ctrl = this;
  var authFactory = AuthFactory;
  ctrl.loggedIn = authFactory.checkLoggedIn(); // NOTE: only updated on page load
});
