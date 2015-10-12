boatlaunchApp.
service('mapDataFetcher', function($http, rootScope) {
  'use strict';

  var service = {}; // define service object

  service.slipwayMarkers = [];

  $http.get('data/slipways.json').success(function(response) {
    console.log(response);
    service.slipwayMarkers = response.data;
    $rootScope.$broadcast('slipwayMarkers', response);
  });

  service.getSlipwayMarkers = function() { // define method on service object
    return service.slipwayMarkers; // returning data that was pulled in $http call
  };

  return service; // returning service to make it ready to be pulled by the controller
});

