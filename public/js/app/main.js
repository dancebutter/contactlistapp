 define(
     [
         'angular',
         './app.module',
         './app.config',
         './app.controller'
     ],
     function(angular) {
         console.info('[INFO] main.js loaded.');

         angular.element(document).ready(function() {
            angular.bootstrap( document, ['app'], { strictDi : true });
         });
     }
 );
