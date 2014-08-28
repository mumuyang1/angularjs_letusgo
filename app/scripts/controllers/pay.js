'use strict';

angular.module('anLetusgoApp')
    .controller('PayCtrl', function ($scope,CartItemService) {

        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma',
            'LocalStorageModule'
        ];

      var cartProduct = CartItemService.get('cartProduct');

      $scope.cartItems = cartProduct;
      $scope.total = CartItemService.getTotal(cartProduct);

      $scope.payButton = function(cartItem){

          $scope.$parent.pay(cartItem,$scope.cartItems);
          $scope.cartItems = CartItemService.get('cartProduct');
          $scope.total = CartItemService.getTotal($scope.cartItems);
      };
    });
