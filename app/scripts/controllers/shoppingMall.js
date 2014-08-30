
angular.module('anLetusgoApp')
    .controller('ShoppingMallCtrl', function ($scope, ItemsService) {

        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma',
            'LocalStorageModule'
        ];

        $scope.items = ItemsService.getItems();
        $scope.$emit('to-parent-shoppingMallActive');

    });
