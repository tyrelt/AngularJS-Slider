var sliderConfig = function($routeProvider) {
	$routeProvider
	.when('/', {
		controller: 'sliderController',
		templateUrl: 'views/sliderView.html'
	})
	.otherwise({
		redirectTo: '/'
	});
};
var Slider = angular.module('Slider', []).config(sliderConfig);