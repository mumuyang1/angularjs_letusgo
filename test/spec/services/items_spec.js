'use strict';

describe('Service: itemsService', function () {
    var cartService,itemsService;

   beforeEach(function(){
    module('anLetusgoApp');
      inject(function ($injector) {
          cartService = $injector.get('CartItemService');
          itemsService = $injector.get('ItemsService');
       });
   });

   it('should items  is right', function(){

       var items = itemsService.getItems();
       expect(items[0].name).toEqual('苹果');
       expect(items[8].name).toEqual('翡翠手镯');
       expect(items.length).toBe(9);
   });

  //  it('should cartSum in addCart in right',function(){
   //
  //      var cartsum = itemsService.addCart();
  //      expect(cartService.get('cartSum')).toHaveBeenCalled();;
   //
  //  });

});
