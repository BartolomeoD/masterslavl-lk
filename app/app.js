angular.module('MS', [
    'ngRoute',
    'MS.home',
    'MS.connections',
    'MS.achievements',
    'MS.finances',
	'MS.buy'
	
])
.config(function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/app/home'})
})
.controller('MainCtrl', function($scope) {
   $scope.Hello = "Hello, Bitch"; 
});