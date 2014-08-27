angular.module('anLetusgoApp')
    .controller('CartSumsCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

      var temp = localStorage.getItem('cartSum');
      var cartSum = temp ? parseInt(temp) : 0;
      localStorage.setItem('cartSum',JSON.stringify(cartSum));
      $scope.cartsums = JSON.parse(localStorage.getItem('cartSum'));

      $scope.addCartSum = function(item){

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

    _.forEach(cartProduct,function(cartProduct){
      if(item.name === cartProduct.items.name){
          cartProduct.inputCount++;
          return true;
      }
    });
    return false;
}
