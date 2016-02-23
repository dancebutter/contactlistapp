define(
    [
        'angular',
        './app.module'
    ],
    function(angular, appModule) {
        AppController.$inject = ['$scope'];
        function AppController($scope) {
            $scope.test = 'Test Require';
        }
        return appModule.controller('appCtrl', AppController);
    }
);
