'use strict';

angular.module('anLetusgoApp')
    .controller('ShoppingMallCtrl', function ($scope, localStorageService,ItemsService) {

        $scope.items = localStorageService.get('allProducts');
        // $scope.items = ItemsService.getItems();
        $scope.$emit('to-parent-shoppingMallActive');

    });
