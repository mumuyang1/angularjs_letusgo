'use strict';

angular.module('anLetusgoApp')
    .controller('CartCtrl', function ($scope) {
      var cartProduct = JSON.parse(localStorage.getItem('cartProduct'));
      var cartSums = JSON.parse(localStorage.getItem('cartSum'));
      $scope.cartItems = cartProduct;
      $scope.total = getTotal(cartProduct);

      $scope.addButton = function(cartItem){
        _.forEach(cartProduct,function(cartProduct){
          if(cartProduct.items.name === cartItem.name){
          cartProduct.inputCount += 1;
          $scope.cartsums++;
          $scope.$parent.addCartSum(cartItem);
          }
        });
        $scope.total = getTotal(cartProduct);
        localStorage.setItem('cartProduct',JSON.stringify(cartProduct));
        localStorage.setItem('cartSum',JSON.stringify($scope.cartsums));
      };

      $scope.reduceButton = function(cartItem){
        _.forEach(cartProduct,function(cartProduct){
          if(cartProduct.items.name === cartItem.name){
            if(cartProduct.inputCount <= 1){
               cartProduct.inputCount = 1;
            }else{
              cartProduct.inputCount -= 1;
              $scope.cartsums--;
              console.log(cartSums);
             $scope.$parent.addCartSum(cartItem);
            }
          }
        });
        $scope.total = getTotal(cartProduct);
        localStorage.setItem('cartProduct',JSON.stringify(cartProduct));
        localStorage.setItem('cartSum',JSON.stringify($scope.cartsums));
      };

      $scope.deleteButton = function(cartItem){
        for(var i = 0; i < cartProduct.length; i++){
          if(cartProduct[i].items.name === cartItem.name){
           $scope.cartsums = $scope.cartsums - cartProduct[i].inputCount;
           $scope.$parent.addCartSum(cartItem);
           cartProduct = _.without(cartProduct,cartProduct[i]);
          }
        }
        $scope.cartItems = cartProduct;
        $scope.total = getTotal(cartProduct);
        localStorage.setItem('cartProduct',JSON.stringify(cartProduct));
        localStorage.setItem('cartSum',JSON.stringify($scope.cartsums));
      }
    });

function getTotal(cartProduct){
    var total = 0;
    _.forEach(cartProduct,function(cartProduct){
        total += cartProduct.items.price * cartProduct.inputCount;
    });

    return total;
}
