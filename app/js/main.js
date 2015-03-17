var DrupalHub = angular.module('DrupalHub', ['DrupalHubConfig', 'ngRoute']);

// Since we using jekyll we can't use {{}} as interpreter.
DrupalHub.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{ {');
  $interpolateProvider.endSymbol('} }');
});

// Controller that will wrap the entire application.
DrupalHub.controller('headerCtrl', function($scope, $http, SERVER) {
  $scope.userName = 'Login/Sign in';
  $scope.userLink = 'register-signin.html';
});

DrupalHub.filter('rawHtml', ['$sce', function($sce){
  return function(val) {
    return $sce.trustAsHtml(val);
  };
}]);
