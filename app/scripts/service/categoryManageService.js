'use strict';
angular.module('anLetusgoApp')
    .service('categoryManageService', function (ItemsService,localStorageService) {

      this.getCategories = function () {
        ItemsService.buildCategoryData();
        return localStorageService.get('categories');
      };
});
