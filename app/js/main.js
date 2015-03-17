var DrupalHub = angular.module('DrupalHub', ['DrupalHubConfig']);

// Since we using jekyll we can't use {{}} as interpreter.
DrupalHub.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{ {');
  $interpolateProvider.endSymbol('} }');
});

// Controller for the title.
DrupalHub.controller('wrapper', function($scope, SERVER) {
  $scope.foo = SERVER;
});
