angular.module('anLetusgoApp')
    .controller('CartSumsCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

  $scope.cartsums = JSON.parse(localStorage.getItem('cartSum'));
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
// console.log(item);
    for(var i = 0; i < cartProduct.length; i++) {
// console.log(item.name);
        if(item.name === cartProduct[i].items.name){
            cartProduct[i].inputCount++;
            return true;
        }
    }
    return false;
}
