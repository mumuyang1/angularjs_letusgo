'use strict';

describe('Controller: CartCtrl', function () {


  beforeEach(module('anLetusgoApp'));

  var CartCtrl,$controller,cartItemService,
    scope,createController,$scope,cartProduct,store;


  beforeEach(inject(function ($injector) {
    scope = $injector.get('$rootScope').$new();
    $controller = $injector.get('$controller');

    cartItemService = $injector.get('CartItemService');

    createController = function(){

      return $controller('CartCtrl', {
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

      store = {};

      spyOn(cartItemService, 'get').andCallFake(function (key) {
       return store[key];
       });

      spyOn(cartItemService, 'set').andCallFake(function (key, value) {
         return store[key] = value;
       });

  }));

  it('should get ok',function(){

      cartItemService.set('cartProduct',cartProduct);
      cartItemService.set('cartSum',1);
      createController();
      expect(scope.cartItems.length).toBe(1);
      expect(scope.cartItems[0].items.name).toEqual('水杯');
      expect(scope.cartsums).toBe(1);
  });


  it('should get total ok',function(){

      spyOn(cartItemService,'getTotal').andReturn(16);
      createController();
      expect(cartItemService.getTotal.calls.length).toBe(1);
      expect(scope.total).toBe(16);
  })

  // it('should addButton can do',function(){
  //
  //
  // });
});
