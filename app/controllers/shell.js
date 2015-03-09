(function () { 
    'use strict';
    
    var controllerId = 'shell';
    angular.module('app').controller(controllerId,
        ['$rootScope', '$scope', '$idle', '$modal','idleTimeConfig', shell]);

    function shell($rootScope, $scope, $idle, $modal,idleConfig) {
        var vm = this;

        vm.busyMessage = 'Please wait ...';
        vm.isBusy = true;
        vm.spinnerOptions = {
            radius: 40,
            lines: 7,
            length: 0,
            width: 30,
            speed: 1.7,
            corners: 1.0,
            trail: 100,
            color: '#F58A00'
        };

        activate();

        function activate() {
            $rootScope.isAuthenticated = false;
        }


        $scope.started = true;
        $scope.countdownTime = idleConfig.warningDuration;
        $scope.max = idleConfig.warningDuration;

        function closeModals() {
            if ($scope.warning) {
                $scope.warning.close();
                $scope.warning = null;
            }

            if ($scope.timedout) {
                $scope.timedout.close();
                $scope.timedout = null;
            }
        }

        //Check for idle start
        $scope.$on('$idleStart', function () {
            closeModals();
            if($rootScope.isAuthenticated) {
                $scope.warning = $modal.open({
                    templateUrl: 'warning-dialog.html',
                    windowClass: 'modal-warning',
                    scope:$scope,
                    backdrop:'static'
                });
            }
        });

        //listen to idle end event
        $scope.$on('$idleEnd', function () {
            closeModals();
        });

        //check idle timeout and redirect user to login page
        $scope.$on('$idleTimeout', function () {
            closeModals();
            $scope.timedout = $modal.open({
                templateUrl: 'timedout-dialog.html',
                windowClass: 'modal-danger',
                backdrop:'static'
            });
            window.location = '#/';
            setTimeout(function(){
                closeModals();
            },3000);
            $idle.unwatch();

        });

        $scope.start = function () {
            closeModals();
            $idle.watch();
            $scope.started = true;
        };

        $scope.restart = function (){
            closeModals();
            $idle.unwatch();
            $idle.watch();
            $scope.started = true;
        };

    };
})();