(function () {
    'use strict';

    var controllerId = 'login';
    var app = angular.module('app');
    app.controller(controllerId, ['$scope', '$rootScope','$idle', loginController]);

   

    function loginController($scope, $rootScope,$idle) {

        $scope.submitted = false;

        $scope.username = '';
        $scope.password = '';
        $scope.loginFail = '';

        $scope.signIn = function () {
            if ($scope.frmLogin.$valid) {
                if ($scope.username == 'test' && $scope.password == 'test') {
                    window.location = '#/dashboard'
                    $rootScope.isAuthenticated = true;
                    $idle.watch();

                } else {
                    $scope.loginFail = 'invalid credentials';
                }
            } else {
                $scope.submitted = true;
            }
        }


    }

  
})();

