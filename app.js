// Set up the sliderApp namespace--no need for routing here
var sliderApp = angular.module('sliderApp', []);

// Set up our slider as a directive: a reusable, standalone component
sliderApp.directive('slider', function() {
    return {
        templateUrl: 'views/sliderView.html'
    };
});