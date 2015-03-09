(function () {
    'use strict';
    var controllerId = 'admin';
    angular.module('app').controller(controllerId, ['$rootScope', admin]);

    function admin($rootScope) {
       

        var vm = this;
        vm.title = 'Admin';

        activate();

        function activate() {
            if (!$rootScope.isAuthenticated) {
                window.location = '#/';
                return;
            }

        }
    }
})();