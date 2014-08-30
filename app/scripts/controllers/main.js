'use strict';

/**
 * @ngdoc function
 * @name anLetusgoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the anLetusgoApp
 */
angular.module('anLetusgoApp')
  .controller('MainCtrl', function ($scope) {

    $scope.$emit('to-parent-mainActive');
    
  });
