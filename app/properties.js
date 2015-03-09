/**
 * Created by Chintan on 12/2/2014.
 */

(function () {
    'use strict';
    var app = angular.module('app');

    app.constant('idleTimeConfig',{
        idleDuration:5,
        warningDuration:10,
        interval:2
    });
})();
