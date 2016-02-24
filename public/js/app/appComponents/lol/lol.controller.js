define(
    [
        'angular',
        './lol.module'
    ],
    function(angular, lolModule) {
        LolCtrl.$inject = ['$scope'];
        function LolCtrl($scope) {
            $scope.test = "Lol Test page";
        }
        return lolModule.controller('lolCtrl', LolCtrl);
    }
);
