angular.module('anLetusgoApp')
    .controller('CartSumsCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

  $scope.cartsums = 0;

  $scope.addCartSum = function(item){

      if(!localStorage.getItem('cartSum')){
          var cartSum = 0;
          localStorage.setItem('cartSum',JSON.stringify(cartSum));
          $scope.cartsums = cartSum;
      }
       cartSum = JSON.parse(localStorage.getItem('cartSum'));
       cartSum += 1;
       localStorage.setItem('cartSum',JSON.stringify(cartSum));
       $scope.cartsums = cartSum;


      var cartProduct = JSON.parse(localStorage.getItem('cartProduct'));
      var cartItem = new CartItems(item,1);

      if(!cartProduct){
          cartProduct = [];
          cartProduct.push(cartItem);
      }
      else{
          if(!judgeIsExist(cartProduct,item)){
              cartProduct.push(cartItem);
          }
      }
      localStorage.setItem('cartProduct',JSON.stringify(cartProduct));
    }

 });

 function judgeIsExist(cartProduct,item){
    for(var i = 0; i < cartProduct.length; i++) {
        if(item.barcode === cartProduct[i].items.barcode){

            cartProduct[i].inputCount++;
            return true;
        }
    }
    return false;
}

// function judgeCategory(category){
//
//     if(categories.length == 0){
//         return true;
//     }
//     else {
//         for (var j = 0; j < categories.length; j++) {
//             if (category === categories[j]){
//                 return false;
//             }
//         }
//         return true;
//     }
// }
//
// function getTotal(cartProduct){
//
//     var total = 0;
//     _.forEach(cartProduct,function(cartProduct){
//
//         total += cartProduct.items.price * cartProduct.inputCount;
//     });
//     return total;
// }
