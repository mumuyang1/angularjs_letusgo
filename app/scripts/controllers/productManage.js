'use strict';
angular.module('anLetusgoApp')
  .controller('ProductManageCtrl', function ($scope,localStorageService){

      $scope.items = localStorageService.get('allProducts');
      $scope.$emit('to-parent-productManageActive');

      $scope.controlLayout = true;
      $scope.clickAddProduct = false;


      $scope.addProduct = function(){
        $scope.clickAddProduct = true;
        $scope.controlLayout = false;
      };


      $scope.finishAddProduct = function(name,price,unit){
        $scope.clickAddProduct = false;
        $scope.controlLayout = true;
        // $scope.newCategory = {id:0,name:newCategoryName};
        // $scope.categories = categoryManageService.getCategories('categories');
        // $scope.newCategory.id = $scope.categories[$scope.categories.length-1].id + 1;
        // $scope.categories.push($scope.newCategory);
        // categoryManageService.setCategories('categories',$scope.categories);
      };


      $scope.cancelAddProduct = function(){
        $scope.clickAddProduct = false;
        $scope.controlLayout = true;
      };


      $scope.clickChangeProduct = false;


      $scope.changeProduct = function(categoryName){
        $scope.clickChangeProduct = true;
        $scope.controlLayout = false;
        // localStorageService.set('toBeChange',categoryName);
      };


      $scope.finishChangeProduct = function(newName){
        $scope.clickChangeProduct = false;
        $scope.controlLayout = true;
        // $scope.categoryName = localStorageService.get('toBeChange');
        // categoryManageService.changeName($scope.categoryName,newName);
        // $scope.categories = categoryManageService.getCategories();
      };


      $scope.cancelChangeProduct = function(){
        $scope.clickChangeProduct = false;
        $scope.controlLayout = true;
      };





  });
