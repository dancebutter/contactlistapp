define(
    [
        'angular',
        '../contactList.module'
    ],
    function(angular, contactListModule) {
        ContactListDirective.$inject = [];
        function ContactListDirective() {
            link.$inject = ['scope', 'element', 'attr'];
            function link(scope, element, attr) {

            }

            controller.$inject = ['$scope', '$http', '$log', 'contactListDataService'];
            function controller($scope, $http, $log, contactData) {
                $scope.test = 'contact list test';

                $log.debug("[DEBUG] Contact List Controller loaded.");
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
                    contactData.getContactList().then(function(res) {
                        $scope.contactList = res;
                    },function(error) {

                    });
                }

                function addContact() {
                    contactData.addContact($scope.input).then(function(res) {
                        getContactList();
                    }, function(error) {

                    });
                }

                function removeContact(contactId) {
                    contactData.removeContact(contactId).then(function(res) {
                        getContactList();
                    }, function(error) {

                    });
                }

                init();
            }

            return {
                restrict : 'E',
                link : link,
                controller : controller,
                templateUrl : './js/app/appComponents/contactList/views/contactList.directive.tmpl.html'
            };
        }
        return contactListModule.directive('contactListDirective', ContactListDirective);
    }
);
