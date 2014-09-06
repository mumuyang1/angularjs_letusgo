'use strict';
angular.module('anLetusgoApp')
  .controller('CategoryAddCtrl', function ($scope, categoryManageService) {

     $scope.$emit('to-parent-productManageActive');

  });
