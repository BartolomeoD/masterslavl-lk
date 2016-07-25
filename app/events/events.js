angular.module('MS.events', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/app/events', {
            templateUrl: 'app/events/events.html',
            controller: 'EventsCtrl'
        })
    })
    .controller('EventsCtrl', function ($scope, $location) {
		dateOne = new Date(2016,5,23);
		dateTwo = new Date(2016,5,23);
		
        $scope.events = 
		[
			{
			id:0,
            image: 'images/events.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            date: new Date(2016,5,23)
			},
			{
			id:1,
            image: 'images/events.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            date: new Date(2016,5,23)
			}
		];
		months=['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];
		$scope.viewMonth = function(month){
			 var getMonth = months[month];
			if(month>11){
				getMonth = months[0];
			}
			if(month<0){
				getMonth = months[11];
			}
			return getMonth;		
		}
        $scope.gotopage = function (id) {
            $location.path('app/event/' + id);
        }
    })