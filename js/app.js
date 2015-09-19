var johnCenaApp = angular.module('johnCenaApp',['ui.router']);

johnCenaApp.controller('AudioController', function($scope) {
	/*
	var audio = new Audio('/johncenaedited.mp3');

	$scope.playJohnCena = function() {
		audio.load();
		audio.play();
	}
	*/

	$scope.clickDown = function() {
		$scope.buttonImageURL = "img/button pressed.png";
	}

	$scope.clickUp = function() {
		$scope.buttonImageURL = "img/button unpressed.png";
	}

	$scope.buttonImageURL = "img/button unpressed.png";
	
});

johnCenaApp.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/");

		$stateProvider
			.state('button', {
				url: '/',
				templateUrl: 'partials/button.html',
				controller: 'AudioController'
			})
});