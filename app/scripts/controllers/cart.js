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
          cartSums =  $scope.cartsums++;
          $scope.$parent.addCartSum(cartItem);
          }
        });
        $scope.total = getTotal(cartProduct);
        console.log($scope.total);
        localStorage.setItem('cartProduct',JSON.stringify(cartProduct));
        localStorage.setItem('cartSum',JSON.stringify($scope.cartsums));

      };
      $scope.reduceButton = function(cartItem){};
      $scope.reduceButton = function(cartItem){
        _.forEach(cartProduct,function(cartProduct){
          if(cartProduct.items.name === cartItem.name){
            if(cartProduct.inputCount <= 1){
              cartProduct.inputCount = 1;
            }else{
            cartProduct.inputCount -= 1;
          }
            cartSums =  $scope.cartsums--;
          }
        });
        $scope.total = getTotal(cartProduct);
        localStorage.setItem('cartProduct',JSON.stringify(cartProduct));
        localStorage.setItem('cartSum',JSON.stringify($scope.cartsums));
      };
      // $scope.deleteButton = function(){};
    });



function getTotal(cartProduct){
    var total = 0;
    _.forEach(cartProduct,function(cartProduct){
        total += cartProduct.items.price * cartProduct.inputCount;
    });

    return total;
}



// function deleteButton(id){
//
//     var cartItems = JSON.parse(localStorage.getItem('cartProduct'));
//     var cartSums = JSON.parse(localStorage.getItem('cartSum'));
//     if(!cartItems){
//         cartItems = [];
//     }
//     for(var i = 0; i < cartItems.length; i++) {
//         if (id === cartItems[i].items.barcode) {
//             cartSums = cartSums - cartItems[i].inputCount ;
//             cartItems[i].inputCount = 0;
//
//             $('#'+ id).val( cartItems[i].inputCount);
//             $('#cartItemSum').text(cartSums);
//         }
//     }
//     localStorage.setItem('cartProduct',JSON.stringify(cartItems));
//     localStorage.setItem('cartSum',JSON.stringify(cartSums));
//   }
