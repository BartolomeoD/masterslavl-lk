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
.controller('MainCtrl', function($scope, browser) {
   $scope.Hello = "Hello, Bitch"; 
   $scope.ios=browser();
})
.run( function($rootScope, $location, $cookies, browser) {
    if($cookies.get("auth")){
		$location.path('app/home');
		console.log(browser());
	}
	else{
		 document.location.href='index.html';		
	}
})
.service('browser', ['$window', function($window) {

     return function() {

         var userAgent = $window.navigator.userAgent;

        var browsers = {chrome: /chrome/i, safari: /safari/i, firefox: /firefox/i, ie: /internet explorer/i};

        for(var key in browsers) {
            if (browsers[key].test(userAgent)) {
                return key;
            }
       };

       return 'unknown';
    }

}]);