define(
    [
        'angular',
        './miniGame.module'
    ],
    function(angular, miniGameModule) {
        MiniGameCtrl.$inject = ['$scope'];
        function MiniGameCtrl($scope) {
            $scope.miniGame = "M&M";
            // var canvas = CE.defines("miniGameCanvas").ready(function() {
            //
            // });
        }
        return miniGameModule.controller('miniGameCtrl', MiniGameCtrl);
    }
);
