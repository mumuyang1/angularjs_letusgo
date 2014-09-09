'use strict';

  angular.module('anLetusgoApp')
    .service('productManageService', function (localStorageService) {

    this.deleteProductButton = function(name){

      var allProducts = localStorageService.get('allProducts');
      for(var i = 0; i < allProducts.length; i++){
        if(allProducts[i].name === name){

          allProducts = _.without(allProducts,allProducts[i]);
        }
      }
      localStorageService.set('allProducts',allProducts);
    };


    this.changeProduct = function(productToBeChange,newName,newPrice,newUnit,newCategory){

      var allProducts = localStorageService.get('allProducts');;

      _.forEach(allProducts,function(product){
        if(product.name === productToBeChange){
            product.name = newName;
            product.price = newPrice;
            product.unit = newUnit;
            product.category = newCategory;
            localStorageService.set('allProducts',allProducts);
        };
      });

};






















  });
