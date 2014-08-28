'use strict';

angular.module('anLetusgoApp')
    .controller('CartCtrl', function ($scope, CartItemService,localStorageService) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma',
            'LocalStorageModule'
        ];

        $scope.cartItems = localStorageService.get('cartProduct');
        $scope.cartsums = localStorageService.get('cartSum');
        $scope.total = CartItemService.getTotal($scope.cartItems);


        $scope.addButton = function (cartItem) {

            $scope.$parent.add(cartItem, $scope.cartItems);
            $scope.cartItems = localStorageService.get('cartProduct');
            $scope.total = CartItemService.getTotal($scope.cartItems);

        };

        $scope.reduceButton = function (cartItem) {

            $scope.$parent.reduce(cartItem, $scope.cartItems);
            $scope.cartItems = localStorageService.get('cartProduct');
            $scope.total = CartItemService.getTotal($scope.cartItems);
        };

        $scope.deleteButton = function (cartItem) {
            $scope.$parent.delete(cartItem, $scope.cartItems);
            $scope.cartItems = localStorageService.get('cartProduct');
            $scope.total = CartItemService.getTotal($scope.cartItems);
        }
    });
