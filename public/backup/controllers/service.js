AppService.$inject = ['$http', '$q', '$log'];
function AppService($http, $q, $log) {
    var service = {
        getContactList : getContactList,
        addContact : addContact,
        removeContact : removeContact
    };

    return service;

    function getContactList() {
        var deferred = $q.defer();

        $http.get('/contactlist')
        .success(function(res) {
            deferred.resolve(res);
        })
        .error(function(error) {
            $log.error("[ERROR] get contact list failed : " + error);
            deferred.reject(error);
        });

        return deferred.promise;
    }

    function addContact(input) {
        var deferred = $q.defer();
        var httpConfig = {
            'url' : '/contactlist',
            'method' : 'POST',
            'data' : input
        };
        $http(httpConfig).then(function(res) {
            deferred.resolve(res);
        }, function(error) {
            $log.error("ERROR add contact failed : " + error);
            deferred.reject(error);
        });
        return deferred.promise;
    };

    function removeContact( contactId ) {
        var deferred = $q.defer();
        $log.debug("[DEBUG] remove id : " + contactId);
        var httpConfig = {
            'url' : '/contactlist/' + contactId,
            'method' : 'DELETE',
            'data' : contactId
        };
        $http(httpConfig).then(function(res) {
            deferred.resolve(res);
        }, function(err) {
            deferred.reject(err);
        });
        return deferred.promise;
    }
}

myApp.factory('appService', AppService);
