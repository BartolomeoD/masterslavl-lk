angular.module('MS', [
    'ngRoute',
    'MS.home',
	'MS.achievements',
    'MS.connections',
    'MS.finances',
	'MS.buy',
	'MS.orders', 
	'ngAnimate',
	'plunker',
	'MS.events'
	
])
.config(function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/app/home'})
})
.controller('MainCtrl', function($scope) {
   $scope.Hello = "Hello, Bitch"; 
});