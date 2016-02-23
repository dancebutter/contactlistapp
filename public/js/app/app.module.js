define(
    [
        'angular',
        'angular-ui-router'
    ],
    function(angular) {
        console.info('[INFO] app.module loaded.');

        var appModule = angular.module('app', ['ui.router']);
        return appModule;
    }
);
