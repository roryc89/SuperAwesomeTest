angular.module('boatlaunchApp').factory('slipwayFactory', function() {

  'use strict';

  var createSlipway = function(data) {
    var slipway = {};//Object.create(slipwayMethods);


    angular.extend(slipway, data);
    return slipway;
  };


  return createSlipway;

});
