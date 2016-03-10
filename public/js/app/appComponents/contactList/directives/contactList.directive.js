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

            controller.$inject = ['$scope'];
            function controller($scope) {
                $scope.test = 'contact list test';
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
