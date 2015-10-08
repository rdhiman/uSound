'use strict';

var mySoundsControllers = angular.module('mySounds.controllers', []);

mySoundsControllers.controller('soundsController', ['$scope', '$http', function($scope, $http) {
    
    var clientId = '8cc63f0717c8413fd5e9271149a86db3';
    var trackUrl;
    $scope.findSound = function() {
        console.log($scope.sound);
        console.log('findSound clicked');
        $http({
            method: 'GET',
            url: 'https://api.soundcloud.com/tracks?q='+$scope.sound+'&client_id='+clientId+'&limit=5'
        }).
        success(function(response){
            console.log(response);    
            $scope.sounds = response;
            //console.log($scope.sounds.artwork_url); 
            angular.forEach($scope.sounds, function(val,key) {
                val.artwork_url = val.artwork_url.replace('-large', '-t500x500');
               console.log(val.artwork_url);
            });
        }).
        error(function (response){
            console.log(error);
        });
    };
    
    $scope.playing = false;
    $scope.started = false;
    
    $scope.play = function(id){
       // SC.stream("/tracks/" + id, function(sound) {
        //    $scope.soundObj = sound;
        //    console.log($scope.soundObj);
      //      sound.play();
       // });        
        
        $scope.playing = !$scope.playing;
        if (!$scope.playing) {
            $scope.soundObj.pause();
        } else {
           // $scope.soundObj.play();
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
    

}]);