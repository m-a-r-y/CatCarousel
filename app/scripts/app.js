'use strict';

/**
 * @ngdoc overview
 * @name angularCatCarouselApp
 * @description
 * # angularCatCarouselApp
 *
 * Main module of the application.
 */
angular
  .module('angularCatCarouselApp', [
    'ngRoute', 'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'CarouselDemoCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
