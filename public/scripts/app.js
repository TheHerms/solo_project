var googleAuthApp = angular.module('faveCourseApp', ['ngRoute']);

googleAuthApp.config(['$routeProvider', function ($routeProvider) {

  $routeProvider
    .when('/login', {
      templateUrl: '/public/views/login.html',
      controller: 'AuthController',
      controllerAs: 'auth',
    })
    .when('/favorites', {
      templateUrl: '/public/views/favorites.html',
      controller: 'FavoritesController as favorites'
      // controllerAs: 'favorites',
    })
    .otherwise({
      redirectTo: 'login',
    });
},
]);
