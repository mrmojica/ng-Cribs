angular
	.module('ngCribs')
	.controller('cribsController', function($scope, cribsFactory) {
		$scope.cribs; 
		cribsFactory.getCribs().then(function(data) {

			$scope.cribs = data;
			console.log($scope.cribs)
		}), function(error) {
			console.log(error);
		};

		$scope.sayHello = function() {
			console.log("hello!");
		}

	});