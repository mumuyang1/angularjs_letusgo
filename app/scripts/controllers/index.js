angular.module('anLetusgoApp')
    .controller('CartSumsCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

  $scope.cartsums = JSON.parse(localStorage.getItem('cartSum'));
  $scope.addCartSum = function(item){

      // if(!localStorage.getItem('cartSum')){
      //     cartSum= 0;
      // }
      var temp = localStorage.getItem('cartSum');
      var cartSum = temp ? parseInt(temp) : 0;
      cartSum += 1;
      localStorage.setItem('cartSum',JSON.stringify(cartSum));
      $scope.cartsums = cartSum;
      boughtChange(item,$scope);
    }

 });

function boughtChange(item,scope){


    //  cartSum = JSON.parse(localStorage.getItem('cartSum'));
     //
    //  localStorage.setItem('cartSum',JSON.stringify(cartSum));
    //  scope.cartsums = cartSum;


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


function judgeIsExist(cartProduct,item){

    for(var i = 0; i < cartProduct.length; i++) {
        if(item.name === cartProduct[i].items.name){
            cartProduct[i].inputCount++;
            return true;
        }
    }
    return false;
}
