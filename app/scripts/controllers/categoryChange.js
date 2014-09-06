'use strict';
angular.module('anLetusgoApp')
  .controller('CategoryChangeCtrl', function ($scope, $location, categoryManageService) {
     $scope.$emit('to-parent-productManageActive');
  });
