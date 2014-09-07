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

      this.getCategories = function(){
        this.buildCategoryData();
        return localStorageService.get('categories');
      };



});
