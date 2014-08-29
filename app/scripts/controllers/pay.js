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

      $scope.payButton = function(cartItems){

          $scope.$emit('to-parent-pay',cartItems,$scope.cartItems);
          $scope.cartItems = CartItemService.get('cartProduct');
          $scope.total = CartItemService.getTotal($scope.cartItems);
      };
    });
