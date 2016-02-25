define(
    [
        'angular',
        './app.module'
    ],
    function(angular, appModule) {
        console.info("[INFO] app config require loaded.");
        AppConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
        function AppConfig($stateProvider, $urlRouterProvider) {
            console.info("[INFO] app config start.");
            $urlRouterProvider.otherwise('/main');
            $stateProvider
            .state('mainPage', {
                url : '/main',
                templateUrl : './js/app/views/main.html'
            })
            .state('lol', {
                url : '/lol',
                templateUrl : './js/app/appComponents/lol/views/lol.html'
            })
            .state('miniGame', {
                url : '/miniGame',
                templateUrl : './js/app/appComponents/miniGame/views/miniGame.temp.html'
            });
        }
        return appModule.config(AppConfig);
    }
);
