angular.module('anLetusgoApp')
    .controller('CartSumsCtrl', function ($scope,ItemsService, CartItemService) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma',
            'LocalStorageModule'
        ];

      var temp = CartItemService.get('cartSum');
      var cartSum = temp ? parseInt(temp) : 0;

        CartItemService.set('cartSum',cartSum);
      $scope.cartsums = CartItemService.get('cartSum');


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

      $scope.pay = function(cartItem,cartProduct){
            $scope.cartsums = CartItemService.pay(cartItem,cartProduct);

        };


    });
