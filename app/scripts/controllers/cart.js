'use strict';

angular.module('anLetusgoApp')
    .controller('CartCtrl', function ($scope, CartItemService,localStorageService) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma',
            'LocalStorageModule'
        ];

        $scope.cartItems = CartItemService.get('cartProduct');
        $scope.cartsums = CartItemService.get('cartSum');
        $scope.total = CartItemService.getTotal($scope.cartItems);


        $scope.addButton = function (cartItem) {

            $scope.$parent.add(cartItem, $scope.cartItems);
            $scope.cartItems = CartItemService.get('cartProduct');
            $scope.total = CartItemService.getTotal($scope.cartItems);

        };

        $scope.reduceButton = function (cartItem) {

            $scope.$parent.reduce(cartItem, $scope.cartItems);
            $scope.cartItems = CartItemService.get('cartProduct');
            $scope.total = CartItemService.getTotal($scope.cartItems);
        };

        $scope.deleteButton = function (cartItem) {
            $scope.$parent.delete(cartItem, $scope.cartItems);
            $scope.cartItems = CartItemService.get('cartProduct');
            $scope.total = CartItemService.getTotal($scope.cartItems);
        }
    });
