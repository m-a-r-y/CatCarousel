'use strict';

/**
 * @ngdoc function
 * @name angularCatCarouselApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularCatCarouselApp
 */
//angular.module('angularCatCarouselApp')
//  .controller('MainCtrl', function ($scope) {
//    $scope.awesomeThings = [
//      'HTML5 Boilerplate',
//      'AngularJS',
//      'Karma'
//    ];
//  });


angular.module('angularCatCarouselApp').controller('CarouselDemoCtrl', function ($scope) {
    $scope.myInterval = 5000;
    $scope.images = [
        '../../images/cat1.PNG',
        '../../images/cat2.PNG',
        '../../images/cat3.PNG',
        '../../images/cat4.PNG',
        '../../images/cat5.PNG'
    ];
    var slides = $scope.slides = [];
    $scope.addSlide = function(cowmanfoo) {
        var newWidth = 600 + slides.length;
        slides.push({
            image: cowmanfoo,
            text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
                ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
        });
    };
    for (var i=0; i< $scope.images.length ; i++) {
        $scope.addSlide($scope.images[i]);
    }
});