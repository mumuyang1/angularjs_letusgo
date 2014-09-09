'use strict';

angular.module('anLetusgoApp')
    .controller('ShoppingMallCtrl', function ($scope,CartItemService,ItemsService) {

        $scope.items = CartItemService.get('allProducts');
        // $scope.items = ItemsService.getItems();
        $scope.$emit('to-parent-shoppingMallActive');

    });
