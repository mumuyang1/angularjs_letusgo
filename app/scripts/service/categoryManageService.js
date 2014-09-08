'use strict';
angular.module('anLetusgoApp')
    .service('categoryManageService', function (localStorageService) {

      this.buildCategoryData = function(){

          var categoryData = [
              {id: 1, name: '水果'},
              {id: 2, name: '饮料'},
              {id: 3, name: '生活用品'},
              {id: 4, name: '饰品'}
            ];
          var categories = localStorageService.get('categoryData');

          if(categories === null){
            localStorageService.set('categories', categoryData);
          }
      };

      this.getInitCategories = function(){
        this.buildCategoryData();
        return localStorageService.get('categories');
      };

      this.getCategories = function(){
        return localStorageService.get('categories');
      }

      this.setCategories = function(key,value){
        localStorageService.set(key,value);
      }

      this.deleteCategoryButton = function(category){

        var categories = this.getCategories();
        for(var i = 0; i < categories.length; i++){

          if(categories[i].name === category.name){

            categories = _.without(categories,categories[i]);
            this.setCategories('categories',categories);
          }
        };

        var allProducts = localStorageService.get('allProducts');
        for(var i = 0; i < allProducts.length; i++){
          if(allProducts[i].category === category.name){
            allProducts = _.without(allProducts,allProducts[i]);
          }
        }
        localStorageService.set('allProducts',allProducts);
      };


});
