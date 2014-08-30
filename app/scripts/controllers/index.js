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


      $scope.$on('to-parent-add',function(add,cartItems,cartProduct){
          $scope.cartsums = CartItemService.add(cartItems,cartProduct);
      });


      $scope.$on('to-parent-reduce',function(reduce,cartItems,cartProduct){
          $scope.cartsums = CartItemService.reduce(cartItems,cartProduct);
      });


      $scope.$on('to-parent-delete',function(event,cartItems,cartProduct){
          $scope.cartsums = CartItemService.delete(cartItems,cartProduct);
      });


      $scope.$on('to-parent-pay',function(pay,cartItems,cartProduct){
          $scope.cartsums = CartItemService.pay(cartItems,cartProduct);
      });

    });
