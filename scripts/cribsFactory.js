angular
	.module('ngCribs')
	// $http is used to get post put delete 
	.factory('cribsFactory', function($http) {
		
		//create a fetch data function to pass into controller
		function getCribs() {
			return $http.get('data/data.json');
		}

		return {
			getCribs: getCribs
		}
	})