var DrupalHub = angular.module('DrupalHub', ['DrupalHubConfig']);

// Since we using jekyll we can't use {{}} as interpreter.
DrupalHub.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{ {');
  $interpolateProvider.endSymbol('} }');
});

// Controller that will wrap the entire application.
DrupalHub.controller('headerCtrl', function($scope, $http, SERVER) {
  $scope.userName = 'Login/Sign in';
  $scope.userLink = 'register-signin.html';
  //
  //var response = $http.get(SERVER + 'session/token');
  //
  //response.success(function() {
  //});
});


