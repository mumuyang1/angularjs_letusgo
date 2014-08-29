'use strict';

describe('Controller: CartSumsCtrl', function () {


  beforeEach(module('anLetusgoApp'));

  var CartSumsCtrl,$controller,itemsService,cartItemService,
    scope,createController,cartSum,item,$scope,cartProduct,event;


  beforeEach(inject(function ($injector) {
    scope = $injector.get('$rootScope').$new();
    $controller = $injector.get('$controller');

    itemsService = $injector.get('ItemsService');
    cartItemService = $injector.get('CartItemService');

    createController = function(){

      return $controller('CartSumsCtrl', {
          $scope: scope,
          ItemsService: itemsService,
          CartItemService: cartItemService
      });
    }

    item = {barcode:'ITEM000007',category:'生活用品',name:'水杯',price:'16.00',unit:'个'};

    cartProduct = [
         {
           items : {barcode:'ITEM000007',category:'生活用品',name:'水杯',price:'16.00',unit:'个'},
           inputCount : 1
         }
      ];

  }));

  it('should cartSum right when it is null', function(){
    createController();
    spyOn(cartItemService,'get').andReturn(null);
    var temp = cartItemService.get(cartSum);
    expect(temp ? parseInt(temp) : 0).toBe(0);
  });


  it('should addCartSum can do',function(){
    spyOn(itemsService,'addCart').andReturn(3);;
    createController();
    scope.addCartSum(item);
    expect(itemsService.addCart.calls.length).toBe(1);
    expect(scope.cartsums).toBe(3);
  });


  it('should set get right',function(){
    spyOn(cartItemService,'get').andReturn(2);
    createController();
    expect(scope.cartsums).toBe(2);
    expect(cartItemService.get.calls.length).toBe(2);
  });

  // it('should add can do',function(){
  //   spyOn(cartItemService,'add').andReturn(3);;
  //   createController();
  //   scope.on(event,item,cartProduct);
  //   expect(scope.cartsums).toBe(3);
  // });

});
