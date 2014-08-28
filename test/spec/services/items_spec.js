/**
 * Created by liyanzi on 14-8-28.
 */
'use strict';

describe('Service: itemsService', function () {

   // load the controller's module
   beforeEach(module('anLetusgoApp'));

   var MainCtrl,
       scope;

   // Initialize the controller and a mock scope
   beforeEach(function(){
    module('anLetusgoApp');
      inject(function ($injector) {
          localStorageService = $injector.get('localStorageService');
          service = $injector.get('CartService');
       });
   });

   it('should attach a list of awesomeThings to the scope', function () {
       expect(scope.awesomeThings.length).toBe(3);
   });
});
