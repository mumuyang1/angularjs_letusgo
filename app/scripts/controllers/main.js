'use strict';

angular.module('anLetusgoApp')
  .controller('MainCtrl', function ($scope) {

    $scope.$emit('to-parent-mainActive');

  });
