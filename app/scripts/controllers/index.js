angular.module('anLetusgoApp')
    .controller('CartSumsCtrl', function ($scope,ItemsService, CartItemService) {
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
        $scope.cartsums = ItemsService.addCart(item);
      };


      $scope.add = function(cartItem,cartProduct){
          $scope.cartsums = CartItemService.add(cartItem,cartProduct);
      };


      $scope.reduce = function(cartItem,cartProduct){
          $scope.cartsums = CartItemService.reduce(cartItem,cartProduct);

      };

      $scope.delete = function(cartItem,cartProduct){
           $scope.cartsums = CartItemService.delete(cartItem,cartProduct);

      };


    });
