'use strict';

describe('Controller: PayCtrl', function () {


  beforeEach(module('anLetusgoApp'));

  var $controller,cartItemService,scope,createController,cartProduct,item;

  beforeEach(inject(function ($injector) {
    scope = $injector.get('$rootScope').$new();
    $controller = $injector.get('$controller');

    cartItemService = $injector.get('CartItemService');

    createController = function(){

      return $controller('PayCtrl', {
          $scope: scope,
          CartItemService: cartItemService
      });
    };

    cartProduct = [
         {
           items : {barcode:'ITEM000007',category:'生活用品',name:'水杯',price:'16.00',unit:'个'},
           inputCount : 1
         }
      ];

      item = {barcode:'ITEM000007',category:'生活用品',name:'水杯',price:'16.00',unit:'个'};

      spyOn(cartItemService, 'get').andReturn(cartProduct);
      spyOn(cartItemService,'getTotal').andReturn(16);
  }));

  it('should show is ok',function(){

      spyOn(scope,'$emit');
      createController();
      expect(scope.$emit).toHaveBeenCalledWith('to-parent-cartActive');
      expect(cartItemService.get.calls.length).toBe(1);
      expect(scope.cartItems.length).toBe(1);
      expect(scope.total).toBe(16);
  });

  it('should payButton can do',function(){

      createController();
      spyOn(scope,'$emit');
      scope.payButton(item);
      expect(scope.$emit).toHaveBeenCalledWith('to-parent-pay',item,scope.cartItems);
      expect(cartItemService.get.calls.length).toBe(2);
      expect(cartItemService.getTotal.calls.length).toBe(2);
  });

});
