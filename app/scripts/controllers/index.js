angular.module('anLetusgoApp')
    .controller('CartSumsCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

  $scope.cartsums = 0;

  $scope.addCartSum = function(){

      if(!localStorage.getItem('cartSum')){
          var cartSum = 0;
          localStorage.setItem('cartSum',JSON.stringify(cartSum));
          $scope.cartsums = cartSum;
      }
       cartSum = JSON.parse(localStorage.getItem('cartSum'));
       cartSum += 1;
       localStorage.setItem('cartSum',JSON.stringify(cartSum));
       $scope.cartsums = cartSum;
  };

 });
