/**
 * Login controller.
 */
DrupalHub.controller('loginCtrl', function($scope, $http, SERVER) {
  $scope.user = {
    name: '',
    pass: ''
  };

  $scope.user.login = function() {
    $scope.nameError = false;
    $scope.passError = false;
    $scope.showLoginResultsFail = false;
    $scope.showLoginResultsSucess = false;
    $scope.loginResults = '';

    $scope.error = {
      name: '',
      pass: ''
    };

    if ($scope.user.name == '') {
      $scope.nameError = true;
      $scope.error.name = 'You need to provide user name!';
    }

    if ($scope.user.pass == '') {
      $scope.passError = true;
      $scope.error.pass = 'You need to provide a password';
    }

    if ($scope.loginForm.$valid) {
      var response = $http.get(SERVER + 'login',{
        headers: {'Authorization': 'Basic ' + Base64.encode($scope.user.name + ':' + $scope.user.pass)}
      });

      response.error(function(data, status) {
        if (data.title == 'Bad credentials') {
          $scope.showLoginResultsFail = true;
          $scope.loginResults = 'The credentials you passed are wrong.';
        }
      });

      response.success(function(data, status) {
        $scope.showLoginResultsSucess = true;
        $scope.loginResults = 'Welcome ' + data.data.label + '!';
      });
    }

  }
});

/**
 * Sign up controller.
 */
DrupalHub.controller('registerCtrl', function($scope, $http) {

});
