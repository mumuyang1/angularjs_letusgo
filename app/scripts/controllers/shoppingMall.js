'use strict';

angular.module('anLetusgoApp')
    .controller('ShoppingMallCtrl', function ($scope,CartItemService,ItemsService,$routeParams) {

        // $scope.items = CartItemService.get('allProducts');
        $scope.items = ItemsService.getItems();
        $scope.$emit('to-parent-shoppingMallActive');

        $scope.pageNow = parseInt($routeParams.pageNow);
        $scope.products = ItemsService.loadAllProducts($scope.pageNow);
        $scope.pageTotal = ItemsService.getPageTotal();

        $scope.previous = $scope.pageNow - 1 < 1 ? 1 : $scope.pageNow - 1;
        $scope.next = $scope.pageNow + 1 > _.max($scope.pageTotal) ? _.max($scope.pageTotal) : $scope.pageNow + 1;

    });
