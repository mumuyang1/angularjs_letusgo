'use strict';

/**
 * @ngdoc function
 * @name anLetusgoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the anLetusgoApp
 */
angular.module('anLetusgoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

function localStorage(){

  var cartProduct = JSON.parse(localStorage.getItem('cartProduct'));

}
