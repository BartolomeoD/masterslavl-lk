angular.module('MS.orders', [
    'ngRoute','ngAnimate', 'ui.mask'
])
    .config(function ($routeProvider) {
        $routeProvider.when('/app/orders', {
            templateUrl: 'app/orders/orders.html',
            controller: 'OrdersCtrl'
        })
    })
    .controller('OrdersCtrl', function ($scope, $rootScope) {
        $scope.load_tickets = [
            {
                type: 'гость',
				tickets: [
					{
						id:123,
						show:true
					},
					{
						id:145,
						show:true
					},
					{
						id:167,
						show:true
					}
				
				]				
				
            },
            {
                type: 'детские 4-5 лет',
				tickets: [
					{
						id:163,
						show:true
					},
					{
						id:155,
						show:true
					},
					{
						id:127,
						show:true
					}
				
				]				
				
            }
        ];
		
        $scope.showdesc = function(id,type) {
            $scope.load_tickets[type].tickets[id].show = !$scope.load_tickets[type].tickets[id].show;
        };
    })