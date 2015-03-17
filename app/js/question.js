DrupalHub.controller('questionCtrl', function($scope, $http, SERVER) {
  $http.get(SERVER + 'question').
    success(function(data, status) {
      $scope.questions = data.data;
    });
});
