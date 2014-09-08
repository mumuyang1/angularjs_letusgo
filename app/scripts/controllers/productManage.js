'use strict';
angular.module('anLetusgoApp')
  .controller('ProductManageCtrl', function ($scope,localStorageService){

      $scope.items = localStorageService.get('allProducts');
      $scope.$emit('to-parent-productManageActive');


      $scope.clickAddProduct = false;


      $scope.addProduct = function(){
        $scope.clickAddProduct = true;
      };


      $scope.finishAddProduct = function(name,price,unit){
        $scope.clickAddProduct = false;
        // $scope.newCategory = {id:0,name:newCategoryName};
        // $scope.categories = categoryManageService.getCategories('categories');
        // $scope.newCategory.id = $scope.categories[$scope.categories.length-1].id + 1;
        // $scope.categories.push($scope.newCategory);
        // categoryManageService.setCategories('categories',$scope.categories);
      };


      $scope.cancelAddProduct = function(){
        $scope.clickAddProduct = false;
      };


      $scope.clickChangeProduct = false;


      $scope.changeProduct = function(categoryName){
        $scope.clickChangeProduct = true;
        // localStorageService.set('toBeChange',categoryName);
      };


      $scope.finishChangeProduct = function(newName){
        $scope.clickChangeProduct = false;
        // $scope.categoryName = localStorageService.get('toBeChange');
        // categoryManageService.changeName($scope.categoryName,newName);
        // $scope.categories = categoryManageService.getCategories();
      };


      $scope.cancelChangeProduct = function(){
        $scope.clickChangeProduct = false;
      };





  });
