'use strict';

angular.module('anLetusgoApp')
    .controller('CartCtrl', function ($scope) {
      var cartProduct = JSON.parse(localStorage.getItem('cartProduct'));
      $scope.cartItems = cartProduct;
      $scope.total = getTotal(cartProduct);
    });



function getTotal(cartProduct){

    var total = 0;
    _.forEach(cartProduct,function(cartProduct){

        total += cartProduct.items.price * cartProduct.inputCount;
    });

    return total;
}
