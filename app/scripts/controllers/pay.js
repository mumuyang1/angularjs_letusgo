'use strict';

angular.module('anLetusgoApp')
    .controller('PayCtrl', function ($scope,CartItemService) {
      var cartProduct = JSON.parse(localStorage.getItem('cartProduct'));
      $scope.cartItems = cartProduct;
      $scope.total = CartItemService.getTotal(cartProduct);
      $scope.payButton = function(cartItem){
          $scope.$parent.pay(cartItem,$scope.cartItems);
          $scope.cartItems = JSON.parse(localStorage.getItem('cartProduct'));
          $scope.total = CartItemService.getTotal($scope.cartItems);
      };
    });
