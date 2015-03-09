(function () {
    'use strict';
    var controllerId = 'dashboard';
    var app = angular.module('app');
    app.controller(controllerId, [ '$rootScope', dashboard]);

    //#region User idle situation configuration

    app.config(['$keepaliveProvider', '$idleProvider','idleTimeConfig', function ($keepaliveProvider, $idleProvider,idleConfig) {
        $idleProvider.idleDuration(idleConfig.idleDuration);
        $idleProvider.warningDuration(idleConfig.warningDuration);
        $idleProvider.autoResume(false);
        $keepaliveProvider.interval(idleConfig.interval);
    }]);

    //#endregion
   

    function dashboard(  $rootScope) {
       


        var vm = this;
        vm.news = {
            title: '',
            description: ''
        };
        vm.messageCount = 0;
        vm.people = [];
        vm.title = 'Dashboard';

        activate();

        function activate() {
            if (!$rootScope.isAuthenticated) {
                window.location = '#/';
                return;
            }

        }
       
      
    }
})();