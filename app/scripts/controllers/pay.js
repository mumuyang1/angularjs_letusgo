'use strict';

angular.module('anLetusgoApp')
    .controller('PayCtrl', function ($scope,CartItemService) {
      var cartProduct = JSON.parse(localStorage.getItem('cartProduct'));
      $scope.cartItems = cartProduct;
      $scope.total = CartItemService.getTotal(cartProduct);
    });
