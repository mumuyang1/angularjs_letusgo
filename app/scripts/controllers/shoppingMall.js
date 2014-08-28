
angular.module('anLetusgoApp')
    .controller('ShoppingMallCtrl', function ($scope, ItemsService,localStorageService) {

        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma',
            'LocalStorageModule'
        ];

        $scope.items = ItemsService.getItems();
        localStorageService.set('allItems',($scope.items));

    });

