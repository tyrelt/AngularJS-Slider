Slider.controller('sliderController',
	function ($scope, $timeout) {
		$scope.slides = [
			{
				name: 'test1',
				content: 'test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 '
			},
			{
				name: 'test2',
				content: 'test2'
			},
			{
				name: 'test3',
				content: 'test3'
			},
			{
				name: 'test4',
				content: 'test4'
			},
			{
				name: 'test5',
				content: 'test5'
			}
		];
		$scope.index = 0;
		$scope.timer = 0;
		function counter() {
			$scope.timer ++;
			$timeout(counter, 1000);
		}
		counter();
		$scope.next = function() {
			if ($scope.index == $scope.slides.length - 1) {
				$scope.index = 0;
				$scope.timer = 0;
			}
			else {
				$scope.index ++;
				$scope.timer = 0;
			}
		};
		$scope.back = function() {
			if ($scope.index === 0) {
				$scope.index = $scope.slides.length - 1;
				$scope.timer = 0;
			}
			else {
				$scope.index --;
				$scope.timer = 0;
			}
		};
		$scope.activate = function(index) {
			$scope.index = index;
			$scope.timer = 0;
		};
		// function activate(index) {

		// }
		$scope.$watch('index', function() {
			$scope.slides.forEach(function(item) {
				item.visible = false;
			});
			$scope.slides[$scope.index].visible = true;
		});
		$scope.$watch('timer', function() {
			if ($scope.timer > 3) {
				
				$scope.next();
			}
		});
	}
);