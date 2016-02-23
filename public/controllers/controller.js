var myApp = angular.module('myApp', []);

appController.$inject = ['$scope', '$http', '$log', 'appService'];
function appController($scope, $http, $log, appService) {
    $log.debug("[DEBUG] Controller loaded.");
    $scope.input = {
        name : '',
        email : '',
        number : ''
    };
    $scope.addContact = addContact;
    $scope.removeContact = removeContact;

    function init() {
        getContactList();
    }

    function getContactList() {
        appService.getContactList().then(function(res) {
            $scope.contactList = res;
        },function(error) {

        });
    }

    function addContact() {
        appService.addContact($scope.input).then(function(res) {
            getContactList();
        }, function(error) {

        });
    }

    function removeContact(contactId) {
        appService.removeContact(contactId).then(function(res) {
            getContactList();
        }, function(error) {

        });
    }

    init();

}

myApp.controller('appCtrl', appController);
