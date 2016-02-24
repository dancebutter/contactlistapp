define(
    [
        'angular',
        '../lol.module'
    ],
    function(angular, lolModule) {
        console.info("[INFO] champion data service require loaded.");
        ChampionDataService.$inject = ['$http', '$q'];
        function ChampionDataService($http, $q) {
            var BASE_URL = 'https://na.api.pvp.net/api/lol/na/v1.2/champion/';
            var API_KEY = 'b5372e49-1de2-49cd-bc63-98a7e6564ad9';
            // var MOCK_URL = 'championList.json';
            var MOCK_URL = './js/app/appComponents/lol/services/championList.json';
            var headers = {
                  'User-Agent' : 'Riot-Games-Developer-Portal',
                  'Accept-Language' : 'en-US',
                  'Accept-Charset' : 'ISO-8859-1,utf-8',
                  'Origin' : 'https://developer.riotgames.com'
                };
            var service = {
              test : API_KEY,
              getChampionList : getChampionList,
              getChampionDetailById : getChampionDetailById
            };
            return service;
            function ajaxCall( url ) {
              var deferred = $q.defer();
              var httpConfig = {
                url : url,
                method : 'GET'
              };
              $http(httpConfig)
              .success(function(data) {
                deferred.resolve(data);
              })
              .error(function(error) {
                deferred.reject(error);
              });
              return deferred.promise;
            }

            function getChampionDetailById( championId ) {
              var url = BASE_URL + championId + '?api_key=' + API_KEY;
              return ajaxCall(url);
            }

            function getChampionList() {
              return ajaxCall(MOCK_URL)
            }
        }
        return lolModule.factory('championDataService', ChampionDataService);
    }
);
