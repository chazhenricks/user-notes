"use strict";

app.run(function($rootScope, $location, FIREBASE_CONFIG, AuthFactory) {
  firebase.initializeApp(FIREBASE_CONFIG);
});


app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/register', {
      templateUrl: 'partials/song-list.html',
      controller: 'RegisterCtrl'
    })
    .when('/login', {
      templateUrl: 'partials/auth.html',
      controller: 'AuthCtrl'
    })
    .when('/notes', {
      templateUrl: 'partials/notes.html',
      controller: 'NotesCtrl'
    })
    .when('/new', {
      templateUrl: 'partials/new.html',
      controller: 'NewCtrl'
    })
    .otherwise('/auth');
}]);
