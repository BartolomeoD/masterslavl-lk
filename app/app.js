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
	'MS.event',
	'ng.deviceDetector'
])
.config(function($routeProvider) {
})
.controller('MainCtrl', function($scope, browser,deviceDetector) {
   $scope.Hello = "Hello, Bitch"; 
    var vm = this;
    vm.data = deviceDetector;
    vm.allData = JSON.stringify(vm.data, null, 2);
	console.log(vm.allData);
	$scope.Hello = vm.data.os;
	$scope.position = {'position':'fixed'};
	if((vm.data.os==="android") || (vm.data.os==="ios")){
		$scope.position = {'position':'absolute','height':'100%'};
	}
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