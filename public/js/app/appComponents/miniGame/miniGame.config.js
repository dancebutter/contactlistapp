define(
    [
        'angular',
        './miniGame.module'
    ],
    function(angular, miniGameModule) {
        MiniGameConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
        function MiniGameConfig($stateProvider, $urlRouterProvider) {

            $stateProvider
            .state('miniGame.fighter', {
                url : '/fighter',
                template : '<fighter-directive></fighter-directive>'
            })
            .state('miniGame.clickDemo', {
                url : '/clickDemo',
                template : '<click-demo-directive></click-demo-directive>'
            })
            .state('miniGame.tiling', {
                url : '/tiling',
                template : '<tiling-directive></tiling-directive>'
            });
        }

        return miniGameModule.config(MiniGameConfig);
    }
);
