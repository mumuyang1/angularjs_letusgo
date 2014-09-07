'use strict';

angular.module('anLetusgoApp')
.controller('CategoryManageCtrl', function ($scope,categoryManageService,localStorageService) {

    $scope.$emit('to-parent-productManageActive');
    $scope.categories = categoryManageService.getCategories();

    $scope.clickAddCategory = false;

    $scope.addCategory = function(){
      $scope.clickAddCategory = true;
    };

    $scope.finishAddCategory = function(newCategoryName){
      $scope.clickAddCategory = false;
      $scope.newCategory = {id:0,name:newCategoryName};
      $scope.categories = localStorageService.get('categories');
      $scope.newCategory.id = $scope.categories[$scope.categories.length-1].id + 1;
      $scope.categories.push($scope.newCategory);
      localStorageService.set('categories',$scope.categories);
    };

});
