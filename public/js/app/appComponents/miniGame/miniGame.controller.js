define(
    [
        'angular',
        './miniGame.module',
        'pixi'
    ],
    function(angular, miniGameModule) {
        MiniGameCtrl.$inject = ['$scope'];
        function MiniGameCtrl($scope) {
            $scope.miniGame = "M&M";

        }
        return miniGameModule.controller('miniGameCtrl', MiniGameCtrl);
    }
);
