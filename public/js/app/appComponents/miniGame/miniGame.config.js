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
            .state('miniGame.other', {
                url : '/other',
                template : '<h1>other</h1>'
            });
        }

        return miniGameModule.config(MiniGameConfig);
    }
);
