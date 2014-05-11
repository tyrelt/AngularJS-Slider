// Set up the sliderApp namespace--no need for routing here, really
var sliderApp = angular.module('sliderApp', []);

// Set up our slider as a standalone custom directive, so it's reusable
// (Note the camel cased "mySlider" vs., in index.html, <my-slider>: intentional)
sliderApp.directive('mySlider', function() {
    return {
        restrict: 'E', // So we can invoke it as a standalone element
        templateUrl: 'views/sliderView.html',
        controller: 'sliderController'
    };
});