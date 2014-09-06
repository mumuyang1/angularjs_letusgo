'use strict';

angular.module('anLetusgoApp')
  .controller('CategoryManageCtrl', function ($scope) {

    $scope.$emit('to-parent-productManageActive');

  });
