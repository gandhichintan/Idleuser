(function () {
    'use strict';
    
    var app = angular.module('app', [
        // Angular modules 
        'ngRoute',          // routing

        // 3rd Party Modules
        'ui.bootstrap'  ,    // ui-bootstrap (ex: carousel, pagination, dialog),

        'ngIdle'
    ]);
    
    // Handle routing errors and success events
    app.run(['$route','$idle',  function ($route,$idle) {
        // Include $route to kick start the router.
      //  $idle.watch();
    }]);

   
})();