'use strict';

/**
 * @ngdoc function
 * @name angularCatCarouselApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularCatCarouselApp
 */
angular.module('angularCatCarouselApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
