'use strict';

angular.module('anLetusgoApp')
.controller('CategoryManageCtrl', function ($scope,categoryManageService,localStorageService) {

    $scope.$emit('to-parent-productManageActive');
    $scope.categories = categoryManageService.getCategories();
    //$scope.categories = categoryManageService.buildCategoryData();
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


    $scope.cancelAddCategory = function(){
      $scope.clickAddCategory = false;
    };


    $scope.deleteCategory = function(category){
      categoryManageService.deleteCategoryButton(category);
      $scope.categories = categoryManageService.getCategories();
    };


    $scope.clickChangeCategory = false;


    $scope.changeCategory = function(categoryName){
      $scope.clickChangeCategory = true;
      localStorageService.set('categoryToChange',categoryName);
    };


    $scope.finishChangeCategory = function(newName){
      $scope.clickChangeCategory = false;
      $scope.categoryName = localStorageService.get('categoryToChange');
      categoryManageService.changeName($scope.categoryName,newName);
      $scope.categories = categoryManageService.getCategories();
    };


    $scope.cancelChangeCategory = function(){
      $scope.clickChangeCategory = false;
    };

});
