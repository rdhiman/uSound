var soundsApp = angular.module("mySounds", [
    'ngRoute',
    'mySounds.controllers'
]);

soundsApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/sounds',{
            templateUrl: '/scripts/views/sounds.html',
            controller: 'soundsController'
        }).
        otherwise({
            redirectTo: '/sounds'
        });
}]);
