'use strict';

angular.module('anLetusgoApp')
.controller('CategoryManageCtrl', function ($scope,categoryManageService) {

    $scope.$emit('to-parent-productManageActive');
    $scope.categories = categoryManageService.getCategories();
  });
