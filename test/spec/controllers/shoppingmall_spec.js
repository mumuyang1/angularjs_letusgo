'use strict';

describe('Controller: ShoppingMallCtrl', function () {


  beforeEach(module('anLetusgoApp'));

  var ShoppingMallCtrl,$controller,itemsService,
    scope,createController,$scope,item,CartItemService;


  beforeEach(inject(function ($injector) {
    scope = $injector.get('$rootScope').$new();
    $controller = $injector.get('$controller');

    itemsService = $injector.get('ItemsService');
    CartItemService = $injector.get('CartItemService');

    createController = function(){

      return $controller('ShoppingMallCtrl', {
          $scope: scope,
          ItemsService: itemsService,
      });
    };

    item = [

            {barcode:'ITEM000007',category:'生活用品',name:'水杯',price:'16.00',unit:'个'},
            {barcode:'ITEM000003',category:'水果',name:'菠萝',price:'4.00',unit:'个'}
      ];
    }));

    it('should active is ok',function(){

        spyOn(scope,'$emit');
        createController();
        expect(scope.$emit).toHaveBeenCalledWith('to-parent-shoppingMallActive');
    })

    it('should shopping list can show',function(){

      spyOn(CartItemService,'get').andReturn(item);
      createController();
      expect(scope.items.length).toBe(2);
      expect(scope.items[0].name).toEqual('水杯');
      expect(scope.items[1].price).toBe('4.00')
    });
  });
