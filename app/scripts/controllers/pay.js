'use strict';

angular.module('anLetusgoApp')
    .controller('PayCtrl', function ($scope) {
      var cartProduct = JSON.parse(localStorage.getItem('cartProduct'));
      $scope.cartItems = cartProduct;
      $scope.total = getTotal(cartProduct);
    });
