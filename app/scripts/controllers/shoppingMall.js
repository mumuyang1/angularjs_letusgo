
angular.module('anLetusgoApp')
    .controller('ShoppingMallCtrl', function ($scope, ItemsService) {
        $scope.items = ItemsService.getItems();
        localStorage.setItem('allItems',JSON.stringify($scope.items));

    });

