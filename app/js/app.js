var johnCenaApp = angular.module('johnCenaApp',['ui.router']);

johnCenaApp.controller('AudioController', function($scope) {
	var audio = new Audio('/johncenaedited.wav');

	$scope.playJohnCena = function() {
		audio.load();
		audio.play();
	}
	
});

johnCenaApp.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/button");

		$stateProvider
			.state('button', {
				url: '/button',
				templateUrl: 'partials/button.html',
				controller: 'AudioController'
			})
});