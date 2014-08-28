'use strict';

angular.module('anLetusgoApp')
    .controller('CartCtrl', function ($scope,CartItemService){

      $scope.cartItems = JSON.parse(localStorage.getItem('cartProduct'));
      $scope.cartsums = JSON.parse(localStorage.getItem('cartSum'));
      $scope.total = CartItemService.getTotal($scope.cartItems);


      $scope.addButton = function(cartItem){

         $scope.$parent.add(cartItem,$scope.cartItems);
         $scope.cartItems = JSON.parse(localStorage.getItem('cartProduct'));
         $scope.total = CartItemService.getTotal($scope.cartItems);

      };

      $scope.reduceButton = function(cartItem){

          $scope.$parent.reduce(cartItem,$scope.cartItems);
          $scope.cartItems = JSON.parse(localStorage.getItem('cartProduct'));
          $scope.total = CartItemService.getTotal($scope.cartItems);
      };

      $scope.deleteButton = function(cartItem){
          $scope.$parent.delete(cartItem,$scope.cartItems);
          $scope.cartItems = JSON.parse(localStorage.getItem('cartProduct'));
          $scope.total = CartItemService.getTotal($scope.cartItems);
      }
    });
