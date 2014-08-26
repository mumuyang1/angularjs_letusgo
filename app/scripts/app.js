'use strict';

/**
 * @ngdoc overview
 * @name anLetusgoApp
 * @description
 * # anLetusgoApp
 *
 * Main module of the application.
 */
angular
  .module('anLetusgoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/shoppingMall', {
        templateUrl: 'views/shoppingMall.html',
        controller: 'ShoppingMallCtrl'
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl'
      })
      .when('/pay', {
        templateUrl: 'views/pay.html',
        controller: 'PayCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
