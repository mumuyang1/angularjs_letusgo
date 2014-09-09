'use strict';

  angular.module('anLetusgoApp')
    .service('productManageService', function (localStorageService) {

    this.deleteProductButton = function(name){

      // var categories = this.getCategories();
      // for(var i = 0; i < categories.length; i++){
      //
      //   if(categories[i].name === category.name){
      //
      //     categories = _.without(categories,categories[i]);
      //     this.setCategories('categories',categories);
      //   }
      // };

      var allProducts = localStorageService.get('allProducts');
      for(var i = 0; i < allProducts.length; i++){
        if(allProducts[i].name === name){

          allProducts = _.without(allProducts,allProducts[i]);

        }
      }
      localStorageService.set('allProducts',allProducts);
    };

  });
