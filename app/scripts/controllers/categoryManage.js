'use strict';

angular.module('anLetusgoApp')
.controller('CategoryManageCtrl', function ($scope,categoryManageService) {

    $scope.$emit('to-parent-productManageActive');
    $scope.categories = categoryManageService.getInitCategories();

    $scope.clickAddCategory = false;

    $scope.addCategory = function(){
      $scope.clickAddCategory = true;
    };

    $scope.finishAddCategory = function(newCategoryName){
      $scope.clickAddCategory = false;
      $scope.newCategory = {id:0,name:newCategoryName};
      $scope.categories = categoryManageService.getCategories('categories');
      $scope.newCategory.id = $scope.categories[$scope.categories.length-1].id + 1;
      $scope.categories.push($scope.newCategory);
      categoryManageService.setCategories('categories',$scope.categories);
    };

    $scope.deleteCategory = function(category){
      categoryManageService.deleteCategoryButton(category);
      $scope.categories = categoryManageService.getCategories();
    };


});
