angular.module('MS', [
    'ngRoute',
	'ngCookies',
    'MS.home',
	'MS.achievements',
    'MS.connections',
    'MS.finances',
	'MS.buy',
	'MS.orders', 
	'ngAnimate',
	'plunker',
	'MS.events',
    'MS.conchild',
	'MS.event'
])
.config(function($routeProvider) {
})
.controller('MainCtrl', function($scope) {
   $scope.Hello = "Hello, Bitch"; 
})
.run( function($rootScope, $location, $cookies) {
    if($cookies.get("auth")){
		$location.path('app/home');
	}
	else{
		 document.location.href='index.html';		
	}
});