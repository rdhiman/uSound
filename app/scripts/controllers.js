'use strict';

var mySoundsControllers = angular.module('mySounds.controllers', []);

mySoundsControllers.controller('soundsController', ['$scope', '$http', function($scope, $http) {
    
    var clientId = '8cc63f0717c8413fd5e9271149a86db3';
    
    $scope.findSound = function() {
        console.log($scope.sound);
        console.log('findSound clicked');
        $http({
            method: 'GET',
            url: 'https://api.soundcloud.com/tracks?q='+$scope.sound+'&client_id='+clientId+'&limit=2'
        }).
        success(function(response){
            console.log(response);    
            $scope.sounds = response;
        }).
        error(function (response){
            console.log(error);
        });
    };
    
    $scope.playing = false;
    $scope.started = false;
    
    $scope.play = function(id){
        $scope.playing = !$scope.playing;
        if (!$scope.playing) {
            $scope.soundObj.pause();
        } else {
            SC.initialize({
                client_id: clientId
            });
            console.log('play clicked');
            SC.stream('/tracks/'+id).then(function(sound){
                sound.play();
                $scope.started = true;
                $scope.soundObj = sound;
                console.log($scope.soundObj);
            });
        }
    };
    
    this.getBackgroundStyle(imagePath) {
        console.log(imagePath);
        return {
            'background-image': 'url(' + imagePath + ')'
        }        
    };
    
    //$scope.pause = function () {
     //   $scope.soundObj.pause();
    //};
}]);