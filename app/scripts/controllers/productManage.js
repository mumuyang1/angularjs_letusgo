'use strict';
angular.module('anLetusgoApp')
  .controller('ProductManageCtrl', function ($scope,ItemsService) {
    
          $scope.items = ItemsService.getItems();
          $scope.$emit('to-parent-productManageActive');


  });
