'use strict';
angular.module('anLetusgoApp')
  .controller('ProductManageCtrl', function ($scope,ItemsService) {
      // $scope.items = ItemsService.getItems();
          $scope.$emit('to-parent-productManageActive');

  });
// 'use strict';
//
// angular.module('anLetusgoApp')
//   .controller('CategoryManageCtrl', function ($scope,CategoryManageService) {
//
//       $scope.categories = CategoryManageService.loadAllCategories();
//       $scope.add = function(){
//         $scope.categories = CategoryManageService.insert($scope.name);
//       };
//
//       $scope.$emit('parent_highLight_active','category');
//
//       $scope.remove = function(index){
//         $scope.categories.splice(index,1);
//       };
//
//       $scope.couldDelete = function(id){
//         return !CategoryManageService.isIncludeProduct(id);
//       };
//
//       $scope.$watch('categories',function(){
//         CategoryManageService.add($scope.categories);
//       },true);
//   });
