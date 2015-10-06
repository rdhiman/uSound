var mySoundsControllers = angular.module('mySounds.controllers', []);

mySoundsControllers.controller('soundsController', ['$scope','$http', function($scope,$http) {
    
    var clientId = '8cc63f0717c8413fd5e9271149a86db3';
    
    $scope.findSound = function() {
        console.log($scope.sound);
        $http({
            method: 'GET',
            url: 'https://api.soundcloud.com/tracks?q='+$scope.sound+'&client_id='+clientId
        }).
        success(function (response){
            console.log(response);    
            $scope.sounds = response;
        }).
        error(function (response){
            console.log(error);
        });
    };
}]);