'use strict';

/**
 * @ngdoc function
 * @name boatlaunchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the boatlaunchApp
 */

angular.module('boatlaunchApp').controller('mainCtrl',
  function($scope, $http, uiGmapIsReady, slipwayFactory) {

    $scope.showinfo = function() {
      console.log('clicked!!');
    };

    $scope.map = {
      center: {
        latitude: 53,
        longitude: -0.5
      },
      zoom: 8
    };

    $scope.slipwayMarkers = [];

    $scope.options = {
      scrollwheel: false
    };

    $scope.currentSlipway = {s:3,i:3, j:9, latitude:'2323'};
    $scope.isCurrentSlipway = false;

    $scope.windowOptions = {
      visible: false,
    };

    $scope.windowCoords = {
      longitude: 0,
      latitude: 0
    };

    $scope.title = "Window Title!";


    // $scope.onClick = function() {
    //   $scope.windowOptions.visible = !$scope.windowOptions.visible;
    // };

    $scope.closeClick = function() {
      $scope.windowOptions.visible = false;
      // $scope.currentSlipway = null;
      // $scope.isCurrentSlipway = false;
    };

    $scope.title = "Window Title!";

    var markerImage = 'scripts/imagesTemp/markerPin.png';

    uiGmapIsReady.promise(1).then(function(instances) {
      instances.forEach(function(inst) {
        // var map = inst.map;
        // var uuid = map.uiGmap_id;
        // var mapInstanceNumber = inst.instance; // Starts at 1.

        $http.get('data/slipways.json')
          .then(function(response) {

            response.data.forEach(function(slipwayData) {

              slipwayData.click = function(data) {
                $scope.currentSlipway = data.model;
                $scope.title = data.model;
                $scope.isCurrentSlipway = true;

                $scope.windowCoords.latitude = data.model.latitude;
                $scope.windowCoords.longitude = data.model.longitude;
                $scope.windowOptions.visible = true;

                console.log('$scope.windowCoords.latitude: ', $scope.windowCoords.latitude);
                console.log('$scope.windowOptions.visible: ', $scope.windowOptions.visible);
                console.log('This is a ', data);
                //alert('This is a ' + data);
              };


              $scope.slipwayMarkers.push(slipwayData);

            });

            // $scope.slipwayMarkers = response.data;
            console.log('$scope.slipwayMarkers: ', $scope.slipwayMarkers);

          });
      });
    });

  });
