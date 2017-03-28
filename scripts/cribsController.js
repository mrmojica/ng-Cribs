angular
	.module('ngCribs')
	.controller('cribsController', function($scope, cribsFactory) {
		$scope.cribs; 

		$scope.priceInfo = {
			min: 0,
			max: 1000000
		}
		cribsFactory.getCribs().then(function(data) {

			$scope.cribs = data;
			console.log($scope.cribs)
		}), function(error) {
			console.log(error);
		};

	});