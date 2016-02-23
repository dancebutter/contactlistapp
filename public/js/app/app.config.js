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
            // $urlRouterProvider.otherwise('/lol');
            $stateProvider
            .state('mainPage', {
                url : '/main',
                templateUrl : './app/views/main.html'
            })
            .state('lol', {
                url : '/lol',
                templateUrl : './app/appComponents/lol/views/lol.html'
            });
        }
        return appModule.config(AppConfig);
    }
);
