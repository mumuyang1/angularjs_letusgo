
angular.module('anLetusgoApp')
    .controller('ShoppingMallCtrl', function ($scope) {
        $scope.items = getItems();
        localStorage.setItem('allItems',JSON.stringify($scope.items));
    });

function getItems(){

  return   [
        new Item('ITEM000001','水果','苹果','3.00','斤'),
        new Item('ITEM000002','水果','香蕉','3.50','斤'),
        new Item('ITEM000003','水果','菠萝','4.00','个'),
        new Item('ITEM000004','饮料','雪碧','3.00','瓶'),
        new Item('ITEM000005','饮料','可口可乐','3.00','瓶'),
        new Item('ITEM000006','生活用品','公牛插座','10.00','个'),
        new Item('ITEM000007','生活用品','水杯','16.00','个'),
        new Item('ITEM000008','饰品','钻石项链','160000.00','个'),
        new Item('ITEM000009','饰品','翡翠手镯','200.00','个')
    ];
}
